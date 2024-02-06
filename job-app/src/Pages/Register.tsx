import { Alert } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useSign from "../hooks/useSign";
import { IRegisterInputs } from "../types/types";

const Register = () => {
  const { errorMessage, registerUser } = useSign();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
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
          {errors.name?.message ? (
            <Alert severity="error">{errors.name.message}</Alert>
          ) : null}
          <input
            type="text"
            placeholder="Password"
            {...register("password", RegisterOptions.password)}
          />
          {errors.password?.message ? (
            <Alert severity="error">{errors.password.message}</Alert>
          ) : null}
          <button type="submit">Submit</button>
          {errorMessage === "EMAIL_EXISTS" ? (
            <h2>email already in use</h2>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Register;
