"use client";


import { LoginResponse, loginService } from "@/app/services/loginService";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"caixa" | "bb">("caixa");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try {
      const response: LoginResponse = await loginService(email, password, role);


      if (response.success) {
        console.log("Login bem-sucedido!", response.message, response.token, role);
        router.push("/");
      } else {
        setError(response.message || "Erro ao fazer login");
      }
    } catch (err) {
      setError("Erro inesperado ao fazer login");
    } finally {
      setLoading(false);
    }
  };


  const backgroundClass =
    role === "caixa" ? "bg-blue-600" : "bg-yellow-400";
  const cardClass =
    role === "caixa"
      ? "bg-white border-blue-200 shadow-blue-100"
      : "bg-white border-yellow-200 shadow-yellow-100";
  const buttonSelectedClass =
    role === "caixa"
      ? "bg-blue-600 text-white border-blue-700"
      : "bg-yellow-400 text-black border-yellow-500";


  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${backgroundClass}`}
    >
      <Card className={`w-full max-w-md border shadow-sm transition-all ${cardClass}`}>
        <CardHeader className="text-center">
          <h1
            className={`text-xl font-semibold ${
              role === "caixa" ? "text-blue-700" : "text-yellow-600"
            }`}
          >
            Login ao seu sistema
          </h1>
          <p className="text-gray-600 text-sm">
            Escolha o banco e entre na sua conta
          </p>
        </CardHeader>


        <CardContent className="space-y-4">
          <div className="flex justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={() => setRole("caixa")}
              className={`px-4 py-2 border rounded-md transition-all ${
                role === "caixa"
                  ? buttonSelectedClass
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Caixa
            </button>
            <button
              type="button"
              onClick={() => setRole("bb")}
              className={`px-4 py-2 border rounded-md transition-all ${
                role === "bb"
                  ? buttonSelectedClass
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Banco do Brasil
            </button>
          </div>


          {/* Campos de login */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
              required
            />
          </div>


          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm text-gray-700">
                Senha
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-gray-500 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
              required
            />
          </div>


          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </CardContent>


        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className={`w-full text-white hover:opacity-90 ${
              role === "caixa" ? "bg-blue-700" : "bg-yellow-500 text-black"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Login"}
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
          >
            Login com Google
          </Button>
          <p className="text-sm text-gray-600 text-center">
            Não tem uma conta?{" "}
            <Link href="/signup" className="hover:underline text-gray-900">
              Cadastre-se
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
