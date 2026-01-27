const INVESTMENT_DETAILS = {
  PORTFOLIO_NAME: {
    LABEL: 'Portfolio Name',
    PLACEHOLDER: 'Enter Portfolio Name',
    ID: 'portfolioName',
    NAME: 'portfolioName',
    TYPE: 'text',
  },
  PORTFOLIO_TYPE: {
    LABEL: 'Portfolio Type',
    OPTIONS: ['-- Select --', 'Income', 'Growth', 'Value', 'Speculative', 'Aggressive'],
    VALUES: ['Income', 'Growth', 'Value', 'Speculative', 'Aggressive'],
    ID: 'portfolioType',
    NAME: 'portfolioType',
    TYPE: 'radio',
    HIDDEN: true,
    CLASS: 'radioCheckboxText',
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
    VALUES: [
      'Income Generation',
      'Capital Preservation',
      'Tax Saving',
      'Diversification',
      'Beating Inflation',
      'Risk Management',
      'Capital Appreciation',
    ],
    ID: 'investmentGoal',
    NAME: 'investmentGoal',
  },
  INVESTMENT_HORIZON: {
    LABEL: 'Investment Horizon',
    OPTIONS: [
      'Short-Term Investment Horizon',
      'Medium-Term Investment Horizon',
      'Long-Term Investment Horizon',
    ],
    VALUES: [
      'Short-Term Investment Horizon',
      'Medium-Term Investment Horizon',
      'Long-Term Investment Horizon',
    ],
    ID: 'investmentHorizon',
    NAME: 'investmentHorizon',
  },
  RISK_TOLERANCE: {
    LABEL: 'Risk Tolerance',
    OPTIONS: ['Aggressive', 'Moderate', 'Considerate', 'Flexible', 'Adjustable'],
    ID: 'riskTolerance',
    NAME: 'riskTolerance',
    TYPE: 'radio',
    HIDDEN: true,
    CLASS: 'radioCheckboxText',
  },
};

const ASSET_ALLOCATION = {
  ANNUAL_INVESTMENT_CAPACITY: {
    LABEL: 'Annual Investment Capacity',
    PLACEHOLDER: 'Enter a amount, greater than 1',
    ID: 'annualInvestmentCapacity',
    NAME: 'annualInvestmentCapacity',
  },
  CURRENCY: {
    OPTIONS: ['₹', '$'],
    ID: 'curreny',
    VALUE: ['INR', 'Dollar'],
    NAME: 'curreny',
  },
  LUMP_SUM_AMOUNT: {
    LABEL: 'Lump Sum Amount',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    ID: 'lumpSumAmount',
    NAME: 'lumpSumAmount',
  },
  MONTHLY_CONTRIBUTION: {
    LABEL: 'Monthly Contribution',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    ID: 'monthlyContribution',
    NAME: 'monthlyContribution',
  },
  ASSETS: {
    TITLE: 'Assets',
  },
  ASSET_CLASS: {
    LABEL: 'Asset Class',
    OPTIONS: ['Stock', 'Bond', 'Cash', 'Real Estate', 'Forex'],
    VALUES: ['Equity', 'Fixed Income', 'Cash Equivalent', 'REITs', 'Foreign Exchange'],
    ID: 'assetClass',
    NAME: 'assetClass',
  },
  PERCENTAGE_ALLOCATION: {
    LABEL: 'Percentage Allocation(%)',
    TYPE: 'number',
    ID: 'percentageAllocation',
    NAME: 'percentageAllocation',
  },
  SPECIFIC_FUND: {
    LABEL: 'Specific Fund',
    ID: 'specificFund',
    NAME: 'specificFund',
  },
  CURRENT_VALUE: {
    LABEL: 'Current Value',
    PLACEHOLDER: 'INR',
    TYPE: 'number',
    ID: 'currentValue',
    NAME: 'currentValue',
  },
  ADD_ASSET: {
    LABEL: 'Add Asset +',
  },
  INVESTMENT_STYLE: {
    LABEL: 'Investment Style',
    OPTIONS: ['Large', 'Medium', 'Small'],
    ID: 'investmentStyle',
    NAME: 'investmentStyle',
    TYPE: 'checkbox',
    HIDDEN: true,
    CLASS: 'radioCheckboxText',
  },
};

const PREFERENCES = {
  AUTOMATED_REBALANCING: {
    LABEL: 'Opt for Automated Rebalancing?',
    OPTIONS: ['Yes', 'No'],
    ID: 'automatedRebalancing',
    NAME: 'automatedRebalancing',
    TYPE: 'radio',
    HIDDEN: true,
    CLASS: 'radioCheckboxText',
  },
  TAX_SAVING_PREF: {
    LABEL: 'Tax Saving Preference',
    OPTIONS: ['Yes', 'No'],
    ID: 'taxSavingPreference',
    NAME: 'taxSavingPreference',
    TYPE: 'radio',
    HIDDEN: true,
    CLASS: 'radioCheckboxText',
  },
  FINANCIAL_GOALS: {
    LABEL: 'Future Finalcial Goals',
    PLACEHOLDER: 'Describe Briefly',
    ID: 'financialGoal',
    NAME: 'financialGoal',
    ROWS: 12,
  },
  RISK_ACKNOWLEDGEMENT: {
    LABEL: 'Risk Acknowledgement',
    OPTIONS: [''],
    ID: 'riskAcknowledgement',
    NAME: 'riskAcknowledgement',
    TYPE: 'checkbox',
    TEXT_CONTENT:
      'All investments are subject to market risks. Please read all scheme-related documents carefully before investing.',
    HIDDEN: false,
    CLASS: '',
  },
};

const TABLE = {
  HEADERS: [
    'Portfolio Name',
    'Portfolio Type',
    'Investment Goal',
    'Investment Horizon',
    'Risk Tolerance',
    'Annual Investment',
    'Assets',
    'Automated Rebalancing',
  ],
  KEYS: [
    'portfolioName',
    'portfolioType',
    'investmentGoal',
    'investmentHorizon',
    'riskTolerance',
    'annualInvestmentCapacity',
    'assets',
    'automatedRebalancing',
  ],
};

export { INVESTMENT_DETAILS, ASSET_ALLOCATION, PREFERENCES, TABLE };
