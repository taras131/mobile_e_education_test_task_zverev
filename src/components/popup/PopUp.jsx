import React from 'react';
import style from './PopUp.module.css'
import classNames from "classnames";

const PopUp = ({isShowPopUp, setIsShowPopUp, resultArrayList}) => {
    return (
        <div className={classNames(style.popup_wrapper, {
            [style.popup_wrapper_active]: isShowPopUp
        })} data-testid="pop-app-wrapper">
            <div className={classNames(style.popup_dialog, {
                [style.popup_dialog_active]: isShowPopUp
            })}>
                <h3>Результат: </h3>
                <div className="number_block array" data-testid="result">
                    {resultArrayList}
                </div>
                <div className="button"
                     onClick={()=>setIsShowPopUp(false)}
                     data-testid="ok">
                    Хорошо, спасибо
                </div>
            </div>
        </div>
    );
};

export default PopUp;