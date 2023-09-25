import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts, getServerCodes } from "@/helpers/posts-util";


function HomePage(props){
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={props.posts}/>
      
    </>
  )
};

export async function getStaticProps(){
  const posts = await getFeaturedPosts();

  //console.log('posts hereeeeeeeeeeeee:', posts)

  const testServerCodes = await getServerCodes();

  console.log('Serverside Codes: ', testServerCodes)

  return (
    {
      props: { posts: posts}
    }
  )
}

export default HomePage;
