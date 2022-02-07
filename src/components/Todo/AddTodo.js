import React from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import { useState, useContext } from "react";
import { NotesContext } from "../store/todoStore";
const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    task: "",
  });
  const ctx = useContext(NotesContext);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(todo);
  };
  const addHandler = (e) => {
    e.preventDefault();
    console.log("Hey");
    ctx.addToDoItem(todo);
  };
  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" name="task" onChange={inputHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
