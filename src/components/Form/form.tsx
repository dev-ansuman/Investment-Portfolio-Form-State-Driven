import React, { useEffect, useState } from 'react';
import InvestmentDetails from './investment-details';
import Navigation from './navigation';
import { INITIAL_FORM_DATA, INITIAL_STEP } from '../../storage/initial-form-state';
import AssetAllocation from './asset-allocation';
import Preferences from './preferences';
import Stepper from './Stepper';
import type { Asset } from '../../types/Asset';
import type { Record } from '../../types/Record';

import {
  getCurrentStep,
  getCompletedSteps,
  saveCompletedSteps,
  saveCurrentStep,
  saveFormData,
} from '../../storage/app.storage';

interface FormProps {
  formData: Record;
  setFormData: React.Dispatch<React.SetStateAction<Record>>;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ formData, setFormData, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(() => getCurrentStep(INITIAL_STEP));
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => getCompletedSteps());

  const [showInvestmentDetailsErrors, setShowInvestmentDetailsErrors] = useState(false);
  const [showAssetAllocationErrors, setShowAssetAllocationErrors] = useState(false);
  const [showPreferencesError, setShowPreferencesError] = useState(false);

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  useEffect(() => {
    saveCurrentStep(currentStep);
  }, [currentStep]);

  useEffect(() => {
    saveCompletedSteps(completedSteps);
  }, [completedSteps]);

  useEffect(() => {
    const handleClearRequest = () => {
      setFormData(INITIAL_FORM_DATA);
      setCurrentStep(INITIAL_STEP);
      setCompletedSteps([]);
      setShowInvestmentDetailsErrors(false);
      setShowAssetAllocationErrors(false);
      setShowPreferencesError(false);
    };

    window.addEventListener('form_clear_requested', handleClearRequest);

    return () => {
      window.removeEventListener('form_clear_requested', handleClearRequest);
    };
  }, []);

  const updateField = (field: string, value: string | boolean | Asset[]) => {
    setFormData((prev: Record) => ({ ...prev, [field]: value }));
  };

  const isInvestmentDetailsValid = () => {
    return (
      formData.portfolioName.trim().length >= 3 &&
      formData.portfolioType !== '' &&
      formData.investmentGoal !== '' &&
      formData.investmentHorizon !== '' &&
      formData.riskTolerance !== ''
    );
  };

  const isAssetAllocationValid = () => {
    if (
      !formData.annualInvestmentCapacity ||
      formData.annualInvestmentCapacity.trim() === '' ||
      isNaN(Number(formData.annualInvestmentCapacity)) ||
      Number(formData.annualInvestmentCapacity) <= 0
    )
      return false;

    for (const asset of formData.assets) {
      if (!asset.assetClass || asset.assetClass.trim() === '') return false;

      if (
        !asset.percentageAllocation ||
        asset.percentageAllocation.trim() === '' ||
        Number(asset.percentageAllocation) < 0 ||
        Number(asset.percentageAllocation) > 100
      )
        return false;
    }

    return true;
  };

  const resetAssetAllocationErrors = () => {
    setShowAssetAllocationErrors(false);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!isInvestmentDetailsValid()) {
        setShowInvestmentDetailsErrors(true);
        return;
      }
      setShowInvestmentDetailsErrors(false);
      if (!completedSteps.includes(1)) {
        setCompletedSteps((prev) => [...prev, 1]);
      }
    }

    if (currentStep === 2) {
      if (!isAssetAllocationValid()) {
        setShowAssetAllocationErrors(true);
        return;
      }
      setShowAssetAllocationErrors(false);
      if (!completedSteps.includes(2)) {
        setCompletedSteps((prev) => [...prev, 2]);
      }
    }

    setCurrentStep((prev: number) => Math.min(prev + 1, 3));
  };

  const previousStep = () => setCurrentStep((prev: number) => Math.max(prev - 1, 1));

  const handleSubmitClick = () => {
    onSubmit();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <InvestmentDetails
            formData={formData}
            updateField={updateField}
            showErrors={showInvestmentDetailsErrors}
          />
        );
      case 2:
        return (
          <AssetAllocation
            formData={formData}
            updateField={updateField}
            showErrors={showAssetAllocationErrors}
            resetErrors={resetAssetAllocationErrors}
          />
        );
      case 3:
        return (
          <Preferences
            formData={formData}
            updateField={updateField}
            showErrors={showPreferencesError}
          />
        );
    }
  };

  return (
    <div className="formContainer">
      <div className="formParent">
        <Stepper currentStep={currentStep} completedSteps={completedSteps} />
        {renderCurrentStep()}
      </div>

      <Navigation
        previousStep={previousStep}
        nextStep={nextStep}
        handleSubmit={handleSubmitClick}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Form;
