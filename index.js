

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





calculate.addEventListener('click', ()=> {
    
    ccName.textContent = cName.value;
    ffName.textContent = fName.value;
    ddBirth.textContent = dBirth.value;
    
    var date = dBrith.value;
    
    var dayString = date.split('-')[2];
    var monthString = date.split('-')[1];
    var yearString = date.split('-')[0];

    // // // // console.log(dayString);
    // // // // console.log(monthString);
    // // // // console.log(yearString);

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
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var lsum = sum;
    var lpHold, edHold, suHold, pnHold;
    while (sum > 10) {
        if (sum === 11) {
            lpNum.textContent = '11/2';
            sum = 2;
            break
        } else if(sum === 22) {
            lpNum.textContent = '22/4';
            sum = 4;
            break;
        } else if (sum === 33) {
            lpNum.textContent = '33/6';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (sum === 10) {
                lpNum.textContent = numberString + '/' + 10 + '/1';
            } else {
                lpNum.textContent = lsum + '/' +sum;
            }
        }
    };
    lpHold = sum;




    // Birthday Number 
    if (sumDayArray === 1) {
        bdNum.textContent = '1';
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
        edNum.textContent = dbTotalSum + '/1' ;
    } else if (dbTotalSum === 19) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 28) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 37) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 46) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 55) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 64) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 73) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 82) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 91) {
        edNum.textContent = dbTotalSum + '/' + nSum + '/1';
    }
    else {
        edNum.textContent = dbTotalSum + '/' + nSum;
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
        medNum.textContent = dbTotalSum + '/1' ;
    } else if (dbTotalSum < 10) {
        medNum.textContent = dbTotalSum ;
    } else if (dbTotalSum === 19) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 28) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 37) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 46) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 55) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 64) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 73) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 82) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    } else if (dbTotalSum === 91) {
        medNum.textContent = dbTotalSum + '/' + nSum + '/1';
    }
    else {
        medNum.textContent = dbTotalSum + '/' + nSum;
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
    var suhdSplit, sum,  suhdSumList = [], suhdResult, y;
    for (let x = 0; x < countList.length; x++) {
        if (countList[x] === 11) {
            suhdResult = '11/2';
        } else if (countList[x] === 22) {
            suhdResult = '22/4';
        } else if (countList[x] === 33) {
            suhdResult = '33/4';
        } else {
            suhdSplit = String(countList[x]).split('');
            sum = eval(suhdSplit.join('+'));
            suhdSumList.push(sum);
            suhdResult = eval(suhdSumList.join('+'));
            x = eval(countList.join('+'));
            sum = x + '/'+ eval(suhdSplit.join('+'));
            y = eval(suhdSplit.join('+'));
        }
    }
    suHold = y;
    suhdNum.textContent = sum;





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
            // suhdSplit = String(countList[x]).split('');
            // sum = eval(suhdSplit.join('+'));
            // suhdSumList.push(sum);
            // suhdResult = eval(suhdSumList.join('+'));
            x = eval(countList.join('+'));
            msuHold = eval(suhdSplit.join('+'));
            sum = x + '/'+ eval(suhdSplit.join('+'));
        }
    }
    msuhdNum.textContent = sum;





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
    pNum.textContent = count ;



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
    mpNum.textContent = count ;


    // Muaturity Number 
    count = lpHold + edHold;
    mSplit = String(count).split('');
    sum = eval(mSplit.join('+'));
    mNum.textContent = count + '/' + sum;


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
    // } else if (intMonthNum > 10) {
    //     mSplit = intMonthNum(intMonthNum).split('');
    //     sum = eval(mSplit.join('+'));
    //     intMonthNum = sum;
    // }

    sumAttitude = intDayNum + intMonthNum;
    if (sumAttitude === 10) {
        sumAttitude = 1;
    } else if (sumAttitude > 10) {
        mSplit = String(sumAttitude).split('');
        sum = eval(mSplit.join('+'));
        sumAttitude = sum;
    }
    aNum.textContent = sumAttitude;




    // life Path / Expression Bridge 
    var subtract = lpHold - edHold;
    if (subtract < 0) {
        subtract = 1;
    } else {
        subtract;
    }
    lpebNum.textContent = String(subtract)



    // Heart's Desire ? Personlaity Bridge Number 
    hdpbNum.textContent;
    var hdPB = suHold - pnHold;
    var x = hdPB;
    if (x < 1) {
        hdPB = 1;
    } else {
        hdPB = x;
    }
    hdpbNum.textContent = hdPB;



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
    rtNum.textContent = String(x);



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
    bnNum.textContent = count;




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
    ssNum.textContent = count;





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
    klNum.textContent = filteredNum;


    


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
    hpNum.textContent = emptyString;







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
    hnNum.textContent = count;
    
    


    // CornerStone Letter 
    ednfName = fName.value.split(' ');
    var firstLetter = ednfName[0][0].toUpperCase();
    cstNum.textContent = firstLetter;





    // Physical Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'd' ||  String(indexList[i]).toLowerCase() === 'e' || String(indexList[i]).toLowerCase() === 'm' || String(indexList[i]).toLowerCase() === 'n' || String(indexList[i]).toLowerCase() === 'v' || String(indexList[i]).toLowerCase() === 'w' ) {
            count += 1;
        } 
    };
    ppoeNum.textContent = count;




    // Mental Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'a' ||  String(indexList[i]).toLowerCase() === 'h' || String(indexList[i]).toLowerCase() === 'j' || String(indexList[i]).toLowerCase() === 'q' || String(indexList[i]).toLowerCase() === 's' || String(indexList[i]).toLowerCase() === 'z' ) {
            count += 1;
        } 
    };
    mpoeNum.textContent = count;





    // Intuitive Plane of Expressioon Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'g' ||  String(indexList[i]).toLowerCase() === 'i' || String(indexList[i]).toLowerCase() === 'p' || String(indexList[i]).toLowerCase() === 'r' || String(indexList[i]).toLowerCase() === 'y' ) {
            count += 1;
        } 
    };
    ipoeNum.textContent = count;




    // Emotional Plane of Expression Number 
    ednfName = fName.value;
    indexList = ednfName;
    count = 0;
    for ( let i = 0; i <= indexList.length; i++) {

        if (String(indexList[i]).toLowerCase() === 'b' ||  String(indexList[i]).toLowerCase() === 'c' || String(indexList[i]).toLowerCase() === 'f' || String(indexList[i]).toLowerCase() === 'k' || String(indexList[i]).toLowerCase() === 'l' || String(indexList[i]).toLowerCase() === 'o' || String(indexList[i]).toLowerCase() === 't' || String(indexList[i]).toLowerCase() === 'u' || String(indexList[i]).toLowerCase() === 'x' ) {
            count += 1;
        } 
    };
    epoeNum.textContent = count;

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
