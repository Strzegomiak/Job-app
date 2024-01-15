import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import useFetch from "../hooks/useFetch";
import React, { useState } from "react";

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
  // const [copyOfJobOffers, setCopyOfJobOffers] = useState(jobOffers);

  const passDataFromMain = (inputVaue: any, sortValue: any) => {
    let copyOfJobOffers = jobOffers;

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
    console.log(copyOfJobOffers);
  };

  return (
    <>
      <Navbar />
      <FilterBox passDataFromMain={passDataFromMain} />
      <JobsPanel />
    </>
  );
};

export default Home;
