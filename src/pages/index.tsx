import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack mt="4">
          <FormControl>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            name="email"
            id="email"
            variant="filled"
            bgColor="gray.900"
            focusBorderColor="pink.500"
            w="100"
            type="email"
            _hover={{ bgColor: 'gray.900' }}
            size="lg"
          />
          </FormControl>
          <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            bgColor="gray.900"
            focusBorderColor="pink.500"
            w="100"
            name="password"
            id="password"
            type="password"
            variant="filled"
            _hover={{ bgColor: 'gray.900' }}
            size="lg"
          />
          </FormControl>
          
        </Stack>

        <Button size="lg" colorScheme="pink" type="submit" mt="6">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
