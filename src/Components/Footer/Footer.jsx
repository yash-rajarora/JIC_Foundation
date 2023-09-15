import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden

} from '@chakra-ui/react'

import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'

import app_img from '../../Assets/app.png';
import play_img from '../../Assets/play.png';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialLink = ({ label, href }) => {
    return (
      <Box as="a" href={href} fontWeight="bold" fontSize="lg" color="inherit" _hover={{ color: 'blue.500' }}>
        {label}
      </Box>
    );
  };




const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bgGradient={'linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)'}
      color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Address</ListHeader>
            <Text>JECRC Campus Shri Ram ki Nangal,<br/> via Sitapura, RIICO Tonk Road,<br/> Jaipur-302 022</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact Us:</ListHeader>
            <Text>Tarun Saraswat (+91 9772079954)<br/> Email: jic@jecrc.ac.in</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            <Stack direction={['column', 'row']}>
              <SocialButton label={'Linkedin'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>

      
    </Box>
  )
}