import Link from 'next/link';
import moment from 'moment';
import PaginationButtons from './PaginationButtons';
import getallblogs from '@/lib/getallblogs';

const BlogList = async ({ page }) => {
  const data = await getallblogs(page);
  const { blogPosts, totalPages } = data;

  return (
    <div className="w-full p-8">
      {blogPosts && blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post._id} className="mb-12">
            <img src={post.images[0]} alt={post.title} className="w-full mb-4" />
            <div className="flex justify-between text-sm font-bold mb-4">
              <div>{`BY ${post.author.name.toUpperCase()}`}</div>
              <div>{`COMMENTS ${post.comments.length}`}</div>
              <div>{`${moment(post.created_at).format('YYYY-MM-DD')}`}</div>
            </div>
            <div className="text-2xl font-bold mb-2 cursor-pointer">
              <Link href={`/blog/${post._id}`} >{post.title}</Link>
            </div>
            <div className="text-base mb-4">{post.content.slice(0, 200) + "..."}</div>
            <Link href={`/blog/${post._id}`} className="text-blue-600 font-semibold cursor-pointer">
              Read more...
            </Link>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[90dvh] text-3xl text-center text-gray-500">No posts found.</div>
      )}
     {blogPosts && blogPosts.length > 0 && <PaginationButtons page={Number(page)} totalPages={totalPages} /> }
    </div>
  );
};

export default BlogList;
