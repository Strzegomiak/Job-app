import useFetch from "../hooks/useFetch";
import OneJobPanel from "./OneJobPanel";

const JobsPanel = (props: any) => {
  const { jobOffers } = useFetch();
  console.log(props.copyOfJobOffers);

  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {props.copyOfJobOffers ? (
        props.copyOfJobOffers.map((singleJob: any) => (
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
