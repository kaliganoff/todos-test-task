import "./Main.css";
import { Result } from "../../interfaces/interfaces";
import Card from "../Card/Card";

interface MainProps {
  results: Result[];
  isLoading: boolean;
}

function Main({ results, isLoading }: MainProps) {
  return (
    <main className="main">
      <div className="cards-list-container">
        <div className="cards-list">
          {isLoading ? (
            <div className="loader" />
          ) : (
            <>
              {results.map((item: Result) => (
                <Card item={item} key={item.id}/>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
