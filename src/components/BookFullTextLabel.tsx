import { Badge, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";
interface Props {
  hasFullText: boolean;
}
const BookFullTextLabel = (props: Props) => {
  return (
    <Tooltip
      label={
        props.hasFullText ? "Full Text Available" : "Full Text Not Available"
      }
      fontSize="md"
    >
      <Badge
        paddingX={2}
        fontSize={12}
        borderRadius="5px"
        colorScheme={props.hasFullText ? "green" : "gray"}
      >
        <HStack>
          <span>
            {props.hasFullText ? (
              <Icon as={FiFileText} size="100" />
            ) : (
              <Icon as={FiFileText} color="gray" />
            )}
          </span>
          {props.hasFullText ? (
            <Text>Full Text</Text>
          ) : (
            <Text>No Full Text</Text>
          )}
        </HStack>
      </Badge>
    </Tooltip>
  );
};

export default BookFullTextLabel;
