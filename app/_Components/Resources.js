// components/Resources.js

import Link from "next/link";


const Resources = ({ sections,title,subtitle,color}) => {
    return (
        <div className={`bg-[${color}] fixed z-50 top-[5rem] right-0 w-[70%] flex gap-4 text-white p-2 rounded-md`}>
            <div className="w-[40%] text-center p-4">
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
                <p className="mb-8 text-wrap text-justify">
                    {subtitle}
                </p>
            </div>

            <div className="w-[70%] p-4 bg-white text-black grid grid-cols-2 gap-10 rounded-md">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                        <ul className="list-none">
                            {section.items.map((item, idx) => (
                                <li key={idx} className="mb-2">
                                    <Link href={item.link} className="underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
