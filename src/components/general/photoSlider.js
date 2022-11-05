import React, {useRef, useState} from "react";
import {Autoplay, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {uri} from "../../api/const";
import InfoImage from "../imageModal/infoImage";


export const ImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()
    const swiperRef = useRef();
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const openModal = (image) => {
        setOpenRegisterModal(true)
        localStorage.setItem("image", image)
    }

    return <>
        <Swiper
            hashNavigation={{
                watchState: true,
            }}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation, Thumbs]}
            thumbs={{ swiper: activeThumb }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            speed={800}
        >
            {
                props.images.map((item, i) => (
                    <div key={i}>
                        <SwiperSlide >
                            <div className="w-[432px] h-[245px] 1xs:h-[200px] mr-[62px] mb-2 z-10 overflow-hidden float-left cursor-pointer" onClick={() => openModal(item.image)}>
                                <img
                                    src={uri + item.image}
                                    alt="cart-img"
                                    className="h-auto w-[100%] rounded-t"
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                ))
            }
        </Swiper>
        {props.images.length > 1 &&
            <div className="flex m-auto w-[300px] relative">
                <Swiper
                    hashNavigation={{
                        watchState: true,
                    }}
                    loop={true}
                    speed={700}
                    spaceBetween={10}
                    slidesPerView={5}
                    onSwiper={setActiveThumb}
                    navigation={{
                        nextEl: '.detail-next',
                        prevEl: '.detail-prev',
                    }}
                    modules={[Navigation, Thumbs]}
                >
                    {
                        props.images.map((item) => (
                            <SwiperSlide>
                                <img
                                    src={uri + item.image}
                                    alt="cart-img"
                                    className="h-[40px] w-[62px] rounded-t mt-5 mb-2 m-auto cursor-pointer"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div
                    className="detail-prev absolute top-[30px] left-[-30px]"
                    onClick={() => swiperRef.current.slidePrev()}
                ></div>
                <div
                    className="detail-next absolute top-[30px] right-[-25px]"
                    onClick={() => swiperRef.current.slideNext()}
                ></div>
                {openRegisterModal && openRegisterModal && (
                    <InfoImage
                        openRegisterModal={openRegisterModal}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
            </div>
        }

    </>
}