import { useState, useEffect } from "react";
import JobInfo from "./Components/JobInfo";
import BtnContainer from "./Components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  // fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      throw error;
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <>
      <section className="jobs-center">
        <BtnContainer details={details} />
        <JobInfo details={details} currentItem={currentItem} />
      </section>
    </>
  );
};
export default App;
