// src/components/HomePage.js
import "./Homepage.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./LegalAdvice.css";

const LegalAdvice = () => {
  
  return (
    <div className="home-page">
      <Navbar/>
      <div className="content">
        <p className="main-title">
          Legal Advice
          <br />
        </p>
        <p className="sub-heading">Resolve the Complex Issues With  Legal Advice</p>
        {/* <p className="description">
        
        </p> */}
      </div>
      {/* <video autoPlay loop muted className="video-bg">
        <source src="\pexels_videos_1851190 (2160p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default LegalAdvice;
