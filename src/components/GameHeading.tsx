import { Heading } from "@chakra-ui/react";
import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}

export default GameHeading
