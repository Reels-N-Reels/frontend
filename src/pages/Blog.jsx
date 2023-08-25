/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Center,
  Flex,
  Spinner,
  Tooltip,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import "./blog.css";
import { MdOutlineShare } from "react-icons/md";
import MarkdownIt from "markdown-it";
import axios from "axios";
import { apiEndpoints } from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (/*str, lang*/) {
    return "";
  },
});

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetchBlogPost();
  }, []);

  const fetchBlogPost = async () => {
    try {
      const response = await axios.get(apiEndpoints.getBlogPostById(id));
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };

  if (!blog) {
    return (
      <Center p="15rem">
        <Spinner color="red.500" />
      </Center>
    );
  }

  const isWebShareSupported = () => {
    return navigator.share !== undefined;
  };

  const shareContent = async () => {
    try {
      await navigator.share({
        title: `${blog.title}`, // Replace with your desired title
        text: "ReelsNReels Studio", // Replace with your desired text
        url: `http://reelsnreels.com/blogs/${id}`, // Replace with the URL you want to share
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleShareClick = () => {
    // For demonstration purposes, we'll just show a toast message.
    if (isWebShareSupported()) {
      shareContent();
      toast({
        title: "Content Shared",
        description: "The content has been shared!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Web Share API is not supported in this browser.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="blog">
      <Navbar className="navbar" />
      <Center mt="5rem">
        <Box p={4} maxWidth="800px" width="100%">
          <Center mb={4}>
            <Image
              src={`https://reelsnreels.onrender.com/${blog.headerImage}`}
              alt="Blog Header"
              w="100%"
              maxH="300px"
              objectFit="cover"
            />
          </Center>
          <Text fontWeight="bold" fontSize="2.5rem" mb={4}>
            {blog.title}
          </Text>
          <Flex flexDir="row" mb={6}>
            <Flex flexDir="column" mr="auto" justify="center">
              <Text fontWeight="medium" fontSize="1rem" mb={1}>
                Written By
              </Text>
              <Text fontWeight="bold" fontSize="1rem">
                {blog.author}
              </Text>
            </Flex>
            <Text fontWeight="medium" fontSize="1rem">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
          </Flex>
          <Box
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: md.render(blog.content),
            }}
            p="0.5rem"
          />
        </Box>
        <Tooltip label="Share">
          <IconButton
            icon={<MdOutlineShare size={20} />}
            size="lg"
            bgColor="#CC5959"
            color="white"
            _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
            position="fixed"
            bottom={8}
            right={8}
            zIndex="999"
            onClick={handleShareClick}
          />
        </Tooltip>
      </Center>
      <Footer />
    </div>
  );
};

export default Blog;
