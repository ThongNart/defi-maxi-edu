import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/helpers/posts-util";


const POST_DUMMY = [
  {
    title: 'How to DeFi 1',
    date: '2023-09-21',
    isFeatured: false,
    slug: 'how-to-defi-1',
    excerpt: 'In the world of financial disaster, only you can save yourself. Start learning DeFi Today.',
    image:'post-image.jpg'
  },
  {
    title: 'How to DeFi 2',
    date: '2023-09-23',
    isFeatured: false,
    slug: 'how-to-defi-2',
    excerpt: 'In the world of financial disaster, only you can save yourself. Start learning DeFi Today.',
    image:'post-image.jpg'
  },
  {
    title: 'How to DeFi 3',
    date: '2023-09-24',
    isFeatured: false,
    slug: 'how-to-defi-3',
    excerpt: 'In the world of financial disaster, only you can save yourself. Start learning DeFi Today.',
    image:'post-image.jpg'
  },
  {
    title: 'How to DeFi 4',
    date: '2023-09-25',
    isFeatured: false,
    slug: 'how-to-defi-4',
    excerpt: 'In the world of financial disaster, only you can save yourself. Start learning DeFi Today.',
    image:'post-image.jpg'
  }
]

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

  return (
    {
      props: { posts: posts}
    }
  )
}

export default HomePage;
