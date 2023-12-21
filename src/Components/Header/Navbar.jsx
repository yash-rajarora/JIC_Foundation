import React ,{useEffect} from "react";
import {
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Button,
  Stack,
  Image,
  Collapse, // Import the Collapse component
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from '../../Assets/logojic.png'
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";


function Navbar() {
  const scrollToSection = (sectionId) => {
    onToggle(); // Close the mobile navigation menu first
  
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300); // Adjust the delay (in milliseconds) as needed
  };
  const { isOpen, onToggle } = useDisclosure(); // Use isOpen to determine if the mobile navigation is open or closed

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
        <Link to="/"><Image src={logo} height='50px' /></Link>
        <Spacer />
        <Stack
          spacing={4}
          isInline
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link to="/"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => scrollToSection('about')}>About Us</Button></Link>
          <Link to="JicBlogs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>JIC Blogs</Button></Link>
          <Link to="/Programs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>Our Program</Button></Link>
          <Link to="/"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => scrollToSection('startup')}>Startups</Button></Link>
          <Link to="/"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => scrollToSection('team')}>Team</Button></Link>
          <Link to="Magnate"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}}>MAGNATE</Button></Link>
          <Link to="Contact">
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
          </Link>
        </Stack>
        
        {/* Mobile navigation button */}
        <Button
          display={{ base: "inline-block", md: "none" }}
          variant="ghost"
          onClick={onToggle}
        >
          <HamburgerIcon boxSize={6} color={"white"} />
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
            <Link to="/"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={onToggle}>Home</Button></Link>
            <Link to="#about"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => { scrollToSection('about');}}>About Us</Button></Link>
            <Link to="JicBlogs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={onToggle}>JIC Blogs</Button></Link>
            <Link to="/Programs"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={onToggle}>Our Program</Button></Link>
            <Link to="#startup"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => {scrollToSection('startup'); }}>Startups</Button></Link>
            <Link to="#team"><Button bg={"transparent"} color='white' _hover={{bg:'transparent'}} onClick={() => { scrollToSection('team');}}>Team</Button></Link>
            <Link to="Contact">
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'black'}
              bg={'white'}
              onClick={onToggle}
              _hover={{
                bg: '#1D2939',
                color: 'white',
              }}
              
            >
              Contact Us
            </Button>
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Navbar;