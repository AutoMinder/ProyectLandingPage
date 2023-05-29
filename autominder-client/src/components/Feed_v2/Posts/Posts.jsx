import SinglePost from '../SinglePost/SinglePost';


import { useConfigContext } from "../../../contexts/ConfigContext";
import { useState, useEffect } from "react";
import { useUserConext } from "../../../contexts/UserContext";
import { toast } from "react-toastify";
import axios from "axios";


import classes from './Posts.module.scss';


const Post = ({posts = []}) => {

    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();

 

    const deletePost = async (id) => {
        try{

            startLoading();
            console.log(id)
            await axios.patch(`/post/visibility/${id}`, {}, { headers: {authorization: `Bearer ${token}` }});       
            toast.success('Post deleted');

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

    const onDeletePostHandler = async (id) => {
        await deletePost(id.id);
    }


    
    
    const mappedPosts = posts.map(post => {
        return(
            <SinglePost
                key={post._id}
                id={post._id}
                car_name= {post.car_name}
                user = {post.user.username} 
                onDeletePost={onDeletePostHandler}
            />
        );
    });

    return (
        <section className={classes["feed-posts-section"]}>
            <h3>
                Administrar usuarios
            </h3>

            
            <div className={classes["posts"]}>
                {mappedPosts}                
            </div>
            

        
        </section>
    );
};


export default Post; 