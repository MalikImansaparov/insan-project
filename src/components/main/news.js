import { useFetch } from '../../api/useFetch';
import {base, mainUrl, newsUrl, uri, url} from '../../api/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sanitized } from '../general/sanitize';
import {settings} from "../slider/settings";
import { api } from '../../api/const';

export const News = () => {
  const { response } = useFetch(api + '/articles/');
  const { t, i18n } = useTranslation();

  return (
    <div className="container m-auto max-w-[1236px] pt-[62px] relative mb-[62px] z-10">
      <div className="flex wrapper justify-between mb-0">
        <p className="title ml-2">{t('news')}</p>
        <Link to="/news" className="text-blue text-sm font-medium mr-2">
          {t('all')}
        </Link>
      </div>
      <div className="flex justify-center flex-wrap wrapper">
        {response &&
          response
            .reverse()
            .slice(0, 6)
            .map((item) => (
              <Link
                to={`${item.source}/${item.id}`}
                className="block mb-12 w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
              >
                <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                  <img
                    src={uri + '/media/' + item.preview_image}
                    alt="cart-img"
                    className="h-auto w-[100%] rounded-t"
                  />
                </div>
                <div className="px-2.5">
                  {i18n.language === 'ky' && (
                    <>
                      <p className="text-base mb-3 mt-2 font-semibold w-[100%] h-[38px] text-black overflow-hidden leading-[19px]">
                        {item.title_ky.length > 60
                          ? item.title_ky.slice(0, 60) + '...'
                          : item.title_ky}
                      </p>
                      <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                        <Sanitized html={item.desc_ky} />
                      </p>
                    </>
                  )}
                  {i18n.language === 'ru' && (
                    <>
                      <p className="text-base mb-3 mt-2 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                        {item.title_ru.length > 60
                          ? item.title_ru.slice(0, 60) + '...'
                          : item.title_ru}
                      </p>
                      <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                        <Sanitized html={item.desc_ru} />
                      </p>
                    </>
                  )}
                  {i18n.language === 'en' && (
                    <>
                      <p className="text-base mb-3 mt-2 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                        {item.title_en.length > 60
                          ? item.title_en.slice(0, 60) + '...'
                          : item.title_en}
                      </p>
                      <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                        <Sanitized html={item.desc_en} />
                      </p>
                    </>
                  )}
                  <div className="flex justify-between w-[100%] mt-4">
                    <p className="text-sm font-medium text-grey">
                      {item.pub_date.split('-').reverse().join('-')}
                    </p>
                    <div className="text-blue underline cursor-pointer text-sm">
                      {t('more')}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};