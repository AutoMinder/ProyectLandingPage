import classes from './User_profile.module.scss';
import { UserContextProvider, useUserConext } from '../../contexts/UserContext';

import userImg from '../../assets/img/userprofile.png';


const User_profile = () => { 

    const {user} = useUserConext();

    console.log(user);
    
    return(
        <div className={classes['Welcome']}>
            <div className={classes['section']}>
                <div className={classes['centered-quote']}>

                    <div>

                    { !user ? 

                        <>
                            <h2>No autorizado </h2>
                            <p>Realiza "Sign In para visualizar información de tu cuenta" </p>
                        </>:
                        <> 
                        <h3>Mi perfil</h3>
                        <div>
                            <h2>Nombre usuario</h2>
                            <p>  {user.username}</p>
                        </div>  
                        <div>
                            <h2>Correo</h2>
                            <p> {user.email}  </p>
                        </div> 

                        <div>
                            <h2>Tipo de usuario dentro del sistema</h2>
                            <p> Usuario tipo: "{user.roles}" </p>
                        </div>
                    
                        </>


                    }
                    </div>

                </div> 


            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                            <figure className={classes['fluid']}>
                                <img src={userImg} alt="user" />
                            </figure>

                            

                        </div>
                    </div>

                </div> 
                
                </div>
            </div>


        </div>                    
    );
    
}


export default User_profile