import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

function BookGrid() {
  const { data, error, isLoading } = useBooks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; //for loading skeletons
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => <BookCardSkeleton key={skeleton} />)}
        {data.map((bk) => (
          <BookCard key={bk.key} BookItem={bk} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default BookGrid;
