import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import { Heading, Box, Text, Divider } from "@chakra-ui/react";
import "./CardCaro.css";

export const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box className="minicard" p={3} pt={8}>
      <Heading
        size={{ base: "sm", md: "lg", lg: "lg" }}
        align={"start"}
        ml={{ base: 10, md: 40, lg: 40 }}
        mb={-1}
      >
        For All Mankind: Watch Season 1 Free for a Limited Time
      </Heading>
      <Carousel
        p={6}
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            // background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 50,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        // dotsNav={{
        //   show: true,
        //   itemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       borderRadius: "50%",
        //       border: 0,
        //     },
        //   },
        //   activeItemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       borderRadius: "50%",
        //       border: 0,
        //       background: "black",
        //     },
        //   },
        // }}
        itemsToShow={{ base: 2, md: 4, lg: 5 }}
        // itemsToShow={4}
        speed={400}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <Box
            width={{ base: "400px", md: "400px", lg: "470px" }}
            style={{
              height: 300,
              border: "35px solid white",
              textAlign: "center",
              lineHeight: "240px",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
            key={index}
          >
            <img
              style={{
                borderRadius: "20px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              src="https://media.graphassets.com/hDFvwsRKSh63RPAQaFX4"
            />
          </Box>
        ))}
      </Carousel>
      <Divider size={2} pl={5} pr={5} />
    </Box>
  );
};
