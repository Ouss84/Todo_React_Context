import React, { useReducer } from "react";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Create clean app",
      task: "npx create-react-app",
      done: false,
    },
    {
      id: 2,
      title: "Clean app",
      task: "Delete and clean unnecessary stuff",
      done: false,
    },
    {
      id: 3,
      title: "Create store / context",
      task: "Create new file and use React.createContext()",
      done: false,
    },
  ],
};

export const NotesContext = React.createContext();

const reducer = (state, action) => {
  //   console.log(state.notes);
  switch (action.type) {
    case "ADD_NOTE":
      return {
        notes: [
          ...state.notes,
          {
            id: new Date().valueOf(),
            //   title: action.todo.title,
            //   task: action.todo.task,
            ...action.todo,
            done: false,
          },
        ],
      };
    case "REMOVE_NOTE":
      const shortnedList = state.notes.filter((item) => item.id !== action.id);

      return { ...state, notes: shortnedList };
    case "DONE_NOTE":
      const taskDone = state.notes.map((item) => {
        return item.id === action.id
          ? { ...item, done: !item.done }
          : { ...item };
      });
      return { ...state, notes: taskDone };
    case "CHANGING_TITLE":
      const taskToggled = state.notes.map((item) => {
        return item.done === true
          ? { ...item, title: item.title + " done" }
          : { ...item };
      });
      return { ...state, notes: taskToggled };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToDoItem = (todo) => {
    dispatch({
      type: "ADD_NOTE",
      todo: todo,
    });
  };
  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_NOTE",
      id: id,
    });
  };
  const toggleDoneNote = (id) => {
    dispatch({
      type: "DONE_NOTE",
      id: id,
    });
  };
  const changeTitle = (done) => {
    dispatch({
      type: "",
    });
  };
  const value = {
    notes: state.notes,
    addToDoItem: addToDoItem,
    removeTodo: removeTodo,
    toggleDoneNote: toggleDoneNote,
    changeTitle: changeTitle,
  };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
