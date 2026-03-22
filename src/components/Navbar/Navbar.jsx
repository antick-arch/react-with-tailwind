import React, { useState } from 'react';
import Navlink from './Navlink';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "#home"
    },
    {
      id: 2,
      name: "About",
      link: "#about"
    },
    {
      id: 3,
      name: "Services",
      link: "#services"
    },
    {
      id: 4,
      name: "Projects",
      link: "#projects"
    },
    {
      id: 5,
      name: "Blog",
      link: "#blog"
    },
    {
      id: 6,
      name: "Contact",
      link: "#contact"
    }
  ];
  const links = navItems.map(NavMenu => (
    <Navlink key={NavMenu.id} NavMenu={NavMenu}></Navlink>
  ))

  return (
    <nav className='flex justify-between mx-3 mt-4'>
      <span onClick={() => setOpen(!Open)} className='flex items-center'>

        {
          Open ? <X className='md:hidden' /> : <Menu className='md:hidden' />
        }
        <ul className={`md:hidden absolute ${Open? 'top-13':'-top-68'} bg-blue-300 duration-1000`}>
          {links}
        </ul>
        <h2 className='text-2xl font-extrabold'>TESTLOGO</h2>
      </span>

      <ul className='hidden md:flex gap-7 items-center'>
        {links}
      </ul>

      <button className='btn'>Explore More</button>
    </nav>
  );
};

export default Navbar;