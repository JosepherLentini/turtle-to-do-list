import Todo from "@/components/Todo/Index";
import { MainContext } from "@/store";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import EmptyTodo from "@/components/EmptyTodo";

export default function () {
     const { state, dispatch } = useContext(MainContext);
     const router = useRouter();
     const categoryList = state.filter((el) => el.category === router.query.id)
     
       useEffect(() => {
         let items = JSON.parse(localStorage.getItem("todoText"));
         items &&
           dispatch({
             type: "GET-STORAGE",
             payload: items,
           });
       }, []);
     
    return categoryList.length > 0 ? (
      <Todo category={router.query.id} />
    ) : (
      <EmptyTodo />
    );
}

