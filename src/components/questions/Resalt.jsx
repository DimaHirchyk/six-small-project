import css from "./Questions.module.css";

export default function Result({ questions, correct }) {
  return (
    <>
      {" "}
      <div className={css.result}>
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали {correct} ответа из {questions.length}
        </h2>
        <button>Попробовать снова</button>
      </div>
    </>
  );
}
