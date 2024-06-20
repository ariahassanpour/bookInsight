import { Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Subject, bookSubjects } from "../consts/subjects";
interface Props {
  onSelectSubject: (subject: Subject) => void;
  selectedSubject: Subject;
}
const Subjects = (props: Props) => {
  return (
    <>
      <Heading fontSize="2xl" marginTop={4} marginBottom={2}>
        Subjects:
      </Heading>
      <List>
        {bookSubjects.map((subj) => (
          <ListItem key={subj.id} paddingY="5px">
            <Text
              fontSize={props.selectedSubject.id === subj.id ? "xl" : "lg"}
              fontWeight={
                props.selectedSubject.id === subj.id ? "bold" : "normal"
              }
              variant="link"
              whiteSpace="normal"
              textAlign="left"
              padding={0}
              onClick={() => props.onSelectSubject(subj)}
            >
              {subj.name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Subjects;
