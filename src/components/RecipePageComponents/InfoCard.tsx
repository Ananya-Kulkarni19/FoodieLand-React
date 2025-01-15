import React from "react";
import "../../styles/RecipePageComponents/InfoCard.css";
import { FaClock, FaPrint, FaUpload } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
const InfoCard: React.FC = () => {
  return (
    <section className="Info-Card-Wrapper">
      <div className="info-card">
        <div className="content">
          <h1 className="title"></h1>
          <div className="info">
            <div className="info-section">
              <img className="icon" src="images/avatar.png" alt="author" />
              <div className="name-date">
                <span className="name"></span>
                <span className="date"></span>
              </div>
            </div>
            <div className="info-tile">
              <FaClock />
              <div className="info-tile-column">
                <span className="info-tile-title"></span>
                <span className="info-tile-subtitle"></span>
              </div>
            </div>
            <div className="info-tile">
              <FaClock />
              <div className="info-tile-column">
                <span className="info-tile-title"></span>
                <span className="info-tile-subtitle">15 Minutes</span>
              </div>
            </div>
            <div className="info-tile">
              <ImSpoonKnife />
              <div className="info-tile-column">
                <span className="info-tile-title"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <button className="action-button">
            <FaPrint />
          </button>
          <button className="action-button">
            <FaUpload />
          </button>
        </div>
      </div>
     
    </section>
  );
};
export default InfoCard;
