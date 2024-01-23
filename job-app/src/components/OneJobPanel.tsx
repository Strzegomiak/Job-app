import { useContext } from "react";
import { Link } from "react-router-dom";
import WishListContext from "../context/WishListContext";
import { IJobOffers } from "../types/types";

interface OneJobPanelProps {
  singleJob: IJobOffers;
}

const OneJobPanel: React.FC<OneJobPanelProps> = ({ singleJob }) => {
  const { addToFavorites } = useContext(WishListContext);

  return (
    <div className="flex flex-col shadow-lg rounded-xl">
      <div className="flex flex-col w-64 h-80 p-5 rounded-xl border-b-2 border-gray-300 justify-between">
        <Link to={`/offer/${singleJob.id}`}>
          <div className="flex flex-col /*bg-yellow-700*/">
            <h2 className="text-xl font-bold">{singleJob.JobName}</h2>
            <h2 className="border-b-2 border-gray-300 pb-5 text-gray-300">
              {singleJob.country}
            </h2>
            <h2 className="pt-4 text-gray-500">{singleJob.Description}</h2>
          </div>{" "}
        </Link>
        <div className="flex flex-col gap-2">
          <h2>{singleJob.Name}</h2>
          <button
            className="bg-white h-12 rounded-xl border-2 border-gray-300 font-bold"
            type="button"
          >
            Apply Now
          </button>

          <button type="button" onClick={() => addToFavorites(singleJob)}>
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneJobPanel;
