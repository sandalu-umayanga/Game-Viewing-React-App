import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number; 
}

const useGames = (selectedGenre: Genre | null) => 
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
