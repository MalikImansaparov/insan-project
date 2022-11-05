import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";
import {newsUrl, base, api} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {ImagesSlider} from "../../components/general/photoSlider";
import {Sanitized} from "../../components/general/sanitize";
import ShareSocial from "../../components/general/share-social";
import {BreadCrumbs} from "../../components/modules/breadcrumbs";

const DetailStory = () => {
    window.scroll(0,0)
    const {id} = useParams()
    const { isLoading, response } = useFetch( api + `/story/1/`);
    const {t, i18n} = useTranslation()

    const crumb = [
        t("history"),
        '❯',
    ]

    const [crumbs, setCrumbs] = useState(crumb);
    const crumbSet = () => {
        setCrumbs(crumb)
    }
    useEffect(() => {
        crumbSet()
    }, [i18n.language]);


    if (isLoading) {
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
        <div className="wrapper w-full font-inter relative mb-[63px] text-justify">
            <div className='h-[212px] w-[47%] absolute top-[170px] left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl xl:hidden'></div>
            {response && <>
                {i18n.language === "ky" &&
                    <div className="wrapper">
                        <div className="container mb-8 mt-16 md:mt-8">
                            <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
                        </div>
                        <div className='mb-8'>
                            <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] xl:mr-[32px]">
                                <ImagesSlider images={response.general_story}/>
                            </div>
                            <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">{response.title_ky}</p>
                            <Sanitized html={response.desc_ky}/>
                        </div>
                    </div>}
                {i18n.language === "ru" &&
                    <div className="wrapper">
                        <div className="container mb-8 mt-16">
                            <BreadCrumbs crumbs={crumbs} title={response.title_ru}/>
                        </div>
                        <div className='mb-8'>
                            <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] xl:mr-[32px]">
                                <ImagesSlider images={response.general_story}/>
                            </div>
                            <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">{response.title_ru}</p>
                            <Sanitized html={response.desc_ru}/>
                        </div>
                    </div>}
            </>}
            {i18n.language === "en" &&
                <div className="wrapper">
                    <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} title={response.title_en}/>
                    </div>
                    <div className='mb-8'>
                        <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] xl:mr-[32px]">
                            <ImagesSlider images={response.general_story}/>
                        </div>
                        <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">{response.title_en}</p>
                        <Sanitized html={response.desc_en}/>
                    </div>
                </div>}
            <div className="block mb-8">
                <p className="mb-2">{t("share")}</p>
                <ShareSocial/>
            </div>
        </div>
    );
};

export default DetailStory;