"use client";

import { useAuth } from "../contexts/AuthContext";

export function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Perfil</h1>
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Nome:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>CPF:</strong> {user?.cpf}
        </p>
        <p>
          <strong>Conta:</strong> {user?.accountNumber}
        </p>
        {/* Formulário de edição de perfil será implementado aqui */}
      </div>
    </div>
  );
}
