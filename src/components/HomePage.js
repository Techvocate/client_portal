import "./Homepage.css";
import React, { useEffect, useState,useRef } from "react";
import BIRDS from 'vanta/dist/vanta.clouds.min'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y:0
  });
  const [cursorVariant, setCursorVariant] = useState("default")


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return()=>{
      window.removeEventListener("mousemove",mouseMove);
    }

  }, []);

  const variants = {
    default:{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text:{
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(140, 194, 184)",
      // mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  


  return (
    <div className="home-page" ref={myRef}>
      <Navbar/>
      <motion.div className="cursor"
      variants={variants}
      animate={cursorVariant}
      />
      <div className="content">
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="main-title">
          Streamline
          <br /> Your Legal Processes
        </p>
        {/* <p className="sub-heading">Effortless Document Management</p> */}
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="description">
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
