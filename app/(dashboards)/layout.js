import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"


export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}