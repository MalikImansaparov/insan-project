import React, { useEffect, useRef, useState } from 'react';
import {b, base, eventsUrl, mainUrl, uri, url} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Sanitized } from '../general/sanitize';
import dots from '../../assets/image/main/Ellipse 1.png';
import { Link } from 'react-router-dom';
import pattern from '../../assets/image/main/Looper-1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Enroll = () => {
  const swiperRef = useRef();
  const { isLoading  } = useFetch(base + eventsUrl + '/events/src/insan/');
  const [response, setResponse] = useState([])
  const {t,i18n} = useTranslation()

  const getSliders = async () => {
    const res = await axios.get(base + eventsUrl + '/events/src/insan/')
    setResponse(res.data.results)
  }

  useEffect(() => {
    getSliders()
  },[])

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
      <div className="container m-auto relative mb-[62px] z-10">
          <div className="flex wrapper justify-between">
              <p className="text-blue text-lg font-semibold ml-2">{t('events')}</p>
              <Link to="/events" className="all-view mr-2 sm:mr-8">
                  {t('all')}
              </Link>
          </div>
      <div className="w-[100%] max-h-[320px]">
        <div className="relative">
          <div className="bg-gradient-enroll w-full h-[216px] m-auto justify-center absolute top-[25px] 2md:h-[180px] 2md:top-[10px]">
            <img src={pattern} alt="" className="absolute top-0 left-[25px] 2md:h-[180px]"/>
          </div>
          <div className="max-w-[1032px] m-auto flex bg-enroll shadow-enroll rounded pl-[42px]
             my-[62px] left-[12%] 2lg:max-w-[900px] 2md:pl-[20px] 2md:max-w-[760px] 2md:max-h-[300px] 1sm:h-[200px]" >
            <Swiper
                hashNavigation={{
                  watchState: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                speed={800}
                grabCursor={true}
                navigation={{
                  nextEl: '.banner-next',
                  prevEl: '.banner-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              {response &&
                  response.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="h-[100%] w-[100%] flex justify-between">
                          <div className="mt-[35px] max-w-[815px] m-auto">
                            <div className="max-w-[561px]">
                              {i18n.language === 'ky' && (
                                  <>
                                    <p className="text-[22px] text-semibold text-white max-w-[461px] mb-[18px] 2md:text-[18px] sm:text-[16px] sm:mb-[0px] text-bold h-[58px] overflow-hidden">
                                      <Sanitized
                                          html={
                                            item.title_ky.length > 62
                                                ? item.title_ky.slice(0, 62) + '...'
                                                : item.title_ky
                                          }
                                      />
                                    </p>
                                    <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px] 2md:text-[14px] sm:text-[12px]">
                                      <Sanitized html={item.desc_ky} />
                                    </p>
                                  </>
                              )}
                              {i18n.language === 'ru' && (
                                  <>
                                    <p className="text-[22px] text-semibold text-white max-w-[461px] mb-[18px] 2md:text-[18px] sm:text-[16px] sm:mb-[0px] text-bold h-[58px] overflow-hidden">
                                      <Sanitized
                                          html={
                                            item.title_ru.length > 62
                                                ? item.title_ru.slice(0, 62) + '...'
                                                : item.title_ru
                                          }
                                      />
                                    </p>
                                    <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px] 2md:text-[14px] sm:text-[12px]">
                                      <Sanitized html={item.desc_ru} />
                                    </p>
                                  </>
                              )}
                              {i18n.language === 'en' && (
                                  <>
                                    <p className="text-[22px] text-semibold text-white max-w-[461px] mb-[18px] 2md:text-[18px] sm:text-[16px] sm:mb-[0px] text-bold h-[58px] overflow-hidden">
                                      <Sanitized
                                          html={
                                            item.title_en.length > 62
                                                ? item.title_en.slice(0, 62) + '...'
                                                : item.title_en
                                          }
                                      />
                                    </p>
                                    <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px] 2md:text-[14px] sm:text-[12px]">
                                      <Sanitized html={item.desc_en} />
                                    </p>
                                  </>
                              )}
                              <div className="flex mt-8 justify-between 2md:mt-4 sm:mt-2">
                                <p className="text-grey flex 2md:text-[14px] items-center">
                                  <img
                                      src={dots}
                                      className="mr-[10px] w-[8px] h-[8px]"
                                      alt="dots"
                                  />
                                  <span>{t('date')}</span>
                                  <span className="text-black">
                            &nbsp;
                                    {item.event_date.split('-').reverse().join('-')}
                          </span>
                                </p>
                                <Link
                                    to={`events/${item.id}`}
                                    className="btn pointer-events-auto mr-8 2md:text-[14px]"
                                >
                                  {t('more')}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="max-w-[416px] max-h-[264px] items-end overflow-hidden rounded-t 2md:max-w-[316px] 2md:max-h-[200px] 1sm:hidden">
                            <img
                                src={uri + item.preview_image}
                                alt="person"
                                className="h-auto w-[100%]"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
            </Swiper>
            <div
                className="prev absolute top-[129px] left-[120px] xl:left-[20px] ml-[0px] z-1000 2md:top-[90px] 1md:hidden"
                onClick={() => swiperRef.current.slidePrev()}
            ></div>
            <div
                className="next absolute top-[129px] right-[120px] xl:right-[20px] mr-[0px] z-1000 2md:top-[90px] 1md:hidden"
                onClick={() => swiperRef.current.slideNext()}
            ></div>
          </div>
        </div>
      </div>
      </div>
  );
};

