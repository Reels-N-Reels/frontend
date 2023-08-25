import React, { useState } from "react";
import { Flex, Text, Menu, MenuButton, Link, Icon } from "@chakra-ui/react";
import { MdOutlinePostAdd, MdList } from "react-icons/md";

const Topbar = ({ setActiveTabTop }) => {
  const [activeTab, setActiveTab] = useState("Blog");
  const handleTabClick = (tab) => {
    setActiveTabTop(tab);
    setActiveTab(tab);
  };
  return (
    <Flex
      pos="fixed"
      left="40%"
      h="80px"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.1)"
      bgColor="white"
      borderRadius="15px"
      w="400px"
      flexDir="row"
      justifyContent="space-between"
      padding={4}
      zIndex={3}
    >
      <Menu>
        <Link
          backgroundColor={activeTab === "Post" ? "#FFE5E5" : "transparent"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#FFE5E5" }}
          onClick={() => handleTabClick("Post")}
        >
          <MenuButton w="140px">
            <Flex flexDir="row" alignItems="center" justifyContent="center">
              <Icon
                as={MdOutlinePostAdd}
                fontSize="xl"
                color={activeTab === "Post" ? "#750000" : "gray.500"}
                _hover={{ color: "#750000" }}
              />
              <Text
                ml={5}
                display="flex"
                color={activeTab === "Post" ? "#750000" : "gray.500"}
                fontWeight={400}
              >
                Post
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <Link
          backgroundColor={activeTab === "List" ? "#FFE5E5" : "transparent"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#FFE5E5" }}
          onClick={() => handleTabClick("List")}
        >
          <MenuButton w="140px">
            <Flex flexDir="row" alignItems="center" justifyContent="center">
              <Icon
                as={MdList}
                fontSize="xl"
                color={activeTab === "List" ? "#750000" : "gray.500"}
                _hover={{ color: "#750000" }}
              />
              <Text
                ml={5}
                display="flex"
                color={activeTab === "List" ? "#750000" : "gray.500"}
                fontWeight={400}
              >
                List
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default Topbar;
