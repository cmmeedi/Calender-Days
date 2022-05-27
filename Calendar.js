//Here i have created an Object literal of the month of January 
const January = {
    //With a string to display which month it is
    month: 'January',
    // and added the amount of days in it
    days: 31
}
//I've done the same for each month in the year
const February = {
    month: 'February',
    days: 28
}
const March = {
    month: 'March',
    days: 31
}
const April = {
    month: 'April',
    days: 30
}
const May = {
    month: 'May',
    days: 31
}
const June = {
    month: 'June',
    days: 30
}
const July = {
    month: 'July',
    days: 31
}
const August = {
    month: 'August',
    days: 31
}
const September = {
    month: 'September',
    days: 31
}
const October = {
    month: 'October',
    days: 31
}
const November = {
    month: 'November',
    days: 30
}
const December = {
    month: 'December',
    days: 31
}

//Here is an array of the week to be able to display each day.  Since the year started on a saturday that is the first day within the array
const week = [ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//I've added each month to an array
const year = [January, February, March, April, May, June, July, August, September, October, November, December]

//Then i create count variables.  One for the days of the month
let xDays = 0;
//and one for the months
let xMonths = 0;

let count = 1;


//and a placeholder to be able to use abstraction on the month
let thisMonth = year[xMonths];

//This will iterate over each month of the year
for(xMonths; xMonths < year.length; xMonths++){
    count = 1;
    thisMonth.days = year[xMonths].days;
    //A console.log
    console.log('---' + year[xMonths].month + '---');
        //Here i iterate over each day of the month
    for(xDays; xDays < thisMonth.days; xDays++){
        
        //Now if 'x' is equivalent to 7
        if(xDays === 7){
            //Then i subtract 7 from the placeholder of 'thisMonth'
            thisMonth.days -= 7;
            //And reset 'x' back to 0
            xDays = 0;
        }
        //and console.log the result of the 'week' array with the position of 'x'
        console.log(count + " " + week[xDays]);
        count++;
    }

}


//It is not precise on the days.  This must have something to do with -thisMonth.days -= 7-  This will need some more figuring out