import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IJobOffers } from "../types/types";
import { useState } from "react";
import ApplyJobModal from "../components/ApplyJobModal";

const SingleJob = () => {
  const { id } = useParams();
  const { jobOffers } = useFetch();
  const [isOpen, setIsOpen] = useState(false);

  const choosenOffer: IJobOffers | undefined = jobOffers?.find(
    (job) => job.id === Number(id)
  );
  if (!choosenOffer) {
    return <div>Loading...</div>;
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-600">
      <div className="flex flex-col shadow-lg rounded-xl w-3/6 h-5/6 p-6 border-gray-300 bg-white justify-between ">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold text-5xl">{choosenOffer.JobName}</h2>
          <div className="bg-white rounded-xl border-2 border-gray-300 p-4 w-80">
            <h2 className="pt-4 text-gray-500">
              Job Category: {choosenOffer.Categories}
            </h2>
            <h2 className="pt-4 text-gray-500">
              Company name: {choosenOffer.Name}
            </h2>
            <h2 className="pt-4 text-gray-500">
              Work type: {choosenOffer.Type}
            </h2>
            <h2 className="pt-4 text-gray-500">
              Sallary: {choosenOffer.Sallary}
            </h2>
            <h2 className="pt-4 text-gray-500">
              Country: {choosenOffer.country}
            </h2>
            <h2 className="pt-4 text-gray-500">email: {choosenOffer.email}</h2>
            <h2 className="pt-4 text-gray-500">
              Level of Expirience: {choosenOffer.levelOfExpirience}
            </h2>
            <h2 className="pt-4 text-gray-500">
              Work type: {choosenOffer.workType}
            </h2>
          </div>
          <h2 className="pt-4  text-xl">{choosenOffer.Description}</h2>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white h-12 rounded-xl border-2 border-gray-300 text-xl font-bold hover:bg-blue-300"
          type="button"
        >
          Apply Now
        </button>
        {isOpen ? (
          <ApplyJobModal isOpen={isOpen} closeModal={closeModal} />
        ) : null}
      </div>
    </div>
  );
};

export default SingleJob;
