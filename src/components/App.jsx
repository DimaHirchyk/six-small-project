import "./App.css";
import Counter from "./counter/Counter";
import CurrentyConvector from "./currenty-convector/currenty-convector";
import Modal from "./modal/Modal";
import Questions from "./questions/Questions";
import User from "./user/User";

export default function App() {
  return (
    <>
      <h2>Modal</h2>
      <Modal />
      <h2>Лічильник</h2>
      <Counter />
      <h2>Питання</h2>
      <Questions />
      <h2>додавання користувачів</h2>
      <User />
      <h2>Конвектор валют</h2>
      <CurrentyConvector />
    </>
  );
}
