"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const { data, status } = useSession()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn("credentials", {
        redirect: "/dashboard",
        username,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1>Inicia sesión</h1>
      <form id="" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Nombre de Usuario</b>
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          name="username"
          required
          onChange={handleUsername}
        ></input>
        <label htmlFor="passwd">
          <b>Contraseña</b>
        </label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          name="passwd"
          required
          onChange={handlePassword}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
