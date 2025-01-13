import { useEffect, useState } from "react";
import { onRegister } from "../authSlice";
import { useRegisterMutation } from "../services";
import { useDispatch } from "react-redux";
import { RegisterProps } from "../types";

export const useRegisterHandler = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<{
    fullName: string;
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    if (credentials) {
      const handleRegister = async () => {
        try {
          const result = await register(credentials).unwrap();
          console.log("Login successful:", result);
          dispatch(onRegister(result));
        } catch (err) {
          console.error("Login failed:", err);
        }
      };

      handleRegister();
    }
  }, [credentials, register, dispatch]);

  const handleRegister = ({email, password, fullName}: RegisterProps) => {
    console.log(email);
    setCredentials({ email, password, fullName });
  };

  return { handleRegister };
};
