/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Center,
  Flex,
  Spinner,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndpoints } from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./jobPage.css";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();
  const externalUrl = "https://forms.gle/ebkpnSvSsSHEeLzMA";

  useEffect(() => {
    fetchJobPost();
  }, []);

  const fetchJobPost = async () => {
    try {
      const response = await axios.get(apiEndpoints.getJobPostById(id));
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job post:", error);
    }
  };

  const navigateToExternalLink = (url) => {
    window.location.href = url;
  };

  const handleBack = () => {
    navigate("/career/");
  };

  if (!job) {
    return (
      <Center p="15rem">
        <Spinner color="red.500" />
      </Center>
    );
  }
  return (
    <div className="job">
      <Navbar className="navbar" />
      <Center mt="5rem">
        <Box p={4} maxWidth="800px" width="100%">
          <Text fontSize="2rem" fontWeight="bold" mb={6}>
            {job.position}
          </Text>
          <Flex flexDir="row" mb={6}>
            <Flex flexDir="column" mr="auto">
              <Text fontSize="1rem" fontWeight="medium" mb={2}>
                Job Type:
              </Text>
              <Text fontSize="1rem" fontWeight="normal">
                {job.jobType}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize="1rem" fontWeight="medium" mb={2}>
                Job Location:
              </Text>
              <Text fontSize="1rem" fontWeight="normal">
                {job.location}
              </Text>
            </Flex>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Description:
            </Text>
            <Text fontSize="1rem" fontWeight="normal" whiteSpace="pre-line">
              {job.about}
            </Text>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Experience:
            </Text>
            <Text fontSize="1rem" fontWeight="normal">
              {job.experience}
            </Text>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Skills:
            </Text>
            <Text fontSize="1rem" fontWeight="normal">
              {job.skills}
            </Text>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Job Requirements:
            </Text>
            <Text fontSize="1rem" fontWeight="normal" whiteSpace="pre-line">
              {job.requirements}
            </Text>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Job Responsibilities:
            </Text>
            <Text fontSize="1rem" fontWeight="normal" whiteSpace="pre-line">
              {job.responsibilities}
            </Text>
          </Flex>
          <Flex mb={6} flexDir="column">
            <Text fontSize="1rem" fontWeight="medium" mb={2}>
              Perks:
            </Text>
            <Text fontSize="1rem" fontWeight="normal" whiteSpace="pre-line">
              1. Creative Freedom: Express your artistic vision in music and
              films.
              <br />
              2. Collaborative Environment: Work with passionate talents from
              diverse backgrounds.
              <br /> 3. Skill Enhancement: Continuous learning and growth in a
              dynamic industry.
              <br /> 4. Innovative Projects: Contribute to cutting-edge
              productions shaping entertainment.
              <br /> 5. Cultural Impact: Influence and celebrate India's rich
              heritage through your work.
              <br /> 6. Flexibility: Balance work-life with remote and flexible
              scheduling.
              <br /> 7. Vibrant Workspace: Inspiring office that sparks
              creativity and ideas.
            </Text>
          </Flex>
          <Flex flexDir="row" mt={4} justifyContent="center">
            <Button
              bgColor="#CC5959"
              color="white"
              _hover={{ bgColor: "#FFE5E5", color: "#750000" }}
              mr="auto"
              onClick={() => navigateToExternalLink(externalUrl)}
            >
              Apply
            </Button>
            <IconButton
              icon={<MdOutlineKeyboardBackspace size={20} />}
              fontSize="1.2rem"
              fontWeight="bold"
              onClick={handleBack}
            />
          </Flex>
        </Box>
      </Center>
      <Footer />
    </div>
  );
};

export default JobPage;
