import { createContext, useContext, useState } from "react";

const SongsContext = createContext();

export const SongsProvider = ({ children }) => {
  const [allSongs, setAllSongs] = useState([]);
  const updateSongs = (newSongs) => {
    setAllSongs(newSongs);
  };
  return (
    <SongsContext.Provider value={{ allSongs, updateSongs }}>
      {children}
    </SongsContext.Provider>
  );
};

export const useSongs = () => {
  return useContext(SongsContext);
};
