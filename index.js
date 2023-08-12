

var calculate = document.getElementById('calc');
var reset = document.getElementById('reset');

var cName = document.getElementById('cName');
var fName = document.getElementById('fName');
var dBrith = document.getElementById('dBirth');

var ccName = document.getElementById('ccName');
var ffName = document.getElementById('ffName');
var ddBirth = document.getElementById('ddBirth');

var lpNum = document.getElementById('lpNum')
var lpText = document.getElementById('lpText');

var bdNum = document.getElementById('bdNum');
var bdnText = document.getElementById('bdText');

var edNum= document.getElementById('edNum');
var medNum = document.getElementById('medNum');
var emeText = document.getElementById('emeText');

var suhdText = document.getElementById('suhdText');
var suhdNum = document.getElementById('suhdNum');
var msuhdNum = document.getElementById('msuhdNum');

var pNum = document.getElementById('pNum');
var perText = document.getElementById('perText');
var mpNum = document.getElementById('mpNum');

var mText = document.getElementById('mText');
var mNum = document.getElementById('mNum');

var aText = document.getElementById('aText');
var aNum = document.getElementById('aNum');

var lpebNum = document.getElementById('lpebNum');
var lpebText = document.getElementById('lpebText');

var hdpbNum = document.getElementById('hdpbNum');
var hdpbText = document.getElementById('hdpbText');

var rtNum = document.getElementById('rtnNum');
var rtnText = document.getElementById('rtnText');

var bnNum = document.getElementById('bnNum');
var bnText = document.getElementById('bnText');

var ssNum = document.getElementById('ssNum');
var ssText = document.getElementById('ssText');

var klNum = document.getElementById('klNum');
var klText = document.getElementById('klText');

var kdNum = document.getElementById('kdNum');
var kdText = document.getElementById('kdText');

var hpNum = document.getElementById('hpNum');
var hpText = document.getElementById('hpText');

var hnNum = document.getElementById('hnNum');
var hnText = document.getElementById('hnText');

var cstNum = document.getElementById('cstNum');
var cstText = document.getElementById('cstText');

var ppoeNum = document.getElementById('ppoeNum');
var ppoeText = document.getElementById('ppoeText');

var mpoeNum = document.getElementById('mpoeNum');
var mpoeText = document.getElementById('mpoeText');

var ipoeNum = document.getElementById('ipoeNum');
var ipoeText = document.getElementById('ipoeText');

var epoeNum = document.getElementById('epoeNum');
var epoeText = document.getElementById('epoeText');





calculate.addEventListener('click', ()=> {
    
    ccName.textContent = cName.value;
    ffName.textContent = fName.value;
    ddBirth.textContent = dBirth.value;
    
    var date = dBrith.value;
    
    var dayString = date.split('-')[2];
    var monthString = date.split('-')[1];
    var yearString = date.split('-')[0];

    var daySplit = dayString.split('');
    var monthSplit = monthString.split('');
    var yearSplit = yearString.split(''); 
    
    var dayNumArray = daySplit.map(str => parseInt(str));
    var monthNumArray = monthSplit.map(str => parseInt(str));
    var yearNumArray = yearSplit.map(str => parseInt(str));
       
    var sumDayArray = dayNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumMonthArray = monthNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumYearArray = yearNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // life path number 
    var sum = sumDayArray + sumMonthArray + sumYearArray;

    while (sum > 10) {
        if (sum === 11) {
            lpNum.textContent = '11/2';
            break
        } else if(sum === 22) {
            lpNum.textContent = '22/4';
            break;
        } else if (sum === 33) {
            lpNum.textContent = '33/6';
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpNum.textContent = sum;
        }  
    };

    
    if (sumDayArray === 1) {
        bdNum.textContent = parseInt(dayString) + '/' + '1';
    } else if (sumDayArray === 2) {
        bdNum.textContent = parseInt(dayString) + '/' + '2';
    } else if (sumDayArray === 3) {
        bdNum.textContent = parseInt(dayString) + '/' + '3';
    } else if (sumDayArray === 4) {
        bdNum.textContent = parseInt(dayString) + '/' + '4';
    } else if (sumDayArray === 5) {
        bdNum.textContent = parseInt(dayString) + '/' + '6';
    } else if (sumDayArray === 6) {
        bdNum.textContent = parseInt(dayString) + '/' + '6';
    } else if (sumDayArray === 7) {
        bdNum.textContent = parseInt(dayString) + '/' + '7';
    } else if (sumDayArray === 8) {
        bdNum.textContent = parseInt(dayString) + '/' + '8';
    } else if (sumDayArray === 9) {
        bdNum.textContent = parseInt(dayString) + '/' + '9';
    };


    var ednName1, ednName2;

    var ednName = fName.value.split('');
    var ednfName = fName.value.split(' ');
    // console.log(ednfName)
    
    var ednLength = ednName.length;
    var i = 0;
    var count = 0;

    ednfName = Array.from(ednfName);

    for (let iterate  = 0; iterate < 3; iterate++) {
        console.log(iterate);
        // console.log(ednfName[iterate]);
        // console.log(ednfName.length);
        while (i <= ednfName[iterate].length) {
            if (ednfName[iterate][i].toUpperCase() === 'A' || ednfName[iterate][i].toUpperCase() === 'J' || ednfName[iterate][i].toUpperCase() === 'S') {
                count += 1;
            } else if (ednfName[iterate][i].toUpperCase() === 'B' || ednfName[iterate][i].toUpperCase() === 'K' || ednfName[iterate][i].toUpperCase() === 'T') {
                count += 2;
            } else if (ednfName[iterate][i].toUpperCase() === 'C' || ednfName[iterate][i].toUpperCase() === 'L' || ednfName[iterate][i].toUpperCase() === 'U') {
                count += 3;
            } else if (ednfName[iterate][i].toUpperCase() === 'D' || ednfName[iterate][i].toUpperCase() === 'M' || ednfName[iterate][i].toUpperCase() === 'V') {
                count += 4;
            } else if (ednfName[iterate][i].toUpperCase() === 'E' || ednfName[iterate][i].toUpperCase() === 'N' || ednfName[iterate][i].toUpperCase() === 'W') {
                count += 5;
            } else if (ednfName[iterate][i].toUpperCase() === 'F' || ednfName[iterate][i].toUpperCase() === 'O' || ednfName[iterate][i].toUpperCase() === 'iterate') {
                count += 6;
            } else if (ednfName[iterate][i].toUpperCase() === 'G' || ednfName[iterate][i].toUpperCase() === 'P' || ednfName[iterate][i].toUpperCase() === 'Y') {
                count += 7;
            } else if (ednfName[iterate][i].toUpperCase() === 'H' || ednfName[iterate][i].toUpperCase() === 'Q' || ednfName[iterate][i].toUpperCase() === 'Z') {
                count += 8;
            } else if (ednfName[iterate][i].toUpperCase() === 'I' || ednfName[iterate][i].toUpperCase() === 'R' ) {
                count += 9;
            }
            console.log(ednfName[iterate][i]);
            i++;
        }

    }



    
})

function changeDefault(event) {
    event.preventDefault();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', changeDefault);
