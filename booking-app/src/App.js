import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

const MainPage = lazy(() => import("./pages/MainPage/MainPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage.jsx"));
const HotelsPage = lazy(() => import("./pages/HotelsPage/HotelsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
