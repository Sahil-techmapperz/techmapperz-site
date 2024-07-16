import Link from "next/link";
import BlogList from "../_Components/BlogList";
import RecentBlogList from "../_Components/RecentBlogList";
import SearchPosts from "../_Components/SearchPosts";
import ScrollToTop from "../_Components/ScrollToTop";


export const metadata = {
  title: "Techmapperz Articles",
  description: "Techmapperz map your business",
};

const ArticlePage = ({ searchParams}) => {
  let page = searchParams.page;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ScrollToTop/>
      <div className="h-96 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/Photos/banner_2.png")' }}>
        <h1 className="text-5xl font-bold">Blogs</h1>
        <p className="text-lg mt-2"> <Link href="/">Home</Link> / Blogs</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-8">
        <div className="w-full md:w-2/3">
          <BlogList page={page} />
        </div>
        <div className="w-full md:w-1/3">
          <SearchPosts />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};


export default ArticlePage;
