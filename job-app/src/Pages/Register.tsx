import { Alert } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  name: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
        value: 5,
        message: "password must have at least 5 charactes ", //pobawić się dodać w patterns (jedna litera dużza, znak spec itp)
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
        </div>
      </form>
    </div>
  );
};

export default Register;
