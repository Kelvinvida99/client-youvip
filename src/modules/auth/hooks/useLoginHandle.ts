import { useEffect, useState } from "react";
import { onLogin } from "../authSlice";
import { useLoginMutation } from "../services";
import { useDispatch } from "react-redux";
import { CredentialsLogin } from "../types";

export const useLoginHandler = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<CredentialsLogin>(null);

  useEffect(() => {
    if (credentials) {
      const handleLogin = async () => {
        try {
          if ("email" in credentials && "password" in credentials) {
            const result = await login(credentials).unwrap();
            console.log("Login successful:", result);
            dispatch(onLogin(result));
          }
        } catch (error) {
          setCredentials({error})
        }
      };

      handleLogin();
    }
  }, [credentials, login, dispatch]);

  const handleLogin = (email: string, password: string) => {
    console.log(email);
    setCredentials({ email, password });
  };

  return { handleLogin, credentials };
};
