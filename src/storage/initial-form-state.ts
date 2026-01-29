const INITIAL_FORM_DATA = {
  id: -1,

  portfolioName: '',
  portfolioType: '',
  investmentGoal: '',
  investmentHorizon: '',
  riskTolerance: '',

  currency: '',
  annualInvestmentCapacity: '',
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
  investmentStyle: '',

  automatedRebalancing: '',
  taxSavingPreference: '',
  financialGoals: '',
  riskAcknowledgement: false,
};

const INITIAL_STEP = 1;

export { INITIAL_FORM_DATA, INITIAL_STEP };
