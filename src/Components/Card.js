import React from "react";

import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Card = () => {
  return (
    <div data-testid="card">
       <div name="KENAPA KAMI" className=" mt-4 w-[90%] gap-[30px] mx-auto p-4 md:mt-14">
      <div data-aos="fade-down" data-aos-once="true"  className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brown font-serif">
          Kenapa Memilih Kami ?
        </h2>
        <div className="border-b-2 border-brown w-72 pt-5"></div>
      </div>
      <div className=" py-3 gap-3 flex flex-wrap md:flex md:flex-nowrap  md:gap-4 justify-center md:mt-9 ">
        <div data-aos="flip-left" data-aos-duration="2000"  data-aos-once="true"  className="w-full flex  md:w-[320px] bg-brown text-white p-4 ">
          <div   className="flex-col justify-center text-center">
            <div className="flex justify-center">
          
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-14 h-14"><path fill="#ffffff" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            </div>
            <p>Edukasi Terbaik</p>
            <p className="text-sm text-center">
             

            "Prestasi Unggul, Pendidikan Terbaik, Membentuk Generasi Pemimpin Masa Depan."
            </p>
          </div>
        </div>
        <div  data-aos="flip-left" data-aos-duration="2000"  data-aos-once="true"  className=" w-full flex  md:w-[300px] bg-brown text-white p-4">
          <div className="flex-col justify-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 h-14"><path fill="#ffffff" d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
            </div>
            <p>SMA Unggul</p>
            <p className="text-sm text-center">
            
"SMA Terbaik dengan Membentuk Masa Depan Unggul dengan Pendidikan Berkualitas dan Karakter Tangguh."
            </p>
          </div>
        </div>
        <div  data-aos="flip-left" data-aos-duration="2000"  data-aos-once="true"  className="w-full flex  md:w-[320px]  bg-brown text-white p-4">
          <div className="flex-col justify-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-14 h-14"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
            </div>
            <p>SMA Modern</p>
            <p className="text-sm text-center">
            "Belanja Tanpa Batas, Transaksi Tanpa Tunai. Kepraktisan Kartu Menuju Generasi Tanpa Uang Tunai."
            </p>
          </div>
        </div>
      
        <div  data-aos="flip-left" data-aos-duration="2000"  data-aos-once="true"  className="w-full flex  md:w-[320px]  bg-brown text-white p-4">
          <div className="flex-col justify-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-14 h-14"><path fill="#ffffff" d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>
            </div>
            <p>SMA Hijau</p>
            <p className="text-sm text-center">
            "SMA Kami Nyaman, Bersih, dan Terkenal. Membangun Prestasi dengan Lingkungan Belajar yang Berkualitas dan Berkarakter."
            </p>
          </div>
        </div>
        
        <div  data-aos="flip-left"  data-aos-once="true" data-aos-duration="2000"   className="w-full flex md:w-[320px]  bg-brown text-white p-4">
          <div className="flex-col justify-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-14 h-14"><path fill="#ffffff" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            </div>
            <p>SMA Juara</p>
            <p className="text-sm text-center">
            "SMA Unggul Dengan Menuai Prestasi, Mengukir Sejarah, Trophy Adalah Bukti Perjuangan Kami."
            </p>
          </div>
        </div>
        {/* Tambahkan blok serupa untuk setiap kolom */}
      </div>
    </div>
    </div>
   
  );
};

export default Card;
