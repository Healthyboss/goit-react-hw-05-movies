import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./Cast"));
const MovieDetails = lazy(() => ("./MovieDetails"));
const Reviews = lazy(() => ("./Reviews"));

const App = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  </Suspense>
  );
}

export default App;
