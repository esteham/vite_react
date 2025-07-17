import React, {
  createContext,
  /*useContext,*/ useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage)
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  function login(email, password) {
    // In a real app, you would call an API here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password") {
          const user = { email };
          localStorage.setItem("user", JSON.stringify(user));
          setCurrentUser(user);
          resolve();
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  }

  function register(email, password) {
    // In a real app, you would call an API here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = { email };
          localStorage.setItem("user", JSON.stringify(user));
          setCurrentUser(user);
          resolve();
        } else {
          reject(new Error("Registration failed"));
        }
      }, 1000);
    });
  }

  function logout() {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/login");
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// export function useAuth() {
//   return useContext(AuthContext);
// }
