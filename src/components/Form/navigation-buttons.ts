import { createButton } from '../Ui/button';
import { createDiv } from '../Ui/div';
import { initialFormState, state } from '../../app.state';
import { renderApp } from '../App';
import { saveToStorage } from '../../app.storage';
import {
  validatePart1PortfolioName,
  validatePart1PortfolioType,
  validatePart1InvestmentGoal,
  validatePart1InvestmentHorizon,
  validatePart1RiskTolerance,
  validatePart2AnnualInvestmentCapacity,
  validatePart2Asset,
  validatePart3AutomatedRebalancing,
  validatePart3AckCheckBox,
} from '../../services/validations';
import type { PortfolioFormRecords } from '../../types/PortfolioFormRecords';

const Navigation = (): HTMLDivElement => {
  const navigationButtonDiv = createDiv() as HTMLDivElement;
  navigationButtonDiv.classList.add('buttonContainer');

  const previousButton = createButton() as HTMLButtonElement;
  previousButton.textContent = 'Previous';
  previousButton.className = 'navigationButton';
  previousButton.id = 'previousButton';
  previousButton.disabled = state.currentStep === 1;

  const continueButton = createButton() as HTMLButtonElement;
  continueButton.textContent = 'Continue';
  continueButton.className = 'navigationButton';
  continueButton.id = 'continueButton';

  const submitButton = createButton() as HTMLButtonElement;
  submitButton.textContent = state.editingRecordId ? 'Update' : 'Submit';
  submitButton.className = 'navigationButton';
  submitButton.id = 'submitButton';

  if (state.currentStep === 3) {
    continueButton.style.display = 'none';
    submitButton.style.display = '';
  } else {
    continueButton.style.display = '';
    submitButton.style.display = 'none';
  }

  previousButton.addEventListener('click', () => {
    if (state.currentStep > 1) {
      state.currentStep -= 1;
      saveToStorage();
      renderApp();
    }
  });

  continueButton.addEventListener('click', () => {
    let isValid = false;

    if (state.currentStep === 1) {
      validatePart1PortfolioName();
      validatePart1PortfolioType();
      validatePart1InvestmentGoal();
      validatePart1InvestmentHorizon();
      validatePart1RiskTolerance();

      isValid =
        validatePart1PortfolioName() &&
        validatePart1PortfolioType() &&
        validatePart1InvestmentGoal() &&
        validatePart1InvestmentHorizon() &&
        validatePart1RiskTolerance();
    } else if (state.currentStep === 2) {
      validatePart2AnnualInvestmentCapacity();
      validatePart2Asset();
      isValid = validatePart2AnnualInvestmentCapacity() && validatePart2Asset();
    }

    if (isValid && state.currentStep < 3) {
      if (!state.completedSteps.includes(state.currentStep)) {
        state.completedSteps.push(state.currentStep);
      }
      state.currentStep += 1;
      saveToStorage();
      renderApp();
    }
  });

  submitButton.addEventListener('click', () => {
    validatePart3AutomatedRebalancing();
    validatePart3AckCheckBox();
    const isValid = validatePart3AutomatedRebalancing() && validatePart3AckCheckBox();

    if (isValid) {
      if (state.selectedRecordId) {
        const index: number = state.records.findIndex(
          (r: PortfolioFormRecords) => r.id === state.editingRecordId
        );
        if (index !== -1) {
          state.records[index] = {
            id: String(state.editingRecordId),
            ...state.form,
            createdAt: state.records[index].createdAt,
          };
        }
      } else {
        state.records.push({
          id: Date.now().toString(),
          ...state.form,
          createdAt: new Date().toISOString(),
        });
      }
      resetForm();
    }
  });

  navigationButtonDiv.append(previousButton, continueButton, submitButton);
  return navigationButtonDiv;
};

const resetForm = (): void => {
  state.form = { ...initialFormState };
  state.currentStep = 1;
  state.completedSteps = [];
  state.selectedRecordId = null;
  state.editingRecordId = null;
  saveToStorage();
  renderApp();
};

export { Navigation, resetForm };
