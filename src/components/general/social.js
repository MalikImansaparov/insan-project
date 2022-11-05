import React from 'react';
import youtube from '../../assets/header/Path (2).svg';
import tele from '../../assets/header/telegram (2).svg';
import insta from '../../assets/header/Path (3).svg';
import meta from '../../assets/header/f.svg';

const Social = () => {
    return (
        <div className="flex">
            <div className='social' onClick={() => window.open('https://www.youtube.com/channel/UCSyRfISynsKOnXi9j21mzUA')}>
                <img src={youtube} alt="social" className="w-[12px] h-[10px] "/>
            </div>
            <div className='social ml-[10px]' onClick={() => window.open('https://t.me/jashtargovkg')}>
                <img src={tele} alt="social" className="w-[12px] h-[10px] "/>
            </div>
            <div  className='social ml-[10px]' onClick={() => window.open('https://instagram.com/jashtar.gov.kg?igshid=MTA0ZTI1NzA=')}>
                <img src={insta} alt="social" className="w-[12px] h-[12px] "/>
            </div>
            <div className='social ml-[10px]' onClick={() => window.open('https://www.facebook.com/jashtar.gov')}>
                <img src={meta} alt="social" className="w-[7px] h-[11px] "/>
            </div>
        </div>
    );
};

export default Social;