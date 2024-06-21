import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText, useColorModeValue } from "@chakra-ui/react";

const BookCardSkeleton = () => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      bg={useColorModeValue("gray.400", "primary.700")}
    >
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default BookCardSkeleton;
