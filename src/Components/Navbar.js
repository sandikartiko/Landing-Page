import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const menuIconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  let links = [
    { id: 1, link: 'BERANDA' },
    { id: 2, link: 'TENTANG KAMI' },
    { id: 4, link: 'KENAPA KAMI' },
    { id: 5, link: 'JURUSAN' },
    { id: 6, link: 'PARTNER' },

  ];

  return (
    <div data-testid="navbar" className="flex mx-auto w-full p-2 bg-green-950">
            <h1 className='text-white place-items-start  p-1 font-serif hidden md:block'>Twelscione.twtf</h1>
      <div className="flex mx-auto mt-2 md:justify-center justify-between  w-full">

        <ul className="hidden md:flex justify-center gap-3">
    
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-7 cursor-pointer font-bold capitalize text-base text-white hover:scale-105 hover:text-orange-500 duration-200 hover:underline-offset-4"
            >
              <Link to={link} smooth duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer">
          <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <FiX size={20} color="white" />
            ) : (
              <FiMenu size={20} color="white" />
            )}
            <motion.div
              variants={menuIconVariants}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
            </motion.div>
          </motion.div>
        </div>

        <motion.ul
          className={`md:hidden flex flex-col w-full ${nav ? 'block' : 'hidden'}`}
          initial="closed"
          animate={nav ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
        >
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              className="p-2 cursor-pointer font-normal text-xs text-white hover:scale-105 hover:text-orange-500 duration-200 hover:underline-offset-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNav(!nav)}
            >
              <Link to={link} smooth duration={1000}>
                {link}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default NavBar;
