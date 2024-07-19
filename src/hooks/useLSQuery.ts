import { useEffect, useState } from "react";

function useLSQuery() {
  const [query, setQuery] = useState<string>(() => localStorage.kaliganoffQuery ? localStorage.kaliganoffQuery : "");

  useEffect(() => () => {
      localStorage.kaliganoffQuery = query;
    });

  return [query, setQuery] as const;
}

export default useLSQuery;
