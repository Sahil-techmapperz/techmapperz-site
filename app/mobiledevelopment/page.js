import Image from 'next/image';
import T01 from '@/public/Photos/01.png'
import T02 from '@/public/Photos/02.png'
import T03 from '@/public/Photos/03.png'
import T04 from '@/public/Photos/04.png'
import T05 from '@/public/Photos/05.png'
import T06 from '@/public/Photos/06.png';
import Techmapperz1 from '@/public/Photos/Techmapperz1.png';
import MobileDev3 from '@/public/Photos/MobileDev3.png';
import MobileDev4 from '@/public/Photos/MobileDev4.png';
import MobileDev5 from '@/public/Photos/MobileDev5.png';
import MobileDev6 from '@/public/Photos/MobileDev6.png';
import MobileDev7 from '@/public/Photos/MobileDev7.png';
import MobileDev8 from '@/public/Photos/MobileDev8.png';
import MobileDev9 from '@/public/Photos/MobileDev9.png';
import MobileDev10 from '@/public/Photos/MobileDev10.png';
import MobileDev11 from '@/public/Photos/MobileDev11.png';
import MobileDev12 from '@/public/Photos/MobileDev12.png';
import MobileDev13 from '@/public/Photos/MobileDev13.png';
import MobileDev14 from '@/public/Photos/MobileDev14.png';
import MobileDev15 from '@/public/Photos/MobileDev15.png';
import ScrollToTop from '../_Components/ScrollToTop';
import Link from 'next/link';

