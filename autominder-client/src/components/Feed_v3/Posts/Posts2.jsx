import SinglePost2 from '../SinglePost/SinglePost2';


import { useConfigContext } from "../../../contexts/ConfigContext";
import { useState, useEffect } from "react";
import { useUserConext } from "../../../contexts/UserContext";
import { toast } from "react-toastify";
import axios from "axios";


import classes from './Posts2.module.scss';


const Post2 = ({users = []}) => {

    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();

 

    const deletePost = async (id) => {
        try{

            startLoading();
            console.log(id)
            await axios.patch(`/auth/updateusers/${id}`, {}, { headers: {authorization: `Bearer ${token}` }});       
            toast.success('Usuario actualizado');

        }
        catch(error){
            const {status} = error.response || {status: 500};

            const msg = {
                400: 'Bad request',
                404: 'Post not found',
                500: 'Internal server error'
            }

            toast.error(msg[status.toString()] || 'Error deleting post');
        }
        finally{
            stopLoading();
        }

    }

    const onUpdateUserHandler = async (id) => {
        await deletePost(id.id);
    }


    
    
    const mappedPosts = users.map(user => {
            return(
                <SinglePost2
                    key={user._id}
                    id={user._id}
                    email = {user.email}
                    username = {user.username}
                    roles = {user.roles.toString()}
                    onDeletePost={onUpdateUserHandler}
                />
            );
        
    });

    

    return (
        <section className={classes["feed-posts-section"]}>

            
            <h3>
                Administrar registros de usuarios
            </h3>
            
            <div className={classes["posts"]}>
                {mappedPosts}                
            </div>

        
        
        </section>
    );
};


export default Post2; 