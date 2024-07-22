import React from 'react';
import Header from './component/defaultLayout/Header/Header';
import './App.css';
import Sidebar from './component/defaultLayout/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
};

export default App;