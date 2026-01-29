import React from 'react';
import Form from './components/Form/form';
import Table from './components/Table/table';
import Navbar from './components/Navbar';
import './App.css';

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
