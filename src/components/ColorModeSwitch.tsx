import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { secondaryColor } from "../consts/colors";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text color={secondaryColor}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
