import React, { useEffect, useState } from "react";
import "./blogs.css";
import axios from "axios";
import { apiEndpoints } from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import blogsHeader from "../assets/images/komarov-egor-ozbgd40qO2o-unsplash.jpg";
import Footer from "../components/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiEndpoints.getBlogPosts);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    // Filter the blogs based on the search query
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`); // Redirect to individual blog page with the blog id as the route parameter
  };

  return (
    <div className="blogs">
      <Navbar />
      <Header
        headerImage={blogsHeader}
        headerText="#OurBlogs"
        className="header"
      />
      <div className="blogs-container">
        <input
          type="text"
          placeholder="Search blogs by title or content"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <div className="blog-container">
          {/* Use filteredBlogs for displaying blogs */}
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card"
              onClick={() => handleBlogCardClick(blog.id)}
            >
              <div className="blog-image-container">
                <img
                  src={`https://reelsnreels.onrender.com/${blog.headerImage}`}
                  alt={blog.title}
                  className="blog-image"
                />
              </div>
              <div className="blog-title">{blog.title}</div>
              <div className="blog-details">
                <div className="blog-date">{formatDate(blog.date)}</div>
                <div className="blog-view">View</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
