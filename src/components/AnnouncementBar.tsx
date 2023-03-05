
import React from 'react';

import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter, FaInstagram , FaDiscord } from 'react-icons/fa';

const AnnouncementBar = () => {

  return (
    <div className="bg-black/50 flex items-center justify-between backdrop-blur-md h-10 text-center z-50 text-white">
      
      <div className="flex items-center mx-10">
        <h1 className="text-lg font-bold z-50">Announcement </h1>
        <p className="text-sm ml-2 announcement -z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
     

      <div className="lg:flex hidden items-center justify-center space-x-6 mr-10">
        <a href="https://t.me/metaverseclub" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaTelegram /></a>
        <a href="https://twitter.com/metaverseclub" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaTwitter /></a>
        <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaInstagram /></a>
        <a href="https://www.facebook.com/metaverseclub" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaFacebook /></a>
        <a href="https://d" target="_blank" rel="noreferrer" className="text-3xl text-white hover:text-blue-500"><FaDiscord /></a>
      </div>

    </div>
  );
};

export default AnnouncementBar;
