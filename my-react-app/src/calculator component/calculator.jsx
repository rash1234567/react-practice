import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './calculator.css';

function CalculatorButtons (props) {
    return (
        <button className='calc--button' value={props.value} onClick={props.handleClick}>
            {props.value}
        </button>
    )
}

function Calculator () {
    const [exp, setExp]= useState('')
    const [evl, setEvl] = useState("0")
    function renderCalculatorButtons (i) {
        return <CalculatorButtons value={i} 
        handleClick={Write}/>
      }

    function Write (event) {
    if (event.target.value == 'AC'){
        setExp('')
        setEvl('0')
    }
    else if (event.target.value== 'C') {
      let slice =  exp.slice(0, -1)
         setExp(slice)
    }
    else if (event.target.value== '='){
        let answer = eval(exp)                                       
        setEvl(answer)
    }
    else {
        setExp(prevState => `${prevState}${event.target.value}`)
    }
    } 


    return (
        <div className='calculator'>
           <div className='display--div'>
            <div className='expression--div'>{exp}</div>
            <div className='evalution--div'>{evl}</div>
            </div>
           <div className='calculator--div'>
             <div className='calculator--row'>
                 {renderCalculatorButtons('AC')}
                 {renderCalculatorButtons('%')}
                 {renderCalculatorButtons('C')}
                 {renderCalculatorButtons('/')}
             </div>
             <div className='calculator--row'>
                 {renderCalculatorButtons(7)}
                 {renderCalculatorButtons(8)}
                 {renderCalculatorButtons(9)}
                 {renderCalculatorButtons('*')}
             </div>
             <div className='calculator--row'>
                 {renderCalculatorButtons(4)}
                 {renderCalculatorButtons(5)}
                 {renderCalculatorButtons(6)}
                 {renderCalculatorButtons('-')}
             </div>
             <div className='calculator--row'>
                 {renderCalculatorButtons(1)}
                 {renderCalculatorButtons(2)}
                 {renderCalculatorButtons(3)}
                 {renderCalculatorButtons('+')}
             </div>
             <div className='calculator--row'>
                 {renderCalculatorButtons('.')}
                 {renderCalculatorButtons('0')}
                 {renderCalculatorButtons('!')}
                 {renderCalculatorButtons('=')}
             </div>
            </div>
        </div>
    )
}

export default Calculator;