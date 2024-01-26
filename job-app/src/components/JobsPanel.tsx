import OneJobPanel from "./OneJobPanel";
import { IJobOffers } from "../types/types";

interface JobsPanelProps {
  copyOfJobOffers: IJobOffers[] | undefined;
}

const JobsPanel: React.FC<JobsPanelProps> = (props) => {
  return (
    <ul className="flex justify-center w-4/5 flex-auto gap-14 mt-10  flex-wrap">
      {props.copyOfJobOffers ? (
        props.copyOfJobOffers.map((singleJob) => (
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
