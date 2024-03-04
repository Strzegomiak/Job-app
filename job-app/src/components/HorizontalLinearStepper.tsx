import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Dropzone from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
import useSetLogin from "../hooks/useSetLogin";
//https://www.npmjs.com/package/react-dropzone

type Inputs = {
  name: string;
  email: string;
  phone: number;
  cv?: any;
};

interface HorizontalLinearStepperProps {
  applyJob: string;
}

const steps = [
  {
    label: "Provide full name.",
  },
  {
    label: "Provide e-mail.",
  },
  {
    label: "Provide phone number.",
  },
  {
    label: "Upload your CV file.",
  },
];

const VerticalLinearStepper: React.FC<HorizontalLinearStepperProps> = ({
  applyJob,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useSetLogin();
  const [cvFile, setCvfile] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  console.log(cvFile);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleNext = async () => {
    setIsSubmitting(true);
    const isValid = await trigger(); // sprawdzenie walidacji

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    setIsSubmitting(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const RegisterOptions = {
    name: {
      required: "name is required",
      minLength: {
        value: 3,
        message: "name must have at least 3 charactes ",
      },
    },
    email: {
      required: "email is required",
      minLength: {
        value: 3,
        message: "email must have at least 3 charactes ",
      },
    },
    phone: {
      required: "phone is required",
      minLength: {
        value: 9,
        message: "phone must have 9 charactes ",
      },
      maxLength: {
        value: 9,
        message: "phone must have 9 charactes ",
      },
      pattern: {
        value: /^[0-9]*$/,
        message: "phone must have only numbers",
      },
    },
  };

  const sendResumeFileToDataBase = (resumeForm: any) => {
    axios.post(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/Application.json",
      resumeForm
    );
  };

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    const resumeFile = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      cv: cvFile,
      idUser: currentUser.id,
      JobName: applyJob,
    };
    console.log(resumeFile);
    console.log("test");
    console.log(errors);
    sendResumeFileToDataBase(resumeFile);
    reset();
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {activeStep === 0 && (
                  <Typography>
                    <input
                      {...register("name", RegisterOptions.name)}
                      type="text"
                      placeholder="full name..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                    ></input>
                    {errors.name?.message ? (
                      <Alert severity="error">{errors.name.message}</Alert>
                    ) : null}
                  </Typography>
                )}
                {activeStep === 1 && (
                  <Typography>
                    <input
                      {...register("email", RegisterOptions.email)}
                      type="text"
                      placeholder="e-mail..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                    ></input>
                    {errors.email?.message ? (
                      <Alert severity="error">{errors.email.message}</Alert>
                    ) : null}
                  </Typography>
                )}
                {activeStep === 2 && (
                  <Typography>
                    <input
                      {...register("phone", RegisterOptions.phone)}
                      type="text"
                      placeholder="phone number..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                    ></input>
                    {errors.phone?.message ? (
                      <Alert severity="error">{errors.phone.message}</Alert>
                    ) : null}
                  </Typography>
                )}
                {activeStep === 3 && (
                  <Typography>
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        console.log(acceptedFiles);
                        for (const value of acceptedFiles) {
                          setCvfile(value);
                        }
                        // setCvfile(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section className="bg-red-200 h-20 w-56 flex justify-center items-center">
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              Drop some files here,<br></br> or click to select
                              files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </Typography>
                )}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      type={activeStep == 3 ? "submit" : "button"}
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </form>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          {errors.phone?.message ? (
            <Alert severity="error">{errors.phone.message}</Alert>
          ) : null}
          {errors.name?.message ? (
            <Alert severity="error">{errors.name.message}</Alert>
          ) : null}
          {errors.email?.message ? (
            <Alert severity="error">{errors.email.message}</Alert>
          ) : null}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
