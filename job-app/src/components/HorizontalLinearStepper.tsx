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
//https://www.npmjs.com/package/react-dropzone

type Inputs = {
  name: string;
  email: string;
  phone: number;
  cv?: any;
};

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

export default function VerticalLinearStepper() {
  const [cvFile, setCvfile] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  console.log(cvFile);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    const resumeFile = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      cv: cvFile,
    };
    console.log(resumeFile);
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
                      type="text"
                      placeholder="full name..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                      {...register("name")}
                    ></input>
                  </Typography>
                )}
                {activeStep === 1 && (
                  <Typography>
                    <input
                      type="text"
                      placeholder="e-mail..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                      {...register("email")}
                    ></input>
                  </Typography>
                )}
                {activeStep === 2 && (
                  <Typography>
                    <input
                      type="text"
                      placeholder="phone number..."
                      className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                      {...register("phone")}
                    ></input>
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
                    {index === steps.length - 1 ? (
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    )}

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
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
