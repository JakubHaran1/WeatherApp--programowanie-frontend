import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavPage from "./pages/FavPage";

// import fav
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
