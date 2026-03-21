import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
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
    return (
        <nav className='flex justify-between mx-3'>
            <h2 className='text-2xl font-extrabold'>TESTLOGO</h2>
            <ul className='flex gap-7'>
                {
                    navItems.map(NavMenu => (
                        <Navlink NavMenu = {NavMenu}></Navlink>
                    ))
                }
            </ul>
            <button className='btn'>Explore More</button>
        </nav>
    );
};

export default Navbar;