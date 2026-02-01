import React from 'react';
import CreateInput from '../Ui/custom/CreateInput.tsx';
import CreateDropdown from '../Ui/custom/CreateDropdown.tsx';
import { INVESTMENT_DETAILS } from '../../constants/form-constants/investment-details.ts';
import CreateRadioCheckbox from '../Ui/custom/CreateRadioCheckbox.tsx';

interface investmentDetailsProps {
  formData: {
    portfolioName: string;
    portfolioType: string;
    investmentGoal: string;
    investmentHorizon: string;
    riskTolerance: string;
  };
  updateField: (field: string, value: string | boolean) => void;
  showErrors?: boolean;
}

const InvestmentDetails: React.FC<investmentDetailsProps> = ({
  formData,
  updateField,
  showErrors = false,
}) => {
  const validateField = (name: string, value: string) => {
    if (!value || value.trim() === '') return 'This is a required Field!';
    if (name === 'portfolioName') {
      if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name cannot contain Numbers or Symbols!';
      if (value.trim().length < 3) return 'Atleast 3 characters required!';
    }
    return '';
  };

  const shouldShowError = (value: string) => {
    return showErrors || value.length > 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateField(e.target.name || e.target.id, e.target.value);
  };
  return (
    <div className="formScreen">
      {/* Portfolio Name Input */}
      <div className="fieldDiv">
        <CreateInput
          fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_NAME.LABEL}
          type={INVESTMENT_DETAILS.PORTFOLIO_NAME.TYPE}
          placeholder={INVESTMENT_DETAILS.PORTFOLIO_NAME.PLACEHOLDER}
          id={INVESTMENT_DETAILS.PORTFOLIO_NAME.ID}
          fieldClass={INVESTMENT_DETAILS.PORTFOLIO_NAME.CLASS[0]}
          required={INVESTMENT_DETAILS.PORTFOLIO_NAME.REQUIRED}
          name={INVESTMENT_DETAILS.PORTFOLIO_NAME.NAME}
          value={formData.portfolioName}
          onChange={handleInputChange}
        />
        {shouldShowError(formData.portfolioName) &&
          validateField('portfolioName', formData.portfolioName) && (
            <div style={{ color: 'red', fontSize: '13px' }}>
              {validateField('portfolioName', formData.portfolioName)}
            </div>
          )}
      </div>

      {/* Portfolio Type radio */}
      <div className="fieldDiv">
        <CreateRadioCheckbox
          fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_TYPE.LABEL}
          type={INVESTMENT_DETAILS.PORTFOLIO_TYPE.TYPE}
          options={INVESTMENT_DETAILS.PORTFOLIO_TYPE.OPTIONS}
          name={INVESTMENT_DETAILS.PORTFOLIO_TYPE.NAME}
          id={INVESTMENT_DETAILS.PORTFOLIO_TYPE.ID}
          hidden={INVESTMENT_DETAILS.PORTFOLIO_TYPE.HIDDEN}
          inputClass={INVESTMENT_DETAILS.PORTFOLIO_TYPE.CLASS[1]}
          value={formData.portfolioType}
          onChange={handleInputChange}
          required={INVESTMENT_DETAILS.PORTFOLIO_TYPE.REQUIRED}
        />
        {shouldShowError(formData.portfolioType) &&
          validateField('portfolioType', formData.portfolioType) && (
            <div style={{ color: 'red', fontSize: '13px' }}>
              {validateField('portfolioType', formData.portfolioType)}
            </div>
          )}
      </div>

      <div className="goalHorizon">
        {/* Investment Goal Dropdown */}
        <div className="fieldDiv">
          <CreateDropdown
            fieldTitle={INVESTMENT_DETAILS.INVESTMENT_GOAL.LABEL}
            options={INVESTMENT_DETAILS.INVESTMENT_GOAL.OPTIONS}
            name={INVESTMENT_DETAILS.INVESTMENT_GOAL.NAME}
            id={INVESTMENT_DETAILS.INVESTMENT_GOAL.ID}
            fieldClass={INVESTMENT_DETAILS.INVESTMENT_GOAL.CLASS[0]}
            value={formData.investmentGoal}
            onChange={handleInputChange}
            required={INVESTMENT_DETAILS.INVESTMENT_GOAL.REQUIRED}
          />
          {shouldShowError(formData.investmentGoal) &&
            validateField('investmentGoal', formData.investmentGoal) && (
              <div style={{ color: 'red', fontSize: '13px' }}>
                {validateField('investmentGoal', formData.investmentGoal)}
              </div>
            )}
        </div>

        {/* Investment Horizon Dropdown */}
        <div className="fieldDiv">
          <CreateDropdown
            fieldTitle={INVESTMENT_DETAILS.INVESTMENT_HORIZON.LABEL}
            options={INVESTMENT_DETAILS.INVESTMENT_HORIZON.OPTIONS}
            name={INVESTMENT_DETAILS.INVESTMENT_HORIZON.NAME}
            id={INVESTMENT_DETAILS.INVESTMENT_HORIZON.ID}
            fieldClass={INVESTMENT_DETAILS.INVESTMENT_HORIZON.CLASS[0]}
            value={formData.investmentHorizon}
            onChange={handleInputChange}
            required={INVESTMENT_DETAILS.INVESTMENT_HORIZON.REQUIRED}
          />
          {shouldShowError(formData.investmentHorizon) &&
            validateField('investmentHorizon', formData.investmentHorizon) && (
              <div style={{ color: 'red', fontSize: '13px' }}>
                {validateField('investmentHorizon', formData.investmentHorizon)}
              </div>
            )}
        </div>
      </div>

      {/* Risk Tolerance radio */}
      <div className="fieldDiv">
        <CreateRadioCheckbox
          fieldTitle={INVESTMENT_DETAILS.RISK_TOLERANCE.LABEL}
          type={INVESTMENT_DETAILS.RISK_TOLERANCE.TYPE}
          options={INVESTMENT_DETAILS.RISK_TOLERANCE.OPTIONS}
          name={INVESTMENT_DETAILS.RISK_TOLERANCE.NAME}
          id={INVESTMENT_DETAILS.RISK_TOLERANCE.ID}
          hidden={INVESTMENT_DETAILS.RISK_TOLERANCE.HIDDEN}
          inputClass={INVESTMENT_DETAILS.RISK_TOLERANCE.CLASS[1]}
          value={formData.riskTolerance}
          onChange={handleInputChange}
          required={INVESTMENT_DETAILS.RISK_TOLERANCE.REQUIRED}
        />
        {shouldShowError(formData.riskTolerance) &&
          validateField('riskTolerance', formData.riskTolerance) && (
            <div style={{ color: 'red', fontSize: '13px' }}>
              {validateField('riskTolerance', formData.riskTolerance)}
            </div>
          )}
      </div>
    </div>
  );
};

export default InvestmentDetails;
