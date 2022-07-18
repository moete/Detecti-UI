import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Otp from './pages/Otp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Login />} />
        <Route path='/otp' element={<Otp />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
