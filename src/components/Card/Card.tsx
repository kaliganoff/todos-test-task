import { Result } from "../../interfaces/interfaces";
import "./Card.css";

function Card({ item }: { item: Result }) {
  const { id, title, completed, userId } = item;
  return (
    <div className="item">
      <p>
        Title: <b>{title}</b>
      </p>
      <p>Completed: {completed ? "✔" : "–"}</p>
      <p>User ID: {userId}</p>
      <p>Id: {id}</p>
    </div>
  );
}

export default Card;
