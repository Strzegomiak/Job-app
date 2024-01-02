import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { jobOffers } = useFetch();
  const queryClient = new QueryClient({});

  console.log(jobOffers);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    </div>
  );
}

export default App;
