import axios from "axios";
import { useQuery } from "react-query";

const useFetch = () => {
  const getOffers = async () => {
    const res = await axios.get(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/jobs-offers.json"
    );
    return res.data;
  };
  const { data, isError, isLoading } = useQuery("jobOffers", getOffers);
  const jobOffers = [data];
  return { jobOffers };
};

export default useFetch;
