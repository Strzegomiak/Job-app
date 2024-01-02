import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SubmitHandler, useForm } from "react-hook-form";

const MainFilter = () => {
  interface IFormInput {
    title: string;
    company: string;
    location: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const minInputLength = 3;

  const registerOption = {
    title: {
      required: "title is required",
      minLength: {
        value: minInputLength,
        message: `title must have at least ${minInputLength} characters`,
      },
    },
    company: {
      required: "company is required",
      minLength: {
        value: minInputLength,
        message: `company must have at least ${minInputLength} characters`,
      },
    },
    location: {
      required: "location is required",
      minLength: {
        value: minInputLength,
        message: `location must have at least ${minInputLength} characters`,
      },
    },
  };

  return (
    <div className="flex w-4/5 h-1/5 justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Ui designer"
            {...register("title", registerOption.title)}
          ></input>
          {errors.title?.message}
        </div>
        <div>
          <input
            type="text"
            placeholder="Name it"
            {...register("company", registerOption.company)}
          ></input>
          {errors.company?.message}
        </div>
        <div>
          <input
            type="text"
            placeholder="Desired Location"
            {...register("location", registerOption.location)}
          ></input>
          {errors.location?.message}
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MainFilter;
