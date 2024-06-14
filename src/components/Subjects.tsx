import { Button, List, ListItem, Text } from "@chakra-ui/react";
import { Subject, bookSubjects } from "../consts/subjects";
interface Props {
  onSelectSubject: (subject: Subject) => void;
}
const Subjects = (props: Props) => {
  return (
    <List>
      {bookSubjects.map((subj) => (
        <ListItem key={subj.id} paddingY="5px">
          <Button
            fontSize="lg"
            variant="link"
            onClick={() => props.onSelectSubject(subj)}
          >
            {subj.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Subjects;
