import React, {useState} from 'react';
import './form.css';
import formData from './formData';

function Input (props)  {
    return (
        <>
          <label>{props.label}</label>
          <input
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.onChange}
              pattern={props.pattern}/>
        </>
    )
}


function Form () {
   const [inputs, setInputs] = useState({
    name:'',
    phoneNumber:'',
    email:'',
    userName:'',
    password:"",
    confirmPassword:''
   });

   const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]:e.target.value})
   }
 
    const inputTag = formData.map(data => (
        <Input 
          key={data.id}
          type={data.type}
          placeholder={data.placeholder}
          name={data.name}
          label={data.label}
          errorMessage={data.errorMessage}
          onChage={handleChange}
          value={inputs [formData.name]}
          pattern={data.pattern}/>
    ))
    return (
        <div className='form--container'>
            <form className='form'>
               {inputTag}
               <button type='submit'className="submit">Submit</button> 
            </form>

        </div>
    )
}






export default Form;