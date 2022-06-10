import React, { useContext } from 'react';
import './Toggle.css';
// import sun  from'../../img/sun.png';
import sun  from'../../img/sunny.png';
import moon  from'../../img/moon.png';
import { ThemeContext } from '../Context/Context';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={sun} alt="" className="t_icon" />
            <img src={moon} alt="" className="t_icon" />
             <div onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}} className="t-button"></div>
        </div>
    );
};

export default Toggle;