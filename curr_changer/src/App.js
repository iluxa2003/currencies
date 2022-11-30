import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UkrBank from "./pages/UkrBank";
import CryptoPage from "./pages/CryptoPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/UkrBank" element={<UkrBank />} />
          <Route path="/Crypto" element={<CryptoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
