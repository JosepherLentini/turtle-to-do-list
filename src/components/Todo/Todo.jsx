import styles from "./Todo.module.scss";
import { useState, useContext } from "react";

import { MainContext } from "@/store";
//components
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";

const Todo = ({ category }) => {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});
  const { state, dispatch } = useContext(MainContext);
  
  return (
    <div className={styles.Todo}>
      {category ? (
        <h1 className={styles.todoTitle}>{category}</h1>
      ) : (
        <h1 className={styles.todoTitle}>All</h1>
      )}

      {category
        ? state
            ?.filter((el) => el.category === category)
            .map((todo) => (
              <TodoList
                todo={todo}
                modal={modal}
                setModal={setModal}
                info={info}
                setInfo={setInfo}
              />
            ))
        : state?.map((todo) => (
            <TodoList
              todo={todo}
              modal={modal}
              setModal={setModal}
              info={info}
              setInfo={setInfo}
            />
          ))}
      {modal && (
        <TodoModal
          info={info}
          setInfo={setInfo}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Todo;
