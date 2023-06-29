import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Navbar/NavBar";
import "./styles.css";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Card from "./components/Card/Card";

export default function App() {
  const [data, setData] = useState([])
  const [newAlbumsData, setNewAlbumsData] = useState([])
  const getData = async(fetchDataFor,stateFunction)=>{
try{
  const response= await fetchDataFor();
  console.log(response)
  stateFunction(response)
  
}catch(err){
  alert("error found",err)
}
  }
  useEffect(()=>{

getData(fetchTopAlbums,setData)
getData(fetchNewAlbums,setNewAlbumsData)

  },[])
  return (
    <div className="App">
      <Dashboard data={data} newAlbumsData={newAlbumsData}/>
    </div>
  );
}
