"use client";
import React, { useState } from "react";
import StarWarsList from "./StarWarsList";

export default function FakeLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const validCred = {
    username: "user1",
    password: "passw0rd",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validCred.username && password === validCred.password) {
      setLogin(true);
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <form onSubmit={handleLogin}>
          <label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              name="username"
              id="username"
            />
          </label>

          <label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              name="password"
              id="password"
            />
          </label>

          <button type="submit">Login</button>
        </form>
      )}
      {isLoggedIn && <StarWarsList isLoggedIn={isLoggedIn} />}
    </>
  );
}
