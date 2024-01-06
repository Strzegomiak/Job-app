import axios from "axios";
import { useQuery } from "react-query";

const useFetch = () => {
  const getOffers = async () => {
    const res = await axios.get(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/jobs-offers.json"
    );
    const jobOffers = Object.values(res.data);

    return jobOffers;
  };
  const {
    data: jobOffers,
    isError,
    isLoading,
  } = useQuery("jobOffers", getOffers);

  return { jobOffers };
};

export default useFetch;
