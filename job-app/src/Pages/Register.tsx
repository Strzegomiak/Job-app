import { Alert } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useSign from "../hooks/useSign";
import { IRegisterInputs } from "../types/types";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Register = () => {
  const { signUp, signIn, errorMessageSignUp } = useSign();
  const [isRegisterOK, setIsRegisterOK] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!errorMessageSignUp) {
      navigate("/");
    }
  }, [errorMessageSignUp]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
    console.log("test");
    signUp(data.email, data.password);
    reset();
  };

  const RegisterOptions = {
    email: {
      required: "email is required",
      minLength: {
        value: 3,
        message: "email must have at least 3 charactes ",
      },
      maxLength: {
        value: 30,
        message: "email is too long",
      },
      pattern: {
        value: /^[^@\s]+@[^@\s]+$/,
        message: "email must have correct structure one @, no space",
      },
    },
    name: {
      required: "name is required",
      minLength: {
        value: 3,
        message: "name must have at least 3 charactes ",
      },
      pattern: {
        value: /^[a-zA-Z0-9]*$/,
        message: "name must without special symbols, no spaces",
      },
    },
    password: {
      required: "password is required",
      minLength: {
        value: 6,
        message: "password must have at least 6 charactes ",
      },
      pattern: {
        value: /^(?=.*[A-Z])[^\s]*$/,
        message: "password must have one big letter, no spaces",
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-600">
      <div className="flex flex-col items-center justify-center min-w-80 w-1/4 h-3/5 shadow-lg rounded-xl p-6 border-gray-300 bg-white ">
        {!isRegisterOK ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-3 mb-5"
          >
            <div className="flex flex-col">
              <h1 className="text-5xl text-blue-600 mb-5">Registration.</h1>
              <input
                type="text"
                placeholder="email..."
                className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                {...register("email", RegisterOptions.email)}
              />
              {errors.email?.message ? (
                <Alert severity="error">{errors.email.message}</Alert>
              ) : null}
              <input
                type="text"
                placeholder="name..."
                className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                {...register("name", RegisterOptions.name)}
              />
              {errors.name?.message ? (
                <Alert severity="error">{errors.name.message}</Alert>
              ) : null}
              <input
                type="text"
                placeholder="password..."
                className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
                {...register("password", RegisterOptions.password)}
              />
              {errors.password?.message ? (
                <Alert severity="error">{errors.password.message}</Alert>
              ) : null}
              <button
                type="submit"
                className="h-12 w-72 bg-blue-600 rounded-xl text-white w-32 hover:bg-blue-700 mt-3"
              >
                Submit
              </button>
              {/* {errorMessage === "EMAIL_EXISTS" ? (
                <h2 className="text-xl text-red-600">email already in use</h2>
              ) : null} */}
            </div>
          </form>
        ) : (
          <div>
            <h1 className="text-4xl text-blue-600 mb-5">
              Registration complete.
            </h1>
          </div>
        )}
        <Link to={"/"}>
          <h2>Go back to Homepage</h2>
        </Link>
        {errorMessageSignUp && errorMessageSignUp !== "error" ? (
          <Alert severity="error">{errorMessageSignUp}</Alert>
        ) : null}
      </div>
    </div>
  );
};

export default Register;
