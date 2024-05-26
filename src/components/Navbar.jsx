import { UnlockIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, Heading, Spacer, HStack, useToast, Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {

  const toast=useToast()

  const showToast=()=>{
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon:<UnlockIcon/>
    })
  }

  return (

    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
        <Avatar src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
              <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>Diwas@email.com</Text>
        <Button colorScheme='purple' onClick={showToast}>LogOut</Button>
        </HStack>
        </Flex>





    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  )
}

