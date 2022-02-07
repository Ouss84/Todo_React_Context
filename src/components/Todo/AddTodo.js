import React from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import { useState } from "react";
const AddTodo = ({ addHandler }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    task: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userInput);
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
