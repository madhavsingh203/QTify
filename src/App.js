import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Navbar/NavBar";
import "./styles.css";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Card from "./components/Card/Card";
import Playlist from "./components/PlaylistPage.jsx/Playlist";
import { SongsProvider } from "./context/SongsContext";
import { SnackbarProvider } from "notistack";


export default function App() {
  const [data, setData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function for fetching the data from api
  const getData = async (fetchDataFor, stateFunction) => {
    try {
      setLoading(true);
      const response = await fetchDataFor();
      stateFunction(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error("error found", err);
    }
  };

  useEffect(() => {
    getData(fetchTopAlbums, setData);
    getData(fetchNewAlbums, setNewAlbumsData);
  }, []);

  return (
    <div className="App w-full">
      <SnackbarProvider autoHideDuration={3000} anchorOrigin={{
        horizontal: "center",
        vertical: "bottom"
      }}
    
      >
      <SongsProvider>
        <Router>
          <NavBar topAlbums={data} newAlbums={newAlbumsData} />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  data={data}
                  newAlbumsData={newAlbumsData}
                  loading={loading}
                />
              }
            />
            <Route path="/:slug" element={<Playlist />} />
          </Routes>
        </Router>
      </SongsProvider>
      </SnackbarProvider>
    </div>
  );
}
