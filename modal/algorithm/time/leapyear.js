
function checkLeapYear (year) {
    if (year % 4 == 0 & year % 100 !==0 || year % 400 == 0 ) {
       console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }


}

checkLeapYear (2002);
checkLeapYear (2020);
checkLeapYear (2016);
checkLeapYear (2019);
checkLeapYear (1700);
checkLeapYear (1800);
checkLeapYear (2000);
