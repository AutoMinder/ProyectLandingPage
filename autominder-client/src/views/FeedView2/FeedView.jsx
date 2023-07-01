import NewPostForm from "../../components/Feed_v3/NewPostForm/NewPostForm";
import Post2 from "../../components/Feed_v3/Posts/Posts2";
import { useConfigContext } from "../../contexts/ConfigContext";
import NotFoundView_v2 from '../../views/NotFoundView_v2/NotFoundView_v2';

import classes from './FeedView.module.scss';

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import axios from "axios";

import { useUserConext } from "../../contexts/UserContext";





const FeedView = () => {
    const [users, setUsers] = useState([]);
    const [useru, setUserU] = useState([]);
    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();




    useEffect(() => {fetchPosts()}, []);
    useEffect(() => {fetchPostsU()}, []);


    const fetchPosts = async () => {
        try{

            startLoading();

            const {data} = await axios.get('/auth/allusers');
            setUsers(data.users);
            
    
        }catch(error){
            toast.error('Error fetching posts');
        }finally{
            stopLoading();
        }

    }

    const fetchPostsU = async () => {
        try{

            startLoading();

            const {data} = await axios.get('/auth/allusersu');
            setUserU(data.users);
            
    
        }catch(error){
            toast.error('Error fetching posts');
        }finally{
            stopLoading();
        }

    }



    return(
        <div className={classes["news-publish"]}>
                {/* Post de los usuarios con el boton eliminar */}
                    <div className={classes["feed-wrapper"]}>
                        <Post2 users={users} />
                    </div>

                    <div className={classes["line"]}>
                    </div>

                    <div className={classes["feed-wrapper"]}>
                        <Post2 users={useru} />
                    </div>          
        </div>
    )
}

export default FeedView;