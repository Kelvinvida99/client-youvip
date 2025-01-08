import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage } from "../movies"

export const MovieRoutes = () => {
  return (
    <Routes>
        <Route path="movie" element={ <MoviePage /> } />
        <Route path='/*' element={ <Navigate to="/movie" /> } />
    </Routes>
  )
}