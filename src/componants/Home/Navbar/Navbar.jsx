import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Box,
  Menu,
  Avatar,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
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
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../Redux/Login/action";

function Navbar() {
  const token = JSON.parse(localStorage.getItem("tvappletoken"));
  const reduxtoken = useSelector((store) => store);
  // console.log(reduxtoken, "tokk");
  const [hide, sethide] = useState(true);
  useEffect(() => {}, [token]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const handelhideshow = () => {
    sethide(!hide);
  };

  const handellogout = () => {
    dispatch(signout());
  };
  return (
    <Flex
      top={0}
      alignItems="center"
      gap="2"
      width="100%"
      background="black"
      p={2}
      zIndex={10}
      position="fixed"
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
      {token == undefined || token == "" || reduxtoken == "" ? (
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
        </ButtonGroup>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar size={"md"} src={"https://bit.ly/broken-link"} mr={5} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Button onClick={handellogout}>Logout</Button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}

export default Navbar;
