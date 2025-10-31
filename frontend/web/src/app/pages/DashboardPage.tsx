"use client";

import { useAuth } from "../contexts/AuthContext";

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ marginTop: "20px" }}>
        <h2>Bem-vindo, {user?.name}!</h2>
        <p>Conta: {user?.accountNumber}</p>
        <p>Saldo: R$ {user?.balance?.toFixed(2)}</p>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h3>Resumo da Conta</h3>
        {/* Conteúdo do dashboard será implementado aqui */}
      </div>
    </div>
  );
}
