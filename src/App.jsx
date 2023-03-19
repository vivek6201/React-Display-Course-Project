import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://codehelp-apis.vercel.app/api/get-top-courses"
      );
      const data = await res.json();
      setCourses(data.data);
    } catch (e) {
      toast("Something Went Wrong!!!");
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <Navbar />
      <Filter />
      <div className="max-w-[1300px] w-[90%] h-full mx-auto">
        {loading ? <Spinner /> : <Cards courses={courses} />}

      </div>
    </div>
  );
}

export default App;
