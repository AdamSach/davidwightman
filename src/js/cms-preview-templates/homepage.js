import { useMediaAsset } from "@staticcms/core";
import React from "react";

const HomePreview = ({ entry }) => {
  // Extract data from the entry
  const title = entry.getIn(["data", "title"]);
  const description = entry.getIn(["data", "description"]);
  const textColor = entry.getIn(["data", "textcolor"]); // Hex color
  const backgroundColor = entry.getIn(["data", "backgroundcolor"]); // Hex color
  const menuItems = entry.getIn(["data", "menu_items"]) || [];

  // Shuffle the menu items
  const shuffledMenuItems = [...menuItems].sort(() => Math.random() - 0.5);

  // Randomize width between min and max values
  const getRandomWidth = () => Math.floor(Math.random() * (400 - 200 + 1)) + 200;

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor, minHeight: '100vh', padding: 20 }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, fontWeight: '600', marginBottom: 20 }}>{title}</h1>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>{description}</p>
      </header>

      <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 0, listStyleType: 'none', maxWidth: '100%' }}>
          {shuffledMenuItems.map((item, index) => {
            const image = useMediaAsset(item.get("image"));
            const heading = item.get("heading");

            return (
              <li key={index} style={{ margin: 10, width: `${getRandomWidth()}px`, position: 'relative' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}>
                  <img
                    src={image}
                    alt={heading}
                    style={{ width: '100%', borderRadius: 8, border: '2px solid #ccc' }}
                  />
                  <span style={{ 
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: '#fff', 
                      fontSize: 20, 
                      fontWeight: 'bold', 
                      display: 'none' // Adjust display based on interaction if needed
                    }}>
                    {heading}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HomePreview;
