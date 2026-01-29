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

export const saveFormData = (data: Record) => {
  localStorage.setItem('form_data', JSON.stringify(data));
};

export const getFormData = (initialValue: Record) => {
  try {
    const saved = localStorage.getItem('form_data');
    return saved ? JSON.parse(saved) : initialValue;
  } catch {
    return initialValue;
  }
};

export const saveCurrentStep = (step: number) => {
  localStorage.setItem('current_step', JSON.stringify(step));
};

export const getCurrentStep = (initialStep: number) => {
  try {
    const saved = localStorage.getItem('current_step');
    return saved ? JSON.parse(saved) : initialStep;
  } catch {
    return initialStep;
  }
};

export const saveCompletedSteps = (steps: number[]) => {
  localStorage.setItem('completed_steps', JSON.stringify(steps));
};

export const getCompletedSteps = () => {
  try {
    const saved = localStorage.getItem('completed_step');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const saveSubmittedRecords = (records: string) => {
  localStorage.setItem('submitted_records', records);
  window.dispatchEvent(new Event('records_updated'));
};

export const addSubmittedRecord = (record: Record) => {
  try {
    const saved = localStorage.getItem('submitted_records');
    const records = saved ? JSON.parse(saved) : [];
    const newRecord = {
      ...record,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    };
    records.push(newRecord);
    localStorage.setItem('submitted_records', JSON.stringify(records));
    window.dispatchEvent(new Event('records_updated'));
  } catch (error) {
    console.error('Error saving record:', error);
  }
};

export const getSubmittedRecords = () => {
  try {
    const saved = localStorage.getItem('submitted_records');
    const records = saved ? JSON.parse(saved) : [];
    return records;
  } catch (error) {
    console.error('Error getting records:', error);
  }
};

export const updateRecord = (id: number, updatedData: Record) => {
  try {
    const saved = localStorage.getItem('submitted_records');
    const records: Record[] = saved ? JSON.parse(saved) : [];

    const updateRecords = records.map((record) =>
      record.id === id ? { ...record, ...updatedData, id } : record
    );

    localStorage.setItem('submitted_records', JSON.stringify(updateRecords));

    window.dispatchEvent(new Event('records_updated'));
  } catch (error) {
    console.error('Error updating record', error);
  }
};

export const clearFormData = () => {
  localStorage.removeItem('form_data');
  localStorage.removeItem('current_step');
  localStorage.removeItem('completed_steps');
};
