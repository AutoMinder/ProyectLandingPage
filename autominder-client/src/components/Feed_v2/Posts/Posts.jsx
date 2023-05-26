import SinglePost from '../SinglePost/SinglePost';
import classes from './Posts.module.scss';

const Post = ({posts = []}) => {

    const ereasePost = (id) => {
        
    }

    const mappedPosts = posts.map(post => {
        return(
            <SinglePost
                key={post._id}
                car_name= {post.car_name}
                user = {post.user.username} 
                rol = {post.user.roles}
                
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