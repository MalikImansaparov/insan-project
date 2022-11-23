import React, {useState} from 'react';
import lang from '../../assets/image/general/icons8.png';
import { changeLanguage } from '../../i18next';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const onChange = (lng) => {
    changeLanguage(lng);
    toggleModal();
  };

  return (
    <div className="group relative">
      <button
        className="flex text-[#403e3e] relative mt-1"
        onClick={toggleModal}
      >
        <img src={lang} className="mt-1 w-3 h-3 mr-[7px] relative" alt="lang" />
        <span className="text-[15px] font-semibold">{t('lang')}</span>
      </button>
      {openModal && (
        <ul className="absolute z-10 cursor-pointer">
          <li
            className="btn-blue mt-[22px] 2lg:mt-[16px]"
            onClick={() => onChange('ky')}
          >
            <>Кыргызча</>
          </li>
          <li className="btn-blue" onClick={() => onChange('ru')}>
            <>Русский</>
          </li>
          <li className="btn-blue" onClick={() => onChange('en')}>
            <>English</>
          </li>
        </ul>
      )}
    </div>
  );
};


