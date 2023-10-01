import {
    Box,
    Heading,
    Text,
    Container,
    Grid,
    GridItem,
    Image,
    UnorderedList,
    ListItem,  
    Link
} from "@chakra-ui/react";
import khoj from '../../Assets/khoj.jpg'
import induction from '../../Assets/induction.jpg'
import incbationpro from '../../Assets/incubationpro.jpg'
import accelerator from '../../Assets/accelerator.jpg'
import LeaderTalk from '../../Assets/parichay.png'
import virtual from '../../Assets/virtual.jpg'

export default function Programs(){
    return(
    <>
        {/* Heading Section */}

        <Box bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)" py={'7%'}>
            <Box py={14}>
                <Container>
                <Heading as="h1" size="3xl" mb={8} textAlign="center">
                    <Text fontWeight="700" color={"white"}>
                    OUR PROGRAMS
                    </Text>
                </Heading>
                </Container>
            </Box>
            <Box textAlign="center" px={["10", "15%"]}>
                <Text color={"white"} fontSize={"18"}>
                Whether you are preparing to put your idea into action or you want
                to scale your early-stage startup, we have tailored programs just
                for you. With 150+ alumni-startups already supported and 50+
                incubated startups under our belt, our programs are designed to
                provide startups with the best resources and integrated support so
                they can evolve faster, better.
                </Text>
            </Box>
            <Box py={20} px={["10%", "15%", "22%"]}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2,1fr) "]}
                gap={[4, 6]}
                justifySelf="center" alignSelf="center"
                >
                <Link href="#Khoj">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        KHOJ: The Startup Conclave
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                <Link href="#Leader">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        Leader's Talk
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                <Link href="#Virtual">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        Virtual Accelerator
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                <Link href="#Accelerator">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        Accelerator Program
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                <Link href="#Induction">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        Induction Program
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                <Link href="#Incubator">
                <GridItem
                    w={["100%", "408px"]}
                    h="60px"
                    bg={"white"}
                    color={"black"}
                    rounded="lg"
                    _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor:'pointer'
                    }}
                >
                    <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                        Incubation Program
                    </Text>
                    </Box>
                </GridItem>
                </Link>
                </Grid>
            </Box>
            </Box>

            {/* Khoj Section */}
            <section id="Khoj">
            <Box  py={'7%'}>
                <Box pl={['10%','20%']} pr={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                
                >
                    <GridItem>
                        <Image 
                        src={khoj}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        objectFit={'cover'}
                        />
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'} >
                            KHOJ-The Startup Conclave
                        </Text>
                        <Text fontFamily={'Raleway'} fontWeight={'400'} justifyContent={'space-between'} fontSize={'17'}>
                            40+ Startups, 10+ colleges, 20+ Prominent Personalities, 2lakh+ cash prizes and credits worth 2700k USD.
                            JECRC Incubation Centre in association with Venture Catalysts organized the KHOJ- Bharat Start-up Yatra which
                             witnessed the presence of start-ups, investors, and ecosystem enablers, ecosystem builders and Amazing 
                             founders of the JAIPUR entrepreneurial ecosystem. Our Startup conclave became a historical event where 
                             40+ Startups along with the national partners Indian Venture and Alternate Capital Association (IVCA), 
                             AWS Startup Ramp, AWS Activate, Alpha Microsoft for Startups, Beams Fintech Fund, and IncubateHub, 
                             came under one roof for pitching, expo, quiz, brand battle, and more.
                        </Text>
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
            <section id="Leader">
            <Box bg={'#D9D9D9'} py={'7%'}>
                <Box px={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                gap={'10'}
                >
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'}>
                           Leader's Talk
                        </Text>
                        <Text fontFamily={'Raleway'}>
                        This is a talk series with the pioneers of start-ups and organization leaders to encourage the young minds
                        and to motivate them to unleash the leadership potential hidden inside them.<br/>
                        Here we have witnessed the presence of following Details of Previous Speakers<br/>
                        <UnorderedList>
                        <ListItem>Mugdha Sinha- Former IAS and present secretary at DST</ListItem>
                        <ListItem>Chintan Vaishnav- Director of Atal Innovation Mission</ListItem>
                        <ListItem>Harshit Mathur- Founder of Razorpay</ListItem>
                        <ListItem>Amit Jain- Founder, Cars Dekho</ListItem>
                        <ListItem>Chandresh Chand- Director of Engineering at Grow</ListItem>
                        </UnorderedList>
                        </Text>
                    </GridItem>
                    <GridItem>
                    <Image 
                        src={LeaderTalk}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        />
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
            <section id="Virtual">
            <Box  py={'7%'}>
                <Box pl={['10%','20%']} pr={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                
                >
                    <GridItem>
                        <Image 
                        src={virtual}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        />
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'} >
                        Virtual Accelerator
                        </Text>
                        <Text fontFamily={'Raleway'} fontWeight={'400'} justifyContent={'space-between'} fontSize={'17'}>
                        Open to early-stage startups across the country, our virtual accelerator programs aids startup founders in
                        speeding up their customer discovery and finding the product-market fit. We also prepare them for
                        fundraising via pitching sessions, demo day and investor meetings.
                        </Text>
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
            <section id="Accelerator">
            <Box bg={'#D9D9D9'} py={'7%'}>
                <Box px={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                gap={'10'}
                >
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'}>
                            Accelator Program
                        </Text>
                        <Text fontFamily={'Raleway'}>
                        An intensive 10-week program for JECRC students that helps them to take their idea to the market.
                        The program focuses on helping startups expand their knowledge via workshops and mentoring sessions.
                        The selected startups are also given seed funding support.
                        </Text>
                    </GridItem>
                    <GridItem>
                    <Image 
                        src={accelerator}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        objectFit={"cover"}
                        />
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
            <section id="Induction">
            <Box  py={'7%'}>
                <Box pl={['10%','20%']} pr={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                
                >
                    <GridItem>
                        <Image 
                        src={induction}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        objectFit={'cover'}
                        />
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'} >
                        Induction Program
                        </Text>
                        <Text fontFamily={'Raleway'} fontWeight={'400'} justifyContent={'space-between'} fontSize={'17'}>
                        The objective of the Incubation Program is to connect this program to the Accelerator Program giving the
                        students an idea about startup, pitch deck and pitch so that they can leverage the accelerator program
                        sessions more effectively. Basically to provide the students with the basic knowledge about the startups
                        and how a startup works. And also ensure that they move up the ladder of startups and are able to make
                        an MVP from an Ideation stage
                        </Text>
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
            <section id="Incubator">
            <Box bg={'#D9D9D9'} py={'7%'}>
                <Box px={['10%','20%']}>
                <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                gap={'10'}
                >
                    <GridItem>
                        <Text fontWeight='700' className='gradient-text1' fontSize={'27'}>
                            Incubation Program
                        </Text>
                        <Text fontFamily={'Raleway'}>
                        The objective of the Incubation Program is to connect this program to the Accelerator Program giving the
                        students an idea about startup, pitch deck and pitch so that they can leverage the accelerator program
                        sessions more effectively. Basically to provide the students with the basic knowledge about the startups
                        and how a startup works. And also ensure that they move up the ladder of startups and are able to make
                        an MVP from an Ideation stage
                        </Text>
                    </GridItem>
                    <GridItem>
                    <Image 
                        src={incbationpro}
                        height={'400px'}
                        width={'400px'}
                        borderRadius={"xl"}
                        objectFit={'cover'}
                        />
                    </GridItem>
                </Grid>
                </Box>
            </Box>
            </section>
        </>
        )
}
