import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount, TelegramIcon, TelegramShareButton,
    VKIcon, VKShareButton,
    VKShareCount, WhatsappIcon,
    WhatsappShareButton
} from "react-share";

const ShareSocial = () => {
    const shareLink = window.location.href
    const title = "share"

    return (
        <div className="flex">
            <div className="mx-1">
                    <FacebookShareButton
                        url={shareLink}
                        quote={title}
                        className="network__share-button"
                    >
                        <FacebookIcon
                            size={"2rem"}
                            round
                        />
                    </FacebookShareButton>
                </div>
             <div className="mx-1">
                <TelegramShareButton
                    url={shareLink}
                    quote={title}
                    className="network__share-button"
                >
                    <TelegramIcon
                        size={"2rem"}
                        round
                    />
                </TelegramShareButton>
            </div>
                <div className="mx-1">
                    <WhatsappShareButton
                        url={shareLink}
                        title={title}
                        separator=":: "
                        className="network__share-button"
                    >
                        <WhatsappIcon size={"2rem"} round />
                    </WhatsappShareButton>
                </div>
                <div className="mx-1">
                    <VKShareButton
                        url={shareLink}
                        image={`${shareLink}`}
                        windowWidth={660}
                        windowHeight={460}
                        className="network__share-button"
                    >
                        <VKIcon size={"2rem"} round />
                    </VKShareButton>
                </div>
        </div>
    );
};

export default ShareSocial;