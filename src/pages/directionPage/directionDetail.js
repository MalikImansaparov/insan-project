import {Sanitized} from "../../components/general/sanitize";
import {useTranslation} from "react-i18next";
import { api, base, newsUrl, uri} from "../../api/const";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {asyncHeaders} from "../../store/asyncAction";
import { BreadCrumb } from '../../components/general/breadcrumb';

export const DirectionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const response = useSelector((state) => state.search.headers);
  const [respond, setRespond] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const limit = 9;

  const getData = async () => {
    const res = await fetch(`${api}/direction/type/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword: id }),
    });
    const data = await res.json();
    setpageCount(Math.ceil(data.count / limit));
    setRespond(data);
  };

  console.log(id);

  useEffect(() => {
    dispatch(asyncHeaders());
    getData();
  }, [id]);

  const paginateData = async (count) => {
    const res = await fetch(`${api}/direction/type/?page=${count}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword: `${id}` }),
    });
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    if (data.selected > 0) {
      let currentPage = data.selected + 1;
      const paginateServer = await paginateData(currentPage);
      setRespond(paginateServer);
    } else {
      const paginateServer = await paginateData(1);
      setRespond(paginateServer);
    }
  };

  return (
    <div className="min-h-[100vh]">
      <div className="wrapper container">
        <BreadCrumb />
      </div>
      {/* {response && response.length === 0 && (
        <div className="flex align-middle wrapper">
          <h3>{t('notFound')}</h3>
        </div> */}
      {/* )} */}
      {response &&
        response
          .filter((i) => i.type == id)
          .map((item) => (
            <div
              className="w-full mb-[34px] object-cover bg-center "
              key={item.id}
              style={{
                backgroundImage: `url(${uri}${item.preview_image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <div className="w-full min-h-[481px] md:min-h-[581px] overflow-hidden relative z-0 pb-8 font-inter">
                <div className="absolute top-0 left-0 right-0 bg-gradient-ministry w-full min-h-[481px] md:min-h-[581px] z-0"></div>
                <div
                  className="container max-w-[1236px] m-auto min-h-[481px] text-white bg-gradient-banner opacity-[100%] absolute top-0 left-0 right-0 flex 2md:pt-24 1sm:pt-0
                             items-center z-10 xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
                >
                  <div className="container max-w-[1196px] m-auto text-white text-base 3xs:text-[14px] font-normal">
                    <p className="my-4 leading-[19.3px] relative z-10 text-justify mx-6">
                      {i18n.language === 'ky' && (
                        <Sanitized html={item.title_ky} />
                      )}
                      {i18n.language === 'ru' && (
                        <Sanitized html={item.title_ru} />
                      )}
                      {i18n.language === 'en' && (
                        <Sanitized html={item.title_en} />
                      )}
                    </p>
                    <p className="my-4 leading-[19.3px] relative z-10 text-justify mx-6 xs:my-0">
                      {i18n.language === 'ky' && (
                        <Sanitized html={item.desc_ky} />
                      )}
                      {i18n.language === 'ru' && (
                        <Sanitized html={item.desc_ru} />
                      )}
                      {i18n.language === 'en' && (
                        <Sanitized html={item.desc_en} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      <div className="wrapper flex justify-center flex-wrap">
        {respond.prominent &&
          respond.prominent.map((item) => (
            <div
              onClick={() => window.location.replace(item.next)}
              className="block mb-12 w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
            >
              <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                <img
                  src={uri + item.preview_image}
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
            </div>
          ))}
        {respond.story &&
          respond.story.map((item) => (
            <div
              onClick={() => window.location.replace(item.next)}
              className="block mb-12 w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
            >
              <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                <img
                  src={uri + item.preview_image}
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
            </div>
          ))}
        {respond.generation &&
          respond.generation.map((item) => (
            <div
              onClick={() => window.location.replace(item.next)}
              className="block mb-12 w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
            >
              <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                <img
                  src={uri + item.preview_image}
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
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
            </div>
          ))}
        <div className="paginate">
          {respond.results && respond.results.length >= 9 && (
            <ReactPaginate
              nextLabel="❯"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="❮"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          )}
        </div>
      </div>
    </div>
  );
};

