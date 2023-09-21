import classes from "@/components/layout/logo.module.css"
import Image from "next/image";

function Logo(){
    return(
        <div className={classes.logo}>
        <Image src="/images/site/dodge-coin.jpg" alt="" width={60} height={60} />
        </div>
    )
}

export default Logo;