import classes from '@/components/home-page/hero.module.css'
import Image from 'next/image';

function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/monke-1004.png" alt="profile photo of author" width={300} height={300}/>
            </div>
            <h1>Hi, I am Thong DeFi</h1>
            <p>
                I blog about DeFi and everything in Crypto
            </p>
        </section>
    )
}

export default Hero;