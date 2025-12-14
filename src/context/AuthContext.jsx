import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext(null);

// Hook for consuming context
export const useAuth = () => useContext(AuthContext);

// Dummy function simulating server-side signup/login
const fakeAuthAPI = {
  signIn: ({ email, password }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          resolve({ id: 1, name: "John Doe", email, role: "user" });
        } else {
          reject("Invalid email or password");
        }
      }, 1000);
    }),
  signUp: ({ name, email, password }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 2, name, email, role: "user" });
      }, 1000);
    }),
  signOut: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 500);
    }),
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage if exists
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Save user to localStorage on change
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const signIn = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const loggedUser = await fakeAuthAPI.signIn(credentials);
      setUser(loggedUser);
      setLoading(false);
      return loggedUser;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const signUp = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await fakeAuthAPI.signUp(data);
      setUser(newUser);
      setLoading(false);
      return newUser;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    setLoading(true);
    await fakeAuthAPI.signOut();
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
