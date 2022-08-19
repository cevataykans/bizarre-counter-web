import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './css/Hypnotic.css'

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <div className="App">
            <Router>
                {/* prettier-ignore */}
                <Routes>
                    <Route path="/count-together-web" element={<LandingPage />} />
                    <Route path="/*" element={<label>404 Not found</label>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
