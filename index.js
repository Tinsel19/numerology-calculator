

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
var fpCycleNum = document.getElementById('fpCycleNum');

var spCycle = document.getElementById('spCycle');
var spCycleNum = document.getElementById('spCycleNum');

var tpCycle = document.getElementById('tpCycle');
var tpCycleNum = document.getElementById('tpCycleNum');

var fPin = document.getElementById('fPin');
var fPinNum = document.getElementById('fPinNum');

var sPin = document.getElementById('sPin');
var sPinNum = document.getElementById('sPinNum');

var tPin = document.getElementById('tPin');
var tPinNum = document.getElementById('tPinNum');

var ftPin = document.getElementById('ftPin');
var ftPinNum = document.getElementById('ftPinNum');

var fCha = document.getElementById('fCha');
var fChaNum = document.getElementById('fChaNum');

var sCha = document.getElementById('sCha');
var sChaNum = document.getElementById('sChaNum');

var tCha = document.getElementById('tCha');
var tChaNum = document.getElementById('tChaNum');

var ftCha = document.getElementById('ftCha');
var ftChaNum = document.getElementById('ftChaNum')

var phtrNum = document.getElementById('phtrNum');
var metrNum = document.getElementById('metrNum');
var sptrNum = document.getElementById('sptrNum');
var escyNum = document.getElementById('escyNum');





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
    } else if (Number(dayString) > 10) {
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
    } else if (Number(sumYearArray) > 10) {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        sumYearArray = xsum;
    }

    console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var keepDay = sumDayArray;
    var kdHold = sum;

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
        bdNum.innerHTML = parseInt(dayString) + '/' + '<b>5</b>';
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
        } else if (countList[x] < 10) {
            dbSumHoldList.push(countList[x]);
            dbResult = countList[x];
        } else if (countList[x] === 10) {
            dbSumHoldList.push(1);
            dbResult = '1';
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
    var dfList = [];
    var suhdSplit, sum,  suhdSumList = [], suhdResult, y, count = 0;
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            sum = 11
        } else if (countList[x] === 10) {
            sum = 1;
        } else if (countList[x] < 10) {
            sum = countList[x];
        } else if (countList[x] === 22) {
            sum = 22
        } else if (countList[x] === 33) {
            sum = 33;
        } else {
            suhdSplit = String(countList[x]).split('');
            sum = eval(suhdSplit.join('+'));
            suhdSumList.push(sum);
            x = eval(countList.join('+'));
            var xx = String(x).split('');
            sum = eval(xx.join('+'));
            y = eval(suhdSplit.join('+'));
        };
        dfList.push(sum);
    };

    count = 0;
    for (let i = 0; i < dfList.length; i++) {
        count += dfList[i];
    };
    if (count < 10) {
        sum = count;
        suhdNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (count === 10){
        sum = 1;
        suhdNum.innerHTML = '10/<b>'+ 1+ '</b>';
    } else if (count === 11 || count === 22 || count === 33) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        suhdNum.innerHTML = count + '/<b>' +sum+ '</b>';
    } else {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        suhdNum.innerHTML = '<b>' +sum+ '</b>';
    }

    suHold = sum;
    // suhdNum.innerHTML = '<b>' +sum+ '</b>';





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
    var suhdSplit, sum,  suhdSumList = [], sum1, sum2;
    count = 0;
    for (let x = 0; x <= countList.length; x++) {
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
            count = 1;
        } else {

            mSplit = String(countList[x]).split('');
            sum1 = eval(dbSplit.join('+'));
            count+= sum1;
            
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
    // console.log(countList)
    var pnSplit, sum,  pnSumList = [];
    for (let x = 0; x < countList.length; x++) {
        if ( countList[x] < 10) {
            count += countList[x];
        } else if (countList[x] === 11) {
            count += 11;
        } else if (countList[x] === 22) {
            count == 22;
        } else if (countList[x] === 33) {
            count += 33;
        } else if (countList[x] === 10) {
            count += 1;
        } else if (countList[x] > 10 ) {
            pnSplit = String(countList[x]).split('');
            sum = eval(pnSplit.join('+'));
            count += sum;
            // pnSumList.push(sum);        
        }
    };
    // console.log(count)
    var count1;
    if (count < 10) {
        count;
        pNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        pNum.innerHTML = 10 + '/<b>1</b>' ;
        // count1 = 1;
    } else if (count === 11 || count === 22 || count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
        // count1 =  sum;
        
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        // count1 = sum;
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
        count = sum
    }
    pnHold = count ;
    // pNum.innerHTML = count + '/<b>' +count1+ '</b>' ;



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
    console.log(subtract);
    if (subtract < 0) {
        subtract = subtract * (-1);
    } else {
        subtract;
    }
    lpebNum.innerHTML = String(subtract)



    // Heart's Desire ? Personlaity Bridge Number 
    hdpbNum.innerHTML;
    var hdPB = suHold - pnHold;
    var x = hdPB;
    if (x < 1) {
        hdPB = x * (-1);
    } else {
        hdPB = x;
    }
    hdpbNum.innerHTML = hdPB;



    // Rational Thought Number
    var x;
    var firstName = fName.value.split(' ')[0];
    count = 0;
    countList = [];
    for ( let i = 0; i <= firstName.length; i++) {
        if (String(firstName[i]).toLowerCase() === 'a' ||  String(firstName[i]).toLowerCase() === 'j' || String(firstName[i]).toLowerCase() === 's' ) {
            count += 1;
        } else if (String(firstName[i]).toLowerCase() === 'b' || String(firstName[i]).toLowerCase() === 'k' || String(firstName[i]).toLowerCase() === 't') {
            count += 2;
        } else if (String(firstName[i]).toLowerCase() === 'c' || String(firstName[i]).toLowerCase() === 'l' || String(firstName[i]).toLowerCase() === 'u') {
            count += 3;
        } else if (String(firstName[i]).toLowerCase() === 'd' || String(firstName[i]).toLowerCase() === 'm' || String(firstName[i]).toLowerCase() === 'v') {
            count += 4;
        } else if (String(firstName[i]).toLowerCase() === 'e' || String(firstName[i]).toLowerCase() === 'n' || String(firstName[i]).toLowerCase() === 'w') {
            count += 5;
        } else if (String(firstName[i]).toLowerCase() === 'f' || String(firstName[i]).toLowerCase() === 'o' || String(firstName[i]).toLowerCase() === 'x') {
            count += 6;
        } else if (String(firstName[i]).toLowerCase() === 'g' || String(firstName[i]).toLowerCase() === 'p' || String(firstName[i]).toLowerCase() === 'y') {
            count += 7;
        } else if (String(firstName[i]).toLowerCase() === 'h' || String(firstName[i]).toLowerCase() === 'q' || String(firstName[i]).toLowerCase() === 'z') {
            count += 8;
        } else if (String(firstName[i]).toLowerCase() === 'i' || String(firstName[i]).toLowerCase() === 'r' ) {
            count += 9;
        };
        countList.push(count)
        count = 0;
        
    };
    count = 0;
    if (countList.length === 1) {
        if (countList[0] < 10) {
            rtNum.innerHTML = countList[0]
        } else if (countList[0] === 10) {
            rtNum.innerHTML = '1'
        } else if (countList[0] === 11 || countList[0] === 22 || countList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            rtNum.innerHTML = countList + '/' + sum;
        } else {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            rtNum.innerHTML = sum;
        }
    } else if (countList.length > 1) {
        for (let i = 0; i <= countList.length; i++) {
            if(countList[i] < 10) {
                count += countList[i];
            } else if (countList[i] === 10) {
                count += 1
            } else if (countList[i] === 11 || countList[i] === 22 || countList[33]) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count += sum;
            } else if (countList[i] > 10) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count += sum;
            }
        };
        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1;
        } else if (count === 11 || count === 22 || count === 33) {
            count ;
        } else if (count > 10) {
            mSplit = String(count).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
        };
    
    }
    
    var rtResult = count + keepDay;
    var sumHold ;
    if (rtResult < 10) {
        rtNum.innerHTML = rtResult;
    } else if (rtResult === 10) {
        rtNum.innerHTML = '1';
    } else if (rtResult === 11 || rtResult === 22 || rtResult === 33) {
        mSplit = String(rtResult).split('');
        sum = eval(mSplit.join('+'));
        rtNum.innerHTML = rtResult + '/' + sum;
    } else if (rtResult > 10) {
        mSplit = String(rtResult).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            rtNum.innerHTML = sum;
        } else if (sum === 10) {
            rtNum.innerHTML = '1';
        } else if (sum === 11 || sum === 22 || sum === 33) {
            sumHold = count;
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            rtNum.innerHTML = sumHold + '/' + sum ;
        } else if (sum > 10) {
            // sumHold = count;
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            rtNum.innerHTML = sum ;
        }
        // rtNum.innerHTML = sum;
    }

    // rtNum.innerHTML = String(x);



    // Balance Number
    var indexName = 0;
    var indexList = [];
    count = 0;
    ednfName = fName.value.split(' ');
    for (let i = 0; i < ednfName.length; i++) {
        indexName = ednfName[i][0];
        indexList.push(indexName);
    };
    // console.log(indexList)
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
    // console.log(count)
    if (count < 10) {
        bnNum.innerHTML = count;
    } else if (count === 10) {
        bnNum.innerHTML = '10/1';
    } else if (count === 11 || count === 22 || count === 33) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        bnNum.innerHTML = count + '/' + sum;
    } else if (count > 10) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        bnNum.innerHTML =  sum;
    }
    // bnNum.innerHTML = count;




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
    ednfName = fName.value.split(' ');
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
                mainNumString = mainNumString.replace('8', '');
            } else if (String(filteredList[iterate][i]).toLowerCase() === 'i' || String(filteredList[iterate][i]).toLowerCase() === 'r' ) {
                mainNumString = mainNumString.replace(',9', '');
            }
        };
    };

    if (mainNumString[mainNumString.length - 1] === ',') {
        mainNumString = mainNumString.slice(0, -1);
    }
    var test = mainNumString.split(',');
    var testLength = 9 - test.length;
    ssNum.innerHTML = testLength;
    
    filteredNum = mainNumString;
    klNum.innerHTML = filteredNum;


    


    // Karmic Debt Number
    kdNum;
    if (kdHold === 13) {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === 14) {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === 16) {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === 19) {
        kdNum.innerHTML = '19/1'
    } else {
        kdNum.innerHTML = 'None'
    }
    





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
    // console.log(mainNumString)
    filteredNum = mainNumString;
    var emptyString = '';
    if (mainNumString.split('1').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 1';
        } else if (emptyString === ''){
            emptyString += '1';
        }
    };
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
    indexList = ednfName.split(' ');
    count = 0;
    countList = [];
    var finalList = []

    for ( let i = 0; i < indexList.length; i++) {
        for (let ii = 0; ii < indexList[i].length; ii++) {
            if (String(indexList[i][ii]).toLowerCase() === 'd' || String(indexList[i][ii]).toLowerCase() === 'm' ) {
                    count += 4;
            } else if (String(indexList[i][ii]).toLowerCase() === 'e' || String(indexList[i][ii]).toLowerCase() === 'w') {
                    count += 5;
            }
            
        }
        countList.push(count);
        count = 0;
    };
    for (let i = 0; i < countList.length; i++) {
        if (countList[i] < 10) {
            sum = countList[i];
            finalList.push(sum);
        } else if (countList === 10) {
            sum = 1;
            finalList.push(sum);
        } else if (countList[i] === 11) {
            sum = 11;
            finalList.push(sum);
        } else if (countList[i] === 22) {
            sum = 22;
        } else if (countList[i] === 33) {
            sum = 33;
            finalList.push(sum);
        } else {
            mSplit = String(countList[i]).split('');
            sum = eval(mSplit.join('+'));
            finalList.push(sum);
        }
    };
    var sumCount = 0;
    count = 0;
    if (finalList.length === 1) {
        if (finalList[0] < 10) {
            count = finalList[0];
            ppoeNum.innerHTML = count;
        } else if (finalList[0] === 10) {
            count = 1;
            ppoeNum.innerHTML = count;
        } else if (finalList[0] === 11 || finalList[0] === 22 || finalList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = countList[0] + '/' + sum;
            ppoeNum.innerHTML = count;
        } else {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
            ppoeNum.innerHTML = count;
        }
        sumCount = count;
    } else if (finalList.length > 1) {
        for (let i = 0; i < finalList.length; i++) {
            if (finalList[i] < 10) {
                count = finalList[i]
            } else if (finalList[i] === 10) {
                count = 1;
            } else if (finalList[i] === 11 || finalList[i] === 22 || finalList[i] === 33) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = countList[i] ;
            } else {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = sum;
            }

            sumCount += count
        }
        mSplit = String(sumCount).split('');
        sum = eval(mSplit.join('+'));
        // console.log(sum);
        if (sum === 1) {
            count = '10/1';
            ppoeNum.innerHTML = count;
        } else if (sum < 10) {
            count = sum;
            ppoeNum.innerHTML = count;
        } else if (sum === 11 || sum === 22 || sum === 33) {
            count = sum;
            ppoeNum.innerHTML = count;
        } else {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
            ppoeNum.innerHTML = count;
        }
    };

    // mSplit = String(sumCount).split('');
    // sum = eval(mSplit.join('+'));
    // console.log(sum);
    // if (sum === 1) {
    //     count = '10/1';
    //     ppoeNum.innerHTML = count;
    // } else if (sum < 10) {
    //     count = sum;
    //     ppoeNum.innerHTML = count;
    // } else if (sum === 11 || sum === 22 || sum === 33) {
    //     count = sum;
    //     ppoeNum.innerHTML = count;
    // } else {
    //     mSplit = String(sum).split('');
    //     sum = eval(mSplit.join('+'));
    //     count = sum;
    //     ppoeNum.innerHTML = count;
    // }
    // count = sum;

    // ppoeNum.innerHTML = count;




    // Mental Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName.split(' ');
    count = 0;
    countList = [];
    var finalList = []

    for ( let i = 0; i < indexList.length; i++) {
        for (let ii = 0; ii < indexList[i].length; ii++) {
            if (String(indexList[i][ii]).toLowerCase() === 'a' || String(indexList[i][ii]).toLowerCase() === 'j' ) {
                    count += 1;
            } else if (String(indexList[i][ii]).toLowerCase() === 'l' ) {
                    count += 3;
            } else if (String(indexList[i][ii]).toLowerCase() === 'n' ) {
                count += 5;
            } else if (String(indexList[i][ii]).toLowerCase() === 'p' || String(indexList[i][ii]).toLowerCase() === 'g') {
                count += 7;
            } else if (String(indexList[i][ii]).toLowerCase() === 'h' ) {
                count += 8;
            }
        }
        countList.push(count);
        count = 0;
    };
    // console.log(countList)
    for (let i = 0; i < countList.length; i++) {
        if (countList[i] < 10) {
            sum = countList[i];
            finalList.push(sum);
        } else if (countList === 10) {
            sum = 1;
            finalList.push(sum);
        } else if (countList[i] === 11) {
            sum = 11;
            finalList.push(sum);
        } else if (countList[i] === 22) {
            sum = 22;
        } else if (countList[i] === 33) {
            sum = 33;
            finalList.push(sum);
        } else {
            mSplit = String(countList[i]).split('');
            sum = eval(mSplit.join('+'));
            finalList.push(sum);
        }
    };
    // console.log(finalList);
    count = 0;
    sumCount = 0;
    if (finalList.length === 1) {
        if (finalList[0] < 10) {
            count = finalList[0];
            mpoeNum.innerHTML = count;
        } else if (finalList[0] === 10) {
            // count = 1;
            mpoeNum.innerHTML = '10/1';
        } else if (finalList[0] === 11 || finalList[0] === 22 || finalList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = countList[0] + '/' + sum;
            mpoeNum.innerHTML = count;
        } else {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
            mpoeNum.innerHTML = count;
        } 
    
    } else if (finalList.length > 1) {
        for (let i = 0; i < finalList.length; i++) {
            if (finalList[i] < 10) {
                count = finalList[i];
                
            } else if (finalList[i] === 10) {
                count = 1;
            } else if (finalList[i] === 11 || finalList[i] === 22 || finalList[i] === 33) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = countList[i] + '/' + sum;
            } else {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = sum;
            }
            sumCount += count
            
        }
        // mSplit = String(sumCount).split('');
        // sum = eval(mSplit.join('+'));
        sum = sumCount;
        if (sum < 10) {
            count = sum;
            mpoeNum.innerHTML = count;
        } else if (sum === 10) {
            count = 1;
            mpoeNum.innerHTML = '10/1';
        } else if (sum === 11 || sum === 22 || sum === 33) {
            count = sum;
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            mpoeNum.innerHTML = count + '/' + sum;
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            mpoeNum.innerHTML = sum;
        }
        // count = sum;
        
    }






    // Intuitive Plane of Expressioon Number 
    ednfName = fName.value;
    indexList = ednfName.split(' ');
    count = 0;
    countList = [];
    var finalList = []

    for ( let i = 0; i < indexList.length; i++) {
        for (let ii = 0; ii < indexList[i].length; ii++) {
            if (String(indexList[i][ii]).toLowerCase() === 'k'  ) {
                    count += 2;
            } else if (String(indexList[i][ii]).toLowerCase() === 'u' || String(indexList[i][ii]).toLowerCase() === 'c'  ) {
                    count += 3;
            } else if (String(indexList[i][ii]).toLowerCase() === 'v' ) {
                count += 4;
            } else if (String(indexList[i][ii]).toLowerCase() === 'f') {
                count += 6;
            } else if (String(indexList[i][ii]).toLowerCase() === 'y' ) {
                count += 7;
            } else if (String(indexList[i][ii]).toLowerCase() === 'q' ) {
                count += 8;
            }
        }
        countList.push(count);
        count = 0;
    };
    // console.log(countList)
    for (let i = 0; i < countList.length; i++) {
        if (countList[i] < 10) {
            sum = countList[i];
            finalList.push(sum);
        } else if (countList === 10) {
            sum = 1;
            finalList.push(sum);
        } else if (countList[i] === 11) {
            sum = 11;
            finalList.push(sum);
        } else if (countList[i] === 22) {
            sum = 22;
        } else if (countList[i] === 33) {
            sum = 33;
            finalList.push(sum);
        } else {
            mSplit = String(countList[i]).split('');
            sum = eval(mSplit.join('+'));
            finalList.push(sum);
        }
    };
    // console.log(finalList);
    count = 0;
    sumCount = 0;
    if (finalList.length === 1) {
        if (finalList[0] < 10) {
            count = finalList[0];
            ipoeNum.innerHTML = count;
        } else if (finalList[0] === 10) {
            count = 1;
            ipoeNum.innerHTML = '10/1';
        } else if (finalList[0] === 11 || finalList[0] === 22 || finalList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = countList[0] + '/' + sum;
            ipoeNum.innerHTML = count;
        } else {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
            ipoeNum.innerHTML = count;
        } 
    
    } else if (finalList.length > 1) {
        for (let i = 0; i < finalList.length; i++) {
            if (finalList[i] < 10) {
                count = finalList[i];
                
            } else if (finalList[i] === 10) {
                count = 1;
            } else if (finalList[i] === 11 || finalList[i] === 22 || finalList[i] === 33) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = countList[i] + '/' + sum;
            } else {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = sum;
            }
            sumCount += count
            
        }
        // mSplit = String(sumCount).split('');
        // sum = eval(mSplit.join('+'));
        sum = sumCount;
        if (sum < 10) {
            count = sum;
            ipoeNum.innerHTML = count;
        } else if (sum === 10) {
            // count = 1
            ipoeNum.innerHTML = '10/1';
        } else if (sum === 11 || sum === 22 || sum === 33) {
            count = sum
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            ipoeNum.innerHTML = count + '/' + sum;
        } else {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            ipoeNum.innerHTML = sum;
        }
        count = sum;
        // ipoeNum.innerHTML = count;
    }
    // count = sumCount
    




    // Emotional Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName.split(' ');
    count = 0;
    countList = [];
    var finalList = []

    for ( let i = 0; i < indexList.length; i++) {
        for (let ii = 0; ii < indexList[i].length; ii++) {
            if (String(indexList[i][ii]).toLowerCase() === 's'  ) {
                    count += 1;
            } else if (String(indexList[i][ii]).toLowerCase() === 'b' || String(indexList[i][ii]).toLowerCase() === 't'  ) {
                    count += 2;
            } else if (String(indexList[i][ii]).toLowerCase() === 'o' || String(indexList[i][ii]).toLowerCase() === 'x' ) {
                count += 6;
            } else if (String(indexList[i][ii]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(indexList[i][ii]).toLowerCase() === 'i' || String(indexList[i][ii]).toLowerCase() === 'r' ) {
                count += 9;
            } 
        }
        countList.push(count);
        count = 0;
    };
    // console.log(countList)
    for (let i = 0; i < countList.length; i++) {
        if (countList[i] < 10) {
            sum = countList[i];
            finalList.push(sum);
        } else if (countList === 10) {
            sum = 1;
            finalList.push(sum);
        } else if (countList[i] === 11) {
            sum = 11;
            finalList.push(sum);
        } else if (countList[i] === 22) {
            sum = 22;
        } else if (countList[i] === 33) {
            sum = 33;
            finalList.push(sum);
        } else {
            mSplit = String(countList[i]).split('');
            sum = eval(mSplit.join('+'));
            finalList.push(sum);
        }
    };
    // console.log(finalList);
    count = 0;
    sumCount = 0;
    if (finalList.length === 1) {
        if (finalList[0] < 10) {
            // count = finalList[0];
            epoeNum.innerHTML = count;
        } else if (finalList[0] === 10) {
            // count = 1;
            epoeNum.innerHTML = '10/<b>1</b>';
        } else if (finalList[0] === 11 || finalList[0] === 22 || finalList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            // count = countList[0] + '/' + sum;
            epoeNum.innerHTML =finalList[0]  +'/'+ sum ;
        } else {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
            count = sum;
            epoeNum.innerHTML = sum;
        } 
    
    } else if (finalList.length > 1) {
        for (let i = 0; i < finalList.length; i++) {
            if (finalList[i] < 10) {
                count = finalList[i]
            } else if (finalList[i] === 10) {
                count = 1;
            } else if (finalList[i] === 11 || finalList[i] === 22 || finalList[i] === 33) {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = countList[i] ;
            } else {
                mSplit = String(countList[i]).split('');
                sum = eval(mSplit.join('+'));
                count = sum;
            }
            sumCount += count
            
        }
        sum = sumCount;
        // console.log(sum)
        if (sum < 10) {
            // count = sum
            epoeNum.innerHTML = sum;
        } else if (sum === 10) {
            // count = 1;
            epoeNum.innerHTML = '10/1';
        } else if (sum === 11 || sum === 22 || sum === 33) {
            count = sum;
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            epoeNum.innerHTML = count + '/' + sum;
        } else if (sum > 10){
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            epoeNum.innerHTML = sum;
        }
        count = sum;
        // epoeNum.innerHTML = count;
        
    }
    // count = sumCount
    


    // Chapters of Life: Period Cycle 

    // First Period Life Cycle 
    monthHold;
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
        fpCycle.innerHTML = 'from birth to age 0 - 26';
        fpCycleNum.innerHTML = monthHold
    } else if (monthHold === 2) {
        fpCycle.innerHTML = 'from birth to age 0 - 34';
        fpCycleNum.innerHTML = monthHold
    } else if (monthHold === 3) {
        fpCycle.innerHTML = 'from birth to age 0 - 33';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 4) {
        fpCycle.innerHTML = 'from birth to age 0 - 32';
        fpCycle.innerHTML = monthHold;
    } else if (monthHold === 5) {
        fpCycle.innerHTML = 'from birth to age 0 - 31';
        fpCycleNum.innerHTML = monthHold
    } else if (monthHold === 6) {
        fpCycle.innerHTML = 'from birth to age 0 - 30';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 7) {
        fpCycle.innerHTML = 'from birth to age 0 - 29';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 8) {
        fpCycle.innerHTML = 'from birth to age 0 - 28';
        fpCycleNum.innerHTML = monthHold
    } else if (monthHold === 9) {
        fpCycle.innerHTML = 'from birth to age 0 - 27';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 11) {
        fpCycle.innerHTML = 'from birth to age  0 - 34';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 22) {
        fpCycle.innerHTML = 'from birth to age 0 - 32';
        fpCycleNum.innerHTML = monthHold;
    } else if (monthHold === 33) {
        fpCycle.innerHTML = 'from birth to age 0 - 30';
        fpCycleNum.innerHTML = monthHold;
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
        spCycle.innerHTML = 'from age 26 to 53';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 2) {
        spCycle.innerHTML = 'from age 34 to 61'
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 3) {
        spCycle.innerHTML = 'from age 33 to 60';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 4) {
        spCycle.innerHTML = 'from age 32 to 59';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 5) {
        spCycle.innerHTML = 'from age 31 to 58';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 6) {
        spCycle.innerHTML = 'from age 30 to 57';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 7) {
        spCycle.innerHTML = 'from age 29 to 56';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 8) {
        spCycle.innerHTML = 'from age 28 to 55';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 9) {
        spCycle.innerHTML = 'from age 27 to 54';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 11) {
        spCycle.innerHTML = 'from age 34 to 61';
        spCycleNum.innerHTML = dayHold
    } else if (dayHold === 22) {
        spCycle.innerHTML = 'from age 32 to 59';
        spCycleNum.innerHTML = dayHold;
    } else if (dayHold === 33) {
        spCycle.innerHTML = 'from age 30 to 57';
        spCycleNum.innerHTML = dayHold;
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
        tpCycle.innerHTML =  'from age 53 and on';
        tpCycleNum.innerHTML = yearHold;
    } else if (yearHold === 2) {
        tpCycle.innerHTML = 'from age 61 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 3) {
        tpCycle.innerHTML = 'from age 60 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 4) {
        tpCycle.innerHTML = 'from age 59 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 5) {
        tpCycle.innerHTML = 'from age 58 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 6) {
        tpCycle.innerHTML = 'from age 57 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 7) {
        tpCycle.innerHTML = 'from age 56 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 8) {
        tpCycle.innerHTML = 'from age 55 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 9) {
        tpCycle.innerHTML =  'from age 54 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 11) {
        tpCycle.innerHTML = 'from age 61 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 22) {
        tpCycle.innerHTML = 'from age 59 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (yearHold === 33) {
        tpCycle.innerHTML = 'from age 57 and on'
        tpCycleNum.innerHTML = yearHold
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
        fPin.innerHTML = 'from birth to age 35'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 2) {
        fPin.innerHTML = 'from birth to age 34'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 3) {
        fPin.innerHTML = 'from birth to age 33'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 4) {
        fPin.innerHTML = 'from birth to age 32'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 5) {
        fPin.innerHTML = 'from birth to age 31'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 6) {
        fPin.innerHTML = 'from birth to age 30'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 7) {
        fPin.innerHTML = 'from birth to age 29'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 8) {
        fPin.innerHTML = 'from birth to age 28'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 9) {
        fPin.innerHTML = 'from birth to age 27'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 11) {
        fPin.innerHTML = 'from birth to age 34'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 22) {
        fPin.innerHTML = 'from birth to age 32'
        fPinNum.innerHTML = fpSum;
    } else if (fpSum === 33) {
        fPin.innerHTML = 'from birth to age 30'
        fPinNum.innerHTML = fpSum;
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
        sPin.innerHTML = 'from age 35 to 44';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 2) {
        sPin.innerHTML = 'from age 34 to 43';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 3) {
        sPin.innerHTML = 'from age 33 to 42';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 4) {
        sPin.innerHTML = 'from age 32 to 41';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 5) {
        sPin.innerHTML = 'from age 31 to 40';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 6) {
        sPin.innerHTML = 'from age 30 to 39';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 7) {
        sPin.innerHTML = 'from age 29 to 38';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 8) {
        sPin.innerHTML = 'from age 28 to 37';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 9) {
        sPin.innerHTML = 'from age 27 to 36';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 11) {
        sPin.innerHTML = 'from age 34 to 43';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 22) {
        sPin.innerHTML = 'from age 32 to 41';
        sPinNum.innerHTML = spSum;
    } else if (spSum === 33) {
        sPin.innerHTML = 'from age 30 to 39';
        sPinNum.innerHTML = spSum;
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
        tPin.innerHTML = 'from age 44 to 53';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 2) {
        tPin.innerHTML = 'from age 43 to 52';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 3) {
        tPin.innerHTML = 'from age 42 to 51';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 4) {
        tPin.innerHTML = 'from age 41 to 50';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 5) {
        tPin.innerHTML = 'from age 40 to 49';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 6) {
        tPin.innerHTML = 'from age 39 to 48';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 7) {
        tPin.innerHTML = 'from age 38 to 47';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 8) {
        tPin.innerHTML = 'from age 37 to 46';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 9) {
        tPin.innerHTML = 'from age 36 to 45';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 11) {
        tPin.innerHTML = 'from age 43 to 52';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 22) {
        tPin.innerHTML = 'from age 41 to 50';
        tPinNum.innerHTML = tpSum
    } else if (tpSum === 33) {
        tPin.innerHTML = 'from age 39 to 48';
        tPinNum.innerHTML = tpSum
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
        ftPin.innerHTML = 'from age 53 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 2) {
        ftPin.innerHTML = 'from age 52 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 3) {
        ftPin.innerHTML = 'from age 51 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 4) {
        ftPin.innerHTML = 'from age 50 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 5) {
        ftPin.innerHTML = 'from age 49 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 6) {
        ftPin.innerHTML = 'from age 48 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 7) {
        ftPin.innerHTML = 'from age 47 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 8) {
        ftPin.innerHTML = 'from age 46 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 9) {
        ftPin.innerHTML = 'from age 45 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 11) {
        ftPin.innerHTML = 'from age 52 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 22) {
        ftPin.innerHTML = 'from age 50 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (ftSum === 33) {
        ftPin.innerHTML = 'from age 48 and on';
        ftPinNum.innerHTML = ftSum;
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
    fChaNum.innerHTML = fAnim;

    // Second Challenge 
    sCha;
    var sAnim = yearHold - dayHold;
    if (sAnim < 0) {
        sAnim = sAnim * (-1);
    } else {
        sAnim;
    };
    sChaNum.innerHTML = sAnim;

    // Third Challenge 
    var tAnim = sAnim - fAnim;

    if (tAnim < 0) {
        tAnim = tAnim * (-1);
    } else {
        tAnim;
    };
    tChaNum.innerHTML = tAnim;

    // Forth Challenge 
    var ftAnim = yearHold - monthHold;
    if (ftAnim < 0) {
        ftAnim = ftAnim * (-1)
    } else {
        ftAnim;
    };
    ftChaNum.innerHTML = ftAnim;







    // Tansit Cycle

    // Physical Transit
    ednfName = fName.value.split(' ');
    lastName = ednfName[ednfName.length - 1];
    indexList = lastName;
    firstName = ednfName[0];
    count = 0;
    
    for ( let i = 0; i <= firstName.length; i++) {

        if (String(firstName[i]).toLowerCase() === 'a' ||  String(firstName[i]).toLowerCase() === 'j' || String(firstName[i]).toLowerCase() === 's' ) {
            count += 1;
        } else if (String(firstName[i]).toLowerCase() === 'b' || String(firstName[i]).toLowerCase() === 'k' || String(firstName[i]).toLowerCase() === 't') {
            count += 2;
        } else if (String(firstName[i]).toLowerCase() === 'c' || String(firstName[i]).toLowerCase() === 'l' || String(firstName[i]).toLowerCase() === 'u') {
            count += 3;
        } else if (String(firstName[i]).toLowerCase() === 'd' || String(firstName[i]).toLowerCase() === 'm' || String(firstName[i]).toLowerCase() === 'v') {
            count += 4;
        } else if (String(firstName[i]).toLowerCase() === 'e' || String(firstName[i]).toLowerCase() === 'n' || String(firstName[i]).toLowerCase() === 'w') {
            count += 5;
        } else if (String(firstName[i]).toLowerCase() === 'f' || String(firstName[i]).toLowerCase() === 'o' || String(firstName[i]).toLowerCase() === 'x') {
            count += 6;
        } else if (String(firstName[i]).toLowerCase() === 'g' || String(firstName[i]).toLowerCase() === 'p' || String(firstName[i]).toLowerCase() === 'y') {
            count += 7;
        } else if (String(firstName[i]).toLowerCase() === 'h' || String(firstName[i]).toLowerCase() === 'q' || String(firstName[i]).toLowerCase() === 'z') {
            count += 8;
        } else if (String(firstName[i]).toLowerCase() === 'i' || String(firstName[i]).toLowerCase() === 'r' ) {
            count += 9;
        }
    };
    phtrNum.innerHTML = count + ' years'
    

    // Mental Transit 
    var fullString = fName.value;
    ednfName = fName.value.split(' ');
    lastName = ednfName[ednfName.length - 1];
    indexList = lastName;
    var middleName = ednfName[0];
    count = 0;
















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