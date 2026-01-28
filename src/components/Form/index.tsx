import React, { useState } from 'react';
import InvestmentDetails from './investment-details';
import Navigation from './navigation';
import { INITIAL_FORM_DATA, INITIAL_STEP } from '../../constants/form-initial-state';
import AssetAllocation from './asset-allocation';
import Preferences from './preferences';
// import Navigation from './navigation';

// const STEPS = ['Investment Details', 'Asset Allocation', 'Preferences'];

interface assets {
  assetClass: string;
  percentageAllocation: string;
  specificFund: string;
  currentValue: string;
}

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(INITIAL_STEP);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const updateField = (field: string, value: string | boolean | assets[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  // const setStep = (step: number) => setCurrentStep(step);

  const handleSubmit = () => {
    console.log('form submitted', formData);
    alert('form submitted');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <InvestmentDetails formData={formData} updateField={updateField} />;
      case 2:
        return <AssetAllocation formData={formData} updateField={updateField} />;
      case 3:
        return <Preferences formData={formData} updateField={updateField} />;
    }
  };

  return (
    <div className="formContainer">
      <div className="formParent">{renderCurrentStep()}</div>
      <Navigation
        previousStep={previousStep}
        nextStep={nextStep}
        handleSubmit={handleSubmit}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Form;
