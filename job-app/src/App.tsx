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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function App() {
  // const { jobOffers } = useFetch();

  // console.log(jobOffers);
  return (
    <div className="flex justify-center items-center flex-col mr-36 ml-36 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
