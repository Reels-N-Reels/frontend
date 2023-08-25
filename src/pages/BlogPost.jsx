import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import MarkdownIt from "markdown-it";
import { MdImage } from "react-icons/md";
import { apiEndpoints } from "../api";
import axios from "axios";
import "./blogPost.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function () {
    return "";
  },
});

const BlogPost = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    content: "",
    date: "",
  });
  const [previewContent, setPreviewContent] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [headerImage, setHeaderImage] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState("");
  const toast = useToast();
  const fileInputRef = useRef(null);

  // Function to get the current date in the format "YYYY-MM-DD"
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Set the initial value of the date to the current date
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      date: getCurrentDate(),
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleChooseFile = () => {
    // Trigger the click event on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setHeaderImage(file);
    setSelectedFilePath(file ? file.name : "");
  };

  const handlePreview = () => {
    const htmlContent = md.render(newBlog.content);
    setPreviewContent(htmlContent);
    setPreviewMode(!previewMode);
  };

  const handleSubmit = async () => {
    try {
      if (
        !newBlog.title ||
        !newBlog.author ||
        !newBlog.content ||
        !newBlog.date ||
        !headerImage // Check if a header image is selected
      ) {
        toast({
          title: "Error",
          description:
            "Please fill in all the required fields and select a header image.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("author", newBlog.author);
      formData.append("content", newBlog.content);
      formData.append("date", newBlog.date);
      formData.append("headerImage", headerImage);

      await axios.post(apiEndpoints.createBlogPost, formData, );
      toast({
        title: "Success",
        description: "Blog post created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form data and preview state after successful submission
      setNewBlog({
        title: "",
        author: "",
        content: "",
        date: getCurrentDate(),
      });
      setHeaderImage(null);
      setSelectedFilePath("");
      setPreviewMode(false);
      setPreviewContent("");
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast({
        title: "Error",
        description: "Failed to create blog post.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex flexDir="column" w="500px" h="100%">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        New Blog Post
      </Text>
      <Input
        name="title"
        placeholder="Title"
        mb={4}
        size="lg"
        value={newBlog.title}
        onChange={handleInputChange}
      />
      <Input
        name="author"
        placeholder="Author"
        mb={4}
        size="md"
        value={newBlog.author}
        onChange={handleInputChange}
      />
      <Input
        name="date"
        type="date"
        placeholder="Date"
        mb={4}
        size="md"
        value={newBlog.date}
        onChange={handleInputChange}
      />
      <FormControl mb={4}>
        <InputGroup>
          <Input
            type="text"
            readOnly
            onClick={handleChooseFile}
            value={selectedFilePath}
            placeholder="Select a header image"
          />
          <InputLeftElement
            pointerEvents="none"
            children={<MdImage />} // Replace FiUpload with your desired icon
            ml="5px"
            color="gray.500"
          />
          <Input
            name="image"
            type="file"
            accept="image/*"
            placeholder="Header Image"
            size="md"
            onChange={handleFileChange}
            ref={fileInputRef}
            opacity={0}
            zIndex="-1"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            cursor="pointer"
          />
        </InputGroup>
      </FormControl>
      <Textarea
        name="content"
        placeholder="Content"
        mb={4}
        h="200px"
        resize="none"
        size="lg"
        value={newBlog.content}
        onChange={handleInputChange}
      />
      <Button
        bgColor="#CC5959"
        color="white"
        _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
        size="md"
        onClick={handlePreview}
        marginTop="1rem"
      >
        Preview
      </Button>
      {previewContent && (
        <Box
          p="2rem"
          mt={4}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          maxW="600px"
          maxH="400px"
          overflowY="auto"
        >
          <Text fontWeight="bold" mb={2}>
            Preview
          </Text>
          <div dangerouslySetInnerHTML={{ __html: previewContent }} />
        </Box>
      )}
      {previewContent && (
        <Button
          bgColor="#CC5959"
          color="white"
          _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
          size="md"
          onClick={handleSubmit}
          mt={4}
        >
          Publish
        </Button>
      )}
    </Flex>
  );
};

export default BlogPost;
