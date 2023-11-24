import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Navbar/NavBar";
import "./styles.css";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Card from "./components/Card/Card";

export default function App() {
  const [data, setData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [loading, setLoading] = useState(false)

  //Function for fetching the data from api
  const getData = async (fetchDataFor, stateFunction) => {
    try {
      setLoading(true)
      const response = await fetchDataFor();
      // console.log(response);
      stateFunction(response);
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.error("error found", err);
    }
  };
  
  useEffect(() => {
    getData(fetchTopAlbums, setData);
    getData(fetchNewAlbums, setNewAlbumsData);
  }, []);
  return (
    <div className="App">
      <Dashboard data={data} newAlbumsData={newAlbumsData} loading={loading}/>
    </div>
  );
}
