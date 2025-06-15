import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout-body">
        <Header />
        <main className="main-content">{/* Main content goes here */}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
