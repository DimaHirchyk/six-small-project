import { useState } from "react";
import questions from "../../../Questions.json";
import css from "./Questions.module.css";
import Game from "./Game";
import Result from "./Resalt";

export default function Questions() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      <div className={css.App}>
        {step !== questions.length ? (
          <Game step={step} question={question} variant={onClickVariant} />
        ) : (
          <Result questions={questions} correct={correct} />
        )}
      </div>
    </>
  );
}
