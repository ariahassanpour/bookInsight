import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Book } from "../hooks/useBooks";
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
      </CardBody>
    </Card>
  );
}

export default BookCard;
