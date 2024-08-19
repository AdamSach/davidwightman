import { useMediaAsset } from "@staticcms/core";
import React from "react";

const HomePreview = ({ entry }) => {
  // Extract data from the entry
  const title = entry.getIn(["data", "title"]);
  const description = entry.getIn(["data", "description"]);
  const textColor = entry.getIn(["data", "textcolor"]); // Hex color
  const backgroundColor = entry.getIn(["data", "backgroundcolor"]); // Hex color
  const menuItems = entry.getIn(["data", "menu_items"]) || [];

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <header className="pv4 ph3 ph5-ns tc">
        <h1 className="f2 f1-l fw2 black-90 mv3">{title}</h1>
        <p className="f5 f4-ns lh-copy measure center">{description}</p>
      </header>

      <nav className="flex justify-center mw8 center pa0 ma0">
        <ul className="list flex justify-center pa0 ma0 mw8 w-100">
          {menuItems.map((item, index) => {
            const image = useMediaAsset(item.get("image"));
            const heading = item.get("heading");

            return (
              <li key={index} className="relative mh2" style={{ width: "200px" }}>
                <a href="#" className="db no-underline relative menu-link">
                  <img src={image} alt={heading} className="db ba b--black-20 bw2 menuimg" />
                  <span className="absolute top-50 left-50 translate-center white f4 fw6 dn">{heading}</span>
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
