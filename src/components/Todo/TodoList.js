import React from "react";
import { useContext, useState } from "react";

import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
    // console.log(searchInput);
  };

  const ctx = useContext(NotesContext);
  const removeHandler = (id) => {
    // console.log(`list with ${id} is clicked`);

    ctx.removeTodo(id);
  };
  const toggleHandler = (id) => {
    ctx.toggleDoneNote(id);
    // console.log(ctx.notes);
  };
  // const changeTitle = (title) => {
  //   ctx.changeTitle(title);
  //   console.log(ctx.notes);
  // };
  const tasksFiltered = ctx.notes.filter((item) => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });
  // console.log(tasksFiltered);
  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <label> Search task:</label>
      <input type="text" onChange={searchInputHandler} />
      {/* {console.log(seachInput)} */}

      {tasksFiltered.map((note) => {
        return (
          <div
            className={`${classes.todo} ${note.done ? classes.taskDone : ""}`}
            key={note.id}
            onClick={() => toggleHandler(note.id)}
          >
            <div className="todo-details">
              <h2>
                {note.id}. {note.title}
              </h2>
              <p>{note.task}</p>
            </div>
            <span
              className={`material-icons ${classes.delete}`}
              onClick={() => {
                removeHandler(note.id);
              }}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
