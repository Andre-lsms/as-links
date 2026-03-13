import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LinksPage from "./LinksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinksPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
