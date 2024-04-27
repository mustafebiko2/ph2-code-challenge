// App.js

import React, { useState } from 'react';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';
import TransactionForm from './Components/TransactionForm';
import TransactionTable from './Components/TransactionTable';
import './Components/Style.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchInput searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
