import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";
import Error from "./Components/Error";
import Card from "./Components/Card";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [error, setError] = useState(false);
  const [liked,setLiked] = useState([]);

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
      setError(true);
      toast.error("Something Went Wrong!!!");
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <Navbar/>
      <Filter category={category} setCategory={setCategory} error={error} />

      {error ? (
        <Error />
      ) : (
        <div className="max-w-[1300px] w-[90%] h-full mx-auto">
          {loading ? (
            <Spinner/>
          ) : (
            <Cards courses={courses} category={category} liked = {liked} setLiked={setLiked}/>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
