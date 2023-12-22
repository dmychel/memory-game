import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  return (
    <>
      <section className="app">
        <Header />
        <Score />
        <Cards />
      </section>
    </>
  );
}

export default App;
