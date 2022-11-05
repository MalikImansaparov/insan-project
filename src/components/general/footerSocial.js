import React from 'react';
import youtube from '../../assets/header/Path (2).svg';
import tele from '../../assets/header/telegram (2).svg';
import insta from '../../assets/header/Path (3).svg';
import meta from '../../assets/header/f.svg';

const FooterSocial = () => {
    return (
        <div className="flex">
            <div className='socials ' onClick={() => window.open('https://www.youtube.com/channel/UCSyRfISynsKOnXi9j21mzUA')}>
                <img src={youtube} alt="social" className="w-[17px] h-[12px]"/>
            </div>
            <div className='socials ml-[10px]' onClick={() => window.open('https://t.me/jashtargovkg')}>
                <img src={tele} alt="social" className="w-[16px] h-[13px]"/>
            </div>
            <div className='socials ml-[10px]' onClick={() => window.open('https://instagram.com/jashtar.gov.kg?igshid=MTA0ZTI1NzA=')}>
                <img src={insta} alt="social" className="w-[17px] h-[17px]"/>
            </div>
            <div className='socials ml-[10px]' onClick={() => window.open('https://www.facebook.com/jashtar.gov')}>
                <img src={meta} alt="social" className="w-[9px] h-[16px]"/>
            </div>
        </div>
    );
};

export default FooterSocial;