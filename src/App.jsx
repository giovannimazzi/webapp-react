import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/movies/MovieListPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SITE ROUTES*/}
        <Route index Component={HomePage} />

        {/* MOVIE ROUTES*/}
        <Route path="/movies">
          <Route index Component={MovieListPage} />
          <Route path="/:id" Component={MovieDetailPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
