import type { AppState, FormState } from './app.types';

const initialFormState: FormState = {
  portfolioName: '',
  portfolioType: '',
  investmentGoal: '',
  investmentHorizon: '',
  riskTolerance: '',

  annualInvestmentCapacity: '',
  currency: '',
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
};

export { state, initialFormState };
