import { state } from '../app.state.js';
import { checkName, checkNumber } from '../utils/checker.js';
import { showError, checkExistingError } from '../services/error.js';
import { MESSAGE } from '../services/messages.js';
import { ASSET_ALLOCATION, INVESTMENT_DETAILS, PREFERENCES } from '../components/Form/constants.js';
import type { Asset } from '../app.types.js';

// Validations for part 1 of the form

// validate the portfolio name (input, required field)
export const validatePart1PortfolioName = (): boolean => {
  const portfolioNameInput = document.getElementsByName(
    'portfolioName'
  ) as NodeListOf<HTMLInputElement>;
  const errorClass = 'errorPortfolioNameInput';
  checkExistingError(errorClass);

  if (portfolioNameInput) {
    if (portfolioNameInput[0].value.trim().length === 0) {
      showError(
        errorClass,
        INVESTMENT_DETAILS.PORTFOLIO_NAME.ID,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
      );
      return false;
    }

    if (!checkName(portfolioNameInput[0].value.trim())) {
      showError(
        errorClass,
        INVESTMENT_DETAILS.PORTFOLIO_NAME.ID,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.INVALID_NAME
      );
      return false;
    }

    if (portfolioNameInput[0].value.trim().length <= 2) {
      showError(
        errorClass,
        INVESTMENT_DETAILS.PORTFOLIO_NAME.ID,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.MIN_CHARACTER
      );
      return false;
    }
  }

  return true;
};

// let recordID: number | null = null;
// export const getSelectedRecordID = (id: number | null) => {
//     recordID = id ? Number(id) : null;
// }

// export const nameTaken = (): boolean => {

//     const portfolioNameInput = document.getElementById("portfolioNameInput") as HTMLInputElement | null

//     checkExistingError('errorPortfolioNameInput')

//     if (portfolioNameInput) {
//         if (checkExistingPorfolioName(portfolioNameInput.value.trim(), recordID)) {
//             showError('errorPortfolioNameInput', 'portfolioInput', 'append', '13.65px', MESSAGE.ERROR_MESSAGE.NAME_EXISTS, '')
//             return false
//         }
//     }

//     return true
// }

// validate the portfolio type (radio, required field)
export const validatePart1PortfolioType = (): boolean => {
  const portfolioTypeInput = document.getElementsByName(
    'portfolioType'
  ) as NodeListOf<HTMLInputElement>;

  let isValid: boolean = false;

  const errorClass = 'errorPortfolioTypeInput';

  checkExistingError(errorClass);

  const len = portfolioTypeInput.length;

  for (let i = 0; i < len; i++) {
    if (typeof portfolioTypeInput[i] !== undefined) {
      if (portfolioTypeInput[i]?.checked === true) {
        isValid = true;
        break;
      }
    }
  }

  if (!isValid) {
    showError(
      errorClass,
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );
  }

  return isValid;
};

// validate the Investment Goal (dropdown, required field)
export const validatePart1InvestmentGoal = () => {
  const selectedField = document.getElementsByName(
    'investmentGoal'
  ) as NodeListOf<HTMLSelectElement>;
  const errorClass = 'errorInvestmentGoal';
  checkExistingError(errorClass);

  if (selectedField[0].value === '') {
    showError(
      errorClass,
      INVESTMENT_DETAILS.INVESTMENT_GOAL.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );
    return false;
  }

  return true;
};

// validate the portfolio type (dropdown, required field)
export const validatePart1InvestmentHorizon = () => {
  const selectedField = document.getElementsByName(
    'investmentHorizon'
  ) as NodeListOf<HTMLSelectElement>;

  const errorClass = 'errorInvestmentHorizon';
  checkExistingError(errorClass);

  if (selectedField[0].value === '') {
    showError(
      errorClass,
      INVESTMENT_DETAILS.INVESTMENT_HORIZON.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );
    return false;
  }

  return true;
};

// validate the portfolio type (radio, required field)
export const validatePart1RiskTolerance = () => {
  const riskToleranceInput = document.getElementsByName(
    'riskTolerance'
  ) as NodeListOf<HTMLInputElement>;

  const errorClass = 'errorRiskTolerance';
  checkExistingError(errorClass);

  const len = riskToleranceInput.length;
  let presence = false;

  for (let i = 0; i < len; i++) {
    if (riskToleranceInput[i]?.checked == false) {
      presence = false;
    } else {
      presence = true;
      break;
    }
  }

  if (!presence) {
    showError(
      errorClass,
      INVESTMENT_DETAILS.RISK_TOLERANCE.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );
  }

  return presence;
};

