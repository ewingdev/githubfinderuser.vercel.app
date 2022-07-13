import { InputGroupCustom } from "@/components/molecules";
import { Badge, Box, Flex, Heading, Stack } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Stack as="header" width="100%">
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="md">Github User Finder</Heading>
        </Box>
        <Box>
          Developed by
          <a href="https://github.com/ewingdev">
            {" "}
            <Badge colorScheme="green">ewingdev</Badge>
          </a>
        </Box>
      </Flex>
      <InputGroupCustom />
    </Stack>
  );
}
