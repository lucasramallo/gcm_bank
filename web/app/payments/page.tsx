'use client';

import { useState } from 'react';
import { simulatePayment } from '../lib/api';
import Button from '../components/Button';

export default function Payments() {
  const [billId, setBillId] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    console.log('Simulando pagamento de conta ID:', billId, 'valor:', amount);
    const response = await simulatePayment(billId, amount);
    setMessage(response.message);
    console.log('Resposta da API simulada:', response);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Sistema de Pagamento de Contas</h1>
      <input
        type="text"
        value={billId}
        onChange={(e) => setBillId(e.target.value)}
        placeholder="ID da conta"
        className="border p-2 mb-2"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
        className="border p-2 mb-2"
      />
      <Button onClick={handlePayment}>Pagar</Button>
      <p>{message}</p>
    </div>
  );
}