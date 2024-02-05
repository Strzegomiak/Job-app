import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import useSign from "../hooks/useSign";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { errorMessage, registerUser, setErrorMessage } = useSign();
  const { login, logout } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    registerUser(
      data.email,
      data.password,
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBSpAs6VPkYnzvNlrsemvJuRStbtbjNY8"
    );
    setErrorMessage("");
    const user = {
      auth: true,
      email: data.email,
    };
    login(user);
    navigate("/");
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="email"
          {...register("email", RegisterOptions.email)}
        />
        <input
          type="text"
          placeholder="Password"
          {...register("password", RegisterOptions.password)}
        />
        <button type="submit">Submit</button>
        {errorMessage === "INVALID_EMAIL" ? <h2>bad email</h2> : null}
        {errorMessage === "INVALID_LOGIN_CREDENTIALS" ? (
          <h2>bad password</h2>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