// Validations for part 2 of the form
// validate the Annual Investment Capacity (input, required field)
export const validatePart2AnnualInvestmentCapacity = () => {
  const annualInvestmentCapacityInput = document.getElementsByName(
    'annualInvestmentCapacity'
  ) as NodeListOf<HTMLInputElement>;

  let isValid = true;
  const errorClass = 'errorAnnualInvestmentCapacityInput';
  checkExistingError(errorClass);

  if (annualInvestmentCapacityInput[0]?.value === '') {
    showError(
      errorClass,
      ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.ID,
      'after',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );

    isValid = false;
  }

  if (annualInvestmentCapacityInput[0]) {
    if (
      !checkNumber(annualInvestmentCapacityInput[0].value) ||
      Number(annualInvestmentCapacityInput[0].value) < 1
    ) {
      showError(
        errorClass,
        ASSET_ALLOCATION.ANNUAL_INVESTMENT_CAPACITY.ID,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.INVALID_NUMBER_INPUT
      );

      isValid = false;
    }
  }

  return isValid;
};

// validate part 2 asset
export const validatePart2Asset = () => {
  const { assets } = state.form;
  let allValid = true;

  assets.forEach((asset, index) => {
    const assetClassErrorClass = `errorAssetClass-${index}`;
    checkExistingError(assetClassErrorClass);

    if (asset.assetClass === '') {
      showError(
        assetClassErrorClass,
        `asset-${index}-assetClass`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
      );
      allValid = false;
    }

    const percentageAllocationErrorClass = `errorPercentageAllocation-${index}`;
    checkExistingError(percentageAllocationErrorClass);

    if (asset.percentageAllocation === '') {
      showError(
        percentageAllocationErrorClass,
        `asset-${index}-percentageAllocation`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
      );
      allValid = false;
    } else if (
      !checkNumber(asset.percentageAllocation) ||
      Number(asset.percentageAllocation) < 0 ||
      Number(asset.percentageAllocation) > 100
    ) {
      showError(
        percentageAllocationErrorClass,
        `asset-${index}-percentageAllocation`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.INVALID_PERCENTAGE
      );
      allValid = false;
    }
  });

  return allValid;
};

export const validatePart2AssetIndividual = (
  index: number,
  field: 'assetClass' | 'percentageAlloacation'
) => {
  const asset: Asset = state.form.assets[index];

  if (field === 'assetClass') {
    const errorClass = `errorAssetClass-${index}`;
    checkExistingError(errorClass);

    if (asset.assetClass === '') {
      showError(
        errorClass,
        `asset-${index}-assetClass`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
      );
      return false;
    }
    return true;
  }

  if (field === 'percentageAlloacation') {
    const errorClass = `errorPercentageAllocation-${index}`;
    checkExistingError(errorClass);

    if (asset.percentageAllocation === '') {
      showError(
        errorClass,
        `asset-${index}-percentageAllocation`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
      );
      return false;
    } else if (
      !checkNumber(asset.percentageAllocation) ||
      Number(asset.percentageAllocation) < 0 ||
      Number(asset.percentageAllocation) > 100
    ) {
      showError(
        errorClass,
        `asset-${index}-percentageAllocation`,
        'append',
        '13.65px',
        MESSAGE.ERROR_MESSAGE.INVALID_PERCENTAGE
      );
      return false;
    }
    return true;
  }
  return true;
};

// Validations for part 3 of the form
// validate the automatic rebalancing (radio, required field)
export const validatePart3AutomatedRebalancing = () => {
  const automatedRebalancing = document.getElementsByName(
    'automatedRebalancing'
  ) as NodeListOf<HTMLInputElement>;

  const errorClass = 'errorAutomatedRebalancing';
  checkExistingError(errorClass);

  const len: number = automatedRebalancing.length;
  let isValid: boolean = false;

  for (let i = 0; i < len; i++) {
    if (automatedRebalancing[i]?.checked === true) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    showError(
      errorClass,
      PREFERENCES.AUTOMATED_REBALANCING.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );
  }

  return isValid;
};

// validate the Acknowledgement (checkbox, required field)
export const validatePart3AckCheckBox = () => {
  const checkBoxElement = document.getElementsByName(
    'riskAcknowledgement'
  ) as NodeListOf<HTMLInputElement>;

  // const checkBoxParent: HTMLElement | null = document.querySelector('.riskAcknowledgementContainer')

  const errorClass = 'errorAckCheck';
  checkExistingError(errorClass);

  if (checkBoxElement[0]?.checked == false) {
    showError(
      errorClass,
      PREFERENCES.RISK_ACKNOWLEDGEMENT.ID,
      'append',
      '13.65px',
      MESSAGE.ERROR_MESSAGE.REQUIRED_FIELD
    );

    return false;
  }

  return true;
};
