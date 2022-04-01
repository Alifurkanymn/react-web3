import './App.scss';
import Home from './components/Home';
import Token from './components/Token';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
        </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
