import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React from "react";
interface Props {
  searchterm: string;
  onCancle: () => void;
}
const SearchedTerm = (props: Props) => {
  return (
    <Tag
      size="lg"
      key="lg"
      borderRadius="full"
      variant="solid"
      colorScheme="primary"
    >
      <TagLabel>searching for: {props.searchterm} </TagLabel>
      <TagCloseButton onClick={props.onCancle} />
    </Tag>
  );
};

export default SearchedTerm;
