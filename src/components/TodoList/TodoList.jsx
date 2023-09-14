//style
import styles from "./TodoList.module.scss";
//hooks
import { useState, useContext } from "react";
//components
import EmptyTodo from "../EmptyTodo";
import CompletedModal from "../CompletedModal";
//Icons
import Bin from "@/Icons/Bin";
import Edit from "@/Icons/Edit";
import Check from "@/Icons/Check";
// Context
import { MainContext } from "@/store";

const TodoList = ({ todo, info, setInfo, modal, setModal }) => {
  const [modaldone, setModalDone] = useState(false);

  const { state, dispatch } = useContext(MainContext);

  const deleteTodo = (ind) => {
    dispatch({
      type: "DELETE_TO-DO",
      payload: ind.id,
    });

    const remove = state.filter((elem) => elem.id !== ind.id);
    localStorage.setItem("todoText", JSON.stringify(remove));
  };

  const completeTodo = (todo) => {
    const toggleDone = !todo.completed;
    dispatch({
      type: "COMPLETE_TO-DO",
      payload: {
        id: todo.id,
        completed: toggleDone,
      },
    });

    if (toggleDone) {
      setModalDone(true);
      setTimeout(() => {
        setModalDone(false);
      }, 2500);
    }

    const complete = state.map((el) =>
      el.id === todo.id ? { ...el, completed: toggleDone } : el
    );
    localStorage.setItem("todoText", JSON.stringify(complete));
  };

  const openTodoModal = (todo) => {
    const newinfo = {
      id: todo.id,
      text: todo.text,
      category: todo.category,
    };
    setInfo(newinfo);
    setModal(true);
  };

  return (
    <>
      <div className={styles.todoItem} key={todo?.id}>
        <div className={styles.todoText}>
          <p className={styles.todo}>{todo?.text}</p>
          <div>
            <p className={styles.todoCategory}>{todo?.category}</p>
          </div>
        </div>
        <div className={styles.deleteComplete}>
          <Check
            onClick={() => completeTodo(todo)}
            className={styles.complete}
            complete={todo?.completed}
          />
          <div>
            <Bin onClick={(e) => deleteTodo(todo)} className={styles.delBin} />
          </div>

          <Edit className={styles.edit} onClick={() => openTodoModal(todo)} />
        </div>
      </div>
      {modaldone && todo?.completed && <CompletedModal />}
    </>
  );
};

export default TodoList;
