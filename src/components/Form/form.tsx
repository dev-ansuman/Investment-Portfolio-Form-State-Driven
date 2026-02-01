import React, { useEffect, useState } from 'react';
import InvestmentDetails from './InvestmentDetails';
import Navigation from './Navigation';
import AssetAllocation from './AssetAllocation';
import Preferences from './Preferences';
import Stepper from './Stepper';
import type { Asset } from '../../types/Asset';

import { useAppStore } from '../../store/use-app-store';

const Form: React.FC = () => {
  const [viewStep, setViewStep] = useState(1);

  const [showInvestmentDetailsErrors, setShowInvestmentDetailsErrors] = useState(false);
  const [showAssetAllocationErrors, setShowAssetAllocationErrors] = useState(false);
  const [showPreferencesError, setShowPreferencesError] = useState(false);

  const formData = useAppStore((state) => state.formData);
  const isEditMode = useAppStore((state) => state.isEditMode);
  const isFormOpen = useAppStore((state) => state.isFormOpen);

  const addRecord = useAppStore((state) => state.addRecord);
  const updateRecord = useAppStore((state) => state.updateRecord);
  const closeForm = useAppStore((state) => state.closeForm);
  const showSnackbar = useAppStore((state) => state.showSnackbar);

  useEffect(() => {
    if (isFormOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowInvestmentDetailsErrors(false);

      setShowAssetAllocationErrors(false);

      setShowPreferencesError(false);

      setViewStep(1);
    }
  }, [isFormOpen]);

  useEffect(() => {
    if (isEditMode) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setViewStep(1);
    }
  }, [isEditMode]);

  if (!isFormOpen) return null;

  const isEditing = isEditMode;

  const updateField = (field: string, value: string | boolean | Asset[]) => {
    useAppStore.setState((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    }));
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

  const getDerivedCompletedSteps = () => {
    const completed: number[] = [];

    if (isInvestmentDetailsValid()) completed.push(1);
    if (isAssetAllocationValid()) completed.push(2);

    return completed;
  };

  const currentStep = viewStep;
  const derivedCompletedSteps = getDerivedCompletedSteps();

  const completedSteps = isEditing
    ? derivedCompletedSteps.filter((step) => step < currentStep)
    : derivedCompletedSteps;

  const nextStep = () => {
    if (currentStep === 1) {
      if (!isInvestmentDetailsValid()) {
        setShowInvestmentDetailsErrors(true);
        return;
      }
      setShowInvestmentDetailsErrors(false);
    }

    if (currentStep === 2) {
      if (!isAssetAllocationValid()) {
        setShowAssetAllocationErrors(true);
        return;
      }
      setShowAssetAllocationErrors(false);
    }

    setViewStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setViewStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitClick = () => {
    if (formData.automatedRebalancing === '' || formData.riskAcknowledgement !== true) {
      setShowPreferencesError(true);
      return;
    }

    if (isEditMode) {
      updateRecord(formData);
      showSnackbar('Portfolio updated successfully', 'success');
    } else {
      addRecord({
        ...formData,
        id: Date.now().toString(),
      });
      showSnackbar('Portfolio added successfully', 'success');
    }

    setViewStep(1);
    closeForm();
  };

  return (
    <div className="formContainer">
      <div className="formParent">
        <Stepper currentStep={currentStep} completedSteps={completedSteps} />
        {currentStep === 1 && (
          <InvestmentDetails
            formData={formData}
            updateField={updateField}
            showErrors={showInvestmentDetailsErrors}
          />
        )}

        {currentStep === 2 && (
          <AssetAllocation
            formData={formData}
            updateField={updateField}
            showErrors={showAssetAllocationErrors}
            resetErrors={resetAssetAllocationErrors}
          />
        )}

        {currentStep === 3 && (
          <Preferences
            formData={formData}
            updateField={updateField}
            showErrors={showPreferencesError}
          />
        )}
      </div>

      <Navigation
        previousStep={previousStep}
        nextStep={nextStep}
        handleSubmit={handleSubmitClick}
        currentStep={currentStep}
        isEditing={isEditing}
      />
    </div>
  );
};

export default Form;
