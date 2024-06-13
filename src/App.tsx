import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { primaryColor } from "./consts/colors";
import BookGrid from "./components/BookGrid";
import Subjects from "./components/Subjects";

function App() {
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
            <Subjects />
          </GridItem>
        </Show>
        <GridItem area="main">
          <BookGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
