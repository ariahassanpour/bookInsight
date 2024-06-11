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
interface Props {
  BookItem: Book;
}
function BookCard(props: Props) {
  const src =
    "https://covers.openlibrary.org/b/ID/" + props.BookItem.cover_i + "-M.jpg";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={src} />
      <CardBody>
        <Heading fontSize="2xl">{props.BookItem.title}</Heading>
        {props.BookItem.author_name}
        <HStack justifyContent="space-between" alignSelf="end">
          {props.BookItem.has_fulltext ? (
            <Tooltip label="Has Full Text " fontSize="md">
              <span>
                <Icon as={FiFileText} size="100" />
              </span>
            </Tooltip>
          ) : (
            <Tooltip label="No Full Text " fontSize="md">
              <span>
                <Icon as={FiFileText} color="gray" />
              </span>
            </Tooltip>
          )}
          <BookLangLabel langs={props.BookItem.language} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default BookCard;
