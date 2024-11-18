// Bubble.js
import React, { useEffect } from "react";
import "./Bubble.css"; // Make sure to create this CSS file

const Bubble = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      document.body.appendChild(bubble);

      // Set a random position
      bubble.style.left = Math.random() * window.innerWidth + "px";
      bubble.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration

      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 5000); // Match this time with the animation duration
    };

    const bubbleInterval = setInterval(createBubble, 500); // Create a bubble every 500ms

    return () => clearInterval(bubbleInterval); // Clean up the interval on component unmount
  }, []);

  return null; // This component does not render anything itself
};

export default Bubble;
