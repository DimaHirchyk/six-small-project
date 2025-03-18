import { useEffect, useRef, useState } from "react";
import Block from "./Block";
import css from "./style.module.css";

export default function CurrentyConvector() {
  //   const [rates, setRates] = useState({});
  const ratesRef = useRef({});

  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=476539fb71404a6fafdf5f38fc1a8188"
    )
      .then((res) => res.json())
      .then((json) => {
        ratesRef.current = json.rates;
        console.log(json.rates);
        onchangeToPrice(1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onchangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };

  const onchangeToPrice = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  useEffect(() => {
    onchangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onchangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className={css.App}>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrecy={setFromCurrency}
        onChangeValue={onchangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrecy={setToCurrency}
        onChangeValue={onchangeToPrice}
      />
    </div>
  );
}
