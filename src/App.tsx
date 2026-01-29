import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table/TableWrapper';
import { INITIAL_FORM_DATA } from './constants/form-initial-state';
import { addSubmittedRecord, updateRecord } from './app.storage';

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

const App: React.FC = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingRecordId, setEditingRecordId] = useState<number | null>(null);

  const handleEdit = (record: Record) => {
    setFormData(record);
    setEditingRecordId(record.id);
  };

  const handleSubmit = () => {
    if (editingRecordId !== null) {
      updateRecord(editingRecordId, formData);
    } else {
      addSubmittedRecord(formData);
    }

    setFormData(INITIAL_FORM_DATA);
    setEditingRecordId(null);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="content">
        <Form formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
        <Table onEdit={handleEdit} />
      </div>
    </>
  );
};

export default App;
