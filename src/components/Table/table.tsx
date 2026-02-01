import React, { useEffect, useState } from 'react';
import TableActions from './TableActions';
import { useAppStore } from '../../store/use-app-store';

const Table: React.FC = () => {
  const records = useAppStore((state) => state.records);
  const openAddForm = useAppStore((state) => state.openAddForm);
  const openEditForm = useAppStore((state) => state.openEditForm);
  const deleteRecord = useAppStore((state) => state.deleteRecord);
  const showSnackbar = useAppStore((state) => state.showSnackbar);

  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);

  const handleRowClick = (id: string) => {
    setSelectedRecordId((prev) => (prev === id ? null : id));
  };

  const handleDelete = () => {
    if (!selectedRecordId) return;
    const confirmed = window.confirm('Are you sure you want to delete this record?');

    if (!confirmed) return;

    deleteRecord(selectedRecordId);
    setSelectedRecordId(null);
    showSnackbar('Portfolio deleted successfully', 'success');
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

  const handleAddForm = () => {
    openAddForm();
    setSelectedRecordId(null);
  };

  const handleEditform = () => {
    if (!selectedRecordId) return;

    const recordToEdit = records.find((r) => r.id === selectedRecordId);
    if (recordToEdit) openEditForm(recordToEdit);
  };

  return (
    <div className="tableContainer">
      <TableActions
        clearFormAction={handleAddForm}
        editFormAction={handleEditform}
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
              const isEditing = false;

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
