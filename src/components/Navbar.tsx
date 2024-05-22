import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/BookInsight_Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" pe="10px">
        <Image src={logo} w={[120, 140, 200]} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
