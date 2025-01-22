import { useCallback, useEffect, useState } from "react";

function debouncedFetch(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    let that = this;
    setTimeout(() => {
      fn.apply(that, args);
    }, wait);
  };
}

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRes = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/text/search?q=${encodeURIComponent(searchQuery)}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      console.log(data);
      setResults(data);
    } catch (err) {
      console.error("Error fetching", err);
    } finally {
      setLoading(false);
    }
  };
  const dFetch = useCallback(debouncedFetch(fetchRes, 500));

  useEffect(() => {
    dFetch(query);
  }, [query, fetchRes]);

  return (
    <div>
      <h1>Search</h1>
      <input
        className="bg-slate-200"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {results.map((result, i) => (
          <li key={result.id}>{result.question}</li>
        ))}
      </ul>
    </div>
  );
};
