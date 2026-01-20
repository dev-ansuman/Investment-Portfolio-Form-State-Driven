const INVESTMENT_DETAILS = {
  PORTFOLIO_NAME: {
    LABEL: 'Portfolio Name',
    PLACEHOLDER: 'Enter Portfolio Name',
    ID: 'portfolioName',
    NAME: 'portfolioName',
  },
  PORTFOLIO_TYPE: {
    LABEL: 'Portfolio Type',
    OPTIONS: ['Income', 'Growth', 'Value', 'Speculative', 'Aggressive'],
    NAME: 'portfolioType',
    TYPE: 'radio',
  },
  INVESTMENT_GOAL: {
    LABEL: 'Investment Goal',
    OPTIONS: [
      'Income Generation',
      'Capital Preservation',
      'Tax Saving',
      'Diversification',
      'Beating Inflation',
      'Risk Management',
      'Capital Appreciation',
    ],
    NAME: 'investmentGoal',
  },
  INVESTMENT_HORIZON: {
    LABEL: 'Investment Horizon',
    OPTIONS: [
      'Short-Term Investment Horizon',
      'Medium-Term Investment Horizon',
      'Long-Term Investment Horizon',
    ],
    NAME: 'investmentHorizon',
  },
  RISK_TOLERANCE: {
    LABEL: 'Risk Tolerance',
    OPTIONS: ['Aggressive', 'Moderate', 'Considerate', 'Flexible', 'Adjustable'],
    NAME: 'riskTolerance',
    TYPE: 'radio',
  },
};

const ASSET_ALLOCATION = {
  ANNUAL_INVESTMENT_CAPACITY: {
    LABEL: 'Annual Investment Capacity',
    PLACEHOLDER: 'Enter a amount, greater than 1',
    NAME: 'annualInvestmentCapacity',
  },
  CURRENCY: {
    OPTIONS: ['₹', '$'],
    NAME: 'curreny',
  },
  LUMP_SUM_AMOUNT: {
    LABEL: 'Lump Sum Amount',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    NAME: 'lumpSumAmount',
  },
  MONTHLY_CONTRIBUTION: {
    LABEL: 'Monthly Contribution',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    NAME: 'monthlyContribution',
  },
  ASSETS: {
    TITLE: 'Assets',
  },
  ASSET_CLASS: {
    LABEL: 'Asset Class',
    OPTIONS: ['Stock', 'Bond', 'Cash', 'Real Estate', 'Forex'],
    NAME: 'assetClass',
  },
  PERCENTAGE_ALLOCATION: {
    LABEL: 'Percentage Allocation(%)',
    TYPE: 'number',
    NAME: 'percentageAllocation',
  },
  SPECIFIC_FUND: {
    LABEL: 'Specific Fund',
    NAME: 'specificFund',
  },
  CURRENT_VALUE: {
    LABEL: 'Current Value',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    NAME: 'currentValue',
  },
  ADD_ASSET: {
    LABEL: 'Add Asset',
  },
  INVESTMENT_STYLE: {
    LABEL: 'Investment Style',
    OPTIONS: ['Large-Cap', 'Mid-Cap', 'Small-Cap'],
    NAME: 'investmentStyle',
    TYPE: 'checkbox',
  },
};

export { INVESTMENT_DETAILS, ASSET_ALLOCATION };
