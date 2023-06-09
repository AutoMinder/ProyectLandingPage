import NewPostForm from "../../components/Feed_v2/NewPostForm/NewPostForm";
import Post from "../../components/Feed_v2/Posts/Posts";
import { useConfigContext } from "../../contexts/ConfigContext";
import NotFoundView_v2 from '../../views/NotFoundView_v2/NotFoundView_v2';

import classes from './FeedView.module.scss';

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import axios from "axios";

import { useUserConext } from "../../contexts/UserContext";





const FeedView = () => {
    const [posts, setPosts] = useState([]);
    const [postsHidden, setPostsHidden] = useState([]);
    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();



    useEffect(() => {fetchPosts()}, []);
    useEffect(() => {fetchPostsHidden()}, []);
    

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

    const fetchPostsHidden = async () => {
        try{

            startLoading();

            const {data} = await axios.get('/post/hidden');
            setPostsHidden(data.posts);
            
    
        }catch(error){
            toast.error('Error fetching posts');
        }finally{
            stopLoading();
        }

    }

    


    

    return(
        <div className={classes["news-publish"]}>
                    {/* Post de los carros con el boton eliminar */}
                    <div className={classes["feed-wrapper"]}>
                        <Post posts={posts} />
                    </div>

                    <div className={classes["line"]}>
                    </div>

                    <div className={classes["feed-wrapper"]}>
                        <Post posts={postsHidden} />
                    </div>         
        </div>
    )
}

export default FeedView;