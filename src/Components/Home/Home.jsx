// src/HomePage.js
import React, { useState, useEffect } from "react";
import "./css/home.css";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Image,
  Flex,
  VStack,
  useBreakpointValue,
  Grid,
  GridItem,
  Card,
  CardBody,
  Divider,
  Button,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import tata from "../../Assets/06302022-image1-equitymaster.jpg";

import team1 from "../../Assets/P1.png";
import team2 from "../../Assets/P2.png";
import team3 from "../../Assets/P3.png";
import team4 from "../../Assets/P4.png";
import team5 from "../../Assets/P5.png";

import back from "../../Assets/bg.png";
import backm from "../../Assets/bgmobile.jpg";
import back2 from "../../Assets/bg121.png";
import back2m from "../../Assets/bg121mobile.png";

import startup1 from "../../Assets/startups/1.png";
import startup2 from "../../Assets/startups/2.png";
import startup3 from "../../Assets/startups/3.png";
import startup4 from "../../Assets/startups/4.png";
import startup5 from "../../Assets/startups/5.png";
import startup6 from "../../Assets/startups/6.png";
import startup7 from "../../Assets/startups/7.png";
import startup8 from "../../Assets/startups/8.png";
import startup9 from "../../Assets/startups/9.png";
import startup10 from "../../Assets/startups/10.png";
import startup11 from "../../Assets/startups/11.png";
import startup12 from "../../Assets/startups/12.png";
import startup13 from "../../Assets/startups/13.png";
import startup14 from "../../Assets/startups/14.png";

