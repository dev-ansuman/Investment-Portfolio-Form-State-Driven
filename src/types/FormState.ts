import type { Asset } from './Asset';

export interface FormState {
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
