import JobsPanel from "../components/JobsPanel";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";

const Home = () => {
  return (
    <>
      <Navbar />
      <FilterBox />
      <JobsPanel />
    </>
  );
};

export default Home;
