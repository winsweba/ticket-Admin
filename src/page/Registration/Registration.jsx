import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";


const Registration = () => {
  const [formData, setFormData] = useState({
    slideForm: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // let navigate = useNavigate();

  const { createUser, login, currentUser } = useAuth();

  useEffect(() => {
    // console.log(formData.slideForm);
  }, [formData.slideForm]);

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // async function  () {

  useEffect(() => {
    console.log(currentUser);
  }, []);

  // }

  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      await login(formData.email, formData.password);
      // navigate("/home")
    } catch {
      // setError("Failed to create an account")
    }
  };
  // const handleFormSubmitSignUp = async (event) => {
  //   event.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     console.log("Passwords do not match");
  //   } else {
  //     try {
  //       await createUser(formData.email, formData.password);
  //       // navigate("/home")
  //     } catch {
  //       // setError("Failed to create an account")
  //     }
  //   }
  // };

  return (
    <>


<Box p={5} mb={50} shadow='md' borderWidth='1px'>
           <Text fontSize='xl' p={20} as='b'>Admin Login</Text>
     
         </Box>


         <Box >
         <Flex justify="center" >
        <Box  >
        <FormLabel  htmlFor="ticketAmount">Admin Email</FormLabel>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Email Address"
          required
        />
      </Box>
      <Box ml={10} >
      <FormLabel  htmlFor="ticketAmount">Admin Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
          placeholder="Password"
          required
        />
      </Box>
      <Box mt={8} ml={10}>
          <Button onClick={handleFormSubmitLogin} colorScheme='green'>Login</Button>
        </Box>
        </Flex>
         </Box>
         
        
    </>
  );
};

export default Registration;
