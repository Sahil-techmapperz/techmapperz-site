import Genesys_logo from "@/public/Photos/Genesys_logo.png";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.png";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.png";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.png";
import shrc_logo from "@/public/Photos/Shrc_logo.png";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.png";
import Image from "next/image";
import Link from "next/link";

let Clients = [
  Genesys_logo,
  Cocreatelab_logo,
  manusherghorbari_logo,
  premierautosource_logo,
  shrc_logo,
  whitespreadfoods_logo,
];

const HappyClients = () => {
  return (
    <section className="bg-black py-8 px-[4rem]">
      <h1 className="text-white text-2xl font-[600] mb-6">Our Happy Clients</h1>
      <div className="flex justify-between">
        <div className="w-[40%]">
          <p className="text-white text-2xl font-[500] mb-6 w-[65%]">
            Our Awesome Clients Solution for you <br />
            Company.
          </p>
          <p className="text-[18px] text-white font-[400]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="w-[55%]">
          <div className="grid grid-cols-3">
            {Clients.map((client, index) => (
              <div key={index} className="border flex justify-center items-center">
                <Image
                  className="object-contain"
                  src={client}
                  alt={`Client logo ${index + 1}`}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
          <Link href="/about" className="mt-6 inline-block text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition">
              View All Clients
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
