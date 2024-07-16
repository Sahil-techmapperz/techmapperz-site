import Link from 'next/link';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';

const AuthorDetails = ({ author }) => {
  return (
    <div className="author_details mb-8 p-4 bg-gray-800 rounded-lg">
      <img src={author.picture} alt={author.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h1 className="text-xl font-bold text-center">{author.name}</h1>
      <h3 className="text-center">{author.authorDetails}</h3>
      <div className="flex justify-center gap-4 mt-4">
        <Link href={author.socialLinks.facebook || '#'} target="_blank"><AiFillFacebook className="text-2xl" /></Link>
        <Link href={author.socialLinks.twitter || '#'} target="_blank"><AiFillTwitterSquare className="text-2xl" /></Link>
        <Link href={author.socialLinks.linkedin || '#'} target="_blank"><AiFillLinkedin className="text-2xl" /></Link>
      </div>
    </div>
  );
};

export default AuthorDetails;
