import './index.scss';
import {ReactComponent as Close} from './../../../assets/popup/close.svg'

const PopupWrapper = ({ popupWrapperClass, children, onClick, show }) => {
    return (
        <div className={`popup-wrapper ${show ? "show" : ""}`}>
            <div className={`popup-inner ${popupWrapperClass}`}>
                <div className="popup-header" onClick={onClick}>
                    <Close className="close-icon" />
                </div>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PopupWrapper;