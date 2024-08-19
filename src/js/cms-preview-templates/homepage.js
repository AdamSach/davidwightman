import React, { useState, useEffect } from "react";
import { useMediaAsset } from "@staticcms/core";

// Separate component to handle rendering of each menu item
const MenuItem = ({ item, collection, field, entry, width }) => {
  const image = useMediaAsset(item.image, collection, field, entry);
  const heading = item.heading;

  const shadowX = -5; // Shadow offset to the left
  const shadowY = 5;  // Shadow offset downwards
  const blur = 5;     // Shadow blur radius
  const shadowColor = 'rgba(0, 0, 0, 0.6)'; // Shadow color

  return (
    <li className="relative mh2" style={{ width: `${width}px` }}>
      <div className="db relative menu-item">
        <img
          src={image}
          alt={heading}
          className="db menuimg"
          style={{
            borderRadius: "8px",
            filter: `drop-shadow(${shadowX}px ${shadowY}px ${blur}px ${shadowColor})`,
          }}
        />
        <span
          className="absolute top-50 left-50 translate-center white f4 fw6 menu-heading"
          style={{
            opacity: 0, // Initially hidden
            transition: "opacity 0.3s ease", // Smooth fade-in
            textShadow: `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`, // Shadow for text
          }}
        >
          {heading}
        </span>
      </div>

      <style>
        {`
          .menu-item:hover .menu-heading {
            opacity: 1; // Show heading on hover
          }
        `}
      </style>
    </li>
  );
};

const HomePreview = ({ entry, collection, field }) => {
  const [shuffledMenuItems, setShuffledMenuItems] = useState([]);
  const [itemWidths, setItemWidths] = useState([]);

  // Access entry data directly
  const title = entry.data.title;
  const textColor = entry.data.textcolor;
  const backgroundColor = entry.data.backgroundcolor;
  const menuItems = entry.data.menu_items || [];

  // Shuffle menu items and generate widths only once
  useEffect(() => {
    const shuffled = [...menuItems].sort(() => Math.random() - 0.5);
    const widths = shuffled.map(() => Math.floor(Math.random() * (400 - 200 + 1)) + 200);
    setShuffledMenuItems(shuffled);
    setItemWidths(widths);
  }, [menuItems]);

  // Apply background gradient to the specific div
  useEffect(() => {
    const previewFrameContent = document.querySelector('.CMS_PreviewFrameContent_content');
    if (previewFrameContent) {
      previewFrameContent.style.backgroundImage = `
        radial-gradient(circle at top left, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 70%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent),
        radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.15), transparent)
      `;
    }
  }, []);

  const shadowX = -5; // Shadow offset to the left
  const shadowY = 5;  // Shadow offset downwards
  const blur = 5;     // Shadow blur radius
  const shadowColor = 'rgba(0, 0, 0, 0.6)'; // Shadow color

  return (
    <div className="min-vh-100 pa4" style={{ backgroundColor, color: textColor }}>
      <header className="tc mb5">
        <div className="flex justify-center align-center f1 pa5">
          <h1
            id="dynamic-title"
            style={{
              fontFamily: "'Dunhill Script', cursive",
              color: textColor,
              textShadow: `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`,
            }}
          >
            {title}
          </h1>
        </div>
      </header>

      <nav className="flex justify-center flex-wrap">
        <ul className="list flex justify-center flex-wrap pa0 ma0 mw8 w-100">
          {shuffledMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              collection={collection}
              field={field}
              entry={entry}
              width={itemWidths[index]} // Pass varying width to each item
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HomePreview;
