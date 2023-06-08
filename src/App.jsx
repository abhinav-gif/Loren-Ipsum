import { useState } from "react";
import text from "./data";

const App = () => {
  const [paraIndex, setParaIndex] = useState(0);

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="num">Paaragraphs:</label>
        <input
          type="number"
          name="num"
          defaultValue={1}
          min="1"
          max={8}
          id="num"
        />
        <button
          className="btn"
          type="button"
          onClick={() => {
            const val = Number(document.getElementById("num").value) - 1;
            if (val > 0) {
              setParaIndex(val);
            }
          }}
        >
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => {
          if (index <= paraIndex) {
            return <p key={index}>{para}</p>;
          }
        })}
      </article>
    </section>
  );
};
export default App;
