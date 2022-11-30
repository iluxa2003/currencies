import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import UkrBank from "./pages/UkrBank";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<UkrBank />} />
          {/* <Route path="" element={<MainPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
