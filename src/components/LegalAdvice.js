// src/components/LegalAdvice.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LegalAdvice.css";
import { Link } from "react-router-dom";

const LegalAdvice = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="legal-advice-page">
      <div className="options">
        <div
          className={`option ${selectedOption === "voice" ? "selected" : ""}`}
          onClick={() => handleOptionClick("voice")}
        >
          Voice Call Support
        </div>
        <div
          className={`option ${selectedOption === "video" ? "selected" : ""}`}
          onClick={() => handleOptionClick("video")}
        >
          Video Call Support
        </div>
        <div
          className={`option ${selectedOption === "chatbot" ? "selected" : ""}`}
          onClick={() => handleOptionClick("chatbot")}
        >
          Chatbot Support
        </div>
      </div>
      <div className="selected-option-box">
        {selectedOption && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {selectedOption === "voice" && (
              <div className="selected-content">
                <p>Display Voice Call Support Content</p>
              </div>
            )}
            {selectedOption === "video" && (
              <div className="selected-content">
                <p>Display Video Call Support Content</p>
              </div>
            )}
            {selectedOption === "chatbot" && (
              <div className="selected-content">
                <p>Display Chatbot Support Content</p>
              </div>
            )}
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default LegalAdvice;
