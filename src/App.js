import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';


function App() {
  const [user, setUser] = useState(null);
  const [sidebarShown, setSidebarShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "true") {
      setUser(userLoggedIn);
    }
    else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      { user &&
        (
          <>
            <Header setSidebarShown={setSidebarShown} />
            <Sidebar sidebarShown={sidebarShown} setSidebarShown={setSidebarShown} />
            <main>
              <Outlet />
            </main>
            <Footer />
          </>
        )
      }

    </>
  );
}

export default App;
