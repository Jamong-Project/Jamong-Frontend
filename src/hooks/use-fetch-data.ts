import { useEffect, useState } from "react";
import Client from "../utils/client";

const useFetchData = (
  path: string,
  launch: boolean = true,
  config?: object,
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [header, setHeader] = useState<any>();

  useEffect(() => {
    if (!launch) return;

    setLoading(true);
    Client.get(path, config)
      .then((response) => {
        setData(response.data);
        setHeader(response.headers);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [path, config, launch]);

  return [data, loading, error, header];
};

export default useFetchData;
