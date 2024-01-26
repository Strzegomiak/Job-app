import OneJobPanel from "./OneJobPanel";
import { useContext } from "react";
import WishListContext from "../context/WishListContext";

const FavoritesPanel = () => {
  const { favOffers } = useContext(WishListContext);
  console.log(favOffers);

  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {favOffers.length > 0 ? (
        favOffers.map((singleJob) => (
          <li key={singleJob.id}>
            <OneJobPanel singleJob={singleJob} />
          </li>
        ))
      ) : (
        <h2 className="text-4xl mt-20">
          You don't have any favorite offers yet
        </h2>
      )}
    </ul>
  );
};

export default FavoritesPanel;
