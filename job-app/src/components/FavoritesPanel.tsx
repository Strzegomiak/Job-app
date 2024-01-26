import OneJobPanel from "./OneJobPanel";
import { IJobOffers } from "../types/types";
import { useContext } from "react";
import WishListContext from "../context/WishListContext";

interface FavoritesPanelProps {
  copyOfFavOffers: IJobOffers[];
}

const FavoritesPanel: React.FC<FavoritesPanelProps> = (props) => {
  const { favOffers } = useContext(WishListContext);
  return (
    //copyOfFavOffers - ulubione pofiltrowane
    //favOffers - ulubione
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {props.copyOfFavOffers.length > 0 ? (
        props.copyOfFavOffers.map((singleJob) => (
          <li key={singleJob.id}>
            <OneJobPanel singleJob={singleJob} />
          </li>
        ))
      ) : favOffers.length > 0 ? (
        <h2 className="text-4xl mt-20 text-red-500">
          No offers for the given filters
        </h2>
      ) : (
        <h2 className="text-4xl mt-20 text-red-500">
          You don't have any favorite offers
        </h2>
      )}
    </ul>
  );
};

export default FavoritesPanel;
