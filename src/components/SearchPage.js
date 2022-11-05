import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ClipLoader} from "react-spinners";

const SearchPage = () => {
    const {t, i18n} = useTranslation()
    const items = useSelector(state => state.search.data)
    const isEmpty = useSelector((state) => state.search.isEmpty);

    if (!items) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <div className="wrapper py-[62px] font-inter sm:py-[48px] xs:py-[24px] h-[100vh]">
            {isEmpty && (
                <div className="flex w-[1236px] m-auto shadow-md rounded px-8 my-8 bg-white">
                    <p className="my-16 text-[20px]">{t('notFound')}</p>
                </div>
            )}
            {items &&
                    <div
                        className=" w-[1236px] shadow-md rounded px-8 mb-8 bg-white 3xs:px-4 2xs:px-2"
                    >
                                {items.story && items.story.length > 0 && <p className="font-medium mt-4">{t('history')}<span className="ml-1">({items.story.length})</span></p>}
                                   { items.story && items.story.map((item, idx) => (
                                       <div key={idx} className="mb-4 ">
                                           {i18n.language === 'ky' &&
                                        <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                            {item.title_ky}
                                        </div>}
                                           {i18n.language === 'ru' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                   {item.title_ru}
                                               </div>}
                                           {i18n.language === 'en' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                   {item.title_en}
                                               </div>}
                                       </div>
                                    ))}
                                {items.prominent && items.prominent.length > 0 && <p className=" font-medium mt-4">{t('people')}<span className="ml-1">({items.prominent.length})</span></p>}
                                { items.prominent && items.prominent.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2  font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2  font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.generation && items.generation.length > 0 && <p className=" font-medium mt-4">{t('generation')}<span className="ml-1">({items.generation.length})</span></p>}
                                { items.generation &&  items.generation.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-2 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                    </div>
                }
        </div>
    );
};

export default SearchPage;




