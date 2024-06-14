import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

  interface FetchResponse<T> {
    query: string;
    works: T[];
  }

const useData=<T>(endpoint: string, dependencies?:any[])=>{
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading]= useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {setData(res.data.works)
        setLoading(false)
      })
      
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
    return () => controller.abort();
  },dependencies?[...dependencies]:[]);
  return {data,error,isLoading}
}
export default useData