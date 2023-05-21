import classes from './Aboutus.module.scss'
import Fer from '../../assets/img/fotoFer.png';
import Alejandro from '../../assets/img/fotoAlejandro.png';
import Melvin from '../../assets/img/M.png';
import Rene from '../../assets/img/R.png';

const Welcome = () => { 
    return(
        <div className={classes['Aboutus']}>
            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>Conoce un poco sobre nuestro grupo</h3>
                        

                </div>
                
            </div>

            <div className={classes['section']}>

                <div className={classes['left-quote']}>
                    
                    
                    <h3> ¿Qué es </h3>
                    <h3>  Autominder? </h3>

                </div>  
                <div className={classes['centered-quote']}>     
                    <p>
                        Autominder es una herramienta completa y fácil de usar para la gestión efectiva del
                        mantenimiento de vehículos de transporte personal, que permita a los usuarios
                        programar recordatorios para los mantenimientos, llevar un registro detallado de los
                        servicios realizados y opcionalmente acceder a información importante del carro mediante
                        el puerto OBD. <br></br> <br></br>Con el interés de mejorar la seguridad, confiabilidad y eficiencia de los
                        automotores, reduciendo a su vez los costos asociados a la conservación óptima en el
                        largo plazo.
                    </p>
                </div>      

                
                        

                
            </div>

            <div className={classes['section']}>
                
            <div className={classes['left-quote']}>
                    <h3>Nuestros objetivos</h3>
                        
                    <p>
                    AutoMinder tiene como objetivo primordial brindar de una herramienta simple y práctica
                    a los conductores de vehículos para mantener a los mismos en buen estado de funcionamiento.
                    <br></br> <br></br>
                    Generando múltiples beneficios como ahorro en gastos mayores de reparaciones correctivas o
                    incluso salvaguardar sus vidas a través de pertinentes notificaciones para revisar o realizar
                    mantenimientos de partes críticas del carro.
                    </p>

                    <p>
                    AutoMinder - Cycle Management va dirigida para cualquier persona que tenga un
                    vehículo y esté interesada en mantenerlo en buen estado. 
                    
                    <br></br> <br></br>
                    Esto incluye propietarios de automóviles, conductores de flotas, mecánicos y cualquier persona que tenga la responsabilidad
                    de programar y llevar a cabo tareas de mantenimiento en un vehículo. En general, la aplicación es
                    útil para cualquier persona que busque una forma fácil y conveniente de gestionar el
                    mantenimiento de su vehículo.
                    </p>
                </div>
            </div>

            <div className={classes['section']}>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                        <figure className={classes['fluid']}>
                            <img src={Alejandro} alt="alejandro" />
                        </figure>
                    </div>
                </div>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                    <figure className={classes['fluid']}>
                            <img src={Melvin} alt="pamela" />
                        </figure>

                    </div>
                </div>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                    <figure className={classes['fluid']}>
                            <img src={Rene} alt="pamela" />
                        </figure>

                    </div>
                </div>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                    <figure className={classes['fluid']}>
                            <img src={Fer} alt="fer" />
                        </figure>

                    </div>
                </div>


 
                        
                
            </div>

        </div>
    );
}

export default Welcome