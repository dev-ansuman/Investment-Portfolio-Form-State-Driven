const createTable = (): HTMLTableElement => {
  const newTable = document.createElement('table') as HTMLTableElement;
  return newTable;
};

const createTableRow = (): HTMLTableRowElement => {
  const newTableRow = document.createElement('tr') as HTMLTableRowElement;
  return newTableRow;
};

const createTableHeader = (): HTMLTableCellElement => {
  const newTableHeader = document.createElement('th') as HTMLTableCellElement;
  return newTableHeader;
};

const createTableCell = (): HTMLTableCellElement => {
  const newTableCell = document.createElement('td') as HTMLTableCellElement;
  return newTableCell;
};

export { createTable, createTableRow, createTableHeader, createTableCell };
