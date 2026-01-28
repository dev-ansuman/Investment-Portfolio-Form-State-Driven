const INITIAL_FORM_DATA = {
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
  riskAcknowledgement: '',
};

const INITIAL_STEP = 1;

export { INITIAL_FORM_DATA, INITIAL_STEP };
