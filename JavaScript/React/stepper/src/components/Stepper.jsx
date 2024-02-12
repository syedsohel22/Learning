import { useState } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBar = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };
  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isCompleted ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isCompleted ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${calculateProgressBar()}%` }}
        ></div>
      </div>

      <div>
        {!isCompleted && (
          <button className="btn" onClick={handleNext}>
            {currentStep === stepsConfig.length ? "Finish" : "next"}
          </button>
        )}
      </div>
    </>
  );
};

export default CheckoutStepper;
