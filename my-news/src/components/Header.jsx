import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { images } from '../constants';
import '../../src/App.css';

const navItemsInfo = [
  { name: 'Home', type: 'link' },
  { name: 'Latest', type: 'link' },
  { name: 'Articals', type: 'link' },
  {
    name: 'Pages',
    type: 'dropdown',
    items: ['Politics', 'Cinemetics', 'Beauty'],
  },
  { name: 'Pricing', type: 'link' },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <li className="relative group">
      {item.type === 'link' ? (
        <>
          <a href="/" className="px-4">
            {item.name}
          </a>
          {/* <span className=" cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 -left-0 top-5 group-hover:right[90%] opacity-0 group-hover:opacity-100">
            🎤
          </span> */}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 flex gap-x-1 item-center"
            onClick={toggleDropdownHandler}
          >
            <span> {item.name}</span>
            <span className="pt-1">
              <MdKeyboardArrowDown />
            </span>
          </button>
          <div className="lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:transform lg:translate-y-full lg:group-hover:block lg:right-0 w-max">
            {dropdown && (
              <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                {item.items.map((page, index) => (
                  <li className="bg-dark-soft text-white">
                    <a
                      key={index}
                      href="/"
                      className=" hover:text-dark-hard px-4 py-2 text-white text-center"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navIsVisibilityHandler = () => {
    setNavIsVisible(!navIsVisible);
  };

  return (
    <section className="bg-slate-500 sticky top-0 left-0 right-0 z-50 ">
      <header className="container mx-auto px-5 flex justify-between  items-center py-5 ">
        <div>
          <img className="w-20" src={images.Logo} alt="logo" />
        </div>

        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navIsVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className="w-6 h-6"
              onClick={navIsVisibilityHandler}
            />
          )}
        </div>

        <div
          className={`${
            navIsVisible ? 'block' : 'hidden'
          } navbar mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-49 flex flex-col  w-full lg:w-auto items-center justify-center lg:justify-end lg:flex-row fixed lg:static top-0 bottom-0  gap-x-9 `}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark flex flex-col lg:flex-row gap-x-5 font-medium text-xl ">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            <button className="mt-5 lg:mt-0 border-blur-500 flex h-10 rounded-full px-6 py-1 font-medium lg:text-black text-blue-500 lg:border-black border-blue-500  border-2 hover:bg-black hover:text-white lg:hover:bg-black transition-all duration-300">
              Sign in
            </button>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
// ${dropdown ? 'block' : 'hidden'}
