'use client'
import { Link } from '@chakra-ui/next-js'
import {
    Flex, Heading, Input, Button,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
    
export default function Page() {

    
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
  
    return (
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          background={formBackground}
          p={12}
          rounded={6}
  
        >
          <Heading
            mb={6}
          >
            Log in
          </Heading>
          <Input
            placeholder="39ghwjd@naver.com"
            variant="filled"
            mb={3}
            type="email"
          ></Input>
          <Input
            placeholder='*******'
            variant="filled"
            mb={5}
            type="password"
          ></Input>
          <Button
            colorScheme="teal"
            mb={5}
          >Log In</Button>
          <Button
            onClick={toggleColorMode}
          >Toggle Color Mode</Button>
        </Flex>
      </Flex>
    )
    // return (
    //     <Link
    //         href="/about"
    //         color='blue.400'
    //         _hover={{ color : 'blue.500' }}
    //     >
    //         About 
    //     </Link>
    // )
}
