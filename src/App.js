import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Sell from './pages/Sell/Sell';
import Buy from './pages/Buy/Buy';
import Make from './pages/Make/Make';
import Logistics from './pages/Logistics/Logistics';
import MandiPrices from './pages/MandiPrices/MandiPrices';
import NoPage from './pages/NoPage/NoPage';
import Blogs from './pages/Blogs/Blogs'
import WeatherForecasting from './pages/WeatherForecasting/WeatherForecasting'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sell" element={<Sell />} />
          <Route path="buy" element={<Buy />} />
          <Route path="make" element={<Make />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="mandiprices" element={<MandiPrices />} />
          <Route path="weatherforecasting" element={<WeatherForecasting />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
