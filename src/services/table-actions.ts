import { saveSubmittedRecords } from '../storage/app.storage';
import type { Record } from '../types/Record';

const deleteRecord = (records: Record[], recordID: number) => {
  const updatedRecords = records.filter((record) => record.id !== recordID);
  saveSubmittedRecords(JSON.stringify(updatedRecords));
};

const editRecord = (records: Record[], newRecord: Record, recordID: number) => {
  const updatedRecords = records.map((record) =>
    record.id === recordID ? { ...record, ...newRecord } : record
  );
  saveSubmittedRecords(JSON.stringify(updatedRecords));
};

export { deleteRecord, editRecord };
