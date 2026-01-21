import { createInput, createDropdown, createRadioORCheckbox, createDiv } from '../input.ts';
import { INVESTMENT_DETAILS } from './constants.ts';

const InvestmentDetail = (): HTMLDivElement => {
  // parent div for investment details
  const investmentDetail = createDiv() as HTMLDivElement;
  investmentDetail.classList.add('formScreen');
  investmentDetail.id = 'investment-details';
  investmentDetail.style.display = '';

  // portfolio name div
  const portfolioNameDiv = createDiv() as HTMLDivElement;
  portfolioNameDiv.classList.add('fieldDiv');
  const portfolioNameTitle = createDiv() as HTMLDivElement;
  portfolioNameTitle.classList.add('fieldTitle');
  portfolioNameTitle.textContent = INVESTMENT_DETAILS.PORTFOLIO_NAME.LABEL;
  const portfolioNameInput = createInput(
    '',
    INVESTMENT_DETAILS.PORTFOLIO_NAME.NAME
  ) as HTMLInputElement;
  portfolioNameInput.classList.add('fieldInput');
  portfolioNameDiv.append(portfolioNameTitle, portfolioNameInput);

  // portfolio type div
  const portfolioTypeDiv = createDiv() as HTMLDivElement;
  portfolioTypeDiv.classList.add('fieldDiv');
  const portfolioTypeTitle = createDiv() as HTMLDivElement;
  portfolioTypeTitle.classList.add('fieldTitle');
  portfolioTypeTitle.textContent = INVESTMENT_DETAILS.PORTFOLIO_TYPE.LABEL;
  const portfolioTypeRadio = createRadioORCheckbox(
    INVESTMENT_DETAILS.PORTFOLIO_TYPE.OPTIONS,
    INVESTMENT_DETAILS.PORTFOLIO_TYPE.NAME,
    INVESTMENT_DETAILS.PORTFOLIO_TYPE.TYPE,
    INVESTMENT_DETAILS.PORTFOLIO_TYPE.CLASS,
    INVESTMENT_DETAILS.PORTFOLIO_TYPE.HIDDEN
  ) as HTMLDivElement;
  // portfolioTypeRadio.classList.add('fieldInput');
  portfolioTypeDiv.append(portfolioTypeTitle, portfolioTypeRadio);

  // investment goal div
  const investmentGoalDiv = createDiv() as HTMLDivElement;
  investmentGoalDiv.classList.add('fieldDiv');
  const investmentGoalTitle = createDiv() as HTMLDivElement;
  investmentGoalTitle.classList.add('fieldTitle');
  investmentGoalTitle.textContent = INVESTMENT_DETAILS.INVESTMENT_GOAL.LABEL;
  const investmentGoalDropdown = createDropdown(
    INVESTMENT_DETAILS.INVESTMENT_GOAL.OPTIONS,
    INVESTMENT_DETAILS.INVESTMENT_GOAL.NAME
  ) as HTMLSelectElement;
  investmentGoalDropdown.classList.add('fieldInput');
  investmentGoalDiv.append(investmentGoalTitle, investmentGoalDropdown);

  // investment horizon div
  const investmentHorizonDiv = createDiv() as HTMLDivElement;
  investmentHorizonDiv.classList.add('fieldDiv');
  const investmentHorizonTitle = createDiv() as HTMLDivElement;
  investmentHorizonTitle.classList.add('fieldTitle');
  investmentHorizonTitle.textContent = INVESTMENT_DETAILS.INVESTMENT_HORIZON.LABEL;
  const investmentHorizonDropdown = createDropdown(
    INVESTMENT_DETAILS.INVESTMENT_HORIZON.OPTIONS,
    INVESTMENT_DETAILS.INVESTMENT_HORIZON.NAME
  ) as HTMLSelectElement;
  investmentHorizonDropdown.classList.add('fieldInput');
  investmentHorizonDiv.append(investmentHorizonTitle, investmentHorizonDropdown);

  // putting investment goal and investment horizon under a div
  const goalHorizonDiv = createDiv() as HTMLDivElement;
  goalHorizonDiv.append(investmentGoalDiv, investmentHorizonDiv);
  goalHorizonDiv.classList.add('goalHorizon');

  // risk tolerance div
  const riskToleranceDiv = createDiv() as HTMLDivElement;
  riskToleranceDiv.classList.add('fieldDiv');
  const riskToleranceTitle = createDiv() as HTMLDivElement;
  riskToleranceTitle.classList.add('fieldTitle');
  riskToleranceTitle.textContent = INVESTMENT_DETAILS.RISK_TOLERANCE.LABEL;
  const riskToleranceRadio = createRadioORCheckbox(
    INVESTMENT_DETAILS.RISK_TOLERANCE.OPTIONS,
    INVESTMENT_DETAILS.RISK_TOLERANCE.NAME,
    INVESTMENT_DETAILS.RISK_TOLERANCE.TYPE,
    INVESTMENT_DETAILS.RISK_TOLERANCE.CLASS,
    INVESTMENT_DETAILS.RISK_TOLERANCE.HIDDEN
  ) as HTMLDivElement;
  // riskToleranceRadio.classList.add('fieldInput');
  riskToleranceDiv.append(riskToleranceTitle, riskToleranceRadio);

  // append all divs to parent
  investmentDetail.append(portfolioNameDiv, portfolioTypeDiv, goalHorizonDiv, riskToleranceDiv);
  return investmentDetail;
};

export { InvestmentDetail };
