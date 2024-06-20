import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

  interface FetchResponse<T> {
    query: string;
    works: T[]; //when retrieving all books or by subject, the array of books is returned in this variable
    docs: T[];//when searching for books, the array of books is returned in this variable
  }

const useData=<T>(endpoint: string, params?:{}, dependencies?:any[])=>{
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading]= useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    setError("")
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        params: params,
        signal: controller.signal,
      })
      .then((res) => {
        res.data.works? setData(res.data.works):setData(res.data.docs)
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