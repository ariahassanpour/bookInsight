import { BookQuery } from "../App";
import { Subject } from "../consts/subjects";
import useData from "./useData";

export interface BookAuthor{
  key:string,
  name:string
}

export interface Book {
    title: string;
    author_name?: string[];
    authors?:BookAuthor[]
    key: string;
    cover_i?: string;
    cover_id?:string;
    has_fulltext: boolean;
    language: string[];
  }
  interface FetchBooksResponse {
    query: string;
    works: Book[];
  }

const useBooks=(bookQuery:BookQuery)=>useData<Book>(bookQuery.subject.endpoint, {limit:bookQuery.limit}, [bookQuery])
export default useBooks