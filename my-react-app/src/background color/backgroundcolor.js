import React, {useState} from 'react';
import './backgroundcolor.css';

export default function ColorFlipper () {
    const [styles, setStyles] = useState({backgroundColor:'white'})

    const flipColor = () => {
     const colors = ['blue', "yellow", "green", 'grey', 'purple', '#348755', 'red', '#673456', 'blueviolet', '#578904'];
     let color = colors [Math.floor(Math.random ()* colors.length)];
     let newStyles = {backgroundColor : color};
     setStyles(newStyles)
    }
    return(
        <div className='Application' style={styles}>
            <h1 className='color'>Background color:{styles.backgroundColor}</h1>
            <button className='flipper' onClick={flipColor}>Flip color</button>
        </div>
    )
}