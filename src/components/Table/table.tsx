import React, { useEffect, useState } from 'react';
import { getSubmittedRecords } from '../../storage/app.storage';
import { deleteRecord } from '../../services/tableActions';
import TableActions from './TableActions';
import type { Record } from '../../types/Record';
import { useApp } from '../../app-context/use-app';

const Table: React.FC = () => {
  const { state, dispatch, setModalConfig } = useApp();
  const { editingRecordId } = state;

  const [records, setRecords] = useState<Record[]>([]);
  const [selectedRecordId, setSelectedRecordId] = useState<number | null>(null);

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
    setSelectedRecordId((prev) => (prev === id ? null : id));
  };

  const handleClearForm = () => {
    window.dispatchEvent(new Event('form_clear_requested'));
    setSelectedRecordId(null);
  };

  const handleDelete = () => {
    if (selectedRecordId === null) {
      setModalConfig({
        title: 'No Record Selected',
        message: 'Please select a record to delete.',
        type: 'alert',
      });
      return;
    }

    setModalConfig({
      title: 'Delete Record',
      message: 'Are you sure you want to delete this record?',
      type: 'confirm',
      onConfirm: (confirmed) => {
        if (!confirmed) return;

        deleteRecord(records, selectedRecordId);
        setSelectedRecordId(null);
        window.dispatchEvent(new Event('records_updated'));
      },
    });
  };

  const handleEditForm = () => {
    if (selectedRecordId === null) {
      // setModalConfig({
      //   title: 'No selection',
      //   message: 'Please select a record to edit.',
      //   type: 'alert',
      // });
      return;
    }

    const recordToEdit = records.find((r) => r.id === selectedRecordId);
    if (recordToEdit) {
      dispatch({ type: 'START_EDIT', payload: recordToEdit });

      // setModalConfig({
      //   title: 'Edit Mode',
      //   message: 'You can now update the selected record.',
      //   type: 'alert',
      // });
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
            {records.map((record) => {
              const isSelected = selectedRecordId === record.id;
              const isEditing = editingRecordId === record.id;

              return (
                <tr
                  key={record.id}
                  onClick={() => handleRowClick(record.id)}
                  className={isEditing ? 'editing' : isSelected ? 'selected' : ''}
                >
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
