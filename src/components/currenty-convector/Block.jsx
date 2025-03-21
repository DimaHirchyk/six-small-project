import css from "./style.module.css";

const defaultCurrencies = ["UAH", "USD", "EUR", "GBP"];

export default function Block({
  value,
  currence,
  onChangeValue,
  onChangeCurrecy,
}) {
  return (
    <div className={css.block}>
      <ul className={css.currencies}>
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrecy(cur)}
            key={cur}
            className={currence === cur ? css.active : ""}>
            {cur}
          </li>
        ))}
        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
}
