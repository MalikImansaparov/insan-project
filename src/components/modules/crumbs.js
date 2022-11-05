import React from "react";
import {useNavigate} from "react-router";
import {useMatchMedia} from "../../hooks/useMatchMedia";

export const Crumbs = (props) => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const navigate = useNavigate()

    return (
        <div className='flex mb-8 font-inter items-center md:mb-0'>
            {props.crumbs.map((crumb, i) => {
                return (
                    <div className='text-lg font-medium text-grey sm:text-base xs:text-sm' key={i}>
                        <div onClick={() => navigate(-1)} className="mx-1.5 md:mx-0.5 cursor-pointer">
                            {crumb}
                        </div>
                    </div>
                );
            })}
            {isDesktop &&
                <span className="ml-1.5 text-lg font-medium sm:text-base xs:text-sm text-grey">{props.title.length > 20 ?
                    props.title.split('').splice(0, 30) : props.title}
                    {props.title.length > 25 && <span> ... </span>}</span>}
            {isTablet &&
                <span className="ml-1.5 text-lg font-medium sm:text-base xs:text-sm text-grey">{props.title.length> 10 ?
                    props.title.split('').splice(0, 15) : props.title}
                    {props.title.length > 25 && <span> ... </span>}</span>}
            {isMobile &&
                <span className="ml-1.5 text-lg sm:text-base xs:text-sm font-medium text-grey hidden">{props.title.length> 10 ?
                    props.title.split('').splice(0, 20) : props.title}
                    {props.title.length > 25 && <span> ... </span>}</span>}
        </div>
    );
};