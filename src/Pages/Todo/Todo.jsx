import React, { useState, useRef, useEffect } from "react";
import Modal from "../../Components/Modal/Modal";
import { v4 as uuidv4 } from "uuid";
import "./todo.scss";
function Todo() {
  const localData = JSON.parse(window.localStorage.getItem("todo"));
  const [todo, setTodo] = useState(localData || []);
  const [modalActive, setModalActive] = useState(false);
  const [editObject, setEditObject] = useState([]);
  const [message, setMessage] = useState(false);
  const editText = useRef();
  const todoFunc = (evt) => {
    evt.preventDefault();
    const todoItem = {
      id: uuidv4(),
      title: evt.target[0].value,
      isComplited: false,
    };
    setTodo([...todo, todoItem]);
    evt.target[0].value = "";
  };
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const deleteTodoItem = (todoId) => {
    setTodo(todo.filter((item) => item.id !== todoId));
  };
  const editTodoItem = (todoId) => {
    setEditObject(todo.find((item) => item.id === todoId));
  };
  const setNewTitle = () => {
    editObject.title = editText.current.value;
    setTodo([...todo]);
    setEditObject([]);
  };
  const isComplitedFunc = (todoId) => {
    todo.forEach((item) => {
      if (item.id === todoId) {
        item.isComplited = !item.isComplited;
        setTodo([...todo]);
      }
    });
  };

  return (
    <>
      <section className="todo">
        <Modal className={modalActive ? "active" : ""}>
          <i
            className="fa-solid fa-xmark close-modal"
            onClick={() => {
              setModalActive(false);
              setMessage(false);
            }}
          ></i>
          <i
            className={`fa-solid fa-check success-modal 
            ${message ? "success" : ""}`}
          ></i>
          <div className="todo__modal-wrapper">
            <input type="text" className="todo__modal-input" ref={editText} />
            <button
              className="todo__modal-btn"
              onClick={() => {
                setNewTitle();
                setMessage(true);
              }}
            >
              Save
            </button>
          </div>
          <p className={`success-message ${message ? "success" : ""}`}>
            Changes have been saved successfully
          </p>
        </Modal>
        <h3 className="todo__title">Todo</h3>
        <form className="todo__form" onSubmit={(evt) => todoFunc(evt)}>
          <input
            type="text"
            placeholder="Work"
            className="todo__input"
            required
          />
          <button className="todo__add">Add</button>
        </form>
      </section>
      {todo.length > 0 ? (
        <>
          <table className="todo__table">
            <thead className="todo__thead">
              <tr className="todo__thead-row">
                <th>Number</th>
                <th>Title</th>
                <th>Action</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => (
                <tr className={item.isComplited ? "complited" : ""} key={index}>
                  <td
                    className={`todo__item ${
                      item.isComplited ? "checked-color" : ""
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`todo__item ${
                      item.isComplited ? "checked-color" : ""
                    }`}
                  >
                    {item.title}
                  </td>
                  <td
                    className={`todo__item ${
                      item.isComplited ? "checked-color" : ""
                    }`}
                  >
                    {item.isComplited ? "true" : "false"}
                    <input
                      type="checkbox"
                      className="todo__checkbox"
                      checked={item.isComplited ? true : false}
                      onChange={() => isComplitedFunc(item.id)}
                    />
                  </td>
                  <td className="todo__item">
                    <div className="todo__btns">
                      <button
                        className={`todo__btns-edit ${
                          item.isComplited ? "checked-color" : ""
                        }`}
                        onClick={() => {
                          editTodoItem(item.id);
                          setModalActive(true);
                          editText.current.value = "";
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={`todo__btns-delete ${
                          item.isComplited ? "checked-color" : ""
                        }`}
                        onClick={() => deleteTodoItem(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="todo__empty">Todo is empty</p>
      )}
    </>
  );
}

export default Todo;
