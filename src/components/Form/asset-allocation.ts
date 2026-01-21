import { state } from '../../app.state.ts';
import { renderApp } from '../App.ts';
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
  assetAllocation.id = 'asset-allocation';

  // annual investment capacity div
  const annualInvestmentCapacityDiv = createDiv() as HTMLDivElement;
  annualInvestmentCapacityDiv.classList.add('fieldDiv');
  annualInvestmentCapacityDiv.id = ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.ID;
  const annualInvestmentCapacityTitle = createDiv() as HTMLDivElement;
  annualInvestmentCapacityTitle.classList.add('fieldTitle');
  annualInvestmentCapacityTitle.textContent = ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.LABEL;
  const annualInvestmentCapacityInput = createInput(
    '',
    ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.NAME
  ) as HTMLInputElement;
  annualInvestmentCapacityInput.classList.add('fieldInput');
  // const currencyDropdown = createDropdown(ASSET_ALLOCATION.CURRENCY.OPTIONS, ASSET_ALLOCATION.CURRENCY.NAME) as HTMLSelectElement;
  annualInvestmentCapacityInput.value = state.form.annualInvestmentCapacity;
  annualInvestmentCapacityInput.addEventListener('input', (event) => {
    state.form.annualInvestmentCapacity = (event.target as HTMLInputElement).value;
  });

  annualInvestmentCapacityDiv.append(annualInvestmentCapacityTitle, annualInvestmentCapacityInput);

  // lump sum amount div
  const lumpSumAmountDiv = createDiv() as HTMLDivElement;
  lumpSumAmountDiv.classList.add('fieldDiv');
  lumpSumAmountDiv.id = ASSET_ALLOCATION.LUMP_SUM_AMOUNT.ID;
  const lumpSumAmountTitle = createDiv() as HTMLDivElement;
  lumpSumAmountTitle.classList.add('fieldTitle');
  lumpSumAmountTitle.textContent = ASSET_ALLOCATION.LUMP_SUM_AMOUNT.LABEL;
  const lumpSumAmountInput = createInput(
    ASSET_ALLOCATION.LUMP_SUM_AMOUNT.TYPE,
    ASSET_ALLOCATION.LUMP_SUM_AMOUNT.NAME
  ) as HTMLInputElement;
  lumpSumAmountInput.classList.add('fieldInput');

  lumpSumAmountInput.value = state.form.lumpSumAmount;
  lumpSumAmountInput.addEventListener('input', (event) => {
    state.form.lumpSumAmount = (event.target as HTMLInputElement).value;
  });
  lumpSumAmountDiv.append(lumpSumAmountTitle, lumpSumAmountInput);

  // monthly contribution div
  const monthlyContributionDiv = createDiv() as HTMLDivElement;
  monthlyContributionDiv.classList.add('fieldDiv');
  monthlyContributionDiv.id = ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.ID;
  const monthlyContributionTitle = createDiv() as HTMLDivElement;
  monthlyContributionTitle.classList.add('fieldTitle');
  monthlyContributionTitle.textContent = ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.LABEL;
  const monthlyContributionInput = createInput(
    ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.TYPE,
    ASSET_ALLOCATION.MONTHLY_CONTRIBUTION.NAME
  ) as HTMLInputElement;
  monthlyContributionInput.classList.add('fieldInput');

  monthlyContributionInput.value = state.form.monthlyContribution;
  monthlyContributionInput.addEventListener('input', (event) => {
    state.form.monthlyContribution = (event.target as HTMLInputElement).value;
  });
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

  /*  function to create asset-div with asset class, percentage allocation, 
      specific fund and current value */
  const createAsset = (index: number) => {
    const assetData = state.form.assets[index];
    // div containing an asset
    const assetDiv = createDiv() as HTMLDivElement;

    // asset class div
    const assetClassDiv = createDiv() as HTMLDivElement;
    assetClassDiv.classList.add('fieldDiv');
    assetClassDiv.id = ASSET_ALLOCATION.ASSET_CLASS.ID;
    const assetClassTitle = createDiv() as HTMLDivElement;
    assetClassTitle.classList.add('subFieldTitle');
    assetClassTitle.textContent = ASSET_ALLOCATION.ASSET_CLASS.LABEL;
    const assetClassDropdown = createDropdown(
      ASSET_ALLOCATION.ASSET_CLASS.OPTIONS,
      ASSET_ALLOCATION.ASSET_CLASS.VALUES,
      ASSET_ALLOCATION.ASSET_CLASS.NAME
    ) as HTMLSelectElement;
    assetClassDropdown.classList.add('fieldInput');

    assetClassDropdown.value = assetData.assetClass;
    assetClassDropdown.addEventListener('input', (event) => {
      state.form.assets[index].assetClass = (event.target as HTMLInputElement).value;
    });

    assetClassDiv.append(assetClassTitle, assetClassDropdown);

    // percentage allocation div
    const percentageAllocationDiv = createDiv() as HTMLDivElement;
    percentageAllocationDiv.classList.add('fieldDiv');
    percentageAllocationDiv.id = ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.ID;
    const percentageAllocationTitle = createDiv() as HTMLDivElement;
    percentageAllocationTitle.classList.add('subFieldTitle');
    percentageAllocationTitle.textContent = ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.LABEL;
    const percentageAllocationInput = createInput(
      ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.TYPE,
      ASSET_ALLOCATION.PERCENTAGE_ALLOCATION.NAME
    ) as HTMLInputElement;
    percentageAllocationInput.classList.add('fieldInput');
    percentageAllocationInput.value = assetData.percentageAllocation;
    percentageAllocationInput.addEventListener('input', (event) => {
      state.form.assets[index].percentageAllocation = (event.target as HTMLInputElement).value;
    });
    percentageAllocationDiv.append(percentageAllocationTitle, percentageAllocationInput);

    // specific fund div
    const specificFundDiv = createDiv() as HTMLDivElement;
    specificFundDiv.classList.add('fieldDiv');
    specificFundDiv.id = ASSET_ALLOCATION.SPECIFIC_FUND.ID;
    const specificFundTitle = createDiv() as HTMLDivElement;
    specificFundTitle.classList.add('subFieldTitle');
    specificFundTitle.textContent = ASSET_ALLOCATION.SPECIFIC_FUND.LABEL;
    const specificFundInput = createInput(
      '',
      ASSET_ALLOCATION.SPECIFIC_FUND.NAME
    ) as HTMLInputElement;
    specificFundInput.classList.add('fieldInput');

    specificFundInput.value = assetData.specificFund;
    specificFundInput.addEventListener('input', (event) => {
      state.form.assets[index].specificFund = (event.target as HTMLInputElement).value;
    });

    specificFundDiv.append(specificFundTitle, specificFundInput);

    // current value div
    const currentValueDiv = createDiv() as HTMLDivElement;
    currentValueDiv.classList.add('fieldDiv');
    currentValueDiv.id = ASSET_ALLOCATION.CURRENT_VALUE.ID;

    const currentValueTitle = createDiv() as HTMLDivElement;
    currentValueTitle.classList.add('subFieldTitle');
    currentValueTitle.textContent = ASSET_ALLOCATION.CURRENT_VALUE.LABEL;

    const currentValueInput = createInput(
      ASSET_ALLOCATION.CURRENT_VALUE.TYPE,
      ASSET_ALLOCATION.CURRENT_VALUE.NAME
    ) as HTMLInputElement;
    currentValueInput.classList.add('fieldInput');

    currentValueInput.value = assetData.currentValue;
    currentValueInput.addEventListener('input', (event) => {
      state.form.assets[index].currentValue = (event.target as HTMLInputElement).value;
    });

    const deleteButton = createButton() as HTMLButtonElement;
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click', () => {
      // const assets = document.querySelectorAll('.asset');
      if (state.form.assets.length < 2) {
        alert('There should be atleast one asset!');
        return;
      }
      state.form.assets.splice(index, 1);
      renderApp();
    });

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
  assetContainer.append(assetsTitle);
  state.form.assets.forEach((_, index) => {
    assetContainer.appendChild(createAsset(index));
  });

  // add asset Button
  const addAssetButton = createButton() as HTMLButtonElement;
  addAssetButton.textContent = ASSET_ALLOCATION.ADD_ASSET.LABEL;
  addAssetButton.addEventListener('click', () => {
    state.form.assets.push({
      assetClass: '',
      percentageAllocation: '',
      specificFund: '',
      currentValue: '',
    });
    renderApp();
  });

  // investment style div
  const investmentStyleDiv = createDiv() as HTMLDivElement;
  investmentStyleDiv.classList.add('fieldDiv');
  investmentStyleDiv.id = ASSET_ALLOCATION.INVESTMENT_STYLE.ID;
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

  const investmentStyleCheckBoxes =
    investmentStyleCheckBox.querySelectorAll('input[type="checkbox"]');
  investmentStyleCheckBoxes.forEach((checkbox) => {
    const checkboxInput = checkbox as HTMLInputElement;
    const checkboxLabel = checkboxInput.nextElementSibling?.textContent || '';

    if (state.form.investmentStyle.includes(checkboxLabel)) {
      checkboxInput.checked = true;
    }

    checkboxInput.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const label = target.nextElementSibling?.textContent || '';

      if (target.checked) {
        if (!state.form.investmentStyle.includes(label)) {
          state.form.investmentStyle.push(label);
        }
      } else {
        state.form.investmentStyle = state.form.investmentStyle.filter((item) => item != label);
      }
    });
  });

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
