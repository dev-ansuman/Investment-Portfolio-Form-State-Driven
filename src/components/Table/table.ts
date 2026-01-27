import { createTable, createTableRow, createTableHeader, createTableCell } from '../Ui/table';
import { createDiv } from '../Ui/div';
import { createButton } from '../Ui/button';
import { TABLE } from '../../constants/form-constants';
import { loadFromStorage, saveToStorage } from '../../app.storage';
import { stateManager } from '../../app.state';
import { StateManager } from '../../core/state-manager';
import { renderApp } from '../App';
import { resetForm } from '../Form/navigation-buttons';
import type { PortfolioFormRecords } from '../../types/PortfolioFormRecords';
import { showModal } from '../modal';

class TableComponent {
  private stateManager: StateManager;

  constructor(stateManager: StateManager) {
    this.stateManager = stateManager;
  }

  render(): HTMLDivElement {
    const tableContainer = createDiv() as HTMLDivElement;
    tableContainer.className = 'tableContainer';

    // Action buttons
    const actionButtonContainer = createDiv() as HTMLDivElement;
    actionButtonContainer.className = 'tableActionButtons';

    const editButton = createButton() as HTMLButtonElement;
    editButton.textContent = 'Edit';
    editButton.className = 'tableActionButton editActionButton';
    editButton.disabled = !this.stateManager.getSelectedRecordId();

    const deleteButton = createButton() as HTMLButtonElement;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'tableActionButton deleteActionButton';
    deleteButton.disabled = !this.stateManager.getSelectedRecordId();

    const resetFormButton = createButton() as HTMLButtonElement;
    resetFormButton.textContent = 'Clear Form';
    resetFormButton.className = 'tableActionButton clearFormActionButton';

    editButton.addEventListener('click', () => {
      if (this.stateManager.getSelectedRecordId()) {
        const record = this.stateManager
          .getRecords()
          .find((r: PortfolioFormRecords) => r.id === this.stateManager.getSelectedRecordId());
        if (record) {
          const { ...formData } = record;
          this.stateManager.resetForm(formData);
          this.stateManager.setEditingRecordId(record.id);
          this.stateManager.setCurrentStep(1);
          this.stateManager.resetCompletedSteps();
          saveToStorage();
          renderApp();
        }
      }
    });

    deleteButton.addEventListener('click', () => {
      if (this.stateManager.getSelectedRecordId()) {
        const confirmDelete = (confirmation: boolean): void => {
          if (confirmation) {
            this.stateManager.deleteRecord(this.stateManager.getSelectedRecordId()!);
          }
          this.stateManager.setSelectedRecordId(null);
          saveToStorage();
          renderApp();
        };
        showModal(
          'Delete Record',
          'Are you sure you want to delete this record? This action cannot be undone.',
          'confirm',
          confirmDelete
        );
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

    this.stateManager.getRecords().forEach((record: PortfolioFormRecords) => {
      const tableRow = createTableRow() as HTMLTableRowElement;

      if (this.stateManager.getSelectedRecordId() === record.id) {
        tableRow.classList.add('selected');
      }

      if (this.stateManager.getEditingRecordId() === record.id) {
        tableRow.classList.add('editing');
      }

      tableRow.addEventListener('click', () => {
        if (this.stateManager.getSelectedRecordId() === record.id) {
          this.stateManager.setSelectedRecordId(null);
        } else {
          this.stateManager.setSelectedRecordId(null);
        }
        saveToStorage();
        renderApp();
      });

      tableRow.style.cursor = 'pointer';
      TABLE.KEYS.forEach((key) => {
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
  }
}

const tableComponent = new TableComponent(stateManager);

const TableContainer = (): HTMLDivElement => {
  return tableComponent.render();
};

export { TableContainer };
