import type { AppState } from './types/AppState';
import type { FormState } from './types/FormState';
import { StateManager } from './core/state-manager';

const initialFormState: FormState = {
  portfolioName: '',
  portfolioType: '',
  investmentGoal: '',
  investmentHorizon: '',
  riskTolerance: '',

  annualInvestmentCapacity: '',
  currency: 'INR',
  lumpSumAmount: '',
  monthlyContribution: '',
  assets: [
    {
      assetClass: '',
      percentageAllocation: '',
      specificFund: '',
      currentValue: '',
    },
  ],
  investmentStyle: [],

  automatedRebalancing: '',
  taxSavingPrefernce: '',
  financialGoals: '',
  riskAcknowledgement: false,
};

const initialState: AppState = {
  currentStep: 1,
  completedSteps: [],
  selectedRecordId: null,
  editingRecordId: null,
  records: [],
  form: {
    ...initialFormState,
  },
  theme: 'light',
};

const stateManager = new StateManager(initialState);

export { stateManager, initialFormState };
