import React from 'react';
import Button from '../Ui/default/Button';
import { TABLE_ACTION } from '../../constants/table-constants/table-action';

interface TableActionsProps {
  clearFormAction: () => void;
  editFormAction: () => void;
  deleteAction: () => void;
  disabled: boolean;
}

const TableActions: React.FC<TableActionsProps> = ({
  clearFormAction,
  editFormAction,
  deleteAction,
  disabled,
}) => {
  return (
    <div className="tableActionButtons">
      <Button
        text={TABLE_ACTION.CLEAR_FORM.TEXT}
        buttonClass={`${TABLE_ACTION.CLEAR_FORM.CLASS[0]} ${TABLE_ACTION.CLEAR_FORM.CLASS[1]}`}
        id={TABLE_ACTION.CLEAR_FORM.ID}
        action={clearFormAction}
        disabled={false}
      />
      <Button
        text={TABLE_ACTION.EDIT.TEXT}
        buttonClass={`${TABLE_ACTION.EDIT.CLASS[0]} ${TABLE_ACTION.EDIT.CLASS[1]}`}
        id={TABLE_ACTION.EDIT.ID}
        action={editFormAction}
        disabled={disabled}
      />
      <Button
        text={TABLE_ACTION.DELETE.TEXT}
        buttonClass={`${TABLE_ACTION.DELETE.CLASS[0]} ${TABLE_ACTION.DELETE.CLASS[1]}`}
        id={TABLE_ACTION.DELETE.ID}
        action={deleteAction}
        disabled={disabled}
      />
    </div>
  );
};

export default TableActions;
