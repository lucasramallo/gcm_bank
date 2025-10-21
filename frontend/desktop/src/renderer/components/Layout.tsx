"use client";

import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", background: "#006a9c", padding: "20px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ textDecoration: "underline", textDecorationColor: "#000" }}>GCM Bank</h2>
        <nav style={{ marginTop: "40px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: isActive("/dashboard") ? "#000" : "#000",
                  fontWeight: isActive("/dashboard") ? "bold" : "normal",
                }}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/transfers"
                style={{
                  textDecoration: "none",
                  color: isActive("/transfers") ? "#000" : "#000",
                  fontWeight: isActive("/transfers") ? "bold" : "normal",
                }}
              >
                Transferências
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/payments"
                style={{
                  textDecoration: "none",
                  color: isActive("/payments") ? "#000" : "#000",
                  fontWeight: isActive("/payments") ? "bold" : "normal",
                }}
              >
                Pagamentos
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/notifications"
                style={{
                  textDecoration: "none",
                  color: isActive("/notifications") ? "#000" : "#000",
                  fontWeight: isActive("/notifications") ? "bold" : "normal",
                }}
              >
                Notificações
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: isActive("/profile") ? "#000" : "#000",
                  fontWeight: isActive("/profile") ? "bold" : "normal",
                }}
              >
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ paddingTop: "40px", display: "flex", flex: 1, flexDirection: "column", gap: 30, justifySelf: "flex-end", justifyContent: "flex-end" }}>
          <p>Usuário: {user?.name}</p>
          <button onClick={logout}>Sair</button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px", overflow: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
}
