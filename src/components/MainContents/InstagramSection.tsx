import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "../../styles/MainContents/InstagramSection.css";
import { FaInstagram } from "react-icons/fa";

const InstagramSection: React.FC = () => {
  const postIds = ["Cp0ZX4GAuf_", "Cp0ZX4GAuf_", "Cp0ZX4GAuf_"];
  const foodImages = [
    "/images/instagram/food1.png",
    "/images/instagram/food2.png",
    "/images/instagram/food3.png",
    "/images/instagram/food4.png",
  ];

  return (
    <div className="instagram-container-wrapper">
      <section className="instagram-container">
        <h1 className="title">Check out @foodieland on Instagram</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>
        <div className="instagram-grid">
          {/* Instagram Embeds */}
          {postIds.map((id, index) => (
            <div
              key={`post-${index}`}
              className="instagram-item"
              style={{ height: "400px" }}
            >
              <InstagramEmbed
                url={`https://www.instagram.com/foodielandsg?igsh=MTh6eHp5b2w5NTJ1eQ==`}
                width={328}
                captioned
              />
            </div>
          ))}

          {/* Food Images */}
          {foodImages.map((image, index) => (
            <div
              key={`image-${index}`}
              className="instagram-item"
              style={{ height: "400px" }}
            >
              <img
                src={image}
                alt={`Food ${index + 1}`}
                className="food-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="instagram-button">
            <span>Visit Our Instagram</span>
            <FaInstagram className="instagram-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;
