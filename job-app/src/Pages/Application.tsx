import { useEffect } from "react";
import useFetchApplication from "../hooks/useFetchApplication";
import useSetLogin from "../hooks/useSetLogin";

const Application = () => {
  const { aplicationInfo, isError, isLoading } = useFetchApplication();
  const { currentUser } = useSetLogin();
  useEffect(() => {
    if (!isLoading) {
      const userApplication = aplicationInfo.filter(
        (x: any) => x.idUser == currentUser.id
      );
      console.log(userApplication);
    }
  }, [isLoading]);

  if (isLoading) return <h2>Loading</h2>;
  console.log(isLoading);

  return (
    <div>
      <h2>My application</h2>
    </div>
  );
};
export default Application;
