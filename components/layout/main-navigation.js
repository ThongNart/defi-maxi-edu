import classes from "@/components/layout/main-navigation.module.css"
import Logo from "@/components/layout/logo.js"
import Link from 'next/link'

function MainNavigation(){
    return(
        <header className={classes.header}>
             <Link href="/"><Logo/></Link>

             <nav>
                <ul>
                    <li><Link href="/posts">All Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
             </nav>
        </header>
    )
}

export default MainNavigation;