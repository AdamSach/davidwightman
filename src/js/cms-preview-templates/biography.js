import React, { useState, useEffect } from "react";
import { useMediaAsset } from "@staticcms/core";

const BiographyPreview = ({ entry, collection, field }) => {
  const [currentSound, setCurrentSound] = useState(null);

  // Extract data directly from the entry object
  const title = entry.data.title || "Biography";
  const content = entry.data.body || "Biography content goes here.";
  const sounds = entry.data.sounds || [];
  const image = useMediaAsset(entry.data.image, collection, field, entry);

  const shadowX = -5; // Shadow offset to the left
  const shadowY = 5;  // Shadow offset downwards
  const blur = 5;     // Shadow blur radius
  const shadowColor = "rgba(0, 0, 0, 0.6)"; // Shadow color
  const primaryColor = "#c9b239";
  const backgroundColor = "#2a86ad";
  const textColor = "#000";

  // Function to play a random sound
  const playRandomSound = () => {
    if (sounds.length > 0) {
      const randomIndex = Math.floor(Math.random() * sounds.length);
      const soundPath = sounds[randomIndex];
      setCurrentSound(new Audio(soundPath));
    }
  };

  useEffect(() => {
    if (currentSound) {
      currentSound.play();
    }
  }, [currentSound]);

  // Apply background gradient to the specific div
  useEffect(() => {
    const previewFrameContent = document.querySelector(".CMS_PreviewFrameContent_content");
    if (previewFrameContent) {
      previewFrameContent.style.backgroundImage = `
        radial-gradient(circle at top left, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 70%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent),
        radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.15), transparent)
      `;
    }
  }, []);

  return (
    <section
      id="biography"
      className="biography-section min-vh-100 pa4"
      style={{ color: primaryColor, backgroundColor: backgroundColor }}
    >
              {/* Title Section */}
      <div className="title flex justify-center align-center f1 pa5">
        <h1
          id="dynamic-title"
          style={{
            fontFamily: "'Dunhill Script', cursive",
            textDecoration: "none",
            color: primaryColor,
            textShadow: `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`,
          }}
        >
          {title}
        </h1>
      </div>
      <div className="biography-container flex justify-center">
        <div className="biography-content mw7">
          {image && (
            <div className="biography-img mb4">
              <img
                src={image}
                alt="Biography Image"
                className="db"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  filter: `drop-shadow(${shadowX}px ${shadowY}px ${blur}px ${shadowColor})`,
                }}
              />
            </div>
          )}
          <div className="biography-text lh-copy f4" style={{ color: textColor }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>

      <div className="sound-button flex flex-column items-center mt5">
        <div>
          <span
            className="sound-text"
            style={{
              fontFamily: "'Dunhill Script', cursive",
              textShadow: `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`,
              color: primaryColor,
              fontSize: "24px",
            }}
          >
            In David's words
          </span>
        </div>
        <div
          className="pointer"
          style={{ width: "30px", position: "relative", top: "-20px" }}
          onClick={playRandomSound}
        >
          <svg id="b" xmlns="http://www.w3.org/2000/svg" color="{{$fontcolor}}" width="74.47" height="74.47" viewBox="0 0 74.47 74.47"><defs><style>{`.d{fill:#ffffff00;}`}</style></defs><g id="c"><path class="d" d="M0,30.34V0c24.82,0,49.65,0,74.47,0v74.47c-24.82,0-49.65,0-74.47,0,0-9.77,0-19.55,0-29.32.76,2.09,2.3,2.74,4.43,2.65,2.7-.11,5.42-.04,8.13,0,.37,0,.81.16,1.1.39,1.48,1.17,2.91,2.39,4.37,3.6,4.47,3.7,8.94,7.4,13.41,11.11.8.66,1.67,1.07,2.73.93,1.9-.24,3.02-1.65,3.02-3.78,0-13.23,0-26.46,0-39.69,0-1.74.07-3.49-.03-5.22-.04-.76-.26-1.61-.69-2.22-1.22-1.71-3.34-1.81-5.09-.37-5.89,4.87-11.77,9.75-17.66,14.61-.3.25-.77.41-1.16.42-2.76.04-5.52.08-8.27,0-2.12-.06-3.61.68-4.27,2.78ZM74.37,36.57c-.15-1.37-.3-3.89-.72-6.36-1.35-7.9-4.72-14.87-9.95-20.95-1.43-1.67-3.45-1.95-4.99-.66-1.95,1.62-2.17,3.58-.64,5.44.74.9,1.49,1.78,2.16,2.73,5.41,7.72,7.57,16.25,6.39,25.61-.49,3.92-1.65,7.64-3.38,11.18-1.27,2.6-2.9,4.96-4.67,7.23-1.41,1.82-1.05,3.78.9,5.3,1.53,1.2,3.52.92,4.87-.73,6.59-8.04,9.87-17.28,10.04-28.8ZM57.97,37.59c-.03-6.22-2-11.84-5.9-16.77-1.1-1.39-2.78-1.82-4.26-1.09-1.71.85-2.7,2.65-2.19,4.29.25.78.78,1.48,1.26,2.17,3.51,5.01,4.51,10.48,3.09,16.41-.61,2.55-1.86,4.79-3.32,6.96-1.15,1.71-.53,3.78,1.37,5.07,1.53,1.04,3.54.65,4.68-.92,3.48-4.78,5.25-10.13,5.26-16.12Z"/><path d="M0,30.34c.66-2.1,2.15-2.84,4.27-2.78,2.75.08,5.51.04,8.27,0,.39,0,.86-.17,1.16-.42,5.9-4.86,11.78-9.74,17.66-14.61,1.75-1.44,3.87-1.34,5.09.37.43.6.65,1.46.69,2.22.1,1.74.03,3.48.03,5.22,0,13.23,0,26.46,0,39.69,0,2.14-1.12,3.54-3.02,3.78-1.05.13-1.93-.27-2.73-.93-4.47-3.71-8.94-7.41-13.41-11.11-1.45-1.2-2.89-2.42-4.37-3.6-.29-.23-.73-.39-1.1-.39-2.71-.03-5.42-.1-8.13,0-2.13.08-3.67-.57-4.43-2.65v-14.81Z"/><path d="M74.37,36.57c-.17,11.52-3.45,20.76-10.04,28.8-1.35,1.64-3.34,1.93-4.87.73-1.94-1.53-2.31-3.48-.9-5.3,1.77-2.28,3.4-4.63,4.67-7.23,1.73-3.55,2.89-7.27,3.38-11.18,1.18-9.36-.98-17.9-6.39-25.61-.66-.95-1.42-1.84-2.16-2.73-1.53-1.86-1.31-3.81.64-5.44,1.54-1.29,3.56-1,4.99.66,5.23,6.08,8.6,13.05,9.95,20.95.42,2.47.57,4.99.72,6.36Z"/><path d="M57.97,37.59c0,5.99-1.78,11.33-5.26,16.12-1.14,1.57-3.15,1.96-4.68.92-1.91-1.29-2.52-3.36-1.37-5.07,1.45-2.16,2.7-4.41,3.32-6.96,1.42-5.93.43-11.4-3.09-16.41-.48-.69-1.02-1.39-1.26-2.17-.51-1.63.48-3.43,2.19-4.29,1.48-.74,3.17-.31,4.26,1.09,3.89,4.94,5.87,10.55,5.9,16.77Z"/></g></svg>
        </div>
      </div>
    </section>
  );
};

export default BiographyPreview;
