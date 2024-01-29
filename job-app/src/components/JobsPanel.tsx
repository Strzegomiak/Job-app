import OneJobPanel from "./OneJobPanel";
import { IJobOffers } from "../types/types";

interface JobsPanelProps {
  copyOfJobOffers: IJobOffers[] | undefined;
}

const JobsPanel: React.FC<JobsPanelProps> = (props) => {
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
