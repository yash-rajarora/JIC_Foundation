import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  useDisclosure,
  Button,
  Stack,
  Image
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from '../../Assets/logojic.png'

function Navbar() {
  
  const { onToggle } = useDisclosure();

  return (
    <Box
      height='73px'
      position="fixed"
      top={['0' , '0']}
      left={["0",'0']}
      right={["0",'0']}
      zIndex="999"
      bgGradient="linear(to-b, #0491F6 0%, #1F347A 68.02%, #1A2A67)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      border='1px'
      p="2"
    >
      <Flex maxW="6xl" mx="auto" alignItems="center">
        <Link href="/"><Image src={logo} height='50px' /></Link>
        <Spacer />
        <Stack
          spacing={4}
          isInline
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#" color='white'>About Us</Link>
          <Link href="JicBlogs" color='white'>JIC Blogs</Link>
          <Link href="#" color='white'>Our Program</Link>
          <Link href="#" color='white'>Startups</Link>
          <Link href="#" color='white'>Team</Link>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'black'}
            bg={'white'}
            href={'#'}
            _hover={{
              bg: '#1D2939',
              color:'white'
            }}>
            Contact Us
          </Button>
        </Stack>
        <Button
          display={{ base: "inline-block", md: "none" }}
          variant="ghost"
          onClick={onToggle}
        >
          <ChevronDownIcon />
        </Button>
        
      </Flex>
    </Box>
  );
}

export default Navbar;
