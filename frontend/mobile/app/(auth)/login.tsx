import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { loginService, LoginResponse } from "../services/loginService";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      const response: LoginResponse = await loginService(email, password);

      if (response.success) {
        console.log("Login bem-sucedido!", response.message, response.token);
        router.push("/");
      } else {
        Alert.alert("Erro", response.message);
      }
    } catch (err) {
      Alert.alert("Erro", "Erro inesperado ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.subtitle}>
        Enter your email below to login to your account
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="m@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      {loading && <Text style={styles.loading}>Carregando...</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} disabled>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text style={styles.signupLink} onPress={() => router.push("/signup")}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  loading: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  googleButtonText: {
    color: "#333",
    fontSize: 16,
  },
  signupText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  signupLink: {
    color: "#000",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
