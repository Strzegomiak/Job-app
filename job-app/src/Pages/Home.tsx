import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { IFormInput, IJobOffers, PropsSortValue } from "../types/types";
import FavoritesFlagContex from "../context/FavoritesFlagContex";
import FavoritesPanel from "../components/FavoritesPanel";
import WishListContext from "../context/WishListContext";

const Home = () => {
  const { favClicked } = useContext(FavoritesFlagContex);
  const { favOffers } = useContext(WishListContext);
  const { jobOffers }: { jobOffers: IJobOffers[] | undefined } = useFetch();
  const [copyOfJobOffers, setCopyOfJobOffers] = useState<
    IJobOffers[] | undefined
  >(jobOffers);
  const [copyOfFavOffers, setCopyOfFavOffers] =
    useState<IJobOffers[]>(favOffers);

  useEffect(() => {
    setCopyOfJobOffers(jobOffers);
  }, [jobOffers]);

  useEffect(() => {
    setCopyOfFavOffers(favOffers);
  }, [favOffers]);

  const passDataFromMain = (
    inputVaue: IFormInput,
    sortValue: PropsSortValue
  ) => {
    let copyOfJobOffers = jobOffers ? [...jobOffers] : [];
    let copyOfFavOffers = favOffers ? [...favOffers] : [];

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
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.JobName.toUpperCase().includes(
            inputVaue.title.toUpperCase()
          );
        });
      }
    }
    if (inputVaue.company) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Name.toUpperCase().includes(
          inputVaue.company.toUpperCase()
        );
      });
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.Name.toUpperCase().includes(
            inputVaue.company.toUpperCase()
          );
        });
      }
    }
    if (inputVaue.location) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.country
          .toUpperCase()
          .includes(inputVaue.location.toUpperCase());
      });
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.country
            .toUpperCase()
            .includes(inputVaue.location.toUpperCase());
        });
      }
    }
    if (sortValue.categories) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Categories.toUpperCase().includes(
          sortValue.categories.toUpperCase()
        );
      });
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.Categories.toUpperCase().includes(
            sortValue.categories.toUpperCase()
          );
        });
      }
    }

    if (sortValue.type) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.Type.toUpperCase().includes(
          sortValue.type.toUpperCase()
        );
      });
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.Type.toUpperCase().includes(
            sortValue.type.toUpperCase()
          );
        });
      }
    }

    if (sortValue.level) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: IJobOffers) => {
        return singleOffer.levelOfExpirience
          .toUpperCase()
          .includes(sortValue.level.toUpperCase());
      });
      if (copyOfFavOffers.length > 0) {
        copyOfFavOffers = copyOfFavOffers?.filter((singleOffer: IJobOffers) => {
          return singleOffer.levelOfExpirience
            .toUpperCase()
            .includes(sortValue.level.toUpperCase());
        });
      }
    }

    setCopyOfJobOffers(copyOfJobOffers);
    setCopyOfFavOffers(copyOfFavOffers);
  };
  return (
    <>
      <Navbar />
      <FilterBox passDataFromMain={passDataFromMain} />
      {favClicked ? (
        <FavoritesPanel copyOfFavOffers={copyOfFavOffers} />
      ) : (
        <JobsPanel copyOfJobOffers={copyOfJobOffers} />
      )}
    </>
  );
};

export default Home;
