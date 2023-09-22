import classes from "@/components/post-components/post-item.module.css"
import Image from "next/image";
import Link from "next/link";

function PostItem(props){

    const {title, slug, date, excerpt, isFeatured, image} = props.postDetail;
    
    const imagePath = `/images/posts/${slug}/${image}`
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })


    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={250} layout="responsive"/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                    
                </div>
            </Link>
            
        </li>
    )
}

export default PostItem;