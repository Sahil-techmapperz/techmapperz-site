import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';


const OurBlog = async () => {
  let page = 1;
  let parpage = 3;
  let data = await getallblogs(page, parpage);
  const { blogPosts, totalPages } = data;
  return (
    // <section className="bg-gray-900 py-12 px-[4rem] text-center" style={{ backgroundImage: "url('./Photos/Home/Latest\ News.gif')" }}>
    <section className="bg-black py-12 max-sm:p-2 px-[4rem] text-center">
      <h1 className="text-xl font-[600] mb-6 text-white">Our Latest Blogs</h1>
      {/* <h1 className="text-4xl font-bold mb-6 text-white">Latest Blogs</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start">
        {blogPosts.map(post => (
          <div key={post._id}>
            <Card post={post} />
          </div>
        ))}
      </div>

      <Link
        href="/blog"
        className="relative mt-6 inline-block uppercase w-fit font-semibold text-[22px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
      >
        Explore more
      </Link>
    </section>
  );
};

export default OurBlog;
