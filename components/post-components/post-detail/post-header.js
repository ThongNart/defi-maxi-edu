import classes from "@/components/post-components/post-detail/post-header.module.css"
import Image from "next/image";


function PostHeader(props) {
    const {title, imagePath} = props
    return(
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={imagePath} alt={title} width={300} height={250}/>
        </header>
    )
}

export default PostHeader;