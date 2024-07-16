import Link from 'next/link';
import moment from 'moment';

const RelatedPosts = ({ relatedPosts }) => {
  return (
    <div className="related_post mb-8 p-4 bg-gray-800 rounded-lg">
      <h1 className="text-2xl font-bold">Related Posts</h1>
      {relatedPosts.length > 0 ? relatedPosts.map(recent => (
        <div key={recent._id} className="flex items-center gap-4 my-4">
          <img src={recent.images[0]} alt={recent.title} className="w-24 h-24 object-cover rounded-md" />
          <div>
            <h1><Link href={`/article/${recent._id}`}>{recent.title}</Link></h1>
            <h1>{moment(recent.created_at).format('YYYY-MM-DD')}</h1>
          </div>
        </div>
      )) : <h1 className="text-center">No related posts found</h1>}
    </div>
  );
};

export default RelatedPosts;
