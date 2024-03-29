import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useContext, useEffect } from "react";
import { IFormInput, PropsSortValue } from "../types/types";
import InputSortContext from "../context/InputSortContext";

interface MainFIlterProps {
  isClearAllButtonClilked: boolean;
  setIsClearAllButtonClilked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainFilter: React.FC<MainFIlterProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const { selectValue, setSelectValue, inputValue, setInputValue } =
    useContext(InputSortContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setInputValue({
      title: data.title,
      company: data.company,
      location: data.location,
    });
  };

  const handleReset = (fieldNames: string[]) => {
    const resetValues: any = {};
    fieldNames.forEach((fieldName: string) => {
      resetValues[fieldName] = "";
    });
    reset(resetValues);
  };

  useEffect(() => {
    if (props.isClearAllButtonClilked) {
      handleReset(["title", "company", "location"]);
      props.setIsClearAllButtonClilked(false);
    }
  }, [props.isClearAllButtonClilked]);

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
        className="flex flex-col lg:flex-row w-11/12 justify-between items-center rounded-xl px-10 py-5 shadow-lg bg-white"
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
          <button type="button" onClick={() => handleReset(["title"])}>
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
          <button type="button" onClick={() => handleReset(["company"])}>
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
          <button type="button" onClick={() => handleReset(["location"])}>
            <CancelOutlinedIcon className="text-gray-400" />
          </button>
          {errors.location?.message}
        </div>

        <button
          className="h-16 bg-blue-600  rounded-xl text-white w-32 hover:bg-blue-700"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MainFilter;
