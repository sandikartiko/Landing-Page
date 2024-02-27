import React from 'react';
import ipa from "../assets/ipa.jpeg";
import ips from "../assets/ips.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Jurusan = () => {
    return (
        <div data-testid="jurusan">
            <div name="JURUSAN" className=" mt-4 w-[90%] gap-[30px] mx-auto p-4 md:mt-9">
                <div data-aos="fade-down" data-aos-once="true"  className="flex flex-col justify-center items-center">
                    <h2 className=" text-2xl md:text-2xl font-bold text-brown font-serif">
                        Program Studi
                    </h2>
                     <div className="border-b-2 border-brown w-40 pt-3"></div>
                </div>
                <div className="  py-3 gap-0 flex flex-wrap md:gap-48 justify-center md:mt-9 ">
                    <div data-aos="fade-right" data-aos-duration="2000"  data-aos-once="true"  className="w-full flex justify-center md:w-[400px]  text-black p-4">
                        <div className="flex-col justify-center text-center">
                            <div className="flex justify-center">
                                <img
                                    src={ipa}
                                    alt="img"
                                    className="w-20 h-20 bg-green-900 rounded-full mb-3 hover:bg-green-700 transition-transform transform scale-100 hover:scale-110 hover:duration-75"
                                />
                            </div>
                            <p className='  font-bold text-xl md:font-bold text-brown'>IPA</p>
                            <p className=" text-base md:text-xs text-center font-semibold md:font-bold">

                                "Sains dan Pengetahuan, Melangkah Bersama Menuju Masa Depan Terang."
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000"  data-aos-once="true"  className="w-full flex justify-center md:w-[400px]  text-black p-4">
                        <div className="flex-col justify-center text-center">
                            <div className="flex justify-center">
                                <img
                                    src={ips}
                                    alt="img"
                                    className="w-20 h-20 bg-green-900 rounded-full mb-3 hover:bg-green-700 transition-transform transform scale-100 hover:scale-110 hover:duration-75"
                                />
                            </div>
                            <p className='  font-bold text-xl md:font-bold text-brown'>IPS</p>
                            <p className=" text-base md:text-xs text-center font-semibold md:font-bold">
                            "Menyelami Dunia Pengetahuan Sosial, Membentuk Visi Kemanusiaan."
                            </p>
                        </div>
                    </div>


                    {/* Tambahkan blok serupa untuk setiap kolom */}
                </div>
            </div>
        </div>

    );
};
export default Jurusan