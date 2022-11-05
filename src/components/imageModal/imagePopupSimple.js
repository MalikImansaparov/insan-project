import React, {useRef, useState} from "react";
import {uri} from "../../api/const";
import InfoImage from "../imageModal/infoImage";


export const ImagePopupSimple = props => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const openModal = (image) => {
        setOpenRegisterModal(true)
        localStorage.setItem("image", image)
    }

    return <>
        <div className="z-100 w-[432px] h-[245px] 1xs:h-[200px] mr-[62px] mb-2 z-10 overflow-hidden float-left cursor-pointer"
             onClick={() => openModal(props.images)}>
            <img
                src={uri + props.images}
                alt="cart-img"
                className="h-auto w-[100%] rounded-t"
            />
        </div>
                {openRegisterModal && openRegisterModal && (
                    <InfoImage
                        openRegisterModal={openRegisterModal}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
    </>
}