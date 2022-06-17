import {
  AlertDialog,
  Button,
  Input,
  Container,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
  InputGroup,
  InputLeftElement,
  chakra,
  Center,
  Text,
  Stack,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { registernuser } from "../../../Redux/Registration/action";
import PricingPlans from "./PricingPlans";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const initState = {
  CardNumber: "",
  HolderName: "",
  ExpirationDate: "",
  cvv: "",
};

export const CardDetails = ({ handelsubmit, cancelRef }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setuser] = useState(initState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <>
      <Container centerContent>
        <Center p={4}>
          <Heading size="lg">Pay Now</Heading>
        </Center>
        <FormControl mt={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              size="lg"
              children={<MdOutlineEmail color="gray.300" />}
            />
            <Input
              isRequired
              type="number"
              placeholder="Card Number"
              name="name"
              //   onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl mt={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={
                <CFaUserAlt color="gray.300" focusBorderColor="pink.400" />
              }
            />

            <Input
              type="text"
              placeholder="HolderName"
              name="HolderName"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl mt={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<BsFillCalendarDateFill color="gray.300" />}
            />
            <Input
              type="date"
              placeholder="Birth Date"
              name="dateofbirth"
              // onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl mt={5}>
          <InputGroup>
            <Input
              type="number"
              placeholder="CVV"
              name="cvv"
              //   onChange={handleChange}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                // onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Container>
      <Center>
        <AlertDialogFooter>
          <Button
            colorScheme="telegram"
            ref={cancelRef}
            onClick={handelsubmit}
            // onClick={handelhideshow}
            //   onClick={onClose}
          >
            Create ID
          </Button>
        </AlertDialogFooter>
      </Center>
    </>
  );
};
// https://apple-tv-plus-clone.vercel.app/
// https://github.com/vadimghedreutan/Apple-tv-plus-clone
