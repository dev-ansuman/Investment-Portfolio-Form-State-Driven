import React from 'react';
import CreateRadioCheckbox from '../Ui/custom/CreateRadioCheckbox';
import { PREFERENCES } from '../../constants/form-constants/preferences';
import Textarea from '../Ui/default/Textarea';
import RadioCheckbox from '../Ui/custom/RadioCheckbox';

interface preferencesProps {
  formData: {
    automatedRebalancing: string;
    taxSavingPreference: string;
    financialGoals: string;
    riskAcknowledgement: boolean;
  };
  updateField: (field: string, value: string | boolean) => void;
  showErrors?: boolean;
}

const Preferences: React.FC<preferencesProps> = ({ formData, updateField, showErrors = false }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'checkbox') {
      updateField(e.target.name || e.target.id, (e.target as HTMLInputElement).checked);
    } else {
      updateField(e.target.name || e.target.id, e.target.value);
    }
  };

  const validateAutomatedRebalancing = (value: string) => {
    if (!value || value.trim() === '') return 'This is a required field!';
    return '';
  };

  const validateRiskAcknowledgement = (value: boolean) => {
    if (!value) return 'This is a required field!';
    return '';
  };

  const shouldShowError = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return showErrors || value === true;
    }
    return showErrors || value.length > 0;
  };

  return (
    <div className="formScreen">
      {/* Automated Rebalancing Radio */}
      <div className="fieldDiv">
        <div className="automatedRebalancingInputContainer">
          <CreateRadioCheckbox
            fieldTitle={PREFERENCES.AUTOMATED_REBALANCING.LABEL}
            type={PREFERENCES.AUTOMATED_REBALANCING.TYPE}
            options={PREFERENCES.AUTOMATED_REBALANCING.OPTIONS}
            name={PREFERENCES.AUTOMATED_REBALANCING.NAME}
            id={PREFERENCES.AUTOMATED_REBALANCING.ID}
            hidden={PREFERENCES.AUTOMATED_REBALANCING.HIDDEN}
            inputClass={PREFERENCES.AUTOMATED_REBALANCING.CLASS[1]}
            value={formData.automatedRebalancing}
            onChange={handleInputChange}
            required={PREFERENCES.AUTOMATED_REBALANCING.REQUIRED}
          />
        </div>
        {shouldShowError(formData.automatedRebalancing) &&
          validateAutomatedRebalancing(formData.automatedRebalancing) && (
            <div style={{ color: 'red', fontSize: '13px' }}>
              {validateAutomatedRebalancing(formData.automatedRebalancing)}
            </div>
          )}
      </div>

      {/* Tax Saving Preference Radio */}
      <div className="fieldDiv" id="taxSavingPreference">
        <CreateRadioCheckbox
          fieldTitle={PREFERENCES.TAX_SAVING_PREF.LABEL}
          type={PREFERENCES.TAX_SAVING_PREF.TYPE}
          options={PREFERENCES.TAX_SAVING_PREF.OPTIONS}
          name={PREFERENCES.TAX_SAVING_PREF.NAME}
          id={PREFERENCES.TAX_SAVING_PREF.ID}
          hidden={PREFERENCES.TAX_SAVING_PREF.HIDDEN}
          inputClass={PREFERENCES.TAX_SAVING_PREF.CLASS[1]}
          value={formData.taxSavingPreference}
          onChange={handleInputChange}
          required={PREFERENCES.TAX_SAVING_PREF.REQUIRED}
        />
      </div>

      {/* Financial Goals Textarea */}
      <div className="fieldDiv">
        <div className="fieldTitle">{PREFERENCES.FINANCIAL_GOALS.LABEL}</div>
        <Textarea
          name={PREFERENCES.FINANCIAL_GOALS.NAME}
          id={PREFERENCES.FINANCIAL_GOALS.ID}
          placeholder={PREFERENCES.FINANCIAL_GOALS.PLACEHOLDER}
          rows={PREFERENCES.FINANCIAL_GOALS.ROWS}
          value={formData.financialGoals}
          onChange={handleInputChange}
        />
      </div>

      {/* Acknoledgement checkbox */}
      <div className="fieldDiv">
        <div className="alignPreferences">
          <RadioCheckbox
            type={PREFERENCES.RISK_ACKNOWLEDGEMENT.TYPE}
            options={PREFERENCES.RISK_ACKNOWLEDGEMENT.OPTIONS}
            name={PREFERENCES.RISK_ACKNOWLEDGEMENT.NAME}
            id={PREFERENCES.RISK_ACKNOWLEDGEMENT.ID}
            hidden={PREFERENCES.RISK_ACKNOWLEDGEMENT.HIDDEN}
            inputClass={PREFERENCES.RISK_ACKNOWLEDGEMENT.CLASS[0]}
            value={formData.riskAcknowledgement ? '' : 'unchecked'}
            onChange={handleInputChange}
          />
          <div className="fieldTitle">
            {PREFERENCES.RISK_ACKNOWLEDGEMENT.LABEL}
            <span className="required"> *</span>
          </div>
        </div>
        <div>{PREFERENCES.RISK_ACKNOWLEDGEMENT.TEXT_CONTENT}</div>
        {shouldShowError(formData.riskAcknowledgement) &&
          validateRiskAcknowledgement(formData.riskAcknowledgement) && (
            <div style={{ color: 'red', fontSize: '13px' }}>
              {validateRiskAcknowledgement(formData.riskAcknowledgement)}
            </div>
          )}
      </div>
    </div>
  );
};

export default Preferences;
