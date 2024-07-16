import getallblogs from '@/lib/getallblogs';
import Link from 'next/link';

const OurBlog =async () => {
    let page= 1;
    let parpage = 3;
    let data= await getallblogs(page,parpage);
    const { blogPosts, totalPages } = data;
  return (
    <section className="bg-gray-900 py-12 px-[4rem] text-center" style={{ backgroundImage: "url('./Photos/Home/Latest\ News.gif')" }}>
      <h1 className="text-lg font-bold mb-6 text-gray-500">Our Blog</h1>
      <h1 className="text-4xl font-bold mb-6 text-white">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={post.images[0]} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link href={`/blog/${post._id}`} className="text-blue-500 mt-4 inline-block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
