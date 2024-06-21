import { Container, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import BookGrid from "./components/BookGrid";
import BookGridLimitSelector from "./components/BookGridLimitSelector";
import BookHeading from "./components/BookHeading";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchedTerm from "./components/SearchedTerm";
import Subjects from "./components/Subjects";
import { primaryColor } from "./consts/colors";
import { limitsList } from "./consts/limits";
import { Subject, bookSubjects } from "./consts/subjects";

export interface BookQuery {
  subject: Subject;
  limit: number;
  searchText: string;
}

function App() {
  const [bookQuery, setBookQuery] = useState<BookQuery>({
    subject: bookSubjects[0],
    limit: limitsList[2],
    searchText: "",
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "foot"`,
          md: `"nav nav" "side main" "foot foot"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg={primaryColor}>
          <Navbar
            onSearch={(searchTerm) =>
              setBookQuery({ ...bookQuery, searchText: searchTerm })
            }
            onSelectSubject={(subj) =>
              setBookQuery({ ...bookQuery, subject: subj })
            }
            selectedSubject={bookQuery.subject}
          />
        </GridItem>
        <Show above="md">
          <GridItem area="side" paddingX="3">
            <Subjects
              onSelectSubject={(subj) =>
                setBookQuery({ ...bookQuery, subject: subj })
              }
              selectedSubject={bookQuery.subject}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Container marginY={3} marginStart={0}>
            <BookHeading bookQuery={bookQuery} />
            <HStack>
              <BookGridLimitSelector
                selectedLimit={bookQuery.limit}
                setSelectedLimit={(lim) =>
                  setBookQuery({ ...bookQuery, limit: lim })
                }
              />
              {bookQuery.searchText && (
                <SearchedTerm
                  searchterm={bookQuery.searchText}
                  onCancle={() =>
                    setBookQuery({ ...bookQuery, searchText: "" })
                  }
                />
              )}
            </HStack>
          </Container>
          <BookGrid bookQuery={bookQuery} />
        </GridItem>

        <GridItem area="foot">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
