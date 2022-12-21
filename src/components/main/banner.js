import React, { useEffect, useRef, useState } from 'react';
import {api,  uri} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import pattern from '../../assets/image/Group 3667 (1).png';
import {Sanitized} from "../general/sanitize";

const Banner = () => {
    const swiperRef = useRef();
    const { isLoading, response } = useFetch(api + '/slider/');
    const { i18n } = useTranslation();


    if (isLoading) {
        return (
            <div role="status" className="flex justify-center my-28 pb-24">
                <ClipLoader color="#1985A1" size={300} />
            </div>
        );
    }

    return (
      <div className="relative">
        <Swiper
          hashNavigation={{
            watchState: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          slidesPerView={1}
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
                <div className="flex flex-wrap justify-center items-center w-full h-[481px] md:h-[430px] 3xs:h-[400px] 3sm:h-[370px] xs:h-[350px] bg-arrow">
                  <img
                    src={pattern}
                    alt=""
                    className="w-full h-[481px] object-cover bg-no-repeat absolute right-0 top-0 z-10"
                  />
                  <div
                    className="h-[481px] max-w-[850px] md:h-[1280px]
                                1xs:h-[1400px] overflow-hidden absolute left-0 top-0 3xs:top-8 1sm:top-5 1xs:top-10 xs:top-12 2xs:top-16 xs:top-18"
                  >
                    <img
                      src={uri + item.background_image}
                      alt=""
                      className="w-[100%] h-auto bg-no-repeat xs:h-350px"
                    />
                  </div>
                  <div
                    className="container max-w-[1236px] m-auto h-[481px] md:h-[400px] text-white bg-gradient-banner opacity-[100%] absolute top-0 left-0 right-0 flex 3sm:h-[300px]
                                items-center z-10 xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
                  >
                    {i18n.language === 'ky' && (
                      <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                        <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px] 2xs:text-[14px] 2xs:font-normal">
                          <Sanitized html={item.title_ky} />
                        </p>
                        <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px] 2xs:text-[12px]">
                          <Sanitized html={item.subtitle_ky} />
                        </p>
                      </div>
                    )}
                    {i18n.language === 'ru' && (
                      <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                        <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px] 2xs:text-[14px] 2xs:font-normal">
                          <Sanitized html={item.title_ru} />
                        </p>
                        <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px] 2xs:text-[12px]">
                          <Sanitized html={item.subtitle_ru} />
                        </p>
                      </div>
                    )}
                    {i18n.language === 'en' && (
                      <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                        <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px] 2xs:text-[14px] 2xs:font-normal">
                          <Sanitized html={item.title_en} />
                        </p>
                        <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px] 2xs:text-[12px]">
                          <Sanitized html={item.subtitle_en} />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          className="banner-prev absolute top-[200px] left-[20px] 1md:top-[360px] 1sm:top-[300px] 1md:left-[150px] 3sm:top-[260px]"
          onClick={() => swiperRef.current.slidePrev()}
        ></div>
        <div
          className="banner-next absolute top-[200px] right-[25px] 1md:top-[360px] 1sm:top-[300px] 1md:right-[150px] 3sm:top-[260px]"
          onClick={() => swiperRef.current.slideNext()}
        ></div>
      </div>
    );
};

export default Banner;





