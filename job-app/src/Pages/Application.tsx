import { useEffect, useState } from "react";
import useSetLogin from "../hooks/useSetLogin";
import { Link } from "react-router-dom";
import useFetchApplication2 from "../hooks/useFetchApplication2";

const Application = () => {
  const { application } = useFetchApplication2();
  const { currentUser } = useSetLogin();
  const [userApplication, setUserApplication] = useState<any>([]);

  useEffect(() => {
    if (application) {
      const filteredApplications = application.filter(
        (x: any) => x.idUser === currentUser.id
      );
      setUserApplication(filteredApplications);
    }
  }, [application]);

  console.log(userApplication);

  return (
    <div>
      <h2>My Application List:</h2>
      <h2>
        {userApplication.length > 0
          ? userApplication.map((x: any) => x.JobName)
          : "no offers"}
      </h2>
      <Link to={"/"}>
        <h2>Go back to Homepage</h2>
      </Link>
    </div>
  );
};
export default Application;
