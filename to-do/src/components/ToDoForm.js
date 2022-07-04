import "../styles/_ToDoForm.scss";
import { useState } from "react";
const ToDoForm = (props) => {
  const [todoTitle, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const newTodoAdder = (event) => {
    event.preventDefault();
    const obj = {
      title: todoTitle,
    };
    props.passData(obj);
  };

  return (
    <div className="form_holder">
      <div className="form_container">
        <form onSubmit={newTodoAdder}>
          <h3>Add Events</h3>
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            placeholder="Title"
            id="title"
          ></input>
          <div className="holder">
            <button type="sumbit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
