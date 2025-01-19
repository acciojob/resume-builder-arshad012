import React from "react";

const PageChangingButton = ({onclickFunc}) => {
    return (
        <div className="page-buttons">
            <button id="previous" className="link-btn">BACK</button>
            <button id="next" className="normal-btn">NEXT</button>
            <button className="normal-btn" onClick={onclickFunc}>SAVE AND CONTINUE</button>
        </div>
    )
}

export default PageChangingButton;