import React, { Component, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import search from '../../assets/image/main/search-icon.png';
import Social from './social';
import close from '../../assets/image/main/close.png';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Language } from './Language';
import logo from '../../assets/header/Frame 5051.svg';
import burger from "../../assets/image/general/icons8-menu-48.png";
import closes from "../../assets/image/general/icons8-close-48.png";
import arr from "../../assets/image/general/chevron-down.png";
import arr2 from "../../assets/image/general/chevron-up (1).png";
import {asyncSearch} from "../../store/asyncAction";
import {useDispatch} from "react-redux";
import {DirectionMenu} from "../main/direction";

const Menu = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false);
  const [openBurger, setOpenBurger] = useState(false)
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showProject, setIsProject] = useState(false);

  const toggleAccordion = () => {setShow(!show);};
  const toggleArrow = () => {setArrow(!arrow);};
  const switchAccordion = () => {setIsShow(!isShow);};
  const changeAccordion = () => {setIsProject(!showProject);};
  const toggleMenu = () => { setOpenBurger(!openBurger)}
  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleChange = (val) => {
    navigate('/search')
    dispatch(asyncSearch(val))
  }

  return (
    <div className="relative mb-0">
      {!openModal ? (
        <div className="bg-[#F6CD49]">
          <div className="wrapper h-[78px] flex justify-between items-center font-inter cursor-pointer">
            <img src={logo} className="lg:hidden" alt="kelechek" onClick={() => navigate('/')} />
            <div
                className="hidden lg:block cursor-pointer"
                onClick={toggleMenu}
            >
              {openBurger ? (
                  <img src={closes} alt="close" />
              ) : (
                  <img src={burger} alt="open" />
              )}
            </div>
            <div className="flex w-[55%] pt-2 align-middle text-white justify-between 3lg:hidden">
              <NavLink to=""
                  className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}
                  onClick={() => window.open('https://jashtar.info/')}
              >
                {t('about')}
              </NavLink>
              <NavLink to="/story" className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}>
                {t('history')}
              </NavLink>
              <NavLink to="/prominent" className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}>
                {t('people')}
              </NavLink>
              <NavLink to="/generation" className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}>
                {t('generation')}
              </NavLink>
              <DirectionMenu/>
            </div>
            <div className="flex justify-between w-[25%] pt-2 lg:w-[30%] 2md:w-[35%] xs:w-[60%] 1sm:w-[50%] 2xs:w-[70%]">
              <Language/>
              <img
                  src={search}
                  alt="search"
                  className="w-[20px] h-[20px] cursor-pointer"
                  onClick={toggleModal}
              />
              <Social />
            </div>
          </div>
        </div>
      ) : (
          <div className="w-full h-[78px] bg-blueLight z-10">
            <div className="wrapper py-[22px] px-2 ">
              <input
                  type="text"
                  autoFocus={true}
                  className="bg-blueLight border-none outline-none w-[98.5%] h-[24px] font-medium text-[15px] 2md:w-[96.5%] xs:2md:w-[94.5%]"
                  placeholder="Поиск"
                  onKeyDown={(e) =>
                      e.key === 'Enter' && handleChange(e.target.value)
                  }
              />
              <img
                  src={close}
                  alt="close"
                  className="py-2 cursor-pointer"
                  onClick={toggleModal}
              />
            </div>
          </div>
      )}
      { openBurger &&
          <div className="w-full max-h-auto bg-[#f3c221]">
            <div className="wrapper">
              <div className="pb-2">
              <div onClick={toggleMenu}>
                <NavLink to="/" className="menu-list ml-8">
                  {t('home')}
                </NavLink>
                <div
                    className="menu-list"
                    onClick={() => window.open('https://jashtar.info/')}
                >
                  {t('about')}
                </div>
                <NavLink to="/news" className="menu-list">
                  {t('news')}
                </NavLink>
                <NavLink to="/events" className="menu-list">
                  {t('events')}
                </NavLink>
                <NavLink to="/story" className="menu-list">
                  {t('history')}
                </NavLink>
                <NavLink to="/prominent" className="menu-list">
                  {t('people')}
                </NavLink>
                <NavLink to="/generation" className="menu-list">
                  {t('generation')}
                </NavLink>
              </div>
              <div className="flex" active={arrow ? arrow : false} onClick={toggleAccordion}>
                <div>
                  {show ? <img src={arr2} className='mr-[5px]' alt='lang'/> : <img src={arr} className='mr-[5px]' alt='lang'/> }
                </div>
                <div className="block text-white text-base font-semibold whitespace-nowrap ">{t("direction")}</div>
              </div>
              {show && (
                  <div className="ml-[10px]" onClick={toggleMenu}>
                    <Link to='/business' className="drop-list" >{t("business")}</Link>
                    <Link to='/medicine' className="drop-list">{t("medicine")}</Link>
                    <Link to='/sport' className="drop-list">{t("sport")}</Link>
                  </div>
              )}
            </div>
            </div>
          </div>
      }
    </div>
  );
};

export default Menu;
