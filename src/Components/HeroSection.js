import React from 'react';
import san from '../assets/test3.jpg';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div data-testid="hero-section">
      <div data-testid="herosection"className="bg-green-950 p-2">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="max-w-[990px] w-full md:h-[700px] mx-auto  ">
          <div className=' flex flex-col lg:flex-row lg:items-center gap-4 p-2 md:mt-28'>
          <div className="lg:w-2/3 p-2 order-2 md:order-1">
            <h1 className="text-3xl lg:text-5xl font-bold text-white font-serif">
              SMA Negeri 1 Arso
            </h1>
            <div className="mt-3">
              <p className="text-white font-serif">
              
"Senyuman bersama wali kelas terbaik! Sebuah momen spesial yang kami abadikan dalam satu foto. Wali kelas yang selalu memberikan dukungan, inspirasi, dan motivasi. Terima kasih atas bimbingan dan dedikasinya dalam perjalanan pendidikan kami. Foto bersama beliau menjadi kenangan tak terlupakan!"
              </p>
            </div>
            <div className="mt-6">
              <button className="rounded-3xl relative flex h-12 w-40 items-center justify-center overflow-hidden bg-orange-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Daftar Sekarang</span>
              </button>
            </div>
          </div>
          <div className="mx-auto w-full order-1 md:order-2">
            <img
              src={san}
              alt="hero.jpg"
              className="w-full object-cover lg:h-[450px] rounded-3xl transition-transform transform scale-100 hover:scale-105"
            />
          </div>
        </div>
        </div>
      </motion.div>
    </div>
    </div>
    
  );
};

export default HeroSection;
