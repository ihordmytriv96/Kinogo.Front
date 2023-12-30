import React from 'react';
import Layout from './components/Layout';
import NavBar from './components/Navbar';
import MainPage from './routes/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
