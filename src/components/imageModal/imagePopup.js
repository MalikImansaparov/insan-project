import React from "react";

const MODAL_STYLES = {
    position: "absolute",
    zIndex: "1000",
    top: "440px",
    left: "50%",
    bottom: "200px",
    transform: "translate(-50%, -50%)",
    paddingBottom: '30px',
    height: '100%',
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
};
const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1000",
    overflowY: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const Modal = ({ open, children }) => {
    if (!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLE}>
                <div style={MODAL_STYLES}>{children}</div>
            </div>
            {/*<div className="fixed flex flex-center top-0 left-0 w-[100%] h-[100%] z-10000 overflow-y-auto bg-black !important">*/}
            {/*    <div className="absolute top-[350px] left-[50%] bottom-[500px] bg-white z-10000 !important*/}
            {/*    w-[800px] h-[500px] overflow-auto border-r-1 outline-none translate-y-[-50%] translate-x-[-50%]" >{children}</div>*/}
            {/*</div>*/}
        </>
    );
};

export default Modal;
