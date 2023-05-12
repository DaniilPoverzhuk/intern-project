import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Time from "./pages/Time";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { setTimeRx } from "./redux/slices/TimeSlice";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);

  useEffect(() => {
    navigate("/activity");

    const timeout = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor(time - hours * 3600 - minutes * 60);

    dispatch(setTimeRx({ hours, minutes, seconds }));
  }, [time]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="activity" element={<Home />} />
          <Route path="map" element={<MapPage />} />
          <Route path="time" element={<Time />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
