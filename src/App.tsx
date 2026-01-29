import React from 'react';
import './App.css';
import Form from './components/Form/form';
import Table from './components/Table/table';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="content">
      <Form />
      <Table />
    </div>
    </>
  );
};

export default App;
