import "../styles/card.css";

const Cards = () => {
  const cards = ["", "", "", "", "", "", "", "", ""];
  return (
    <>
      <section className="card-master">
        {cards.map((card) => (
          <div className="card" key={crypto.randomUUID()}>
            Random Image
          </div>
        ))}
      </section>
    </>
  );
};
export default Cards;
