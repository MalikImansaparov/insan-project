import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import arr from "../../assets/image/general/menus.svg"

export const DirectionMenu = () => {
    const { t } = useTranslation();

    return (
        <div className="group relative">
            <NavLink to="/direction/1" className={({isActive}) =>
                isActive ? 'hovers menus' : 'menus'}>
                <img src={arr} className='mr-[5px] text-[15px] font-normal' alt='lang'/>
                {t("direction")}
            </NavLink>
            <ul className="absolute hidden group-hover:block z-20">
                <Link to='/direction/1' className="btn-blue mt-[22px]">{t("business")}</Link>
                <Link to='/direction/2' className="btn-blue">{t("medicine")}</Link>
                <Link to='/direction/3' className="btn-blue">{t("sport")}</Link>
                {/*<Link to='/ministry' className="btn-blue">{t("ministry")}</Link>*/}
                {/*<Link to='/policy' className="btn-blue">{t("politics")}</Link>*/}
                {/*<Link to='/projects' className="btn-blue">{t("projects")}</Link>*/}
                {/*<Link to='/contacts' className="btn-blue">{t("contacts")}</Link>*/}
            </ul>
        </div>
    );
};


