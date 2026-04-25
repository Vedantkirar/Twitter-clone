import { Link } from 'react-router-dom';
const Sidebar = () => {
 return (
  <div className="sidebar">
   <h1 className="logo">Twitter</h1>
   <nav>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/explore" className="nav-link">Explore</Link>
    <Link to="/notifications" className="nav-link">Notifications</Link>
    <Link to="/messages" className="nav-link">Messages</Link>
    <Link to="/bookmarks" className="nav-link">Bookmarks</Link>
    <Link to="/profile" className="nav-link">Profile</Link>
   </nav>
   <button className="tweet-btn-large">Tweet</button>
  </div>
 );
};
export default Sidebar;
