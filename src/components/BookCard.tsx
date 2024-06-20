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
import noCover from "../assets/No_Covers_Available.png";
interface Props {
  BookItem: Book;
}
function BookCard(props: Props) {
  let src = noCover;
  if (props.BookItem.cover_i != null) {
    src =
      "https://covers.openlibrary.org/b/ID/" +
      props.BookItem.cover_i +
      "-M.jpg";
  } else if (props.BookItem.cover_id != null) {
    src =
      "https://covers.openlibrary.org/b/ID/" +
      props.BookItem.cover_id +
      "-M.jpg";
  }
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={src} />
      <CardBody>
        <HStack justifyContent="space-between" alignSelf="end" marginBottom={4}>
          <BookFullTextLabel hasFullText={props.BookItem.has_fulltext} />
          <BookLangLabel langs={props.BookItem.language} />
        </HStack>
        <Heading fontSize="2xl">{props.BookItem.title}</Heading>
        <Text marginTop={1}>
          {props.BookItem.authors
            ? props.BookItem.authors[0].name
            : props.BookItem.author_name}
        </Text>
      </CardBody>
    </Card>
  );
}

export default BookCard;
