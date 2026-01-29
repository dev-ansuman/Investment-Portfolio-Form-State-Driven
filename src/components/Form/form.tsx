import React, { useEffect, useState } from 'react';
import { useApp } from '../../app-context/use-app';
import InvestmentDetails from './investment-details';
import Navigation from './navigation';
import AssetAllocation from './asset-allocation';
import Preferences from './preferences';
import Stepper from './Stepper';
import type { Asset } from '../../types/Asset';
import { addSubmittedRecord, getSubmittedRecords } from '../../storage/app.storage';
import { editRecord } from '../../services/tableActions';

import { saveFormData } from '../../storage/app.storage';

const Form: React.FC = () => {
  const [viewStep, setViewStep] = useState(1);

  const { state, dispatch, setModalConfig } = useApp();
  const { formData, editingRecordId } = state;
  const isEditing = editingRecordId !== null;

  const [showInvestmentDetailsErrors, setShowInvestmentDetailsErrors] = useState(false);
  const [showAssetAllocationErrors, setShowAssetAllocationErrors] = useState(false);
  const [showPreferencesError, setShowPreferencesError] = useState(false);

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  useEffect(() => {
    const handleClearRequest = () => {
      dispatch({ type: 'CLEAR_FORM' });
      setShowInvestmentDetailsErrors(false);
      setShowAssetAllocationErrors(false);
      setShowPreferencesError(false);
      setViewStep(1);
    };

    window.addEventListener('form_clear_requested', handleClearRequest);

    return () => {
      window.removeEventListener('form_clear_requested', handleClearRequest);
    };
  }, [dispatch]);

  const updateField = (field: string, value: string | boolean | Asset[]) => {
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { ...formData, [field]: value },
    });
  };

  useEffect(() => {
    if (editingRecordId !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setViewStep(1);
    }
  }, [editingRecordId]);

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

    setShowPreferencesError(false);

    const records = getSubmittedRecords();

    if (editingRecordId !== null) {
      editRecord(records, formData, editingRecordId);
    } else {
      addSubmittedRecord(formData);
    }

    setModalConfig({
      title: editingRecordId ? 'Record Updated' : 'Record Submitted',
      message: editingRecordId
        ? 'The record has been updated successfully.'
        : 'The record has been submitted successfully.',
      type: 'alert',
      onConfirm: () => {
        window.dispatchEvent(new Event('records_updated'));

        dispatch({ type: 'CLEAR_FORM' });

        setViewStep(1);
      },
    });
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
