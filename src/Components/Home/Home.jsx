// src/HomePage.js
import React from "react";
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
  Link,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import back from "../../Assets/bg.png";
import back2 from "../../Assets/bg121.png";
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
  return (
    <Box>
      {/* Hero Section */}
      <Flex
        w={"full"}
        h={"100vh"}
        pb={10}
        backgroundImage={back}
        backgroundSize={"fit"}
        backgroundPosition={" "}
      >
        <VStack
          w={"full"}
          justify={"center"}
          mr="20%"
          mb="20%"
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
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#F2F4F7"
        flexDirection={["column", "row"]}
      >
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr 1fr 1fr"]}
          gap={["20px", "20px", "47px", "47px"]}
        >
          <GridItem
            w={["100%", "auto"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize="48" fontWeight="600">
                50+
              </Text>
              <Text fontSize="20" fontFamily="500">
                Startups Incubated
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["100%", "auto"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize="48" fontWeight="600">
                60 Lac
              </Text>
              <Text fontSize="20" fontFamily="500">
                Internal
                <br /> Seed Funds
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["100%", "auto"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize="48" fontWeight="600">
                1000+
              </Text>
              <Text fontSize="20" fontFamily="500">
                Entrepreneurs Trained
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={["100%", "auto"]}
            h="180px"
            bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)"
            color="white"
            rounded="lg"
            transition="background-color 0.3s ease-in-out"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            <Box textAlign="center" pt="5">
              <Text fontSize="48" fontWeight="600">
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
        w="full"
        h={["100vh", "56.25vw"]}
        backgroundImage={["none",`url(${back2})`]}
        backgroundSize="cover"
        display="flex"
        justifyContent={["center", "flex-end"]}
        flexDirection={["column", "row"]}
      >
        <Box
          pt={["0", "10%"]}
          pr={["0", "20%"]}
          pl={["10%",""]}
        >
            <Box w={["400px"]}>
              <Text
                className="gradient-text"
                fontSize="48px"
                fontWeight="extrabold"
              >
                About JIC
              </Text>
              <Text fontSize="18">
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
      <Box bg="#F2F4F7">
      <Box py={14}>
        <Container>
          <Heading as="h1" size="4xl" mb={8} textAlign="center">
            <Text
              fontWeight="700"
              className="gradient-text1"
              fontFamily={"sans-serif"}
            >
              JIC BLOGS
            </Text>
          </Heading>
        </Container>
      </Box>
      <Box textAlign={["center", "right"]} pr={[0, "11%"]} pb={10}>
        <Button
          bg={"white"}
          _hover={{
            bg: "#1D2939",
            color: "white",
          }}
        >
          View more
        </Button>
      </Box>
      <Box pb={20} pr={[10,40]} pl={[10,40]}>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={6}>
          <GridItem>
            <Card w="full">
              <CardBody
                transition="background-color 0.3s ease-in-out"
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                <Stack mt="6" spacing="3">
                  <Text fontSize="8px">AUGUST 13, 2021</Text>
                  <Heading size="md">
                    10 Hilarious Cartoons That Depict Real-Life Problems of
                    Programmers
                  </Heading>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </GridItem>
          <GridItem>
            <Card w="full">
              <CardBody
                transition="background-color 0.3s ease-in-out"
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                <Stack mt="6" spacing="3">
                  <Text fontSize="8px">AUGUST 13, 2021</Text>
                  <Heading size="md">
                    10 Hilarious Cartoons That Depict Real-Life Problems of
                    Programmers
                  </Heading>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </GridItem>
          <GridItem>
            <Card w="full">
              <CardBody
                transition="background-color 0.3s ease-in-out"
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                <Stack mt="6" spacing="3">
                  <Text fontSize="8px">AUGUST 13, 2021</Text>
                  <Heading size="md">
                    10 Hilarious Cartoons That Depict Real-Life Problems of
                    Programmers
                  </Heading>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Box>


      {/* Our Program Section */}

      <section id="OurProgram">
        <Box bgGradient="linear(to-b,  #0491F6 0%, #1F347A 68.02%, #1A2A67 100%)">
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
          <Box py={20} px={"22%"}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    KHOJ: The Startup Conclave
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    Leader's Talk
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    Incubation Program
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    Induction Program
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    Virtual Accelerator
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                w="408px"
                h="80px"
                bg={"white"}
                color={"black"}
                rounded="lg"
              >
                <Box textAlign="center" pt="5">
                  <Text fontSize="27" fontWeight="600">
                    Accelerator Program
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* Incubated Startups Section */}

      <section id="startup">
        <Box bg="#F2F4F7">
          <Box py={14} textAlign="center">
            <Text fontSize="65" fontWeight="700" className="gradient-text1">
              INCUBATED STARTUPS
            </Text>
          </Box>
          <Box py={14} px={"17%"} textAlign="center">
            <Grid templateColumns="repeat(7, 1fr)">
              <GridItem>
                <Image src={startup1} />
              </GridItem>
              <GridItem>
                <Image src={startup2} />
              </GridItem>
              <GridItem>
                <Image src={startup3} />
              </GridItem>
              <GridItem>
                <Image src={startup4} />
              </GridItem>
              <GridItem>
                <Image src={startup5} />
              </GridItem>
              <GridItem>
                <Image src={startup6} />
              </GridItem>
              <GridItem>
                <Image src={startup7} />
              </GridItem>
              <GridItem>
                <Image src={startup8} />
              </GridItem>
              <GridItem>
                <Image src={startup9} />
              </GridItem>
              <GridItem>
                <Image src={startup10} />
              </GridItem>
              <GridItem>
                <Image src={startup11} />
              </GridItem>
              <GridItem>
                <Image src={startup12} />
              </GridItem>
              <GridItem>
                <Image src={startup13} />
              </GridItem>
              <GridItem>
                <Image src={startup14} />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* TEAM Section */}

      <section id="team">
        <Box>
          <Box py={14} textAlign="center">
            <Text fontSize="65" fontWeight="700" className="gradient-text1">
              TEAM
            </Text>
          </Box>
          <Box maxWidth="800px" margin="0 auto">
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000} // Set the interval (in milliseconds) for auto-advancing slides
              stopOnHover={true} // Pause the auto-play on hover
            >
              <div>
                <img
                  src="https://i.pinimg.com/564x/ad/26/60/ad2660afb68666dd137afb32b5b5125f.jpg"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/564x/2d/da/48/2dda48be0dbd2cb168e95974a0d70e7e.jpg"
                  alt="Image 2"
                />
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/564x/8f/12/0c/8f120cffea198788e158a80bbe97effd.jpg"
                  alt="Image 3"
                />
              </div>
            </Carousel>
          </Box>
        </Box>
      </section>
    </Box>
  );
}

export default HomePage;
