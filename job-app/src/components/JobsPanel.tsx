import OneJobPanel from "./OneJobPanel";
import { IJobOffers } from "../types/types";
import useFetch from "../hooks/useFetch";

interface JobsPanelProps {
  copyOfJobOffers: IJobOffers[] | undefined;
}

const JobsPanel: React.FC<JobsPanelProps> = (props) => {
  const { isError, isLoading } = useFetch();
  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2>problem with connection</h2>;
  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {props.copyOfJobOffers ? (
        props.copyOfJobOffers.length > 0 ? (
          props.copyOfJobOffers.map((singleJob) => (
            <li key={singleJob.id}>
              <OneJobPanel singleJob={singleJob} />
            </li>
          ))
        ) : (
          <h2 className="text-4xl mt-20 text-red-500">
            No offers for the given filters
          </h2>
        )
      ) : (
        <li className="text-4xl mt-20 text-red-500">No job offers available</li>
      )}
    </ul>
  );
};

export default JobsPanel;
