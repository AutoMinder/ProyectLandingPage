import classes from './App.module.scss';


import Header2 from './components/Header_page/Header_page';
import Footer from './components/Footer/Footer';

import Welcome from './components/Welcome/Welcome';
import Aboutus from './components/Aboutus/Aboutus';
import User_profile from './components/User_profile/User_profile';
import Maps from './components/Maps/Maps';
import Feed_v2 from './views/FeedView/FeedView';
import NotFoundView_v2 from './views/NotFoundView_v2/NotFoundView_v2';
import AuthView from './views/AuthView/AuthView';
import AdminView from './views/AdminView/AdminView';
import ContactUs from './components/ContactUs/ContactUs';
import ContactUs2 from './components/ContactUs2/ContactUs';
import { useUserConext } from './contexts/UserContext';


import {Routes, Route, Navigate, useNavigate} from "react-router-dom";



function App() {

  const {user} = useUserConext();
  const navigate = useNavigate();

  return (
    <div className={classes["App"]}>

      <Header2/>


      <main>

        <Routes>

          <Route index element={<Welcome/>}/>
          <Route path="aboutus" element={<Aboutus/>}/>
          <Route path="privacy" element={<ContactUs/>}/>
          <Route path="terms" element={<ContactUs2/>}/>
          <Route path="user_profile" element={<User_profile/>}/>
          <Route path="feed" element={<Feed_v2/>}/>
          <Route path="maps" element={<Maps/>}/>
          <Route path="*" element={<NotFoundView_v2/>}/>

          <Route path="admin/*" element={ user && user.roles == "admin" ? (<AdminView/>) : (<Navigate to = "/"/>)} />


          <Route path="auth/*" element={ <AuthView/> }/>


        </Routes>
      </main>

     
      <Footer/>

    </div>
  )
}

export default App
