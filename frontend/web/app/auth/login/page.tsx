'use client';

import { useState } from 'react';
import { simulateLogin } from '../../lib/api';
import Button from '../../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    console.log('Simulando login com email:', email);
    const response = await simulateLogin(email, password);
    setMessage(response.message);
    console.log('Resposta da API simulada:', response);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Login (Autenticação)</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        className="border p-2 mb-2"
      />
      <Button onClick={handleLogin}>Login</Button>
      <p>{message}</p>
    </div>
  );
}