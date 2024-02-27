import React from "react";
import { Element } from "react-scroll";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";
import test5 from "../assets/test5.jpg";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Partner = () => {

    return (
    
   <div name="PARTNER" className=" mt-4 w-[100%] gap-[30px] mx-auto p-0 md:mt-14">
   <Element name="partner" className="partner" >
        <div data-testid="partner">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
           <div data-aos="fade-down" data-aos-once="true" className="flex flex-col items-center">
  <h2 className="text-2xl md:text-2xl font-bold text-brown font-serif mb-2">
    Tetap Terhubung
  </h2>
  <div className="border-b-2 border-brown w-40"></div>
</div>
            <div className="  py-3 gap-3 flex flex-wrap md:gap-7 justify-center md:mt-9 ">
                <div data-aos="zoom-in" data-aos-once="true"   data-aos-duration="2000" className="flex  md:w-[400px] text-black p-0">
                    <div className="flex-col justify-center items-center text-center ">
                        <div className="flex justify-center p-2">
                            <img
                                src={test1}
                                alt="img"
                                className="w-[400px] h-[220px] object-cover transition-transform transform scale-100 hover:scale-110 hover:opacity-100 hover:brightness-50  hover:grayscale-0 mb-3"
                            />
                        </div>
                        <div className="flex justify-center items-start py-2">
                            <button className="w-[400px]   relative flex md:h-10 md:w-56 items-center justify-center overflow-hidden bg-green-950 text-white  ">
                                <span className="relative z-10 p-2 text-xl md:text-lg font-serif">
                                    Biologi
                                </span>
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-center mb-3">
                            Praktek Membelah Kodok
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in"   data-aos-once="true"  data-aos-duration="2000"  className="w-full flex  md:w-[400px] text-black p-0">
                    <div className="flex-col justify-center items-center text-center ">
                        <div className="flex justify-center p-2">
                            <img
                                src={test2}
                                alt="img"
                                className="w-[400px] h-[220px] object-cover transition-transform transform scale-100 hover:scale-110 hover:opacity-100 hover:brightness-50  hover:grayscale-0 mb-3"
                            />
                        </div>
                        <div className="flex justify-center items-start py-2">
                            <button className="w-[400px]  12 relative flex md:h-10 md:w-56 items-center justify-center overflow-hidden bg-green-950 text-white  ">
                                <span className="relative z-10 p-2 text-xl md:text-lg font-serif">
                                   Hari Kartini
                                </span>
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-center mb-3">
                            Felis sollicitudin urna et dis vestibulum lectus pulvinar
                            vulputate torquent integer nullam
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in"  data-aos-once="true"   data-aos-duration="2000"  className="w-full flex  md:w-[400px] text-black p-0">
                    <div className="flex-col justify-center items-center text-center ">
                        <div className="flex justify-center p-2">
                            <img
                                src={test3}
                                alt="img"
                                className="w-[400px] h-[220px] object-cover transition-transform transform scale-100 hover:scale-110 hover:opacity-100 hover:brightness-50  hover:grayscale-0 mb-3"
                            />
                        </div>
                        <div className="flex justify-center items-start py-2">
                            <button className="w-[400px]  12 relative flex md:h-10 md:w-56 items-center justify-center overflow-hidden bg-green-950 text-white  ">
                                <span className="relative z-10 p-2 text-xl md:text-lg font-serif">
                                   Wali Kelas XI
                                </span>
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-center mb-3">
                            Felis sollicitudin urna et dis vestibulum lectus pulvinar
                            vulputate torquent integer nullam
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in"  data-aos-once="true"   data-aos-duration="2000"  className="w-full flex  md:w-[400px] text-black p-0">
                    <div className="flex-col justify-center items-center text-center ">
                        <div className="flex justify-center p-2">
                            <img
                                src={test4}
                                alt="img"
                                className="w-[400px] h-[220px] object-cover transition-transform transform scale-100 hover:scale-110 hover:opacity-100 hover:brightness-50  hover:grayscale-0 mb-3"
                            />
                        </div>
                        <div className="flex justify-center items-start py-2">
                            <button className="w-[400px]  12 relative flex md:h-10 md:w-56 items-center justify-center overflow-hidden bg-green-950 text-white  ">
                                <span className="relative z-10 p-2 text-xl md:text-lg font-serif">
                                  Birthday
                                </span>
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-center mb-3">
                            Felis sollicitudin urna et dis vestibulum lectus pulvinar
                            vulputate torquent integer nullam
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in"  data-aos-once="true"   data-aos-duration="2000"  className="w-full flex  md:w-[400px] text-black p-0">
                    <div className="flex-col justify-center items-center text-center ">
                        <div className="flex justify-center p-2">
                            <img
                                src={test5}
                                alt="img"
                                className="w-[400px] h-[220px] object-cover transition-transform transform scale-100 hover:scale-110 hover:opacity-100 hover:brightness-50  hover:grayscale-0 mb-3"
                            />
                        </div>
                        <div className="flex justify-center items-start py-2">
                            <button className="w-[400px]  12 relative flex md:h-10 md:w-56 items-center justify-center overflow-hidden bg-green-950 text-white  ">
                                <span className="relative z-10 p-2 text-xl md:text-lg">
                                    Fashion Show
                                </span>
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-center mb-3">
                            Felis sollicitudin urna et dis vestibulum lectus pulvinar
                            vulputate torquent integer nullam
                        </p>
                    </div>
                </div>
                {/* Tambahkan blok serupa untuk setiap kolom */}
            </div>
                
          
            </motion.div>
        </div>
        </Element>
        </div>
     
      
     
    );
};

export default Partner;
