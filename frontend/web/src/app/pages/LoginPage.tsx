"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
    } catch (err) {
      setError("Falha no login. Verifique suas credenciais.");
    }
  };

  useEffect(() => {
    setError("");
  }, [email, password]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            margin: "30px 0px",
          }}
        >
          <div>
            <input
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          <button type="submit" style={{ width: "100%" }}>
            Entrar
          </button>
        </form>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Não tem conta? <Link to="/register">Registre-se</Link>
        </p>
      </div>
    </div>
  );
}
