import { SubmitHandler, useForm } from "react-hook-form";
import { PropsSortValue, ISortInputs, IFormInput } from "../types/types";
import { useContext } from "react";
import FavoritesFlagContex from "../context/FavoritesFlagContex";

interface SortFilterProps {
  passDataFormSort: (sortValue: PropsSortValue) => void;
  passDataFromMain: (data: IFormInput, selectValue: PropsSortValue) => void;
  handleClearAll: () => void;
}

const SortFilter: React.FC<SortFilterProps> = (props) => {
  const { favClicked, setFavClicked } = useContext(FavoritesFlagContex);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ISortInputs>();

  const onSubmit: SubmitHandler<ISortInputs> = (data) => {
    props.passDataFormSort(data);
  };

  const handleReset = (fieldNames: string[]) => {
    const resetValues: any = {};
    fieldNames.forEach((fieldName) => {
      resetValues[fieldName] = "";
    });
    reset(resetValues);
    props.passDataFromMain(
      { title: "", company: "", location: "" },
      { categories: "", type: "", level: "" }
    );
    props.handleClearAll();
  };

  const handleFav = () => {
    setFavClicked((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center gap-8 pt-10 flex-wrap  w-11/12 items-center"
      >
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={handleFav}
            className={`bg-white h-7 rounded-xl border-2 border-gray-300 font-bold w-36 hover:border-gray-500 bg-red-300`}
          >
            {favClicked ? "Hide Favorites" : "Show Favorites"}
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label className=" text-sm font-bold text-gray-500">
            Categories:
          </label>
          <button type="submit">
            <select
              {...register("categories")}
              className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l"
            >
              <option value=""></option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="mobile">Mobile</option>
            </select>
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label className=" text-sm font-bold text-gray-500">Type:</label>
          <button type="submit">
            <select
              {...register("type")}
              className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l"
            >
              <option value=""></option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </select>
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label className=" text-sm font-bold text-gray-500">Level:</label>
          <button type="submit">
            <select
              {...register("level")}
              className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l"
            >
              <option value=""></option>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>{" "}
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => handleReset(["categories", "type", "level"])}
            className="text-gray-400 ml-5"
            type="button"
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default SortFilter;
