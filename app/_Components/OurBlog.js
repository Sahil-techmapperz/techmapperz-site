import getallblogs from '@/lib/getallblogs';
import Card from './Card';


const OurBlog = async () => {
  let page = 1;
  let parpage = 3;
  let data = await getallblogs(page, parpage);
  const { blogPosts, totalPages } = data;
  return (
    // <section className="bg-gray-900 py-12 px-[4rem] text-center" style={{ backgroundImage: "url('./Photos/Home/Latest\ News.gif')" }}>
    <section className="bg-black py-12 px-[4rem] text-center">
      <h1 className="text-2xl font-[600] mb-6 text-white">Our Latest Blogs</h1>
      {/* <h1 className="text-4xl font-bold mb-6 text-white">Latest Blogs</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start">
        {blogPosts.map(post => (
          <div key={post._id}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
