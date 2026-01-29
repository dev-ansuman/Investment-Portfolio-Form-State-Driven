import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table/TableWrapper';

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="content">
        <Form />
        <Table />
      </div>
    </>
  );
};

export default App;
