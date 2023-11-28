import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <LeftSidebar />

      <section className='flex flex-1 h-full'>
        {/* Outlet show the Home page */}
        <Outlet />
      </section>

      {/* Botton Bar */}
      <Bottombar />
    </div>
  )
}

export default RootLayout
