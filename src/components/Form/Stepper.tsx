import React from 'react';

interface stepperProps {
  currentStep: number;
  completedSteps: number[];
}

const Stepper: React.FC<stepperProps> = ({ currentStep, completedSteps = [] }) => {
  const getStepClass = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'completed';
    else if (stepId === currentStep) return 'active';
    return '';
  };
  const getLineClass = (stepId: number) => {
    if (completedSteps.includes(stepId) || currentStep > stepId) {
      return 'completed';
    }
    return '';
  };
  return (
    <nav className="progressBar">
      <div className={`progress ${getStepClass(1)}`}>
        <img
          src={completedSteps.includes(1) ? '/images/tick.svg' : './images/details.svg'}
          id="investmentDetailLogo"
        />
        <div className="progressText">Investment Details</div>
      </div>

      <div className={`progressLine ${getLineClass(1)}`} id="progressBar1"></div>

      <div className={`progress ${getStepClass(2)}`}>
        <img
          src={completedSteps.includes(2) ? '/images/tick.svg' : './images/asset.svg'}
          id="assetAllocationLogo"
        />
        <div className="progressText">Asset Allocation</div>
      </div>

      <div className={`progressLine ${getLineClass(2)}`} id="progressBar2"></div>

      <div className={`progress ${getStepClass(3)}`}>
        <img
          src={completedSteps.includes(3) ? '/images/tick.svg' : './images/preference.svg'}
          id="preferencesLogo"
        />
        <div className="progressText">Preferences and Ack.</div>
      </div>
    </nav>
  );
};

export default Stepper;
