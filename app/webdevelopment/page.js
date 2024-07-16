import Image from 'next/image';
import Link from 'next/link';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';
import ScrollToTop from '../_Components/ScrollToTop';

const WebDevelopment = () => {

    return (
        <div className="bg-gray-900 text-white relative">
            <ScrollToTop />

            <section className="h-[400px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_3.jpg')" }}>
                <h1 className="text-6xl font-bold">Website Development</h1>
                <p className="text-xl">
                    <Link href="/" className="text-white">Home</Link> /
                    <Link href="/service" className="text-white">Service</Link> / Website Development
                </p>
            </section>

            <section className="w-full overflow-hidden">
                <div className="px-20 py-10 relative">
                    <div className="absolute top-12 right-[-8rem] text-[116px] leading-[174px] text-white opacity-5">IT Service</div>
                    <h1 className="text-4xl font-bold mb-8 w-[30%]">What is Web Design and Development?</h1>
                    <div className="flex gap-12">
                        <Image unoptimized="true" src="/Photos/WebDev3.gif" alt="" width={600} height={300} />
                        <div className="flex flex-col gap-4">
                            <p>One of the first website was created in 1991, and since then website and its designing have evolved manifold. Today it is complex and involves an entire ecosystem of roles and skill sets. Website development is an umbrella term for two major parts- Design & Development, Design represents the look and feel whereas Development determines how it functions.</p>
                            <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                                <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="px-20 py-10 relative flex justify-between items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_3.jpg')" }}>
                    <div className="flex flex-col gap-4 w-1/2">
                        <h1 className="text-4xl font-bold w-[55%]">Why Web Design and Development is Important?</h1>
                        <p>Today the world is connected online, people get to the Internet for any kind of need they may have, in this era Web design and web development are crucial for any business that wants to create an online presence. it is the first impression of your company, make sure it is a good one, and a functioning one as well. A good web design and functionality is also a key element in good sales and business growth.</p>
                        <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                            <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
                        </Link>
                    </div>
                    <Image src="/Photos/WebDev4.gif" unoptimized="true" alt="" width={500} height={300} />
                </div>

                <div className="px-20 py-10 relative">
                    <div className="absolute bottom-4 right-[-5rem] text-[116px] leading-[174px] text-white opacity-5">Teamwork</div>
                    <h1 className="text-4xl font-bold mb-8 w-[30%]">The Right Web Design and Development Team</h1>
                    <div className="flex gap-12">
                        <Image src="/Photos/WebDev2.gif" unoptimized="true" alt="" width={600} height={300} />
                        <div className="flex flex-col gap-4">
                            <p>With so much at stake it is important that your web designing and development company is reliable and has a team that is experienced and can be trusted.</p>
                            <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                                <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="px-20 py-10 bg-cover" style={{ backgroundImage: 'url("/Photos/banner_3.jpg")' }}>
                    <h3 className="text-3xl font-bold mb-8">Elements of Web Design</h3>
                    <div className="grid grid-cols-2 gap-20 w-[60%] m-auto">
                        <div className="border border-white p-4 mt-[20px] relative">
                            <Image src="/Photos/Combind1.png" alt="" width={100} height={100} />
                            <Image src={T01} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Graphics</h1>
                            <p title='It is a collective term used to describe everything visual, like the photos, logos, and icons on a website. The rule of thumb is for graphics to complement the website’s layout, content, and colour palette.'>It is a collective term used to describe everything visual, like the photos, logos, and icons on a website...</p>
                        </div>
                        <div className="border border-white p-4 relative">
                            <Image src="/Photos/Combind5.png" alt="" width={100} height={100} />
                            <Image src={T02} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Navigation</h1>
                            <p title='Ease of navigation is the glue that keeps the website visitor on the website, it should be simple and effective and precise since the navigation tools to help users find what they need it should not make the customers like searching for a needle in the haystack'>Ease of navigation is the glue that keeps the website visitor on the website, it should be simple and effective...</p>
                        </div>
                        <div className="border border-white p-4 relative">
                            <Image src="/Photos/Combind3.png" alt="" width={100} height={100} />
                            <Image src={T03} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Colour</h1>
                            <p title='Colours are the most essential side of a website, it has psychological impact on the visitors to take action apart from giving the website personality.'>Colours are the most essential side of a website, it has psychological impact on the visitors to take action...</p>
                        </div>
                        <div className="border border-white p-4 mt-[-15px] relative">
                            <Image src="/Photos/Combind4.png" alt="" width={100} height={100} />
                            <Image src={T04} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Speed</h1>
                            <p title='This may be the last point but this is the first things customers and visitors notice in a website, the content and the coding of the a website should accommodate and understand the fact that if the website is slow , customers/visitors are less likely to linger around.'>This may be the last point but this is the first things customers and visitors notice in a website...</p>
                        </div>
                    </div>
                </div>

                <div className="px-20 py-10">
                    <h1 className="text-3xl font-bold text-center mb-8">Things to Consider</h1>
                    <div className="flex justify-center gap-6">
                        <div className=" p-4 flex flex-col justify-center items-center">
                            <Image src="/Photos/Webdev4.png" alt="" width={100} height={100} />
                            <h1 className="text-2xl font-bold mt-4">Original Content</h1>
                            <p>It is heighly recommended that the content of the website is original and of high quality, this is not only helps your coustomers find you quickly but also effects the ranking of your website,ensure this for your website.</p>
                        </div>
                        <div className="border-x border-white p-4 flex flex-col justify-center items-center">
                            <Image src="/Photos/Webdev3.png" alt="" width={100} height={100} />
                            <h1 className="text-2xl font-bold mt-4">Call to Action</h1>
                            <p>Call to action is as simple as setting up a contact now button,this invariably motivates customers and visitors to get in touch with your company and promotes building relationships.</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center">
                            <Image src="/Photos/Webdev2.png" alt="" width={100} height={100} />
                            <h1 className="text-2xl font-bold mt-4">Compatibility</h1>
                            <p>Our team compatibility and pooled experience is our biggest asset the major reason that we use it in creating masterpiece websites.</p>
                        </div>
                    </div>
                </div>

                <div className="px-20 py-10 relative flex justify-between items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/background_4.png')" }}>
                    <div className="flex flex-col gap-4 w-1/2">
                        <h1 className="text-3xl font-bold">Benefits of Getting Web Development Professionally</h1>
                        <p>We at Techmapperz have some of the best developers in the field with a combined experience of more than 200 years...</p>
                        <ul className="list-disc list-inside text-[#396ba9]">
                            <li><span className='text-white'>Drive Social Media Growth </span></li>
                            <li><span className='text-white'>Leveraging SEO </span></li>
                            <li><span className='text-white'>Drive Wider Reach </span></li>
                            <li><span className='text-white'>Tapping on the Brand Power </span></li>
                            <li><span className='text-white'>Boost Sales </span></li>
                            <li><span className='text-white'>Stay ahead of Competitors </span></li>
                        </ul>
                        <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                            <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
                        </Link>
                    </div>
                    <Image src="/Photos/WebDev1.gif" unoptimized="true" alt="" width={500} height={300} />
                </div>

                <div className="px-20 py-10 relative">
                    <div className="absolute top-12 right-[-5rem] text-[645px] leading-[968px] text-white opacity-5">?</div>
                    <h3 className="text-3xl font-bold text-center mb-8">Why Choose Techmapperz for your Development</h3>
                    <div className="grid grid-cols-2 gap-12 w-[60%] m-auto">
                        <div className="border border-white p-4 mt-[20px] relative">
                            <Image src="/Photos/Webdevelop.png" alt="" width={100} height={100} />
                            <Image src={T01} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Flexibility</h1>
                            <p title='We understand your need, and sometime we know that it can we time critical yet should affordable, that is why we have custom designed package to suit your demands of time and money.'>We understand your need, and sometime we know that it can be time critical yet should be affordable...</p>
                        </div>
                        <div className="border border-white p-4 relative">
                            <Image src="/Photos/Develop1.png" alt="" width={100} height={100} />
                            <Image src={T02} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Friendly</h1>
                            <p title='Nothing is more important that a customer oritented business model, we at Techmapperz love what we do, and we are always passeonate about putting our customers first.'>Nothing is more important than a customer-oriented business model, we at Techmapperz love what we do...</p>
                        </div>
                        <div className="border border-white p-4 relative">
                            <Image src="/Photos/Develop2.png" alt="" width={100} height={100} />
                            <Image src={T03} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Quality</h1>
                            <p title='Quality makes us excel. our approach is designed to provide it at all levels of functioning up-to the micro level details.'>Quality makes us excel. Our approach is designed to provide it at all levels of functioning up to the micro level details...</p>
                        </div>
                        <div className="border border-white p-4 mt-[-20px] relative">
                            <Image src="/Photos/Develop3.png" alt="" width={100} height={100} />
                            <Image src={T04} alt="" width={80} height={80} className='absolute top-7 right-5'/>
                            <h1 className="text-2xl font-bold mt-4">Reduce cost</h1>
                            <p title='Our team planning is so efficient that the project overall time in not extended and thus keeping the overall coast in check.'>Our team planning is so efficient that the project overall time is not extended and thus keeping the overall cost in check...</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WebDevelopment;
