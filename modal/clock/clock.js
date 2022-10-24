const displayTime = document.querySelector('.display');
const displayHours = document.querySelector('#hours');
const displayMinutes = document.querySelector('#minutes');
const displaySeconds= document.querySelector('#seconds');
const displaySession = document.querySelector('#session');

setInterval(timeFunction, 1000);

function timeFunction () {
    let time = new Date ()
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if ( h < 10){
        h = `0${h}`
    }
    if ( m < 10){
        m = `0${m}`
    }
    if ( s < 10){
        s = `0${s}`
    }
    if (h > 12){
        h = h - 12;
        displayTime.innerHTML = `${h} : ${m}: ${s} PM`
       } 
       else {
        displayTime.innerHTML = `${h} : ${m}: ${s} AM`
       }
    displayTime.style.fontSize = '50px'
    displayTime.style.backgroundColor = 'black'
}
