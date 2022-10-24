/*const UserInputForm = (props) => {
    let handleSubmit = (e) => {
    e.preventDefault();
    }
    return(
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Please enter your name</label>
    <br />
    <input type="text" id="name" defaultValue={props.data.name || ''} onChange={
   props.inputChange } />
    </form>
    )
   }*/
   import React from "react";

   function UserInputForm (props) {
    let handleSubmit = (e) => {
        e.preventDefault();
        alert('submitted')
    }


    return(
        <form action="" onSubmit={handleSubmit} >
        <label htmlFor="name">Please enter your name</label>
        <br />
        <input type="text" id="name"onChange={
       props.inputChange } />
        </form>
        )


   }

   class Child extends React.Component {
    render() {
    return <h1>{this.props.message}</h1>
    }
   }
   
   class Parent extends React.Component {
    render() {
    const variable = 5;
    return (
    <div>
    <Child message="message for child" />
    <Child message={variable} />
    </div>
    );
    }
   }
   



   export default Parent;
   