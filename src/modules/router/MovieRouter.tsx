import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage, MovieTheaterPage } from "../movies"

export const MovieRoutes = () => {

  return (
    <Routes>
        <Route path="movie" element={ <MoviePage /> } />
        <Route path="/movie/theater" element={<MovieTheaterPage />} />
        <Route path='/*' element={ <Navigate to="/movie" /> } />
    </Routes>
  )
}