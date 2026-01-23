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
  riskAcknowledgement: boolean;

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
  riskAcknowledgement: boolean;
}

interface AppState {
  currentStep: number;
  completedSteps: number[];
  selectedRecordId: string | null;
  editingRecordId: string | null;
  records: PortfolioFormRecords[];
  form: FormState;
}

export type { Asset, PortfolioFormRecords, FormState, AppState };
