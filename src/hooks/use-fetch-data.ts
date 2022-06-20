import { useEffect, useState } from "react";
import Client from "../utils/client";

const useFetchData = <T>(
  path: string,
  launch: boolean = true,
  config?: object,
): [T | undefined, boolean, any, any] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [header, setHeader] = useState<any>();

  useEffect(() => {
    if (!launch) return;

    setLoading(true);
    Client.get(path, config)
      .then((response) => {
        setData(response.data);
        setError(undefined);
        setHeader(response.headers);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setData(undefined);
        setLoading(false);
      });
  }, [path, config, launch]);

  return [data, loading, error, header];
};

export default useFetchData;
