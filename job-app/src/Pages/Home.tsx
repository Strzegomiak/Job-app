import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import { useContext, useEffect, useState } from "react";
import FavoritesFlagContex from "../context/FavoritesFlagContex";
import FavoritesPanel from "../components/FavoritesPanel";
import useFilterOffersAndFav from "../hooks/useFilterOffersAndFav";

const Home = () => {
  const { favClicked } = useContext(FavoritesFlagContex);
  const { copyOfFavOffers, copyOfJobOffers } = useFilterOffersAndFav();

  return (
    <div
      style={{ minHeight: "1000px" }}
      className="flex justify-center items-center flex-col mr-36 ml-36 "
    >
      <Navbar />
      <FilterBox />
      {favClicked ? (
        <FavoritesPanel copyOfFavOffers={copyOfFavOffers} />
      ) : (
        <JobsPanel copyOfJobOffers={copyOfJobOffers} />
      )}
    </div>
  );
};

export default Home;
