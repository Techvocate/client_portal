// src/components/HomePage.js
import "./Homepage.css";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="content">
        <p className="main-title">
          Streamline
          <br /> Your Legal Processes
        </p>
        {/* <p className="sub-heading">Effortless Document Management</p> */}
        <p className="description">
          Effortlessly generate, customize, and manage a wide range of legal
          documents tailored to your specific needs.
        </p>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <Link to="/querypage">
            <button className="try-now-button">
              Try Now <span style={{ fontSize: "20px" }}>→</span>
            </button>
          </Link>
        </motion.div>
      </div>
      {/* <video autoPlay loop muted className="video-bg">
        <source src="\pexels_videos_1851190 (2160p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default HomePage;
