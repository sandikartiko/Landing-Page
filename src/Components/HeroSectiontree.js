import React from 'react';
import san from '../assets/test3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function HeroSectiontree() {
  return (
    <div className="relative">
      <img
        src={san}
        alt="img"
        className="w-full h-[500px] object-cover opacity-100 brightness-[15%]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full mx-auto flex flex-col lg:flex-row lg:items-center p-6 md:p-10 md:gap-0">
          <div data-aos="fade-right" data-aos-duration="2000"  data-aos-once="true" className="w-full md:w-[700px]  lg:w-full lg:mt-5  p-6 order-2 md:order-1 text-center md:mr-10">
            <h1 className="text-base lg:text-3xl font-bold text-white font-serif mb-4">
              Kami Bersiap Untuk Kelas Semester Baru. Daftar Sekarang!
            </h1>
            <p className="text-white font-serif">Jangan lewatkan waktunya sekarang juga</p>
            <div className="mt-4 flex justify-center">
              <button className="rounded-3xl relative flex h-12 w-40 items-center justify-center overflow-hidden bg-orange-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Lets Go</span>
              </button>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000"  data-aos-once="true" className="lg:mt-9 mx-auto w-full lg:w-[100%] md:w-[70%] px-3 order-1 md:order-2">
            <img
              src={san}
              alt="hero.jpg"
              className="w-full h-[220px] lg:h-[350px] md:w-[100%] object-cover brightness-75 rounded-3xl transition-transform transform scale-100 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
