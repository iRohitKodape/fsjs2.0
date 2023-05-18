import { useState, useEffect } from "react";
import JobInfo from "./Components/JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDetails(data);
      console.log(details);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <main>
        <JobInfo details={details} />
      </main>
    </>
  );
};
export default App;
