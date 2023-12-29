import "./App.css";
import Header from "./components/Header";
import Start from "./components/Start";
import { useState } from "react";

function App() {
  const BASE_URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

  const [entry, setEntry] = useState([]);

  const callAPI = async (difficulty) => {
    let arr = [];
    if (difficulty === 2) {
      for (let i = 0; i < 5; i++) {
        const res = await fetch(
          `${BASE_URL}/${Math.floor(Math.random() * 380)}`
        );
        const data = await res.json();
        const url = await data.data.image;
        arr.push(url);
      }
      setEntry(arr);
      console.log("done");
    }
  };

  return (
    <>
      <section className="app">
        <Header />
        <Start callAPI={callAPI} entry={entry} BASE_URL={BASE_URL} />
      </section>
    </>
  );
}

export default App;
