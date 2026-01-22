import {
  createDiv,
  createTable,
  createTableCell,
  createTableRow,
  createTableHeader,
} from './input';
import { TABLE } from './Form/constants';
import { loadFromStorage } from '../app.storage';
import { state } from '../app.state';

const TableWrapper = (): HTMLDivElement => {
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
    console.log(record);
    // console.log(TABLE.KEYS)
    TABLE.KEYS.forEach((key) => {
      console.log(key);
      console.log(typeof key);
      const tableCell = createTableCell() as HTMLTableCellElement;
      // const title = (header[0].toLowerCase() + header.slice(1)).replaceAll(' ', '');
      // console.log(title);
      if (key === 'assets') {
        tableCell.textContent = record[key].length.toString();
      }
      //   else {
      //       tableCell.textContent = (record as any)[key]
      //   }
      tableRow.appendChild(tableCell);
    });
    table.appendChild(tableRow);
  });

  tableWrapper.appendChild(table);

  return tableWrapper;
};

export { TableWrapper };
