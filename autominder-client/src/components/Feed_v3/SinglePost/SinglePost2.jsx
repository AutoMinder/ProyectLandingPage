import classes from './SinglePost2.module.scss';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { useUserConext } from '../../../contexts/UserContext';
import Button from '../../Button/Button';
import { BsTrash } from 'react-icons/bs';
import { GrAddCircle } from 'react-icons/gr';
import { toast } from 'react-toastify';





const SinglePost = ({id='', email='', username='',roles = '', onDeletePost = () => {}}) => {



    const onSubmitDelete = (event) => {
        event.preventDefault();

        onDeletePost({id});

    }


    return(

        <form className={classes['row']} onSubmit={onSubmitDelete}>
            <article className={classes['post']}>
                <a>
                    Usuario: {username}
                </a>

                <h4>
                    email: {email}
                </h4>
                
                <h5>
                    {
                    
                        roles.toString() == 'user'?
                        <>
                            <a className={classes['NoDele']}>
                                Usuario
                            </a>
                        </>:
                        <>
                            <a className={classes['Dele']}>
                                Administrador
                            </a>
                        </>
                    
                    }
                </h5>
                    
                <div className={classes['actions']}>
                    {
                        
                        roles.toString() == 'user'?
                        <>
                             <Button type="submit" onClick="location.replace(https://autominder.tech/feed2)"> 
                                <BsTrash /> Hacer administrador
                                
                            </Button>
                        </>:
                        <>
                            <Button type="submit" onClick="location.replace(https://autominder.tech/feed2)"> 
                                <GrAddCircle/> Hacer usuario base
                            </Button>
                        </>
                    
                    }
                  
                </div>

            </article>

        </form>

        
    )
}

export default SinglePost;