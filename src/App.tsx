import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "side main"`,
        }}
      >
        <GridItem area="nav" bg="green">
          navbar here
        </GridItem>
        <Show above="md">
          <GridItem area="side" bg="black">
            sidebar here
          </GridItem>
        </Show>
        <GridItem area="main" bg="blue">
          main content here
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
