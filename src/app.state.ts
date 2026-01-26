import type { AppState } from './types/AppState';
import type { FormState } from './types/FormState';
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

const state: AppState = {
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

export { state, initialFormState };
