import React from 'react';
import Social from './social';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../api/useFetch';
import { aboutUrl, base } from '../../api/const';
import logo from '../../assets/header/Frame 5051.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { response } = useFetch(base + aboutUrl + '/contacts/');

  return (
    <div className="w-full bg-[#F6CD49]">
      <div className="wrapper h-[102px] justify-between relative items-center">
        <div className="flex items-center">
          <div className="mr-[102px] 1xs:hidden">
            <img src={logo} alt="kelechek" />
          </div>
          {response &&
            response.map((item) => (
              <div className="pt-[8px] text-white" key={item.id}>
                {i18n.language === 'ky' && (
                  <div className="font-medium text-xs mb-1.5">
                    {item.address_ky}
                  </div>
                )}
                {i18n.language === 'ru' && (
                  <div className="font-medium text-xs mb-1.5">
                    {item.address_ru}
                  </div>
                )}
                {i18n.language === 'en' && (
                  <div className="font-medium text-xs mb-1.5">
                    {item.address_en}
                  </div>
                )}
                {item.contact.map((i) => (
                  <div key={i.id}>
                    <div className="font-medium text-xs mb-1.5">{i.phone}</div>
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="absolute right-0 bottom-5">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
