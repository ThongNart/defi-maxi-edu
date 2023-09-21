import classes from "@/components/layout/logo.module.css"
import Image from "next/image";

const imageStyle = {
    borderRadius: '50%'
}

function Logo(){
    return(
        <div className={classes.logo}>
        <Image src="/images/site/dodge-coin.jpg" alt="" width={60} height={60} style={imageStyle} />
        </div>
    )
}

export default Logo;