import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import stocks from './data';
import NavBar from './components/nav';
import HomePage from './pages/Home/Index';
import AboutPage from './pages/About';
import StockPage from './pages/Stock';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/stocks/:symbol' element={<StockPage />}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
