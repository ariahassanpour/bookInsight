import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Book {
    title: string;
    author_name: string[];
    key: string;
    cover_i: string;
    has_fulltext: boolean;
    language: string[];
  }
  interface FetchBooksResponse {
    query: string;
    works: Book[];
  }

const useBooks=()=>{
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading]= useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchBooksResponse>("/trending/daily.json", {
        signal: controller.signal,
      })
      .then((res) => {setBooks(res.data.works)
        setLoading(false)
      })
      
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
    return () => controller.abort();
  },[]);
  return {books,error,isLoading}
}
export default useBooks