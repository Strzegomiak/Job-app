import useFetch from "../hooks/useFetch";
import OneJobPanel from "./OneJobPanel";

const JobsPanel = () => {
  const { jobOffers } = useFetch();

  return (
    <ul>
      {jobOffers ? (
        jobOffers.map((singleJob: any) => (
          <li key={singleJob.id}>
            <OneJobPanel />
          </li>
        ))
      ) : (
        <li>No job offers available</li>
      )}
    </ul>
  );
};

export default JobsPanel;
