import type { Asset } from './Asset';

export interface Record {
  id: number;

  portfolioName: string;
  portfolioType: string;
  investmentGoal: string;
  investmentHorizon: string;
  riskTolerance: string;

  currency: string;
  annualInvestmentCapacity: string;
  lumpSumAmount: string;
  monthlyContribution: string;
  assets: Asset[];
  investmentStyle: string;

  automatedRebalancing: string;
  taxSavingPreference: string;
  financialGoals: string;
  riskAcknowledgement: boolean;
}
