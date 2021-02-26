import React, { useState } from "react";
import './index.scss';

const data = [
    {
        "btn": "button1",
        "id": 1
    },
    {
        "btn": "button2",
        "id": 2
    },
    {
        "btn": "button3",
        "id": 3
    }
]

const TabSwitchAnimation = () => {

    const [flag, setFlag] = useState(1);
    const [animatePosition, setAnimatePosition] = useState(0);
    const width = 100 / data.length

    const switchFunction = (flag) => {
        setFlag(flag);
        if (data.length === 1) {
            setAnimatePosition(0)
        }

        if (data.length === 2) {
            if (flag === 1) {
                setAnimatePosition(0)
            }
            else {
                setAnimatePosition(100 / data.length);
            }
        }

        if (data.length === 3) {
            if (flag === 1) {
                setAnimatePosition(0)
            }
            else if (flag === 2) {
                setAnimatePosition(100 / data.length);
            }
            else {
                setAnimatePosition((100 / data.length) * 2)
            }
        }
        console.log("flag", flag);
    }

    return <div className="tabswitchanipation-page">
        <div className="container">
            <div className="tabs-scroll">
                {
                    data.map((item => (
                        <button className={`btn ${flag === item.id ? "active-button": ""}`} style={{ width: width + "%" }} onClick={() => switchFunction(item.id)}>{item.btn}</button>
                    )))
                }
                <div className="animate-me" style={{ width: width + "%", left: animatePosition + "%" }}></div>
            </div>
        </div>
    </div>;
};

export default TabSwitchAnimation;
