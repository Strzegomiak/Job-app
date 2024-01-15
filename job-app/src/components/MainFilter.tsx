import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const MainFilter = (props: any) => {
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
    props.passDataFromMain(data, props.selectValue);
  };

  const handleReset = (fieldName: string) => {
    reset({ [fieldName]: "" }); // Resetuje tylko określony input
  };

  const minInputLength = 3;

  const registerOption = {
    title: {
      minLength: {
        value: minInputLength,
        message: `title must have at least ${minInputLength} characters`,
      },
    },
    company: {
      minLength: {
        value: minInputLength,
        message: `company must have at least ${minInputLength} characters`,
      },
    },
    location: {
      minLength: {
        value: minInputLength,
        message: `location must have at least ${minInputLength} characters`,
      },
    },
  };

  return (
    <div className="flex  justify-center items-center  ">
      <form
        className="flex flex-col lg:flex-row flex-c w-11/12 justify-between items-center rounded-xl px-10 py-5 shadow-lg bg-white "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 items-center flex-grow">
          <SearchIcon />
          <input
            className="h-16 w-32 2xl:w-52 outline-none focus:outline-none"
            type="text"
            placeholder="Name it"
            {...register("title", registerOption.title)}
          ></input>
          <button type="button" onClick={() => handleReset("title")}>
            <CancelOutlinedIcon className="text-gray-400" />
          </button>
          {errors.title?.message}
        </div>
        <div className="flex gap-4 items-center flex-grow">
          <HomeOutlinedIcon />
          <input
            className="h-16 w-32 2xl:w-52 outline-none focus:outline-none"
            type="text"
            placeholder="Company"
            {...register("company", registerOption.company)}
          ></input>
          <button type="button" onClick={() => handleReset("company")}>
            <CancelOutlinedIcon className="text-gray-400" />
          </button>
          {errors.company?.message}
        </div>
        <div className="flex gap-4 items-center flex-grow">
          <LocationOnOutlinedIcon />
          <input
            className="h-16 w-32 2xl:w-52 outline-none focus:outline-none"
            type="text"
            placeholder="Desired Location"
            {...register("location", registerOption.location)}
          ></input>
          <button type="button" onClick={() => handleReset("location")}>
            <CancelOutlinedIcon className="text-gray-400" />
          </button>
          {errors.location?.message}
        </div>

        <button
          className="h-16 bg-blue-600  rounded-xl text-white w-32"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MainFilter;
