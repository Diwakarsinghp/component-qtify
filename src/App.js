
import NavBar from './components/NavBar/NavBar';
import HeroImg from './components/HeroImage/HeroImage';
import { fetchTopAlbums } from "./api/api";
import { useState, useEffect } from "react";
import Section from "./components/Section/Section";

function App() {

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <HeroImg />
      <Section data={data} type="album" title="Top Albums"  />
    </div>
  );
}

export default App;
