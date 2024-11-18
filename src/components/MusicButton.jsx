import React, { useState, useRef } from 'react';
import './MusicButton.css';

const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset to start
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-button-container">
            <button onClick={toggleMusic} className="music-button">
                {isPlaying ? '⏸️' : '🎧'}
            </button>
            <audio ref={audioRef} src="/music.mp3.mp3" />
        </div>
    );
};

export default MusicButton;
