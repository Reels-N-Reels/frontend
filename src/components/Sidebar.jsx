import React, { useState } from "react";
import {
  Flex,
  Text,
  Icon,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  MdMenu,
  MdWorkOutline,
  MdOutlineArticle,
  MdLogout,
} from "react-icons/md";
import {Navigate } from "react-router-dom";
import NavItem from "../components/NavItem";
import axios from "axios";
import { apiEndpoints } from "../api";

const Sidebar = ({ setActiveTabLocal }) => {
  const [activeTab, setActiveTab] = useState("Blog");
  const [navSize, changeNavSize] = useState("large");

  const handleTabClick = (tab) => {
    setActiveTabLocal(tab);
    setActiveTab(tab);
  };

  const handleLogout = async () => {
    try {
      await axios.post(apiEndpoints.logoutAdmin);
      localStorage.removeItem("adminToken");
      setTimeout(() => {
      <Navigate to="/admin/login" />;
      }, 100);
    } catch (error) {
      console.error("Error logging out:", error);
    } // Redirect to the login page
  };

  return (
    <Flex
      pos="fixed"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.1)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<MdMenu />}
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={MdWorkOutline}
          title="Jobs"
          tab="Tab 1"
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineArticle}
          title="Blogs"
          tab="Tab 2"
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Admin
            </Heading>
            <Flex
              flexDir="row"
              onClick={handleLogout}
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <Icon as={MdLogout} mr={1} color="#CC5959" />
              <Text color="#CC5959">Logout</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
