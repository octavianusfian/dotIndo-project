import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dummyUsers } from "../../dummyUsers";
import ButtonCustom from "@/components/ui-custom/ButtonCustom";
import FormInput from "@/components/Form/FormInput";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userExists = dummyUsers.some((user) => user.email === email);

    if (userExists) {
      toast.error("Email sudah terdaftar");
      return;
    }
    const newUser = {
      email,
      password,
      name,
      id: Math.floor(Math.random() * 1000000),
    };
    // Simpan user baru ke localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <section className="flex items-center justify-center w-full p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow p-6 rounded"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>

        <FormInput
          label="Nama"
          id="name"
          type="name"
          value={name}
          placeholder="Masukkan Nama"
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          value={password}
          placeholder="Masukkan Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ButtonCustom
          type="submit"
          className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </ButtonCustom>

        <p className="mt-4 text-center text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
