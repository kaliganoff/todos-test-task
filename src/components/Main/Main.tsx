import "./Main.css";
import { Result } from "../../interfaces/interfaces";

interface MainProps {
  results: Result[];
  isLoading: boolean;
}

function Main({ results, isLoading }: MainProps) {
  return (
    <main className="main" data-testid="main">
      <div className="cards-list-container" data-testid="cards-list-container">
        <div className="cards-list">
          {isLoading ? (
            <div className="loader" data-testid="loader" />
          ) : (
            <>
              {results.map((item: Result) => (
                <div className="item" key={item.id} data-testid="card">
                  <p>
                    Title: <b>{item.title}</b>
                  </p>
                  <p>Completed: {item.completed ? "✔" : "X"}</p>
                  <p>User ID: {item.userId}</p>
                  <p>Id: {item.id}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
