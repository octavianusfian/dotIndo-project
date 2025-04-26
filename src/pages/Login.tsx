import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/hooks";
import FormInput from "@/components/Form/FormInput";
import ButtonCustom from "@/components/ui-custom/ButtonCustom";
import toast from "react-hot-toast";
import { User } from "@/types";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user: User) => user.email === email && user.password === password
    );

    if (foundUser) {
      dispatch(login(foundUser));
      toast.success("Berhasil Login");
      navigate("/"); // setelah login redirect ke home
    } else {
      toast.error("Email atau password salah");
    }
  };

  return (
    <section className="flex justify-center w-full p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow p-6 rounded"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>

        <FormInput
          label="Email"
          id="email"
          type="email"
          value={email}
          placeholder="Masukkan Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ButtonCustom type="submit" className="w-full mt-4">
          Login
        </ButtonCustom>

        <p className="mt-4 text-center text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
