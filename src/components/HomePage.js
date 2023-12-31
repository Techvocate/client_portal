import "./Homepage.css";
import React, { useEffect, useState,useRef } from "react";
import BIRDS from 'vanta/dist/vanta.globe.min'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext} from 'react';
import {UserContext} from "../UserContext";

const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        backgroundColor: 0xe0e0ef,
        color: 0x5c5cde,
        color2: 0x76768b
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y:0
  // });
  // const [cursorVariant, setCursorVariant] = useState("default")


  // useEffect(() => {
  //   const mouseMove = e => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove", mouseMove);

  //   return()=>{
  //     window.removeEventListener("mousemove",mouseMove);
  //   }

  // }, []);

  // const variants = {
  //   default:{
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16
  //   },
  //   text:{
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: "rgb(140, 194, 184)",
  //     // mixBlendMode: "difference"
  //   }
  // }

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");
  


  const username = userInfo?.username;

  return (
    <div className="home-page" ref={myRef}>
      <Navbar/>
      
      <div className="content">
        <p   className="main-title">
          Streamline
          <br /> Your Legal Processes
        </p>
        {/* <p className="sub-heading">Effortless Document Management</p> */}
        <p   className="description">
          Effortlessly generate, customize, and manage a wide range of legal
          documents tailored to your specific needs.
        </p>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          {username && <Link to="/querypage" >
            <button className="try-now-button">
              Try Now <span style={{ fontSize: "20px" }}>→</span>
            </button>
          </Link>}
          {!username && <Link to="/login"> <button className="try-now-button">
              Try Now <span style={{ fontSize: "20px" }}>→</span>
            </button></Link> }
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
