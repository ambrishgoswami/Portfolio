// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src='https://instagram.flko9-1.fna.fbcdn.net/v/t51.2885-15/468764500_17950004972896008_1984283006929820910_n.jpg?se=-1&stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEzNjUuaGRyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flko9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=VQgEY8Hpm6YQ7kNvgE3Slsy&_nc_gid=a810b53b241d4e95be7123824e7f1740&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxMjE4MTkxMjYxMjM1NjIwMA%3D%3D.3-ccb7-5&oh=00_AYB1XPwrL-NLWHynfbORvU_zYT8JQ7tBa4iCoVnV0IGRig&oe=677EB774&_nc_sid=7a9f4b'
            width={280}
            height={280}
            alt="Ambrish Goswami"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
