import classes from "@/components/post-components/posts-grid.module.css"
import PostItem from "./post-item";

function PostsGrid(props){
    const postData = props.postList;

    return(
        <ul className={classes.grid}>
            
                {
                    postData.map ( post =>( 
                        <PostItem 
                            postDetail={post}
                        
                        />
                    )
                )}
            

        </ul>
    )
}

export default PostsGrid;