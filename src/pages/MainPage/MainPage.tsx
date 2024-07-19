import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import getData from "../../services/getData";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Footer from "../../components/Footer/Footer";

function MainPage() {
  const [results, setResults] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getData().then((result) => {
      setResults(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        <Main results={results} isLoading={isLoading} />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default MainPage;
