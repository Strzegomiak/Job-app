import OneJobPanel from "./OneJobPanel";
import { IJobOffers } from "../types/types";

interface FavoritesPanelProps {
  copyOfFavOffers: IJobOffers[];
}

const FavoritesPanel: React.FC<FavoritesPanelProps> = (props) => {
  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {props.copyOfFavOffers.length > 0 ? (
        props.copyOfFavOffers.map((singleJob) => (
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
