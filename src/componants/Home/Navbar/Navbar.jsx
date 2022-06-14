import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Box,
  AlertDialogFooter,
  Button,
  AlertDialog,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hide, sethide] = useState(true);
  const cancelRef = React.useRef();

  const handelhideshow = () => {
    sethide(!hide);
  };
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      background="black"
      p={2}
    >
      <Box p="2">
        <Link to="/">
          <img
            style={{ marginLeft: "50px", width: "70px", padding: "5px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBiEc2Q442yUNt4aDxe9ZQOYi9Zh0O8NX00KLxLBxMsZSFbF2VGH_arUXiXUFKBgtBHg&usqp=CAU"
          />
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button
          leftIcon={<BsPerson />}
          colorScheme="telegram"
          mr={6}
          onClick={onOpen}
        >
          Sign In
        </Button>
        {hide ? (
          <Signin
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            cancelRef={cancelRef}
            handelhideshow={handelhideshow}
          />
        ) : (
          <Signup
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            cancelRef={cancelRef}
            handelhideshow={handelhideshow}
          />
        )}

        {/* <Button leftIcon={<BsPerson />} colorScheme="telegram">
          Sign In
        </Button> */}
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
