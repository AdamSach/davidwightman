import React from "react";
import { useMediaAsset } from "@staticcms/core";

const ArtworkPreview = ({ entry, collection, field }) => {
  // Extract data directly from the entry object
  const title = entry.data.title || "Untitled";
  const year = entry.data.year || "Unknown Year";
  const medium = entry.data.medium || "Unknown Medium";
  const dimensions = entry.data.dimensions || "Unknown Dimensions";
  const image = useMediaAsset(entry.data.image, collection, field, entry);
  const additionalInfo = entry.data.body || ""; // Additional info

  const shadowX = 10; // Shadow offset to the right
  const shadowY = 10;  // Shadow offset downwards
  const blur = 20;     // Shadow blur radius
  const shadowColor = "rgba(0, 0, 0, 0.5)"; // Shadow color
  const backgroundColor = "#034f7e";
  const textColor = "#ffffff";

  return (
    <section
      id="artwork-preview"
      className="artwork-preview min-vh-100 pa4 flex items-center justify-center"
      style={{
        background: `linear-gradient(145deg, ${backgroundColor}, #1a86ad)`,
        color: textColor,
        position: "relative",
      }}
    >
      {/* Artwork Content */}
      <div className="artwork-container mw8">
        {image && (
          <div className="artwork-img mb4" style={{ textAlign: "center" }}>
            <img
              src={image}
              alt="Artwork Image"
              style={{
                height: "50vh",
                width: "auto",
                margin: "0 auto",
                boxShadow: `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`,
              }}
            />
          </div>
        )}
        <div
          className="artwork-details f4"
          style={{
            position: "relative",
            bottom: "50px",
            left: "50px",
            textAlign: "left",
            color: textColor,
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <p style={{ fontStyle: "italic", margin: 0 }}>
            {title} <span>({year})</span>
          </p>
          <p style={{ margin: "5px 0" }}>{medium}</p>
          <p style={{ margin: 0 }}>{dimensions}</p>
          {additionalInfo && <p style={{ marginTop: "10px" }}>{additionalInfo}</p>}
        </div>
      </div>
    </section>
  );
};

export default ArtworkPreview;
