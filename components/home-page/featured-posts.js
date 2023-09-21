import { Fragment } from 'react';
import classes from '@/components/home-page/featured-posts.module.css'
import PostsGrid from '../post-components/posts-grid';

function FeaturedPosts(props){
    const postDatabase = props.posts;

    return(
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid postList={postDatabase}/>
        </section>
    )
}

export default FeaturedPosts;