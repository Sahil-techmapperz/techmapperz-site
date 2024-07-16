import Link from 'next/link';
import moment from 'moment';
import getRecentblogs from '@/lib/getsingaleblogs';


const RecentBlogList = async () => {
  const recentPosts = await getRecentblogs();

  return (
    <div className="p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
      {recentPosts.map((recent) => (
        <div key={recent._id} className="flex gap-4 mb-4">
          <img src={recent.images[0]} alt={recent.title} className="w-[100px] h-[100px] object-cover rounded-md"/>
          <div>
            <h1 className="text-lg font-semibold mb-2 cursor-pointer">
              <Link href={`/article/${recent._id}`}>{recent.title.slice(0, 100) + "..."}</Link>
            </h1>
            <h1>{moment(recent.created_at).format('YYYY-MM-DD')}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogList;
