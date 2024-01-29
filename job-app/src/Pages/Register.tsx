import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSign from "../hooks/useSign";

type Inputs = {
  email: string;
  name: string;
  password: string;
};

const Register = () => {
  const { errorMessage, registerUser } = useSign();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("test");
    registerUser(
      data.email,
      data.password,
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBSpAs6VPkYnzvNlrsemvJuRStbtbjNY8"
    );
    reset();
  };
  // const registerUser = async (email: string, password: string) => {
  //   try {
  //     const res = await axios.post(
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBSpAs6VPkYnzvNlrsemvJuRStbtbjNY8",
  //       {
  //         email,
  //         password,
  //         returnSecureToken: true,
  //       }
  //     );
  //     console.log(res);
  //   } catch (ex: any) {
  //     console.log(ex);

  //     setErrorMessage(ex.response.data.message);
  //   }
  // };

  const RegisterOptions = {
    email: {
      required: "email is required",
      minLength: {
        value: 3,
        message: "email must have at least 3 charactes ",
      },
    },
    name: {
      required: "name is required",
      minLength: {
        value: 3,
        message: "name must have at least 3 charactes ",
      },
    },
    password: {
      required: "password is required",
      minLength: {
        value: 6,
        message: "password must have at least 6 charactes ", //pobawić się dodać w patterns (jedna litera dużza, znak spec itp)
      },
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <h1>Registration</h1>
          <input
            type="text"
            placeholder="Email"
            {...register("email", RegisterOptions.email)}
          />
          {errors.email?.message ? (
            <Alert severity="error">{errors.email.message}</Alert>
          ) : null}
          <input
            type="text"
            placeholder="Name"
            {...register("name", RegisterOptions.name)}
          />
          {errors.name?.message ? <h2>{errors.name.message}</h2> : null}
          <input
            type="text"
            placeholder="Password"
            {...register("password", RegisterOptions.password)}
          />
          {errors.password?.message ? <h2>{errors.password.message}</h2> : null}
          <button type="submit">Submit</button>
          {errorMessage === "EMAIL_EXISTS" ? <h2>xxxxx</h2> : null}
        </div>
      </form>
    </div>
  );
};

export default Register;
