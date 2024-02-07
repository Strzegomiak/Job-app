import axios from "axios";
import { useQuery } from "react-query";
import { IJobOffers } from "../types/types";

const useFetch = () => {
  const getOffers = async () => {
    const res = await axios.get(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/jobs-offers.json"
    );
    const jobOffers: IJobOffers[] = Object.values(res.data);

    return jobOffers;
  };
  const {
    data: jobOffers,
    isError,
    isLoading,
  } = useQuery<IJobOffers[]>("jobOffers", getOffers);

  return { jobOffers, isError, isLoading };
};

export default useFetch;
