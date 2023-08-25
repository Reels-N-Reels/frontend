import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
  Input,
  Textarea
} from "@chakra-ui/react";
import {
  MdOutlineEdit,
  MdOutlineDelete,
} from "react-icons/md";
import axios from "axios";
import { apiEndpoints } from "../api";

const JobList = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [editedJob, setEditedJob] = useState({
    position: "",
    about: "",
    requirements: "",
    responsibilities: "",
    skills: "",
    location: "",
    jobType: "",
    experience: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const fetchJobPosts = async () => {
    try {
      const response = await axios.get(apiEndpoints.getJobPosts);
      setJobPosts(response.data);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  };

  useEffect(() => {
    fetchJobPosts();
  }, []);

  const handleEdit = (job) => {
    setEditedJob({
      id: job.id,
      position: job.position,
      about: job.about,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      skills: job.skills,
      location: job.location,
      jobType: job.jobType,
      experience: job.experience,
    });
    onOpen();
  };

  const handleSaveEdit = async () => {
    console.log("Saving job with ID:", editedJob.id);
    try {
      await axios.put(apiEndpoints.updateJobPost(editedJob.id), editedJob);
      fetchJobPosts();
      toast({
        title: "Success",
        description: "Job Saved successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error("Error editing job post:", error);
      toast({
        title: "Error",
        description: "Failed to save job post.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(apiEndpoints.deleteJobPost(id));
      const updatedJobPosts = jobPosts.filter((job) => job.id !== id);
      setJobPosts(updatedJobPosts);
      toast({
        title: "Success",
        description: "Job Delete successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting job post:", error);
      toast({
        title: "Error",
        description: "Failed to deleted job post.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex flexDir="column" w="500px" h="100%">
      {jobPosts.map((job) => (
        <Flex
          key={job.id}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          borderWidth="1px"
          borderRadius="md"
          my={2}
          p="1rem"
        >
          <Flex flexDirection="column">
            <Text fontWeight="bold">{job.position}</Text>
            <Flex flexDirection="row">
              <Text mr={1} fontWeight="medium">
                {job.jobType}
              </Text>
              <Text fontWeight="medium" mr={1}>
                -
              </Text>
              <Text fontWeight="medium">{job.location}</Text>
            </Flex>
          </Flex>
          <Flex flexDirection="row">
            <IconButton
              icon={<MdOutlineEdit />}
              aria-label="Edit"
              mr={2}
              onClick={() => handleEdit(job)}
            />
            <IconButton
              icon={<MdOutlineDelete />}
              aria-label="Delete"
              mr={2}
              colorScheme="red"
              onClick={() => handleDelete(job.id)}
            />
          </Flex>
        </Flex>
      ))}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="position"
              mb={4}
              size="md"
              value={editedJob.position}
              onChange={(e) =>
                setEditedJob({ ...editedJob, position: e.target.value })
              }
            />
            <Textarea
              name="about"
              mb={4}
              h="150px"
              resize="none"
              size="lg"
              value={editedJob.about}
              onChange={(e) =>
                setEditedJob({ ...editedJob, about: e.target.value })
              }
            />
            <Textarea
              name="requirements"
              mb={4}
              h="150px"
              resize="none"
              size="lg"
              value={editedJob.requirements}
              onChange={(e) =>
                setEditedJob({ ...editedJob, requirements: e.target.value })
              }
            />
            <Textarea
              name="responsibilities"
              mb={4}
              h="150px"
              resize="none"
              size="lg"
              value={editedJob.responsibilities}
              onChange={(e) =>
                setEditedJob({ ...editedJob, responsibilities: e.target.value })
              }
            />
            <Textarea
              name="skills"
              mb={4}
              h="100px"
              resize="none"
              size="lg"
              value={editedJob.skills}
              onChange={(e) =>
                setEditedJob({ ...editedJob, skills: e.target.value })
              }
            />
            <Input
              name="location"
              mb={4}
              size="md"
              value={editedJob.location}
              onChange={(e) =>
                setEditedJob({ ...editedJob, location: e.target.value })
              }
            />
            <Input
              name="jobType"
              mb={4}
              size="md"
              value={editedJob.jobType}
              onChange={(e) =>
                setEditedJob({ ...editedJob, jobType: e.target.value })
              }
            />
            <Input
              name="experience"
              mb={4}
              size="md"
              value={editedJob.experience}
              onChange={(e) =>
                setEditedJob({ ...editedJob, experience: e.target.value })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="#CC5959"
              color="white"
              _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
              onClick={handleSaveEdit}
              mr={4}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default JobList;
