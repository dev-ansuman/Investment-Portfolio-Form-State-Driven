import type { Record } from '../types/Record';

const saveFormData = (data: Record) => {
  localStorage.setItem('form_data', JSON.stringify(data));
};

const saveSubmittedRecords = (records: string) => {
  localStorage.setItem('submitted_records', records);
  window.dispatchEvent(new Event('records_updated'));
};

const addSubmittedRecord = (record: Record) => {
  try {
    const saved = localStorage.getItem('submitted_records');
    const records = saved ? JSON.parse(saved) : [];
    const newRecord = {
      ...record,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    };
    records.push(newRecord);
    localStorage.setItem('submitted_records', JSON.stringify(records));
    window.dispatchEvent(new Event('records_updated'));
  } catch (error) {
    console.error('Error saving record:', error);
  }
};

const getSubmittedRecords = () => {
  try {
    const saved = localStorage.getItem('submitted_records');
    const records = saved ? JSON.parse(saved) : [];
    return records;
  } catch (error) {
    console.error('Error getting records:', error);
  }
};

export { saveFormData, saveSubmittedRecords, addSubmittedRecord, getSubmittedRecords };
