import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/BookInsight_Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = (props: Props) => {
  return (
    <>
      <HStack pe="10px">
        <Image src={logo} w={[120, 140, 200]} />
        <SearchInput onSearch={props.onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
