import {useEffect} from "react";

import "./App.css";
import Searchicon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=c0fc28e7";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div>
      <h1>MovieHub</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={() => {}}
        />
        <img src={Searchicon} alt="search" onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;