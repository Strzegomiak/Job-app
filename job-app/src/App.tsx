import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { useQuery } from "react-query";
import FilterBox from "./components/FilterBox";
import JobsPanel from "./components/JobsPanel";

function App() {
  // const { jobOffers } = useFetch();

  // console.log(jobOffers);
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <FilterBox />
      <JobsPanel />
    </div>
  );
}

export default App;
