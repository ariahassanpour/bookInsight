import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { secondaryColor } from "../consts/colors";
import { MdExpandMore } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorSwitch = (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text color="white" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
  const MenucolorSwitch = (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
  return (
    <>
      <Show above="md">{colorSwitch}</Show>
      <Show below="md">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdExpandMore />}
          />
          <MenuList>
            <MenuItem>{MenucolorSwitch}</MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};

export default ColorModeSwitch;
