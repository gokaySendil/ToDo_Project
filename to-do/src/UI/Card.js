import "../styles/_Card.scss";
const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <button>Delete</button>
    </div>
  );
};

export default Card;
