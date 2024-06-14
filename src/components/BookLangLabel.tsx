import { Badge, Tooltip } from "@chakra-ui/react";

interface Props {
  langs: string[];
}
const BookLangLabel = ({ langs }: Props) => {
  let fullList = "";
  let shortList = "";
  if (langs) {
    for (let i = 0; i < langs.length; i++) {
      if (i < 3) {
        shortList = shortList.concat(langs[i] + ", ");
      }
      fullList = fullList.concat(langs[i] + ", ");
    }
    if (shortList.length >= 2)
      shortList = shortList.substring(0, shortList.length - 2);
    if (fullList.length >= 2)
      fullList = fullList.substring(0, fullList.length - 2);
  }
  return (
    <Tooltip label={"available languages: " + fullList}>
      <Badge paddingX={2} fontSize={12} borderRadius="5px">
        {shortList}
      </Badge>
    </Tooltip>
  );
};

export default BookLangLabel;
