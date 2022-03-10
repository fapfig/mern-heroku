import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import External from "./External";
import Home from "./Home";
import Local from "./Local";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/local">
                Local API
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/external">
                External API
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="local" element={<Local />} />
        <Route path="external" element={<External />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
