import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Book {
    title: string;
    author_name: string[];
    key: string;
    cover_i: string;
    has_fulltext: boolean
  }
  interface FetchBooksResponse {
    query: string;
    works: Book[];
  }

const useBooks=()=>{
    const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchBooksResponse>("/trending/daily.json", {
        signal: controller.signal,
      })
      .then((res) => setBooks(res.data.works))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  },[]);
  return {books,error}
}
export default useBooks