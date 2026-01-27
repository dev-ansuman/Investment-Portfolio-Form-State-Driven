import { stateManager } from '../../app.state.ts';
import { StateManager } from '../../core/state-manager.ts';
import {
  validatePart1InvestmentGoal,
  validatePart1InvestmentHorizon,
  validatePart1PortfolioName,
  validatePart1PortfolioType,
  validatePart1RiskTolerance,
} from '../../services/validations.ts';
import { createInput } from '../Ui/input.ts';
import { createDiv } from '../Ui/div.ts';
import { createRadioORCheckbox } from '../Ui/radioCheckbox.ts';
import { createDropdown } from '../Ui/dropdown.ts';
import { INVESTMENT_DETAILS } from '../../constants/form-constants.ts';
import { createRequired } from '../Ui/required.ts';

class InvestmentDetailComponent {
  private stateManager: StateManager;

  constructor(stateManager: StateManager) {
    this.stateManager = stateManager;
  }

  render(): HTMLDivElement {
    // parent div for investment details
    const investmentDetail = createDiv() as HTMLDivElement;
    investmentDetail.classList.add('formScreen');
    investmentDetail.id = 'investment-details';

    // portfolio name div
    const portfolioNameDiv = createDiv() as HTMLDivElement;
    portfolioNameDiv.classList.add('fieldDiv');
    portfolioNameDiv.id = INVESTMENT_DETAILS.PORTFOLIO_NAME.ID;
    const portfolioNameTitle = createDiv() as HTMLDivElement;
    portfolioNameTitle.classList.add('fieldTitle');
    portfolioNameTitle.textContent = INVESTMENT_DETAILS.PORTFOLIO_NAME.LABEL;
    portfolioNameTitle.append(createRequired());
    const portfolioNameInput = createInput(
      '',
      INVESTMENT_DETAILS.PORTFOLIO_NAME.NAME,
      ''
    ) as HTMLInputElement;
    portfolioNameInput.classList.add('fieldInput');

    portfolioNameInput.value = this.stateManager.getForm().portfolioName;
    portfolioNameInput.addEventListener('input', (event) => {
      this.stateManager.setFormField('portfolioName', (event.target as HTMLInputElement).value);
      validatePart1PortfolioName();
    });

    portfolioNameDiv.append(portfolioNameTitle, portfolioNameInput);

    // portfolio type div
    const portfolioTypeDiv = createDiv() as HTMLDivElement;
    portfolioTypeDiv.classList.add('fieldDiv');
    portfolioTypeDiv.id = INVESTMENT_DETAILS.PORTFOLIO_TYPE.ID;
    const portfolioTypeTitle = createDiv() as HTMLDivElement;
    portfolioTypeTitle.classList.add('fieldTitle');
    portfolioTypeTitle.textContent = INVESTMENT_DETAILS.PORTFOLIO_TYPE.LABEL;
    portfolioTypeTitle.append(createRequired());
    const portfolioTypeRadio = createRadioORCheckbox(
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.OPTIONS,
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.NAME,
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.TYPE,
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.CLASS,
      INVESTMENT_DETAILS.PORTFOLIO_TYPE.HIDDEN
    ) as HTMLDivElement;

    const portfolioTypeRadios = portfolioTypeRadio.querySelectorAll('input[type="radio"]');
    portfolioTypeRadios.forEach((radio) => {
      const radioInput = radio as HTMLInputElement;
      const radioLabel = radioInput.nextElementSibling?.textContent;

      if (
        this.stateManager.getForm().portfolioType &&
        radioLabel === this.stateManager.getForm().portfolioType
      ) {
        radioInput.checked = true;
      }

      radioInput.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
          const radioLabel = target.nextElementSibling?.textContent || '';
          this.stateManager.setFormField('portfolioType', radioLabel);
          validatePart1PortfolioType();
        }
      });
    });

    portfolioTypeDiv.append(portfolioTypeTitle, portfolioTypeRadio);

    // investment goal div
    const investmentGoalDiv = createDiv() as HTMLDivElement;
    investmentGoalDiv.classList.add('fieldDiv');
    investmentGoalDiv.id = INVESTMENT_DETAILS.INVESTMENT_GOAL.ID;
    const investmentGoalTitle = createDiv() as HTMLDivElement;
    investmentGoalTitle.classList.add('fieldTitle');
    investmentGoalTitle.textContent = INVESTMENT_DETAILS.INVESTMENT_GOAL.LABEL;
    investmentGoalTitle.append(createRequired());
    const investmentGoalDropdown = createDropdown(
      INVESTMENT_DETAILS.INVESTMENT_GOAL.OPTIONS,
      INVESTMENT_DETAILS.INVESTMENT_GOAL.VALUES,
      INVESTMENT_DETAILS.INVESTMENT_GOAL.NAME
    ) as HTMLSelectElement;
    investmentGoalDropdown.classList.add('fieldInput');

    investmentGoalDropdown.value = this.stateManager.getForm().investmentGoal;
    investmentGoalDropdown.addEventListener('change', (event) => {
      this.stateManager.setFormField('investmentGoal', (event.target as HTMLSelectElement).value);
      validatePart1InvestmentGoal();
    });

    investmentGoalDiv.append(investmentGoalTitle, investmentGoalDropdown);

    // investment horizon div
    const investmentHorizonDiv = createDiv() as HTMLDivElement;
    investmentHorizonDiv.classList.add('fieldDiv');
    investmentHorizonDiv.id = INVESTMENT_DETAILS.INVESTMENT_HORIZON.ID;
    const investmentHorizonTitle = createDiv() as HTMLDivElement;
    investmentHorizonTitle.classList.add('fieldTitle');
    investmentHorizonTitle.textContent = INVESTMENT_DETAILS.INVESTMENT_HORIZON.LABEL;
    investmentHorizonTitle.append(createRequired());
    const investmentHorizonDropdown = createDropdown(
      INVESTMENT_DETAILS.INVESTMENT_HORIZON.OPTIONS,
      INVESTMENT_DETAILS.INVESTMENT_HORIZON.VALUES,
      INVESTMENT_DETAILS.INVESTMENT_HORIZON.NAME
    ) as HTMLSelectElement;
    investmentHorizonDropdown.classList.add('fieldInput');

    investmentHorizonDropdown.value = this.stateManager.getForm().investmentHorizon;
    investmentHorizonDropdown.addEventListener('change', (event) => {
      this.stateManager.setFormField(
        'investmentHorizon',
        (event.target as HTMLSelectElement).value
      );
      validatePart1InvestmentHorizon();
    });

    investmentHorizonDiv.append(investmentHorizonTitle, investmentHorizonDropdown);

    // putting investment goal and investment horizon under a div
    const goalHorizonDiv = createDiv() as HTMLDivElement;
    goalHorizonDiv.append(investmentGoalDiv, investmentHorizonDiv);
    goalHorizonDiv.classList.add('goalHorizon');

    // risk tolerance div
    const riskToleranceDiv = createDiv() as HTMLDivElement;
    riskToleranceDiv.classList.add('fieldDiv');
    riskToleranceDiv.id = INVESTMENT_DETAILS.RISK_TOLERANCE.ID;
    const riskToleranceTitle = createDiv() as HTMLDivElement;
    riskToleranceTitle.classList.add('fieldTitle');
    riskToleranceTitle.textContent = INVESTMENT_DETAILS.RISK_TOLERANCE.LABEL;
    riskToleranceTitle.append(createRequired());
    const riskToleranceRadio = createRadioORCheckbox(
      INVESTMENT_DETAILS.RISK_TOLERANCE.OPTIONS,
      INVESTMENT_DETAILS.RISK_TOLERANCE.NAME,
      INVESTMENT_DETAILS.RISK_TOLERANCE.TYPE,
      INVESTMENT_DETAILS.RISK_TOLERANCE.CLASS,
      INVESTMENT_DETAILS.RISK_TOLERANCE.HIDDEN
    ) as HTMLDivElement;

    const riskToleranceRadios = riskToleranceRadio.querySelectorAll('input[type="radio"]');
    riskToleranceRadios.forEach((radio) => {
      const radioInput = radio as HTMLInputElement;
      const radioLabel = radioInput.nextElementSibling?.textContent;

      if (
        this.stateManager.getForm().riskTolerance &&
        radioLabel === this.stateManager.getForm().riskTolerance
      ) {
        radioInput.checked = true;
      }

      radioInput.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
          const radioLabel = target.nextElementSibling?.textContent || '';
          this.stateManager.setFormField('riskTolerance', radioLabel);
        }
        validatePart1RiskTolerance();
      });
    });

    riskToleranceDiv.append(riskToleranceTitle, riskToleranceRadio);

    // append all divs to parent
    investmentDetail.append(portfolioNameDiv, portfolioTypeDiv, goalHorizonDiv, riskToleranceDiv);
    return investmentDetail;
  }
}

const investmentDetailComponent = new InvestmentDetailComponent(stateManager);

const InvestmentDetail = (): HTMLDivElement => {
  return investmentDetailComponent.render();
};

export { InvestmentDetail };
