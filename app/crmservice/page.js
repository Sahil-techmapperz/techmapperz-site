import Image from 'next/image';
import Link from 'next/link';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';
import CRM1 from '@/public/Photos/CRM1.png';
import CRM2 from '@/public/Photos/CRM2.png';
import CRM3 from '@/public/Photos/CRM3.png';
import CRM4 from '@/public/Photos/CRM4.png';
import CRM5 from '@/public/Photos/CRM5.png';
import CRM6 from '@/public/Photos/CRM6.png';
import CRM7 from '@/public/Photos/CRM7.png';
import CRM8 from '@/public/Photos/CRM8.png';
import CRM9 from '@/public/Photos/CRM9.png';
import CRM10 from '@/public/Photos/CRM10.png';
import ScrollToTop from '../_Components/ScrollToTop';

const CRM_pages = () => {


    return (
        <div className="bg-gray-900 text-white relative overflow-hidden">
            <ScrollToTop />
            <section className="h-[400px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_3.jpg')" }}>
                <h1 className="text-6xl font-bold">CRM-ERP</h1>
                <p className="text-xl">
                    <Link href="/" className="text-white">Home</Link> /
                    <Link href="/service" className="text-white">Services</Link> / CRM-ERP
                </p>
            </section>

            <section className="w-full px-20 py-10 bg-gray-900 relative">
                <div className="absolute top-12 right-[-1rem] text-[116px] leading-[174px] text-gray-400 opacity-5">IT Service</div>
                <div className="absolute top-20 right-[-1rem] text-[645px] leading-[968px] text-gray-400 opacity-5">?</div>
                <div className="text-center mb-20">
                    <p className="text-2xl font-semibold mb-8">Everything CRM, All-round assistance, We are one stop solution for your CRM needs</p>
                    <div className="grid grid-cols-2 gap-24 mt-[5rem]">
                        <div className="border p-8 relative">
                            <div className="flex justify-center items-center mb-4">
                                <Image src={CRM1} alt="CRM1" width={100} height={100} />
                                <Image src={T01} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            </div>
                            <Link href="/crm_consulting"><h3 className="text-2xl font-bold mb-2 cursor-pointer">CRM Consulting</h3></Link>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field...<br/><b className="border-b border-red-500 italic"><Link href="/crm_consulting">Know More</Link></b></p>
                        </div>
                        <div className="border p-8 relative">
                            <div className="flex justify-center items-center mb-4">
                                <Image src={CRM2} alt="CRM2" width={100} height={100} />
                                <Image src={T02} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            </div>
                            <Link href="/crm_implement"><h3 className="text-2xl font-bold mb-2 cursor-pointer">CRM Implementation</h3></Link>
                            <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience, many business entities...<br/><b className="border-b border-red-500 italic"><Link href="/crm_implement">Know More</Link></b></p>
                        </div>
                        <div className="border p-8 relative">
                            <div className="flex justify-center items-center mb-4">
                                <Image src={CRM3} alt="CRM3" width={100} height={100} />
                                <Image src={T03} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            </div>
                            <Link href="/custom_consulting"><h3 className="text-2xl font-bold mb-2 cursor-pointer">Custom CRM Consulting</h3></Link>
                            <p>At customer CRM Consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implementation...<br/><b className="border-b border-red-500 italic"><Link href="/custom_consulting">Know More</Link></b></p>
                        </div>
                        <div className="border p-8 relative">
                            <div className="flex justify-center items-center mb-4">
                                <Image src={CRM4} alt="CRM4" width={100} height={100} />
                                <Image src={T04} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            </div>
                            <Link href="/crm_integration"><h3 className="text-2xl font-bold mb-2 cursor-pointer">CRM Integration</h3></Link>
                            <p>CRM integration is connecting all the applications you use to run your business to customer information. It's a 360-degree view of customer data that can be seamlessly...<br/><b className="border-b border-red-500 italic"><Link href="/crm_integration">Know More</Link></b></p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-20">
                    <h3 className="text-4xl font-bold mb-8">Types of CRM</h3>
                    <div className="grid grid-cols-3 justify-center items-center gap-12">
                        <div className="p-8 flex flex-col justify-center items-center">
                            <Image src={CRM5} alt="CRM5" width={100} height={100} />
                            <h3 className="text-2xl font-bold mt-4">Operational</h3>
                            <p>This is a prime tool to manage your business, more efficiently with maximum utilization of customer data.</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center">
                            <Image src={CRM6} alt="CRM6" width={100} height={100} />
                            <h3 className="text-2xl font-bold mt-4">Analytical</h3>
                            <p>An analytic CRM is for better interactions with your customers and new business possibilities based on customer data.</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center">
                            <Image src={CRM7} alt="CRM7" width={100} height={100} />
                            <h3 className="text-2xl font-bold mt-4">Collaborative</h3>
                            <p>This CRM is the framework for vendor distributor interaction and business opportunities.</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center">
                            <Image src={CRM8} alt="CRM8" width={100} height={100} />
                            <h3 className="text-2xl font-bold mt-4">Campaign Management</h3>
                            <p>Campaign CRM is primarily for campaign management which combines analytical and operational CRMs.</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center">
                            <Image src={CRM10} alt="CRM10" width={100} height={100} />
                            <h3 className="text-2xl font-bold mt-4">Strategic</h3>
                            <p>This is a market study CRM, which helps you to understand and follow market trends and demands, crucial for customer demand-supply efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CRM_pages;
