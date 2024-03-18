import { useEffect, useState } from "react";
import useFetchApplication2 from "../hooks/useFetchApplication2";
import useSetLogin from "../hooks/useSetLogin";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

const Stat = () => {
  ChartJS.register(...registerables);

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

  const frontendApplications = userApplication.filter(
    (x: any) => x.Categories === "Frontend"
  );
  const backendApplications = userApplication.filter(
    (x: any) => x.Categories === "backend"
  );
  const fullstackApplications = userApplication.filter(
    (x: any) => x.Categories === "Fullstack"
  );
  const mobileApplications = userApplication.filter(
    (x: any) => x.Categories === "Mobile"
  );

  return (
    <div>
      <Doughnut
        data={{
          labels: ["backend", "frontend", "fullstack", "mobile"],
          datasets: [
            {
              label: "categories",
              data: [
                backendApplications.length,
                frontendApplications.length,
                fullstackApplications.length,
                mobileApplications.length,
              ],
              backgroundColor: ["green", "red", "blue", "orange"],
            },
          ],
        }}
        height={200}
        width={200}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Stat;
