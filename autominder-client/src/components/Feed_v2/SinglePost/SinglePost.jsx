import classes from './SinglePost.module.scss';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { useUserConext } from '../../../contexts/UserContext';

import { BsTrash } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';





const SinglePost = ({title='', description='', image='', user='' }) => {


    // tambien
    // const {title, description, image} = props;
    
    //tambien
    //const title = props.title;
    //const description = props.description;
    //const image = props.image;


    return(

        <div className={classes['row']}>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        <article className={classes['post']}>
            <a>
                Alejandro
            </a>
            
            <div className={classes['actions']}>
            

                <div>
                    <AiFillCloseCircle /> Eliminar usuario
                </div>
                    
                <div>
                    <BsTrash /> Eliminar carros creados
                </div>

                
            </div>

        </article>

        </div>

        

        
         

        
        
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