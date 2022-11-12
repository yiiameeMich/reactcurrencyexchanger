import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import CurrencySelectForm from "./components/CurrencySelectForm/CurrencySelectForm";


function App() {
  return (
    <div className="App">
        <Header />
        <CurrencySelectForm />
    </div>
  );
}

export default App;
