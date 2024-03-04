import axios from "axios";
import { useQuery } from "react-query";

const useFetchApplication = () => {
  const getApplication = async () => {
    const res = await axios.get(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/Application.json"
    );
    const aplicationInfo = Object.values(res.data);
    return aplicationInfo;
  };

  const {
    data: aplicationInfo,
    isError,
    isLoading,
  } = useQuery<any>("jobOffers", getApplication);

  return { aplicationInfo, isError, isLoading };
};

export default useFetchApplication;
