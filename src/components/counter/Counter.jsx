import { useEffect } from "react";
import { useState } from "react";
import CountReset from "./reset/Reset";

export default function Counter() {
  let [count, setCount] = useState(() => {
    let LS = localStorage.getItem("count");

    if (LS !== null) {
      return JSON.parse(LS);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  const zeroCount = () => {
    setCount(0);
  };

  const btnDisablet = count === 0;

  return (
    <>
      <p>Counter</p>
      <h1>{count}</h1>
      <button onClick={onClickMinus} disabled={btnDisablet}>
        Minus
      </button>
      <button onClick={onClickPlus}>Plus</button>
      <div> {btnDisablet ? false : <CountReset reset={zeroCount} />}</div>
    </>
  );
}
