import { Box, Modal, Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import useSetLogin from "../hooks/useSetLogin";

type ApplyJobModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  applyJob: string;
};

const ApplyJobModadl: React.FC<ApplyJobModalProps> = ({
  isOpen,
  closeModal,
  applyJob,
}) => {
  const { isLogin, currentUser } = useSetLogin();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // const user: any = localStorage.getItem("user");
  // const userJSON = user !== null ? JSON.parse(user) : null;

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isLogin ? (
          <div className="flex items-center ml-56 mt-10">
            <HorizontalLinearStepper applyJob={applyJob} />
          </div>
        ) : (
          <h2 className=" text-5xl flex items-center justify-center h-full text-blue-300 ">
            User must be logged in.
          </h2>
        )}
      </Box>
    </Modal>
  );
};

export default ApplyJobModadl;
