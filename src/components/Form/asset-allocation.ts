import {
  createInput,
  createDropdown,
  createDiv,
  createRadioORCheckbox,
  createButton,
} from '../input.ts';
import { ASSET_ALLOCATION } from './constants.ts';

const AssetAllocation = (): HTMLDivElement => {
  // parent div for asset allocation
  const assetAllocation = createDiv() as HTMLDivElement;
  assetAllocation.classList.add('formScreen');

  // annual investment capacity div
  const annualInvestmentCapacityDiv = createDiv() as HTMLDivElement;
  annualInvestmentCapacityDiv.classList.add('fieldDiv');
  const annualInvestmentCapacityTitle = createDiv() as HTMLDivElement;
  annualInvestmentCapacityTitle.classList.add('fieldTitle');
  annualInvestmentCapacityTitle.textContent = ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.LABEL;
  const annualInvestmentCapacityInput = createInput(
    '',
    ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.NAME
  ) as HTMLInputElement;
  // const currencyDropdown = createDropdown(ASSET_ALLOCATION.CURRENCY.OPTIONS, ASSET_ALLOCATION.CURRENCY.NAME) as HTMLSelectElement;
  annualInvestmentCapacityInput.classList.add('fieldInput');
  annualInvestmentCapacityDiv.append(annualInvestmentCapacityTitle, annualInvestmentCapacityInput);

  // lump sum amount div
  const lumpSumAmountDiv = createDiv() as HTMLDivElement;
  lumpSumAmountDiv.classList.add('fieldDiv');
  const lumpSumAmountTitle = createDiv() as HTMLDivElement;
  lumpSumAmountTitle.classList.add('fieldTitle');
  lumpSumAmountTitle.textContent = ASSET_ALLOCATION.LUMP_SUM_AMOUNT.LABEL;
  const lumpSumAmountInput = createInput(
    ASSET_ALLOCATION.LUMP_SUM_AMOUNT.TYPE,
    ASSET_ALLOCATION.LUMP_SUM_AMOUNT.NAME
  ) as HTMLInputElement;
  lumpSumAmountInput.classList.add('fieldInput');
  lumpSumAmountDiv.append(lumpSumAmountTitle, lumpSumAmountInput);

  // monthly contribution div
  const monthlyContributionDiv = createDiv() as HTMLDivElement;
  monthlyContributionDiv.classList.add('fieldDiv');
  const monthlyContributionTitle = createDiv() as HTMLDivElement;
  monthlyContributionTitle.classList.add('fieldTitle');
  monthlyContributionTitle.textContent = ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.LABEL;
  const monthlyContributionInput = createInput(
    ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.TYPE,
    ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.NAME
  ) as HTMLInputElement;
  monthlyContributionInput.classList.add('fieldInput');
  monthlyContributionDiv.append(monthlyContributionTitle, monthlyContributionInput);

  // putting lump sum amount and monthly contribution under a div
  const lumpMonthlyDiv = createDiv() as HTMLDivElement;
  lumpMonthlyDiv.append(lumpSumAmountDiv, monthlyContributionDiv);
  lumpMonthlyDiv.classList.add('goalHorizon');

  // assets container div
  const assetContainer = createDiv() as HTMLDivElement;
  assetContainer.classList.add('assetContainer');
  const assetsTitle = createDiv() as HTMLDivElement;
  assetsTitle.textContent = ASSET_ALLOCATION.ASSETS.TITLE;
  assetsTitle.classList.add('fieldTitle');
  assetContainer.append(assetsTitle);

  /*  function to create asset-div with asset class, percentage allocation, 
      specific fund and current value */
  const createAsset = () => {
    // div containing an asset
    const assetDiv = createDiv() as HTMLDivElement;

    // asset class div
    const assetClassDiv = createDiv() as HTMLDivElement;
    assetClassDiv.classList.add('fieldDiv');
    const assetClassTitle = createDiv() as HTMLDivElement;
    assetClassTitle.classList.add('subFieldTitle');
    assetClassTitle.textContent = ASSET_ALLOCATION.ASSET_CLASS.LABEL;
    const assetClassDropdown = createDropdown(
      ASSET_ALLOCATION.ASSET_CLASS.OPTIONS,
      ASSET_ALLOCATION.ASSET_CLASS.NAME
    ) as HTMLSelectElement;
    assetClassDropdown.classList.add('fieldInput');
    assetClassDiv.append(assetClassTitle, assetClassDropdown);

    // percentage allocation div
    const percentageAllocationDiv = createDiv() as HTMLDivElement;
    percentageAllocationDiv.classList.add('fieldDiv');
    const percentageAllocationTitle = createDiv() as HTMLDivElement;
    percentageAllocationTitle.classList.add('subFieldTitle');
    percentageAllocationTitle.textContent = ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.LABEL;
    const percentageAllocationInput = createInput(
      ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.TYPE,
      ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.NAME
    ) as HTMLInputElement;
    percentageAllocationInput.classList.add('fieldInput');
    percentageAllocationDiv.append(percentageAllocationTitle, percentageAllocationInput);

    // specific fund div
    const specificFundDiv = createDiv() as HTMLDivElement;
    specificFundDiv.classList.add('fieldDiv');
    const specificFundTitle = createDiv() as HTMLDivElement;
    specificFundTitle.classList.add('subFieldTitle');
    specificFundTitle.textContent = ASSET_ALLOCATION.SPECIFIC_FUND.LABEL;
    const specificFundInput = createInput(
      '',
      ASSET_ALLOCATION.SPECIFIC_FUND.NAME
    ) as HTMLInputElement;
    specificFundInput.classList.add('fieldInput');
    specificFundDiv.append(specificFundTitle, specificFundInput);

    // specific fund div
    const currentValueDiv = createDiv() as HTMLDivElement;
    currentValueDiv.classList.add('fieldDiv');
    const currentValueTitle = createDiv() as HTMLDivElement;
    currentValueTitle.classList.add('subFieldTitle');
    currentValueTitle.textContent = ASSET_ALLOCATION.CURRENT_VALUE.LABEL;
    const currentValueInput = createInput(
      ASSET_ALLOCATION.CURRENT_VALUE.TYPE,
      ASSET_ALLOCATION.CURRENT_VALUE.NAME
    ) as HTMLInputElement;
    currentValueInput.classList.add('fieldInput');
    const deleteButton = createButton() as HTMLButtonElement;
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('deleteButton');
    const inputDelete = createDiv() as HTMLDivElement;
    inputDelete.append(currentValueInput, deleteButton);
    inputDelete.classList.add('deleteAssetContainer');
    currentValueDiv.append(currentValueTitle, inputDelete);

    // appending all asset fields in the assets-div
    assetDiv.append(assetClassDiv, percentageAllocationDiv, specificFundDiv, currentValueDiv);
    assetDiv.classList.add('asset');

    return assetDiv;
  };

  // add asset-div to asset container
  assetContainer.append(createAsset());

  // add asset Button
  const addAssetButton = createButton() as HTMLButtonElement;
  addAssetButton.textContent = ASSET_ALLOCATION.ADD_ASSET.LABEL;

  // investment style div
  const investmentStyleDiv = createDiv() as HTMLDivElement;
  investmentStyleDiv.classList.add('fieldDiv');
  const investmentStyleTitle = createDiv() as HTMLDivElement;
  investmentStyleTitle.classList.add('fieldTitle');
  investmentStyleTitle.textContent = ASSET_ALLOCATION.INVESTMENT_STYLE.LABEL;
  const investmentStyleCheckBox = createRadioORCheckbox(
    ASSET_ALLOCATION.INVESTMENT_STYLE.OPTIONS,
    ASSET_ALLOCATION.INVESTMENT_STYLE.NAME,
    ASSET_ALLOCATION.INVESTMENT_STYLE.TYPE,
    ASSET_ALLOCATION.INVESTMENT_STYLE.CLASS,
    ASSET_ALLOCATION.INVESTMENT_STYLE.HIDDEN
  );
  // investmentStyleCheckBox.classList.add('fieldInput');
  investmentStyleDiv.append(investmentStyleTitle, investmentStyleCheckBox);

  assetAllocation.append(
    annualInvestmentCapacityDiv,
    lumpMonthlyDiv,
    assetContainer,
    addAssetButton,
    investmentStyleDiv
  );

  return assetAllocation;
};

export { AssetAllocation };
