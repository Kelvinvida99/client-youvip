import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes, MovieRoutes } from "../modules/router";
import { useSelector } from "react-redux";
import { RootState } from "./store";


export const AppRouter = () => {

  const {authStatus} = useSelector((state: RootState) => state.userLogin)

  return (
    <Routes>
      {authStatus === "not-authenticated" && (
        <>
          <Route path="/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="auth/login" />} />
        </>
      )}
      {authStatus === "authenticated" && (
        <>
          <Route path="/*" element={<MovieRoutes />} />
          <Route path="/*" element={<Navigate to="movie" />} />
        </>
      )}
    </Routes>
  );
};

