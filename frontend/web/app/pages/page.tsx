import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        {/* Voltar */}
        <button className="mb-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome back! Glad to see you, Again!
        </h2>

        {/* Formulário */}
        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-gray-700"
            />
          </div>

          {/* Senha */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Esqueceu a senha */}
          <div className="text-right">
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Forgot Password?
            </a>
          </div>

          {/* Botão Login */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Login
          </button>

          {/* Login alternativo */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-sm text-gray-500">
              Or Login with
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
