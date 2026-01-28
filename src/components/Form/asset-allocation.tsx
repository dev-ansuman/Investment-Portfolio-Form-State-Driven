import React from 'react';
import CreateInput from '../Ui/CreateInput';
import { ASSET_ALLOCATION } from '../../constants/form-constants';
import CreateRadioCheckbox from '../Ui/CreateRadioCheckbox';
import Button from '../Ui/button';
import CreateDropdown from '../Ui/CreateDropdown';
import Input from '../Ui/input';
import Dropdown from '../Ui/dropdown';

const AssetAllocation: React.FC = () => {
  return (
    <>
      <div>
        <div>{ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.LABEL}</div>
        <Dropdown
          options={ASSET_ALLOCATION.CURRENCY.OPTIONS}
          name={ASSET_ALLOCATION.CURRENCY.NAME}
          id={ASSET_ALLOCATION.CURRENCY.ID}
        />
        <Input
          type={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.TYPE}
          placeholder={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.PLACEHOLDER}
          id={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.ID}
        />
      </div>

      <div>
        {/* Lump Sum Amount Input */}
        <CreateInput
          fieldTitle={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.LABEL}
          type={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.TYPE}
          placeholder={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.PLACEHOLDER}
          id={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.ID}
        />

        {/* Monthly Contribution Input */}
        <CreateInput
          fieldTitle={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.LABEL}
          type={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.TYPE}
          placeholder={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.PLACEHOLDER}
          id={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.ID}
        />
      </div>

      {/* assets */}
      <div>
        <div>{ASSET_ALLOCATION.ASSETS.TITLE}</div>
        <div>
          {/* Asset Class Dropdown */}
          <CreateDropdown
            fieldTitle={ASSET_ALLOCATION.ASSET_CLASS.LABEL}
            options={ASSET_ALLOCATION.ASSET_CLASS.OPTIONS}
            name={ASSET_ALLOCATION.ASSET_CLASS.NAME}
            id={ASSET_ALLOCATION.ASSET_CLASS.ID}
          />

          {/* Percentage Allocation Input */}
          <CreateInput
            fieldTitle={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.LABEL}
            type={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.TYPE}
            placeholder=""
            id={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.ID}
          />

          {/* Specific Fund Input*/}
          <CreateInput
            fieldTitle={ASSET_ALLOCATION.SPECIFIC_FUND.LABEL}
            type={ASSET_ALLOCATION.SPECIFIC_FUND.TYPE}
            placeholder=""
            id={ASSET_ALLOCATION.SPECIFIC_FUND.ID}
          />

          {/* Current Value Input*/}
          <CreateInput
            fieldTitle={ASSET_ALLOCATION.CURRENT_VALUE.LABEL}
            type={ASSET_ALLOCATION.CURRENT_VALUE.TYPE}
            placeholder={ASSET_ALLOCATION.CURRENT_VALUE.PLACEHOLDER}
            id={ASSET_ALLOCATION.CURRENT_VALUE.ID}
          />
        </div>
      </div>

      {/* add asset button */}
      <Button text={ASSET_ALLOCATION.ADD_ASSET.LABEL} />

      {/* Investment Style */}
      <CreateRadioCheckbox
        fieldTitle={ASSET_ALLOCATION.INVESTMENT_STYLE.LABEL}
        type={ASSET_ALLOCATION.INVESTMENT_STYLE.TYPE}
        name={ASSET_ALLOCATION.INVESTMENT_STYLE.NAME}
        options={ASSET_ALLOCATION.INVESTMENT_STYLE.OPTIONS}
        id={ASSET_ALLOCATION.INVESTMENT_STYLE.ID}
        hidden={ASSET_ALLOCATION.INVESTMENT_STYLE.HIDDEN}
      />
    </>
  );
};

export default AssetAllocation;
