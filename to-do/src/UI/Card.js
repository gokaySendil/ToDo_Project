import "../styles/_Card.scss";
import { deleteItem } from "../components/database/Firebase";
const Card = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();
    deleteItem(props.title);
    props.removeSelf();
  };
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};

export default Card;
