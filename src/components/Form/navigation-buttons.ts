import { createButton } from '../Ui/button';
import { createDiv } from '../Ui/div';
// import { initialFormState, state } from '../../app.state';
import { initialFormState, stateManager } from '../../app.state';
import { StateManager } from '../../core/state-manager';
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
import { showModal } from '../modal';

class NavigationButtons {
  private stateManager: StateManager;

  constructor(stateManager: StateManager) {
    this.stateManager = stateManager;
  }

  render(): HTMLDivElement {
    const navigationButtonDiv = createDiv() as HTMLDivElement;
    navigationButtonDiv.classList.add('buttonContainer');

    const previousButton = createButton() as HTMLButtonElement;
    previousButton.textContent = 'Previous';
    previousButton.className = 'navigationButton';
    previousButton.id = 'previousButton';
    previousButton.disabled = this.stateManager.getCurrentStep() === 1;

    const continueButton = createButton() as HTMLButtonElement;
    continueButton.textContent = 'Continue';
    continueButton.className = 'navigationButton';
    continueButton.id = 'continueButton';

    const submitButton = createButton() as HTMLButtonElement;
    submitButton.textContent = this.stateManager.getEditingRecordId() ? 'Update' : 'Submit';
    submitButton.className = 'navigationButton';
    submitButton.id = 'submitButton';

    if (this.stateManager.getCurrentStep() === 3) {
      continueButton.style.display = 'none';
      submitButton.style.display = '';
    } else {
      continueButton.style.display = '';
      submitButton.style.display = 'none';
    }

    previousButton.addEventListener('click', () => {
      if (this.stateManager.getCurrentStep() > 1) {
        this.stateManager.setCurrentStep(this.stateManager.getCurrentStep() - 1);
        saveToStorage();
        renderApp();
      }
    });

    continueButton.addEventListener('click', () => {
      let isValid = false;

      if (this.stateManager.getCurrentStep() === 1) {
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
      } else if (this.stateManager.getCurrentStep() === 2) {
        validatePart2AnnualInvestmentCapacity();
        validatePart2Asset();
        isValid = validatePart2AnnualInvestmentCapacity() && validatePart2Asset();
      }

      if (isValid && this.stateManager.getCurrentStep() < 3) {
        this.stateManager.addCompletedStep(this.stateManager.getCurrentStep());
        this.stateManager.setCurrentStep(this.stateManager.getCurrentStep() + 1);
        saveToStorage();
        renderApp();
      }
    });

    submitButton.addEventListener('click', () => {
      validatePart3AutomatedRebalancing();
      validatePart3AckCheckBox();
      const isValid = validatePart3AutomatedRebalancing() && validatePart3AckCheckBox();

      if (isValid) {
        const updateRecord = this.stateManager.getSelectedRecordId();
        if (updateRecord) {
          const index: number = this.stateManager
            .getRecords()
            .findIndex(
              (r: PortfolioFormRecords) => r.id === this.stateManager.getEditingRecordId()
            );
          if (index !== -1) {
            this.stateManager.updateRecord(String(this.stateManager.getEditingRecordId()), {
              id: String(this.stateManager.getEditingRecordId()),
              ...this.stateManager.getForm(),
              createdAt: this.stateManager.getRecords()[index].createdAt,
            });
          }
        } else {
          this.stateManager.addRecord({
            id: Date.now().toString(),
            ...this.stateManager.getForm(),
            createdAt: new Date().toISOString(),
          });
        }
        this.resetForm();

        showModal(
          updateRecord ? 'Record Updated' : 'Record Submitted',
          updateRecord
            ? 'Your portfolio record has been successfully updated!'
            : 'Your portfolio record has been successfully submittted!',
          'alert',
          () => {}
        );
      }
    });

    navigationButtonDiv.append(previousButton, continueButton, submitButton);
    return navigationButtonDiv;
  }

  resetForm(): void {
    this.stateManager.resetForm(initialFormState);
    this.stateManager.setCurrentStep(1);
    this.stateManager.resetCompletedSteps();
    this.stateManager.setSelectedRecordId(null);
    this.stateManager.setEditingRecordId(null);
    saveToStorage();
    renderApp();
  }
}

const navigationButtons = new NavigationButtons(stateManager);
const Navigation = (): HTMLDivElement => {
  return navigationButtons.render();
};
const resetForm = (): void => {
  navigationButtons.resetForm();
};

export { Navigation, resetForm };
