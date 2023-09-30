import {
    Card,
    Image,
    CardBody,
    Heading,
    Stack,
    Text, 
    Box,
    Container

  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
import '../Home/css/home.css'
import { motion } from 'framer-motion';
import tata from '../../Assets/06302022-image1-equitymaster.jpg'

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
        <Box pt={['40%','10%']}>
          <Container>
            <Heading as="h1" size="3xl" mb={8} textAlign="center">
              <Text fontWeight='700' className='gradient-text1' fontSize={['40','65']} letterSpacing={'-1.972px'}>
              JIC BLOGS
              </Text>
            </Heading>
            </Container>
            <Box px={'20%' }textAlign='center' pb={'10'}>            
            <Text fontSize={['18','24']}>
                In this blog section, we aim to bring you insightful articles that shed light on the inner workings of such organizations, their challenges, triumphs, and the people behind their success
            </Text>
            </Box>

        </Box>
        <Box py={'14'} px={['5','20%']} bg={'gray.100'}>
            <Link to='/Blog1'>
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
                    color: '#ffffff',
                    cursor:'pointer'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>FROM MUSIC TO BUSINESS: HOW TAYLOR SWIFT IS GOING TO EARN ₹1500 CRORES
                    FROM HER UPCOMING TOUR.</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src="https://www.hindustantimes.com/ht-img/img/2023/08/04/550x309/California-Hotel-Strike-Taylor-Swift-0_1691137412346_1691137445960.jpg"
                alt='Caffe Latte'
                />
            </Card>
            </Link>
            <Link to='/Blog2'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                py={5}
                px={5}
                my={5}
                _hover={{
                    bg: '#1D2939',
                    color: '#ffffff',
                    cursor:'pointer'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>JOURNEY OF REDBULL AND MARKETING STRATEGY</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src="https://media.npr.org/assets/img/2022/10/23/ap22295802404552_custom-fe1a268512e52fb2b20472bbf854be21ff77edc3-s900-c85.webp"
                alt='Caffe Latte'
                />
            </Card>
            </Link>
            <Link to='/Blog3'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                py={5}
                px={5}
                my={5}
                _hover={{
                    bg: '#1D2939',
                    color: '#ffffff',
                    cursor:'pointer'
                  }}
            >
                
            
                <Stack>
                <CardBody>
                    <Text py='2' color={'gray.500'} fontSize={'11'}>AUGUST 13, 2021 </Text>
                    <Heading size='md'>Journey and obstacles : Tata grp</Heading>
            
                    <Text py='2' color={'gray.600'}>
                    Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
                    </Text>
                </CardBody>
                </Stack>
                <Image
                borderRadius={'lg'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src={tata}
                alt='Caffe Latte'
                />
            </Card>
            </Link>
            
        </Box>
        </motion.div>
        </>
    )
  }