//style
import styles from "./TodoModal.module.scss";
//hooks
import { useState, useContext } from "react";
//context
import { MainContext } from "@/store";
//icons
import PlusFillCircle from "@/Icons/PlusFillCircle";

const TodoModal = ({ info, setInfo, setModal }) => {
  const { state, dispatch } = useContext(MainContext);
  const [input, setInput] = useState("");

  const onTodoSubmit = (e) => {
    e?.preventDefault();
    if (input.length > 0) {
      const prova = input;

      dispatch({
        type: "CHANGE",
        payload: {
          id: info.id,
          text: prova,
        },
      });

      const newtext = state.map((el) =>
        el.id === info.id ? { ...el, text: input } : el
      );
      localStorage.setItem("todoText", JSON.stringify(newtext));
      setModal(false);
    }
  };

  return (
    <>
      <div className={styles.TodoModal} onClick={() => setModal(false)}></div>
      <form className={styles.modifyTodo} onSubmit={(e) => onTodoSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          defaultValue={info.text}
          autoFocus
        />
        <PlusFillCircle
          className={styles.modifyButton}
          onClick={() => onTodoSubmit()}
          modal
        />
      </form>
    </>
  );
};

export default TodoModal;
