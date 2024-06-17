import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { primaryColor } from "./consts/colors";
import BookGrid from "./components/BookGrid";
import Subjects from "./components/Subjects";
import { useState } from "react";
import { Subject, bookSubjects } from "./consts/subjects";
import BookGridLimitSelector from "./components/BookGridLimitSelector";
import { limitsList } from "./consts/limits";

export interface BookQuery {
  subject: Subject;
  limit: number;
}

function App() {
  const [bookQuery, setBookQuery] = useState<BookQuery>({
    subject: bookSubjects[0],
    limit: limitsList[2],
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "side main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg={primaryColor}>
          <Navbar />
        </GridItem>
        <Show above="md">
          <GridItem area="side" bg="black" paddingX="5">
            <Subjects
              onSelectSubject={(subj) =>
                setBookQuery({ ...bookQuery, subject: subj })
              }
              selectedSubject={bookQuery.subject}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <BookGridLimitSelector
            selectedLimit={bookQuery.limit}
            setSelectedLimit={(lim) =>
              setBookQuery({ ...bookQuery, limit: lim })
            }
          />
          <BookGrid bookQuery={bookQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
