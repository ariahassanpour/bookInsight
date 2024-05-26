import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { primaryColor } from "./consts/colors";
import BookGrid from "./components/BookGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "side main"`,
        }}
      >
        <GridItem area="nav" bg={primaryColor}>
          <Navbar />
        </GridItem>
        <Show above="md">
          <GridItem area="side" bg="black">
            sidebar here
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
