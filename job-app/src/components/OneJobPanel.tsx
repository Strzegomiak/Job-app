import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import WishListContext from "../context/WishListContext";
import { IJobOffers } from "../types/types";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ApplyJobModal from "./ApplyJobModal";

interface OneJobPanelProps {
  singleJob: IJobOffers;
}

const OneJobPanel: React.FC<OneJobPanelProps> = ({ singleJob }) => {
  const { favOffers } = useContext(WishListContext);

  const { addToFavorites, deleteFavorites } = useContext(WishListContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const isClickedFav = favOffers.some((job) => job.id === singleJob.id);
  //sprawdzenie czy w bazie ulubionych jest oferta z naszego OneJob i przypisanie true/false automatycznie

  const handleFavorites = () => {
    addToFavorites(singleJob);
  };

  const handleDeleteFav = () => {
    deleteFavorites(singleJob);
  };
  return (
    <div className="flex flex-col shadow-lg rounded-xl">
      <div className="flex flex-col w-64 h-96 p-5 rounded-xl border-b-2 border-gray-300 justify-between">
        <div className="flex flex-col /*bg-yellow-700*/">
          <Link to={`/offer/${singleJob.id}`}>
            <h2 className="text-xl font-bold">{singleJob.JobName}</h2>
            <h2 className=" pb-5 text-gray-300">{singleJob.country}</h2>
          </Link>
          <div className="flex">
            <button
              className={`bg-white h-7 rounded-xl border-2 border-gray-300 font-bold w-24 hover:border-gray-500 ${
                isClickedFav ? "bg-red-200" : ""
              } `}
              type="button"
              onClick={handleFavorites}
            >
              Favorites
            </button>
            {isClickedFav ? (
              <button type="button" onClick={handleDeleteFav}>
                <CancelOutlinedIcon className="text-gray-400 hover:text-gray-500" />
              </button>
            ) : null}
          </div>
          <Link to={`/offer/${singleJob.id}`}>
            <h2 className="pt-4 text-gray-500">{singleJob.Description}</h2>
          </Link>
        </div>{" "}
        <div className="flex flex-col gap-2">
          <Link to={`/offer/${singleJob.id}`}>
            <h2>{singleJob.Name}</h2>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white h-12 rounded-xl border-2 border-gray-300 font-bold hover:bg-blue-300"
            type="button"
          >
            Apply Now
          </button>
          {isOpen ? (
            <ApplyJobModal isOpen={isOpen} closeModal={closeModal} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OneJobPanel;
