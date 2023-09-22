import classes from "@/components/post-components/post-detail/post-content.module.css"
import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown'

const POST_DUMMY = {
    title: 'How to DeFi 1',
    date: '2023-09-21',
    isFeatured: false,
    slug: 'how-to-defi-1',
    image:'post-image.jpg',
    content: '# This is the content of the article'
}

function PostContent(){
    const imagePath = `/images/posts/${POST_DUMMY.slug}/${POST_DUMMY.image}`

    return(
        <article className={classes.content}>
            <PostHeader title={POST_DUMMY.title} imagePath={imagePath} />

            <ReactMarkdown>{POST_DUMMY.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;