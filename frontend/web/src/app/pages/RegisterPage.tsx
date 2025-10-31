"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await register(formData);
    } catch (err) {
      setError("Falha no registro. Tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if(e.target.name === "cpf") value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
    setFormData({ ...formData, [e.target.name]: value });
  };

  useEffect(() => {
    setError("");
  }, [formData]);

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
        <h1>Registro</h1>
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
              type="text"
              name="name"
              value={formData.name}
              placeholder="Nome"
              onChange={handleChange}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              placeholder="CPF"
              onChange={handleChange}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Senha"
              onChange={handleChange}
              style={{ width: "100%", marginTop: "5px" }}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ width: "100%" }}>
            Registrar
          </button>
        </form>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Já tem conta? <Link to="/login">Faça login</Link>
        </p>
      </div>
    </div>
  );
}
