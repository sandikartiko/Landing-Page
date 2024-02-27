// import React from "react";
import acara from '../assets/acara.png';
import { motion } from 'framer-motion';


const HeroSectionTwo = () => {
  return (
    <div data-testid="herosectiontwo" name="TENTANG KAMI" className="bg-white">
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="max-w-[990px] w-full flex flex-col-reverse md:flex-row gap-4  mx-auto md:pr-0 md:pb-4">
          <div className="md:w-[600px] mt-4 md:mt-12 order-2 md:order-1">
            <img
              src={acara}
              alt="hero.jpg"
              className="w-full object-cover h-[200px] md:h-[500px] transition-transform transform scale-100 hover:scale-95 "
            />
          </div>
          <div className="md:w-[50%] mt-2 md:mt-12 w-full order-1 md:order-2">
            <div className="flex flex-col">
              <p className="text-green-950 font-serif">Tentang Kami</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-950 font-serif mt-3">
                Membangun Ilmu Melalui Kami
              </h1>
              <div className="flex flex-col mt-3">
                <p className="text-black font-serif">
                
"SMA Kami memberikan penghormatan luar biasa untuk Hardiknas dengan menyelenggarakan acara istimewa yang memukau.  siswa kami menyajikan tarian yang tidak hanya menghibur tetapi juga menyampaikan pesan mendalam tentang semangat pendidikan. mereka merayakan keberagaman budaya dan keindahan pendidikan di sekolah kami. Acara ini menjadi wujud dedikasi kami untuk merayakan keberhasilan pendidikan dan memberikan inspirasi bagi generasi yang akan datang."
                 
                </p>
              </div>
              <div className="flex gap-2 p-2 mt-4 md:gap-4 md:mt-3 md:justify-center">
                <button className="rounded-3xl h-10 relative flex md:h-12 w-40 items-center justify-center overflow-hidden bg-green-950 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Lebih Banyak</span>
                </button>
                <button className="rounded-3xl h-10 relative flex md:h-12 w-40 items-center justify-center overflow-hidden bg-green-950 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Hubungi Kami</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </div>
  );
};

export default HeroSectionTwo;
