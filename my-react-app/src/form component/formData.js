const formData = [
    {
        id : 1,
        type:"text",
        placeholder:'input your name',
        name:'name',
        label:'Name:',
        errorMessage: 'name should be more than 3 characters and should not exceed 16 characters ',
        pattern:'^(?=.*\d).{3,16}$' 
    },
    {
        id : 2,
        type:"number",
        placeholder:'input your phone-number',
        name:'phoneNumber',
        label:'Phone Number:',
        errorMessage: 'input a valid phonenumber',
        pattern:'[0-9]{11,16}'  
    },
    {
        id : 3,
        type:"email",
        placeholder:'input your email-id',
        name:'email', 
        label:'Email:',
        errorMessage: 'input a valid email',
        pattern:'^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ '
    },
    {
        id : 4,
        type:"text",
        placeholder:'input your username',
        name:'userName',
        label:'Username:',
        errorMessage: 'username should contain atleast one letter and one number',
        pattern: '[^A-Za-z0-9]+' 
    },
    {
        id : 5,
        type:"password",
        placeholder:'create your password',
        name:'password',
        label:'Paasword:',
        errorMessage: 'password must contain atleast one capital letter, one number and one special character',
        pattern:'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$'  
    },
    {
        id : 6,
        type:"text",
        placeholder:'confirm your password',
        name:'confirmPassword',
        label:'Phone Number:',
        errorMessage: 'password doesn\'t match',
        pattern:formData.Password.pattern  
    }
]

export default formData;