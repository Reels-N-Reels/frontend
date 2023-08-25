import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import careerHeader from "./../assets/images/hao-rui-0WI2O8TsY8o-unsplash.jpg";
import "../components/navbar.css";
import "./career.css";
import { apiEndpoints } from "../api";
import Footer from "../components/Footer";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await axios.get(apiEndpoints.getJobPosts);
      setJobs(response.data);
    } catch (error) {
      console.error("Error in fetching jobs.", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleClick = (id) => {
    navigate(`/career/${id}`);
  };

  return (
    <div className="career">
      <Navbar className="career-navbar" zIndex={20} />
      <Header
        headerImage={careerHeader}
        headerText="#OpenRoles"
        className="header"
      />
      <div className="career-container">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="career-box"
            onClick={() => handleClick(job.id)}
          >
            <h1 className="career-title">{job.position}</h1>
            <div className="career-details">
              <p className="career-type">{job.jobType}</p>
              <p className="career-location">{job.location}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Career;
