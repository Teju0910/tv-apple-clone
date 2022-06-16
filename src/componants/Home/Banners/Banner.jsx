import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { cards } from "../Data/Data";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState("");

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box
      position={"relative"}
      height={"800px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                border="1px soild red"
                w={"full"}
                // maxW={"10xl"}
                position="absolute"
                color="white"
                top="15%"
                transform="translate(0, -50%)"
              >
                <Heading
                  //   maxW={"4xl"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}
                  //   w={{ base: "1000", md: "1000", lg: "1000" }}
                >
                  {/* All Apple Originals */}
                </Heading>
                {/* <Text fontSize={{ base: "md", lg: "lg" }} color="black">
                  Exclusively on Apple TV+. Watch here and on the Apple TV app
                  across your devices.
                </Text>
                <Button
                  size={{ base: "md", lg: "lg" }}
                  width={{ base: "sx", lg: "md" }}
                  color="black"
                >
                  Start Free Trial
                </Button> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
