import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

const NavItem = ({ icon, title, tab, activeTab, onTabClick, navSize }) => {
  const isActive = tab === activeTab;

  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={isActive ? "#FFE5E5" : "transparent"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#FFE5E5" }}
          w={navSize === "large" && "100%"}
          onClick={() => onTabClick(tab)}
        >
          <MenuButton w="100%">
            <Flex flexDir="row" alignItems="center">
              <Icon
                as={icon}
                fontSize="xl"
                color={isActive ? "#750000" : "gray.500"}
                _hover={{ color: "#750000" }}
              />
              <Text
                ml={5}
                display={navSize === "small" ? "none" : "flex"}
                color={isActive ? "#750000" : "gray.500"}
                fontWeight={400}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}></MenuList>
      </Menu>
    </Flex>
  );
};

export default NavItem;
