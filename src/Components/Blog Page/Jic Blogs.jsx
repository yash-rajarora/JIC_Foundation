import {
    Card,
    Image,
    CardBody,
    Heading,
    Stack,
    Text, 
    Box,
    Container,

  } from '@chakra-ui/react'
import '../Home/css/home.css'
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function JicBlogs() {
    return (
        <>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.9 }} // Adjust the duration as needed
        >
        <Box pt={'10%'}>
          <Container>
            <Heading as="h1" size="3xl" mb={8} textAlign="center">
              <Text fontWeight='700' className='gradient-text1' fontSize={'65'} letterSpacing={'-1.972px'}>
              JIC BLOGS
              </Text>
            </Heading>
            </Container>
            <Box px={'20%' }textAlign='center' pb={'10'}>            
            <Text fontSize={'24'}>
                In this blog section, we aim to bring you insightful articles that shed light on the inner workings of such organizations, their challenges, triumphs, and the people behind their success
            </Text>
            </Box>

        </Box>
        <Box py={'14'} px='20%' bg={'gray.100'}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                py={5}
                px={5}
                my={5}
                borderRadius={'xl'}
                _hover={{
                    bg: '#1D2939',
                    color: '#ffffff'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                />
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                py={5}
                px={5}
                my={5}
                _hover={{
                    bg: '#1D2939',
                    color: '#ffffff'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                />
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                py={5}
                px={5}
                my={5}
                _hover={{
                    bg: '#1D2939',
                    color: '#ffffff'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                />
            </Card>
            
        </Box>
        </motion.div>
        </>
    )
  }