import React, {useState} from 'react';
import close from "../../assets/image/general/icons8-close-48.png"
import {useClickOutside} from "../../hooks/useOutside";
import {uri} from "../../api/const";

import Modal from "./imagePopup";


const InfoImage = ({openRegisterModal, setOpenRegisterModal}) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const img = localStorage.getItem('image')

    const onClose = () => {
        setOpenRegisterModal(false)
    }

        return (
            <div className="relative">
                <div className=" text-justify font-inter cursor-pointer">
                    <Modal open={openRegisterModal}>
                        <div className="relative">
                        <div className="flex items-center flex-wrap" ref={ref}>
                            <div className="flex items-center w-[700px] h-[500px] sm:w-[500px] sm:h-[300px] 1xs:w-[400px] xs:w-[350px] xs:h-[250px] overflow-hidden">
                                <img src={uri + img} alt='organization' className='shadow-org w-[100%] h-auto'/>
                            </div>
                        </div>
                            <img src={close} alt="close" className="cursor-pointer absolute top-8 right-2 z-0" onClick={onClose}/>
                        </div>
                        </Modal>
                </div>

            </div>

    );
};

export default InfoImage;