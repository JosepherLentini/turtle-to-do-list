import Categories from "@/components/Categories";
import TodoForm from "@/components/TodoForm";
import { useState, useEffect } from "react";
import styles from "./MainLayout.module.scss"

const MainLayout = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      
        <Categories />
        {children}
        <TodoForm />
     
    </>
  );
};

export default MainLayout;
