// TransactionForm.js

import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-form-container">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;

