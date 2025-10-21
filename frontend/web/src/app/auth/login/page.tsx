"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { loginService, LoginResponse } from "@/app/services/loginService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response: LoginResponse = await loginService(email, password);

      if (response.success) {
        console.log("Login bem-sucedido!", response.message, response.token);
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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white border border-gray-200 shadow-sm">
        <CardHeader className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Login to your account
          </h1>
          <p className="text-gray-500 text-sm">
            Enter your email below to login to your account
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-600">
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
              <label htmlFor="password" className="text-sm text-gray-600">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot your password?
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
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Login"}
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
          >
            Login with Google
          </Button>
          <p className="text-sm text-gray-500 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="hover:underline text-gray-900">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
