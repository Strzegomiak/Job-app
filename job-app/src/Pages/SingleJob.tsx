import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleJob = () => {
  const { id } = useParams();
  const { jobOffers } = useFetch();
  const choosenOffer = jobOffers?.filter((job) => job.id === Number(id));
  console.log(id);

  return <div></div>;
  // dopracowaćccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
};

export default SingleJob;