function HomePage() {
  const INTERVAL = 1400;
  const MAX_VISIBILITY = 3;

  const Card1 = ({ imageSrc }) => (
    <Box className="card1">
      <img src={imageSrc} alt="team" borderRadius={"xl"} />
    </Box>
  );
  const carouselData = [
    {
      imageSrc: team1,
    },
    {
      imageSrc: team2,
    },
    {
      imageSrc: team3,
    },
    {
      imageSrc: team4,
    },
    {
      imageSrc: team5,
    },
    // Add more objects for each card...
  ];
  const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    useEffect(() => {
      const timer = setInterval(() => {
        // Calculate the next active index
        const nextIndex = (active + 1) % carouselData.length;
        setActive(nextIndex);
      }, INTERVAL);

      return () => {
        clearInterval(timer);
      };
    }, [active, carouselData.length]);

    return (
      <Flex className="carousel">
        {carouselData.map((data, i) => (
          <Flex
            width={"80%"}
            className="card-container"
            flexDirection="column"
            alignItems="center"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card1 {...data} key={i} />
          </Flex>
        ))}
      </Flex>
    );
  };
  return (
    <Box>
      {/* Hero Section */}
      <Flex
        w={"full"}
        h={"100vh"}
        pb={10}
        backgroundImage={[`url(${backm})`, `url(${back})`]}
        backgroundSize={["contain", "fit"]}
        backgroundPosition={" "}
      >
        <VStack
          w={"full"}
          justify={"center"}
          mr="20%"
          mb={["50%", "20%"]}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Incubation.
              <br />
              Mentoring.
              <br />
              Capital.
            </Text>
            <Box w={"70%"}>
              <Text color={"white"} fontSize="20" fontWeight="300">
                Everything you need to turn your Startup Idea into a Success
                Story
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>

      {/* Stat Section */}

      <Box
        pt={["10", "35px"]}
        pb={["10", "35px"]}
        pl={["5", "0"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#F2F4F7"
        flexDirection={["column", "row"]}
      >
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={["20px", "20px", "47px", "47px"]}
        >
          <GridItem
            w={["90%", "180px"]}
            h={["100%", "180px"]}
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            boxShadow={"dark-lg"}
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "#1D2939",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize={["40", "48"]} fontWeight="600">
                50+
              </Text>
              <Text fontSize="20" fontFamily="500">
                Startups Incubated
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["90%", "180px"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            boxShadow={"dark-lg"}
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "#1D2939",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize={["40", "48"]} fontWeight="600">
                60 Lac
              </Text>
              <Text fontSize="22" fontFamily="500">
                Internal Seed Funds
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["90%", "180px"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            boxShadow={"dark-lg"}
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "#1D2939",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize={["40", "48"]} fontWeight="600">
                1000+
              </Text>
              <Text fontSize="20" fontFamily="500">
                Entrepreneurs Trained
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["90%", "180px"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            boxShadow={"dark-lg"}
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "#1D2939",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize={["40", "48"]} fontWeight="600">
                20+
              </Text>
              <Text fontSize="20" fontFamily="500">
                Mentors Panel
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* About Section */}

      <section id="about">
        <Box
          w={["full"]}
          h={["100vh", "56.25vw"]}
          backgroundImage={[`url(${back2m})`, `url(${back2})`]}
          backgroundSize={["contain", "cover"]}
          display="flex"
          justifyContent={["center", "flex-end"]}
          flexDirection={["column", "row"]}
        >
          <Box
            pt={["0", "10%"]}
            pr={["5%", "20%"]}
            pl={["5%", ""]}
            overflowX="hidden"
          >
            <Box maxW={["100%", "400px"]}>
              <Text
                className="gradient-text"
                fontSize="48px"
                fontWeight="extrabold"
              >
                About JIC
              </Text>
              <Text fontSize={["12", "18"]}>
                Academic excellence and vast experience in the field of research
                and innovation at JECRC Foundation led to the inception of JECRC
                Incubation Centre in 2021 with a vision to handhold the campus
                as well as entrepreneurs from around Rajasthan to turn their
                ideas into successful startups. JIC has become a one-of-its-kind
                startup incubation centre for young and ambitious startup
                founders who are addressing the big challenges and solving real
                problems through their businesses. We have built a collaborative
                entrepreneurial ecosystem and proven frameworks for early-stage
                startup founders to thrive upon and accelerate their startup
                growth.
              </Text>
            </Box>
          </Box>
        </Box>
      </section>

      {/* JIC Blogs Section */}
      <section id="JicBlogs">
        <Box bg="#F2F4F7">
          <Box py={[10, 14]}>
            <Container>
              <Heading as="h1" size="4xl" mb={[0, 8]} textAlign="center">
                <Text
                  fontWeight="900"
                  className="gradient-text1"
                  fontFamily={"sans-serif"}
                >
                  JIC BLOGS
                </Text>
              </Heading>
            </Container>
          </Box>
          <Box textAlign={["center", "right"]} pr={[0, "11%"]} pb={10}>
            <Link to="/JicBlogs">
              <Button
                bg={"white"}
                _hover={{
                  bg: "#1D2939",
                  color: "white",
                }}
              >
                View more
              </Button>
            </Link>
          </Box>
          <Box pb={20} pr={[5, 40]} pl={[5, 40]}>
            <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={6}>
              <GridItem>
                <Link to="/Blog1">
                  <Card w="full">
                    <CardBody
                      transition="background-color 0.3s ease-in-out"
                      _hover={{
                        bg: "#1D2939",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <Stack mt="6" spacing="3">
                        <Text fontSize="8px">AUGUST 13, 2021</Text>
                        <Heading size="md">
                          FROM MUSIC TO BUSINESS: HOW TAYLOR SWIFT IS GOING TO
                          EARN ₹1500 CRORES FROM HER UPCOMING TOUR.
                        </Heading>
                        <Image
                          src="https://www.hindustantimes.com/ht-img/img/2023/08/04/550x309/California-Hotel-Strike-Taylor-Swift-0_1691137412346_1691137445960.jpg"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                      </Stack>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/Blog2">
                  <Card w="full">
                    <CardBody
                      transition="background-color 0.3s ease-in-out"
                      _hover={{
                        bg: "#1D2939",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <Stack mt="6" spacing="3">
                        <Text fontSize="8px">AUGUST 13, 2021</Text>
                        <Heading size="md" pb={"3"}>
                          JOURNEY OF REDBULL AND MARKETING STRATEGY
                        </Heading>
                        <Image
                          src="https://media.npr.org/assets/img/2022/10/23/ap22295802404552_custom-fe1a268512e52fb2b20472bbf854be21ff77edc3-s900-c85.webp"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                      </Stack>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/Blog3">
                  <Card w="full">
                    <CardBody
                      transition="background-color 0.3s ease-in-out"
                      _hover={{
                        bg: "#1D2939",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <Stack mt="6" spacing="3">
                        <Text fontSize="8px">AUGUST 13, 2021</Text>
                        <Heading size="md" pb={"9"}>
                          Journey and obstacles : Tata grp
                        </Heading>
                        <Image
                          src={tata}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                      </Stack>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* Our Program Section */}

      <section id="OurProgram">
        <Box bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)">
          <Box pt={14} pb={[0, 14]}>
            <Container>
              <Heading as="h1" size="3xl" mb={8} textAlign="center">
                <Text fontWeight="700" color={"white"} fontSize={["35", "65"]}>
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
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              gap={[4, 6]}
            >
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      KHOJ: The Startup Conclave
                    </Text>
                  </Box>
                </GridItem>
              </Link>
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      Leader's Talk
                    </Text>
                  </Box>
                </GridItem>
              </Link>
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      Incubation Program
                    </Text>
                  </Box>
                </GridItem>
              </Link>
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      Induction Program
                    </Text>
                  </Box>
                </GridItem>
              </Link>
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      Virtual Accelerator
                    </Text>
                  </Box>
                </GridItem>
              </Link>
              <Link to="/Programs">
                <GridItem
                  w={["100%", "408px"]}
                  h="60px"
                  bg={"white"}
                  color={"black"}
                  rounded="lg"
                  _hover={{
                    bg: "#1D2939",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Box textAlign="center" pt={['4',"2"]}>
                    <Text fontSize={["18px", "27px"]} fontWeight="600">
                      Accelerator Program
                    </Text>
                  </Box>
                </GridItem>
              </Link>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* Incubated Startups Section */}

      <section id="startup">
        <Box bg="#F2F4F7"height={'100vh'}>
          <Box pt={14} pb={[0, 14]} textAlign="center" >
            <Text
              fontSize={["40", "65"]}
              fontWeight="700"
              className="gradient-text1"
            >
              INCUBATED STARTUPS
            </Text>
          </Box>
          <Box py={14} px={"17%"} textAlign="center">
            <Grid templateColumns={["repeat(3,1fr)", "repeat(7, 1fr)"]}>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup1} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup2} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup3} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup4} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup5} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup6} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup7} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup8} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup9} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup10} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup11} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup12} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup13} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={startup14} />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* TEAM Section */}

      <section id="team">
        <Box overflow="hidden">
          <Box height={["35vh", "80vh"]}>
            <Box py={[6, 14]} textAlign="center">
              <Text
                fontSize={["30px", "40px", "65px"]}
                fontWeight="700"
                className="gradient-text1"
              >
                TEAM
              </Text>
            </Box>
            
            <Box w={["100%", "100%"]} px={[10, "30%"]} >
              <Carousel />
            </Box>
          
          </Box>
        </Box>
      </section>
    </Box>
  );
}

export default HomePage;
