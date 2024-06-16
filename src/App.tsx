import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { primaryColor } from "./consts/colors";
import BookGrid from "./components/BookGrid";
import Subjects from "./components/Subjects";
import { useState } from "react";
import { Subject, bookSubjects } from "./consts/subjects";
import BookGridLimitSelector from "./components/BookGridLimitSelector";
import { limitsList } from "./consts/limits";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    bookSubjects[0]
  );
  const [selectedLimit, setSelectedLimit] = useState(limitsList[2]);
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
              onSelectSubject={(subj) => setSelectedSubject(subj)}
              selectedSubject={selectedSubject}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <BookGridLimitSelector
            selectedLimit={selectedLimit}
            setSelectedLimit={setSelectedLimit}
          />
          <BookGrid selectedSubject={selectedSubject} limit={selectedLimit} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
