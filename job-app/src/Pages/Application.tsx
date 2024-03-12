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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-600">
      <div className="flex flex-col items-center justify-center min-w-80 w-1/4 h-1/2 shadow-lg rounded-xl p-6 border-gray-300 bg-white gap-12">
        <h1 className="text-4xl text-blue-600 mb-5">My Application List:</h1>
        <h2 className="text-3xl text-blue-600 mb-5">
          {userApplication.length > 0
            ? userApplication.map((x: any) => `${x.JobName}, `)
            : "no offers"}
        </h2>
        <Link to={"/"}>
          <h2>Go back to Homepage</h2>
        </Link>
      </div>
    </div>
  );
};
export default Application;
