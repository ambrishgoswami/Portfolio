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
            src='https://instagram.flko9-2.fna.fbcdn.net/v/t51.29350-15/457244866_877965424225616_3508529166278337254_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flko9-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=dECnCeuh91IQ7kNvgFlZ_5o&_nc_gid=4cdb017abd4a4e79a42af94e5d029d1c&edm=ADDLYBMBAAAA&ccb=7-5&ig_cache_key=MzQ0Mzc0NzEzMTE4ODA5MzkwOA%3D%3D.3-ccb7-5&oh=00_AYBNZFJpLpsVzVl9bZmG4BncUycvynd4yOHOQ4_4IBEIfg&oe=677DAA87&_nc_sid=56bdfd'
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
