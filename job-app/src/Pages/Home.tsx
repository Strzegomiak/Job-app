import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { IFormInput, IJobOffers, PropsSortValue } from "../types/types";
import FavoritesFlagContex from "../context/FavoritesFlagContex";
import FavoritesPanel from "../components/FavoritesPanel";

const Home = () => {
  const { favClicked } = useContext(FavoritesFlagContex);
  const { jobOffers }: { jobOffers: IJobOffers[] | undefined } = useFetch();
  const [copyOfJobOffers, setCopyOfJobOffers] = useState<
    IJobOffers[] | undefined
  >(jobOffers);

  useEffect(() => {
    setCopyOfJobOffers(jobOffers);
  }, [jobOffers]);

  const passDataFromMain = (
    inputVaue: IFormInput,
    sortValue: PropsSortValue
  ) => {
    let copyOfJobOffers = jobOffers ? [...jobOffers] : [];
    if (!copyOfJobOffers) {
      // Obsługa przypadku, gdy jobOffers jest undefined
      return [];
    }

    if (inputVaue.title) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.JobName.toUpperCase().includes(
          inputVaue.title.toUpperCase()
        );
      });
    }
    if (inputVaue.company) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Name.toUpperCase().includes(
          inputVaue.company.toUpperCase()
        );
      });
    }
    if (inputVaue.location) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.country
          .toUpperCase()
          .includes(inputVaue.location.toUpperCase());
      });
    }
    if (sortValue.categories) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Categories.toUpperCase().includes(
          sortValue.categories.toUpperCase()
        );
      });
    }

    if (sortValue.type) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Type.toUpperCase().includes(
          sortValue.type.toUpperCase()
        );
      });
    }

    if (sortValue.level) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.levelOfExpirience
          .toUpperCase()
          .includes(sortValue.level.toUpperCase());
      });
    }

    setCopyOfJobOffers(copyOfJobOffers);
  };

  return (
    <>
      <Navbar />
      <FilterBox passDataFromMain={passDataFromMain} />
      {favClicked ? (
        <FavoritesPanel />
      ) : (
        <JobsPanel copyOfJobOffers={copyOfJobOffers} />
      )}
    </>
  );
};

export default Home;
