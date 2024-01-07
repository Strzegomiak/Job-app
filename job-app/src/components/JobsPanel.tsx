import useFetch from "../hooks/useFetch";
import OneJobPanel from "./OneJobPanel";

const JobsPanel = () => {
  const { jobOffers } = useFetch();
  console.log(jobOffers);
  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {jobOffers ? (
        jobOffers.map((singleJob: any) => (
          <li key={singleJob.id}>
            <OneJobPanel singleJob={singleJob} />
          </li>
        ))
      ) : (
        <li>No job offers available</li>
      )}
    </ul>
  );
};

export default JobsPanel;
