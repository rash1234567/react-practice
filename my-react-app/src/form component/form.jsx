import React, {useState} from 'react';

export default function FormD () {
    const [inputs, setInputs] = useState ({})

    const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values,  [name] : value}))
    }
    const handleSubmit = (event) => {
    (inputs = {}) ? event.preventDefault () : alert (inputs)
    }

    return (
        <>
          <div className='form--container'>
              <form className='form' onSubmit={handleSubmit}>
                  <h1>Sign up now</h1>
                  <label htmlFor="name"> Name: </label>
                  <input type="text" placeholder='input your name' value={inputs.name} onChange={handleChange} name='name'/>
                  {inputs == {} && <small>input a valid name </small>}
                  <label htmlFor="phone--number">Phone Number: </label>
                  <input type="number" placeholder='enter phone number' name='phonenumber'value={inputs.phonenumber}/>
                  {inputs == {} &&<small> input a valid phonenumber </small>}
                  <label htmlFor="email">Email address:</label>
                  <input type="email" placeholder='input your email' value={inputs.email} name='email'/>
                  {inputs == {} &&<small> input a valid email id </small>}
                  <label htmlFor="username">Create Usename:</label>
                  <input type="text" placeholder='create username' value={inputs.username} name='username'/>
                  {inputs == {} &&<small> username not valid </small>}
                  <label htmlFor="password">Create Password:</label>
                  <input type="password" placeholder='create password' value={inputs.password} name='password'/>
                  {inputs == {} &&<small> password isn't valid </small>}
                  <label htmlFor="password">Confirm Password:</label>
                  <input type="password" placeholder='confirm password' value={inputs.password} name='password' />
                  {inputs == {} &&<small> password doesn't match </small>}
                  <button type='submit'className="submit">Submit</button>
              </form>
          </div>
        </>
    )
}