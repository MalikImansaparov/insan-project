import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../components/general/breadcrumb";
import {useFetch} from "../api/useFetch";
import {base, newsUrl, uri} from "../api/const";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";
import { api } from '../api/const';

const NewsPage = () => {
  const { isLoading, response } = useFetch(api + '/articles/all/');
  // const [response, setResponse] = useState([]);
  // const [pageCount, setpageCount] = useState(0);
  const { t, i18n } = useTranslation();
  // const limit = 9;

  // const getData = async () => {
  //   const res = await fetch(`/insan/api/articles/all/`);
  //   const data = await res.json();
  //   setpageCount(Math.ceil(data.count / limit));
  //   setResponse(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, [limit]);

  // const paginateData = async (count) => {
  //   const res = await fetch(`/insan/api/articles/all/?page=${count}`);
  //   const data = await res.json();
  //   return data;
  // };

  // const handlePageClick = async (data) => {
  //     if( data.selected > 0 ){
  //         let currentPage = data.selected + 1;
  //         const paginateServer = await paginateData(currentPage);
  //         setResponse(paginateServer);
  //     } else {
  //         const paginateServer = await paginateData(1);
  //         setResponse(paginateServer);
  //     }
  // };

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center my-28 pb-24">
        <ClipLoader color="#1985A1" size={300} />
      </div>
    );
  }

  return (
    <div className="wrapper font-inter min-h-[70vh]">
      <div className="container">
        <BreadCrumb />
      </div>
      <div className="flex justify-center flex-wrap wrapper min-h-[70vh]">
        {response &&
          response.map((item) => (
            <div
              onClick={() =>
                window.location.replace(`${item.source}/${item.id}`)
              }
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
            </div>
          ))}
      </div>
      {/* <div className="paginate">
          {/* {response.results && response.results.length >= 9 && ( */}
      {/* <ReactPaginate
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
            /> */}
      {/* )} */}
      {/* </div>  */}
    </div>
  );
};

export default NewsPage;