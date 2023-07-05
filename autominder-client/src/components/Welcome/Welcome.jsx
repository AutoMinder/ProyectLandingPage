import classes from './Welcome.module.scss'

import welcomeIm1 from '../../assets/img/welcomeImg1.png';
import welcomeIm2 from '../../assets/img/20618.jpg';
import welcomeIm3 from '../../assets/img/MEC3.png';
import welcomeIm4 from '../../assets/img/carseervice.png';
import Button2 from '../Button/Button';


const Welcome = () => { 


    return(
        <div className={classes['Welcome']}>
            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>Simplifica el mantenimiento de tu carro con nuestra aplicación intuitiva y práctica. ¡Mantén tu vehículo en perfecto estado con solo unos toques!</h3>
                        
                    <p>
                    Acceder a información importante del vehículo mediante la lectura de la computadora de
                    viaje por medio del puerto OBD.
                    </p>

                    <Button2 className={classes['Button']}>
                        <a href="https://play.google.com/store/apps/details?id=com.autominder.autominder&hl=es_PY">Descargar ahora</a>
                    </Button2>
                </div>
                        
        
                
            </div>

            <div className={classes['section']}>

                 <figure>
                    <img className={classes['fluid']} src={welcomeIm2} alt="Access" />
                </figure>

                <div className={classes['centered-quote']}>
                    
                    <h3>Una cuenta, todos los beneficios.</h3>
                        
                    <p>Con una cuenta en nuestra aplicación de mantenimiento de carros, 
                        obtendrás todos los beneficios que necesitas para cuidar tu vehículo 
                        de manera eficiente. Desde programar recordatorios de mantenimiento 
                        hasta recibir alertas de tipo recordatorio, sigue el historial de servicios, 
                        nuestra aplicación centraliza todas 
                        las herramientas esenciales para que mantengas tu carro en excelentes 
                        condiciones, todo en un solo lugar.
                    </p>

                </div>
                        

                
            </div>

            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>Desde cualquier dispositivo Android.</h3>
                        
                    <p>
                    Disfruta de la comodidad y la flexibilidad de nuestra aplicación de mantenimiento de carros, disponible para dispositivos Android. 
                    Accede a todas las funciones y herramientas que necesitas para cuidar tu vehículo, estés donde estés y en cualquier momento.
                    </p>
                </div>
                        
                <figure>
                    <img className={classes['fluid']} src={welcomeIm3} alt="Access" />
                </figure>
                
            </div>

            <div className={classes['section']}>

                <figure>
                    <img className={classes['fluid']} src={welcomeIm4} alt="Access" />
                </figure>

                <div className={classes['centered-quote']}>
                    
                    <h3>Conoce tu carro mejor que nadie.</h3>
                        
                    <p>
                    Establecer períodos de mantenimiento recomendados para diversos componentes de los
                    automóviles pertenecientes a cada usuario.
                    </p>
                </div>
                        
                
            </div>

            <div className={classes['section2']}>

                <div className={classes['centered-quote']}>
                    
                    <h3>Pulsa este botón para acceder a nuestra documentación de API completa y obtener toda la información necesaria para integrar con nuestra aplicación.</h3>
                        
                    <p>
                    ¡Te esperamos allí para facilitar tu experiencia y sacar el máximo provecho de nuestra aplicación!
                    </p>

                    <Button2 className={classes['Button']}>
                        <a href="https://ferapi.tech">Acceder la documentación</a>
                    </Button2>
                </div>

                <div className={classes['centered-quote']}>
                    
                    <h3>Haz clic en este botón para acceder a nuestros repositorios de aplicación, donde encontrarás el código fuente, las actualizaciones más recientes y podrás colaborar con nosotros.</h3>
                        
                    <p>
                    ¡Te invitamos a unirte a nuestra comunidad de desarrolladores y ser parte del futuro de nuestra aplicación!
                    </p>

                    <Button2 className={classes['Button']}>
                        <a href="https://github.com/AutoMinder">Acceder a los repositorios</a>
                    </Button2>
                </div>
                        
    
                
            </div>

        </div>
    );
}

export default Welcome