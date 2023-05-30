import classes from './SinglePost.module.scss';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { useUserConext } from '../../../contexts/UserContext';
import Button from '../../Button/Button';
import { BsTrash } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';





const SinglePost = ({id='', car_name='', user='', onDeletePost = () => {}}) => {



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
                    {user}
                </h4>
                    
                <div className={classes['actions']}>
                    <Button type="submit"> 
                        <BsTrash /> Eliminar carro
                    </Button>
                  
                </div>

            </article>

        </form>

        

        
         

        
        
        /*
        <article className={classes['post']}>

            <a>
                {user}
                
                
            </a>

            <h4>
                {title}
            </h4>


            <p>
                {description}
            </p>

            <figure>
                <img src={image} alt="Post Image" />
            </figure>

            <div>

            

            <div className={classes['actions']}>


                <div>
                    <BsFillChatRightTextFill /> Comentarios
                </div>


                <div>
                    {
                        user == 'admin'?
                        
                        <>
                            <div>
                                <BsFillCheckCircleFill /> Aprobar
                            </div>

                            <div>
                                <AiFillCloseCircle /> Rechazar
                            </div>

                            <div>
                                <BsTrash /> Eliminar post
                            </div>
                        
                        </>:

                        <>
                            <div>
                          
                            </div>
                        </>
                    }
                </div>

                
            </div>

            </div>

            <textarea name='description' rows={3}>

            </textarea>

        </article>

        */

        
    )
}

export default SinglePost;