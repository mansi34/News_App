import React from 'react';
import { images } from '../constants';
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillHeart,
} from 'react-icons/ai';
import { BsTelegram, BsFacebook } from 'react-icons/bs';
const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto px-5 py-10 gap-y-10 gap-x-25 ">
        <div className="md:order-first lg:pb-10 pt-0">
          <img
            src={images.Logo}
            className="w-20 mx-auto mt-5 "
            alt="logo"
          />
          <p className="text-sm text-dark-light text-center mt-4  md:text-base">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsFacebook className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-evenly ">
          <div className="sm:text-base md:text-lg text-xl">
            <h3 className="text-dark-light font-bold">Product</h3>
            <ul className="text-[#959EAD] text-sm space-y-4">
              <li>
                <a href="/">Landingpage</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Referral Program</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="sm:text-base md:text-lg text-xl">
            <h3 className="text-dark-light font-bold">Services</h3>
            <ul className="text-[#959EAD] text-sm space-y-4">
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
              <li>
                <a href="/">Themes</a>
              </li>
              <li>
                <a href="/">Illustrations</a>
              </li>
              <li>
                <a href="/">UI Kit</a>
              </li>
            </ul>
          </div>
          <div className="sm:text-base md:text-lg text-xl">
            <h3 className="text-dark-light font-bold">Company</h3>
            <ul className="text-[#959EAD] text-sm space-y-4">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="sm:text-base md:text-lg text-xl">
            <h3 className="text-dark-light font-bold">More</h3>
            <ul className="text-[#959EAD] text-sm space-y-4">
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">License</a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12">
          <div className="bg-blue-400 text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            copyright © 2023. Crafted with HardWork.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
