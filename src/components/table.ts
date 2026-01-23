import {
  createDiv,
  createTable,
  createTableCell,
  createTableRow,
  createTableHeader,
  createButton,
} from './create-input';
import { TABLE } from './Form/constants';
import { loadFromStorage, saveToStorage } from '../app.storage';
import { state } from '../app.state';
import { renderApp } from './App';
import { resetForm } from './Form/navigation-buttons';

const TableContainer = (): HTMLDivElement => {
  const tableContainer = createDiv() as HTMLDivElement;
  tableContainer.className = 'tableContainer';

  // Action buttons
  const actionButtonContainer = createDiv() as HTMLDivElement;
  actionButtonContainer.className = 'tableActionButtons';

  const editButton = createButton() as HTMLButtonElement;
  editButton.textContent = 'Edit';
  editButton.className = 'tableActionButton editActionButton';
  editButton.disabled = !state.selectedRecordId;

  const deleteButton = createButton() as HTMLButtonElement;
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'tableActionButton deleteActionButton';
  deleteButton.disabled = !state.selectedRecordId;

  const resetFormButton = createButton() as HTMLButtonElement;
  resetFormButton.textContent = 'Clear Form';
  resetFormButton.className = 'tableActionButton clearFormActionButton';
  // resetFormButton.disabled = !state.selectedRecordId;

  editButton.addEventListener('click', () => {
    if (state.selectedRecordId) {
      const record = state.records.find((r) => r.id === state.selectedRecordId);
      if (record) {
        const { ...formData } = record;
        state.form = { ...formData };
        state.editingRecordId = record.id;
        state.currentStep = 1;
        state.completedSteps = [];
        // state.selectedRecordId = null;
        saveToStorage();
        renderApp();
      }
    }
  });

  deleteButton.addEventListener('click', () => {
    if (state.selectedRecordId) {
      if (confirm('Are you sure you want to delete this record ?')) {
        state.records = state.records.filter((r) => r.id !== state.selectedRecordId);
        state.selectedRecordId = null;
        saveToStorage();
        renderApp();
      }
    }
  });

  resetFormButton.addEventListener('click', () => {
    resetForm();
  });

  actionButtonContainer.append(resetFormButton, editButton, deleteButton);

  // Table
  const tableWrapper = createDiv() as HTMLDivElement;
  tableWrapper.className = 'tableWrapper';
  const table = createTable() as HTMLTableElement;

  const tableHeader = createTableRow() as HTMLTableRowElement;
  TABLE.HEADERS.forEach((header) => {
    const tableHeaderCell = createTableHeader() as HTMLTableCellElement;
    tableHeaderCell.textContent = header;
    tableHeader.appendChild(tableHeaderCell);
  });

  table.append(tableHeader);

  loadFromStorage();
  console.log(state.records);

  state.records.forEach((record) => {
    const tableRow = createTableRow() as HTMLTableRowElement;

    if (state.selectedRecordId === record.id) {
      tableRow.classList.add('selected');
    }

    if (state.editingRecordId === record.id) {
      tableRow.classList.add('editing');
    }

    tableRow.addEventListener('click', () => {
      if (state.selectedRecordId === record.id) {
        state.selectedRecordId = null;
      } else {
        state.selectedRecordId = record.id;
      }
      saveToStorage();
      renderApp();
    });

    tableRow.style.cursor = 'pointer';
    // console.log(record);
    // console.log(TABLE.KEYS)
    TABLE.KEYS.forEach((key) => {
      console.log(key);
      console.log(typeof key);
      const tableCell = createTableCell() as HTMLTableCellElement;
      if (key === 'assets') {
        tableCell.textContent = record[key].length.toString();
      } else {
        tableCell.textContent = String(record[key as keyof typeof record]);
      }
      tableRow.appendChild(tableCell);
    });
    table.appendChild(tableRow);
  });

  tableWrapper.appendChild(table);
  tableContainer.append(actionButtonContainer, tableWrapper);

  return tableContainer;
};

export { TableContainer };
