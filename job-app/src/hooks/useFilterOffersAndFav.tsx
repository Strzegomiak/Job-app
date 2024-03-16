import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { IFormInput, IJobOffers, PropsSortValue } from "../types/types";
import WishListContext from "../context/WishListContext";
import InputSortContext from "../context/InputSortContext";

const useFilterOffersAndFav = () => {
  const { favOffers } = useContext(WishListContext);
  const { jobOffers }: { jobOffers: IJobOffers[] | undefined } = useFetch();
  const [copyOfJobOffers, setCopyOfJobOffers] = useState<
    IJobOffers[] | undefined
  >(jobOffers);
  const [copyOfFavOffers, setCopyOfFavOffers] =
    useState<IJobOffers[]>(favOffers);
  const { selectValue, inputValue } = useContext(InputSortContext);

  useEffect(() => {
    setCopyOfJobOffers(jobOffers);
  }, [jobOffers]);

  useEffect(() => {
    setCopyOfFavOffers(favOffers);
  }, [favOffers]);

  useEffect(() => {
    passDataFromMain(inputValue, selectValue, jobOffers, favOffers);
  }, [inputValue, selectValue, jobOffers, favOffers]);

  const passDataFromMain = (
    inputValue: IFormInput,
    sortValue: PropsSortValue,
    jobOffers: IJobOffers[] | undefined,
    favOffers: IJobOffers[]
  ) => {
    const filteredJobOffers = jobOffers?.filter(
      (offer) =>
        (!inputValue.title ||
          offer.JobName.toLowerCase().includes(
            inputValue.title.toLowerCase()
          )) &&
        (!inputValue.company ||
          offer.Name.toLowerCase().includes(
            inputValue.company.toLowerCase()
          )) &&
        (!inputValue.location ||
          offer.country
            .toLowerCase()
            .includes(inputValue.location.toLowerCase())) &&
        (!sortValue.categories ||
          offer.Categories.toLowerCase().includes(
            sortValue.categories.toLowerCase()
          )) &&
        (!sortValue.type ||
          offer.Type.toLowerCase().includes(sortValue.type.toLowerCase())) &&
        (!sortValue.level ||
          offer.levelOfExpirience
            .toLowerCase()
            .includes(sortValue.level.toLowerCase()))
    );

    const filteredFavOffers = favOffers.filter(
      (offer) =>
        (!inputValue.title ||
          offer.JobName.toLowerCase().includes(
            inputValue.title.toLowerCase()
          )) &&
        (!inputValue.company ||
          offer.Name.toLowerCase().includes(
            inputValue.company.toLowerCase()
          )) &&
        (!inputValue.location ||
          offer.country
            .toLowerCase()
            .includes(inputValue.location.toLowerCase())) &&
        (!sortValue.categories ||
          offer.Categories.toLowerCase().includes(
            sortValue.categories.toLowerCase()
          )) &&
        (!sortValue.type ||
          offer.Type.toLowerCase().includes(sortValue.type.toLowerCase())) &&
        (!sortValue.level ||
          offer.levelOfExpirience
            .toLowerCase()
            .includes(sortValue.level.toLowerCase()))
    );

    setCopyOfJobOffers(filteredJobOffers);
    setCopyOfFavOffers(filteredFavOffers);
  };

  return { copyOfJobOffers, copyOfFavOffers };
};

export default useFilterOffersAndFav;
