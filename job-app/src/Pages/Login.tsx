import logo from "../jobsLogo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import useSign from "../hooks/useSign";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { IloginProps } from "../types/types";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { signUp, signIn, errorMessage } = useSign();
  const navigate = useNavigate();
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const [islogin, setIslogin] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    signIn(data.email, data.password);
    setIslogin((prev) => !prev);
  };

  const RegisterOptions = {
    email: {
      required: "email is required",
      minLength: {
        value: 3,
        message: "email must have at least 3 charactes ",
      },
    },
    password: {
      required: "password is required",
      minLength: {
        value: 6,
        message: "password must have at least 6 charactes ",
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-600">
      <div className="flex flex-col items-center justify-center min-w-80 w-1/4 h-1/2 shadow-lg rounded-xl p-6 border-gray-300 bg-white ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-3 mb-5 "
        >
          <img className="w-60 h-12" src={logo}></img>
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
            placeholder="password..."
            className="h-12 w-72 outline-none focus:outline-none placeholder-blue-300 text-xl rounded-xl border-1 text-blue-300"
            {...register("password", RegisterOptions.password)}
          />
          {errors.password?.message ? (
            <Alert severity="error">{errors.password.message}</Alert>
          ) : null}
          <button
            className="h-12 w-72 bg-blue-600 rounded-xl text-white w-32 hover:bg-blue-700 mt-3"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Link to={"/"}>
          <h2>Go back to Homepage</h2>
        </Link>
        {errorMessage && errorMessage !== "error" ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
