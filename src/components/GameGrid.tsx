import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, sortOrder, searchText }: Props) => {
  const { data, error } = useGames(selectedGenre, selectedPlatform, sortOrder, searchText);

  return (
    <>
      {error && <Text color='tomato'>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={6}>
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
