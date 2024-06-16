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

const useBooks=(subject: Subject, limit:number)=>useData<Book>(subject.endpoint, {limit:limit}, [subject?.id, limit])
export default useBooks