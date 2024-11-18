import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa"; // Import the icon

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp size={24} className="icon" /> {/* Use the icon here */}
        </div>
      )}
    </Wrapper>
  );
};

// Define the Wrapper styled component
const Wrapper = styled.section`
  .top-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #3498db;
    color: white;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: glow 1.5s infinite alternate; /* Adding glow animation */

    &:hover {
      background-color: #2980b9;
    }
  }

  .icon {
    animation: lightEffect 1.5s infinite alternate; /* Adding icon animation */
  }

  /* Define the glow animation */
  @keyframes glow {
    0% {
      box-shadow: 0 0 2px #3498db, 0 0 2px #3498db, 0 0 5px #3498db, 0 0 10px #3498db;
    }
    100% {
      box-shadow: 0 0 5px #3498db, 0 0 10px #3498db, 0 0 10px #3498db, 0 0 10px #3498db;
    }
  }

  /* Define the lightEffect animation for the icon */
  @keyframes lightEffect {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(1.5);
    }
  }
`;

export default GoToTop;
