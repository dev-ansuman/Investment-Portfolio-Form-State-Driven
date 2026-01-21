interface Asset {
  assetClass: string;
  percentageAllocation: string;
  specificFund: string;
  currentValue: string;
}

interface PortfolioFormRecords {
  id: string;

  portfolioName: string;
  portfolioType: string;
  investmentGoal: string;
  investmentHorizon: string;
  riskTolerance: string;

  annualInvestmentCapacity: string;
  currency: string;
  lumpSumAmount: string;
  monthlyContribution: string;
  assets: Asset[];
  investmentStyle: string[];

  automatedRebalancing: string;
  taxSavingPrefernce: string;
  financialGoals: string;
  riskAcknowledgement: string;

  createdAt: string;
}

interface FormState {
  portfolioName: string;
  portfolioType: string;
  investmentGoal: string;
  investmentHorizon: string;
  riskTolerance: string;

  annualInvestmentCapacity: string;
  currency: string;
  lumpSumAmount: string;
  monthlyContribution: string;
  assets: Asset[];
  investmentStyle: string[];

  automatedRebalancing: string;
  taxSavingPrefernce: string;
  financialGoals: string;
  riskAcknowledgement: string;
}

interface AppState {
  records: PortfolioFormRecords[];
  form: FormState;
}

export type { Asset, PortfolioFormRecords, FormState, AppState };
