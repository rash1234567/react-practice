import React, {useState} from "react"
import styles from './counter.module.css'

export default function Counter (){
    const [Count, setCount] = useState (0)

    function Increment () {
        setCount((prevCount) => Count + 1)
    }

    function Decrease () {
        setCount((prevCount) => Count - 1)
    }
     return (
         <>
           <div className={styles.displaycount}>
            <h3 className={styles.displaytext}>{Count}</h3>
           </div>
           <div className={styles.countbutton}>
            <button className={styles.minusbutton} onClick={Decrease}>-</button>
            <button className={styles.plusbutton} onClick={Increment}>+</button> 
           </div>
         </>
     )
}