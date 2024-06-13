import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const BookCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default BookCardSkeleton;
