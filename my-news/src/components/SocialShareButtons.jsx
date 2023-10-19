import React from 'react';
import {
  FaFacebook,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a target="blank" rel="noreferrer" href="/">
        <FaFacebook className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a target="blank" rel="noreferrer" href="/">
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a target="blank" rel="noreferrer" href="/">
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a target="blank" rel="noreferrer" href="/">
        <FaWhatsapp className="text-[#25D366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
