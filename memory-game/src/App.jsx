import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Score from "./components/Score";
import Start from "./components/Start";
import { useState } from "react";

function App() {
  const [tiles, setTiles] = useState([]);

  return (
    <>
      <section className="app">
        <Header />
        <Score />
        <Start setTiles={setTiles} />
        <Cards tiles={tiles} />
      </section>
    </>
  );
}

export default App;
