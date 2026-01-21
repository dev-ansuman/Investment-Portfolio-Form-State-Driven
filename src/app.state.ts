import type { AppState } from './app.types';

const state: AppState = {
  records: [],
  form: {
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
    riskAcknowledgement: '',
  },
};

export { state };
