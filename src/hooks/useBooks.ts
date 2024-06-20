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

  function transformString(input:string) {
    // Remove any special characters except for alphanumeric characters and spaces
    let sanitized = input.replace(/[^a-zA-Z0-9 ]/g, '');
    // Replace spaces with plus signs and convert to lowercase
    let transformed = sanitized.replace(/\s+/g, '+').toLowerCase();
    return transformed;
}
function getEndPoint(bookQuery: BookQuery){
  //for now, we only search generally and not in specific subjects 
  let endpoint= ""
  if(bookQuery.searchText){
    let searchQuery = transformString(bookQuery.searchText)
    if(bookQuery.subject.short_endpoint){
      //url be like: https://openlibrary.org/search?q=subject%3Adentistry+subject%3A%28%22health%22%29
      endpoint="/search.json" +"?q=subject%3A" + searchQuery +"+subject%3A%28%22"+bookQuery.subject.short_endpoint+"%22%29"
    }
    else{
      endpoint="/search.json" +"?q=" + searchQuery
    }
  }
  else{
    endpoint=bookQuery.subject.endpoint
  }
  return endpoint
}
const useBooks=(bookQuery:BookQuery)=>useData<Book>(getEndPoint(bookQuery), {limit:bookQuery.limit}, [bookQuery])
export default useBooks