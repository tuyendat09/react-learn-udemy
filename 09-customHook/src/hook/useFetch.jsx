import { useEffect, useState } from "react";

export function useFetch(fecthFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFecthedData] = useState(initialValue);

  useEffect(() => {
    async function fecthData() {
      setIsFetching(true);
      try {
        const data = await fecthFn();
        setFecthedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
      setIsFetching(false);
    }

    fecthFn();
  }, [fecthFn]);

  return { fetchedData, error, isFetching, setFecthedData };
}
