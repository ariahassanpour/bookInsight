import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Subjects from "./Subjects";
import { Subject } from "../consts/subjects";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubject: (subject: Subject) => void;
  selectedSubject: Subject;
}
const SubjectsDrawer = (props: Props) => {
  return (
    <Drawer onClose={props.onClose} placement="left" isOpen={props.isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Subjects
            onSelectSubject={props.onSelectSubject}
            selectedSubject={props.selectedSubject}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SubjectsDrawer;
