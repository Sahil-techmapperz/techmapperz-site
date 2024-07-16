import Link from 'next/link';
import Image from 'next/image';
import Home_1 from '@/public/Photos/Home/Home_1.png';
import Home_2 from '@/public/Photos/Home/Home_2.png';
import Home_3 from '@/public/Photos/Home/Home_3.png';
import KnowMoreButton from './KnowMoreButton';

const Features = () => {
    return (
        <section className="bg-gray-800 py-8 px-[4rem] relative">
            <div className="grid grid-cols-2 justify-between">
                <div>
                    <p className="text-gray-400 text-lg mb-4">Features</p>
                    <h1 className="text-white w-[60%] text-4xl font-bold mb-6">These Services to Expand your Business</h1>
                </div>
                <div>
                    <p className="text-gray-300 text-lg mb-8">To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.</p>
                    <KnowMoreButton href="/contact" text="Know More" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-[2rem] max-sm:grid-cols-1 mt-12">
                <div className="w-full">
                    <Image src={Home_3} alt="IT Services" className="object-contain w-full h-auto rounded-md" />
                    <Link href="/it_consulting" className="text-white text-2xl font-semibold block mt-4">IT Services</Link>
                </div>
                <div className="w-full mt-[3rem]">
                    <Image src={Home_1} alt="GIS Services" className="object-contain w-full h-auto rounded-md" />
                    <Link href="/gis_service" className="text-white text-2xl font-semibold block mt-4">GIS Services</Link>
                </div>
                <div className="w-full mt-[6rem]">
                    <Image src={Home_2} alt="Drone Services" className="object-contain w-full h-auto rounded-md" />
                    <Link href="/drone_service" className="text-white text-2xl font-semibold block mt-4">Drone Services</Link>
                </div>
            </div>

            <div className='flex relative my-[20px]'>
                <div className='flex absolute'>
                    <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
                    <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                        <Link href="/contact">Know More</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;
