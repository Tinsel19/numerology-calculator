

var calculate = document.getElementById('calc');
var reset = document.getElementById('reset');

var cName = document.getElementById('cName');
var fName = document.getElementById('fName');

var ccName = document.getElementById('ccName');
var ffName = document.getElementById('ffName');
var ddBirth = document.getElementById('ddBirth');
var dDay = document.getElementById('day');
var dMonth = document.getElementById('month');
var dYear = document.getElementById('year');

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

var rtNum = document.getElementById('rtNum');
var rtText = document.getElementById('rtText');

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

var fpCycle = document.getElementById('fpCycle');
var spCycle = document.getElementById('spCycle');
var tpCycle = document.getElementById('tpCycle');

var fPin = document.getElementById('fPin');
var sPin = document.getElementById('sPin');
var tPin = document.getElementById('tPin');
var ftPin = document.getElementById('ftPin');

var fCha = document.getElementById('fCha');
var sCha = document.getElementById('sCha');
var tCha = document.getElementById('tCha');
var ftCha = document.getElementById('ftCha');





calculate.addEventListener('click', ()=> {
    var month = Number(dMonth.value);
    var monthHold = month;
    var dayHold = dDay.value;
    var yearHold = dYear.value;
    switch (month) {
        case 1:
            month = 'January'
            break;
        case 2:
            month = 'February'
            break;

        case 3:
            month = 'March'
            break;

        case 4:
            month = 'April'
            break;
        
        case 5:
            month = 'May'
            break;
        
        case 6:
            month = 'June'
            break;
        
        case 7:
            month = 'July'
            break;

        case 8:
            month = 'August'
            break;
        
        case 9:
            month = 'September'
            break;

        case 10:
            month = 'October'
            break;

        case 11:
            month = 'November'
            break;
        
        case 1:
            month = 'December'
            break;

    
        default:
            break;
    }
    ccName.textContent = cName.value;
    ffName.textContent = fName.value;

    ddBirth.textContent = String(month) + '-' + String(dDay.value) + '-' + String(dYear.value);

    var dayString = String(dDay.value);
    var monthString = String(dMonth.value);
    var yearString = String(dYear.value);


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
    var sum = 0;
    mSplit = String(yearString).split('');
    var xsum = eval(mSplit.join('+'));
    sumYearArray = xsum;

    if (Number(dayString) < 10) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) === 10) {
        sumDayArray = 1;
    } else if (Number(dayString) === 11 || Number(dayString) === 22) {
        sumDayArray = Number(dayString);
    } else {
        mSplit = String(dayString).split('');
        xsum = eval(mSplit.join('+'));
        sumDayArray = xsum
    };
    if (Number(monthString) < 10) {
        sumMonthArray = Number(monthString);
    } else if (Number(dayString) === 10) {
        sumMonthArray = 1;
    } else if (Number(monthString) === 11 ) {
        sumMonthArray = 11;
    } else if (Number(monthString) === 12){
        sumMonthArray = 3;
    }

    if (Number(sumYearArray) < 10) {
        sumYearArray = Number(sumYearArray);
    } else if (Number(sumYearArray) === 10) {
        sumYearArray = 1;
    } else if (Number(sumYearArray) === 11 ) {
        sumYearArray = 11;
    } else if (Number(sumYearArray) === 22){
        sumYearArray = 22;
    } else if (Number(sumYearArray) === 33){
        sumYearArray = 33;
    } else {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        sumYearArray = xsum;
    }

    
    sum = sumDayArray + sumMonthArray + sumYearArray;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold;
    if (sum < 10) {
        lpNum.innerHTML = '<b>' +sum + '</b>';
    } else if (sum === 10) {
        lpNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
            lpNum.innerHTML = '11/<b>2</b>';
            sum = 2;
            break
        } else if(sum === 22) {
            lpNum.innerHTML = '22/<b>4</b>';
            sum = 4;
            break;
        } else if (sum === 33) {
            lpNum.innerHTML = '33/<b>6</b>';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (sum === 10) {
                lpNum.innerHTML = numberString + '/' + 10 + '/<b>1</b>';
            } else {
                lpNum.innerHTML = lsum + '/<b>' +sum + '</b>';
            }
        }
    };
    lpHold = sum;




    // Birthday Number 
    if (sumDayArray === 1) {
        bdNum.innerHTML = '<b>1</b>';
    } else if (sumDayArray === 2) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>2</b>';
    } else if (sumDayArray === 3) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>3</b>';
    } else if (sumDayArray === 4) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>4</b>';
    } else if (sumDayArray === 5) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>6</b>';
    } else if (sumDayArray === 6) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>6</b>';
    } else if (sumDayArray === 7) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>7</b>';
    } else if (sumDayArray === 8) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>8</b>';
    } else if (sumDayArray === 9) {
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>9</b>';
    };





    // expression / destiny number 
    var ednfName = fName.value.split(' ');
    var count = 0;
    var countList = [];
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };
        countList.push(count);
        count = 0;
    };
    var dbSplit, sum, dbSumList = [], dbTotalSum ,dbResult, dbSumHoldList = [];
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            dbSumHoldList.push(11);
            dbResult = '11';
        } else if (countList[x] === 22) {
            dbSumHoldList.push(22);
            dbResult = '22';
        } else if (countList[x] === 33) {
            dbSumHoldList.push(33);
            dbResult = '33';
        } else {
            dbSplit = String(countList[x]).split('');
            sum = eval(dbSplit.join('+'));
            dbSumList.push(sum);
            sum = eval(dbSplit.join('+'));
            dbSumHoldList.push(sum);
        }
    }
    dbTotalSum = eval(dbSumHoldList.join('+'));
    dbSplit = String(dbTotalSum).split('');
    nSum = eval(dbSplit.join('+'));
    if (dbTotalSum === 10) {
        edNum.innerHTML = dbTotalSum + '/<b>1</b>' ;
    } else if (dbTotalSum === 19) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 28) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 37) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 46) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 55) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 64) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 73) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 82) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    } else if (dbTotalSum === 91) {
        edNum.innerHTML = dbTotalSum + '/' + nSum + '/<b>1</b>';
    }
    else {
        edNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    }
    edHold = nSum;


    
    // Minor expression number 
    var ednfName = cName.value.split(' ');
    var count = 0;
    var countList = [];
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };
        countList.push(count);
        count = 0;
    };
    var dbSplit, sum, dbSumList = [], dbTotalSum ,dbResult, dbSumHoldList = [];

    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            dbSumHoldList.push(11);
            dbResult = '11';
        } else if (countList[x] === 22) {
            dbSumHoldList.push(22);
            dbResult = '22';
        } else if (countList[x] === 33) {
            dbSumHoldList.push(33);
            dbResult = '33';
        } else {
            dbSplit = String(countList[x]).split('');
            sum = eval(dbSplit.join('+'));
            dbSumList.push(sum);
            sum = eval(dbSplit.join('+'));
            dbSumHoldList.push(sum);
        }
    }
    dbTotalSum = eval(dbSumHoldList.join('+'));
    dbSplit = String(dbTotalSum).split('');
    nSum = eval(dbSplit.join('+'));
    countList = [];
    if (dbTotalSum === 10) {
        medNum.innerHTML = dbTotalSum + '/1' ;
    } else if (dbTotalSum < 10) {
        medNum.innerHTML = dbTotalSum ;
    } else if (dbTotalSum === 19) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 28) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 37) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 46) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 55) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 64) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 73) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 82) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 91) {
        medNum.innerHTML = dbTotalSum + '/' + nSum + '/1';
    }
    else {
        medNum.innerHTML = dbTotalSum + '/' + nSum;
    }
    medHold = nSum;


    
    

    // Soul Urge / Heart Desire Number 
    var suhdfName = fName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
        };
        countList.push(count);
        count = 0;
    };
    console.log(countList);
    var suhdSplit, sum,  suhdSumList = [], suhdResult, y, count = 0;
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            // suhdResult = '11/2';
            sum = 11
        } else if (countList[x] === 22) {
            // suhdResult = '22/4';
            sum = 22
        } else if (countList[x] === 33) {
            // suhdResult = '33/6'
            sum = 33
        } else {
            suhdSplit = String(countList[x]).split('');
            sum = eval(suhdSplit.join('+'));
            suhdSumList.push(sum);
            x = eval(countList.join('+'));
            var xx = String(x).split('');
            sum = eval(xx.join('+'));
            y = eval(suhdSplit.join('+'));
        };
        count += sum;
    };

    suHold = y;
    suhdNum.innerHTML = '<b>' +sum+ '</b>';





    // minor soul urge / heart desire 
    var suhdfName = cName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
            else {
                count+=0;
            }
        };
        countList.push(count);
        count = 0;
    };
    var suhdSplit, sum,  suhdSumList = [], suhdResult;
    count = 0;
    for (let x = 0; x < countList.length; x++) {
        x = eval(countList.join('+'));
        if (countList[x] === 11) {
            count += 11;
        } else if (countList[x] === 11) {
            count += 11;
        }else if (countList[x] === 22) {
            count += 22;
        } else if (countList[x] === 33) {
            count += 33;
        }  else if (x === 19 || x === 28 || x === 37 || x === 46 || x === 55 || x === 64 || x === 73 || x === 82 || x === 91) {
            sum = '10/1';
        } else {
            x = eval(countList.join('+'));
            msuHold = eval(suhdSplit.join('+'));
            sum = x + '/'+ eval(suhdSplit.join('+'));
        }
    }
    msuhdNum.innerHTML = sum;





    // personality number 
    pnfName = fName.value.split(' ');
    count = 0;
    countList = [];
    pnfName = Array.from(pnfName);
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        for ( let i = 0; i <= pnfName[iterate].length; i++) {
            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
        };
        countList.push(count);
        count = 0;
    };
    var pnSplit, sum,  pnSumList = [];
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            count += 11;
        } else if (countList[x] === 22) {
            count == 22;
        } else if (countList[x] === 33) {
            count += 33;
        } else {
            pnSplit = String(countList[x]).split('');
            sum = eval(pnSplit.join('+'));
            count += sum;
            pnSumList.push(sum);        
        }
    };
    if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
    }
    pnHold = count ;
    pNum.innerHTML = '<b>' +count+ '</b>' ;



    // Minor personality number 
    pnfName = cName.value.split(' ');
    count = 0;
    countList = [];
    pnfName = Array.from(pnfName);

    for (let iterate  = 0; iterate < pnfName.length; iterate++) {

        for ( let i = 0; i <= pnfName[iterate].length; i++) {

            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
        };
        countList.push(count);
        // console.log(countList);
        count = 0;
    };
    var pnSplit, sum,  pnSumList = [];
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            count += 11;
        } else if (countList[x] === 22) {
            count == 22;
        } else if (countList[x] === 33) {
            count += 33;
        } else {
            pnSplit = String(countList[x]).split('');
            sum = eval(pnSplit.join('+'));
            count += sum;
            pnSumList.push(sum);        
        }
        
    };
    if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
    }
    // console.log(sum);
    mpHold = count ;
    mpNum.innerHTML = count ;


    // Muaturity Number 
    count = lpHold + edHold;
    mSplit = String(count).split('');
    sum = eval(mSplit.join('+'));
    mNum.innerHTML = count + '/' + sum;


    // Attitude Number 
    var intDayNum, intMonthNum;
    dayString, monthString;
    intDayNum = Number(dayString);
    intMonthNum = Number(monthString);

    if (intDayNum === 10) {
        intDayNum = 1;
    } else if (intDayNum === 11 || intDayNum === 22){
        intDayNum = intDayNum
    }
    else if (intDayNum > 10) {
        mSplit = String(intDayNum).split('');
        sum = eval(mSplit.join('+'));
        intDayNum = sum;
    }

    if (intMonthNum === 10) {
        intMonthNum = 1;
    } else if (intMonthNum === 11){
        intMonthNum = 11;
    } else if (intMonthNum === 12){
        intMonthNum = 3;
    }

    sumAttitude = intDayNum + intMonthNum;
    if (sumAttitude === 10) {
        sumAttitude = 1;
    } else if (sumAttitude > 10) {
        mSplit = String(sumAttitude).split('');
        sum = eval(mSplit.join('+'));
        sumAttitude = sum;
    }
    aNum.innerHTML = sumAttitude;




    // life Path / Expression Bridge 
    var subtract = lpHold - edHold;
    if (subtract < 0) {
        subtract = 1;
    } else {
        subtract;
    }
    lpebNum.innerHTML = String(subtract)



    // Heart's Desire ? Personlaity Bridge Number 
    hdpbNum.innerHTML;
    var hdPB = suHold - pnHold;
    var x = hdPB;
    if (x < 1) {
        hdPB = 0;
    } else {
        hdPB = x;
    }
    hdpbNum.innerHTML = hdPB;



    // Rational Thought Number 
    var x;
    if (Number(dayString) === 10) {
        sum = 1;
    } else if (Number(dayString > 10)) {
        mSplit = String(dayString).split('');
        sum = eval(mSplit.join('+'));
    } else {
        sum = Number(dayString)
    }

    x = sum + edHold;
    rtNum.innerHTML = String(x);



    // Balance Number
    var indexName = 0;
    var indexList = [];
    count = 0;
    ednfName = fName.value.split(' ');
    for (let i = 0; i < ednfName.length; i++) {
        indexName = ednfName[i][0];
        indexList.push(indexName);
    };

    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'a' ||  String(indexList[i]).toLowerCase() === 'j' || String(indexList[i]).toLowerCase() === 's' ) {
            count += 1;
        } else if (String(indexList[i]).toLowerCase() === 'b' || String(indexList[i]).toLowerCase() === 'k' || String(indexList[i]).toLowerCase() === 't') {
            count += 2;
        } else if (String(indexList[i]).toLowerCase() === 'c' || String(indexList[i]).toLowerCase() === 'l' || String(indexList[i]).toLowerCase() === 'u') {
            count += 3;
        } else if (String(indexList[i]).toLowerCase() === 'd' || String(indexList[i]).toLowerCase() === 'm' || String(indexList[i]).toLowerCase() === 'v') {
            count += 4;
        } else if (String(indexList[i]).toLowerCase() === 'e' || String(indexList[i]).toLowerCase() === 'n' || String(indexList[i]).toLowerCase() === 'w') {
            count += 5;
        } else if (String(indexList[i]).toLowerCase() === 'f' || String(indexList[i]).toLowerCase() === 'o' || String(indexList[i]).toLowerCase() === 'x') {
            count += 6;
        } else if (String(indexList[i]).toLowerCase() === 'g' || String(indexList[i]).toLowerCase() === 'p' || String(indexList[i]).toLowerCase() === 'y') {
            count += 7;
        } else if (String(indexList[i]).toLowerCase() === 'h' || String(indexList[i]).toLowerCase() === 'q' || String(indexList[i]).toLowerCase() === 'z') {
            count += 8;
        } else if (String(indexList[i]).toLowerCase() === 'i' || String(indexList[i]).toLowerCase() === 'r' ) {
            count += 9;
        }
    };
    bnNum.innerHTML = count;




    // Subconscious Self Number
    count = 0;
    var filtered, filteredList = [];
    for (let i = 0; i < ednfName.length; i++ ) {
        filtered = Array.from(new Set((ednfName[i]).toLowerCase().split(''))).toString();
        filteredList.push(filtered);
    };
    for (let iterate  = 0; iterate < filteredList.length; iterate++) {
        for ( let i = 0; i <= filteredList[iterate].length; i++) {

            if (String(filteredList[iterate][i]).toLowerCase() === 'a' ||  String(filteredList[iterate][i]).toLowerCase() === 'j' || String(filteredList[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'b' || String(filteredList[iterate][i]).toLowerCase() === 'k' || String(filteredList[iterate][i]).toLowerCase() === 't') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'c' || String(filteredList[iterate][i]).toLowerCase() === 'l' || String(filteredList[iterate][i]).toLowerCase() === 'u') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'd' || String(filteredList[iterate][i]).toLowerCase() === 'm' || String(filteredList[iterate][i]).toLowerCase() === 'v') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'e' || String(filteredList[iterate][i]).toLowerCase() === 'n' || String(filteredList[iterate][i]).toLowerCase() === 'w') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'f' || String(filteredList[iterate][i]).toLowerCase() === 'o' || String(filteredList[iterate][i]).toLowerCase() === 'x') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'g' || String(filteredList[iterate][i]).toLowerCase() === 'p' || String(filteredList[iterate][i]).toLowerCase() === 'y') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'h' || String(filteredList[iterate][i]).toLowerCase() === 'q' || String(filteredList[iterate][i]).toLowerCase() === 'z') {
                count += 1;
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'i' || String(filteredList[iterate][i]).toLowerCase() === 'r' ) {
                count += 1;
            }
        };
    };
    ssNum.innerHTML = count;





    // Karmic Lesson 
    count = 0;
    var filtered, filteredList = [], filteredNum, combString = '';
    let mainNumString = '1,2,3,4,5,6,7,8,9';
    
    for (let i = 0; i < ednfName.length; i++ ) {
        filtered = Array.from(new Set((ednfName[i]).toLowerCase().split(''))).toString();
        filteredList.push(filtered);
    };
    for (let iterate  = 0; iterate < filteredList.length; iterate++) {
        for ( let i = 0; i <= filteredList[iterate].length; i++) {

            if (String(filteredList[iterate][i]).toLowerCase() === 'a' ||  String(filteredList[iterate][i]).toLowerCase() === 'j' || String(filteredList[iterate][i]).toLowerCase() === 's' ) {
                mainNumString = mainNumString.replace('1,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'b' || String(filteredList[iterate][i]).toLowerCase() === 'k' || String(filteredList[iterate][i]).toLowerCase() === 't') {
                mainNumString = mainNumString.replace('2,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'c' || String(filteredList[iterate][i]).toLowerCase() === 'l' || String(filteredList[iterate][i]).toLowerCase() === 'u') {
                mainNumString = mainNumString.replace('3,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'd' || String(filteredList[iterate][i]).toLowerCase() === 'm' || String(filteredList[iterate][i]).toLowerCase() === 'v') {
                mainNumString = mainNumString.replace('4,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'e' || String(filteredList[iterate][i]).toLowerCase() === 'n' || String(filteredList[iterate][i]).toLowerCase() === 'w') {
                mainNumString = mainNumString.replace('5,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'f' || String(filteredList[iterate][i]).toLowerCase() === 'o' || String(filteredList[iterate][i]).toLowerCase() === 'x') {
                mainNumString = mainNumString.replace('6,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'g' || String(filteredList[iterate][i]).toLowerCase() === 'p' || String(filteredList[iterate][i]).toLowerCase() === 'y') {
                mainNumString = mainNumString.replace('7,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'h' || String(filteredList[iterate][i]).toLowerCase() === 'q' || String(filteredList[iterate][i]).toLowerCase() === 'z') {
                mainNumString = mainNumString.replace('8,', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'i' || String(filteredList[iterate][i]).toLowerCase() === 'r' ) {
                mainNumString = mainNumString.replace(',9', '');
            }
        };
    };  
    filteredNum = mainNumString;
    klNum.innerHTML = filteredNum;


    


    // Karmic Debt Number 





    // Hidden Passion Number 
    count = 0;
    var filtered, filteredList = [], filteredNum;
    mainNumString = '';
    filteredList = ednfName
    for (let iterate  = 0; iterate < filteredList.length; iterate++) {
        for ( let i = 0; i <= filteredList[iterate].length; i++) {
            if (String(filteredList[iterate][i]).toLowerCase() === 'a' ||  String(filteredList[iterate][i]).toLowerCase() === 'j' || String(filteredList[iterate][i]).toLowerCase() === 's' ) {
                mainNumString += '1';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'b' || String(filteredList[iterate][i]).toLowerCase() === 'k' || String(filteredList[iterate][i]).toLowerCase() === 't') {
                mainNumString += '2';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'c' || String(filteredList[iterate][i]).toLowerCase() === 'l' || String(filteredList[iterate][i]).toLowerCase() === 'u') {
                mainNumString += '3';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'd' || String(filteredList[iterate][i]).toLowerCase() === 'm' || String(filteredList[iterate][i]).toLowerCase() === 'v') {
                mainNumString += '4';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'e' || String(filteredList[iterate][i]).toLowerCase() === 'n' || String(filteredList[iterate][i]).toLowerCase() === 'w') {
                mainNumString += '5';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'f' || String(filteredList[iterate][i]).toLowerCase() === 'o' || String(filteredList[iterate][i]).toLowerCase() === 'x') {
                mainNumString += '6';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'g' || String(filteredList[iterate][i]).toLowerCase() === 'p' || String(filteredList[iterate][i]).toLowerCase() === 'y') {
                mainNumString += '7';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'h' || String(filteredList[iterate][i]).toLowerCase() === 'q' || String(filteredList[iterate][i]).toLowerCase() === 'z') {
                mainNumString += '8';
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'i' || String(filteredList[iterate][i]).toLowerCase() === 'r' ) {
                mainNumString += '9';
            }
        };
    };  
    filteredNum = mainNumString;
    var emptyString = '';
    if (mainNumString.split('1').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 1';
        } else if (emptyString === ''){
            emptyString += '1';
        }
    } 
    if (mainNumString.split('2').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 2';
        } else if (emptyString === '') {
            emptyString += '2';
        }
    }
    if (mainNumString.split('3').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 3';
        } else if (emptyString === '') {
            emptyString += '3';
        }
    }
    if (mainNumString.split('4').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 4';
        } else if (emptyString === '') {
            emptyString += '4';
        }
    } 
    if (mainNumString.split('5').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 5';
        } else if (emptyString === '') {
            emptyString += '5';
        }
    }
    if (mainNumString.split('6').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 6';
        } else if (emptyString === ''){
            emptyString += '6';
        }
    }
    if (mainNumString.split('7').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 7';
        } else if (emptyString === '') {
            emptyString += '7';
        }
    }
    if (mainNumString.split('8').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 8';
        } else if (emptyString === ''){
            emptyString += '8';
        }
    }
    if (mainNumString.split('9').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 9';
        } else if (emptyString === '') {
            emptyString += '9';
        }
    };
    hpNum.innerHTML = emptyString;







    // Hereditary Name Number 
    ednfName = fName.value.split(' ');
    var lastName = ednfName[ednfName.length - 1];
    indexList = lastName;
    
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'a' ||  String(indexList[i]).toLowerCase() === 'j' || String(indexList[i]).toLowerCase() === 's' ) {
            count += 1;
        } else if (String(indexList[i]).toLowerCase() === 'b' || String(indexList[i]).toLowerCase() === 'k' || String(indexList[i]).toLowerCase() === 't') {
            count += 2;
        } else if (String(indexList[i]).toLowerCase() === 'c' || String(indexList[i]).toLowerCase() === 'l' || String(indexList[i]).toLowerCase() === 'u') {
            count += 3;
        } else if (String(indexList[i]).toLowerCase() === 'd' || String(indexList[i]).toLowerCase() === 'm' || String(indexList[i]).toLowerCase() === 'v') {
            count += 4;
        } else if (String(indexList[i]).toLowerCase() === 'e' || String(indexList[i]).toLowerCase() === 'n' || String(indexList[i]).toLowerCase() === 'w') {
            count += 5;
        } else if (String(indexList[i]).toLowerCase() === 'f' || String(indexList[i]).toLowerCase() === 'o' || String(indexList[i]).toLowerCase() === 'x') {
            count += 6;
        } else if (String(indexList[i]).toLowerCase() === 'g' || String(indexList[i]).toLowerCase() === 'p' || String(indexList[i]).toLowerCase() === 'y') {
            count += 7;
        } else if (String(indexList[i]).toLowerCase() === 'h' || String(indexList[i]).toLowerCase() === 'q' || String(indexList[i]).toLowerCase() === 'z') {
            count += 8;
        } else if (String(indexList[i]).toLowerCase() === 'i' || String(indexList[i]).toLowerCase() === 'r' ) {
            count += 9;
        }
    };
    if (count === 10) {
        count = 1
    } else if (count > 10) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        count = sum;
    };
    hnNum.innerHTML = count;
    
    


    // CornerStone Letter 
    ednfName = fName.value.split(' ');
    var firstLetter = ednfName[0][0].toUpperCase();
    cstNum.innerHTML = firstLetter;





    // Physical Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'd' ||  String(indexList[i]).toLowerCase() === 'e' || String(indexList[i]).toLowerCase() === 'm' || String(indexList[i]).toLowerCase() === 'n' || String(indexList[i]).toLowerCase() === 'v' || String(indexList[i]).toLowerCase() === 'w' ) {
            count += 1;
        } 
    };
    ppoeNum.innerHTML = count;




    // Mental Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'a' ||  String(indexList[i]).toLowerCase() === 'h' || String(indexList[i]).toLowerCase() === 'j' || String(indexList[i]).toLowerCase() === 'q' || String(indexList[i]).toLowerCase() === 's' || String(indexList[i]).toLowerCase() === 'z' ) {
            count += 1;
        } 
    };
    mpoeNum.innerHTML = count;





    // Intuitive Plane of Expressioon Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'g' ||  String(indexList[i]).toLowerCase() === 'i' || String(indexList[i]).toLowerCase() === 'p' || String(indexList[i]).toLowerCase() === 'r' || String(indexList[i]).toLowerCase() === 'y' ) {
            count += 1;
        } 
    };
    ipoeNum.innerHTML = count;




    // Emotional Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'b' ||  String(indexList[i]).toLowerCase() === 'c' || String(indexList[i]).toLowerCase() === 'f' || String(indexList[i]).toLowerCase() === 'k' || String(indexList[i]).toLowerCase() === 'l' || String(indexList[i]).toLowerCase() === 'o' || String(indexList[i]).toLowerCase() === 't' || String(indexList[i]).toLowerCase() === 'u' || String(indexList[i]).toLowerCase() === 'x' ) {
            count += 1;
        } 
    };
    epoeNum.innerHTML = count;


    // Chapters of Life: Period Cycle 

    // First Period Life Cycle 
    monthHold;
    // mSplit = String(monthHold).split('');
    // sum = eval(mSplit.join('+'));
    // monthHold = sum;
    if (monthHold === 10) {
        monthHold = 1;
    } else if (monthHold === 11) {
        monthHold = 11;
    } else if (monthHold === 12) {
        monthHold = 3
    } else {
        monthHold;
    };

    if (monthHold === 1) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 26'
    } else if (monthHold === 2) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 34'
    } else if (monthHold === 3) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 33'
    } else if (monthHold === 4) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 32'
    } else if (monthHold === 5) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 31'
    } else if (monthHold === 6) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 30'
    } else if (monthHold === 7) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 29'
    } else if (monthHold === 8) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 28'
    } else if (monthHold === 9) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 27'
    } else if (monthHold === 11) {
        fpCycle.innerHTML = monthHold + '/from birth to age  0 - 34'
    } else if (monthHold === 22) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 32'
    } else if (monthHold === 33) {
        fpCycle.innerHTML = monthHold + '/from birth to age 0 - 30'
    };

    // Second Cycle Life 
    dayHold;
    mSplit = String(dayHold).split('');
    sum = eval(mSplit.join('+'));
    dayHold = sum;
    if (dayHold === 10) {
        dayHold = 1;
    } else if (dayHold === 11) {
        dayHold = 11;
    } else if (dayHold === 22) {
        dayHold = 22
    } else if (dayHold === 33 ) {
        dayHold = 33
    } else if (dayHold > 11 ) {
        mSplit = String(dayHold).split('');
        sum = eval(mSplit.join('+'));
        dayHold = sum;
    }  else {
        dayHold;
    };
    if (dayHold === 1) {
        spCycle.innerHTML = dayHold + '/from age 26 to 53'
    } else if (dayHold === 2) {
        spCycle.innerHTML = dayHold + '/from age 34 to 61'
    } else if (dayHold === 3) {
        spCycle.innerHTML = dayHold + '/from age 33 to 60'
    } else if (dayHold === 4) {
        spCycle.innerHTML = dayHold + '/from age 32 to 59'
    } else if (dayHold === 5) {
        spCycle.innerHTML = dayHold + '/from age 31 to 58'
    } else if (dayHold === 6) {
        spCycle.innerHTML = dayHold + '/from age 30 to 57'
    } else if (dayHold === 7) {
        spCycle.innerHTML = dayHold + '/from age 29 to 56'
    } else if (dayHold === 8) {
        spCycle.innerHTML = dayHold + '/from age 28 to 55'
    } else if (dayHold === 9) {
        spCycle.innerHTML = dayHold + '/from age 27 to 54'
    } else if (dayHold === 11) {
        spCycle.innerHTML = dayHold + '/from age 34 to 61'
    } else if (dayHold === 22) {
        spCycle.innerHTML = dayHold + '/from age 32 to 59'
    } else if (dayHold === 33) {
        spCycle.innerHTML = dayHold + '/from age 30 to 57'
    };

    // Third Period Cycle 
    yearHold;
    mSplit = String(yearHold).split('');
    sum = eval(mSplit.join('+'));
    yearHold = sum;
    if (yearHold === 10) {
        yearHold = 1;
    } else if (yearHold === 11) {
        yearHold = 11;
    } else if (yearHold === 22) {
        yearHold = 22
    } else if (yearHold === 33 ) {
        yearHold = 33
    } else if (yearHold > 11 ) {
        mSplit = String(yearHold).split('');
        sum = eval(mSplit.join('+'));
        yearHold = sum;
    }  else {
        yearHold;
    };
    if (yearHold === 1) {
        tpCycle.innerHTML = yearHold + '/from age 53 and on'
    } else if (yearHold === 2) {
        tpCycle.innerHTML = yearHold + '/from age 61 and on'
    } else if (yearHold === 3) {
        tpCycle.innerHTML = yearHold + '/from age 60 and on'
    } else if (yearHold === 4) {
        tpCycle.innerHTML = yearHold + '/from age 59 and on'
    } else if (yearHold === 5) {
        tpCycle.innerHTML = yearHold + '/from age 58 and on'
    } else if (yearHold === 6) {
        tpCycle.innerHTML = yearHold + '/from age 57 and on'
    } else if (yearHold === 7) {
        tpCycle.innerHTML = yearHold + '/from age 56 and on'
    } else if (yearHold === 8) {
        tpCycle.innerHTML = yearHold + '/from age 55 and on'
    } else if (yearHold === 9) {
        tpCycle.innerHTML = yearHold + '/from age 54 and on'
    } else if (yearHold === 11) {
        tpCycle.innerHTML = yearHold + '/from age 61 and on'
    } else if (yearHold === 22) {
        tpCycle.innerHTML = yearHold + '/from age 59 and on'
    } else if (yearHold === 33) {
        tpCycle.innerHTML = yearHold + '/from age 57 and on'
    };





    // Season Of Your Life : Pinnacle # 

    // First Pinnacle
    monthHold = Number(dMonth.value);
    dayHold = Number(dDay.value);
    yearHold = Number(dYear.value);
    dayHold, monthHold, yearHold;

    if (monthHold === 10) {
        monthHold = 1;
    } else if (monthHold === 11) {
        monthHold = 2;
    } else if (monthHold === 12) {
        monthHold = 3
    } else {
        monthHold;
    };

    mSplit = String(dayHold).split('');
    sum = eval(mSplit.join('+'));
    if (sum === 10) {
        sum = 1;
    } else if (sum === 11) {
        sum = 2;
    } else if (sum === 22) {
        sum = 4;
    } else if (sum === 33) {
        sum = 6;
    } else if (sum < 10) {
        sum;
    } else {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
    }
    var fpSum = monthHold + sum;
    dayHold = sum;

    if (fpSum === 10) {
        fpSum = 1;
    } else if (fpSum === 11 || fpSum === 22 || fpSum === 33) {
        fpSum;
    } else if (fpSum < 10) {
        fpSum;
    } else {
        mSplit = String(fpSum).split('');
        sum = eval(mSplit.join('+'));
        fpSum = sum;
    }
    
    if (fpSum === 1) {
        fPin.innerHTML = fpSum + '/from birth to age 35'
    } else if (fpSum === 2) {
        fPin.innerHTML = fpSum + '/from birth to age 34'
    } else if (fpSum === 3) {
        fPin.innerHTML = fpSum + '/from birth to age 33'
    } else if (fpSum === 4) {
        fPin.innerHTML = fpSum + '/from birth to age 32'
    } else if (fpSum === 5) {
        fPin.innerHTML = fpSum + '/from birth to age 31'
    } else if (fpSum === 6) {
        fPin.innerHTML = fpSum + '/from birth to age 30'
    } else if (fpSum === 7) {
        fPin.innerHTML = fpSum + '/from birth to age 29'
    } else if (fpSum === 8) {
        fPin.innerHTML = fpSum + '/from birth to age 28'
    } else if (fpSum === 9) {
        fPin.innerHTML = fpSum + '/from birth to age 27'
    } else if (fpSum === 11) {
        fPin.innerHTML = fpSum + '/from birth to age 34'
    } else if (fpSum === 22) {
        fPin.innerHTML = fpSum + '/from birth to age 32'
    } else if (fpSum === 33) {
        fPin.innerHTML = fpSum + '/from birth to age 30'
    };


    // Second Pinnacle 
    dayHold;
    yearHold = Number(dYear.value);

    mSplit = String(yearHold).split('');
    sum = eval(mSplit.join('+'));
    if (sum === 10) {
        sum = 1;
    } else if (sum === 11) {
        sum = 2;
    } else if (sum === 22) {
        sum = 4;
    } else if (sum === 33) {
        sum = 6;
    } else if (sum < 10) {
        sum;
    } else {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
    };
    yearHold = sum;
    var spSum = dayHold + yearHold;

    if (spSum === 10) {
        spSum = 1;
    } else if (spSum === 11 || spSum === 22 || spSum === 33 || spSum < 10) {
        spSum;
    } else {
        mSplit = String(spSum).split('');
        sum = eval(mSplit.join('+'));
        spSum = sum;
    };

    if (spSum === 1) {
        sPin.innerHTML = spSum + '/from age 35 to 44'
    } else if (spSum === 2) {
        sPin.innerHTML = spSum + '/from age 34 to 43'
    } else if (spSum === 3) {
        sPin.innerHTML = spSum + '/from age 33 to 42'
    } else if (spSum === 4) {
        sPin.innerHTML = spSum + '/from age 32 to 41'
    } else if (spSum === 5) {
        sPin.innerHTML = spSum + '/from age 31 to 40'
    } else if (spSum === 6) {
        sPin.innerHTML = spSum + '/from age 30 to 39'
    } else if (spSum === 7) {
        sPin.innerHTML = spSum + '/from age 29 to 38'
    } else if (spSum === 8) {
        sPin.innerHTML = spSum + '/from age 28 to 37'
    } else if (spSum === 9) {
        sPin.innerHTML = spSum + '/from age 27 to 36'
    } else if (spSum === 11) {
        sPin.innerHTML = spSum + '/from age 34 to 43'
    } else if (spSum === 22) {
        sPin.innerHTML = spSum + '/from age 32 to 41'
    } else if (spSum === 33) {
        sPin.innerHTML = spSum + '/from age 30 to 39'
    };


    // Third Pinnacle Cycle 
    var tpSum = fpSum + spSum;

    if (tpSum === 10) {
        tpSum = 1;
    } else if (tpSum === 11 || tpSum === 22 || tpSum === 33 || tpSum < 10) {
        tpSum;
    } else {
        mSplit = String(tpSum).split('');
        sum = eval(mSplit.join('+'));
        tpSum = sum;
    };

    if (tpSum === 1) {
        tPin.innerHTML = tpSum + '/from age 44 to 53'
    } else if (tpSum === 2) {
        tPin.innerHTML = tpSum + '/from age 43 to 52'
    } else if (tpSum === 3) {
        tPin.innerHTML = tpSum + '/from age 42 to 51'
    } else if (tpSum === 4) {
        tPin.innerHTML = tpSum + '/from age 41 to 50'
    } else if (tpSum === 5) {
        tPin.innerHTML = tpSum + '/from age 40 to 49'
    } else if (tpSum === 6) {
        tPin.innerHTML = tpSum + '/from age 39 to 48'
    } else if (tpSum === 7) {
        tPin.innerHTML = tpSum + '/from age 38 to 47'
    } else if (tpSum === 8) {
        tPin.innerHTML = tpSum + '/from age 37 to 46'
    } else if (tpSum === 9) {
        tPin.innerHTML = tpSum + '/from age 36 to 45'
    } else if (tpSum === 11) {
        tPin.innerHTML = tpSum + '/from age 43 to 52'
    } else if (tpSum === 22) {
        tPin.innerHTML = tpSum + '/from age 41 to 50'
    } else if (tpSum === 33) {
        tPin.innerHTML = tpSum + '/from age 39 to 48'
    };


    // fourth pinnacle 
    var ftSum = monthHold + yearHold;

    if (ftSum === 10) {
        ftSum = 1;
    } else if (ftSum === 11 || ftSum === 22 || ftSum === 33 || ftSum < 10) {
        ftSum;
    } else {
        mSplit = String(ftSum).split('');
        sum = eval(mSplit.join('+'));
        ftSum = sum;
    };
    

    if (ftSum === 1) {
        ftPin.innerHTML = ftSum + '/from age 53 and on'
    } else if (ftSum === 2) {
        ftPin.innerHTML = ftSum + '/from age 52 and on'
    } else if (ftSum === 3) {
        ftPin.innerHTML = ftSum + '/from age 51 and on'
    } else if (ftSum === 4) {
        ftPin.innerHTML = ftSum + '/from age 50 and on'
    } else if (ftSum === 5) {
        ftPin.innerHTML = ftSum + '/from age 49 and on'
    } else if (ftSum === 6) {
        ftPin.innerHTML = ftSum + '/from age 48 and on'
    } else if (ftSum === 7) {
        ftPin.innerHTML = ftSum + '/from age 47 and on'
    } else if (ftSum === 8) {
        ftPin.innerHTML = ftSum + '/from age 46 and on'
    } else if (ftSum === 9) {
        ftPin.innerHTML = ftSum + '/from age 45 and on'
    } else if (ftSum === 11) {
        ftPin.innerHTML = ftSum + '/from age 52 and on'
    } else if (ftSum === 22) {
        ftPin.innerHTML = ftSum + '/from age 50 and on'
    } else if (ftSum === 33) {
        ftPin.innerHTML = ftSum + '/from age 48 and on'
    };



    // Challenges in Life 

    // First Challenge 
    dayHold, monthHold, yearHold;
    fCha;

    var fAnim = dayHold - monthHold;
    if (fAnim < 0) {
        fAnim = fAnim * (-1);
    } else {
        fAnim;
    };
    fCha.innerHTML = fAnim;

    // Second Challenge 
    sCha;
    var sAnim = yearHold - dayHold;
    if (sAnim < 0) {
        sAnim = sAnim * (-1);
    } else {
        sAnim;
    };
    sCha.innerHTML = sAnim;

    // Third Challenge 
    var tAnim = sAnim - fAnim;

    if (tAnim < 0) {
        tAnim = tAnim * (-1);
    } else {
        tAnim;
    };
    tCha.innerHTML = tAnim;

    // Forth Challenge 
    var ftAnim = yearHold - monthHold;
    if (ftAnim < 0) {
        ftAnim = ftAnim * (-1)
    } else {
        ftAnim;
    };
    ftCha.innerHTML = ftAnim;


















    document.querySelector('.hide').style.display = 'block';

});

document.getElementById('reset').addEventListener('click', ()=> {
    document.querySelector('.hide').style.display = 'none';
    cName.value = '';
    fName.value = '';
    dBrith.value = '';
})

function changeDefault(event) {
    event.preventDefault();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', changeDefault);