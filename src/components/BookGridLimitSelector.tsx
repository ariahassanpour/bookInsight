import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { limitsList } from "../consts/limits";

interface Props {
  selectedLimit: number;
  setSelectedLimit: (limit: number) => void;
}
const BookGridLimitSelector = (props: Props) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        bg={useColorModeValue("gray.300", "gray.500")}
      >
        Showing: {props.selectedLimit} results
      </MenuButton>
      <MenuList>
        {limitsList.map((limit) => (
          <MenuItem key={limit} onClick={() => props.setSelectedLimit(limit)}>
            <Text
              fontWeight={limit === props.selectedLimit ? "bold" : "normal"}
            >
              {limit}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BookGridLimitSelector;
