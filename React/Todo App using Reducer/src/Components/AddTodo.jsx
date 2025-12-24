import { useContext, useRef } from "react";
import Button from "./Button";
import TodoItemContext from "../Store/TodoItemsProvider";

const AddTodo = () => {
  const { addItems } = useContext(TodoItemContext);
  const textInput = useRef();
  const textDate = useRef();

  const addHandler = () => {
    const todoText = textInput.current.value;
    const todoDate = textDate.current.value;
    textInput.current.value = "";
    textDate.current.value = "";
    addItems(todoText, todoDate);
  };

  return (
    <>
      <div className="container row-margin">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo Here"
              ref={textInput}
            ></input>
          </div>

          <div className="col-4">
            <input type="date" className="form-control" ref={textDate}></input>
          </div>
          <div className="col-2">
            {/* <button type="button" className="btn btn-success">Add</button> */}
            <Button btnType={"Success"} btnText={"Add"} handler={addHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
