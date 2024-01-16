import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import useFetch from "../hooks/useFetch";
import React, { useEffect, useState } from "react";

const Home = () => {
  interface IJobOffers {
    Categories: string;
    Description: string;
    JobName: string;
    Name: string;
    Sallary: Number;
    Type: string;
    country: string;
    email: string;
    id: Number;
    levelOfExpirience: string;
    workType: string;
  }
  const { jobOffers } = useFetch();
  const [copyOfJobOffers, setCopyOfJobOffers] = useState(jobOffers);
  useEffect(() => {
    setCopyOfJobOffers(jobOffers);
  }, [jobOffers]);

  const passDataFromMain = (inputVaue: any, sortValue: any) => {
    let copyOfJobOffers = jobOffers ? [...jobOffers] : [];
    if (!copyOfJobOffers) {
      // Obsługa przypadku, gdy jobOffers jest undefined
      return [];
    }

    if (inputVaue.title) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.JobName.toUpperCase().includes(
          inputVaue.title.toUpperCase()
        );
      });
    }
    if (inputVaue.company) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.Name.toUpperCase().includes(
          inputVaue.company.toUpperCase()
        );
      });
    }
    if (inputVaue.location) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.country
          .toUpperCase()
          .includes(inputVaue.location.toUpperCase());
      });
    }
    if (sortValue.categories) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.Categories.toUpperCase().includes(
          sortValue.categories.toUpperCase()
        );
      });
    }

    if (sortValue.type) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.Type.toUpperCase().includes(
          sortValue.type.toUpperCase()
        );
      });
    }

    if (sortValue.level) {
      copyOfJobOffers = copyOfJobOffers?.filter((singleOffer: any) => {
        return singleOffer.levelOfExpirience
          .toUpperCase()
          .includes(sortValue.level.toUpperCase());
      });
    }

    return setCopyOfJobOffers(copyOfJobOffers);
  };

  return (
    <>
      <Navbar />
      <FilterBox passDataFromMain={passDataFromMain} />
      <JobsPanel copyOfJobOffers={copyOfJobOffers} />
    </>
  );
};

export default Home;
