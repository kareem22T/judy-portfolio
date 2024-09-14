import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import Home from './pages/home/home';
import "./css/fonts.css"
import "./css/main.css"
import "./css/reponsive.css"
import Portfolio from './pages/portfolio/portfolio';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
