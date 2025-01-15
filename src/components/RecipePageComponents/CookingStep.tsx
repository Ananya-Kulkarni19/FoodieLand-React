import React from "react";
import "../../styles/RecipePageComponents/CookingStep.css";

interface Step {
  title: string;
  description: string;
  image?: string;
}

const CookingStep: React.FC = () => {
  const steps: Step[] = [
    {
      title: "",
      description:
        "",
      image: "",
    },
    {
      title: "",
      description:
        "",
    },
    {
      title: "",
      description:
        "",
    },
  ];

  return (
    <div className="CookingStep-container">
      <h2>Directions</h2>
      {steps.map((step, index) => (
        <div key={index} className="CookingStep-step">
          <div className="CookingStep-step-number"></div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          {step.image && <img src={step.image} alt={`Step ${index + 1}`} />}
        </div>
      ))}
    </div>
  );
};

export default CookingStep;
