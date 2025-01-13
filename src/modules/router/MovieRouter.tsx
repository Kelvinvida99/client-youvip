import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage, SalaMoviePage } from "../movies"

export const MovieRoutes = () => {

  return (
    <Routes>
        <Route path="movie" element={ <MoviePage /> } />
        <Route path="/movie/sala" element={<SalaMoviePage />} />
        <Route path='/*' element={ <Navigate to="/movie" /> } />
    </Routes>
  )
}