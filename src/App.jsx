import {useEffect} from "react";

// c0fc28e7

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
      <h1>App</h1>
    </div>
  );
}

export default App;