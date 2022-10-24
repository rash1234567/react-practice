var date = new Date ();

    let h = date.getHours();
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let time;
    if (h > 12 ) {
        h = h - 12 
        time = `${h}PM ${m} ${s}`
     }
     else {
        time = `${h}AM ${m} ${s}`    
     }  
    
  let day = date.getDay()    
switch (day) {
    case 0:
        day ='Sunday'
    break;
    case 1:
        day ='Monday'
    break;  
    case 2:
        day ='Tuesday'
    break;    
    case 3:
        day ='Wednesday'
    break;    
    case 4:
        day ='Thursday'
    break;   
            
    case 5:
        day ='Friday'
    break;    

    default:
        day ='Saturday'
        break;
}
console.log (`${time} 
Today is : ${day}`)

