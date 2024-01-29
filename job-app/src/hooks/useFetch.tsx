import axios from "axios";
import { useQuery } from "react-query";

interface IJobOffers {
  Categories: string;
  Description: string;
  JobName: string;
  Name: string;
  Sallary: number;
  Type: string;
  country: string;
  email: string;
  id: number;
  levelOfExpirience: string;
  workType: string;
}

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
