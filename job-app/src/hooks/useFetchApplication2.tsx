import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useFetchApplication2 = () => {
  const [application, setApplication] = useState<any>();

  const getApplication = async () => {
    const res = await axios.get(
      "https://job-app-88989-default-rtdb.europe-west1.firebasedatabase.app/Application.json"
    );
    const aplicationInfo = Object.values(res.data);
    setApplication(aplicationInfo);
  };

  useEffect(() => {
    getApplication();
  }, []);

  return { application };
};

export default useFetchApplication2;
