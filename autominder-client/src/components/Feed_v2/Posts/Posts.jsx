import SinglePost from '../SinglePost/SinglePost';
import classes from './Posts.module.scss';

const Post = ({posts = []}) => {

    const ereasePost = (id) => {
        
    }

    const mappedPosts = posts.map(post => {
        return(
            <SinglePost
                key={post._id}
                title = {post.title}
                description = {post.description}
                user = {post.user.username} 
                image = {post.image}
            />
        );
    });

    return (
        <section className={classes["feed-posts-section"]}>
            <h3>
                Administrar usuarios
            </h3>

            
            <div className={classes["posts"]}>
                <SinglePost/>                
            </div>
            

        
        </section>
    );
};


export default Post; 