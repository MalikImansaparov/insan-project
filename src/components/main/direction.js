import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import arr from '../../assets/image/general/icons8.png';

export const DirectionMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      <NavLink
        to="/direction/1"
        className={({ isActive }) =>
          isActive ? 'hovers menus font-bold ' : 'menus font-bold'
        }
      >
        <img src={arr} className="mr-[5px] w-[13px] h-[13px] mt-1" alt="lang" />
        <span className="font-bold text-[15px]">{t('direction')}</span>
      </NavLink>
      <ul className="absolute hidden group-hover:block z-20">
        <Link to="/direction/1" className="btn-blue mt-[22px] text-[#403e3e] ">
          {t('business')}
        </Link>
        <Link to="/direction/2" className="btn-blue text-[#403e3e] ">
          {t('medicine')}
        </Link>
        <Link to="/direction/3" className="btn-blue text-[#403e3e] ">
          {t('sport')}
        </Link>
      </ul>
    </div>
  );
};


