import Link from "next/link";
import BlogList from "../_Components/BlogList";
import RecentBlogList from "../_Components/RecentBlogList";
import SearchPosts from "../_Components/SearchPosts";
import ScrollToTop from "../_Components/ScrollToTop";
import blogs_banner_img from "@/public/Photos/blogs_banner.png";
import Image from "next/image";


export const metadata = {
  title: "Techmapperz Articles",
  description: "Techmapperz map your business",
};

const ArticlePage = ({ searchParams }) => {
  let page = searchParams.page;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ScrollToTop />
      {/* <div className="h-96 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/Photos/banner_2.png")' }}>
        <h1 className="text-5xl font-bold">Blogs</h1>
        <p className="text-lg mt-2"> <Link href="/">Home</Link> / Blogs</p>
      </div> */}

      <div className='relative w-full'>
        <Image src={blogs_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Blogs</h1>
          <p className='text-center text-lg max-sm:text-sm max-sm:w-full text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <Link href="/contact" className="text-lg flex items-center border-2 px-4 py-2 mt-4 font-semibold uppercase rounded-md bg-white text-[#00B0FE] shadow-[0px_0px_8px_0px_#00B0FE]">Let's Connect</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-8 max-sm:px-2">
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
