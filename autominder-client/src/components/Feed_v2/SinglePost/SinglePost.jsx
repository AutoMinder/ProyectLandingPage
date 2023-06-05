import classes from './SinglePost.module.scss';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { useUserConext } from '../../../contexts/UserContext';
import Button from '../../Button/Button';
import { BsTrash } from 'react-icons/bs';
import { GrAddCircle } from 'react-icons/gr';
import { toast } from 'react-toastify';





const SinglePost = ({id='', car_name='', user='',state = '', onDeletePost = () => {}}) => {



    const onSubmitDelete = (event) => {
        event.preventDefault();

        onDeletePost({id});

    }


    return(

        <form className={classes['row']} onSubmit={onSubmitDelete}>
            <article className={classes['post']}>
                <a>
                    {car_name}
                </a>

                <h4>
                    Usuario: {user}
                </h4>

                <h5>
                    {
                    
                        state.toString() == 'false'?
                        <>
                            <a className={classes['NoDele']}>
                                Activo
                            </a>
                        </>:
                        <>
                            <a className={classes['Dele']}>
                                Eliminado
                            </a>
                        </>
                    
                    }
                </h5>
                    
                <div className={classes['actions']}>
                    {
                        
                        state.toString() == 'false'?
                        <>
                             <Button type="submit"> 
                                <BsTrash /> Eliminar carro
                            </Button>
                        </>:
                        <>
                            <Button type="submit"> 
                                <GrAddCircle/> Restaurar carro
                            </Button>
                        </>
                    
                    }
                  
                </div>

            </article>

        </form>

        

        
         

    

        
    )
}

export default SinglePost;