import { Box, Stack, Link, Divider, Text, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="6xl" marginInline="auto">
      <Divider my={10} />

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justifyContent="space-between"
      >
        <Text fontSize="md">
          Built by{" "}
          <Link
            href="https://github.com/ariahassanpour"
            textDecoration="underline"
            _hover={{ textDecoration: "underline" }}
            isExternal
          >
            Aria Hassanpour
          </Link>
          &nbsp; based on the openlibrary
        </Text>
        <Stack spacing={2} direction={{ base: "column", md: "row" }}>
          <Button
            leftIcon={<FaGithub />}
            as={Link}
            href="https://github.com/ariahassanpour/"
            rounded="md"
            colorScheme="gray"
          >
            Github repository
          </Button>
          <Button
            leftIcon={<FaLinkedin />}
            as={Link}
            href="https://www.linkedin.com/in/ariahassanpour/"
            rounded="md"
            color="white"
            bg="blue.600"
            _hover={{ bg: "blue.700" }}
          >
            LinkedIn profile
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
