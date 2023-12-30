import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Score from "./components/Score";
import Start from "./components/Start";
import { useState } from "react";

function App() {
  const BASE_URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

  const [entry, setEntry] = useState([]);

  const callAPI = async (difficulty) => {
    let arr = [];
    if (difficulty === 2) {
      for (let i = 0; i < 8; i++) {
        const res = await fetch(
          `${BASE_URL}/${Math.floor(Math.random() * 380)}`
        );
        const data = await res.json();
        const url = await data.data.image;
        arr.push(url);
        arr.push(url);
      }
      shuffleArray(arr);
    } else {
      for (let i = 0; i < 3; i++) {
        const res = await fetch(
          `${BASE_URL}/${Math.floor(Math.random() * 380)}`
        );
        const data = await res.json();
        const url = await data.data.image;
        arr.push(url);
        arr.push(url);
        arr.push(url);
      }
      shuffleArray(arr);
    }
  };

  const shuffleArray = (arr) => {
    let newArr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setEntry(newArr);
  };

  return (
    <>
      <section className="app">
        <Header />
        <Score />
        <Start callAPI={callAPI} entry={entry} BASE_URL={BASE_URL} />
        <Cards entry={entry} />
      </section>
    </>
  );
}

export default App;
