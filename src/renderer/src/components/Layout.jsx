import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from '../pages/Home'

const Layout = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="md:flex md:min-h-screem ">
          <Sidebar />
          <main className="p-10 flex-1">
            <Outlet />
            <Home></Home>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
