import { saveSubmittedRecords } from '../app.storage';

interface Asset {
  assetClass: string;
  percentageAllocation: string;
  specificFund: string;
  currentValue: string;
}

interface Record {
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

export const deleteRecord = (records: Record[], recordID: number) => {
  const updatedRecords = records.filter((record) => record.id !== recordID);
  saveSubmittedRecords(JSON.stringify(updatedRecords));
};
