import { state } from '../../app.state';
import {
  validatePart3AckCheckBox,
  validatePart3AutomatedRebalancing,
} from '../../services/validations';
import { createRequired } from '../../utils/required';
import { createDiv, createRadioORCheckbox, createTextarea } from '../create-input';
import { PREFERENCES } from './constants';

const Preference = (): HTMLDivElement => {
  // parent div for preferences
  const preferencesDiv = createDiv() as HTMLDivElement;
  preferencesDiv.classList.add('formScreen');
  preferencesDiv.id = 'preferences';

  // automated rebalancing div
  const automatedRebalancingDiv = createDiv() as HTMLDivElement;
  automatedRebalancingDiv.classList.add('fieldDiv');
  automatedRebalancingDiv.id = PREFERENCES.AUTOMATED_REBALANCING.ID;
  // automatedRebalancingDiv.classList.add('alignPreferences');
  const automatedRebalancingTitle = createDiv() as HTMLDivElement;
  automatedRebalancingTitle.classList.add('fieldTitle');
  automatedRebalancingTitle.textContent = PREFERENCES.AUTOMATED_REBALANCING.LABEL;
  automatedRebalancingTitle.append(createRequired());
  const automatedRebalancingRadio = createRadioORCheckbox(
    PREFERENCES.AUTOMATED_REBALANCING.OPTIONS,
    PREFERENCES.AUTOMATED_REBALANCING.NAME,
    PREFERENCES.AUTOMATED_REBALANCING.TYPE,
    PREFERENCES.AUTOMATED_REBALANCING.CLASS,
    PREFERENCES.AUTOMATED_REBALANCING.HIDDEN
  ) as HTMLDivElement;

  const automatedRebalancingRadios =
    automatedRebalancingRadio.querySelectorAll('input[type="radio"]');
  automatedRebalancingRadios.forEach((radio) => {
    const radioInput = radio as HTMLInputElement;
    const radioLabel = radio.nextElementSibling?.textContent || '';

    if (state.form.automatedRebalancing && state.form.automatedRebalancing === radioLabel) {
      radioInput.checked = true;
    }

    radioInput.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        const radioLabel = target.nextElementSibling?.textContent || '';
        state.form.automatedRebalancing = radioLabel;
      }
      validatePart3AutomatedRebalancing();
    });
  });

  automatedRebalancingDiv.append(automatedRebalancingTitle, automatedRebalancingRadio);

  // tax saving preference div
  const taxSavingPreferenceDiv = createDiv() as HTMLDivElement;
  taxSavingPreferenceDiv.classList.add('fieldDiv');
  taxSavingPreferenceDiv.id = PREFERENCES.TAX_SAVING_PREF.ID;
  // taxSavingPreferenceDiv.classList.add('alignPreferences');
  const taxSavingPreferenceTitle = createDiv() as HTMLDivElement;
  taxSavingPreferenceTitle.classList.add('fieldTitle');
  taxSavingPreferenceTitle.textContent = PREFERENCES.TAX_SAVING_PREF.LABEL;
  const taxSavingPreferenceRadio = createRadioORCheckbox(
    PREFERENCES.TAX_SAVING_PREF.OPTIONS,
    PREFERENCES.TAX_SAVING_PREF.NAME,
    PREFERENCES.TAX_SAVING_PREF.TYPE,
    PREFERENCES.TAX_SAVING_PREF.CLASS,
    PREFERENCES.TAX_SAVING_PREF.HIDDEN
  ) as HTMLDivElement;

  const taxSavingPreferenceRadios =
    taxSavingPreferenceRadio.querySelectorAll('input[type="radio"]');
  taxSavingPreferenceRadios.forEach((radio) => {
    const radioInput = radio as HTMLInputElement;
    const radioLabel = radio.nextElementSibling?.textContent || '';

    if (state.form.taxSavingPrefernce && state.form.taxSavingPrefernce === radioLabel) {
      radioInput.checked = true;
    }

    radioInput.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        const radioLabel = target.nextElementSibling?.textContent || '';
        state.form.taxSavingPrefernce = radioLabel;
      }
    });
  });

  taxSavingPreferenceDiv.append(taxSavingPreferenceTitle, taxSavingPreferenceRadio);

  const automatedBalancingTaxSavingDiv = createDiv() as HTMLDivElement;
  automatedBalancingTaxSavingDiv.append(automatedRebalancingDiv, taxSavingPreferenceDiv);
  automatedBalancingTaxSavingDiv.style.display = 'flex';

  // financial goals div
  const financialGoalsDiv = createDiv() as HTMLDivElement;
  financialGoalsDiv.classList.add('fieldDiv');
  financialGoalsDiv.id = PREFERENCES.FINANCIAL_GOALS.ID;
  const financialGoalsTitle = createDiv() as HTMLDivElement;
  financialGoalsTitle.classList.add('fieldTitle');
  financialGoalsTitle.textContent = PREFERENCES.FINANCIAL_GOALS.LABEL;
  const financialGoalsTextBox = createTextarea(
    PREFERENCES.FINANCIAL_GOALS.PLACEHOLDER,
    PREFERENCES.FINANCIAL_GOALS.ROWS,
    PREFERENCES.FINANCIAL_GOALS.NAME
  ) as HTMLTextAreaElement;

  financialGoalsTextBox.value = state.form.financialGoals;
  financialGoalsTextBox.addEventListener('input', (event) => {
    state.form.financialGoals = (event.target as HTMLTextAreaElement).value;
  });

  financialGoalsDiv.append(financialGoalsTitle, financialGoalsTextBox);

  // risk acknowledgement div
  const riskAcknowledgementDiv = createDiv() as HTMLDivElement;
  riskAcknowledgementDiv.classList.add('fieldDiv');
  riskAcknowledgementDiv.id = PREFERENCES.RISK_ACKNOWLEDGEMENT.ID;
  const riskAcknowledgementTitle = createDiv() as HTMLDivElement;
  riskAcknowledgementTitle.classList.add('fieldTitle');
  riskAcknowledgementTitle.textContent = PREFERENCES.RISK_ACKNOWLEDGEMENT.LABEL;
  riskAcknowledgementTitle.append(createRequired());
  const riskAcknowledgementCheckbox = createRadioORCheckbox(
    PREFERENCES.RISK_ACKNOWLEDGEMENT.OPTIONS,
    PREFERENCES.RISK_ACKNOWLEDGEMENT.NAME,
    PREFERENCES.RISK_ACKNOWLEDGEMENT.TYPE,
    PREFERENCES.RISK_ACKNOWLEDGEMENT.CLASS,
    PREFERENCES.RISK_ACKNOWLEDGEMENT.HIDDEN
  ) as HTMLDivElement;

  const riskAckCheckbox = riskAcknowledgementCheckbox.querySelector(
    'input[type="checkbox"]'
  ) as HTMLInputElement;
  if (riskAckCheckbox) {
    riskAckCheckbox.checked = state.form.riskAcknowledgement;
  }
  riskAckCheckbox.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    state.form.riskAcknowledgement = target.checked;
    validatePart3AckCheckBox();
  });

  const termsAndConditions = createDiv() as HTMLDivElement;
  termsAndConditions.textContent = PREFERENCES.RISK_ACKNOWLEDGEMENT.TEXT_CONTENT;
  const tickAcknowledgement = createDiv() as HTMLDivElement;
  tickAcknowledgement.append(riskAcknowledgementCheckbox, riskAcknowledgementTitle);
  tickAcknowledgement.classList.add('alignPreferences');
  riskAcknowledgementDiv.append(tickAcknowledgement, termsAndConditions);
  // riskAcknowledgementDiv.classList.add('alignPreferences');

  preferencesDiv.append(
    automatedRebalancingDiv,
    taxSavingPreferenceDiv,
    financialGoalsDiv,
    riskAcknowledgementDiv
  );

  return preferencesDiv;
};

export { Preference };
