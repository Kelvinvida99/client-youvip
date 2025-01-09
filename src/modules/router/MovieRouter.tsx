import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage } from "../movies"
import { useEffect } from "react";
import { useLoginMutation } from "../auth/services";

export const MovieRoutes = () => {

    // Obtén la función de login desde el hook
    const [login] = useLoginMutation();
  
    // Realiza la mutación cuando sea necesario
    const handleLogin = async () => {
      try {
        const result = await login({ email: "example@email.com", password: "Kelvin123" }).unwrap();
        console.log("Login successful:", result);
      } catch (err) {
        console.error("Login failed:", err);
      }
    };
  
    useEffect(() => {
      handleLogin();
    }, [])

  return (
    <Routes>
        <Route path="movie" element={ <MoviePage /> } />
        <Route path='/*' element={ <Navigate to="/movie" /> } />
    </Routes>
  )
}