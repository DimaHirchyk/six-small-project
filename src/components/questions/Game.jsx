import css from "./Questions.module.css";
import questions from "../../../Questions.json";

export default function Game({ question, variant, step }) {
  const persent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className={css.progress}>
        <div
          style={{ width: `${persent}%` }}
          className={css.progress__inner}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => variant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
