import { List, ListItem, Text } from "@chakra-ui/react";
import { bookSubjects } from "../consts/subjects";
const Subjects = () => {
  return (
    <List>
      {bookSubjects.map((subj) => (
        <Text fontSize="lg">
          <ListItem key={subj} paddingY="5px">
            {subj}
          </ListItem>
        </Text>
      ))}
    </List>
  );
};

export default Subjects;
