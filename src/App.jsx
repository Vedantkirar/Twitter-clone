import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './components/Feed';
import './App.css';
const Profile = () => <div><h2>Profile</h2><p>This is a mock profile page.</p></div>;
function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<Feed />} />
     <Route path="profile" element={<Profile />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
}
export default App;
