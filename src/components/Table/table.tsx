import React, { useEffect, useState } from 'react';
import { getSubmittedRecords } from '../../storage/app.storage';
import { deleteRecord } from '../../services/tableActions';
import TableActions from './TableActions';
import type { Record } from '../../types/Record';
import { useApp } from '../../app-context/app-context';

const Table: React.FC = () => {
  const { state, dispatch } = useApp();
  const { editingRecordId } = state;

  const [records, setRecords] = useState<Record[]>([]);
  const [selectedRecordId, setSelectedRecordId] = useState<number | null>(null);

  useEffect(() => {
    if (editingRecordId !== null) {
      setSelectedRecordId(editingRecordId);
    }
  }, [editingRecordId]);


  useEffect(() => {
    const loadRecords = () => {
      setRecords(getSubmittedRecords());
    };

    loadRecords();

    window.addEventListener('records_updated', loadRecords);

    return () => {
      window.removeEventListener('records_updated', loadRecords);
    };
  }, []);

  const handleRowClick = (id: number) => {
    setSelectedRecordId(prev => (prev === id ? null : id));
  };



  const handleClearForm = () => {
    window.dispatchEvent(new Event('form_clear_requested'));
  };

  const handleDelete = () => {
    if (selectedRecordId === null) {
      alert('Please select a record to delete!');
      return;
    }

    deleteRecord(records, selectedRecordId);
    setSelectedRecordId(null);
    window.dispatchEvent(new Event('records_updated'));
  };

  const handleEditForm = () => {
    if (selectedRecordId === null) {
      alert('Please select a record to edit!');
      return;
    }

    const recordToEdit = records.find((r) => r.id === selectedRecordId);
    if (recordToEdit) {
      dispatch({ type: 'START_EDIT', payload: recordToEdit });
    }
  };

  useEffect(() => {
    const clearSelection = () => {
      setSelectedRecordId(null);
    };

    window.addEventListener('edit_completed', clearSelection);

    return () => {
      window.removeEventListener('edit_completed', clearSelection);
    };
  }, []);


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
                <tr key={record.id} onClick={() => handleRowClick(record.id)} className={selectedRecordId === record.id ? 'selected' : ''}>
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

export default Table;