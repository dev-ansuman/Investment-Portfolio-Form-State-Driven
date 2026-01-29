import React, { useEffect, useState } from 'react';
import { getSubmittedRecords } from '../../app.storage';
import { deleteRecord } from '../../services/tableActions';
import TableActions from './TableActions';
import {
  getCurrentStep,
  getFormData,
  getCompletedSteps,
  clearFormData,
  saveFormData,
  saveCurrentStep,
  saveCompletedSteps,
} from '../../app.storage';
import { INITIAL_STEP, INITIAL_FORM_DATA } from '../../constants/form-initial-state';

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

const TableWrapper: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [selectedRecordId, setSelectedRecordId] = useState<number | null>(null);

  const [currentStep, setCurrentStep] = useState(() => getCurrentStep(INITIAL_STEP));
  const [formData, setFormData] = useState(() => getFormData(INITIAL_FORM_DATA));
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => getCompletedSteps());

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  useEffect(() => {
    saveCurrentStep(currentStep);
  }, [currentStep]);

  useEffect(() => {
    saveCompletedSteps(completedSteps);
  }, [completedSteps]);

  useEffect(() => {
    const loadRecords = () => {
      setRecords(getSubmittedRecords());
    };

    loadRecords();

    window.addEventListener('records_updated', loadRecords);
    window.addEventListener('storage', loadRecords);

    return () => {
      window.removeEventListener('records_updated', loadRecords);
      window.removeEventListener('storage', loadRecords);
    };
  }, []);

  const handleRowClick = (id: number) => {
    setSelectedRecordId(id);
  };

  const handleDelete = () => {
    if (selectedRecordId === null) {
      alert('Please select a record to delete!');
      return;
    }

    deleteRecord(records, selectedRecordId);
    setSelectedRecordId(null);
  };

  const handleClearForm = () => {
    console.log('clear form');
    clearForm();
  };

  const clearForm = () => {
    clearFormData();
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(INITIAL_STEP);
    setCompletedSteps([]);
  };

  const handleEditForm = () => {
    console.log('Edit form');
  };

  return (
    <div className="tableContainer">
      <TableActions
        clearFormAction={handleClearForm}
        editFormAction={handleEditForm}
        deleteAction={handleDelete}
        disabled={selectedRecordId === null}
      />
      <div className="tableWrapper">
        <table id="formTable">
          <thead>
            <tr>
              <th>Portfolio Name</th>
              <th>Portfolio Type</th>
              <th>Investment Goal</th>
              <th>Investment Horizon</th>
              <th>Risk Tolerance</th>
              <th>Annual Investment</th>
              <th>Assets</th>
              <th>Automated Rebalancing</th>
            </tr>
          </thead>

          <tbody id="tableBody">
            {records.map((record: Record) => {
              return (
                <tr key={record.id} onClick={() => handleRowClick(record.id)}>
                  <td>{record.portfolioName}</td>
                  <td>{record.portfolioType}</td>
                  <td>{record.investmentGoal}</td>
                  <td>{record.investmentHorizon}</td>
                  <td>{record.riskTolerance}</td>
                  <td>{record.annualInvestmentCapacity}</td>
                  <td>{record.assets.length}</td>
                  <td>{record.automatedRebalancing}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWrapper;
