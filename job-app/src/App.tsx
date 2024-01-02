import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { useQuery } from "react-query";
import FilterBox from "./components/FilterBox";

function App() {
  const { jobOffers } = useFetch();
  const queryClient = new QueryClient({});

  console.log(jobOffers);
  return (
    <div className="flex flex-col items-center w-full">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <FilterBox />
      </QueryClientProvider>
    </div>
  );
}

export default App;
