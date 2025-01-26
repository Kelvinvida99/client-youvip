import { useEffect, useState } from "react";
import { onRegister } from "../authSlice";
import { useRegisterMutation } from "../services";
import { useDispatch } from "react-redux";
import { CredentialsState, RegisterProps } from "../types";



export const useRegisterHandler = () => {
  const [register] = useRegisterMutation();

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<CredentialsState>(null);

  useEffect(() => {
    if (credentials) {
      const handleRegister = async () => {
        try {
          if ('email' in credentials && 'password' in credentials && 'fullName' in credentials) {
            const result = await register(credentials).unwrap();
            console.log("Login successful:", result);
            dispatch(onRegister(result));
          }
        } catch (error) {
          setCredentials({ error })
        }
      };

      handleRegister();
    }
  }, [credentials, register, dispatch]);

  const handleRegister = ({ email, password, fullName }: RegisterProps) => {
    setCredentials({ email, password, fullName });
  };

  return { handleRegister, credentials };
};
