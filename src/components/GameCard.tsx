import { Card, Image, Heading } from '@chakra-ui/react'
import type { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
