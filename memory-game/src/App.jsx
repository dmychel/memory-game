import "./App.css";
import Cards from "./components/UI/Cards";
import Header from "./components/UI/Header";
import Score from "./components/UI/Score";
import Start from "./components/UI/Start";
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
