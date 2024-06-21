import {
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/BookInsight_Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { RxHamburgerMenu } from "react-icons/rx";
import SubjectsDrawer from "./SubjectsDrawer";
import { useState } from "react";
import { Subject } from "../consts/subjects";

interface Props {
  onSearch: (searchText: string) => void;
  onSelectSubject: (subject: Subject) => void;
  selectedSubject: Subject;
}

const Navbar = (props: Props) => {
  // const [showSubjectsDrawer, setShowSubjectsDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack pe="10px">
        <Show below="md">
          <Button
            as={IconButton}
            // size="sm"
            aria-label="Subjects Panel"
            icon={<RxHamburgerMenu size="md" />}
            onClick={onOpen}
          />
          <SubjectsDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSelectSubject={(subject: Subject) => {
              props.onSelectSubject(subject);
              onClose();
            }}
            selectedSubject={props.selectedSubject}
          />
        </Show>
        <Image src={logo} w={[120, 140, 200]} />
        <SearchInput onSearch={props.onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
