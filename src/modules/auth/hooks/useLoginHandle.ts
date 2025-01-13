import { useEffect, useState } from "react";
import { onLogin } from "../authSlice";
import { useLoginMutation } from "../services";
import { useDispatch } from "react-redux";

export const useLoginHandler = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    if (credentials) {
      const handleLogin = async () => {
        try {
          const result = await login(credentials).unwrap();
          console.log("Login successful:", result);
          dispatch(onLogin(result));
        } catch (err) {
          console.error("Login failed:", err);
        }
      };

      handleLogin();
    }
  }, [credentials, login, dispatch]);

  const handleLogin = (email: string, password: string) => {
    console.log(email);
    setCredentials({ email, password });
  };

  return { handleLogin };
};
