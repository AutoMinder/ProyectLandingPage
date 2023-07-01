import React from "react";
import {NavbarWrapper} from "./HeaderWrapper.module.jsx";
import { useNavigate } from 'react-router-dom';

import { useUserConext } from '../../../contexts/UserContext';




function Navbar({open}) {

  const navigate = useNavigate();
  const {logout, user, close} = useUserConext();

  return (

    

    <NavbarWrapper open={open}>
      
      {
        !user || user.roles.toString() == 'user'?

        <>
        <a href="#"  onClick = { () => { navigate("/")}}> Mi perfil</a>
        <a href="#" onClick = { () => { navigate("/")}} >Acerca de la aplicación </a>
        <a href="#" onClick = { () => { navigate("/aboutus")}} > Conoce sobre los desarrolladores</a>
        <a href="#"  onClick = { () => { navigate("/user_profile")}}> Mi perfil</a>
        <a href="#"  onClick = { () => { navigate("/maps")}}> Guia de usuario</a>
        

        </>:

        user.roles.toString() == 'sys_admin'?
        <>

           
        <a href="#" onClick = { () => navigate("/")} >Acerca de la aplicación </a>
        <a href="#" onClick = { () => navigate("/aboutus")} > Conoce sobre los desarrolladores</a>
        <a href="#"  onClick = { () => { navigate("/maps")}}> Guia de usuario</a>
        <a href="#"  onClick = { () => { navigate("/user_profile")}}> Mi perfil</a>
        <a href="#"  onClick = { () => { navigate("/privacy")}}>  Privacy Policy </a>
        <a href="#"  onClick = { () => { navigate("/terms")}}> Términos y condiciones</a>
        <a href="#"  onClick = { () => { navigate("/feed2")}}> Administrar usuarios</a>


        </>:

        
        user.roles.toString() == 'admin'?
        <>
          
        <a href="#" onClick = { () => navigate("/")} >Acerca de la aplicación </a>
        <a href="#" onClick = { () => navigate("/aboutus")} > Conoce sobre los desarrolladores</a>
        <a href="#"  onClick = { () => { navigate("/maps")}}> Guia de usuario</a>
        <a href="#"  onClick = { () => { navigate("/user_profile")}}> Mi perfil</a>
        <a href="#"  onClick = { () => { navigate("/privacy")}}>  Privacy Policy </a>
        <a href="#"  onClick = { () => { navigate("/terms")}}> Términos y condiciones</a>
        <a href="#"  onClick = { () => { navigate("/feed")}}> Administrar carros</a>

        </>:

        <>
        <a href="#"  onClick = { () => { navigate("/")}}> Mi perfil</a>
        <a href="#" onClick = { () => { navigate("/")}} >Acerca de la aplicación </a>
        <a href="#" onClick = { () => { navigate("/aboutus")}} > Conoce sobre los desarrolladores</a>
        <a href="#"  onClick = { () => { navigate("/user_profile")}}> Mi perfil</a>
        <a href="#"  onClick = { () => { navigate("/maps")}}> Guia de usuario</a>
        </>
      
      }


      {
        !user ?
        <>
        
        
        <a href="#" onClick = { () => navigate("/auth/signin")} > Sign in</a>
        <a href="#" onClick = { () => navigate("/auth/signup")} > Sign up</a>
        </>
        
        
        :

        <>
        <a href="#" onClick = { () => { logout(); navigate("/")}}> Log out</a>
        </>
      }
     
    
      

    </NavbarWrapper>
  );
}

export default Navbar;