import React from 'react';
import CreateInput from '../Ui/CreateInput';
import { ASSET_ALLOCATION } from '../../constants/form-constants';
import CreateRadioCheckbox from '../Ui/CreateRadioCheckbox';
import Button from '../Ui/button';
import CreateDropdown from '../Ui/CreateDropdown';
import Input from '../Ui/input';
import Dropdown from '../Ui/dropdown';

interface assetAllocationProps {
  formData: {
    currency: string;
    annualInvestmentCapacity: string;
    lumpSumAmount: string;
    monthlyContribution: string;
    // assets: [{
    //   assetClass: string;
    //   percentageAllocation: string;
    //   specificFund: string;
    //   currentValue: string;
    // }];
    assets: Array<{
      assetClass: string;
      percentageAllocation: string;
      specificFund: string;
      currentValue: string;
    }>;
    investmentStyle: string;
    // [key: string]: any
  };
  updateField: (field: string, value: string | assets[]) => void;
}

interface assets {
  assetClass: string;
  percentageAllocation: string;
  specificFund: string;
  currentValue: string;
}

const AssetAllocation: React.FC<assetAllocationProps> = ({ formData, updateField }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateField(e.target.name || e.target.id, e.target.value);
  };

  const handleAssetChange = (index: number, field: string, value: string) => {
    const updatedAssets = [...formData.assets];
    updatedAssets[index] = { ...updatedAssets[index], [field]: value };
    updateField('assets', updatedAssets);
  };

  const addAsset = () => {
    const newAsset = {
      assetClass: '',
      percentageAllocation: '',
      specificFund: '',
      currentValue: '',
    };
    updateField('assets', [...formData.assets, newAsset]);
  };

  return (
    <div className="formScreen">
      {/* Annual Investment Capacity Input */}
      <div className="fieldDiv">
        <div className="fieldTitle">{ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.LABEL}</div>
        <div className="inputCapacity">
          <div>
            <Dropdown
              options={ASSET_ALLOCATION.CURRENCY.OPTIONS}
              name={ASSET_ALLOCATION.CURRENCY.NAME}
              id={ASSET_ALLOCATION.CURRENCY.ID}
              value={formData.currency}
              onChange={handleInputChange}
            />
          </div>
          <div className="fieldDiv">
            <Input
              type={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.TYPE}
              placeholder={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.PLACEHOLDER}
              id={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.ID}
              name={ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.NAME}
              value={formData.annualInvestmentCapacity}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="lumpMonthly">
        <div className="fieldDiv">
          {/* Lump Sum Amount Input */}
          <CreateInput
            name={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.NAME}
            fieldTitle={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.LABEL}
            type={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.TYPE}
            placeholder={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.PLACEHOLDER}
            id={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.ID}
            fieldClass={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.CLASS[0]}
            required={ASSET_ALLOCATION.LUMP_SUM_AMOUNT.REQUIRED}
            value={formData.lumpSumAmount}
            onChange={handleInputChange}
          />
        </div>

        <div className="fieldDiv">
          {/* Monthly Contribution Input */}
          <CreateInput
            name={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.NAME}
            fieldTitle={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.LABEL}
            type={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.TYPE}
            placeholder={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.PLACEHOLDER}
            id={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.ID}
            fieldClass={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.CLASS[0]}
            required={ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.REQUIRED}
            value={formData.monthlyContribution}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Asset Container*/}
      <div className="assetContainer">
        <div className="fieldTitle">{ASSET_ALLOCATION.ASSETS.TITLE}</div>

        {formData.assets.map((asset, index) => (
          <div key={index} className="asset">
            {/* Asset Class Dropdown */}
            <div className="fieldDiv">
              <CreateDropdown
                fieldTitle={ASSET_ALLOCATION.ASSET_CLASS.LABEL}
                options={ASSET_ALLOCATION.ASSET_CLASS.OPTIONS}
                name={`assetClass-${index}`}
                id={`assetClass-${index}`}
                fieldClass={ASSET_ALLOCATION.ASSET_CLASS.CLASS[0]}
                value={asset.assetClass}
                onChange={(e) => {
                  handleAssetChange(index, 'assetClass', e.target.value);
                }}
              />
            </div>

            {/* Percentage Allocation Input */}
            <div className="fieldDiv">
              <CreateInput
                name={`percentageAllocation-${index}`}
                fieldTitle={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.LABEL}
                type={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.TYPE}
                placeholder=""
                id={`percentageAllocation-${index}`}
                fieldClass={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.CLASS[0]}
                required={ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.REQUIRED}
                value={asset.percentageAllocation}
                onChange={(e) => {
                  handleAssetChange(index, 'percentageAllocation', e.target.value);
                }}
              />
            </div>

            {/* Specific Fund Input */}
            <div className="fieldDiv">
              <CreateInput
                name={`specificFund-${index}`}
                fieldTitle={ASSET_ALLOCATION.SPECIFIC_FUND.LABEL}
                type={ASSET_ALLOCATION.SPECIFIC_FUND.TYPE}
                placeholder=""
                id={`specificFund-${index}`}
                fieldClass={ASSET_ALLOCATION.SPECIFIC_FUND.CLASS[0]}
                required={ASSET_ALLOCATION.SPECIFIC_FUND.REQUIRED}
                value={asset.specificFund}
                onChange={(e) => {
                  handleAssetChange(index, 'specificFund', e.target.value);
                }}
              />
            </div>

            {/* Current Value Input */}
            <div className="fieldDiv">
              <CreateInput
                name={`currentValue-${index}`}
                fieldTitle={ASSET_ALLOCATION.CURRENT_VALUE.LABEL}
                type={ASSET_ALLOCATION.CURRENT_VALUE.TYPE}
                placeholder={ASSET_ALLOCATION.CURRENT_VALUE.PLACEHOLDER}
                id={`currentValue-${index}`}
                fieldClass={ASSET_ALLOCATION.CURRENT_VALUE.CLASS[0]}
                required={ASSET_ALLOCATION.CURRENT_VALUE.REQUIRED}
                value={asset.currentValue}
                onChange={(e) => {
                  handleAssetChange(index, 'currentValue', e.target.value);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* add asset button */}
      <Button
        text={ASSET_ALLOCATION.ADD_ASSET.LABEL}
        buttonClass="addAssetButton"
        id={ASSET_ALLOCATION.ADD_ASSET.ID}
        action={addAsset}
      />

      {/* Investment Style */}
      <div className="fieldDiv">
        <CreateRadioCheckbox
          fieldTitle={ASSET_ALLOCATION.INVESTMENT_STYLE.LABEL}
          type={ASSET_ALLOCATION.INVESTMENT_STYLE.TYPE}
          name={ASSET_ALLOCATION.INVESTMENT_STYLE.NAME}
          options={ASSET_ALLOCATION.INVESTMENT_STYLE.OPTIONS}
          id={ASSET_ALLOCATION.INVESTMENT_STYLE.ID}
          hidden={ASSET_ALLOCATION.INVESTMENT_STYLE.HIDDEN}
          inputClass={ASSET_ALLOCATION.INVESTMENT_STYLE.CLASS[1]}
          value={formData.investmentStyle}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AssetAllocation;
