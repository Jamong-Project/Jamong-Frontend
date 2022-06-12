import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url: string, config?: object) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [header, setHeader] = useState<any>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data);
        setHeader(response.headers);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [url, config]);

  return [data, loading, error, header];
};

export default useFetchData;
