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
  const [copyOfJobOffers, setCopyOfJobOffers] = useState();

  console.log(copyOfJobOffers);

  const passDataFromMain = (inputVaue: any) => {
    const copyOfJobOffers = passDataToJobsPanel(inputVaue);
    setCopyOfJobOffers(copyOfJobOffers);
  };

  const passDataToJobsPanel = (inputVaue: any) => {
    const copyOfJobOffers = jobOffers?.filter((singleOffer: any) => {
      return (
        (inputVaue.company &&
          singleOffer.Name.toUpperCase().includes(inputVaue.company)) ||
        (inputVaue.location &&
          singleOffer.country.toUpperCase().includes(inputVaue.location)) ||
        (inputVaue.title &&
          singleOffer.JobName.toUpperCase().includes(inputVaue.title))
      );
    });
    return copyOfJobOffers || [];
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
