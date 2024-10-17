"use client"
import { useRouter } from 'next/navigation';

const ThankYou = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">We appreciate your response. You will hear from us shortly.</p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
