import React, { useState } from "react";
import {
  Flex,
  Input,
  Textarea,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { apiEndpoints } from "../api";

const CreateJobPost = () => {
  const [newJob, setNewJob] = useState({
    position: "",
    about: "",
    requirements: "",
    responsibilities: "",
    skills: "",
    location: "",
    jobType: "",
    experience: "",
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiEndpoints.createJobPost, newJob);
      toast({
        title: "Success",
        description: "Job created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setNewJob({
        position: "",
        about: "",
        requirements: "",
        responsibilities: "",
        skills: "",
        location: "",
        jobType: "",
        experience: "",
      });
    } catch (error) {
      console.error("Error creating job post:", error);
      toast({
        title: "Error",
        description: "Failed to create Job.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex flexDir="column" w="500px" h="100%">
      <Text mb={4} fontSize="xl" fontWeight="bold">
        New Job
      </Text>
      <Input
        name="position"
        placeholder="Job Position"
        mb={4}
        size="md"
        value={newJob.position}
        onChange={handleInputChange}
      />
      <Textarea
        name="about"
        placeholder="Job Description"
        mb={4}
        h="150px"
        resize="none"
        size="lg"
        value={newJob.about}
        onChange={handleInputChange}
      />
      <Textarea
        name="requirements"
        placeholder="Requirements"
        mb={4}
        h="150px"
        resize="none"
        size="lg"
        value={newJob.requirements}
        onChange={handleInputChange}
      />
      <Textarea
        name="responsibilities"
        placeholder="Responsibilities"
        mb={4}
        h="150px"
        resize="none"
        size="lg"
        value={newJob.responsibilities}
        onChange={handleInputChange}
      />
      <Textarea
        name="skills"
        placeholder="Skills"
        mb={4}
        h="100px"
        resize="none"
        size="lg"
        value={newJob.skills}
        onChange={handleInputChange}
      />
      <Input
        name="location"
        placeholder="Location"
        mb={4}
        size="md"
        value={newJob.location}
        onChange={handleInputChange}
      />
      <Input
        name="jobType"
        placeholder="Job Type(Part Time/Full Time/Intern)"
        mb={4}
        size="md"
        value={newJob.jobType}
        onChange={handleInputChange}
      />
      <Input
        name="experience"
        placeholder="Experience(In years)"
        mb={4}
        size="md"
        value={newJob.experience}
        onChange={handleInputChange}
      />
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
    </Flex>
  );
};

export default CreateJobPost;
