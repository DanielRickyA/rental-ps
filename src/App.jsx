import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Rental from "./page/customer/Rental";
import Login from "./page/Login";

export default function App() {
  const helmetContext = {};
  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}
