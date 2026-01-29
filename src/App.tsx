import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/form';
import Table from './components/Table/Table';
import { INITIAL_FORM_DATA } from './storage/initial-form-state';
import { addSubmittedRecord, updateRecord } from './storage/app.storage';
import type { Record } from './types/Record';

const App: React.FC = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingRecordId, setEditingRecordId] = useState<number | null>(null);

  const handleEdit = (record: Record) => {
    setFormData(record);
    setEditingRecordId(record.id);
  };

  const handleSubmit = () => {
    if (editingRecordId !== null) {
      updateRecord(editingRecordId, formData);
    } else {
      addSubmittedRecord(formData);
    }

    setFormData(INITIAL_FORM_DATA);
    setEditingRecordId(null);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="content">
        <Form formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
        <Table onEdit={handleEdit} />
      </div>
    </>
  );
};

export default App;
