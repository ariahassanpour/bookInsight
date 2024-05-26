import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

function BookGrid() {
  const { books, error } = useBooks();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {books.map((bk) => (
          <BookCard key={bk.key} BookItem={bk} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default BookGrid;
