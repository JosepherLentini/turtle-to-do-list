//style
import styles from "./TodoForm.module.scss";
//hooks
import { useState, useContext } from "react";
//icons
import PlusFillCircle from "@/Icons/PlusFillCircle";
import SendHPlane from "@/Icons/SendHPlane";
//components
import CategorySelect from "../CategorySelect";
//context
import { MainContext } from "@/store";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [categorySelect, setCategorySelect] = useState("Category");
  const [toggleSelect, setToggleSelect] = useState(false);
  const { state, dispatch } = useContext(MainContext);

  const onTodoSubmit = (e) => {
    e?.preventDefault();
    
    
      if (todoText !== ""){
        if (categorySelect === "Category" || categorySelect === "No Category") {
          const payload = {
            id: Math.floor(Math.random() * 100000),
            text: todoText,
            completed: false,
            category: "",
            date: "",
          };
          dispatch({ type: "ADD_TO-DO", payload });
          const newTodo = [...state, payload];
          localStorage.setItem("todoText", JSON.stringify(newTodo));
        } else {
          const payload = {
            id: Math.floor(Math.random() * 100000),
            text: todoText,
            completed: false,
            category: categorySelect,
            date: "",
          };
          dispatch({ type: "ADD_TO-DO", payload });
          const newTodo = [...state, payload];
          localStorage.setItem("todoText", JSON.stringify(newTodo));
        }
      }else{
        setEmptyMessage(true)
        setTimeout(()=> {
          setEmptyMessage(false);
        }, 2000)
      }
    
   
    const categoryReset = "Category";
    setCategorySelect(categoryReset);

    setTodoText("");

    
  };

  const closeForm = () => {
    setOpenForm(false);
    setCategorySelect("Category");
    setToggleSelect(false);
  };

  const onOpenForm = () => {
    setOpenForm(true);
  };

  return (
    <>
      {openForm ? (
        <div className={styles.TodoForm}>
          {emptyMessage && (
            <div className={styles.emptyMessage}>Write something!</div>
          )}
          <div
            className={`${styles.openFormButton} ${
              openForm ? styles.openFormButton_down : ""
            }`}
            onClick={onOpenForm}
          >
            <div className={styles.openForm}>
              <PlusFillCircle className={styles.openForm_icon} form />
              <p>New todo</p>
            </div>
          </div>

          <div className={`${styles.Form} ${openForm && styles.upForm}`}>
            <form
              action=""
              onSubmit={(e) => onTodoSubmit(e)}
              className={styles.writeTodo}
              onClick={() => setToggleSelect(false)}
            >
              <input
                type="text"
                placeholder="Add new todo"
                className={styles.todoTextInput}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                autoFocus
              />
              <div className={styles.send} onClick={(e) => onTodoSubmit(e)}>
                <SendHPlane className={styles.send_icon} />
              </div>
            </form>
            <div className={styles.select}>
              <CategorySelect
                categorySelect={categorySelect}
                setCategorySelect={setCategorySelect}
                toggleSelect={toggleSelect}
                setToggleSelect={setToggleSelect}
              />
            </div>
          </div>

          <div
            className={`${styles.formOverlay} ${
              openForm ? "" : styles.noOverlay
            }`}
            onClick={closeForm}
          ></div>
        </div>
      ) : (
        <div
          className={`${styles.openFormButton} ${
            openForm ? styles.openFormButton_down : ""
          }`}
          onClick={onOpenForm}
        >
          <div className={styles.openForm}>
            <PlusFillCircle className={styles.openForm_icon} form />
            <p>New to-do</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoForm;
