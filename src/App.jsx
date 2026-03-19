import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/movies/MovieListPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import DefaultTemplate from "./templates/DefaultTemplate";
import MovieCreatePAge from "./pages/movies/MovieCreatePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          {/* SITE ROUTES*/}
          <Route index Component={HomePage} />

          {/* MOVIE ROUTES*/}
          <Route path="movies">
            <Route index Component={MovieListPage} />
            <Route path=":id" Component={MovieDetailPage} />
            <Route path="create" Component={MovieCreatePAge} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
