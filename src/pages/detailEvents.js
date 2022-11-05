import React, {useEffect, useState} from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useFetch} from "../api/useFetch";
import {aboutUrl, base, eventsUrl, uri} from "../api/const";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";
import {ClipLoader} from "react-spinners";
import ShareSocial from "../components/general/share-social";
import {ImagesSlider} from "../components/general/photoSlider";

const DetailEvents = () => {
  window.scroll(0,0)
  const {id} = useParams()
  const { isLoading, response } = useFetch(base + eventsUrl + `/events/${id}/`);
  const {t, i18n} = useTranslation()

  const crumb = [
    t("events"),
    '❯',
    t("allEvents"),
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
      <div className="wrapper w-full relative h-auto font-inter text-justify">
        <div className='h-[212px] w-[47%] absolute top-[173px] left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl xl:hidden'></div>
        {response && <>
          {i18n.language === "ky" &&
              <div className="wrapper">
                <div className="container mb-8 mt-16 md:mt-8">
                  <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
                </div>
                <div className='mb-8'>
                  <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] xl:mr-[32px]">
                    <ImagesSlider images={response.events_slider}/>
                  </div>
                  <p className="mb-6 font-semibold text-[18px] lg:text-[18px] 3md:text-[16px] sm:mt-2">{response.title_ky}</p>
                  <Sanitized html={response.desc_ky}/>
                  <p className="text-grey mt-8 flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    <span>{t('date')}</span><span className='text-black '>&nbsp;{response.event_date.split('-').reverse().join('-')}</span>
                  </p>
                  <p className="text-grey flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    {t('location')}<span className='text-black'>&nbsp;{response.location_ky}</span>
                  </p>
                </div>
              </div>}
          {i18n.language === "ru" &&
              <div className="wrapper">
                <div className="container mb-8 mt-16">
                  <BreadCrumbs crumbs={crumbs} title={response.title_ru} />
                </div>
                <div className='mb-8'>
                  <div className="w-[432px] mr-[72px] mb-2 z-10 overflow-hidden float-left">
                    <ImagesSlider images={response.events_slider}/>
                  </div>
                  <p className="mb-6 font-semibold text-[18px]">{response.title_ru}</p>
                  <Sanitized html={response.desc_ru}/>
                  <p className="text-grey mt-8 flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    <span>{t('date')}</span><span className='text-black '>&nbsp;{response.event_date.split('-').reverse().join('-')}</span>
                  </p>
                  <p className="text-grey flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    {t('location')}<span className='text-black'>&nbsp;{response.location_ru}</span>
                  </p>
                </div>
              </div>}
          {i18n.language === "en" &&
              <div className="wrapper">
                <div className="container mb-8 mt-16">
                  <BreadCrumbs crumbs={crumbs} title={response.title_ky}/>
                </div>
                <div className='mb-8'>
                  <div className="w-[432px] mr-[72px] mb-2 z-10 overflow-hidden float-left">
                    <ImagesSlider images={response.events_slider}/>
                  </div>
                  <p className="mb-6 font-semibold text-[18px]">{response.title_ky}</p>
                  <Sanitized html={response.desc_ky}/>
                  <p className="text-grey mt-8 flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    <span>{t('date')}</span><span className='text-black '>&nbsp;{response.event_date.split('-').reverse().join('-')}</span>
                  </p>
                  <p className="text-grey flex">
                    <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                    {t('location')}<span className='text-black'>&nbsp;{response.location_ky}</span>
                  </p>
                </div>
              </div>}
          <div className="block mb-8">
            <p className="mb-2">{t("share")}</p>
            <ShareSocial/>
          </div>
        </>}
      </div>
  );
};

export default DetailEvents;