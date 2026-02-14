import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [sortOrder, setSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    // Optionally clear other filters when searching
    // setSelectedGenre(null);
    // setSelectedPlatform(null);
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={handleSearch} onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="aside" paddingX={5} display={{ base: "none", lg: "block" }}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
            <SortSelector sortOrder={sortOrder} onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)} />
          </HStack>
        </Box>
        <GameGrid 
          selectedGenre={selectedGenre} 
          selectedPlatform={selectedPlatform} 
          sortOrder={sortOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
