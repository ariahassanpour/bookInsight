import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Book } from "../hooks/useBooks";
import { FiFileText } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";
import BookLangLabel from "./BookLangLabel";
import BookFullTextLabel from "./BookFullTextLabel";
interface Props {
  BookItem: Book;
}
function BookCard(props: Props) {
  const src = props.BookItem.cover_i
    ? "https://covers.openlibrary.org/b/ID/" + props.BookItem.cover_i + "-M.jpg"
    : "https://covers.openlibrary.org/b/ID/" +
      props.BookItem.cover_id +
      "-M.jpg";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={src} />
      <CardBody>
        <Heading fontSize="2xl">{props.BookItem.title}</Heading>
        {props.BookItem.authors
          ? props.BookItem.authors[0].name
          : props.BookItem.author_name}

        <HStack justifyContent="space-between" alignSelf="end">
          <BookFullTextLabel hasFullText={props.BookItem.has_fulltext} />
          <BookLangLabel langs={props.BookItem.language} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default BookCard;
