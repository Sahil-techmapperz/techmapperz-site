import AuthorDetails from "@/app/_Components/AuthorDetails";
import RecentBlogList from "@/app/_Components/RecentBlogList";
import RelatedPosts from "@/app/_Components/RelatedPosts";
import SinglePost from "@/app/_Components/SinglePost";
import getPost from "@/lib/getPost";
import getRelatedPosts from "@/lib/getRelatedPosts";

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = params.id;
  
  // fetch data
  const product = await getPost(id);
  
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: product.title,
    openGraph: {
      images: [...previousImages, ...product.images], // Extending previous images with product images
    },
  };
}



const ArticlePage = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  const relatedPosts = await getRelatedPosts(id);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="h-96 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/Photos/banner_2.png")' }}>
        <h1 className="text-5xl font-bold">News & Articles</h1>
        <p className="text-lg mt-2"><a href="/">Home</a> / <a href="/blog?page=1">Blogs</a> / Blog</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-8">
        <div className="w-full md:w-2/3">
          <SinglePost post={post} />
        </div>
        <div className="w-full md:w-1/3">
        <AuthorDetails author={post.author}/>
          <RelatedPosts relatedPosts={relatedPosts} />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
