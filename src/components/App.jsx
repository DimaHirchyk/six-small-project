import "./App.css";
import Counter from "./counter/Counter";
import Modal from "./modal/Modal";
import Questions from "./questions/Questions";

export default function App() {
  return (
    <>
      <h2>Modal</h2>
      <Modal />
      <h2>Лічильник</h2>
      <Counter />
      <h2>Питання</h2>
      <Questions />
    </>
  );
}
