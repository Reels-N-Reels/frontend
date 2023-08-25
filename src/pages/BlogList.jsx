import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineRemoveRedEye,
  MdImage,
} from "react-icons/md";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { apiEndpoints } from "../api";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (/*str, lang*/) {
    return "";
  },
});

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const {
    isOpen: isPreviewOpen,
    onOpen: onPreviewOpen,
    onClose: onPreviewClose,
  } = useDisclosure();
  const {
    isOpen: isEditorOpen,
    onOpen: onEditorOpen,
    onClose: onEditorClose,
  } = useDisclosure();
  const toast = useToast();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editedBlog, setEditedBlog] = useState({
    title: "",
    author: "",
    content: "",
    date: "",
  });
  const [previewMode, setPreviewMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedFilePath, setSelectedFilePath] = useState("");
  const fileInputRef = useRef(null);

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setEditedBlog({
      title: blog.title,
      author: blog.author,
      content: blog.content,
      date: blog.date,
      headerImage: blog.headerImage,
    });
    setEditMode(!editMode);
    onEditorOpen();
  };

  const handlePreview = (blog) => {
    setSelectedBlog(blog);
    setPreviewMode(!previewMode);
    onPreviewOpen();
  };

  const handleChooseFile = () => {
    // Trigger the click event on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFilePath(file ? file.name : "");
    setEditedBlog({ ...editedBlog, headerImage: file });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(apiEndpoints.deleteBlogPost(id));
      // Reload the blog list after deletion
      toast({
        title: "Success",
        description: "Blog Delete successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast({
        title: "Error",
        description: "Failed to deleted blog post.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiEndpoints.getBlogPosts);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editedBlog.title);
      formData.append("author", editedBlog.author);
      formData.append("content", editedBlog.content);
      formData.append("date", editedBlog.date);
      formData.append("headerImage", editedBlog.headerImage);
      await axios.put(apiEndpoints.updateBlogPost(selectedBlog.id), formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to allow image upload
        },
      });

      onEditorClose();
      fetchBlogs();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Flex flexDir="column" w="500px" h="100%">
        {blogs.map((blog) => (
          <Box key={blog.id} p={4} borderWidth="1px" borderRadius="md" my={2}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">{blog.title}</Text>
              <Flex>
                <IconButton
                  icon={<MdOutlineRemoveRedEye />}
                  aria-label="Preview"
                  mr={2}
                  onClick={() => handlePreview(blog)}
                />
                <IconButton
                  icon={<MdOutlineEdit />}
                  aria-label="Edit"
                  mr={2}
                  onClick={() => handleEdit(blog)}
                />
                <IconButton
                  icon={<MdOutlineDelete />}
                  aria-label="Delete"
                  colorScheme="red"
                  onClick={() => handleDelete(blog.id)}
                />
              </Flex>
            </Flex>
            <Text>{blog.author}</Text>
          </Box>
        ))}
      </Flex>
      {previewMode && (
        <Modal isOpen={isPreviewOpen} onClose={onPreviewClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedBlog?.title}</ModalHeader>
            <ModalCloseButton />
            {selectedBlog && (
              <ModalBody>
                <Box
                  p="2rem"
                  borderWidth="1px"
                  borderRadius="md"
                  dangerouslySetInnerHTML={{
                    __html: md.render(selectedBlog.content),
                  }}
                />
              </ModalBody>
            )}
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onPreviewClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* Blog Edit Modal */}
      {editMode && (
        <Modal isOpen={isEditorOpen} onClose={onEditorClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Blog</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir="column" w="900px" h="100%" justifyContent="center">
                <Input
                  type="text"
                  mb={4}
                  size="md"
                  value={editedBlog.title}
                  onChange={(e) =>
                    setEditedBlog({ ...editedBlog, title: e.target.value })
                  }
                />
                <Input
                  type="text"
                  mb={4}
                  size="md"
                  value={editedBlog.author}
                  onChange={(e) =>
                    setEditedBlog({ ...editedBlog, author: e.target.value })
                  }
                />
                <Input
                  type="date"
                  mb={4}
                  size="md"
                  value={editedBlog.date}
                  onChange={(e) =>
                    setEditedBlog({ ...editedBlog, date: e.target.value })
                  }
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
                      onChange={(e) => handleFileChange(e, "headerImage")}
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
                  mb={4}
                  size="lg"
                  h="200px"
                  value={editedBlog.content}
                  onChange={(e) =>
                    setEditedBlog({ ...editedBlog, content: e.target.value })
                  }
                />
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onEditorClose}>
                Close
              </Button>
              <Button
                bgColor="#CC5959"
                color="white"
                _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
                onClick={handleSaveEdit}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BlogList;
