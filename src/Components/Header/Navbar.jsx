import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  useDisclosure,
  Button,
  Stack,
  Image,
  Collapse, // Import the Collapse component
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from '../../Assets/logojic.png'

function Navbar() {
  const { isOpen, onToggle } = useDisclosure(); // Use isOpen to determine if the mobile navigation is open or closed

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
          <Link href="#about"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>About Us</Button></Link>
          <Link href="JicBlogs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>JIC Blogs</Button></Link>
          <Link href="/Programs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Our Program</Button></Link>
          <Link href="#startup"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Startups</Button></Link>
          <Link href="#team"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Team</Button></Link>
        </Stack>
        
        {/* Mobile navigation button */}
        <Button
          display={{ base: "inline-block", md: "none" }}
          variant="ghost"
          onClick={onToggle}
        >
          <ChevronDownIcon />
        </Button>
      </Flex>

      {/* Mobile navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          mt={4}
          p={2}
          display={{ md: "none" }}
          bg={"#1A2A67"}
        >
          <Stack spacing={4} align="center">
            <Link href="#about"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>About Us</Button></Link>
            <Link href="JicBlogs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>JIC Blogs</Button></Link>
            <Link href="/Programs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Our Program</Button></Link>
            <Link href="#startup"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Startups</Button></Link>
            <Link href="#team"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Team</Button></Link>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'black'}
              bg={'white'}
              href={'#'}
              _hover={{
                bg: '#1D2939',
                color: 'white',
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Navbar;
