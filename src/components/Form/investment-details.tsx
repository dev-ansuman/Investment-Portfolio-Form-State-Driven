import React from 'react';
import CreateInput from '../Ui/CreateInput';
import CreateDropdown from '../Ui/CreateDropdown.tsx';
import { INVESTMENT_DETAILS } from '../../constants/form-constants';
import CreateRadioCheckbox from '../Ui/CreateRadioCheckbox.tsx';

const InvestmentDetails: React.FC = () => {
  return (
    <>
      {/* Portfolio Name Input */}
      <CreateInput
        fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_NAME.LABEL}
        type={INVESTMENT_DETAILS.PORTFOLIO_NAME.TYPE}
        placeholder={INVESTMENT_DETAILS.PORTFOLIO_NAME.PLACEHOLDER}
        id={INVESTMENT_DETAILS.PORTFOLIO_NAME.ID}
      />

      {/* Portfolio Type radio */}
      <CreateRadioCheckbox
        fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_TYPE.LABEL}
        type={INVESTMENT_DETAILS.PORTFOLIO_TYPE.TYPE}
        options={INVESTMENT_DETAILS.PORTFOLIO_TYPE.OPTIONS}
        name={INVESTMENT_DETAILS.PORTFOLIO_TYPE.NAME}
        id={INVESTMENT_DETAILS.PORTFOLIO_TYPE.ID}
        hidden={INVESTMENT_DETAILS.PORTFOLIO_TYPE.HIDDEN}
      />

      {/* Investment Goal Dropdown */}
      <CreateDropdown
        fieldTitle={INVESTMENT_DETAILS.INVESTMENT_GOAL.LABEL}
        options={INVESTMENT_DETAILS.INVESTMENT_GOAL.OPTIONS}
        name={INVESTMENT_DETAILS.INVESTMENT_GOAL.NAME}
        id={INVESTMENT_DETAILS.INVESTMENT_GOAL.ID}
      />

      {/* Investment Horizon Dropdown */}
      <CreateDropdown
        fieldTitle={INVESTMENT_DETAILS.INVESTMENT_HORIZON.LABEL}
        options={INVESTMENT_DETAILS.INVESTMENT_HORIZON.OPTIONS}
        name={INVESTMENT_DETAILS.INVESTMENT_HORIZON.NAME}
        id={INVESTMENT_DETAILS.INVESTMENT_HORIZON.ID}
      />

      {/* Risk Tolerance radio */}
      <CreateRadioCheckbox
        fieldTitle={INVESTMENT_DETAILS.RISK_TOLERANCE.LABEL}
        type={INVESTMENT_DETAILS.RISK_TOLERANCE.TYPE}
        options={INVESTMENT_DETAILS.RISK_TOLERANCE.OPTIONS}
        name={INVESTMENT_DETAILS.RISK_TOLERANCE.NAME}
        id={INVESTMENT_DETAILS.RISK_TOLERANCE.ID}
        hidden={INVESTMENT_DETAILS.RISK_TOLERANCE.HIDDEN}
      />
    </>
  );
};

export default InvestmentDetails;
