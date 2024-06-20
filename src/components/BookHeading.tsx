import { Heading } from "@chakra-ui/react";
import { BookQuery } from "../App";
interface Props {
  bookQuery: BookQuery;
}
const BookHeading = (props: Props) => {
  return (
    <Heading as="h1" marginY={4}>
      {props.bookQuery.subject.id == 0
        ? "Trending"
        : props.bookQuery.subject.name}{" "}
      Books
    </Heading>
  );
};

export default BookHeading;
