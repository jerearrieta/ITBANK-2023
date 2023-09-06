import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

import './App.css';

function App() {
  const [sidebarShown, setSidebarShown] = useState(false);

  return (
    <>
      <Header setSidebarShown={setSidebarShown} />
      <Sidebar sidebarShown={sidebarShown} setSidebarShown={setSidebarShown} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
