import { Outlet } from 'react-router-dom';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from "./views/Home";

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div class="sidebar-and-main">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
