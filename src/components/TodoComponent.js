import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { CompleteToggle, AllToggle, showdata, texting } from "../redux/Action";

const TodoComponent = (props) => {
  const {
    todos,
    value,
    texting,
    show,
    Alltoggle,
    completetodo,
    completetoggle,
  } = props;
  console.log(completetodo);
  return (
    <>
      <div style={{ height: "100vh" }}>
        {/*  ***************************form submission ********************************  */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const todo = {
              id: Math.floor(100000 + Math.random() * 900000),
              todo: value,
              isCompleted: false,
            };

            show(todo);
            texting("");
          }}
        >
          <input
            type="text"
            name="text"
            value={value}
            className="text"
            onChange={(e) => {
              texting(e.target.value);
            }}
          />

          {/* <button type="submit">Submit</button> */}
        </form>
        {/***************** todo list *************************** */}
        <h2>Todo list</h2>
        <div>
          {todos.map((todo, i) => {
            if (todo.isCompleted === false) {
              return (
                <div
                  style={{
                    height: 80,
                    border: "1px solid red",
                    display: "flex",
                    margin: 40,
                    padding: 5,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* <div> {todo.id}</div> */}
                  <div className="text">{todo.todo}</div>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className="checkboxx"
                    onChange={(e) => Alltoggle(todo.id)}
                  />
                </div>
              );
            }
          })}
        </div>
        {/* ************************Completed todo ***********************   */}
        <div>
          <h2>Completed list</h2>
          {todos.map(function (todo, i) {
            if (todo.isCompleted === true) {
              return (
                <div>
                  <div
                    style={{
                      height: 80,
                      border: "1px solid blue",
                      display: "flex",
                      margin: 40,
                      padding: 5,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* <div> {todo.id}</div> */}
                    <div className="text">{todo.todo}</div>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      className="checkboxx"
                      onChange={(e) => completetoggle(todo.id)}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

function mapStatetoProps(state) {
  return {
    value: state.value,
    todos: state.data,
    completetodo: state.CompletedTodo,
  };
}

const DispatchtoProps = (dispatch) => {
  return {
    texting: function (text1) {
      dispatch(texting(text1));
    },
    show: function (textchange) {
      dispatch(showdata(textchange));
    },
    Alltoggle: function (id) {
      dispatch(AllToggle(id));
    },
    completetoggle: function (id) {
      dispatch(CompleteToggle(id));
    },
  };
};

const NewComponent = connect(mapStatetoProps, DispatchtoProps)(TodoComponent);
export default NewComponent;
