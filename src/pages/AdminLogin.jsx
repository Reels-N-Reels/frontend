import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  useToast,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { apiEndpoints } from "../api";

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post(
        apiEndpoints.loginAdmin,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        onLogin();
        toast({
          title: "Success",
          description: "Login successful.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/admin"); // Navigate to admin page
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={8} maxW="lg" borderWidth={1} borderRadius={8} boxShadow="md">
        <Heading mb={4}>Admin Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={4}
          size="lg"
        />
        <InputGroup size="lg">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={4}
          />
          <InputRightElement>
            <IconButton
              bgColor="transparent"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            />
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={handleLogin}
          size="lg"
          w="100%"
          bgColor="#CC5959"
          color="white"
          _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default AdminLogin;