const Mobile_development = () => {

    return (
        <div className="bg-gray-900 text-white">
            
            <ScrollToTop />

            <section className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_3.jpg')" }}>
                <h1 className="text-6xl">Mobile Application Development</h1>
                <p className="text-lg mt-2"><Link href={"/"}> Home </Link> / <Link href={"/service"}>Service </Link> / Mobile Application Development</p>
            </section>

            <section className="w-full bg-gray-900 p-10">
                <p className="text-gray-400 text-justify leading-relaxed">In this digital era, it's not easy to live without smart devices, especially smartphones. Smart devices are transforming the way we live our lives. Mobile apps have become the most lucrative digital tool to make life easier and more convenient. The mobile app software intelligently combines the latest technology and design solutions, which constantly get updated. It incorporates API, GPS, Camera, Microphone, Artificial Intelligence, and other latest technologies and becomes a Launchpad hurling your business to the next level.</p>

                <div className="w-full py-10">
                    <div className="flex flex-col md:flex-row gap-10 bg-gray-900">
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <h1 className="text-4xl">Our Mobile App Development Services</h1>
                            <p>We provide iOS and Android mobile application development services to leverage mobile technology for your business.</p>
                            <h2 className="text-xl font-bold">Android App Development</h2>
                            <ul className="list-disc list-inside text-[#396ba9]">
                                <li><span className='text-white'> Android Mobile App Development</span></li>
                                <li><span className='text-white'> Android TV App Development</span></li>
                                <li><span className='text-white'> Android Tablet App Development</span></li>
                                <li><span className='text-white'> Android Wear App Development</span></li>
                            </ul>
                            <p>Market Development - Android has more than 80% of the market share in the handheld device market, making it arguably the most popular market.</p>
                        </div>
                        <div className="w-full md:w-1/2 h-96 overflow-hidden">
                            <img className="w-full h-full object-contain" src={"./Photos/MobileDev1.gif"} alt="MobileDev1" />
                        </div>
                    </div>
                </div>

                <div className="w-full py-10">
                    <div className="flex flex-col md:flex-row gap-10 bg-gray-900">
                        <div className="w-full md:w-1/2 h-96 overflow-hidden">
                            <img className="w-full h-full object-contain" src={"/Photos/MobileDev2.gif"} alt="MobileDev2" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <h1 className="text-4xl">iOS App Development</h1>
                            <ul className="list-disc list-inside text-[#396ba9]">
                                <li><span className='text-white'>iPhone App Development</span></li>
                                <li><span className='text-white'>iPad App Development</span></li>
                                <li><span className='text-white'>Apple Watch App Development</span></li>
                                <li><span className='text-white'>Apple TV App Development</span></li>
                                <li><span className='text-white'>App Clips Development</span></li>
                            </ul>
                            <p>Source - Apple's stringent data protection standards make sensitive corporate data lodged in iPhone applications very safe and secure.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full py-10" >
                    <h1 className="text-4xl text-center mb-10">Types of Mobile Application</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center text-center">
                            <Image className="h-64 object-contain" src={MobileDev3} alt="MobileDev3" />
                            <h3 className="text-2xl font-bold mt-5">Native App</h3>
                            <p className="text-justify leading-relaxed mt-5">These apps are built for a specific mobile platform. For example, Apple native applications are only accessible on Apple devices, and users may only access applications from other cell phone providers on their own branded devices. Native apps may offer higher performance compared to more generalized apps.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image className="h-64 object-contain" src={MobileDev4} alt="Combind3" />
                            <h3 className="text-2xl font-bold mt-5">Web-based App</h3>
                            <p className="text-justify leading-relaxed mt-5">A web-based app is internet-dependent and stores all application data online. The type code can be JavaScript, HTML5, or CSS, requiring much less space on your device to function.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image className="h-64 object-contain" src={MobileDev5} alt="MobileDev5" />
                            <h3 className="text-2xl font-bold mt-5">Hybrid App</h3>
                            <p className="text-justify leading-relaxed mt-5">Hybrid apps pool the effectiveness of native apps and web-based apps and support both types of technology. These apps are swift and easy to create on the developer's end, but they often have a lower performance rate and therefore provide a less appreciated experience for the end-user.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full py-10 flex sm:flex-row gap-10">
                    <div className='flex flex-col w-full'>
                    <h1 className="text-4xl text-center mb-10">How Mobile Applications Grow Your Business?</h1>
                    <img className="w-full object-cover" src={"./Photos/MobileDev16.gif"} alt="MobileDev16" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col items-center text-center p-5 border-r border-b">
                            <Image className="h-32 object-contain mb-5" src={MobileDev6} alt="MobileDev6" />
                            <Image className="h-8 object-contain mb-5" src={T01} alt="T01" />
                            <h3 className="text-2xl font-bold mb-5">Market Study</h3>
                            <p className="text-justify leading-relaxed">We generally conduct market research to determine your exact requirements and what your rivals are doing. We analyze their strengths and shortcomings so that we can avoid making the same mistakes.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5 border-b">
                            <Image className="h-32 object-contain mb-5" src={MobileDev7} alt="MobileDev7" />
                            <Image className="h-8 object-contain mb-5" src={T02} alt="T02" />
                            <h3 className="text-2xl font-bold mb-5">Generate Sales</h3>
                            <p className="text-justify leading-relaxed">We focus on newer avenues in the marketplace for the execution of mobile applications to generate sales at progressive levels within a short span of time.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5 border-r border-b">
                            <Image className="h-32 object-contain mb-5" src={MobileDev8} alt="MobileDev8" />
                            <Image className="h-8 object-contain mb-5" src={T03} alt="T03" />
                            <h3 className="text-2xl font-bold mb-5">Innovative User Interface</h3>
                            <p className="text-justify leading-relaxed">Our design team conceptualizes the most hassle-free user interface. We take special care to make it user-friendly.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5 border-b">
                            <Image className="h-32 object-contain mb-5" src={MobileDev9} alt="MobileDev9" />
                            <Image className="h-8 object-contain mb-5" src={T04} alt="T04" />
                            <h3 className="text-2xl font-bold mb-5">Business Solution</h3>
                            <p className="text-justify leading-relaxed">According to your need and market research, we design a framework for your app. We keep in mind all your requirements and what we have learned from the market research.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5 border-r">
                            <Image className="h-32 object-contain mb-5" src={MobileDev10} alt="MobileDev10" />
                            <Image className="h-8 object-contain mb-5" src={T05} alt="T05" />
                            <h3 className="text-2xl font-bold mb-5">Brand Value</h3>
                            <p className="text-justify leading-relaxed">Mobile apps are a one-stop point for getting all the relevant information related to the brand as well as showcasing the products and services, thus increasing the overall brand value.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-32 object-contain mb-5" src={Techmapperz1} alt="Techmapperz1" />
                            <Image className="h-8 object-contain mb-5" src={T06} alt="T06" />
                            <h3 className="text-2xl font-bold mb-5">Revenue</h3>
                            <p className="text-justify leading-relaxed">We take your suggestions to incorporate in-app advertising, in-app purchases, and paid apps are some of the most common app monetization tactics.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full py-10">
                    <h1 className="text-4xl text-center mb-10">Why Choose Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev10} alt="MobileDev10" />
                            <h3 className="text-2xl font-bold mt-5">Flexibility</h3>
                            <p className="text-justify leading-relaxed mt-5">We understand your need, and sometimes we know that it can be time-critical yet should be affordable, that is why we have custom designed packages to suit your demands of time and money.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev11} alt="MobileDev11" />
                            <h3 className="text-2xl font-bold mt-5">Friendly</h3>
                            <p className="text-justify leading-relaxed mt-5">Nothing is more important than a customer-oriented business model. We at Techmapperz love what we do, and we are always passionate about putting our customers first.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev12} alt="MobileDev12" />
                            <h3 className="text-2xl font-bold mt-5">Quality</h3>
                            <p className="text-justify leading-relaxed mt-5">Quality makes us excel. Our approach is designed to provide it at all levels of functioning up to the micro-level details. That extra ounce of effort in effective communication and best practices separates us and makes our work from good to great.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev13} alt="MobileDev13" />
                            <h3 className="text-2xl font-bold mt-5">Reduce Cost</h3>
                            <p className="text-justify leading-relaxed mt-5">Our team planning is so efficient that the project overall time is not extended, thus keeping the overall cost in check.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev14} alt="MobileDev14" />
                            <h3 className="text-2xl font-bold mt-5">Security</h3>
                            <p className="text-justify leading-relaxed mt-5">Our team planning is so efficient that the project overall time is not extended, thus keeping the overall cost in check.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-5">
                            <Image className="h-64 object-contain" src={MobileDev15} alt="MobileDev15" />
                            <h3 className="text-2xl font-bold mt-5">Transparency</h3>
                            <p className="text-justify leading-relaxed mt-5">For most of us, our business is our baby. We want the best for it, and this is the driving emotion for our transparent work culture. All our development stages are discussed so that the client is aware of time, manpower, and progress pace.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mobile_development;
