import useData from "./useData";

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

const useBooks=()=>useData<Book>("/trending/daily.json")
export default useBooks