import { HStack, Image, Box } from '@chakra-ui/react'
import logo from '../assets/logo.png' 
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import GenreList from "./GenreList";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  DrawerCloseTrigger,
} from "./ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import type { Genre } from "../hooks/useGenres";

interface Props {
  onSearch: (searchText: string) => void;
  onSelectGenre?: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const NavBar = ({ onSearch, onSelectGenre, selectedGenre }: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <HStack>
        <Box display={{ base: "block", lg: "none" }} marginRight={2}>
          <DrawerRoot placement="start">
            <DrawerBackdrop />
            <DrawerTrigger>
              <GiHamburgerMenu size={25} style={{ cursor: 'pointer' }}/>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Genres</DrawerTitle>
                  <DrawerCloseTrigger />
                </DrawerHeader>
                <DrawerBody>
                  {onSelectGenre && <GenreList onSelectGenre={onSelectGenre} selectedGenre={selectedGenre || null} />}
                </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </Box>
        <Image src={logo} boxSize='60px'/>
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
