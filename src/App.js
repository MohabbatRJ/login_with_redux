
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Login from './component/Login';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
