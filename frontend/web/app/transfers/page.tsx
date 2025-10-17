'use client';

import { useState } from 'react';
import { simulateTransfer } from '../lib/api';
import Button from '../components/Button';

export default function Transfers() {
  const [amount, setAmount] = useState(0);
  const [toAccount, setToAccount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = async () => {
    console.log('Simulando transferência para conta:', toAccount, 'valor:', amount);
    const response = await simulateTransfer(amount, toAccount);
    setMessage(response.message);
    console.log('Resposta da API simulada:', response);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Sistema de Transferências</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
        className="border p-2 mb-2"
      />
      <input
        type="text"
        value={toAccount}
        onChange={(e) => setToAccount(e.target.value)}
        placeholder="Conta destino"
        className="border p-2 mb-2"
      />
      <Button onClick={handleTransfer}>Transferir</Button>
      <p>{message}</p>
    </div>
  );
}