import React, { useEffect, useState } from 'react';
import InvestmentDetails from './investment-details';
import Navigation from './navigation';
import { INITIAL_FORM_DATA, INITIAL_STEP } from '../../constants/form-initial-state';
import AssetAllocation from './asset-allocation';
import Preferences from './preferences';
import Stepper from './Stepper';

import {
  addSubmittedRecord,
  clearFormData,
  getCurrentStep,
  getCompletedSteps,
  getFormData,
  saveCompletedSteps,
  saveCurrentStep,
  saveFormData,
} from '../../app.storage';

interface Asset {
  assetClass: string;
  percentageAllocation: string;
  specificFund: string;
  currentValue: string;
}

interface Record {
  id: number;

  portfolioName: string;
  portfolioType: string;
  investmentGoal: string;
  investmentHorizon: string;
  riskTolerance: string;

  currency: string;
  annualInvestmentCapacity: string;
  lumpSumAmount: string;
  monthlyContribution: string;
  assets: Asset[];
  investmentStyle: string;

  automatedRebalancing: string;
  taxSavingPreference: string;
  financialGoals: string;
  riskAcknowledgement: boolean;
}

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(() => getCurrentStep(INITIAL_STEP));
  const [formData, setFormData] = useState(() => getFormData(INITIAL_FORM_DATA));
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

  const isPreferenceValid = () => {
    return formData.automatedRebalancing !== '' && formData.riskAcknowledgement === true;
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

  const clearForm = () => {
    clearFormData();
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(INITIAL_STEP);
    setCompletedSteps([]);
    setShowPreferencesError(false);
  };

  const handleSubmit = () => {
    if (!isPreferenceValid()) {
      setShowPreferencesError(true);
      return;
    }
    addSubmittedRecord(formData);
    console.log('form submitted', formData);
    alert('form submitted');

    clearForm();
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
        handleSubmit={handleSubmit}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Form;
