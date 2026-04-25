import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
const Layout = () => {
 return (
  <div className="app-container">
   <Sidebar />
   <main className="main-content">
    <Outlet />
   </main>
   <Widgets />
  </div>
 );
};
export default Layout;
