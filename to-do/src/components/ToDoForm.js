import "../styles/_ToDoForm.scss";
const ToDoForm = () => {
  return (
    <div className="form_holder">
      <div className="form_container">
        <form>
          <h3>Add Events</h3>
          <label>Title</label>
          <input type="text" placeholder="Title" id="title"></input>
          <div className="holder">
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
