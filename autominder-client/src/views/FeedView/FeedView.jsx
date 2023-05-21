import NewPostForm from "../../components/Feed_v2/NewPostForm/NewPostForm";
import Post from "../../components/Feed_v2/Posts/Posts";
import { useConfigContext } from "../../contexts/ConfigContext";


import classes from './FeedView.module.scss';

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import axios from "axios";

import { useUserConext } from "../../contexts/UserContext";





const FeedView = () => {
    const [posts, setPosts] = useState([]);
    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();


    useEffect(() => {fetchPosts()}, []);

    const fetchPosts = async () => {
        try{

            startLoading();

            const {data} = await axios.get('/post');
            setPosts(data.posts);


        }catch(error){
            toast.error('Error fetching posts');
        }finally{
            stopLoading();
        }

    }

    const savePost = async (title, description, image) => {
        try{
            
            

            startLoading();

            await axios.post('/post', { title, description, image }, { headers: {authorization: `Bearer ${token}` }});
            toast.success('Post saved'); 

        }catch(error){

            const {status} = error.response || {status: 500};

            const msg = {
                400: 'Bad request',
                404: 'Post not found',
                500: 'Internal server error'
            }

            toast.error(msg[status.toString()] || 'Error saving post');
        }finally{
            stopLoading();
        }
    }

    const onAddPostHandler = async (title, description, image) => {
        

        await savePost(title, description, image);
        fetchPosts();
    }
    

    return(
        <div className={classes["news-publish"]}>
            <div className={classes["feed-wrapper"]}>
        
                    {/* Lista de posts - Main Feed - Muestra de elementos */}
                    <Post posts={posts}/>
            </div>

           
        </div>
    )
}

export default FeedView;