import './app.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/general/menu';
import React from 'react';
import { publicRoutes } from './routes/routes';
import Footer from './components/general/footer';

document.body.style.overflow = '';

function App() {
  return (
    <div className="m-auto font-inter text-black bg-white relative h-[100%]">
      <Menu />
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <div className="box-border min-h-[100%] pb-[80px]"></div>
      <div className="h-[80px] mt-[-80px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
