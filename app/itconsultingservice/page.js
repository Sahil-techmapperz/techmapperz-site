import Image from 'next/image';
import Link from 'next/link';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';
import Itconsulting1 from '@/public/Photos/Itconsulting1.png';
import Itconsulting2 from '@/public/Photos/Itconsulting2.png';
import Itconsulting4 from '@/public/Photos/Itconsulting4.png';
import Itconsulting5 from '@/public/Photos/Itconsulting5.png';
import Itconsulting8 from '@/public/Photos/Itconsulting8.png';
import Itconsulting9 from '@/public/Photos/Itconsulting9.png';
import Itconsulting10 from '@/public/Photos/Itconsulting10.png';
import Itconsulting12 from '@/public/Photos/Itconsulting12.png';
import Itconsulting13 from '@/public/Photos/Itconsulting13.png';
import Itconsulting14 from '@/public/Photos/Itconsulting14.png';
import Office_work from '@/public/Photos/Itconsulting/Office work.gif';
import Digital_nomad from '@/public/Photos/Itconsulting/Digital nomad.gif';
import Good_team from '@/public/Photos/Itconsulting/Good team.gif';
import ScrollToTop from '../_Components/ScrollToTop';

const ItConsulting = () => {


    return (
        <div className="bg-gray-900 text-white relative">
            <ScrollToTop />
            <section className="h-[400px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_3.jpg')" }}>
                <h1 className="text-6xl font-bold">IT Consulting Services</h1>
                <p className="text-xl">
                <Link href="/" className="text-white">Home</Link> / <Link href="/service" className="text-white">Services</Link> / IT Consulting Services
                </p>
            </section>

            <section className="w-full bg-gray-900 ">
                <p className="text-justify p-20">
                    We provide IT consulting services to businesses in a wide range of industries. We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors. Whether it's strategy, innovation, or implementation, we're able to provide exceptional services thanks to the skills of our impeccable team.
                </p>

                <div className="grid grid-cols-3 gap-12 px-20 mt-10">
                    <div className="border p-8">
                        <Image src={Itconsulting14} alt="Infrastructure" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Infrastructure</h3>
                        <p>Our Infrastructure consulting will help you power through the use of under-utilization of your Infrastructure, and deliver something that can make your business thrive.</p>
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting13} alt="Design and Implementation" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Design and Implementation</h3>
                        <p>Our team can work with you on designing a network to secure your data and other intelligent infrastructures.</p>
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting12} alt="Planning" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Planning</h3>
                        <p>Techmapperz provides strategic information Systems Planning and Assessment services that help organizations leverage the benefits of technology.</p>
                    </div>

                    <div className="p-8">
                        <Image src={Office_work} alt="Office work" loading="lazy"  className="object-fill w-full h-full" />
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting10} alt="Digital Transformations" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Digital Transformations</h3>
                        <p>Digital Transformation is the integration of Digital technology into your business. With our team of experts, we'll help you work smarter.</p>
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting9} alt="Modernization" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Modernization</h3>
                        <p>We replatform your apps in order to make functionality easier. Re-architecting your apps to make it more scalable and flexible. This will be done through code.</p>
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting8} alt="Strategy Consulting" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Strategy Consulting</h3>
                        <p>Strategy consulting is an important aspect of digital transformation. With this package, we offer one-on-ones with our consultants to assess where you are at now.</p>
                    </div>

                    <div className="border p-8">
                        <Image src={Itconsulting1} alt="Implementation" loading="lazy" width={100} height={100} />
                        <h3 className="text-2xl font-bold mt-4">Implementation</h3>
                        <p>We'll help define the required skill sets for our team (including developers, project managers, QA, etc.) so that we can build a robust architecture and prototype.</p>
                    </div>

                    <div className=" p-8">
                        <Image src={Digital_nomad} alt="Digital nomad" loading="lazy"  className="object-fill w-full h-full" />
                    </div>
                </div>

                <div className="bg-cover bg-center py-10  mt-10 grid grid-cols-2" style={{ backgroundImage: "url('/Photos/Rectangle 41.png')" }}>
                  <div>
                    <h1 className="text-4xl font-bold mb-8 text-center">Why Choose Techmapperz for your IT Services?</h1>
                    <div className="flex flex-col items-center">
                        <Image src={Good_team} alt="Good team" loading="lazy" width={600} height={400} className="object-fill mb-8" />
                    </div>

                    </div>

                    <div className="grid grid-cols-2 pr-20">
                        <div className="border-r border-b p-8">
                            <div className="flex justify-between items-center mb-4">
                                <Image src={Itconsulting5} alt="Reliability" loading="lazy" width={100} height={100} />
                                <Image src={T01} alt="T01" loading="lazy" width={80} height={80} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Reliability</h3>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field.</p>
                        </div>

                        <div className="border-b p-8">
                            <div className="flex justify-between items-center mb-4">
                                <Image src={Itconsulting4} alt="Revenue" loading="lazy" width={100} height={100} />
                                <Image src={T02} alt="T02" loading="lazy" width={80} height={80} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Revenue</h3>
                            <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience, many business entities.</p>
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <Image src={Itconsulting2} alt="Robust" loading="lazy" width={100} height={100} />
                                <Image src={T03} alt="T03" loading="lazy" width={80} height={80} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Robust</h3>
                            <p>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implementation.</p>
                        </div>

                        <div className="border-l p-8">
                            <div className="flex justify-between items-center mb-4">
                                <Image src={Itconsulting1} alt="Skilled Management" loading="lazy" width={100} height={100} />
                                <Image src={T04} alt="T04" loading="lazy" width={80} height={80} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Skilled Management</h3>
                            <p>CRM integration is connecting all the applications you use to run your business to customer information, it's a 360-degree view of customer data that can be seamlessly.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItConsulting;
