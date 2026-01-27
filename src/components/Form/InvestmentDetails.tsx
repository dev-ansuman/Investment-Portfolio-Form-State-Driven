import React from 'react';
import CreateInput from '../Ui/CreateInput';
import CreateDropdown from '../Ui/CreateDropdown.tsx';
import { INVESTMENT_DETAILS } from '../../constants/form-constants';

const InvestmentDetails: React.FC = () => {
  return (
    <>
      {/* Portfolio Name Input */}
      <CreateInput
        fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_NAME.LABEL}
        inputType={INVESTMENT_DETAILS.PORTFOLIO_NAME.TYPE}
        inputPlaceholder={INVESTMENT_DETAILS.PORTFOLIO_NAME.PLACEHOLDER}
        id={INVESTMENT_DETAILS.PORTFOLIO_NAME.ID}
      />

      {/* Portfolio Type Dropdown */}
      <CreateDropdown
        fieldTitle={INVESTMENT_DETAILS.PORTFOLIO_TYPE.LABEL}
        options={INVESTMENT_DETAILS.PORTFOLIO_TYPE.OPTIONS}
        nameAttribute={INVESTMENT_DETAILS.PORTFOLIO_TYPE.NAME}
        id={INVESTMENT_DETAILS.PORTFOLIO_TYPE.ID}
      />
    </>
  );
};

export default InvestmentDetails;
