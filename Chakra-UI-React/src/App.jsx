import { Heading, Button, Input, Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" p="5">
      <Heading as="h1" size="xl" mb="4">
        Welcome to My Chakra UI App
      </Heading>
      <Center>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="4"
        >
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Heading as="h2" size="md" mb="2">
                My Chakra UI App
              </Heading><br />
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              Chakra UI is a simple, modular, and accessible component library
              designed for React applications. It provides developers with a set
              of building blocks to create user interfaces quickly and
              efficiently.
            </Box>
          </Box>
        </Box>
      </Center><br />
      <Input placeholder="Enter your name" variant="filled" size="md" mb="4" />
      <Button colorScheme="blue">Submit</Button>
    </Box>
  );
}

export default App;
