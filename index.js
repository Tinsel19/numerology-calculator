

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
var bdText = document.getElementById('bdText');

var edNum= document.getElementById('edNum');
var medNum = document.getElementById('medNum');
var emeText = document.getElementById('emeText');
var memeText = document.getElementById('memeText');

var suhdText = document.getElementById('suhdText');
var msuhdText = document.getElementById('msuhdText')
var suhdNum = document.getElementById('suhdNum');
var msuhdNum = document.getElementById('msuhdNum');

var pNum = document.getElementById('pNum');
var perText = document.getElementById('perText');
var mperText = document.getElementById('mperText')
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
var fpCycleText = document.getElementById('fpCycleText')

var spCycle = document.getElementById('spCycle');
var spCycleNum = document.getElementById('spCycleNum');
var spCycleText = document.getElementById('spCycleText');

var tpCycle = document.getElementById('tpCycle');
var tpCycleNum = document.getElementById('tpCycleNum');
var tpCycleText = document.getElementById('tpCycleText');


var fPin = document.getElementById('fPin');
var fPinNum = document.getElementById('fPinNum');
var fpPinText = document.getElementById('fpPinText');

var sPin = document.getElementById('sPin');
var sPinNum = document.getElementById('sPinNum');
var spPinText = document.getElementById('spPinText');

var tPin = document.getElementById('tPin');
var tPinNum = document.getElementById('tPinNum');
var tpPinText = document.getElementById('tpPinText');

var ftPin = document.getElementById('ftPin');
var ftPinNum = document.getElementById('ftPinNum');
var ftpPinText = document.getElementById('ftpPinText')

var fCha = document.getElementById('fCha');
var fChaNum = document.getElementById('fChaNum');
var fChaText = document.getElementById('fChaText');

var sCha = document.getElementById('sCha');
var sChaNum = document.getElementById('sChaNum');
var sChaText = document.getElementById('sChaText');

var tCha = document.getElementById('tCha');
var tChaNum = document.getElementById('tChaNum');
var tChaText = document.getElementById('tChaText');

var ftCha = document.getElementById('ftCha');
var ftChaNum = document.getElementById('ftChaNum');
var ftChaText = document.getElementById('ftChaText');

var phtrNum = document.getElementById('phtrNum');
var metrNum = document.getElementById('metrNum');
var sptrNum = document.getElementById('sptrNum');
var escyNum = document.getElementById('escyNum');

var phyText = document.getElementById('phyText');
// var spiText = document.getElementById('spiText');
// var menText = document.getElementById('menText');
var essText = document.getElementById('essText');

var cYear = document.getElementById('cYear');
var cYearNum = document.getElementById('cYearNum');
var perYearText = document.getElementById('perYearText')

var cMonth = document.getElementById('cMonth');
var cMonthNum = document.getElementById('cMonthNum');
var perMonthText = document.getElementById('perMonthText')

var cDay = document.getElementById('cDay');
var cDayNum = document.getElementById('cDayNum');
var perDayText = document.getElementById('perDayText');

var bornDayText = document.getElementById('bornDayText');



calculate.addEventListener('click', ()=> {
    if (cName.textContent === '' || fName.textContent === '') {
        document.querySelector('.hide').style.display = 'none';
    }
    document.querySelector('.hide').style.display = 'none';

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
    } else if (Number(dayString) === 20) {
        sumDayArray = 2;
    } else if (Number(dayString) === 30) {
        sumDayArray = 3;
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
        if (xsum < 10) {
            xsum
        } else if (xsum === 10) {
            xsum = 1
        } else if (xsum === 11 || xsum === 22 || xsum === 33) {
            xsum
        } else if (xsum > 10) {
            mSplit = String(xsum).split('');
            xsum = eval(mSplit.join('+'));
        }
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var ddayHold = sumDayArray;
    var mmonthHold = sumMonthArray;
    var yyearHold = sumYearArray;
    var keepDay = sumDayArray;
    var kdHold = sum;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        lpNum.innerHTML = '<b>' +sum+ '</b>';
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
    
    var lifePathText = (lpNum.textContent).trim();
    var lifePathNum = lifePathText.split('/');


    if (lifePathText === '11/2') {
        lpText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p> 
        The Life Path number represents the path you’ll take in this life. It
        exposes your true self, our life purpose, strengths, weaknesses,
        abilities, and goals, as well as how you will develop through life. It also
        gives details about your life mission, the lessons you must learn over
        your lifetime, and the best career options for you to pursue. It also
        reveals the tone of your experiences and why things happen the way
        they do: past, present, and future. It's one of the most crucial of your
        chart's core numbers. Any single digit from 1 to 9, as well as Master
        Numbers 11, 22, and 33, are life path numbers. To calculate your Life
        Path number, add the month, day, and year of your birth together and
        continue until you reach a single digit. 
        </p> <br> <br>

        <h3 class="bold-description-label">Life Path Number 11/2</h3> <br>
        <p>
        As a Life Path Master 11 person, you have a keen sense of intuition
        and may possess psychic talents. You have a profound calling that
        connects you to the spiritual realm and gives you the ability to see
        visions. You're expected to utilize your abilities to inspire others and
        improve humanity. Although it may take some time for you to fully
        comprehend the power you have. You are being directed by a higher
        power and vibrating at a very high frequency. You're a very sensitive
        person who should rely on your intuition to lead you through life. <br><br>
        
        Although you may have difficulty trusting and improving your special
        abilities. <br> <br>
        You're quite spiritual and have a strong sense of being connected to
        God. Most people with the life path number 11 have had a difficult and
        complicated life or came from shattered homes, and they may wonder
        why things are happening to them. Even though your childhood may
        not have been a happy one, it was filled with difficulties and
        tribulations. Despite this, you have become stronger and wiser as a
        result of your sorrow. You must learn to evaluate your emotions and
        painful history or experiences effectively. Recognize that you are
        driven, intelligent, and have a wonderful calling as a communicator,
        teacher, or healer. Life will test you in order to drive you closer to your
        purpose. <br> <br>
        You might achieve enormous success or fame but also huge
        disappointment if you lack confidence and don't comprehend your life
        path. You should focus on establishing some order in your life so that
        you don't roam aimlessly and can put your skills to use. Recognize
        that all of the challenges and tests you face in life are there to help you
        grow. One of your most important teachings is that you must first heal
        yourself before you can use your power. Because you've been through
        a lot, you can effectively resolve problems and make amazing
        judgments when you heal yourself. Other people are often pulled or
        attracted to you since you have a great spirit. <br> <br>
        
        You must not turn your back on your specific abilities in order to
        complete this 11-life journey, or you will experience inner confusion.
        You must use your psychic talent to connect with your life's mission.
        You will get incredible spiritual clarity as a result of doing so. If you’re
        vibrating on the positive side of your life path number 11, you are
        highly intuitive, inspire people, inventive, creative, excellent manifesto,
        co-operative, accepting, sensitive, intellectual, leader, compassionate,
        team player, bring illumination, counselor, teacher, innovator,
        mediator, diplomatic, driven, spiritual, intuitive, mystic, psychic, healer,
        empathic. <br> <br> 
        You place a high value on companionship or relationships. Without
        companionship or love, you feel empty, therefore you require to be
        loved. Since you are an empath, you can sense the suffering and
        emotion of others, your marriage will be generally successful. You'll be
        able to tell when your spouse is upset. You're an excellent
        communicator and listener who strives for balance in your
        surroundings. You are devoted to your loved ones and loyal to them.
        You're a born mediator who will make concessions in a relationship for
        the sake of harmony. Just remember that you were born to make a big
        difference in the world, and as a result, you have the power to
        positively influence a lot of people's lives.
        </p> 
        `   } else if (lifePathText === '22/4') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>

            <h3 class="bold-description-label">Life Path Number 22/4</h3> <br>
            <p>
            As a Life Path Master 22 person, you're a master builder because you
            have a unique calling or set of abilities for transforming unformed
            concepts into tangible realities. In life, you can achieve a great deal of
            success. You have incredible potential, talent, and strength to lay the
            groundwork for a foundation that will benefit or enhance society. You
            have a spiritual link to God or other sources. You are both obligated
            and burdened to use your talent to improve the future of the universe.
            You have the ability to dream big and make it happen. You're a
            devoted individual who isn't afraid to put in the long hours. Your
            practicality is what allows you to succeed in life and comprehend what
            has to be done in order to succeed. <br> <br>
            You're also a great teacher since you have a strong desire to share
            your knowledge and encourage others to pursue their dreams. You not
            only have the ability to lead yourself, but also others. You don't let your
            emotions get in the way of your goals, and no one raised the standard
            higher than you. If you are on the positive side of this life path, you are
            very intuitive, visionary, builder of society, practical, achiever,
            diplomatic, filled with potential, great manifesto, influential, kind,
            dependable, empathic, honest, stable, hard worker, confident,
            organized, disciplined, balance, and empath. <br> <br>
            You may struggle with having life path number 22 in your early years,
            and it may not appear until later in life. You may face several 
            hardships or come from a broken household in order to be pushed
            toward your life's mission. Recognize that all of the challenges and
            tests you face in life are there to help you grow. One of your most
            important teachings is that you must first heal yourself before you can
            use your power. <br> <br>
            You must put your abilities to practical use in the actual world or you
            will become aimless. You can achieve anything you concentrate your
            energy toward, so be sure you're pushing yourself in the appropriate
            direction. You place a high priority on friendship and relationships. In
            life, you want to be comfortable. To be happy, you need a prosperous,
            stable life, family, work, home, and foundation. Your loved ones adore
            you because you are dependable, devoted, and honest to them.
            Because you are a dedicated individual, you are more likely to stay in
            an unhealthy relationship. You're a reliable and emotionally supportive
            spouse who wants to develop a healthy and long-lasting relationship.
            You'll need a life partner who understands and supports your goals.
            If you are on the <b>negative side</b> of your life path number 22, you can
            be a very lazy person, and have high expectations, people can easily
            take advantage of your kindness. You can have extreme anxiety and
            stress, workaholic, mental overload, insanity, illness, unstable, very
            controlling, destructive, rigid, huge ego, damaging, oversensitive, feel
            like a victim, worrying about the future or life, codependent, discontent,
            wasted talents, vulnerable, manipulative, and Inflexible. Depended on
            others instead of self; complainer, and emotional. Prone to depression
            and nervousness, as well as a reluctance to pursue your passions.
            You may find it difficult to adjust to change and are frequently criticized
            for your lack of ambition. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.
            
            </p>
            `
        } else if (lifePathText === '33/6') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 33/6</h3> <br>
            <p>
            As a Life Path Master 33 person, you are a master teacher, a healer,
            and an extraordinary spiritual leader who is committed to teaching
            people how to connect to their own hearts and awareness. Honesty
            and integrity are values that you hold dear. If you are on the positive
            side of your life path number 33, you are caring, loving,
            compassionate, empathic, supportive, nurturing, communicator,
            sensible, responsible, devoted, idealistic, highly self-expressive,
            beautifully inspired creative, imaginative, jovial, concern about the
            community and family. You like helping people. You are kind, accepting, 
            gentle, respectful, peaceful, stable, responsible, loving
            caring, devoted, caretaker, domestic, harmonious, balanced, and
            attractive. <br> <br>
            Others want to be around you because you convey warm and friendly
            energy. You have a natural ability to work with people and provide
            support and advice. You feel that having a love connection, a family,
            and a house are all necessary for success. You are willing to sacrifice
            yourself for the sake of others and the greater benefit of peace, even if
            it means ignoring your own wants and satisfaction. You’re more
            concerned with how you can serve mankind than with how you can
            assist yourself. <br> <br>
            You have the ability to guide people along the correct road. This life
            path 33 might feel both beneficial and burdensome. With this life path
            number 33, you may have to face a succession of obstacles and
            hardships. Recognize that all of the challenges and tests you face in
            life are there to help you grow. One of the most important truths you'll
            learn is that you must first heal yourself before you can help others.
            You can feel a sense of spiritual empathy and understanding. You are
            gentle, dedicated, have a strong sense of obligation, and want to
            nurture. You'd be a fantastic fit for a career in counseling, nursing,
            teaching, medicine, charity work, community service, or the healing
            arts. <br> <br>
            Your weaknesses are that you are a perfectionist, controlling, have
            very high moral standards, higher critical, high expectations,
            irresponsible, prone to depression and anxiety, fear of rejection or
            criticism, indulgent, meddling, huge ego, idealization, self-destructive,
            bad listener, self-righteous, childish, untrusting, disorganized,
            scattered. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers. 
            </p>
            `
        } else if (lifePathText === '1' || lifePathNum[lifePathNum.length - 1] === 1) {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 1</h3> <br>
            <p>
            As a life path number 1 person, you are a natural-born leader with a
            unique attitude, boundless energy, and a passion for the arts. You
            have a tremendous desire to be the best. Because you have a lot of
            trust in yourself and are a diligent worker, you are ambitious and can
            achieve whatever you choose to do in life. You have a lot of
            determination and drive. You are self-sufficient, inventive, and
            energetic, and you are not afraid to try new things. If you are vibrating
            on the positive side of your life path 1, you are a very independent,
            idealistic, and self-determined person. You know how to look after
            yourself. Because you are confident and have a propensity to be
            extremely effective at managing and leading other people. You are
            highly self-sufficient, self-reliable, and you know how to get things
            done on your own. <br> <br>
            Others will want to follow your lead because of your self-confidence,
            and they may envy you. Recognize that you are an extremely creative
            and unique person. Because you want to be the first creator, you
            constantly want to start something unique that no one else has done
            before. You're willing to take a chance and put yourself out there for
            the sake of others or what you believe in. You have the ability to be
            bold, impulsive, and extroverted. You may not want to plan ahead of
            time and prefer to just go with the flow. <br> <br>
            You can quickly get recognition or a high social position since you
            have strong management skills. You can be extremely good at
            listening to others and bringing them together because you have good
            leadership qualities. Your bravery may inspire you to start a
            movement, change something in society, or change a broken custom
            or legislation. You could prefer to work alone since you don't like being
            bossed around. If you work hard, you can go ahead faster than others. 
            You prioritize particular accomplishments and have the potential to
            succeed via your inventiveness and willpower. Spending more time
            with your loved ones and other individuals is something you should
            strive for. You should compliment them rather than criticize them.
            Recognize that you may be bossy and controlling, and you should
            attempt to relax a little. <br> <br>
            If you're vibrating on the negative side of your life path 1, you can be
            arrogant toward others and believe you're superior to them. Because
            you have so much confidence, you might be quite narcissistic and
            have an overblown ego, believing that you are the best and number
            one. You may believe that you know more and are wiser than
            everyone else and that you can manipulate others. Because your
            independence and individuality are so important to you, you might be a
            very self-centered person who only thinks about yourself and not
            about others. You can be very selfish and stubborn, as well as hardheaded and unable to accept other people's advice or listen to other
            points of view. <br> <br>
            When it comes to dealing with others, you may be rigid and hesitant to
            compromise. Your stubbornness and self-centeredness may progress
            to the point where you refuse to take any assistance from others. You
            may receive insufficient help and support from others as a result of
            your personality features, and you may find yourself lonely in life.
            Understand that you may be someone who has a hard time working
            with others because you prefer to do everything on your own and that
            working in groups or doing teamwork with others can be a real
            challenge for you. <br> <br>
            For example, you will strive to avoid any situations in which you feel
            someone else may have power over you, such as when someone
            assumes the role of leader or number one. Emotions, anger, paranoia,
            and fury can all be manifestations of your dominant personality traits.
            Dialogue with you will be difficult and hostile in this situation. If you
            have a supervisor or a boss that is always hovering over you and
            telling you what to do, you may have a lot of problems at work.
            Because you do not enjoy being told what to do, some people on life
            path number 1 may end up jobless or homeless. With authoritative
            figures, you might run into a number of issues. As a result, the ideal
            answer is to either become the boss or to work for yourself by creating
            your own business so that you do not have to report to anybody else.
            You should be aware that you may have a propensity to be
            overpowering, which is a form of leadership abuse in which you may
            be dictatorial and bossy to others. You may also be highly rebellious
            and rebels just because you do not want to follow tradition, which can
            be a positive thing in certain instances but, in others, it can grow to the
            point where your disobedience does you or others harm. You have a
            tendency to be impatient if you want to accomplish something now and
            don't want to wait. You can have problems sticking with anything for a
            long time if it demands a lot of patience or has too many steps. You
            can be reluctant and have trouble making your own way in life.
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.
            
            </p>
            `
        } else if (lifePathText === '2' || lifePathText === '20/2' || lifePathNum[lifePathNum.length - 1] === '2') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 2</h3> <br>
            <p>
            As a Life Path number 2, you are insightful, cooperative, and sensitive
            to other people's feelings. You are considerate and patient. You make
            every effort to promote peace wherever you can. If you're on the
            positive side of life path 2, you're looking for balance, harmony, and for
            everyone to get along. Others think of you as a compassionate and
            warm person. You'd rather be a follower than a leader. You can be an
            excellent diplomat since you are a peacemaker. You have a strong
            intuition that you may employ in a variety of scenarios. You have the
            ability to sense what other people are experiencing because of your
            intuitive nature. You're a natural empath. <br> <br>
            You are pleasant, loving, and trustworthy, you get along with a lot of
            people and they like you. You have the power to bring individuals
            together who are at odds, and you can collaborate well with others.
            Counseling, therapy, and social/community work are all wonderful
            careers for you. You dislike being alone and are continuously looking
            for a mate or company. Whatever life throws at you, you handle it
            gracefully and with dignity. You're honest and loyal to those you care
            about. Friendships and relationships are very important to you. Since
            you are a non-confrontational person, your relationship is more likely
            to continue longer than others. <br> <br>
            If you are unhappy or your heart has been shattered, though, you
            might demonstrate a level of wrath that no one could imagine. When
            other people are in agony, you recognize it and want to help them.
            You may find yourself unwilling to make decisions, preferring to remain
            in the background, and being overly sensitive, which you despise.
            Because you are not an argumentative person, this might lead to you
            holding too much inside, which can lead to anxiety or sadness.
            Therefore, you should concentrate on occupations or activities that
            emphasize your strengths. <br> <br>
            If you are vibrating on the <b>negative side</b> of life path 2, you can
            become a people pleaser and a pushover. You may cling to your
            possessions and be preoccupied with little issues. You are
            always worried about the future or other problems. You depend 
            heavily on others rather than yourself. You may find yourself in an
            unsatisfactory or toxic relationship or environment as a result of your
            codependency. You despise being alone and are always looking for a
            company or romantic partnership. You may lack the courage to carry
            out your objectives and, on occasion, delegate initiative to others.
            Because you like pleasing others, you are easily manipulated.
            You could be subservient and give in easily to conflicts or situations.
            You might be subordinate and too sensitive at times, causing your
            feelings to be easily damaged. If there is no peace and quiet in your
            environment, you do not cope well with stress and might get distracted
            and worried. Resentment, poor self-esteem, self-doubt, and a lack of
            confidence are all possibilities. You may avoid taking on any kind of
            leadership or responsibility in order to avoid causing a controversy.
            Even though you may be warm, friendly, and kind, if pushed to the
            limit, you can also be passive-aggressive. Instead of being
            straightforward, you might occasionally manipulate others to acquire
            what you want. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.
            </p>
            `
        } else if (lifePathText === '3' || lifePathText === '12/3' || lifePathText === '21/3' || lifePathText === '30/3' || lifePathNum[lifePathNum.length -1] === 3) {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 3</h3> <br>
            <p>
            As a Life Path number 3 person, you are cognitively attentive and
            possess a very creative mind, particularly in terms of communication.
            You can be a comedian, writer, hairstylist, designer, singer, podcaster,
            teacher, dancer, or poet, and you're an actor, painter, artist, or
            photographer. People would admire you since you come to this earth
            to express yourself and amuse them. You are a joyful person,
            optimistic, fun, kind, considerate, humorous, outgoing, and outspoken
            if you vibrate on the positive side of your life path 3. People are drawn
            to you because you like making new connections. You are a creative
            genius with a multitude of novel ideas. Because of your selfexpression and inventiveness, you are a service provider. Due to your
            artistic abilities, you can easily make money or work for yourself. <br> <br>
            You're an original in that you attempt to keep an optimistic view on life
            and search for the good in everything. You're warm, funny, and
            charming. You certainly have a knack for making others feel better.
            When it comes to problem-solving, you are resourceful and inventive.
            You have an easy time making friends and like socializing. You're
            extroverted, dynamic, and enthusiastic, and you're considerate of
            others. You despise being bored. You like collaborating with others.
            You live in the present moment and worry about the future when it
            arrives. You prefer to work without constraints. When you're stressed,
            you're more likely to work and perform well, which boosts your mental
            energy. Because of your lovely demeanor, you can easily succeed if
            you work hard. You must let your artistic nature flourish and not be
            silent for lengthy periods of time since you were born to express
            yourself. <br> <br>
            If you’re on the <b>negative side</b> of life path 3, your weaknesses are that
            you make snap decisions from time to time, but they aren't always the
            best. You might be extremely gloomy and negative about the future or
            life in general. You may have a pessimistic attitude about many things
            and be dissatisfied with your life or yourself. You may find it difficult to
            prepare ahead of time and lack direction or attention. You must learn
            to be more ambitious and more open to others. You have a tendency
            to be critical and gossipy about others; as a result, you should strive to
            be more sympathetic and diplomatic. Even yet, you enjoy criticizing
            others, but you despise it when others criticize you. <br> <br>
            When you're furious, you might take it out on the people you care
            about and become passive-aggressive. You could get agitated and
            distracted. You are irritable, manipulative, and impulsive, and you
            have a terrible temper. You can be dishonest, noncommittal,
            untrustworthy, and reckless on a regular basis. You may be afraid of
            monotony, have a difficult financial situation, and be scattered,
            unfocused, and unorganized. You may be someone who wastes
            money or is constantly in need of money as a result of your
            negligence. You're opulent and conceited, and you want everything to
            be big and flawless. You want to be the life of the party and the focus
            of attention. You might quickly get hooked on sex, drugs, alcohol, and
            other substances, as well as disingenuous at times.
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.  
            </p>
            `
        } else if (lifePathText === '4' || lifePathText === '13/4' || lifePathText === '31/4' || lifePathText === '40/4' || lifePathNum[lifePathNum.length -1] === '4') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 4</h3> <br>
            <p>
            If you’re vibrating on the positive side of your life path number 4, you
            are a hard worker who is patient, careful, committed, focused,
            determined, logical, self-disciplined, stable, responsible, and
            grounded. Your dedication, commitment, and well-organized work may
            help you achieve great success in anything you undertake. You are a
            natural-born instructor with a wide variety of expertise. You have the
            potential to be a successful business owner or manager. <br> <br>
            Working hard will undoubtedly lead to success later in life. Others
            accept your words when you talk clearly and authoritatively about what
            you know since you are a confident person. You place a high value on
            consistency and teaching. You're in charge of keeping track of
            everything and making sure everything is in order. In life, you want to
            be comfortable and keep a beautiful house. To be happy, you need a
            prosperous, stable life, family, work, and foundation. Your loved ones
            adore you because you are dependable, devoted, and honest with
            them. <br> <br>
            You’re someone who wants to put in the work to acquire what you
            want and to stay competitive. It's admirable that you use your
            practicality to your advantage in all you do. You're not just pragmatic,
            but also conservative. You dislike monotony and changes. You have a
            tendency to make firm conclusions about what is proper and to close
            the door or close your thoughts to anything new or unusual that could
            have an impact on your genuine potential. You know how to manage
            your time well so that you can complete tasks on time. Because you
            are naturally physically powerful, you seek hobbies or occupations that
            allow you to put your physical strength and aptitude to good use.
            You are trustworthy, faithful, and dedicated in your relationships, and
            you expect the same from your spouse. You appreciate trust and
            dependability, so it's great that you've found someone who shares
            your religious beliefs and values. You would never waste your time
            with someone who does not share your beliefs or with whom you are
            incompatible, but once you have found that special someone, you will
            try hard to ensure the relationship is fruitful and long-lasting. If you are
            overly controlling or dull, your relationship may not be the most
            interesting, but it may surely be solid and prosperous. <br> <br>
            If you’re on the <b>negative side</b> of your life path 4, your weaknesses are
            that you can become a workaholic, controlling, stubborn, narrowminded, argumentative, boring, blunt, undisciplined, lazy, insensitive to
            others, dull, worrisome, anxious, materialistic, risk aversion. You can
            also be careless and have a narrow view of life. You might lack
            confidence. You can struggle with change and become negative at
            times. Doesn’t like to take risks and become a complainer. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers. 
            </p>
            `
        } else if (lifePathText === '5' || lifePathText === '14/5' || lifePathText === '23/5' || lifePathText === '32/5' || lifePathText === '41/5' || lifePathNum[lifePathNum.length -1] === '5') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 5</h3> <br>
            <p>
            As a Life Path 5 person, you want freedom, movement, and change,
            and you like traveling. You desire independence above everything
            else, as well as enjoyment and adventure in your life. You're on a
            once-in-a-lifetime journey that no one can stop you from pursuing. You
            get the impression that life is useless if you aren't entertaining or
            having a good time. <br> <br>
            Overall if you are vibrating on the positive side of your life path number
            5, you are funny, outgoing, adventurous, free, friendly, romantic,
            charismatic, flexible, witty, playful, exciting, energetic, adaptable,
            accepting, dynamic, and resourceful. You are unafraid of change and
            transformation. Meeting new people is not an issue for you since you
            are naturally a sociable person who enjoys interacting with others.
            You're always curious about new things, experiences, and ideas.
            Because there is so much in the world for you to learn and experience,
            you want to do so with a broad smile on your face. <br> <br>
            You have natural leadership ability. You are ambitious, yet you may be
            overly sensitive at times, ignoring routine and tedium. You're a highenergy person who is always on the go. You have a tendency to learn
            by doing, and you may find it difficult to be tied down since you are
            afraid of becoming stuck. You'll move on to something more intriguing
            or enjoyable as soon as things in your relationship or environment
            start to get boring. You may struggle to find a sense of direction in life
            if you desire too much independence. You may find it difficult to
            maintain friendships and love connections, and you might be disloyal
            to your spouse at times. You have a proclivity to lose interest and
            abandon a project or relationship before it has a chance to succeed. <br> <br>
            If your spouse doesn't understand your need for independence and
            adventure, your relationship may suffer. So, if you don't allow yourself
            to be an adventurer, you'll suffer psychologically and be miserable.
            You prefer people who have the ability to affect you in some way. You
            are uninterested in traditional 9-5 work since you would feel
            imprisoned and unable to roam as freely as you like. You may change
            jobs several times in your life, so look for jobs or professions that
            provide you the flexibility to move about and make your own
            judgments. Feeling boring is the one thing you despise in life. To you,
            life is about having fun, exploring, learning, engaging, and amusing,
            and you can't wait to do all of these things each day. <br> <br>
            If you’re on the negative side of your life path 5, you may be unstable,
            easily bored, irresponsible, wild, impulsive, reckless, inconsistent,
            destructive, unpredictable, unfaithful/cheating, and non-committal.
            Because you want to try new things, you might become hooked on
            drugs, alcohol, or other substances. Nervousness and restlessness
            are possible side effects. You should keep a record of your emotions,
            occupations, and finances. You despise routine, rules, and restrictions,
            and no one can make you do something you don't want to do.
            Accidents caused by negligence, or a dangerous journey should be
            avoided. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.
            </p>
            `
        } else if (lifePathText === '6' || lifePathText === '15/6' || lifePathText === '24/6' || lifePathText === '42/6' || lifePathText === '51/6' || lifePathNum[lifePathNum.length -1] === '6') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 6</h3> <br>
            <p>
            As a Life Path number 6, you like helping people. You are kind,
            accepting, compassionate, gentle, respectful, peaceful, stable,
            responsible, loving, caring, devoted, caretaker, domestic, harmonious,
            balanced, and attractive. Others want to be around you because you
            convey warm and friendly energy. You have a natural ability to work
            with people and provide support and advice. You feel that having a
            love connection, a family, and a house are all necessary for success.
            You want to be the nurturer, supporter, and comforter for those around
            you. You desire a solid family support system as well as a lovely
            setting in which to live. Understand that most people on the life path 6
            marry or have children at a young age. You are willing to give up
            yourself for the sake of others and the greater benefit of peace, even if
            it means ignoring your own wants and enjoyment. <br> <br>
            You're a natural humanitarian who isn't hesitant to stand up for the
            underserved, raise funds, and provide emotional support and
            protection to people in need. As a result, try not to give too much of
            yourself away along the road. You'll have to make a lot of decisions,
            and it's critical that you make the proper ones so that people don't take
            advantage of your compassionate and supportive nature. You should
            take care of your mental and physical health on a regular basis to
            avoid being burnt out from assisting others. You have the potential to
            be an outstanding counselor, doctor, nurse, healer, firefighter, first
            responder, community or social worker, mentor, or teacher. <br> <br>
            You place a strong emphasis on the material aspect of life and are
            frequently gifted in business and art. Your love is strong and
            passionate. Since you are dedicated to loving, harmony, and ensuring
            that your connection lasts, you are someone who can have a
            successful love life and marriage. Due to the fact that you might be
            demanding or have high expectations, you should seek a mate who
            fulfills your standards. It is essential to devote the same level of
            commitment to yourself as you do to others; only then can you
            genuinely feel satisfied and balanced. <br> <br>
            If you are vibrating on the negative side of your life path 6, your
            weaknesses are that you can be superficial/picky, have high
            standards, self-righteous, bossy, idealization, intolerant, irritate,
            vulnerable, self-sacrifice, hesitate, restless, jealous, backstabber,
            possessive, critical of others, unwilling to change, and gossiping. You
            can have a strong drive for perfection and want everything to be 
            flawless. You can be harsh with others or shove your nose where it
            isn't supposed to be. It's easy to become lost in a relationship. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers. 
            </p>
            `
        } else if (lifePathText === '7' || lifePathText === '16/7' || lifePathText === '25/7' || lifePathText === '34/7' || lifePathNum[lifePathNum.length -1] === '7') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 7</h3> <br>
            <p>
            As a Life Path number 7, you are the truth seekers. The number 7
            represents spiritual awakening, illumination, intuition, enlightenment,
            foresight, introspection, profound, research, knowledge, and isolation.
            You're a bright person with an analytical mind who enjoys studying
            and learning new things. You go under the surface and ask probing
            questions that most would never consider. As a result, basic
            explanations and superficial facts are insufficient for you, this is
            foolishness. You know the real gold is buried down, so you'll keep
            digging until you discover it. In your quest for knowledge, you use a
            wide range of skills, such as questioning, investigating, listening,
            watching, experiencing, and sensing. <br> <br>
            Mental work is more appealing to you than practical work. You're good
            at gathering information and conducting research. You are an intuitive,
            intelligent, deep thinker, wise, visionary, spiritual, psychic, mysterious,
            dreamy, independent, non-materialistic, enigmatic, and curious
            person. You have the potential to build a strong spiritual life or embark
            on a long adventure. As a result, religion, or whatever spiritual path
            you choose, has become an important part of your life. Even though
            you feel one with the world and are always seeking the so-called truth
            in everything; you're someone who has one foot in the physical world
            and one foot out because you often feel like you don't belong here and
            even doubt or question God at times. <br> <br>
            You prefer silence in your environment, and when someone or your
            loved ones disturb your deep concentration, you feel irritated and
            agitated. It takes a particular person to comprehend your desire for
            space and seclusion, which you want because you are always
            thinking. Poverty is the one thing you despise the most. You see the
            charm in everything; therefore, you wonder about the world and your
            existence. You're a person who thinks a lot. This might make it difficult
            for you to function in the physical world, leaving you unable to connect
            with others and emotionally disconnected. For instance, when you are
            in a social environment or have friends or relatives visiting for an
            extended period of time, you may become overwhelmed and reach
            your limitations, forcing you to withdraw to the safety of isolation and
            private away from them. <br> <br>
            You may look distant and disconnected at times, but you are only
            conserving energy. You either have a narrow circle of friends or none
            at all. You should make an effort to spend time with your loved one
            since you have a strong desire to be self-sufficient. If you are left alone
            for an extended period of time, you may become lonely and lose
            companionship. Try not to let your independence prohibit you from
            spending time with friends, family, or even a love relationship.
            Understand that, not only are you a loner, but you also have a sharp
            tongue that can quickly damage someone's feelings. As a result, you
            may be misread and misunderstood by others. You have a high
            standard for yourself, which makes it difficult for you to have a good
            marriage or relationship. Be aware that your life may undergo
            unexpected changes at times. <br> <br>
            Others may see you as being highly secretive; however, it is not
            because you are attempting to hide detrimental secrets; rather, you
            just do not feel the need for others to know all about your life, which is
            why others perceive you as mysterious. Some people might be
            obsessed with you without your knowledge. You should know how
            difficult it is for others to connect with you or see the real you if you
            refuse to allow them in or open yourself. Since you have a difficult time
            believing, you may be paranoid or distrustful of individuals or things,
            ruining something wonderful by making assumptions and accusations,
            or looking for explanations when none exist. Always presuming or
            believing that there's more to the tale when there isn't. <br> <br>
            Others can't lie to you since you have a strong intuition and can
            quickly read people. You'll spot someone lying right away and call
            them out. Overall, you should realize that it is critical to communicate
            with people, live life, and have self-confidence in order to achieve.
            Walking, meditation, and being in the countryside, nature, in the
            mountains, or by the sea will make you feel wonderful. You may have
            a variety of healing abilities, including physical, emotional, and spiritual
            healing. Your analytical mind could work as a surgeon, researcher,
            lawyer, scientist, analyst, detective, spiritual leader or teacher,
            psychotherapist, or in any other profession that requires you to utilize
            your intellect. <br> <br>
            Your <b>weaknesses</b> are that you are secretive, reclusive, suspicious,
            shy, perceptive, reserved/private, skeptical, lonely, cannot stand noisy
            environment, condescending, selfish, out of touch with reality, have
            trust issues, conservative or close-minded, high standard/perfections,
            a lone wolf, paranoia, in the head too much, depressed, constant
            mood swing, distant, isolated, cynical, sharp tongue, pessimistic,
            skeptical, critic, resentful, rumination, have trust issue, obsessive,
            difficulty connecting or communicating at times, complainer/negative,
            easily cut off communication with others or push people away, can
            appear socially awkward or odd to others. Doubtful and curtness.
            Paranoid about others watching or things. Sometimes you may be too
            proud and inaccessible. Independence is important to you; therefore,
            you do not tolerate needy people. Can be careless of other people's
            feelings or problems at times. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers.  
            </p>
            `
        } else if (lifePathText === '8' || lifePathText === '17/8' || lifePathText === '26/8' || lifePathText === '35/8' || lifePathNum[lifePathNum.length - 1] === '8') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 8</h3> <br>
            <p>
            Money, wealth, and power are associated with the number 8.
            Furthermore, this number is linked to excellent administrative,
            entrepreneur, and management abilities. The negative aspects of
            number 8 include dictatorial proclivity, misused or abuse of power,
            stubborn attitude, a procrastinating propensity, and relationship issues.
            Despite the fact that 8 appears to be associated with the material
            world. It has a spiritual component as well. If you have 8 in your <span class='red-span'>core
            chart</span>: <span class='underline'>life path number</span>, <span class='underline'>birth number </span>, <span class='underline'>expression/destiny</span>, <span class= 'underline'>soul
            urge/heart desire</span>, and <span class='underline'>personality number</span>, then you have the number
            8 vibration, which is a very strong energy that can be both powerful
            and destructive. Understand that the more 8s you have in your core
            chart, the more opportunities, prosperity, and achievement you will
            have in life. <br> <br>
            As a Life Path number 8 person, you are driven by ambition and a
            desire for power, wealth, and money. You'll have to go through a lot of
            difficult lessons and trials if you want to be successful in life. You
            create financial objectives for yourself because you want to be
            financially independent. Money and other possessions are valuable to
            you since they serve as rewards and reminders of your hard work.
            You are strong, tenacious, and conservative, and you have
            outstanding management and administrative abilities. If you are
            vibrating on the positive side of your life path 8, you are powerful,
            ambitious, active, balanced, risk-taker, driven, wealthy, successful,
            stable, prosperous, secure, generous/giver, organized, hard worker,
            moneymaker, practical, brave/courageous, well-respected, great at
            dealing with conflict, action-oriented, extroverted, business-minded,
            accomplished, leader, and focused. <br> <br>
            You are a very spiritual person who understands that you are
            connected to source energy and God, thus you will go to any length to
            achieve your goals. You have the ability to manifest whatever you
            desire in your life. You're the CEO, and you're the boss. The material
            world, authority, finance, and inspiration are all symbols of the number
            8. Understand that if you come from an underprivileged home or 
            environment, you may have to work harder to get there than others,
            but with desire and hard effort, you will succeed. Your actual strength
            is resilience. You have a robust physique and fitness level that reflects
            your mental toughness. <br> <br>
            You will have to struggle and learn some painful lessons at the
            beginning of your life so you can become your true self, but you will
            surprise everyone since you were born to be wealthy and successful.
            It is your birthright, especially if your core number contains several 8s.
            Although some 8s have difficulty navigating life, you must recognize
            that taking risks will lead to success; nevertheless, you must always
            be honest, fair, and do things the right way by avoiding cheating,
            manipulating, or stealing. <br> <br>
            You can conquer any problems since you have a strong character and
            determination. Because you are a leader, dealing with individuals in
            positions of authority is difficult for you. You don't appreciate being told
            what to do, especially if it contradicts what you would do or believe in.
            You don't want to ask for approval or pardon because you believe you
            are entitled. Your ambition to achieve may force you to be completely
            ignorant of laws and regulations, but ignoring them and taking issues
            into your own hands makes collaboration impossible and creates a
            division between partners. <br> <br>
            Since you've grown accustomed to having your way and obtaining
            what you want at any costs, which makes others despise you at times.
            With the aggressive attitude, difficulty working with others, and
            unwillingness to listen at times, a child with an 8 energy may be
            misinterpreted. The majority of people with 8s are the same, if not
            worse, and this is when you get into conflict, sometimes with the law or
            other people. When an 8 enters adulthood and has completed all of
            their hard lessons of life, they become highly disciplined, often honest,
            and balanced. <br> <br>
            If you are vibrating on the negative side of your life path 8, you can be
            too proud to accept advice, or you might be extremely controlling,
            bossy, and dictatorial, or you might be hesitant to cooperate or work
            with others. You must be careful not to abuse your power since it
            might result in major consequences such as financial or legal
            problems. Everyone should be treated with decency and respect. It is
            beneficial if you learn to wait for your accomplishment since you might
            be penalized if you cheat or steal. Because of your forceful approach
            or strong personality, many may find it difficult to understand you.
            Negative traits you may display are aggression, greediness,
            materialism, stinginess, wasteful, insincere, tense, narrow-minded, too
            serious, perfectionist, big ego, entitled, misunderstood by others,
            argumentative, ruthless, cruel, calculating, cold, intolerant, forceful
            authoritative, and impatience. You may think highly of yourself and can
            be picky and moody at times. <br> <br>
            Due to their aggressiveness and dominating nature, some 8s may
            have failed relationships or marriages. Some individuals with Life Path
            number 8 are competent breadwinners and will assist their loved ones,
            but their romantic connections may look to be more like business
            deals than romantic or passionate love affairs. You may not be the
            most romantic, emotional, supporting, or available spouse, yet you
            may be a fantastic provider. You might be very materialistic at times,
            putting an excessive amount of emphasis on achievement or money.
            Understand that while control and power may help you advance in
            your job or business, they may not help you develop a healthy love
            life. <br> <br>
            You'll need a partner who understands your goals and the need for
            success. You must compromise because you might have a lot of
            success but lack progress in other areas of your life, leaving you
            feeling empty. You must recognize that all aspects of your life are
            significant, not only gaining money, accumulating wealth, or advancing
            in your work; consequently, you must consider the whole picture in
            order to be happy. Keep an eye on your health because you may be
            living a hectic life. Spend time meditating, socializing with friends and
            family, and attempting to live a balanced life. Recognize that health is
            wealth and that maintaining a healthy lifestyle should be your first
            concern. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers. 
            </p>
            `
        } else if (lifePathText === '9' || lifePathText === '18/9' || lifePathText === '27/9' || lifePathText === '36/9' || lifePathNum[lifePathNum.length - 1] === '9') {
            lpText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p> 
            The Life Path number represents the path you’ll take in this life. It
            exposes your true self, our life purpose, strengths, weaknesses,
            abilities, and goals, as well as how you will develop through life. It also
            gives details about your life mission, the lessons you must learn over
            your lifetime, and the best career options for you to pursue. It also
            reveals the tone of your experiences and why things happen the way
            they do: past, present, and future. It's one of the most crucial of your
            chart's core numbers. Any single digit from 1 to 9, as well as Master
            Numbers 11, 22, and 33, are life path numbers. To calculate your Life
            Path number, add the month, day, and year of your birth together and
            continue until you reach a single digit. 
            </p> <br> <br>
            
            <h3 class="bold-description-label">Life Path Number 9</h3> <br>
            <p>
            As a Life Path 9 person, you are a natural humanitarian who wants to
            utilize your compassionate heart to help others who have been made
            to feel unequal or undeserving. You wish to make the world a better
            place by helping or saving it. You see everyone and desire to assist
            those who are unable to assist themselves. People look to you for
            direction. <br> <br>
            If you are on the positive side of your life path 9, you are a good
            Samaritans, wise, socially conscious, tolerant, compassionate,
            empathetic, emotional, loving, caring, sensitive, creative, helpful,
            community-oriented, committed, generous/charitable, intuitive,
            spiritual, open minded, sentimental, service provider, eccentric,
            playful, charismatic. You care greatly about injustices. You will 
            frequently find yourself in positions or situations where you will be
            offering care and advice to others, since this is a natural gift of yours.
            You have a spiritual bent and may have a strong religious connection.
            You're an empath, which means you can sense or pick up on the
            feelings and emotions of others. You are concerned with the past and
            events that have occurred in your life. You want to have a global
            impact since you are so creative. You have telepathic and healing
            abilities and are intuitive. Because of your kind attitude, a lot of people
            are drawn to you. You create the idea that you know exactly what has
            to be done and that you are in the lead. You have an ideaalized view of
            yourself and your surroundings. You have a high degree of mental
            energy and are capable of dealing with a wide range of obstacles and
            tasks. <br> <br> 
            When it comes to relationships, you can have one foot in and one foot
            out. In this life, you must address the issues of your past, and the
            more you battle to come to grips with your troubles, the more difficult
            your life becomes. You may have had a difficult upbringing or a difficult
            life, and this may have occurred just so that you can sympathize with
            others. You must let go of the past in order to be happy. You may be
            sacrificing yourself excessively, either financially or by assisting
            others, and you must learn to say no when necessary. Remember to
            look after your emotional, bodily, and spiritual well-being.
            Your weaknesses are that you can be wounded or hurt easily,
            mentally unstable, too sensitive, moody and exaggerated behavior,
            narcissistic, bottle up emotions where you blow up or explode,
            emotionally scarred, fear of rejection and abandonment, delusions,
            feel like a victim, cannot let go of the past, end things easily,
            depressed, resentful, and emotional stress. <br> <br>
            Know that you can fall anywhere between the positive or the negative
            of this life path, and if you have the majority of the positive, that's
            fantastic. Your life path number is also influenced by your birthdate,
            destiny, soul urge, and personality numbers. 
            </p>
            `
        }



    // Birthday Number 
    var xSum;
    mSplit = String(dayString).split('');
    xSum = eval(mSplit.join('+'));

    if (xSum < 10) {
        sumDayArray = xSum;
    } else if (xSum === 10) {
        sumDayArray = 1;
    } else if (xSum > 10) {
        mSplit = String(xSum).split('');
        xSum = eval(mSplit.join('+'));

        if (xSum < 10) {
            xSum
        } else if (xSum === 10) {
            xSum = 1
        } else if (xSum > 10) {
            mSplit = String(xSum).split('');
            xSum = eval(mSplit.join('+'));
        };
        sumDayArray = xSum;
    }
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

    if (sumDayArray === 1) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>

        <h3 class="bold-description-label">Birthday Number 1</h3> <br>
        <p>
        If you are born on the <span class='underline'>1st, 10th, 19th, and 28th</span> of any month of any
        year, your birth number is <b>1</b>. You were born to be a leader. You are  
        independent, determined, energetic, daring, creative, ambitious, and
        quickly bored. You are continuously searching for a leadership role or
        to lead others, and you have excellent management and leadership
        abilities. <br> <br>
        You have a brave attitude toward life and thrive on overcoming
        challenges. When you don't achieve your goals, you might get
        depressed. Born first, you were destined to follow your own path. You
        take pleasure in being up-to-date and innovative in your ideas. You
        can be pioneers in life, but your perspective can be narrow at times.
        You have a strong personality, and it is hard for others to persuade
        you to change your views. You like living life on your own terms and
        want to have control over your environment. You often don't have
        many friends. You enjoy working alone and being self-sufficient. You
        make an effort to marry or befriend intelligent individuals. <br> <br>
        You enjoy bragging about yourself and brag about your
        accomplishments. You'd want to look well and spend a lot of money on
        your personal care. You are realistic in life and have the most
        reasonable solution to just about everything; you are also artistic and
        are frequently found in the professions, where you excel. <br> <br>
        Your flaws are that you can be a troublemaker like no one else. You
        may be forceful, aggressive, confrontational, and frequently divisive.
        You are a strong-willed individual who may be stubborn at times.

        </p>
        `
    } else if (sumDayArray === 2) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>

        <h3 class="bold-description-label">Birthday Number 2</h3> <br>
        <p>
        If you are born on the 2nd, 11th, 20th, and 29th of any month of any year,
        your birth number is <span class='underline-bold'>2</span>. <br> <br>
        By nature, you are passionate, sensitive, and artistic. You are a skilled
        diplomat, and your efforts can contribute to a more peaceful and
        prosperous world. Because of your caring, nurturing, and loving
        nature, you want to devote your life to sacrificial community services.
        Compassionate, tactful, tolerant, gentle, collaborative, intuition,
        creative, and patient are just a few of your additional great qualities.
        Although, in a relationship, you might be clinging. You are less
        ambitious and restrained due to your fragile temperament. If you're a
        woman, you're usually incredibly attractive, tender-hearted, and
        feminine. <br> <br>
        You're more at ease when you're in the background. If at all possible,
        you strive for harmony and serenity, and relationships are crucial but
        not always simple. You can be overly sympathetic at times, causing
        you to lose yourself in order to satisfy others. You can tell when
        anything is wrong with your spouse, and you will go to any length to 
        defend those you care about. You are easily trapped in the past and
        refuse to let go of past wounds, then the same old troubles resurface
        as your relationship progresses. <br> <br>
        You can work as a caretaker, social or community worker, human
        resource, health care, personnel, attorneys, and instructors are all
        viable options. 
        </p>
        `
    } else if (sumDayArray === 3) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 3</h3> <br>
        <p>
        If you are born on 3rd, 12th, 21st, 30th of any month, your birth number
        is <span class='underline-bold'>3</span> <br> <br>
        You are outgoing, upbeat, outspoken, dispersed, and like social
        interaction. You are inherently creative, but this may manifest in a
        variety of ways. You're usually adept at multitasking and handling
        many tasks at once, but you'll need to learn to complete projects
        before shifting on to the next item that interests you. You have a
        vibrant personality and a great sense of fashion. The 3's journey
        includes developing interpersonal skills and self-expression. You have
        the power to bring people happiness and friendship. <br> <br>
        It is critical for you to develop an emotional connection. You may be a
        wonderful spouse since you have such a strong desire for love and are
        always willing to forgive and adore your mate. You might not be as
        romantic as others. You like dominating your partners sexually. When
        they spend time together, their partners notice them. <br> <br>
        Journalists, entertainers, singers, dancers, actors, musicians,
        comedians, performers, beauticians, clothing designers, floral
        designers, cosmetologists, promoters, writers, illustrators, and
        photographers, are among the professions that fall into the category of
        number three.
        
        </p>
        `
    } else if (sumDayArray === 4) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 4</h3> <br>
        <p>
        If you’re born on the 4th, 13th, 22nd, and 31st of any month, your birth
        number is 4. You're a diligent worker who is consistent, realistic, and
        dependable, and you construct your life piece by piece. You can be
        incredibly committed to what you commit to. In order to discover the
        proper match, you may need to go through a lot of employment
        experiences. You might get angry when things appear to take a long
        time, and you can be obstinate at times. But your patience will typically
        pay off in the end. <br> <br>
        You have a powerful and forceful character, and you are a
        revolutionary by nature. You have incredible potential and intelligence,
        which can lead you to make impulsive choices along the way but will
        also come in handy at the most inopportune moments. You can be
        extremely giving to people you adore while being exceedingly nasty
        and selfish to those you despise and detest. Your demeanor is fueled
        by a lot of energy, and it could be hard for those around you to keep
        up with you. You have a strong need for cleanliness and organization,
        which is unquestionably advantageous. Your brave and powerful
        personality may be overwhelming or terrifying to some, but don't lose
        any of your characteristics since they are what makes you so
        appealing. <br> <br>
        You want a long-term romance and are willing to go above and
        beyond to make it happen. This isn't because you're lonely; rather, you
        feel that romantic partnerships should be valued and cultivated. You
        need someone that is driven and goal-oriented as you are in a
        relationship. You're the sort of person that can be detached from most
        people yet gives all to the ones you care about. You are a great
        worker because you're motivated by nature and will guarantee that the
        task you take on runs well and that you accomplish it with great
        accountability
        </p>
        `
    } else if (sumDayArray === 5) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 5</h3> <br>
        <p>
        If you’re born on the 5th, 14th, or 23rd of any month, your birth number
        is 5.
        You're outgoing, lively, adaptable, adventure, traveler, passionate,
        friendly, and free thinker. You have a strong desire to taste, feel,
        breathe, and experience all of the physical senses. You have a natural
        curiosity, which might manifest as restlessness or even irritation. Your
        attention is drawn to what comes next, resulting in an exciting and
        transformative lifestyle. You could go through some particularly trying
        times or storms in your life, but you will frequently adapt and develop
        in the meantime. <br> <br>
        You are both a lover and a knowledgeable person. You are instantly
        recognizable as sensual and charming. You find it very hard to sit still
        for long periods of time because you feel compelled to be active.
        You're also spiritual rather than religious. You despise insecurity in
        your life and will fight hard to maintain stability. You believe in changes
        when it is necessary and you are open to constructive changes.
        Overall, you have a vibrant personality that everyone admires and that
        aids in the development of successful business initiatives. <br> <br>
        Understand that number 5s have a hard time committing in
        relationships, but if they do, they commit completely and are fiercely
        devoted. It wouldn't be shocking if these people were caught dating
        many partners at the same time in their love lives. All of this is, 
        however, incredibly informal, yet meaningful relationships are highly
        important to you, and you will do all in your power to make them
        succeed.

        </p>
        `
    } else if (sumDayArray === 6) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 6</h3> <br>
        <p>
        If you’re born on the 6th, 15th, and 24th of any month, your birthday is
        6. <br> <br>
        You are a responsible person who is a natural caregiver and teacher
        who enjoys the concept of establishing a welcoming environment. You
        have a natural affinity for service careers and thrive in assisting others.
        You're usually more at ease in the provider position. When it comes to
        relationships, you're fantastic since you value stability and are
        emotionally devoted. You can be a caring lover who goes out of
        your way to make your partners happy since you are gentle by nature.
        You're known as a family person who enjoys spending time with loved
        ones. You can make a terrific parent. Although you may enjoy
        traveling, you will appreciate going home to your cozy house. <br> <br>
        You approach things in life with a highly analytical mindset. In all
        things, you believe in fairness and equality. You're an idealist by
        nature, so you have high standards and are often dissatisfied if they're
        not met. You despise being alone and like to be surrounded by others.
        A creative mind allows you to excel at your job. You have a lot of
        positive energy and may be quite upbeat and inspiring. You may fall
        into the trap of becoming the good Samaritan since you are motivated
        toward service to others.
        </p>
        `
    } else if (sumDayArray === 7) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 7</h3> <br>
        <p>
        If you’re born on the 7th, 16th, or 25th of any month, your birthday is 7. <br> <br>
        You're sophisticated, elegant, a perfectionist, and frequently wellinformed. You could come across persons who are voracious learners
        who search for new knowledge in both traditional and unconventional
        methods. You seek to comprehend life's deepest secrets. Sevens are
        not normally materialistic, but due of their proclivity to become experts,
        they may wind up doing quite well. You require peaceful time and may
        be perceived as distant by others. Because of your introspective
        natures and proclivity to document experiences, you may spend
        more time thinking about what you want to accomplish than actually
        doing it. <br> <br>
        You are extremely intelligent, and you may come across as arrogant
        and controlling. Because you have few people close to you that you're
        frightened to lose, you may become overly protective as a partner.
        You enjoy winning debates and act as if you know everything, which 
        may irritate your spouse. Due to your demanding personality, you
        should look for someone who is tolerant and patient. You could be
        emotionally unavailable. As a result, only a few people can manage
        you.
        </p>
        `
    } else if (sumDayArray === 8) {
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 8</h3> <br>
        <p>
        Money, wealth, and power are associated with the number 8. <br> <br>
        Furthermore, this number is linked to excellent administrative,
        entrepreneur, and management abilities. The negative aspects of
        number 8 include dictatorial proclivity, misused or abuse of power,
        stubborn attitude, a procrastinating propensity, and relationship issues.
        Despite the fact that 8 appears to be associated with the material
        world. It has a spiritual component as well. If you have 8 in your 
        <span class='red-span'>core chart</span>: <span class='underline'>life path number</span>, <span class='underline'>birth number</span>, <span class='underline'>expression/destiny </span>,
          <span class='underline'>soul urge/heart desire</span> , and <span class='underline'>personality number</span>, then you have the number
        8 vibration, which is a very strong energy that can be both powerful
        and destructive. Understand that the more 8s you have in your core
        chart, the more opportunities, prosperity, and achievement you will
        have in life. <br> <br>
        If you’re born on the 8th, 17th, and 26th of any month, your birthday is
        8. <br> <br>
        You are intelligent, hardworking, a leader, driven, ambitious, and
        spiritually and mentally strong. You're also creative and
        compassionate. You are amazing, but you should keep in mind that
        others may struggle to understand you at times and because you have
        a powerful and stubborn personality, you easily attract enemies. You
        should try your hardest not to allow the rollercoaster of your mood
        swing to take over your life. You were born to accumulate wealth,
        power, and money. You are a natural-born leader, administrator,
        manager, and entrepreneur. Your entire existence revolves around
        money and acquiring material wealth and if you are not gaining you
        will see that you’ll feel unhappy. <br> <br>
        Understand that most people with the birthday number 8th come from
        broken homes or families and may have had a difficult childhood
        where they may have been feeling rejected by families or treated
        unfairly at times, which causes them to be unhappy, lonely at
        heart, aggressive or depressed at times. They most times hold
        grudges and are unable to forgive. This number has the potential to
        bring you prosperity, success, and money, but it also has the potential
        to bring you destruction and failure if you are unbalanced. To be your
        actual self and become the great wealth builder and money maker you
        were destined to be, you will have to learn and master a lot of difficult
        lessons at the beginning of your life. Therefore, you should always do
        the right things by not cheating, stealing, and lying because you may
        face punishment from authority or others. <br> <br>
        You are someone you've set your sights on conquering whatever it is
        you're doing. Because you have a loud inner criticism, you usually fix
        yourself before someone else does. You can be forceful, strong,
        straightforward, and goal-oriented. You frequently have the idea that
        you can do it all by yourself so it's done well mindset. Therefore, you
        may frequently find yourself taking ownership or charge, but this may
        lead to frustration if you are given too much work and duties. You
        secretly love having someone else handle things now and again. <br> <br>
        Even so, you do have a talent for dealing with difficult situations well.
        When it comes to relationships, you may be shockingly passive at
        times. You have a captivating and charming personality. You are
        physically powerful and sexually active; therefore, it would be ideal if
        you could mate with someone who shares your birthdate. You're also
        spiritual, and you're looking for a profound connection with your lover;
        otherwise, the relationship won't last. <br> <br>
        The majority of 8s desire to own their own firm or businesses. Banker,
        law enforcement, top-level administration, management, and
        leadership position are all fairly frequent occupations for 8s
        </p>
        
        `
    } else if (sumDayArray === 9) { 
        bdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Your day of birth denotes a specific skill you hold, gifts that will assist
        you on your life's journey. It's one of your five core numbers,
        it exposes a certain ability that you have to a large extent. It's looked at
        as a single-digit and a double-digit number.        
        </p> <br> <br>
        
        <h3 class="bold-description-label">Birthday Number 9</h3> <br>
        <p>
        If you’re born on the 9th, 18th, and 27th of any month, your birthday is
        9. Thoughtful, theatrical, tolerant, perceptive, and empathetic are all
        words that describe you. You're working on increasing your knowledge
        and wisdom. You're passionate and understanding, and you are
        frequently charitable and dedicated to humanitarian causes. You
        believe that your life must be meaningful in some way. You have a
        great desire to assist people both physically and emotionally. You may
        feel befuddled and pushed in several ways at times. People might
        occasionally take advantage of your good nature and portray you in
        the position of a hero. <br> <br>
        Some weaknesses you should be aware of are that you might not
        always know how to budget your money properly and are sloppy with
        your finances. This is primarily due to the fact that you end up making
        a lot of money and don't need to save it. You may have constant mood
        swings at times. You have a tendency to lose concentration more
        often than not, yet you are the type that overcomes all obstacles gently
        and gradually in order to experience triumph. <br>
        You also have quick temper which may get you into a lot of fights, but
        your caring nature guarantees that you have a strong support network
        to assist you to battle the outer world's challenges. You should
        recognize that your aggressive personality may bring you problems in
        your private life. You are highly emotional, and as a result, you may
        take minor matters far too seriously, causing frustration in others
        around you. Number 9 people, on the other hand, are so
        compassionate that their goodness overshadows their flaws and
        keeps their dear ones clinging to them. You have the potential to
        become wonderful mates. Because you are all about helping others,
        you may work as a lawyer, social worker, nurse, doctor, EMT, or
        firefighter.
        </p>
        `
    };

    var intDay = Number(dDay.value)
    switch (intDay) {
        case 1:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 1st</h3> <br>
            <p>
            The best part about you is that you are independent, ambitious, and
            have leadership skills. You have unconditional love and can make
            your own individual choices. You are upfront, merciful, decent, and
            honest. You can communicate clearly and accurately. You are flexible
            and can think creatively to achieve your goals. You are self-confident,
            determined, dynamic, and inventive; you find new ways to achieve
            your goals. You set your own goals and use your own creativity to
            achieve them. Your greatest strength is your own strength. <br> <br>
            You are hard-working and energetic, and you have a good career
            track record. You enjoy helping others, are kind, good to work with,
            and enjoy traveling. You are connected to the world in a way that
            makes you appreciate the beauty of nature. Your character is strong.
            You have excellent management skills. You are a master of foresight.
            You hold firmly to your opinions. You dislike messiness, laziness,
            carelessness, flattery, dishonesty, and empty promises. You prefer
            your own company and dislike being dominated by others. In life, you
            can achieve great success if you combine your intellect and creativity. <br> <br>
            Some weaknesses you should be aware of are that you can be
            stubborn and lazy. You can be hard to get along with because you
            think you’re better than others. You can be extremely dependent on
            other people. You can have low self-esteem or confidence. This can
            put you in a difficult situation as you tend to be impulsive, angry,
            irritable, and short-tempered, and you have a hard time
            communicating with others. <br> <br>
            You are selfish, isolated, big ego, and lonely. Most time you only focus
            on yourself and your needs. You're envious and domineering. It's
            difficult for you to accept the termination of a friendship. You get 
            gloomy, pessimistic, furious, and depressed when you don't get what
            you want. You can't stand being criticized, yet you enjoy criticizing
            others. You occasionally purchase items that you cannot afford. You
            are easily swayed and have the ability to sway others. You make hasty
            decisions and take unnecessary risks. You are arrogant and prone to
            narcissistic behavior. 
            </p>
            `
            break;
        
        case 2:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 2nd</h3> <br>
            <p>
            You are very thoughtful and a good listener. You are faithful and
            emotional. You’re highly sensitive and you are able to understand how
            others feel, and you like to help them. You are outgoing and maintain
            close contact with your family. You’re collaborative and diplomatic.
            You are romantic and you have a creative talent. You have a warm
            and gentle character. You’re intuitive and want harmony. You love to
            give and receive. You want to have a partner or companionship
            because without one you feel alone. You can easily be silenced. When
            dealing with issues, it is essential to pursue common arrangements
            and cooperation. <br> <br>
            Some weaknesses you should be aware of are that you can be
            oversensitive and vulnerable, bitter, often blame others, manipulate
            others, argumentative, and may emotionally blackmail others. You are
            codependent (can be dependent on others instead of yourself). You
            should avoid distrust, fear, and disharmony. You may lack courage,
            ambition, and hesitation. You lean towards the accumulation of wealth.
            You often do not finish what you start or your work. You get angry and
            explode at times. You may have confidence issues where you focus
            on the negative. 
            </p>
            `
            break;
        
        case 3:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 3rd</h3> <br>
            <p>
            You are social, charming, and have a friendly character. You're a
            gifted artist who knows how to express yourself. You enjoy traveling,
            dressing up, meeting new people, and having a large number of
            friends. You are sincere, inventive, and have a lot of ideas. You are
            not scared of other people. You want to be independent in a romantic
            relationship. It's critical that you find a socially active partner. <br> <br>
            You are fearless, active, dependable, and forward-thinking. You want
            to make an impression and achieve success. In love, you've struck it
            rich. Before you act, you normally give it a lot of thought. You should
            not waste your energy since it is necessary to be pleasant and to
            accept life as it is. You should devote enough time to your partner and
            kids. You should aim to be more adaptable and interested in all
            prospects rather than dismissing them right away. <br> <br>
            Some weaknesses you should be aware of are that you should avoid
            disparaging others and being shallow. You're a risk-taker with a big
            vision. You are jealous, hot-tempered, and arrogant. You point fingers
            at others, accuse them of wrongdoing, and play with their emotions.
            You are easily offended and oversensitive, easily distracted, and
            anxious. You create unneeded talk/argument and have dictatorial
            tendencies, especially at home. You should try to focus on things that
            are important rather than the little ones, and try to control your temper.
            </p>
            `
            break;
        case 4:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 4th</h3> <br>
            <p>
            You’re practical, balanced, reliable, focused, warm, generous,
            compassionate, decisive, systematic, patient, loyal, grounded,
            responsible, and you work hard to attain security and stability. You try
            to build everything on solid ground. You do not like to waste or spend
            money. You want a stable romantic relationship and comfortable home
            life. <br> <br>
            Some weaknesses you should be aware of are that you may lose your
            temperament or courage easily. You are often aggressive and rude.
            You constantly criticize everything and you are selfish. You should
            avoid making quick decisions and being depressed. You can be rigid
            at times and put in so much effort or work that you don't enjoy your life
            </p>
            `
            break;
        
        case 5:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 5th</h3> <br>
            <p>
            You're an explorer who is open, principled, courageous, active,
            sensitive, shallow, and has a strong desire to see the world and have
            new experiences all the time. You enjoy freedom and adapt well to
            change. You prefer to be in charge of your own destiny. You enjoy
            advancement and require sufficient space for your hobbies. You enjoy
            variety, and nothing is ever the same for you. <br> <br>
            People are drawn to you because you are charming, pleasant,
            articulate, joyful, and quick-witted. You are a risk-taker who thinks
            logically and enjoys interacting with others. You are always in a rush
            and enjoy traveling. You take care of your beauty and your health. You
            enjoy accomplishment and being recognized. You're fascinated by
            new concepts and how they work. <br> <br>
            Some weaknesses you should be aware of are that you are phobic
            and withdrawn, moody, irritable, and argumentative. In relationships,
            you're more likely to be a cheater, liar, or deceiver. When you're upset,
            you might become unstable, rude, and unpleasant, and you can force
            your beliefs on others. You're a nervous person who gets stressed
            easily. You can be tough to pin down, indulgent, impulsive, and prone
            to getting into mischie
            </p>
            `
            break;
        
        case 6:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 6th</h3> <br>
            <p>
            You're a nurturer who is thoughtful, compassionate, sensitive, naïve,
            and resourceful when it comes to your home life. You may be an artist,
            a healer, and an outstanding mediator while also devoting your time
            and energy to your loved ones. You require affection and the comforts
            of home. You go to great lengths to attain harmony. You want to be
            with someone for the rest of your life and you adore your family and
            other people. You must schedule time for yourself as well as others. <br> <br>
            You may have positive connections with your parents, children, and
            friends, as well as a large number of networks. You want to feel like
            you belong and that you have a place in the world. You are both fair
            and astute. You have a soft demeanor and a lovely, warm tone to your
            speech. You are dedicated and passionate. You see sex as a natural
            aspect of a relationship that brings it full circle. You enjoy elegance
            and beauty, and you are artistically gifted. You place a premium on
            teamwork. You like being in the presence of attractive individuals.
            You're what's known as a "homebody." You could be having trouble
            finding a mate or looking for reasons to split up with your current. You
            may lack self-assurance. You may forfeit your dignity in order to keep
            harmony in your romantic bond. <br> <br>
            Some weaknesses you should be aware of are your proclivity for
            laziness and compulsive behavior. You're continually rushing about
            and bursting at the seams with emotions or feelings. You seek out
            revenge. You are prone to substance abuse, including drugs, alcohol,
            and other substances. Extramarital affairs may be both stressful and
            risky. You just care about yourself. You are selfish and may harass
            others. For example, at work, you may request gifts in exchange for a
            favor. Allow praises to go to your head since you don't handle criticism
            well. You can sacrifice too much of yourself and your well-being for
            others
            </p>
            `
            break;

        case 7:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 7th</h3> <br>
            <p>
            You have a really developed mind. You're an analytical thinker with a
            sharp mind. It's your tool for learning about the world and everything it
            has to offer. You have a philosophical and spiritual bent on your
            personality. You're not hesitant to ask big questions or delve further
            into issues, and you have the ability to master anything. You have the
            ability to hear what your inner voice is saying. In your life, you require
            a companion or mate. You frequently have spiritual beliefs and are
            concerned about the environment. You may find yourself becoming an
            activist and like assisting people. <br> <br>
            You have faith in yourself, nature, people, and life. You are constantly
            confronted with obstacles, and these challenges are the driving force
            behind your personal development. You have an excellent skill to
            assess situations. You've carefully chosen your words. Kind, social,
            pleasant, lovely, romantic, sensitive, creative, good speakers,
            insightful, and sentimental are words that describe you. You want to
            do everything on your own and don't want to listen to advice or
            warnings from people who have been through it before. Fools,
            hypocrites, and dishonesty are all things you despise. You're
            interested in keeping things a secret and you don't just take someone's
            advice. <br> <br>
            Some weaknesses you should be aware of are that you can be
            reckless, anxious, and extravagant. You are often naive when it comes
            to your relationships since you do not see your partner realistically.
            You have a tendency for drug and alcohol addiction. You like to use
            intrigues that may lead to the destruction of other people. You are
            restless and distraught. You like to use other people. You do not
            forgive. You change your opinions very often. You unnecessarily
            waste your energy and time. You realize your plans without thinking
            about them thoroughly. You have no respect for the work of others.
            You have agonizing feelings and you are ignorant of other people´s
            feelings. You don’t like expressing your feelings, can be stubborn,
            cold, calculating, and you isolate yourself or became aloof.

            </p>
            `
            break;

        case 8:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 8th</h3> <br>
            <p>
            You're a natural leader who knows how to manage people and
            projects, and you're an expert in business and finance. You have a lot
            of energy, a vivid imagination, a strong will, and leadership potential.
            You are smart, competitive, self-assured, and efficient, as well as
            quick-witted, ambitious, and entrepreneurial. You are a dedicated
            worker who is patient, adaptive, fast, truthful, and serious. You can
            make solid character judgments and are realistic. If you want to attain
            your dream, you are ready to endure a variety of challenges, and you
            treat every work seriously. In your life, success, rewards, money, and
            social standing all play vital roles. You want to have a lot of money and
            wealth. Your strength, energy, and power will always have to be
            balanced with money and feeling, pride, romance, and intellect. <br> <br>
            Some weaknesses you should be aware of are that you don't forget
            when you've been treated unfairly by others. You may be overly
            controlling, lack empathy, and have trouble collaborating with others.
            When it comes to dealing with challenging situations and combating
            enemies, you are tenacious and stubborn. You can be selfish,
            boastful, intolerant, and misuse or abuse your power, position, and
            money in many ways. You are self-centered and lack understanding of
            others. You like using, humiliating, and deceiving others. You are a
            person who will go around and have various romantic affairs and
            experiences. You desire to gain special treatment at the cost of others.
            You are a manipulative, revengeful person who does not play fair or by
            the rules. You have a gloomy personality and a poor sense of humor.
            When you're upset, you have a tendency to damage everything
            around you. Passivity, alcohol, and substance abuse (drugs) are all
            things you're prone to. Bad memories and a terrible past are
            always troubling you. You circulate rumors and are often belligerent,
            forceful, bossy, obstinate, aggressive, and terrorizing other people.
            Understand that others may perceive you as a bully or a narcissist.
            </p>
            `
            break;
        
        case 9:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 9th</h3> <br>
            <p>
            You're welcoming to everybody, eager to serve the common good, and
            aware of human suffering. You may be charismatic, empathetic, and
            trustworthy while yet seeing the broader picture. Only after thorough
            consideration will you speak the truth. You are capable of accepting
            yourself as you are. You aspire to be a hero. You're looking for a
            greater purpose in life. You are bold, ambitious, creative, spiritual,
            forgiving, strong, open, honest, and self-reliant. <br> <br>
            You have the ability to deal with challenging conditions. You put forth a
            lot of effort. You are a responsible person who enjoys a sense of
            honor and pride. To earn admiration and compassion, you invest a
            great deal of energy. You have strong organizational skills and are
            always working hard to reach your objectives. You enjoy new
            experiences and acquiring knowledge. You should look for a mate that
            has the same interests. You're either perfectionist, modest, or timid.
            Because you feel that quick and drastic answers are the better, you do
            not postpone and deal with issues promptly. You are fussy and have a
            proclivity toward overspending. You take things far too personally and
            are overly worried. <br> <br>
            Some weaknesses you should be aware of are that you may find it
            difficult to let go of resentments and anger for an extended period of
            time. You have a strong fear of everything. Because you are impatient
            and easily provoked, it is difficult for others to get along with you. It's
            tough for you to maintain self-control and your temper. You're
            aggressive, impulsive, and even harsh at times. You take unneeded
            chances in your relationship or marriage, which leads to tension. You
            have a sour attitude toward your colleagues, friends, and business
            partners. You are conceited and quickly enraged. Inner worry,
            narcotics, a sense of superiority, and dishonesty should all be avoided.
            You are a closed-minded and intolerant individual. You judge people
            and search for weaknesses in them. You could be snobs, and
            you could make harsh remarks. You have a tendency to end things easily.
            </p>
            `
            break;
        
        case 10:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 10th</h3> <br>
            <p>
            You're a driven individual who can achieve everything you set your
            mind to if you stick with it. You have a talent for developing plans and
            a strong will to achieve. You have a high level of emotional strength.
            You are self-sufficient, creative, self-reliant, compassionate, proud,
            industrious, truthful, and self-assured. You keep your personal
            information private. If you put forth the effort, you can succeed.
            You have natural leadership ability. <br> <br>
            You have a gift for pursuing your passions and objectives. You are a
            high-energy person who is committed to your job. You have a small
            group of close acquaintances. You don't experience mood swings.
            You prefer to think of yourself as a one-of-a-kind individual. It's crucial
            not to get too focused on one large objective and lose sight of other,
            maybe even more essential ambitions. You're occasionally hesitant to
            follow through on your goals. You try to stay away from routine. <br> <br>
            Some weaknesses you should be aware of are that you have the
            option to reserve and withdraw. You have the option of temporarily
            abandoning your family. You are difficult to comprehend. You can
            become quite dependent on others and sedatives. You are stubborn,
            which produces conflict in your relationships. You may have a sense
            of superiority. Be wary of squabbles and alcohol. You are competitive,
            envious, jealous, inflexible, and you have trouble sticking to a
            schedule.
            
            </p>
            `
            break;
        
        case 11:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 11th</h3> <br>
            <p>
            You are very intuitive, diplomatic, sensitive, inspiring, and possess
            healing skills. You're curious about the spiritual journey. You are a
            charming perfectionist who enjoys daydreaming. You have innovative
            ideas and a commanding demeanor. You like to make choices as a
            group and dislike revealing your feelings. You do not unintentionally do
            harm to others. It's critical to strike a healthy balance between sharing
            and exchanging. Peace is most important at home. Every day, you
            must relax. You bite your nails and massage your hands at times.
            You're an optimist who daydreams about what people and the world
            could be like if they tried hard enough. <br> <br>
            Some weaknesses you should be aware of are that you find it difficult
            to focus on routine activities and details, yet you lack the confidence to
            follow your aspirations. You're stubborn, unpleasant, self-centered,
            fragile, and irritated. It's possible that there will be misunderstandings.
            You frequently find yourself in a situation of confusion. You can 
            sometimes be reliant on others. You're angry, selfish, and prone to
            temper tantrums. You can be conceited and attempt to manipulate or
            interrogate people.
            </p>
            `
            break;
        
        case 12:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 12th</h3> <br>
            <p>
            You're a creative individual who expresses yourself in unique ways.
            You're amusing and pleasant, as well as intelligent, energetic, and
            social. You're outgoing, curious, upbeat, self-sufficient, brilliant, goaloriented, adaptable, and inventive. You enjoy going on adventures and
            seeing new locations. You are a family-oriented person who is
            adaptable, professionally efficient, bright, well-liked, and gorgeous.
            You have the potential to thrive in a variety of areas. You like life,
            cooking, festivals, and gatherings. You'll need a mate who isn't
            troubled by anything. You are very demanding. You despise it when
            others tell you that you won't be able to achieve your goals. In your
            life, there may be a lot of confusion and disorder. You keep your
            personal information private. <br> <br>
            You should be conscious that you have a tendency to let your
            emotions get the best of you at times. You're impulsive, nervous, and
            uptight. Your decision-making process is disorganized, and you make
            decisions at the last minute. You might be apathetic, close, or
            obstinate. You're conceited, jealous, stubborn, and possessive, and
            you're filled with rage, vengefulness, and violent emotions. You also
            search for flaws in others. You need to remember to keep focus so
            that you don't become scattered
            </p>
            `
            break;
        
        case 13:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 13th</h3> <br>
            <p>
            You're a sensible, grounded person who is at one with nature and is a
            great planner. You are self-disciplined and diligent in your job. You are
            self-sufficient, driven, loyal, dependable, adaptable, creative, active,
            open, practical, and responsible. You're devoted to your mate. You put
            forth a lot of effort to achieve financial stability. You're always on the
            lookout for new possibilities and objectives. You're a natural leader
            who enjoys taking on responsibilities. Your job becomes a pastime.
            You have the ability to motivate people and create a welcoming
            environment. You can be so realistic and balanced that you ignore
            your aspirations and let your gifts waste away. <br> <br>
            You are vulnerable, easily manipulated by others, and lack selfassurance. Routine and monotonous tasks should be avoided.
            You have a short temper and often feel ineffective. You are quickly
            insulted and easily irritated. You have the tendency to say unpleasant
            things, to erupt in rage and conflict, to be confused in life, and to have
            extreme opinions. You either adore or despise a person. You strive to
            get your way without making an effort to establish a middle ground. 
            You take risks that are needless. Food, drink, narcotics, sex,
            medications, and other substances can cause dependency. You have
            the ability to instigate fights, arguments, and create situations.

            </p>
            `
            break;

        case 14:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 14th</h3> <br>
            <p>
            You're a sociable individual who is always on the lookout for new
            experiences and adventures. You're imaginative, like interacting with
            others, embracing change, and living your own life your own. You'll
            need a secure home and solid work. You can generate money if you
            work hard. You have a talent for trade and business. You are
            thoughtful, attentive, dependable, ambitious, tenacious, and full of
            ideas, as well as self-sufficient, responsible, charming, and flexible.
            You are an extremely busy person who takes on large initiatives. You
            are pleasant to be around, smart, and quick to react. You could have
            an artistic skills and be spiritual and pious at times. You think rapidly,
            and you communicate swiftly as well. You want to take advantage of
            any opportunity that comes your way. You may choose to
            communicate with signs or numerals on occasion. <br> <br>
            You might make too many changes at times, lack confidence, be
            nervous, and fail in seeing things through to completion. You dislike it
            when others give you advice. You choose to preserve your old habits
            even when they are no longer helpful. Irresponsibility and
            laziness should be avoided at all costs. You may try to dodge troubles
            at times. You fantasize about having a lot of money and assets. You
            have a short temper, a bad attitude, and are impulsive. You have a
            hard time forgetting mistreatment and wrongdoings. When difficulties
            arise, you want to make improvements as soon as possible. It's
            possible that you'll become bossy at times. You may undervalue
            situations, plan improperly, or make inaccurate assumptions at times.
            You should cautiously choose your friends. You waste valuable
            opportunities. You fabricate stories and cause issues for yourself and
            people. You are hot-headed and susceptible to alcohol and narcotics. 
            </p>
            `
            break;
        
        case 15:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 15th</h3> <br>
            <p>
            You're a creative person who wants a stable home life as well as the
            opportunity to explore your artistic goals. You want a life companion
            and must commit yourself to others. You are observant, sensitive, selfsufficient, ambitious, active, energetic, courageous, proud, industrious,
            inventive, compassionate, and kind. <br> <br>
            For you, family is everything, and you don't always hold back when
            expressing yourself. You enjoy money, fame, and luxury, and you
            desire to increase your wealth. You enjoy living a free and unrestricted
            life as well. You are outgoing and amusing, and you value beauty. You
            would like to experience anything, but you also want to protect your
            </p>
            `
            break;
        
        case 16:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 16th</h3> <br>
            <p>
            You're a spiritual and intelligent individual who wants to learn more
            about how things function and is intuitive but practical in your
            approach. You have a strong sense of what is correct and incorrect in
            life. You are a fighter against injustice and a keen observer. You are
            gentle and pleasant, and you have a sense of harmony. You make an
            effort to be kind to others and to comprehend their requirements. You
            are capable of doing everything for an extended period of time and
            want to have an independent spouse. You possess a healing talent
            and are capable of self-healing. <br> <br>
            You are spiritually oriented and may have a proclivity for prophetic
            visions. You believe that helping others is the goal of life, and you are
            sympathetic, a good listener, driven, sociable, dependable, and think
            analytically. You have a powerful character and rely on intuition to
            accomplish your objectives. You despise authoritarians and
            occasionally live in delusions. You want to experience everything, and
            you might get overly attached to your family or relatives at times. You
            have a tendency to be self-centered, and you should value what you
            have. Spending extra time with your partner is a good idea since you
            have a tendency to be distant yourself. <br> <br>
            You may become emotionally cold and aloof, calculating, prone to
            provoking others, living in the clouds, unwilling to accept other
            people's viewpoints, and lacking the focus to complete tasks. You
            despise rules and limitations. Uncertainty, misunderstandings, and
            mental strain plague you. You're distrustful and concerned about
            losing your position. You find failure difficult to accept, and your life
            might be full of twists and turns. You are conceited, and as a result,
            you lose touch with reality and lack assertiveness. You are
            overly sensitive and somewhat sluggish. You're full of rage, emotional
            instability, and intrusions into other people's life. May have narcissistic traits.
            </p>
            `
            break;
        
        case 17:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 17th</h3> <br>
            <p>
            You are a leader who is powerful, fearless, sensitive, ambitious,
            sociable, perceptive, efficient, quick-witted, driven, and diligent. You're
            smart at evaluating others, excellent at managing people and have the
            potential to thrive in business. You've set huge objectives for yourself
            and want to prove to the world what you're capable of. It's possible that
            you have the capacity to heal people. You can think clearly and for
            extended periods of time and you have strong logical reasoning skills. <br> <br>
            You are materialistic, and you will achieve success and wealth later in
            life. You have the capacity to put your plans into action. You have a
            strong faith in life and are not afraid of anything. You look for unusual
            solutions to challenges. You like taking on new duties. You place a
            high value on romantic relationships. Only family members or
            extremely close friends should be considered while choosing friends.
            You should refrain from influencing people because you lack selfconfidence. Either you're in command or others command you. <br> <br>
            You might be overbearing and self-centered, brutally competitive,
            moody and impatient, arrogant, egoistic, intrusive, inflexible, and
            domineering, and hoard whatever you obtain. You're prone to
            emotional outbursts and scenarios that are overly dramatic. You may
            be conceited at times. It's tough to cohabit with you, and your attitude
            might cause internal conflict. You are solely concerned about yourself.
            You can't abide being opposed. You might get obsessed with riches
            and success. You climb quickly and then crash, and you're frightened
            of failing.
            </p>
            `
            break;

        case 18:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 18th</h3> <br>
            <p>
            You're a humanitarian who is open to everyone and wants to travel the
            globe. You may be artistic later in life and emerge into your own. You
            are a powerful, competent, ruminative, clever, kind, and protective
            individual. Higher sources of inspiration are available. You may have a
            philosophical, genuine, and ethical nature, and you are capable of
            dealing with challenging situations. You are materialists who do all in
            your power to make money. <br> <br>
            You want to be seen and are intelligent and ambitious. You're
            organized, have a strong will, and enjoy trying new things. You have
            strong ideas and a strong desire to be correct. You dislike bragging
            about your possessions, riches, power, achievement, or social
            standing. You're interested in what people have to say concerning you.
            You want to learn just about everything there is known about your
            spouse. You should avoid criticizing people and instead strive to
            comprehend them. <br> <br>
            You can keep grudges for a long time and suffer more than the
            average person from emotions of rage and resentment. You're rash,
            crazed, envious, spiteful, cruel, prejudiced, authoritarian, aggressive,
            impatient, and sensitive. You have internal conflicts and tensions. You
            have a hyperactive mind and a melodramatic streak. Health issues
            resulting from an energy deficit. Your life is full of turmoil, and your
            unstable energy impacts negatively on all of your relationships and
            marriages. You could be obnoxious and harsh. Karma exists in your
            life, mostly in the area of acknowledgment. You are critical and
            skeptical in your outlook on life.

            </p>
            `
            break;

        case 19:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 19th</h3> <br>
            <p>
            You're ambitious, charming, self-assured, intelligent, independent, and
            a diligent worker who is eager to break new ground. You are a strong,
            energizing, smart, adoring, insightful, and sympathetic individual. You
            have a lot of patience and are eager to satisfy people. You are
            dedicated to loving relationships. You want to know your spouse and
            are giving, and you want to defend your family always. <br> <br>
            You are well-liked, respected, accomplished, and wealthy, with a
            good-paid job sometimes. You are, in a sense, a pioneer in your
            profession. You are resourceful, imaginative, and direct in your
            approach to attaining your objectives. You want a great social rank
            and strive hard to attain it. You have faith in yourself and are a loner at
            times. You stick to your beliefs and high expectations. You are
            passionate about achieving your goals. <br> <br>
            You want independence above all else, but you also need to know
            how to collaborate with others and achieve things that benefit mankind
            as a whole. You're imbalanced and temperamental, and you're difficult
            to comprehend. You believe you are superior and special. You're
            obstinate, moody, volatile, dictatorial, anxious, filled with anger and
            self-pity, nervous, jealous, and irrational. You have a tendency to
            criticize others and you lack self-assurance.
            </p>
            `
            break;
        
        case 20:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 20th</h3> <br>
            <p>
            You are empathetic, patient, tolerant, intuitive, humble, loyal, and
            compassionate. Your spouse is very significant to you, and you
            value love life. You need love, kindness, and harmony, and you can't
            stand being alone. You're sensitive to other people's ideas and
            feelings, and you recognize the small things. You enjoy being the one
            in charge of the background operations. You are cautious, open, kind,
            and considerate, and you enjoy collaborating with others. Since you're
            striving to achieve an agreement, you're excellent at settling conflicts.
            You have a distinct approach toward other people. <br> <br>
            You may be vulnerable to ruthlessness and find it difficult to defend
            yourself. You're moody, impatient, worried, afraid, manipulative,
            fragile, and irritated. Stress should be avoided since it might lead to
            health issues. You have a habit of changing your mind and it's
            possible that you'll lose control. Emotional conflicts and reactions
            should be avoided. You are indecisive and have a lot of unhappiness
            in your life. You have a sour disposition.

            </p>
            `
            break;
        
        case 21:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 21st</h3> <br>
            <p>
            You're social, attractive, sensitive, understanding, compassionate,
            diplomatic, accepting, and creative. Your intellect works quickly, and
            you have a lively, upbeat demeanor. You've got a lot of promise. You
            are resourceful and capable of a wide range of tasks. In your romantic
            interactions, you are thoughtful and sensitive. You value conversation
            and are outspoken, so your career is a wonderful fit for you. You are
            instinct-driven, and you are a realist with an optimistic outlook on life.
            You enjoy new challenges and achievements. You like working with
            people. You attach to your relatives at times. You put so much effort
            into helping others satisfy their needs that you neglect your own. You
            have a lack of self-assurance. <br> <br>
            You have trouble focusing on anything for lengthy periods of time, are
            prone to wasting your abilities, and exude nervous energy. Your words
            have the ability to harm others. You're confrontational, angry, irritable,
            greedy, impatient, worried, hot-tempered, and frustrated. Superiority,
            conflict, and shifting moods and emotions should all be avoided.
            
            </p>
            `
            break;

        case 22:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 22nd</h3> <br>
            <p>
            You're a master builder, a visionary, and a hard-working person. You
            have huge dreams, but you're also practical enough to find out how to
            make them a reality. You want your dreams to come true. You were
            born to make a meaningful contribution to society. You are
            responsible, dependable, harmonious, caring, generous, empathetic,
            and compassionate. You are methodical and organizationally skilled,
            as well as practical and comprehensive. <br> <br>
            You make realistic judgments with ease. You're a hard worker who
            gets the job done quickly and accurately. You can have a great deal of
            success in politics. Your family's financial security and household are
            crucial to you. You prefer routine tasks. You have a proclivity toward
            accumulating financial wealth above emotional prosperity. You could 
            develop a workaholic personality. You despise emotional conflict. You
            may be unable to receive gifts at times. You require a stable life. <br> <br>
            Fear of failure may limit your progress, and a loss of faith can indeed
            be your downfall. You are strong and stubborn, and you may be
            having marital issues. You may feel a feeling of unfairness from time
            to time. Be wary of mood swings. You're concerned about your
            capacity to meet your fundamental necessities. You are lacking in
            confidence. You're vulnerable, manipulative, irritable, unfair, impatient,
            and cruel. You are unconcerned with the needs of others.

            </p>
            `
            break;
        
        case 23:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 23rd</h3> <br>
            <p>
            You're a positive person who enjoys change and wants to live life to
            the fullest. You have the ability to adapt to whatever unfolds. You
            make decisions independently and cannot be swayed. You are the
            master of your own destiny. You appear to seek freedom at times, but
            you really need a mate. You are a sensitive, soft, funny, daydreamer,
            childlike, intellectual, understanding, quick-witted, and outgoing
            person, a loving, sincere, open, practical, expressive person who
            wants to be loved. <br> <br>
            You are a hard worker, and you rarely have work-related issues.
            You're a good businessperson. You're well-liked and popular. It's
            possible that you'll develop exceptional powers. You want your ideas
            to come true. You are thoughtful and have a strong memory. You seek
            independence because you are self-confident. You have a tendency to
            be unorganized. You must prevent being exhausted. You keep your
            real feelings hidden. <br> <br>
            You can be careless at times, overindulge, and live a life without
            discipline and order. You have a complicated personality and may be
            difficult to comprehend at times. When things don't go as planned, it's
            frustrating to deal with you. You may live without a romantic partner if
            you fail to establish harmony. You have the ability to be harsh, selfish,
            temperamental, insensitive, moody, hot-temped, and irritable. You
            avoid taking on responsibilities, and you are easily sidetracked,
            unbalanced, exaggerating, and lying, and you frequently go from one
            partnership to the next.
            
            </p>
            `
            break;
        
        case 24:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 24th</h3> <br>
            <p>
            You're a compassionate, generous person who wants to live a
            peaceful life with your family. You enjoy assisting others. You are kind,
            helpful, artistic, caring, as well as sensitive, gentle, generous,
            methodical, efficient, industrious, and productive. You are
            also systematic and practical in your approach. You like beauty and
            harmony, and you place a high value on family life. You have a strong
            work ethic, and you are well-organized. <br> <br>
            You have a nice heart and go out of your way to serve people. You are
            skilled negotiators and attempt to achieve an understanding with
            others. You could be musically gifted. You are certain that everything
            will be completed on time. You have a proclivity to put off solving an
            issue. You take your time making judgments and consider the issue
            thoroughly before making a conclusion. You take your responsibilities
            far too carefully. You can be reliant on others. You value your wellbeing, a prominent career, and other comparable things. <br> <br>
            You may be theatrical, vulnerable, and unrealistic by sticking your
            nose where it doesn't belong. You're secretive, lazy, temperamental,
            irritated, passive, oversensitive, hasty, moody, and insecure. You may
            face disappointment and deception. You avoid working under
            pressure, sadness, emotional explosion, and depression.
            </p>
            `
            break;

        case 25:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 25th</h3> <br>
            <p>
            You're intuitive and may be directed by it; you're a lifelong learner who
            wants to understand everything there is to know. You're spiritual,
            perceptive, social, practical, patient, attractive, and kind. You're also
            sensitive, analytical, artistic, intellectual, modest, humble, creative,
            entertaining, good listeners, insightful, and sociable. In your life, you
            require a sympathetic companion. You have a lot of talent and
            imagination. Marriage has the potential to make you rich. You enjoy
            communicating and you can think logically and analytically. You have
            a keen eye for detail and the ability to seize chances. <br> <br>
            You can lose yourself in your thoughts, ignore your feelings, or turn
            critical. You require peace, and you should make every effort to
            accommodate. In life, you should avoid becoming confused. Your
            reactions might be surprising and unpredictable at times. You have a
            strong desire to try everything. You like delaying tasks that must be
            completed immediately. You're impulsive and emotionally unstable. <br> <br>
            You are unable to deal with stressful conditions in your romantic life
            and you suffer from depression. You may have a rough
            upbringing. You're moody, selfish, distracted, overly concerned,
            unstable, angry, ambiguous, constant worried, hypersensitive,
            impatient, and your feelings are frequently hurt. You may be terrified of
            change at times. You might become completely dependent on another
            individual instead of yourself. You are only concerned and care about
            yourself. 
            </p>
            `
            break;
        
        case 26:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 26th</h3> <br>
            <p>
            You're gifted in business and financial things, good at seeing a
            broader view, dependable, and proud of your accomplishments. You're
            a powerful and realistic person. You are sensitive, gentle, kind,
            responsive, polite, open, and available. You are also self-sufficient,
            business-minded, ambitious, generous, hardworking, persistent,
            successful, and understanding. You have the tremendous inner power
            to conquer challenges. You're organized and capable of leading
            others. You have excellent judgment and will pick up on everything. <br> <br>
            You are quick-witted, brilliant, and capable of doing anything. You are
            able to keep your personal life distinct from your professional life. Later
            in life, you will acquire achievement and good social standing. You like
            helpful to others and like resolving other people's issues. You have
            diplomatic skills and the ability to motivate people. You value your
            friendships and job, and you may even achieve notoriety or
            become famous. You may attain success by putting forth a lot of effort. <br> <br>
            It is possible to be materialistic, uncaring about others, lacking in
            respect, and take advantage of the weak. You're sometimes insecure
            and reliant on others at times. You are very anxious and fascinated
            with your sentiments, and you take everything extremely seriously.
            Because you may have difficulties in your romantic relationships, it is
            critical that you carefully select a compatible supportive, and
            understanding partner. <br> <br>
            You are greedy, selfish, exploit others, do not play fair or by the rules,
            arrogant, stubborn, cruel, revengeful, inflated ego, oversensitive,
            intolerant, forceful, moody, aggressive, prideful, mentally stress, and
            exaggerate oneself. You despise those who harm you, and you annoy
            others. In management roles, you are especially insufferable and
            narrow-minded. Therefore, maintaining a sense of balance in your life
            is essential.
            </p>
            `
            break;
        

        case 27:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 27th</h3> <br>
            <p>
            You're an artist with a broad perspective on the world and the ability to
            lead others. You're a humanitarian and a kind person who succeeds
            later in life. You are sensitive, perceptive, emotional, honest,
            pragmatic, entrepreneurial, conservative, intelligent, quick-witted, and
            intuitive. You are not affected or care by new trends. You shun
            superficial connections and place a high value on romantic
            partnerships. <br> <br>
            You have the ability to put your goals and ideas into action. You could
            strike it rich. You strive to learn about the life, and you try to figure out
            what life is all about. You make decisions after giving them a lot of
            thought. When you are outdoors or in nature, you feel fantastic. You 
            enjoy assisting others and are committed to your relatives. Your house
            has a significant impact on your life. <br> <br>
            You can carry on to baggage for far too long and continue to work on
            something that is no longer relevant. You have a strong sense of
            sadness and disappointment and are sensitive to a variety of
            situations. You're prone to delusions and take things far too seriously.
            You're naïve, you're torturing yourself, and you believe you're
            worthless. You have a proclivity towards self-destruction. Drug and
            alcohol addiction, mental breakdowns, anxiety, and suicide attempts
            should all be avoided. You're domineering, indecisive, temperamental,
            insecure, closed, moody, vulnerable, and you're quick to criticize
            others.
            </p>
            `
            break;
        
        case 28:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 28th</h3> <br>
            <p>
            You're a natural-born leader who also knows how to collaborate with
            others. You can persuade others to join your cause without becoming
            overpowering. You're determined to achieve and are ambitious,
            energetic, independent, pioneering, kind, loving, warm, and
            compassionate. You are led by your emotions first, and later by logic.
            The importance of romantic relationships and familial bonds cannot be
            overstated. You've got a good sense of comedy. <br> <br>
            You prefer to have complete control over your surroundings and make
            your own decisions. You vigorously protect your rights and prefer to do
            things alone rather than rely on others. You have a large number of
            acquaintances and contacts. You like teamwork and are a motivator
            for others. You're interested in all things contemporary and modern,
            and you're a natural entrepreneur. You are brilliant, fast to make
            judgments, honest, open, forthright, and intellectual. <br> <br>
            You might be stubborn, arrogant, passive, insensitive, stubborn,
            impulsive, irritable, argumentative, aggressive, domineering, lonely,
            angry, spiteful, vulnerable, guarded, hypersensitive, explosive,
            unpleasant, and inflexible because you have problems seeing things
            through. Normally, you are unable to be restrained or compelled to do
            anything, and you have reservations about your skills. You have a bad
            impact on others. You have authoritarian inclinations, insulting and
            controlling others.
            
            </p>
            `
            break;
        
        case 29:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 29th</h3> <br>
            <p>
            You're a spiritual, intellectual, and intuitive person who is in tune with
            the planet. You are hardworking, persistent, creative, sympathetic,
            healer, sociable, sensitive, and insightful. You have a lot of
            extrasensory awareness capacity, as well as the ability to uncover
            truth and knowledge. Spiritual activity is highly essential to you, and 
            you have good thinking processes. It's possible that you'll become
            wealthy and financially comfortable. You're a thinker with a keen sense
            of intuition. You are honest and rational in your reasoning. You readily
            make friends, and you are charming, intelligent, and talkative. You
            frequently encourage and motivate others to be artistic. <br> <br>
            You're easily hurt, insecure in yourself, prone to poor moods, and
            fearful of your own life's mission. Boredom should be avoided at all
            costs. Your romantic relationships are in a state of turmoil. You find it
            difficult to express your emotions. You put a lot of pressure on other
            people. You are insecure, lonely, irritable, hot-tempered, cunning,
            meticulous, quarrels, emotional outbursts, disappointments,
            vulnerable, eccentric, closed, and secretive. There is a risk of
            dangerous misinterpretation. You'd rather use drugs and booze to
            numb your feelings than seek answers. Your instability is a source of
            marital strife. You may be thoughtless and inconsiderate with others
            because you are terrified of losing your worldly possessions.
            </p>
            `
            break;
        
        case 30:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 30th</h3> <br>
            <p>
            You're an artist, a sociable, and a creative person. You're pleasant and
            energetic, and people like spending time with you. You have a smart
            mind and a fantastic fertile imagination. You consider the situation first,
            then come to a conclusion. You have a lot of unconventional ideas
            about life. You're resourceful, charming, warm, pleasant, witty,
            sociable, lively, active, flexible, and inventive. In your love relationship,
            communication is crucial. You can put forth a lot of effort to live a
            pleasant life. You do a lot of things at the same time. You have a
            unique philosophical perspective. You have a tendency to assist
            individuals who are in need. You tend to sleep a lot or sleep early. <br> <br>
            Your emotions can swing wildly, you may lack direction, hence wasting
            your abilities, and you may struggle to focus on the overall
            perspective. You don't generally accept failure, and you can't stand
            mediocrity. You have a proclivity for manipulating people, being
            insensitive, shallow, easily distracted, gossiping, blaming others,
            jealously, lack ambition, quarrels, disputes, life turmoil, being messy,
            lethargic, and having a sexual imbalance. <br> <br>
            Everything is enjoyable for you, and you enjoy being the center of
            attention. You are also quirky. You search for flaws in others.
            Sometimes you squander your energy foolishly and don't finish what
            you started. You have a lack of self-assurance. You criticize people
            and make them feel bad about themselves. You may make use of your
            good characteristics to get what you desire out of life. You have a
            multifaceted personality that makes it challenging to comprehend and
            communicate with you. You have a calculated attitude and a cutting
            tongue.
            </p>
            `
            break;
        
        case 31:
            bornDayText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                A person's birthday number (born day) is one of the most important
                pieces of information about them. It includes information about
                personal characteristics, lessons learned, and weaknesses to avoid    
            </p> <br> <br>
            
            <h3 class="bold-description-label">Born on the 31st</h3> <br>
            <p>
            You're committed to your family, your community, and building a solid
            foundation. You're logical, methodical, disciplined, and creative. You
            are also clever, honest, generous, kind, sociable, pleasant, faithful,
            thoughtful, discreet, and eager to go to any length to attain success.
            You like companionship and interacting with smart people, and you
            value communication. You are devoted to your family and like social
            gatherings. You are indeed brave and possess leadership qualities. <br> <br>
            You can overwork yourself, fail to live life to the fullest and fail to
            listen. You're generally in the opposing camp. You require safety. You
            at times forsake your ambitions and you do not complete what you
            have begun. You may believe that others must operate in the same
            manner as you. You're a superficial, bossy, and reckless person. You
            have the capacity to lie and cheat, as well as the potential to defraud
            others. <br> <br>
            You are sarcastic, closed, spiteful, domineering, and like making fun of
            people. People who are unable to protect themselves may be used by
            you. You may experience abrupt and unexpected changes. You may
            become timid and antisocial as a result of misconceptions and
            loneliness. You may have a sense of superiority or exceptionality
            </p>
            `
            break;
    
        default:
            break;
    }





    // expression / destiny number 
    var ednfName = fName.value.split(' ');
    var transitHold = ednfName;
    var count = 0;
    var countList = [];
    var countHold = 0;
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

        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };

    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
        }
    }
   

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

    var expressionText = (edNum.textContent).trim();
    var expressionInt = expressionText.split('/');
    // console.log(expressionInt);
    if (expressionText === '1' || expressionText === '10/1' || expressionInt[expressionInt.length -1] === '1') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 1</h3> <br>
        <p>
        With an Expression number 1, you have a natural talent to lead and
        can be an inventor in life. You are independent, ambitious, proactive,
        pioneering, innovative, goal-oriented, motivated, and freedom-loving.
        You can do things on your own, and are willing to take risks. For
        weaknesses, you can be reckless, selfish, self-centered, uninhibited,
        loner, and push people away by being too critical of them.
        
        </p>
    
        `
    } else if (expressionText === '11/2' || expressionInt[0] === '11') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 11/2</h3> <br>
        <p>
        With an Expression number 11, you are a caring and understanding
        person. You are sensitive, spiritual, and collaborate well with others.
        You have a very powerful intuition. You are cooperative, influenced,
        instinctive, and may have telepathic ability and clear visions. Master
        number 11 is a powerful number that enables you to quickly ascend
        into the spiritual realm. <br> <br>
        You are an inspirational person and have the ability to encourage
        others in important situations or decisions. You are a teacher or a 
        counselor that will inspire people. Most people with master 11
        numbers sometimes come from broken homes and your childhood
        may not have been a joyful one, but twisted with challenges and trials.
        Though, through your misery, you have become stronger and cleverer.
        You can now resolve problems successfully. You make great
        decisions because you’ve been through a lot. For weaknesses, you
        can be too sensitive, anxious, codependent, vulnerable, and unsure of
        yourself or your direction in life.
        </p>
    
        `
    } else if (expressionText === '22/4' || expressionInt[0] === '22') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 22/4</h3> <br>
        <p>
        With an Expression number 22, you want to create something that will
        have a long-term impact on people and the world. You are a master
        builder, practical, rational thinker, strong, disciplined, and focused. You
        are confident, and a hard worker who is determined on creating
        something of great value and meaning. Your childhood may not have
        been a joyful one but twisted with challenges and trials, and you may
        have come from broken home. Though, through your misery, you have
        become stronger and cleverer. You can now resolve problems
        successfully. You make great decisions because you’ve been through
        a lot. You’re intelligent and are capable of greatness. For weaknesses,
        you can be lazy, lack confidence and uncertainty, wasted talent, or
        have difficulty to grip what you’re capable of in life. 
        </p>
    
        `
    } else if (expressionText === '33/6' || expressionInt[0] === '33') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 33/6</h3> <br>
        <p>
        With an Expression number 33, You are a representation of pure love
        and light. You are a master teacher, healer, and can impart wisdom
        because you have the deep responsibility of guiding others on their
        path to healing and enlightenment. You have a strong calling in life to
        heal people. You can make a great educator, doctor, nurse, social
        worker, or therapist. For weaknesses, you can manipulate and impact
        people in a negative way, molding them into evil, or you take
        advantage of them. You can also be critical and gossipy about others.
        </p>
    
        `
    } else if (expressionText === '2' || expressionText === '20/2' || expressionInt[expressionInt.length - 1] === '2') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 2</h3> <br>
        <p>
        With an Expression number 2, you can collaborate well with others
        and like having a partner. You are diplomatic, sensitive, peacemaker,
        influential, cooperative, inclusive, intuitive, supportive, empathetic,
        accepting, protective, and gentle. You’re easy to get along with and
        agreeable. You can make a great doctor, nurse, social/community 
        worker, or therapist. For weaknesses, you can be oversensitive,
        codependent (dependent on others), and don’t take criticism well.
        </p>
    
        `
    } else if (expressionText === '3' || expressionText === '12/3' || expressionText === '21/3' || expressionText === '30/3' || expressionInt[expressionInt.length -1] === '3') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 3</h3> <br>
        <p>
        With an Expression number 3, you’re a positive person who likes to
        express yourself through art or communication. You are creative,
        curious, jovial, scattered, social, optimistic, naïve, youthful, funny,
        charming. You can be an actor/actress, artist, singer, dancer,
        designer, writer, painter, social media influencer, journalist,
        photographer, anything that allows you to express yourself. People
        love being around you. For weaknesses, you can be scatterbrained,
        negative, and unfocused.
        
        </p>
    
        `
    } else if (expressionText === '4' || expressionText === '13/4' || expressionText === '31/4' || expressionInt[expressionInt.length -1] === '4') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 4</h3> <br>
        <p>
        With an Expression number 4, you want law and order. You maintain
        order, and keep everything under control and running smoothly. You
        are strong and a hard worker. You are also traditional, practical, loyal,
        organized, strict, patient, dependable, responsible, reliable, and
        determined. You can be a great business owner or manager. For
        weaknesses, you can be controlling, stubborn, too conservative, and
        often struggle with changes
        </p>
    
        `
    } else if (expressionText === '5' || expressionText === '14/5' || expressionText === '23/5' || expressionText === '32/5' || expressionInt[expressionInt.length -1] === '5') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 5</h3> <br>
        <p>
        With an Expression number 5, you’re daring, flexible, traveler,
        adventurous, outgoing, social, energetic, playful, independent, fun,
        curious, adaptable, bold, freedom lover, and risk-taker. You are willing
        to try anything and go anywhere. A career in real estate or any
        profession that allows you to travel. For weaknesses, you can be
        restless, careless, inconsistent, unpredictable, superficial, and
        unfaithful. You may have a hard time sticking with anything for very
        long and always want changes in life. 
        </p>
    
        `
    } else if (expressionText === '6' || expressionText === '15/6' || expressionText === '24/6' || expressionInt[expressionInt.length -1] === '6') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 6</h3> <br>
        <p>
        With an Expression number 6, you’re caring, supportive, healing,
        compassionate, nurturing, protective, idealistic, romantic, warm,
        harmonious, self-sacrificing, dependable, and want to serve others.
        You are brilliant at helping people through their problems and trying to
        make them feel better. You can make a great doctor, nurse, social
        worker, or therapist. For weaknesses, you can sacrifice too much of
        yourself for others. You can also be too critical or gossipy about other
        people. 
        </p>
    
        `
    } else if (expressionText === '7' || expressionText === '16/7' || expressionText === '25/7' || expressionText === '34/7' || expressionInt[expressionInt.length - 1] === '7') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 7</h3> <br>
        <p>
        With an Expression number 7, you’re a truth seeker, intellectual,
        mysterious, spiritual, perceptive, skeptical, solitary, introspective, and
        analytical. You may feel one with the universe and always looking for
        the so call truth in everything. You dig below the surface and ask deep
        questions others don’t even think of. You can make a great surgeon,
        researcher, investigator, lawyer, spiritual leader, or teacher. For
        weaknesses, you can spend too much time by yourself in your head
        contemplating and researching which can make you detached,
        resentful, cold, reserved, secretive, depressed, lonely, and unable to
        express yourself. 
        </p>
    
        `
    } else if (expressionText === '8' || expressionText === '17/8' || expressionText === '26/8' || expressionText === '35/8' || expressionInt[expressionInt.length - 1] === '8') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 8</h3> <br>
        <p>
        With an Expression number 8, you try to be successful, you are
        concerned about material wellbeing, money, power, and building
        wealth. You can make a great business owner or entrepreneur as well
        as a good administrator or manager. You are ambitious,
        accomplished, balanced, dedicated, focused, powerful, prosperous,
        authoritative, strong, professional, goal-oriented, and a leader. You’re
        a good authority figure and others admire you. For weaknesses, you
        can be bossy, stubborn attitude, misused or abuse of power, inflexible,
        dictatorial tendency, care too much about money, manipulative, and
        materialistic. 
        </p>
    
        `
    } else if (expressionText === '9' || expressionText === '18/9' === expressionText === '27/9' || expressionText === '36/9' || expressionInt[expressionInt.length - 1] === '9') {
        emeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Expression or destiny number comes from all of the letters of your full
        name on your birth certificate. It defines our character and inner gifts 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Expression Number 9</h3> <br>
        <p>
        With an Expression number 9, you’re tolerant of everybody, you want
        to make the world a better place, and want to help others. You are
        kind, wise, experienced, spiritual, sacrificial, compassionate,
        accepting, humanitarian, aware, accepting, and loving. You feel you
        must help everybody and wants to solve the world's biggest issues.
        Careers in medicine, nursing, counseling, and community work,
        anything helping others are a good fit for you. For weaknesses, you
        can be manipulative, narcissistic, have a hard time opening up
        emotionally, and appear cold.
        
        </p>
    
        `
    } 
    
    


    // Minor expression number 
    var ednfName = cName.value.split(' ');
    var count = 0;
    var countList = [];
    countHold = 0;
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
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
        }
    }

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


    var minorExpressionText = (medNum.textContent).trim();
    var minorExpressionInt = minorExpressionText.split('/');
    if (minorExpressionText === '0' || minorExpressionText === '0/0') {
        memeText.innerHTML = ''
    } else if (minorExpressionText === '1' || minorExpressionText === '10/1' || minorExpressionText === '19/1' || minorExpressionInt[minorExpressionInt.length -1] === '1') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 1</h3> <br>
        <p>
        You have the ability to lead others. You are independent,
        ambitious, proactive, pioneering, innovative, goal-oriented,
        motivated, and freedom-loving. You can also be uninhibited,
        self-centered, reckless, critical of others, and a lone wolf. 
        </p>
    
        `
    } else if (minorExpressionText === '11/2' || minorExpressionInt[0] === '11') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 11/2</h3> <br>
        <p>
        You are sensitive, spiritual, and collaborates well with others.
        You have a powerful intuition. You are cooperative, influenced,
        instinctive, and may have psychic ability. You are inspirational
        and easily encourage others on important things or decisions.
        You are a teacher, counselor, or healer that will inspire people. 
        </p>
    
        `
    } else if (minorExpressionText === '22/4' || minorExpressionInt[0] === '22') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 22/4</h3> <br>
        <p>
        You are a master Builder, practical, rational thinking,
        methodical. You are confident, and a hard worker who is
        determined on making something of great value and meaning
        that will help society or last a long time. 
        </p>
    
        `
    } else if (minorExpressionText === '33/6' || minorExpressionInt[0] === '33') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 33/6</h3> <br>
        <p>
        You represent love and light. You are a teacher, a healer, and
        can impart wisdom because you have a profound responsibility
        of guiding people on their path to healing and illumination. 
        </p>
    
        `
    } else if (minorExpressionText === '2' || minorExpressionText === '20/2' || minorExpressionInt[minorExpressionInt.length - 1] === '2') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 2</h3> <br>
        <p>
        You can collaborate easily with others. You are diplomatic,
        sensitive, peacemaker, influential, cooperative, inclusive,
        intuitive, supportive, empathetic, protective, and gentle. You
        can be a mediator, social/community worker, therapist,
        medicine.
        
        </p>
    
        `
    } else if (minorExpressionText === '3' || minorExpressionText === '12/3' || minorExpressionText === '21/3' || minorExpressionText === '30/3' || minorExpressionInt[minorExpressionInt.length -1] === '3') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 3</h3> <br>
        <p>
        You are creative, communicative, curious, jovial, scattered,
        social, optimistic, naïve, youthful, funny, charming. You can be
        an artist, singer, designer, journalist, writer, anything that allows
        you to express yourself or ideas. 
        </p>
    
        `
    } else if (minorExpressionText === '4' || minorExpressionText === '13/4' || minorExpressionText === '31/4' || minorExpressionText === '40/4' || minorExpressionInt[minorExpressionInt.length - 1] === '4') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 4</h3> <br>
        <p>
        You are strong and a hard worker. You are also traditional,
        practical, hard worker, loyal, organized, strict, patient,
        dependable, responsible, reliable, and determined. You can be
        a manager, business owner, planner, project manager, etc.…
        </p>
    
        `
    } else if (minorExpressionText === '5' || minorExpressionText === '14/5' || minorExpressionText === '23/5' || minorExpressionText === '32/5' || minorExpressionInt[minorExpressionInt.length - 1] === '5') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 5</h3> <br>
        <p>
        You are flexible, traveler, adventurous, outgoing, social,
        restless, adaptable, energetic, independent, fun, curious,
        freedom lover, inconsistent, and unpredictable. You can be a
        realtor, travel agent, flight attendant, anything that allows you to
        have your freedom. 
        </p>
    
        `
    } else if (minorExpressionText === '6' || minorExpressionText === '15/6' || minorExpressionText === '24/6' || minorExpressionInt[minorExpressionInt.length -1] === '6') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 6</h3> <br>
        <p>
        You are caring, supportive, healing, compassionate, nurturing,
        protective, idealistic, romantic, warm, harmonious, and selfsacrificing. You are a doctor, nurse, therapist, community/social
        worker, counselor, or teacher. 
        </p>
    
        `
    } else if (minorExpressionText === '7' || minorExpressionText === '16/7' || minorExpressionText === '25/7' || minorExpressionText === '34/7' || minorExpressionInt[minorExpressionInt.length - 1] === '7') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 7</h3> <br>
        <p>
        - You are the truth seeker, intellectual, analytical, mysterious,
        spiritual, reserved, skeptical, perceptive, solitary, introspective,
        and secretive. You can make a great researcher, investigator,
        lawyer, or surgeon.
        
        </p>
    
        `
    } else if (minorExpressionText === '8' || minorExpressionText === '17/8' || minorExpressionText === '26/8' || minorExpressionText === '35/8' || minorExpressionInt[minorExpressionInt.length -1] === '8') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 8</h3> <br>
        <p>
        You are concerned about material wellbeing, money, and
        wealth. You can make a great business owner or entrepreneur
        as well as a good administrator or manager. You are ambitious,
        accomplished, balanced, dedicated, powerful, prosperous,
        authoritative, strong, professional, materialistic, goal-oriented,
        the powerhouse, leader/manager, and money maker
        </p>
    
        `
    } else if (minorExpressionText === '9' || minorExpressionText === '18/9' || minorExpressionText === '27/9' || minorExpressionText === '36/9' || minorExpressionInt[minorExpressionInt.length -1] === '9') {
        memeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Minor Expression/ Destiny influences the current name which is the
            name you use to present yourself together with your last name in
            social settings. Is minor in contrast to your full name at birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Expression/ Destiny 9</h3> <br>
        <p>
        You want to make the world a better place. You accept
        everyone and want to help others. You have a desire to
        advocate for world issues and the vulnerable. You are kind,
        caring, wise, experienced, spiritual, sacrificial, compassionate,
        humanitarian, aware, tolerant, and loving. Careers in medicine,
        nursing, counseling, and community work, anything helping
        others are a good fit for you. 
        </p>
    
        `
    } 
    

    // Soul Urge / Heart Desire Number 
    var suhdfName = fName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
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
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
        suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
        suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
        suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
        suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
        suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            suhdNum.innerHTML = dbTotalSum + '/<b>' + nSum + '</b>';
        }
    }
    

    suHold = sum;

    var soulUrgeText = (suhdNum.textContent).trim();
    var soulUrgeInt = soulUrgeText.split('/');

    if (soulUrgeText === '1' || soulUrgeText === '10/1' || soulUrgeInt[soulUrgeInt.length - 1] == '1') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 1</h3> <br>
        <p>
        If you have a number 1 soul urge, it suggests your heart and soul want
        to take the lead, which might include sharing an idea, creating a
        movement, or beginning something new. You are self-sufficient,
        independent, and individual. You're a natural leader with creative
        abilities and high standards. You may be competitive and follow your
        own ideas in life. You're a confident person who isn't afraid to make
        challenging judgments that others might avoid. Many people may not
        understand you since you live life on your own terms. <br> <br>
        Success will come easy to you if you are ready to put in the effort. Be
        aware that your courage might come off as arrogant to others at times.
        You aren't cut out for a 9-to-5 job, and you can easily make a living as
        an entrepreneur or service provider. Many people will look up to you
        and follow you, and they will have faith in your decisions. Some
        individuals may even be envious of your success or jealous of you.
        You could have a persuasive personality. You have a lot of intelligence
        and are one-of-a-kind. While you may value your uniqueness, you
        should strive to relax a little while you're with other people or in your
        relationship. When it comes to love or partnership connections, try to
        compromise otherwise you may find yourself being lonely in life.

        </p>
    
        `
    } else if (soulUrgeText === '11/2' || soulUrgeInt[0] === '11') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 11/2</h3> <br>
        <p>
        If the number 11 is your heart's desire, you are on a unique spiritual
        journey in this lifetime. As a messenger, healer, and inspirational
        instructor, you have a wonderful purpose in life. You have a sound
        understanding of fundamentals. Your keen intuition aids you in
        comprehending the physical world's impermanence. Your visions or
        dreams are very clear, and you have a strong spiritual connection. The
        number 11 is associated with visions, psychic power, messengers,
        and strength. However, gaining that power and rising into it might be
        difficult. The majority of individuals with soul's urge number 11 come
        from a rough background and may have come from a broken
        household. Your upbringing may not have been a happy one, but it
        was laced with hardships and tribulations. <br> <br>
        Despite this, you have become stronger and wiser as a result of your
        sorrow. You can now effectively solve difficulties. Because you've
        gone through so much, you make excellent judgments. You are highly
        intuitive, inspire people, inventive, creative, collaborative, manifesto,
        co-operative, accepting, sensitive, intellectual, leader, bring
        illumination, counselor, teacher, innovator, mediator, diplomatic,
        driven, spiritual, mystic, psychic, healer, empathic if you are vibrating
        in the positive side of your soul urge number 11. You yearn for
        companionship or partnership, both of which are quite essential to you.
        Just remember that you were born to make a big difference in the
        world, and as a result, you have the power to positively influence a lot
        of people's lives. <br> <br>
        Your weaknesses are that you can have extreme stress because you
        have great expectations for your life, mental turmoil, self-critical, selfconsciousness, worried a lot about the future, situation, or anything.
        Unhappy, overly self-reflective, nervous, prone to depression and
        anxiety due to higher frequency or energy from the spiritual realm
        which you may not be aware of. You can be addicted, impatience,
        delusions, hardness and stubbornness, misunderstandings,
        codependent - dependent on others instead of self, too sensitive, huge
        ego, push people away, physical illness, and manipulative. 
        </p>
    
        `
    } else if (soulUrgeText === '22/4' || soulUrgeInt[0] === '22') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 22/4</h3> <br>
        <p>
        You want to create something meaningful that will have a long-term
        impact on the world. You want to feel like you've had a positive impact
        on the world. You have big ambitions, but you're realistic about how
        you'll achieve them. You're also a great teacher since you have a
        strong desire to share your knowledge and encourage others to
        pursue their dreams. You not only have the ability to lead yourself, but
        also others. You don't let your emotions get in the way of your goals,
        and no one raises the bar higher than you. You are a hard worker who
        craves a comfortable home and family. <br> <br>
        If you are on the positive side of soul urge 22, you are very intuitive,
        visionary, builder of society, practical, achiever, diplomatic, brimming
        with potential, great manifesto, influential, kind, dependable, empathic,
        honest, stable, hard worker, confident, organized, disciplined, balance,
        and empath. You may struggle with having this strong soul urge
        number 22 in your early years, and it may not manifest till later in life.
        You may face several hardships or come from a broken home in order
        to be pushed toward your life's mission. Recognize that all of the
        challenges and tests you face in life are there to help you develop. <br> <br>
        If you are on the negative side of soul urge number 22, you can be a
        very lazy person, and have high expectations, people can easily take
        advantage of your kindness. You can have extreme anxiety and
        stress, workaholic, mental overload, insanity, illness, unstable, very
        controlling, destructive, rigid, huge ego, damaging, oversensitive,
        worrying about the future or life, codependent, discontent, wasted
        talents, vulnerable, manipulative, and Inflexible. Depended on others
        instead of self; complainer, and emotional. Prone to depression. 
        </p>
    
        `
    } else if (soulUrgeText === '33/6' || soulUrgeInt[0] === '33') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 33/6</h3> <br>
        <p>
        You want to provide joy to as many individuals as possible. You offer
        so much of yourself without expecting anything in return. You are kind
        and empathetic, and you believe that everyone can live in harmony.
        You're also a gifted teacher, healer, and spiritual leader who wants to
        educate people on how to connect with their own hearts and
        awareness. Honesty and integrity are important to you. You want to
        have a stable home and family. <br> <br>
        If you are on the positive side of your soul urge number 33, you are a
        healer, caring, loving, compassionate, empathic, supportive, nurturing,
        communicator, sensible, responsible, devoted, idealistic, highly selfexpressive, beautifully inspired creative, imaginative, jovial, concern
        about the community and family. This number 33 heart desire may be
        both a joy and a burden. In life, you may face a number of difficulties
        and problems. Recognize that all of the challenges and tests you face
        in life are there to help you develop. One of the most important truths
        you'll learn is that you must first heal yourself before you can help
        others. You'd be a fantastic fit for a career in counseling, nursing,
        teaching, medicine, charity work, community service, or healer. <br> <br>
        Your weaknesses are that you might be a perfectionist, controlling,
        have very high moral standards, higher critical, high expectations,
        irresponsible, prone to depression and anxiety, fear of rejection or
        criticism, indulgent, meddling, huge ego, idealization, self-destructive,
        bad listener, self-righteous, childish, untrusting, disorganized,
        scattered. 
        </p>
    
        `
    } else if (soulUrgeText === '2' || soulUrgeText === '20/2' || soulUrgeInt[soulUrgeInt.length - 1] === '2') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 2</h3> <br>
        <p>
        If you have a soul urge number 2, that’s meant you have a sensitive
        and emotional side to your personality. Your soul yearns for harmony,
        balance, and compassion. You are a mediator, not a combatant. You
        desire a sense of safety and comfort. You may despise your sensitivity
        at times, but realize that it conceals a significant benefit. You have a
        keen sense of intuition. You are a person who is diligent and
        enthusiastic about what you do. You place a high importance on love
        and a great desire to be loved by others. You are someone who
        requires companionship and partnership. To avoid being betrayed or
        deceived, you must try your best to invest your affection and
        confidence in the proper individuals. Keep in mind that you are a
        highly perceptive, empathic, and creative person. In partnerships, you
        may prefer the submissive position. <br> <br>
        Your inherent tenderness and caring nature make you an excellent
        companion, and you place such a high value on love relationships that
        you are sad if you are not in one. You make an effort to avoid
        confrontation and self-doubt. Because your judgments are typically
        correct, you must learn to trust your powerful intuition and speak up for
        what you feel is right. You can be shy, even if you like socializing. You
        can underrate your contribution and compare yourself to others all the
        time.
        </p>
    
        `
    } else if (soulUrgeText === '3' || soulUrgeText === '12/3' || soulUrgeText === '21/3' || soulUrgeText === '30/3' || soulUrgeInt[soulUrgeInt.length - 1] === '3') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 3</h3> <br>
        <p>
        If you have a soul urge number 3, that’s meant you're an excellent
        communicator, an actress, a painter, an artist, a writer, a hairstylist, a
        designer, a singer, a podcaster, a teacher, a dancer, or a poet, to
        name a few professions. Your soul yearns to express itself in this
        world. People will admire you since you were born to entertain. <br> <br>
        Recognize that you are a creative genius with a plethora of intriguing
        ideas. You must learn to use art to convey your deepest thoughts and
        feelings. If you use your artistic ambition, your abilities and personality
        can help you succeed in life. While you may constantly want to be the
        life of the party or socialize, if you want to achieve, you must focus on
        working hard and exercising self-discipline. Relax and concentrate
        since that's when you'll get the best results.
        </p>
    
        `
    } else if (soulUrgeText === '4' || soulUrgeText === '13/4' || soulUrgeText === '31/4' || soulUrgeText === '40/4' || soulUrgeInt[soulUrgeInt.length - 1] === '4') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 4</h3> <br>
        <p>
        If you have a soul urge number 4, that’s meant your soul would rather
        be in a state of order than in a state of disorder. You want consistency
        and dislike abrupt changes. You're looking for law and order. When
        you put forth the effort to achieve your objective, you are ecstatic.
        Because of your dedication and perseverance, many people will look
        up to you. You consider money to be a kind of security, and you want
        to establish a comfortable and secure living with it. You have a strong
        desire to create a pleasant household. You want a strong relationship
        as well as a steady family life. <br> <br>
        You take a reasonable, measured, and realistic approach to any
        problem. You place a high value on time and have no issues about
        taking on extra responsibilities. Any organization you work with will see
        you as a savior as a result of this. Because you are incredibly
        ambitious, you pick competitive occupations that allow you to climb up 
        the corporate ladder. However, don't let your drive for control make
        your spouse or kids feel isolated, and don't make life all about work.
        Make an effort to choose a profession that you like and that allows you
        to be flexible so that you can enjoy life.

        </p>
    
        `
    } else if (soulUrgeText === '5' || soulUrgeText === '14/5' || soulUrgeText === '23/5' || soulUrgeText === '32/5' || soulUrgeInt[soulUrgeInt.length - 1] === '5') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 5</h3> <br>
        <p>
        If you have a soul urge number 5, that’s meant your soul yearns for
        freedom, adventure, change, and taking chances. You like traveling,
        learning new things, and having fun. You're naturally charming and
        wish to stay young for the rest of your life. People are drawn to you
        and appreciate you because you have a lively personality. Some
        people with soul drive 5 may find it difficult to combine their sense of
        fun with duty, but as they become older, it becomes simpler. You are
        more capable of facing your fears and worries than others. <br> <br>
        You are prone to developing undesirable habits as a result of your
        eagerness to discover new things, such as drugs, alcohol, shopping,
        sex, and other vices. Because you like your independence, committed
        relationships or a structured schedule tend to terrify you. You despise
        being shackled in a traditional relationship. You're a high-energy
        person who is always on the go. You like socializing and are never
        boring to those around you. Your restless personality might make life
        feel like a thrill ride at times. Because you enjoy change and flexibility,
        committing to a single job may be challenging. You're used to dealing
        with change and can quickly adjust to new situations. You could be
        drawn to careers that require you to travel.
        
        </p>
    
        `
    } else if (soulUrgeText === '6' || soulUrgeText === '15/6' || soulUrgeText === '24/6' || soulUrgeInt[soulUrgeInt.length - 1] === '6') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 6</h3> <br>
        <p>
        If you have a soul urge number 6, harmony, balance, and diplomacy
        are all desires of your soul. You have a propensity of putting others
        before yourself, and you are particularly concerned about the
        vulnerable. Others are captivated by your personality because you are
        sympathetic, kind, humble, and generous. You have the vitality of a
        mother and father, as well as a caregiver. Soul urge 6 makes a
        wonderful partner or companion. You have a lot of valuable advice and
        may be able to fulfill your full potential in healing practices or other
        creative fields. You're probably well-known for being a compassionate
        and loving person. You're a natural healer who wants to work in
        healthcare, community or social service, law, or as a therapist. <br> <br>
        You want to utilize your abilities to serve others, and this brings you
        joy. You place a high value on looking after the well-being and comfort
        of your friends and family. When you have strong emotional thoughts,
        you prefer to keep them hidden and are frightened to express yourself.
        You are a joyful person because you are incredibly generous and
        giving to your loved ones. Take cautious not to lose track of your own 
        goals in order to fulfill the aspirations of others. Always be an advocate
        for your own needs and desires. Because of your loving nature, you
        may have a hard time letting people or things go. Try not to settle in a
        job, love, or life. Know that you deserve the finest and that you should
        be and feel valued.
        </p>
    
        `
    } else if (soulUrgeText === '7' || soulUrgeText === '16/7' || soulUrgeText === '25/7' || soulUrgeText === '34/7' || soulUrgeInt[soulUrgeInt.length - 1] === '7') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 7</h3> <br>
        <p>
        If your heart’s desire or soul urge is 7 then you are very
        independent with a strong sense of self-motivation. You like learning
        new things. You're looking for the truth, not what other people are
        saying. You're always thinking in your brain. Before you believe
        anything or anybody, you must have actual evidence. You have a
        critical intellect that helps you to delve further into subjects that others
        would avoid. You could even be attempting self-development and
        seeking enlightenment. You are always seeking the truth, and it is
        difficult for others to deceive you since you are intuitive and welleducated in many areas. <br> <br>
        Many people may not understand you because you ask big, significant
        questions that might take a lifetime to answer. You may find it difficult
        to communicate yourself or your thoughts. You require a companion
        who will provide you with space and time alone in order to recharge
        and think, as you are always on your mind. You don't like it when
        people are needy. Because you don't enjoy being bossed around, you
        prefer to work alone. Since you don't trust readily, you don't open
        yourself to everyone. You may feel depressed, isolated,
        misunderstood, and suffer mood swings because you take your time
        before sharing your feelings. 
        </p>
    
        `
    } else if (soulUrgeText === '8' || soulUrgeText === '17/8' || soulUrgeText === '26/8' || soulUrgeInt[soulUrgeInt.length - 1] === '8' ) {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 8</h3> <br>
        <p>
        Material things, money, power, and prosperity are all important to
        those with soul urge number 8. You have exceptional administrative,
        entrepreneurial, and managerial skills. You are a go-getter who wants
        to succeed in life. You thrive on praise and attention, and if you don't
        receive what you want, you might get frustrated and even negative.
        However, this hardly occurs since you work really hard to ensure you
        succeed in life. You are driven, goal-oriented, confident, balanced, and
        determined. Despite your numerous skills, you will face many
        challenges in life as a result of this soul urge. Understand that soul
        urge 8 has a powerful force that may be both inspiring and detrimental. <br> <br>
        Your soul was born to not only acquire but also to donate to others in
        need. You have the ability to be generous and nice to others. Know
        that, as a result of this powerful inner need, you will go through many
        lessons in life, some of which may be more difficult than those around
        you. These teachings are designed to help you grow into the person 
        that God intended for you to be. It's possible that authority figures may
        be tough to deal with. Many people may be puzzled by your actions
        and unable to comprehend why you think or act the way you do. Your
        life may be difficult at first, but you will surprise many people who have
        ever doubted you. Remember that you are a powerful figure, a natural
        leader, and a role model for others. <br> <br>
        You must realize that your soul will not rest until it has what it desires
        in this life. As a result, you must not defraud or steal from others.
        Since you are an entrepreneur, positions in leadership and
        administration are advantageous. Because you have a pleasant
        personality, you are likely to enjoy a variety of romantic relationships.
        And since money is so important to your soul, you may have a greater
        hunger for achievement than other people, so if you don't achieve
        financial prosperity in life, you may feel furious and resentful. Some 8s
        may have difficulty obtaining or earning money. <br> <br>
        Due to the fact that your soul's desire is to gain control in this
        physical world, your determination and ambition can help you flourish,
        but it can also drive you to do the unimaginable, like violating the law
        and lying to get what you want. You may be skilled at accumulating
        wealth and making money, but you may also be prone to lose them
        quickly. Try not to borrow excessively or take huge risks in order to get
        rich quickly. You have a tendency to be guarded, so try to let down
        your guard and relax once in a while. Try to see things from other
        people's perspectives rather than trying to control it all. To be happy,
        you must learn how to balance your ambition with other vital aspects
        of your life. Dictatorship, forcefulness, dishonesty, misused or abuse of
        power, stubborn mentality, aggressiveness, a procrastinating
        tendency, bossy, controlling, and relationship problems are all
        negative features of number 8.

        </p>
    
        `
    } else if (soulUrgeText === '9' || soulUrgeText === '18/9' || soulUrgeText === '27/9' || soulUrgeText === '36/9' || soulUrgeInt[soulUrgeInt.length - 1] === '9') {
        suhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your soul urge, also known as heart's desire, represents what makes
            you happy in life; this number expresses what your heart and soul
            seek more than anything else in the world. It expresses your desires,
            goals, and dreams. It is the prism through which you make decisions
            and displays your fundamental motives. The vowels in your birth name
            can be used to calculate your soul urge number.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Soul Urge Number 9</h3> <br>
        <p>
        If your soul urge number is 9, that’s meant you are a selfless and kind
        soul who is sincerely focused on improving the world. You're a natural
        humanitarian who sees yourself as a global citizen with a strong and
        genuine sense of social responsibility. Teaching, law, writing, healing,
        psychology, or counseling are all positions that you're drawn to since
        they allow you to make the world a better place. You might want to
        volunteer for a charity. You can also choose a career in medicine,
        either as a doctor or as a nurse. <br> <br>
        Your warmth and unselfish soul will aid your career advancement. You
        may be motivated by the desire to help others at the expense of your
        own needs. You have a fantastic mental clarity and you are artistic.
        This enables you to perceive things in a far broader light than others
        could. It's possible that you're more idealistic, generous, and selfless
        than others. You want to change the world for the better. Human and
        Animal rights are things you really concerned about. Or looking for
        solutions to eliminate poverty. Many may see you as a hero. The
        negative side is that you may end things easily, and become cold,
        aloof, and narcissistic. You may have lots of beginning and ending on
        relationships and other things. 
        </p>
    
        `
    } 



    // minor soul urge / heart desire 
    var suhdfName = cName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
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
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
        }
    }
    msuhdNum.innerHTML = dbTotalSum + '/' + nSum;

    var minorSoulUrgeText = (msuhdNum.textContent).trim();
    var minorSoulUrgeInt = minorSoulUrgeText.split('/');
    if (minorSoulUrgeText === '0' || minorExpressionText === '0/0') {
        msuhdText.innerHTML = '';
    } else if (minorSoulUrgeText === '1' || minorSoulUrgeText === '10/1' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '1')  {

        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 1</h3> <br>
        <p>
        You want to lead and you don't need somebody to control or guide
        you. You can assume responsibility, and you want to demonstrate
        your leadership abilities. You are goal-oriented, ambitious, honest, and
        determined to prosper. You can indeed be committed, confident, and
        eager for people to notice your efforts.
        </p>
    
        `
    } else if (minorSoulUrgeText === '11/2' || minorSoulUrgeInt[0] === '11' ) {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 11/2</h3> <br>
        <p>
        You'd want to pursue your idealistic goals. You are a messenger
        teacher and a healer. You daydream about what life and the universe
        could be like if you had your way, and you think it's feasible. You
        reside in a spiritual dimension and wish to use your spirituality and
        intuition to aid others. You are ambitious, caring, intuitive,
        collaborative, and passionate. 
        </p>
    
        `
    } else if (minorSoulUrgeText === '22/4' || minorSoulUrgeInt[0] === '22') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 22/4</h3> <br>
        <p>
        You want to construct something significant that will have a long-term
        influence on the planet. You want to think as if you've made a
        difference in the world. You have huge goals in mind, but you're
        realistic about how to reach them.
        
        </p>
    
        `
    } else if (minorSoulUrgeText === '33/6' || minorSoulUrgeInt[0] === '33') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 33/6</h3> <br>
        <p>
        You have a desire to make as many people feel better about
        themselves and happy as possible. You sacrifice so much of yourself
        without expectation. You are devoted, caring, peaceful,
        compassionate, warm, understanding, romantic, and you want
        everyone to live in harmony. You also want a comfortable loving
        environment. 
        </p>
    
        `
    } else if (minorSoulUrgeText === '2' || minorSoulUrgeText === '20/2' || minorExpressionInt[minorExpressionInt.length - 1] === '2') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 2</h3> <br>
        <p>
        You are a compassionate soul who wants to collaborate with others.
        You love working with a partner and prioritize your connections. You
        want everybody to get along, you're empathetic and diplomatic, and
        you know how to persuade people to support you. You're not
        frightened to express your feelings to get what you want in life. 
        </p>
    
        `
    } else if (minorSoulUrgeText === '3' || minorSoulUrgeText === '12/3' || minorSoulUrgeText === '21/3' || minorSoulUrgeText === '30/3' || minorSoulUrgeInt[soulUrgeInt.length - 1] === '3') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 3</h3> <br>
        <p>
        You want to be socially engaged, be able to express yourself freely,
        and demonstrate your artistic talents. No matter what's going on,
        you're cheerful, entertaining, and upbeat. You are extremely creative
        and you like to express yourself in many ways.
        </p>
    
        `
    } else if (minorSoulUrgeText === '4' || minorSoulUrgeText === '13/4' || minorSoulUrgeText === '31/4' || minorSoulUrgeText === '40/4' || minorSoulUrgeInt[minorSoulUrgeInt.length -1 ] === '4') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 4</h3> <br>
        <p>
        You want to create a routine for yourself and live a secure, stable, and
        organized life. You're reliable, trustworthy, a hard worker, and
        practical. You despise change and want a steady, quiet existence. In 
        every situation when there is turmoil, your attitude helps to keep things
        in order.
        </p>
    
        `
    } else if (minorSoulUrgeText === '5' || minorSoulUrgeText === '14/5' || minorSoulUrgeText === '23/5' || minorSoulUrgeText === '32/5' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '5') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 5</h3> <br>
        <p>
        You want to be able to do anything you want with your life. You want
        freedom, you are unpredictable, changeable, and daring. You're
        ecstatic about the opportunities you'll have, and you want to travel
        freely over the globe, enjoying adventures and taking risks. You may
        move with the flow rather than resist change. You are an explorer who
        to enjoy your life without restriction. 
        </p>
    
        `
    } else if (minorSoulUrgeText === '6' || minorSoulUrgeText === '15/6' || minorSoulUrgeText === '24/6' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '6') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 6</h3> <br>
        <p>
        You aspire to have a wonderful home and family life, and you will work
        very hard to get it. You're disciplined and capable of handling difficult
        situations. You want to be there for other people, but you also want to
        make sure that everybody gets along and that there is no tension. You
        have the ability to take on more than the majority of individuals
        because you don't mind sacrificing yourself for others
        </p>
    
        `
    } else if (minorSoulUrgeText === '7' || minorSoulUrgeText === '16/7' || minorSoulUrgeText === '25/7' || minorSoulUrgeText === '34/7' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '7') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 7</h3> <br>
        <p>
        You want to know all there is to know about the world, so you spend
        plenty of time thinking about it, pondering important questions, and
        researching what fascinates you. You have the ability to be smart and
        mystical while still being analytical. You keep your emotions hidden.
        You are spiritual and intuitive.
        
        </p>
    
        `
    } else if (minorSoulUrgeText === '8' || minorSoulUrgeText === '17/8' || minorSoulUrgeText === '26/8' || minorSoulUrgeText === '35/8' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '8') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 8</h3> <br>
        <p>
        You want to succeed in life and are willing to put in the effort
        necessary to do so. You're a great leader or manager who has trouble
        following the directions of others. You have faith in yourself and your
        talents, discipline, and a good sense of who to trust. You want to
        achieve material wealth, money, and power
        </p>
    
        `
    } else if (minorSoulUrgeText === '9' || minorSoulUrgeText === '18/9' || minorSoulUrgeText === '27/9' || minorSoulUrgeInt[minorSoulUrgeInt.length - 1] === '9') {
        msuhdText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The vowels in your present name, which you now use to identify
            yourself, are used to calculate the Minor Heart's Desire number. It
            enhances and unifies the energy emitted by your full name. It's
            possible that your current name reveals what you actually want in life.
            It has an effect on how you feel about yourself and modifies your
            identity in a minor way.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Soul Urge Number 9</h3> <br>
        <p>
        You want to do everything you can to improve the planet. You believe
        you can assist others in growing and the planet in healing its scars.
        You're empathetic, caring, accepting, understanding, and warm. You
        can look at the bigger picture and see things from a new angle.
        </p>
    
        `
    }



    // personality number 
    pnfName = fName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
    pnfName = Array.from(pnfName);
    
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        var L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
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
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y'  ) {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
            
        };
        // console.log(count);


        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1; 
        } else if (count === 11 || count === 22 || count === 33) {
            count;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            count = eval(pnSplit.join('+'));

        }
        countHold += count;
        count = 0;
    };
    // console.log(countHold)

    if (countHold < 10) {
        countHold;
    } else if (countHold === 10) {
        countHold = 1;
    } else if (countHold === 11 || countHold === 22 || countHold === 33 || countHold === 13 || countHold === 14 || countHold === 16 || countHold === 19) {
        countHold;
    } else if (countHold > 10) {
        countHold;
        
        
    }

    // console.log(countHold)
    count = countHold;
    if (count < 10) {
        count;
        pNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        pNum.innerHTML = 10 + '/<b>1</b>' ;
    } else if (count === 11 || count === 22 || count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
    } else if ( count === 13) {
        count = 13;
        sum = 4;
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
    } else if ( count === 14) {
        count = 14;
        sum = 5;
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
    } else if ( count === 16) {
        count = 16;
        sum = 7;
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
    } else if ( count === 19) {
        count = 19;
        sum = 1;
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        pNum.innerHTML = count + '/<b>' +sum+ '</b>' ;
        count = sum
    }
    pnHold = count ;


    var personalityText = (pNum.textContent).trim();
    var personalityInt = personalityText.split('/');

    if (personalityText === '1' || personalityText === '10/1' || personalityInt[personalityInt.length - 1] === '1' ) {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the <span class='redLine'>Inner Dreams Number</span>. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 1</h3> <br>
        <p>
        You are driven, focused, and motivated, and you are capable of great
        things in life. You appear to be somebody who knows what you want
        and doing, is in complete control, and isn't afraid to take risks. You're
        fiercely competitive, ambitious, and optimistic, and you're always ready
        to fight for what you believe in. You're also a risk-taker, which is a
        quality that helps you succeed. You're conscious of how you seem and
        take care of your appearance. <br> <br>
        You feel free to express yourself. You appear to be outgoing, creative,
        brave and adventurous, honest, and capable of breaking new ground.
        You give the impression of being a responsible leader, and your family
        looks to you for guidance and wisdom. You're outspoken and forceful,
        but you should be cautious of becoming overly aggressive and 
        frightening others. You are easily irritated by criticism and rapidly lose
your    cool or temper. 
        </p>
    
        `
    } else if (personalityText === '11/2' || personalityInt[0] === '11') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 11/2</h3> <br>
        <p>
        Collaboration, perfectionism, sensitivity, empathy, idealism, high
        intelligence, and the ability to enlighten the world via your creative
        ideas are all qualities you possess. You have a strong interest in the
        arts and music. Though, you don't appear to be someone who has a
        lot of confidence or who is at ease in front of the camera. You appear 
        to be a very spiritual and intuitive person with a unique ability to
        communicate with God. <br> <br>
        Because of your mild nature, you are vulnerable to vicious individuals
        and must take precautions. You also seem to be shy, quiet, and lowkey, interesting to talk to, compassionate, warm-hearted, and you pay
        attention to others. You are powerful and stronger than you believe.
        Your flaws include a lack of confidence, anxiety, and emotionality, as
        well as a reluctance to pursue your passions. You may find it difficult
        to adjust to change and are frequently criticized for your lack of
        ambition. You may be dependent on others, worried, stressed,
        unhappy, or nervous.
        </p>
    
        `
    } else if (personalityText === '22/4' || personalityInt[0] === '22') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 22/4</h3> <br>
        <p>
        You appear to be a skilled and reliable individual. You are a dedicated
        worker who is focused, powerful, and successful in business. You
        don't obsess over your appearance, instead, you concentrate on your
        tasks. You want your work to be remembered. You may have battled
        with your intrinsic strength as a child, and you've had to mature into it
        as you've become older. You are a builder and a hard worker, and you
        let nothing come between your dream. You are strong and talented.
        You want to create something that can help society. Your flaws include
        a lack of confidence, anxiety, inability to pursue your passions,
        worried, stress, nervousness, and acting like a victim. 
        </p>
    
        `
    } else if (personalityText === '33/6' || personalityInt[0] === '33') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 33/6</h3> <br>
        <p>
        You appear to be a sympathetic, loving, pleasant person who is
        concerned about everything and everyone. You'll speak out for those
        unable to speak for themselves. You may be caring, teach others, and
        provide a solid environment for yourself and your loved ones. You
        have the potential to be an excellent nurse, doctor, adviser, counselor,
        teacher, healer, and listener. You do not really care about stylish and
        prefer to be at ease. You don't mind sacrificing yourself for others.
        Your flaws include being a gossiper, getting involved in other people's
        businesses, and being vulnerable. 
        </p>
    
        `
    } else if (personalityText === '2' || personalityText === '20/2' || personalityInt[personalityInt.length - 1] === '2') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 2</h3> <br>
        <p>
        You appear like someone who is warm, friendly, welcoming, intuitive,
        open-minded, reliable, honest, responsible, humble and
        understanding, trustworthy, peacemaker, cooperative, and a good
        team player. Because of these characteristics, people like spending
        time with you. You don't seem to be someone who gets overly excited
        or too depressed, yet you might be monotonous at times. <br> <br>
        You want to be in a relationship at all times because without it, you
        feel sad. You have a seductive aura about you, which makes it simple
        to draw others to you. You prefer to be in a quiet setting, and you try to
        avoid clashes or confrontational. You may be shy, have low selfesteem, oversensitive, anxious, dislike being criticized, or be skeptical,
        which are all flaws to be mindful of.
        </p>
    
        `
    } else if (personalityText === '3' || personalityText === '12/3' || personalityText === '21/3' || personalityText === '30/3' || personalityInt[personalityInt.length - 1] === '3') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 3</h3> <br>
        <p>
        You appear to be a vibrant, outgoing, pleasant, and creative individual
        who is also highly attractive. You're a cheerful, sociable, humorous,
        and upbeat individual. You have a fashionable personality and are
        compassionate. With hard work and a little effort, you can have nice
        things happen to you such as success. You may pay attention to a
        number of different individuals, but it's difficult to devote a lot of time to
        just one person. You have a captivating personality, excellent social
        skills, diligent and responsible, possess exceptional intuition, and are
        brave and confident. You may look materialistic and manipulative if
        you utilize your insight and captivating charm to influence others for
        your own gain.
        </p>
    
        `
    } else if (personalityText === '4' || personalityText === '13/4' || personalityText === '31/4' || personalityInt[personalityInt.length - 1] === '4') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 4</h3> <br>
        <p>
        You appear to be a person who is dependable, trustworthy, and
        honest. You come across as a hardworking, rational person who
        doesn't spend too much time worrying about how you look. Others
        regard you as self-sufficient and dedicated. You're also extremely wellorganized and always have a clear and exact goal in mind. You
        consistently prioritize your family and wish to keep them safe from
        harm. <br> <br>
        You value hard work and integrity and dislike taking shortcuts.
        Because you are not adept at following other people's commands, you
        may have difficulty in subordinate roles. You don't appreciate being
        questioned about how you do things, either. You are focused, stable
        and determined. People may also see you as controlling, bossy,
        conservative, or suborn. 
        </p>
    
        `
    } else if (personalityText === '5' || personalityText === '14/5' || personalityText === '23/5' || personalityText === '32/5' || personalityInt[personalityInt.length - 1] === '5') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 5</h3> <br>
        <p>
        You appear to be a person who is interesting, outgoing, adventurous,
        creative, lively, humorous, and unpredictable. You don't like to be tied
        down and need to be able to move about freely. Others perceive you
        as someone who easily changes his or her mind. You want to explore
        the world and do things that other people are afraid of. You're
        intelligent, energetic, and your fascinating stories frequently captivate
        others around you. You're upbeat about life, enjoy traveling, and want
        to make changes if something isn't right. <br> <br>
        You can't be controlled by others since you want to be free at all times.
        People enjoy spending time with you and are inspired by your bravery.
        You're a quick learner who can quickly adjust to new surroundings.
        You enjoy presenting yourself in a bright, flashy, or extravagant
        manner and are willing to try everything. You like doing things that thrill
        you, such as eating, socializing, traveling, drinking, and a variety of
        other activities. You can have problems in your love life if your partner
        isn’t satisfying you or willy to make changes that you like. You get
        bored easily. You may be prone to overindulging in food, drugs,
        alcohol, or sex.
        
        </p>
    
        `
    } else if (personalityText === '6' || personalityText === '15/6' || personalityText === '24/6' || personalityInt[personalityInt.length - 1] === '6') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 6</h3> <br>
        <p>
        You appear to be someone who is nurturing, loving, compassionate,
        sensitive, and enjoys looking after your family and others. You are
        selfless and always eager to put others first, even if it means
        sacrificing your own wishes and objectives. You just like assisting
        people who are less fortunate without expecting something in return.
        People believe they can turn to you for aid and that you can be
        trustworthy. You are unconcerned with your appearance and want to
        feel at ease. You are kind and approachable, which makes it simple
        for others to approach you. You make an excellent therapist or
        counselor because of your immense compassion. Your flaws include
        being a gossiper, getting involved in other people's affairs, and being
        vulnerable.
        
        </p>
    
        `
    } else if (personalityText === '7' || personalityText === '16/7' || personalityText === '25/7' || personalityText === '34/7' || personalityInt[personalityInt.length - 1] === '7') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 7</h3> <br>
        <p>
        You appear to be clever, opinionated, independent, shy, secretive, and
        occasionally mysterious, with a thirst for learning. You take life
        seriously, don't require anybody else's help, and are quite intelligent.
        You may be philosophical and intelligent yet cold, at least on the
        outside. You dislike engaging with others and prefer to spend your
        time alone. <br> <br>
        You have a mysterious aura about you, and few people know anything
        about you. Other people's ability to recognize you is frequently
        hampered as a result of this. Your care for your looks fluctuates, but
        when you do put out effort, it pays off. You enjoy doing things on your
        own and are always able to solve challenges. You should be
        conscious of your weaknesses, which include being aloof, loner,
        suspicious, paranoid, and depressed.
        </p>
    
        `
    } else if (personalityText === '8' || personalityText === '17/8' || personalityText === '26/8' || personalityText === '35/8' || personalityInt[personalityInt.length - 1] === '8') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 8</h3> <br>
        <p>
        You appear to be a confident, industrious, motivated, focused,
        powerful, highly competitive, ambitious, and well-informed individual.
        You're confident in yourself, and others look to you to take command.
        Your charm conveys strength and authority, and you are frequently
        seen as a leader. You have excellent decision-making skills and are a
        natural entrepreneur. <br> <br>
        You may also appear to be extremely wealthy and accomplished. You
        like giving and frequently contribute the majority of your money to
        charity. You take pride in your appearance and strive to look your best
        at all times. You might be a workaholic who is also selfish, but you
        must consider other people, especially your romantic partner.
        Whenever you do, you can be kind, loving, and enjoyable. Understand
        that bossiness, dictatorial personality, misuse of authority, forceful,
        greedy, materialistic, and always eager for money are all
        your weaknesses.
        
        </p>
    
        `
    } else if (personalityText === '9' || personalityText === '18/9' || personalityText === '27/9' || personalityText === '36/9' || personalityInt[personalityInt.length - 1] === '9') {
        perText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Personality number is derived from the consonants of your full
            name at birth. It describes how you come across to people when you
            first meet. It’s your outside character, the you that you present to the
            world. Therefore, if you want to know what other people think about
            you, you need to know your personality number. The personality
            number is called the Inner Dreams Number. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Personality Number 9</h3> <br>
        <p>
        You appear to be graceful, outgoing, talkative, like helping people,
        charming, self-sacrifice, honest, charitable, kind, humanitarian, and
        self-assured. Others look up to you because of how nicely you present
        yourself. You have outstanding communication skills and like being in
        the company of others. You appear calm, gentle, and concerned about
        others, yet you might think too highly of yourself and be self-centered
        at times. You're also a creative person who enjoys doing activities
        relating to art forms. You're an excellent leader who can assist others
        in becoming their greatest selves. You also enjoy meeting new people
        and traveling. Your flaws are that you may be cold, aloof,
        manipulative, narcissistic like to end things, and a loner.
        
        </p>
    
        `
    }

    



    // Minor personality number 
    pnfName = cName.value.split(' ');
    count = 0;
    countList = [];

    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
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
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y' ) {
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

    if (count < 10) {
        count;
        mpNum.innerHTML =  count  ;
    } else if (count == 10) {
        count = 1;
        mpNum.innerHTML = 10 + '/1' ;
    } else if (count === 11 || count === 22 || count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        mpNum.innerHTML = count + '/' +sum ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        mpNum.innerHTML = count + '/' +sum ;
        count = sum
    }
    mpHold = count ;

    var minorPerText = (mpNum.textContent).trim();
    var minorPerInt = (minorPerText.split('/'));

    if (minorPerText === '0' || minorPerText === '0/0') {
        mperText.innerHTML = '';
    } else if (minorPerText === '1') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 1</h3> <br>
        <p>
        You appear like someone who is independent, ambitious, proactive,
        freedom-loving, pioneering, innovative, motivated, self-centered,
        uninhibited, reckless, or selfish. 
        </p>
    
        `
    } else if (minorPerText === '11/2' || minorPerInt[0] === '11') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 11/2</h3> <br>
        <p>
        You appear like someone who is collaborative, perfectionism, intuitive,
        sensitive, empathetic, idealisms, high intelligence, ambitious, and has
        the ability to enlighten the world via your creative ideas.
        </p>
    
        `
    } else if (minorPerText === '22/4' || minorPerInt[0] === '22') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 22/4</h3> <br>
        <p>
        You appear to be a skilled and reliable individual. You are a dedicated
        worker who is focused, hard worker, powerful, successful in business,
        and a builder.
        
        </p>
    
        `
    } else if (minorPerText === '33/6' || minorPerInt[0] === '33') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 1</h3> <br>
        <p>
        You appear to be a sympathetic, loving, nurturing, peaceful, and
        pleasant person who is concerned about everyone. 
        </p>
    
        `
    } else if (minorPerText === '2' || minorPerText === '20/2' || minorPerInt[minorPerInt.length - 1] === '2' === '2') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 2</h3> <br>
        <p>
        You appear like someone who is diplomatic, caring, sensitive,
        influential, cooperative, inclusive, intuitive, supportive, empathetic, and
        protective. 
        </p>
    
        `
    } else if (minorPerText === '3' || minorPerText === '12/3' || minorPerText === '21/3' || minorPerText === '30/3' || minorPerInt[minorPerInt.length - 1] === '3') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 3</h3> <br>
        <p>
        You appear like someone who is artistic, communicative, curious,
        creative, cheerful, scattered, social, positive, naïve, youthful, funny,
        and playful. 
        </p>
    
        `
    } else if (minorPerText === '4' || minorPerText === '13/4' || minorPerText === '31/4' || minorPerInt[minorPerInt.length - 1] === '4') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 4</h3> <br>
        <p>
        You appear like someone who is strong, traditional, practical, hard
        worker, trustworthy, organized, strict, easy-going, and reliable. 
        </p>
    
        `
    } else if (minorPerText === '5' || minorPerText === '14/5' || minorPerText === '23/5' || minorPerInt[minorPerInt.length - 1] === '5') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 5</h3> <br>
        <p>
        You appear like someone who is flexible, adventurous, changeable,
        unpredictable outgoing social, restless, energetic, independent,
        freedom-loving, inconsistent, unfaithful. 
        </p>
    
        `
    } else if (minorPerText === '6' || minorPerText === '15/6' || minorPerText === '24/6' || minorPerInt[minorPerInt.length - 1] === '6') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 6</h3> <br>
        <p>
        You appear like someone who is caring, healing, loving,
        compassionate, nurturing, protective, idealistic, romantic, warm,
        harmonious, gentle, and easygoing. 
        </p>
    
        `
    } else if (minorPerText === '7' || minorPerText === '16/7' || minorPerText === '25/7' || minorPerInt[minorPerInt.length - 1] === '7') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 7</h3> <br>
        <p>
        You appear like someone who is insightful, intellectual, mysterious,
        intuitive, spiritual, reserved, skeptical, knowledgeable, solitary,
        introspective, shy, analytical, mistrustful, distant, or a loner.
        </p>
    
        `
    } else if (minorPerText === '8' || minorPerText === '17/8' || minorPerText === '26/8' || minorPerInt[minorPerInt.length - 1] === '8' ) {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 8</h3> <br>
        <p>
        You appear like someone who is accomplished, balanced, wealthy,
        dedicated, prosperous, successful, authoritative, strong, professional,
        risk-taker, materialistic, goal-oriented, business-minded, ambitious, or
        forceful. 
        </p>
    
        `
    } else if (minorPerText === '9' || minorPerText === '18/9' || minorPerText === '27/9' || minorPerInt[minorPerInt.length - 1] === '9') {
        mperText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The consonants in your present name, the name you use to identify
            yourself in social circumstances, are used to generate your Minor
            Personality Number
        </p> <br> <br>
        
        <h3 class="bold-description-label">Minor Personality Number 9</h3> <br>
        <p>
        You appear like someone who is kind, wise, experienced, spiritual,
        sacrificial, compassionate, accepting, helping others, and
        humanitarian. 
        </p>
    
        `
    }


    // Maturity Number 
    count = lpHold + edHold;
    mSplit = String(count).split('');
    sum = eval(mSplit.join('+'));
    sum = count;

    if (sum < 10) {
        mNum.innerHTML = sum;
    } else if (sum === 10) {
        mNum.innerHTML = 1;
    } else if (sum === 11) {
        mNum.innerHTML = '11/2';
    } else if (sum === 22) {
        mNum.innerHTML = '22/4';
    } else if (sum === 33) {
        mNum.innerHTML = '33/6';
    } else if (sum > 10) {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum  = 1;
        } else if (sum === 11) {
            sum = '11/2'
        } else if (sum === 22) {
            sum = '22/4'
        } else if (sum === 33) {
            sum = '33/6'
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
        }
        mNum.innerHTML = sum;
    }

    var matText = (mNum.textContent).trim();
    var matInt = matText.split('/');

    if (matText === '1' || matText === '10/1' || matInt[matInt.length - 1] === '1') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 1</h3> <br>
        <p>
        If your Maturity number is 1, you'll discover that as you get older, you'll
        require more freedom and individualism. You learn how to be a leader,
        a risk-taker, ambitious, opinionated, and someone who is eager to try
        new things. You'll battle tooth and nail for the recognition and rewards
        you believe you deserve, and you'll be less ready to accept defeat,
        failure, or limits in any form. Your ability to take command and provide
        very solid advice will improve, as will your drive, determination, and
        passion. <br><br>
        People will look to you for good guidance. Other people may even
        attempt to mimic or replicate you. You become more successful, and
        this is where you lay the foundation for future achievement, as well as
        a life filled with excitement, adventure, and other things that will help 
        you go forward in life. You will become entirely self-sufficient as you
        get older, relying only on yourself for all of your needs. You'll have to
        work extremely hard to avoid becoming overly picky, too demanding,
        too arrogant, too self-centered, or too stubborn, to name a few flaws
        you should be mindful of. It’s possible you may find yourself becoming
        very irritated and lonely later in life. 
        </p>
    
        `
    } else if (matText === '11/2' || matInt[0] === '11') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 11/2</h3> <br>
        <p>
        If your maturity number is master 11, you will be an inspirational
        teacher when you grow up. You are diplomatic, crave love, sensitive,
        and peacemaker. You could also find the mate you've been looking
        for, as well as the harmony you desire. This master 11 maturity, points
        to a higher sense of spiritual purpose. You may have had a lot of
        difficulties and obstacles in your early years, such as being overly
        sensitive and experiencing that you don't fit in. You may have come
        from a dysfunctional family or home. But keep in mind that it is your
        ability to overcome tremendous obstacles that make you so
        inspirational and motivating to others. <br> <br>
        People will frequently look to you for guidance and influence. You'll be
        pushed into spirituality, and if you haven't already, something or an
        event will occur that will force you to do so. You may undergo a
        spiritual awakening where you find that you have psychic abilities and
        may investigate the spiritual realm. Premonitions, vivid dreams, having
        a clear audience, clairvoyance, and clear cognizance (clear hearing,
        seeing, and thinking) are all examples of psychic experiences. In your
        mid-30s, you'll notice significant changes in your intuition or psychic
        abilities. Therefore, you should allow your intuition to guide you
        through life. You'll even be more sensitive to the energies around you,
        and you'll be surprised at how factual your first impressions or insights
        are. You may find yourself drawn to spiritual activities. <br> <br>
        Traditional religion will not suffice, and you may try to take spirituality
        to the next step, beyond societal expectations and standards. As you
        become older, you'll have a better grasp of life and everything, and
        you'll begin to have greater trust in your Divine skills. Understand that
        you may encounter more intense challenges. Personal problems and
        physical and emotional sensitivity are all areas where you'll be put to
        the test time and above. Because of this maturity number 11, you may
        become pickier about who you let into your life because many people
        may judge you. Thus, you must avoid being overly sensitive. Try to be
        confident and do not judge when speaking about life experiences
        since you may find fame with this Maturity number 11. 
        </p>
    
        `
    } else if (matText === '22/4' || matInt[0] === '22') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 22/4</h3> <br>
        <p>
        You might be practical and hardworking if your maturity number is
        master 22. You have a strong need for structure and order, and you
        know how to construct something solid from the bottom up. People
        with this maturity number sometimes have a lot of difficulty and
        challenges in the early stages of their lives since they are exceedingly
        sensitive and potentially feel quite vulnerable. You may have found it
        difficult to accept responsibility for your actions. However, as you grow 
        older, you will gain greater power by being able to utilize your unique
        personal strength to achieve your goals. <br> <br>
        You'll learn how to inspire others and, more often than not, you'll do so
        without really trying. This maturity number has many blessings, but the
        secret to acquiring those rewards comes from your capacity to
        improve your self-confidence. As a result, as you become older,
        establishing self-confidence will be a major topic in your life, and you
        will grow in this area. You may go through a phase of devastation in
        your life, which may be quite upsetting, but this devastation occurs
        solely so that bigger and innovative things can be developed since all
        acts of invention began with actions of demolition. Understand that
        things will get better and more solid in your environment at this time.
        You may be humble, realistic, and enjoy developing something as you
        get older. You will build something long-lasting that benefits society. 
        </p>
    
        `
    } else if (matText === '33/6' || matInt[0] === '33') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 33/6</h3> <br>
        <p>
        If you have a master 33 maturity number, you care deeply about
        others and will sacrifice yourself for others. You can build the family
        you desire as you become older, and you can discover the joy you
        deserve. People with this maturity number normally have a lot of
        trouble in the early stages of their lives since they are very sensitive
        and may feel like they don't fit. However, as you grow older, your
        capacity to heal or educate others will become progressively strong. <br> <br>
        But, because 33 is the master healer and teacher, God will place you
        in situations or positions where you can provide healing and
        educate those in need as you grow older, but first, you must heal
        yourself. So much of your journey will be one of self-healing, whether
        physically, emotionally, cognitively, or spiritually. You will heal yourself
        from all of the tragedies you have suffered throughout your life as a
        result of this process, and you will then be able to heal others or
        educate them on how to heal themselves. It is entirely up to you how
        you go about doing this. People with this maturity number frequently
        have a youthful character as well as a more responsible nature.
        </p>
    
        `
    } else if (matText === '2' || matText === '20/2' || matInt[matInt.length -1] === '2') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 2</h3> <br>
        <p>
        If your maturity number is 2, you'll notice that as you get older, your
        capacity to work with people improves, as does your ability to be
        diplomatic and patient with others. You become social, prefer
        harmony, sensitive, and you want to preserve the peace. These skills
        can help you advance in your job, business, or whatever endeavor you
        are pursuing in life. Your sensitivity will expand, as will your capacity to
        pick up on various types of information. As you get older, you will find
        the spouse and harmony that you desire. You'll become more
        sensitive to other people's wants and desires. Because of your
        sensitivity, you'll become a much more empathic person. <br> <br>
        You'll be able to accurately assess other people's intentions, desires,
        and thoughts. You'll be able to do a lot more by being nice to others
        rather than using force. You may be taking on a more supportive
        position at this period, rather than being the one in charge, and instead
        of being the one who is there to help, your impact will be less visible.
        You'll find that working as part of a team and cooperating with others
        makes you happier. You'll have a better knowledge of how other
        people feel, and you'll get along with them better. You'll find that as
        you get older, you'll form more and more friendships, and people will
        be drawn to you because of your sympathetic and kind ways, and
        you'll attract more romantic partners. It’s possible you may find
        yourself becoming more dependent on others instead of yourself and
        overly sensitive later on in life. 
        </p>
    
        `
    } else if (matText === '3' || matText === '12/3' || matText === '21/3' || matText === '30/3' || matInt[matInt.length - 1] === '3') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 3</h3> <br>
        <p>
        If your maturity number is 3, you'll get more cheerful, upbeat, playful,
        sociable, fun, happy, expressive, and outgoing as you get older. Your
        capacity to think creatively will increase and your ability to
        communicate and express yourself will improve. You may be inspired
        to take up some creative activities and become more involved in some
        form of self-expression such as writing, music, or something more
        creative but also more public such as acting or public speaking. <br> <br>
        You'll grow more fluent in your ability to interact with others and
        express your ideas and views, and you'll be able to convince people in
        ways you've never been able to before. Even though you never
        anticipated or desired it, you may wind up being famous. You could 
        begin to express yourself more through the way you dress, decorating,
        or hairstyling. You may begin podcasting, writing, designing,
        communicating, using social media, and other forms of expression as
        time goes on. You must be extremely cautious not to be seduced by
        superficial looks or to pursue glitter and extravagance. Try not to
        squander your energy and money by scattering your resources.
        </p>
    
        `
    } else if (matText === '4' || matText === '13/4' || matText === '31/4' || matText === '40/4' || matInt[matInt.length - 1] === '4') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 4</h3> <br>
        <p>
        If your maturity number is 4, then you're going to notice that as you
        grow older, you're going to become a lot more down-to-earth, practical,
        organized, focused, hardworking, determined, accomplishment, goaloriented, dependable. You'll become more helpful, honest, reliable,
        trustworthy, and stable. You have a strong need for structure and
        order, and you know how to construct something solid from the bottom
        up. You may find it difficult to accept responsibility for mistakes. You
        may be humble, realistic, and enjoy developing something enduring as
        you become older. You might wish to guard against becoming overly
        controlling, stiff, or stubborn. You must ensure that you relax,
        meditate, take time out, take breaks, spend time with family and
        friends, and as well as enjoy life.
        </p>
    
        `
    } else if (matText === '5' || matText === '14/5' || matText === '23/5' || matText === '32/5' || matInt[matInt.length - 1] === '5') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 5</h3> <br>
        <p>
        If your maturity number is 5, you like change, independence, and
        adventure as you get older. You're not scared to take risks and try new
        things. You'll gain a lot of strength and energy, and you'll become
        more lively and charming, as well as more fast-paced, while others
        slow down. You'll undoubtedly strive to enjoy yourself. <br> <br>
        You will prefer to travel and discover new. You'll be more sociable,
        outgoing, daring, free, friendly, romantic, charming, flexible, funny,
        playful, thrilling, energetic, adaptive, accepting, dynamic, and
        resourceful. You may be a globe traveler and an explorer while still
        remaining youthful at heart. However, you may get restless and
        impatient. You may easily fall in love with something, only to get bored
        and lose interest in it. It's possible that you'll become addicted,
        unstable, and unpredictable. You should try to maintain your focus and
        self-discipline. 
        </p>
    
        `
    } else if (matText === '6' || matText === '15/6' || matText === '24/6' || matInt[matInt.length - 1] === '6') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 6</h3> <br>
        <p>
        If your maturity number is 6, as you grow older, you will become more
        concerned with the people in your life, your family, friends, and
        community/volunteering work. You're going to become more
        concerned with their well-being and taking care of them. As you get
        older, you will be more kind, accepting, compassionate, gentle, 
        respectful, peaceful, stable, responsible, loving, caring, devoted,
        caretaker, domestic, harmonious, balanced, and attractive. You’ll
        demonstrate a warm and welcoming energy that others want to be
        around. You have a natural ability to collaborate with others and offer
        assistance and guidance. <br> <br>
        As you grow older, romantic relationships, family, and home will be
        very important to you. You want to take care of everyone around you
        by being the nurturer, the supporter, and the comforter. You're going to
        be drawn into all kinds of roles where you have to take responsibility
        for helping, teaching, counseling, and healing people. You will create
        the family that you always wanted and find happiness. You will create
        financial stability for yourself and build a foundation for future
        generations. You will also be surrounded by lots of friends and family
        in your older years. You should try to avoid becoming too perfectionist
        or self-sacrificing.

        </p>
    
        `
    } else if (matText === '7' || matText === '16/7' || matText === '25/7' || matInt[matInt.length - 1] === '7') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 7</h3> <br>
        <p>
        If your maturity number is 7, as you become older, you live your life
        the way you want to live it, which is unique to you. You attempt to
        study as much as possible and spend a lot of time alone in search of
        knowledge. You may think and reflect as much as you like, and you
        can share the wisdom you've received. You'll grow increasingly
        preoccupied with life's larger issues or questioning, such as the
        purpose of life, why we're here, what we're doing on this planet, and
        why things are occurring the way they are. You'll be drawn to
        philosophy, or religion, if not esoteric arts. You'll be looking at a
        number of new concepts and broadening your knowledge in a variety
        of fields. <br> <br>
        As you become older, your intuition will get stronger and stronger.
        You may have strong intuition at first, but around the age of 35 or
        older, you'll realize that you're becoming more psychic and developing
        psychic talents like clear cognition, clairaudience, and clairvoyance
        (clear thinking, hearing, and seeing). As you become older, your
        capacity to evaluate abstract topics and concepts will improve, and
        you will begin to live according to higher values. You'll have a better
        knowledge of life and be able to perceive things for what they truly are,
        as well as connect with the spiritual realm in ways you've never been
        able to. You may find that you want to spend more time alone and
        have more privacy. You may decide to relocate to the suburbs or a
        small town because you want more time to relax and enjoy the peace
        and quiet. You definitely don't want to become overly withdrawn,
        lonely, paranoid, suspicious, too secretive, and isolated which are the
        negative traits of the 7 number. 
        </p>
    
        `
    } else if (matText === '8' || matText === '17/8' || matText === '26/8' || matInt[matInt.length - 1] === '8') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 8</h3> <br>
        <p>
        If your maturity number is 8, you'll become more successful,
        ambitious, risk-taker, hard worker, achiever, driven, organized, and
        financially stable as you become older. It's possible that you'll become
        more committed to your work and profession. When it comes to
        manifesting things, you'll realize that things are becoming easier for
        you. If you've had problems manifesting your desires in the past, this
        maturity 8 will undoubtedly assist you, since the number 8's energy is
        all about power, money, and accumulating wealth. Your capacity to tap
        into your own inner power will improve with time. You may see that
        others begin to rely on you for financial assistance and resources. <br> <br>
        You may become an expert at whatever you choose to do as you
        become older and attain enlightenment. The universe will frequently
        place you in higher-ranking positions or positions of leadership, and
        you will be granted more authority over other people, organizations,
        corporations, enterprises, and businesses. Your chances of achieving
        success and financial freedom have greatly improved. To avoid
        suffering from abrupt and devastating material losses, you will need to
        be tough and self-disciplined. There can be financial gain, but there
        can also be a financial loss because you'll be taking more risks. Simply
        avoid having an oversized ego and use greater caution. You may
        become materialistic and extremely selfish or greedy as a result of
        your obsession with money.
        
        </p>
    
        `
    } else if (matText === '9' || matText === '18/9' || matText === '27/9' || matInt[matInt.length - 1] === '9') {
        mText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The maturity number also called <span class="redLine">Reality or Realization Number</span> is what
            you may likely see in life once you've completed your childhood and
            become a true adult (what you will become as you grow older). At the
            age of 30, the energy of this number begins to have an effect on you,
            and it begins to have a deeper impact on your life. Then after the age
            of 35, you'll really start to notice the impact of this number, and that
            influence will only expand as you get older. With the exception of
            masters 11, 22, and 33, the maturity number is calculated by adding
            the life path and destiny/expression numbers to produce a single digit.
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Maturity Number 9</h3> <br>
        <p>
        If you have a maturity number of 9, you must learn to embrace and
        serve all of humanity. As you become older, you'll care more about
        society and the environment. Your heart will open and strive toward
        assisting others in some way, particularly via healing, teaching, or
        charity. You'll be thinking a lot about how your community and the rest
        of the planet are doing, you could feel compelled to get more involved
        in public service. Your appreciation for both the arts, music, and
        beauty will grow, and you may find yourself involved in some type of
        creative art and design, or perhaps as a humanitarian. <br> <br>
        As you become older, your wisdom and awareness of the world will
        expand, and more people will seek your expert advice. You may be
        placed in positions or situations where you will be called upon to help
        others. As time passes, your intuitive and empathic talents will
        improve, and you will become more sensitive to the energy around
        you. You may be able to pick up on other people's energies as well. As
        you become a caretaker to mankind, you will feel as if you are
        genuinely making a difference and leaving a valuable long-lasting
        impression in the world. Thus, you must avoid being arrogant, aloof,
        distant, mentally unstable, cold, narcissistic, moody, or too sensitive.
        </p>
    
        `
    }
    
    

        


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
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum =1
        } else if (sum === 11) {
            sum = '11/2'
        } else if (sum === 22) {
            sum = '22/4'
        } else if (sum === 33) {
            sum = '33/6'
        } else if (sum > 10) {
            mSplit = String(sumAttitude).split('');
            sum = eval(mSplit.join('+'));
        }
        sumAttitude = sum;
    }
    aNum.innerHTML = sumAttitude;

    var attitudeText = (aNum.textContent).trim();
    var attitudeInt = attitudeText.split('/');

    if (attitudeText === '1') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 1</h3> <br>
        <p>
        You give the impression that you’re competitive, a leader, driven, and
        highly self-motivated. You are ambitious, original, responsible, loyal,
        intelligent, insightful, courageous, innovative, confident, independent, 
        and unconventional individualism. You are more likely to try new
        avenues, take risks, and venture out into unknown territories. You
        don’t usually ask for help. You’re at your best when you’re in a
        leadership position. You’ll grapple with self-esteem issues, so you’ll
        want praise from others to keep you moving. Weaknesses: loneliness,
        depression, selfishness, isolation, huge ego. You may have a bossy
        and dominating attitude. 
        </p>
    
        `
    } else if (attitudeText === '11/2' || attitudeInt[0] === '11') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 11/2</h3> <br>
        <p>
        You are at your best when you’re being an inspired teacher or healer
        in whatever scopes you choose. You are compassionate, kind, caring,
        extremely artistically creative, very intuitive, and emotionally sensitive.
        You might give the imprint that you’re a bit peeling, too sensitive,
        dreamy, and anxious. Can have an intense and struggling life. 
        </p>
    
        `
    } else if (attitudeText === '22/4' || attitudeInt[0] === '22') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 22/4</h3> <br>
        <p>
        You give an attitude of a builder. You’re were innate to be a Master
        Builder who should create something useful and lasting for society.
        You are a practical, self-absorbed, open-minded, organized, hard
        worker, and honest. You’re at your best when you establish and
        manage. You’re determined, stable, loyal, and reliable. Dark side: you
        can be controlling, sensitive, a waste of talents, having an intense and
        struggling life. 
        </p>
    
        `
    } else if (attitudeText === '2' || attitudeText === '20/2' || attitudeInt[attitudeInt.length - 1] === '2') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 2</h3> <br>
        <p>
        You give an attitude of someone that can get things accomplished
        through kindness, diplomacy, being accommodating, and
        collaboration. You have inborn abilities of communication skills,
        negotiations, gentle, salesmanship, mediation, loving. You are softspoken. You have an easygoing manner and often display nervous
        tension because you’re so concerned about managing everyone’s
        emotions. You are naturally intuitive and love-centered. Relationships
        are of the utmost importance to you. You’re compassionate and
        always want a partnership. You can take everything personally and be
        overly emotionally sensitive at times. You may be codependent and
        unstable if you are on the negative side of this number. 
        </p>
    
        `
    } else if (attitudeText === '3' || attitudeText === '12/3' || attitudeText === '21/3' || attitudeText === '30/3' || attitudeInt[attitudeInt.length - 1] === '3') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 3</h3> <br>
        <p>
        You give an attitude of a creative genius, social, dynamic, and active.
        You have inborn abilities of entertaining, presentation, motivating,
        artistic, writing, playful, friendship, and fun. You five a performer’s
        attitude. You can become very successful in any field related to
        entertainment and performing arts. You’re also moody and scattered,
        and you are often hard on yourself. You may have a habit of
        lavishness, superficial, overspending, and immature thoughts.
        </p>
    
        `
    } else if (attitudeText === '4' || attitudeText === '13/4' || attitudeText=== '31/4' || attitudeText === '40/4' || attitudeInt[attitudeInt.length - 1] === '4') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 4</h3> <br>
        <p>
        You give an attitude that you’re at your highest and best when you key
        into your organization and management skills. You have natural
        abilities of logical thinking, detailing, perfection, hard work, and
        managing. You’re determined, organized, honest, stable, loyal, and
        reliable. You’re a great planner, strategist, and manager. You can
        become very successful in any field due to your organizational skill.
        The other side of you is that you may become criticizers, blunt,
        controlling, and stubborn.
        
        </p>
    
        `
    } else if (attitudeText === '5' || attitudeText === '14/5' || attitudeText === '23/5' || attitudeInt[attitudeInt.length - 1] === '5') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 5</h3> <br>
        <p>
        You give an attitude of a freedom lover, adventurous, multitalented,
        playful, fun, daring, loving, risk-taker, and creative. You may fall under
        the Intellect group. You can become very successful in any field where 
        your get freedom. You’re flirty, gregarious, and full of life. You like
        changes and like traveling. The other side of you is that you may have
        a depressive nature, and may lead yourself to addiction, unstable,
        unpredictable, constant life change, self-destruction, and unfaithful. 
        </p>
    
        `
    } else if (attitudeText === '6' || attitudeText === '15/6' || attitudeText === '24/6' || attitudeInt[attitudeInt.length - 1] === '6') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 6</h3> <br>
        <p>
        You give an attitude of a harmonious individual. You are
        compassionate, loving, nurtured, peaceful, family-oriented gentle,
        warm, and caring. You are a very social creature. Your attitude is of a
        loving and harmonious person. You can become very fruitful in any
        field linked to social/community work, educational activities, medicine,
        nursing, as well as in business. Perfectionist tendencies have a major
        impact on your ability to be content and tolerant of yourself and others
        </p>
    
        `
    } else if (attitudeText === '7' || attitudeText === '16/7' || attitudeText === '25/7' || attitudeText === '34/7' || attitudeInt[attitudeInt.length - 1] === '7') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 7</h3> <br>
        <p>
        You give the attitude of someone who is introverted and have great
        qualities of observing and analyzing. You are knowledge-oriented and
        intuitive. Therefore, you have an attitude of an intellect and a
        knowledgeable individual. You can become very successful in any
        field where observation, research, lawyer, education, surgeon, and
        analysis. The dark side of you is that you can become isolated,
        paranoid, reserved, loner, and secretive.        
        </p>
    
        `
    } else if (attitudeText === '8' || attitudeText === '17/8' || attitudeText === '26/8' || attitudeText === '35/8' || attitudeInt[attitudeInt.length - 1] === '8') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 8</h3> <br>
        <p>
        You have a natural talent for administration, management, and money
        matters. You value money for all it can do for you in this life, it offers
        stability, security, freedom, power, and respect. You have money,
        wealth, manager’s attitude. You’re strong-willed, confident, and more
        powerful. You can become very successful in a business or leader
        position. You’ll have authority issues a letting go of past issues, bossy,
        and inflexible. 
        </p>
    
        `
    } else if (attitudeText === '9' || attitudeText === '18/9' || attitudeText === '27/9' || attitudeText === '36/9' || attitudeInt[attitudeInt.length - 1] === '9') {
        aText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Attitude number shows a great deal about your natural ability to
        succeed at anything you choose to pursue. Also called <span class="redLine"> Achievement
        Number. </span>
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Attitude Number 9</h3> <br>
        <p>
        You are high-tempered, compassionate, humanitarian, and a warrior.
        You have a humanitarian attitude. You can become very successful in
        bigger ventures, business, or humanitarian causes. You’re a gifted,
        intuitive, natural teacher, and compassionate leader. You’re at your
        best when you are serving and helping others. The dark side is that
        you may detach yourself from others, be drained emotionally, be
        insensitive, seem cold, lack involvement, narcissistic, and angry. 
        </p>
    
        `
    }




    // life Path / Expression Bridge
    var lifePath = ((lpNum.textContent).trim()).split('/');
    lpHold = Number(lifePath[lifePath.length - 1]);
    mSplit = String(lpHold).split('');
    lpHold = eval(mSplit.join('+'));
    
    var expPath = ((edNum.textContent).trim()).split('/');
    edHold = Number(expPath[expPath.length - 1])
    mSplit = String(edHold).split('');
    edHold = eval(mSplit.join('+'));


    var subtract = lpHold - edHold;
    // console.log(subtract);
    if (subtract < 0) {
        subtract = subtract * (-1);
    } else {
        subtract;
    }
    lpebNum.innerHTML = String(subtract)


    var lifePathExpText = (lpebNum.textContent).trim();
    var lifePathExpInt = lifePathExpText.split('/');

    if (lifePathExpText === '0' || lifePathExpInt[lifePathExpInt.length - 1] === '0') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 0</h3> <br>
        <p>
        indicates that you are a person who makes smart judgments on a
        regular basis. In general, you are self-assured and take the best path
        to your accomplishment. You are able to achieve your goals with ease.
        It makes you feel peaceful on the inside. The Life Path/Expression
        Bridge Number 0 combination is quite favorable. People that have this
        combination make significant success in their lives.
        </p>
    
        `
    } else if (lifePathExpText === '1' || lifePathExpText === '10/1' || lifePathExpInt[lifePathExpInt.length - 1] === '1') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 1</h3> <br>
        <p>
        signifies a lack of self-assurance. You prefer to believe other people's
        opinions above your own. You frequently believe that others are
        smarter and have a greater understanding of all things. However, you
        should be aware that the majority of them just appear to be. Except for
        yourself, no one knows what's best for you. Maybe you're still learning,
        yet you have the strong intuitive ability. You will be considerably more
        successful and attain your goals more rapidly if you have greater
        confidence and assurance in your talents. You expect others to
        appreciate anything you do. You value acknowledgment. However, the
        cause is just a lack of self-confidence on your part. Undeniably, you
        are self-sufficient, and the views of others only serve to obstruct you.
        </p>
    
        `
    } else if (lifePathExpText === '2' || lifePathExpText === '20/2' || lifePathExpInt[lifePathExpInt.length - 1] === '2') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 2</h3> <br>
        <p>
        Gives you the personality of someone who is really caring and friendly.
        However, the majority of individuals are unaware of this. You believe
        that you are an open person who is understood by others, but this is
        not the case. Everyone is different, and you must be more delicate
        with others in order for them to notice your kindness. Peacekeeping
        and pragmatism may also be useful in some situations. Sometimes
        you aren't paying enough attention to other individuals. It might cause
        them pain and more confusion. You must be nicer and more open
        while interacting with others in order to avoid confrontations that will
        almost certainly prevent you from achieving your goals. You must be
        confident in your talents and avoid repelling others which is a formula
        for good fortune and contentment.
        
        </p>
    
        `
    } else if (lifePathExpText === '3' || lifePathExpText === '12/3' || lifePathExpText === '21/3' || lifePathExpText === '30/3' || lifePathExpInt[lifePathExpInt.length -  1] === '3') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 3</h3> <br>
        <p>
        fits those who are tense, uptight, nervous, and stressed most of the
        time. They are serious individuals. It makes their lives more difficult.
        You should learn to take life easily. You must converse and connect
        with others more. If you make an effort to socialize, you will notice that
        your life turns out to be simpler. It doesn't mean you can't be serious
        about the important elements of your life. However, it is crucial to
        distinguish between serious matters and times in which you may just
        relax. You may express yourself and put your skills to use in a variety
        of creative industries. It will assist you in relaxing and channeling your
        thoughts in a constructive direction.
        
        </p>
    
        `
    } else if (lifePathExpText === '4' || lifePathExpText === '13/4' || lifePathExpText === '31/4' || lifePathExpText === '40/4' || lifePathExpInt[lifePathExpInt.length - 1] === '4') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 4</h3> <br>
        <p>
        suggests that you are someone whose success is based on your
        capacity to focus on a certain task and stay up with the times. Don't be
        afraid to embrace new ideas and concepts; otherwise, you risk missing
        out on the important possibilities that life has to offer. Pragmatism isn't
        the last thing on your mind when it comes to achieving success. As a
        result, you must be more practical and broaden your perspective on
        occurrences. It is vital to join the world's rapid pace and respond
        quickly. This number encourages you to complete your tasks as soon
        as possible rather than procrastinate. If you put anything off, there's a
        good chance you won't get back to it and finish it.
        
        </p>
    
        `
    } else if (lifePathExpText === '5' || lifePathExpText === '14/5' || lifePathExpText === '23/5' || lifePathExpInt[lifePathExpInt.length - 1] === '5') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 5</h3> <br>
        <p>
        indicates you're a person who doesn't make decisions based on
        uniqueness. You have a tendency to be predictable in your activities.
        The majority of people with bridge number 5 are unaware of their
        inventive abilities. However, it allows them to succeed in a variety of
        disciplines. It's simply a matter of listening to your inner voice and
        experimenting with different ways. Try to be more courageous in
        expressing your point of view. It is sometimes even important to take a
        chance and be more open with your opinions. You're stiff and rigid
        from time to time. These are not the finest qualities for achieving
        success. Try to modify it by becoming more tolerant and capable of
        reaching a compromise
        </p>
    
        `
    } else if (lifePathExpText === '6' || lifePathExpText === '15/6' || lifePathExpText === '24/6' || lifePathExpInt[lifePathExpInt.length - 1] === '6') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 6</h3> <br>
        <p>
        belongs to a group of people who are quite inventive. This quality may
        be shown in whatever sector you work in. It is beneficial to your
        personal development and success to communicate your views and
        opinions. You may proudly display your creative initiatives while being
        calm and relaxed, knowing that your original approach is usually rather
        effective. Relationships are a vital part of your life. Your good impact is
        undeniable. As a result, you must pay greater attention to maintaining
        warm ties with close friends and spending quality time with your family
        </p>
    
        `
    } else if (lifePathExpText === '7' || lifePathExpText === '16/7' || lifePathExpText === '25/7' || lifePathExpText === '34/7' || lifePathExpInt[lifePathExpInt.length - 1] === '7') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 7</h3> <br>
        <p>
        Usually fits somebody who spends a lot of time thinking about
        everything. Such folks are always on the search or look out for life's
        truths. Solitariness is the state in which these people are able to
        develop their philosophical ideas and feel joyful and free. They do not
        act fast; they require time to process all of the information. If 7 is your
        bridge number, you have a lot of questions on your mind and need
        isolation to clear your thoughts and discover answers. You are
        continually hungry for fresh information
        </p>
    
        `
    } else if (lifePathExpText === '8' || lifePathExpText === '17/8' || lifePathExpText === '26/8' || lifePathExpText === '35/8' || lifePathExpInt[lifePathExpInt.length - 1] === '8') {
        lpebText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Life Path / Expression bridge number provides insight into your
            personality. It aids in bridging the gap between who you are and who
            you want to be, allowing you to take the appropriate steps in life and
            achieve success in everything you do.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Life Path/ Expression Bridge 8</h3> <br>
        <p>
        says you don't have a feeling of direction. Ambition is not one of your
        characteristics and afraid of being competitive. However, nowadays it
        is hard to exist without a purpose. You are compelled to create specific
        goals in today's world. You are uneasy because you must exert effort
        in order to reach your goal, but you are ecstatic when you succeed. It's
        simply a matter of being more diligent and realistic. Modern life
        imposes strict constraints on us. You must realize that material goods
        and money are not the most important factors. It's crucial even for
        achieving non-material goals. Your capacity to work hard and grasp
        what can benefit you determines your success on any path.
        </p>
    
        `
    }

    // Heart's Desire ? Personlaity Bridge Number 
    hdpbNum.innerHTML;
    pnHold = (pNum.textContent).split('/');
    pnHold = pnHold[pnHold.length - 1];

    suHold = ((suhdNum.textContent).trim()).split('/');
    suHold = Number(suHold[suHold.length - 1])
    var hdPB = suHold - Number(pnHold);
    var x = hdPB;
    if (x < 1) {
        hdPB = x * (-1);
    } else {
        hdPB = x;
    };
    hdpbNum.innerHTML = hdPB;

    var HerDesPerText = (hdpbNum.textContent).trim();
    var HerDesPerInt = HerDesPerText.split('/');

    if (HerDesPerText === '0' || HerDesPerInt[HerDesPerInt.length - 1] === '0') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge 0</h3> <br>
        <p>
        This is a lucky number for you. You have an amazing capacity to make
        those around you feel peaceful, joyful, and at ease. They enjoy
        spending time with you and are interested in your company. You are a
        responsible individual who recognizes that your success is contingent
        on your efforts. But it's not always feasible to keep everything under
        control. Accept it and don't surrender. If your strategy does not go as
        planned, you are likely to become anxious. You won't have to be
        concerned if something goes wrong. Everything will fall into place over
        time.
        </p>
    
        `
    } else if (HerDesPerText === '1' || HerDesPerText === '10/1' || HerDesPerInt[HerDesPerInt.length - 1] === '1') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 1</h3> <br>
        <p>
        This number motivates you to put forth more effort. It is not simple to
        achieve the goal. The technique that is most comfortable for you is not
        the greatest answer. For you, changes are required. If you keep
        looking for new methods to succeed, working hard, and remembering
        that it all comes down to your efforts, you'll be successful.
        Others are waiting for you to communicate openly with them.
        Unfortunately, even if you believe they do, most of the time they don't.
        Make an effort to be more transparent with others. Clearly express
        your views so that people can comprehend you. To make
        communication simpler and to be on the same page with others, it is
        vital to explain oneself in a basic manner.
        </p>
    
        `
    } else if (HerDesPerText === '2' || HerDesPerText === '20/2' || HerDesPerInt[HerDesPerInt.length - 1] === '2') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 2</h3> <br>
        <p>
        You have the power to persuade others. You don't use this ability for
        your personal goals. Maybe you're not even aware of this talent, but
        others frequently do what you want. Regardless of this, you must pay
        greater attention to the needs of others. If you understand and don't
        neglect the expectations of people who are important to you, you will
        have long-lasting friendly connections. It's sometimes vital to focus on
        other people's interests and needs. It will aid in the development of
        natural, harmonious connections. Patience is essential for both your
        profession and your personal connections. Make sure you don't rush
        anything. In such circumstances, it's vital to take a deep breath and
        wait for a moment.
        </p>
    
        `
    } else if (HerDesPerText === '3' || HerDesPerText === '12/3' || HerDesPerText === '21/3' || HerDesPerText === '30/3' || HerDesPerInt[HerDesPerInt.length - 1] === '3') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 3</h3> <br>
        <p>
        You're an extremely creative and innovative individual. You get easily
        frustrated by failures. You need to have trust in yourself and face life’s
        tough situations with courage. It's always fascinating to talk to you and
        observe you. That is why so many people admire your friendship.
        However, you are not always at ease with others because it is so easy
        to harm or hurt you. You are a highly sensitive individual. It is
        preferable for you to reveal your deepest sentiments and be honest till
        the end only with trusted friends and family members who will not hurt
        you. It is critical that you gain confidence. You have numerous skills
        and deserve to be appreciated, satisfied, and at ease in any
        organization. All of the disciplines associated with arts are a good fit
        for you.
        </p>
    
        `
    } else if (HerDesPerText === '4' || HerDesPerText === '13/4' || HerDesPerText === '31/4' || HerDesPerInt[HerDesPerInt.length - 1] === '4') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 4</h3> <br>
        <p>
        Nature has a positive impact on you. Spending time outside and taking
        in the beauty of nature might help you relax. You should put more
        effort to be more reliable, honest, punctual, stable, and follow certain
        systematic approaches. As well, you should learn to appreciate and
        love your environments; and it is beneficial for you to be more
        organized. Without a systematic, well-understood set of stages,
        success is impossible. Another important aspect is to comprehend the
        true condition of affairs, because your imagination may sometimes
        paint a false image of events. Others will comprehend you well if you
        understand yourself and are confident in such fundamentals as your
        life's meaning and ideas. The most crucial things to improve are
        dependability and timeliness.
        
        </p>
    
        `
    } else if (HerDesPerText === '5' || HerDesPerText === '14/5' || HerDesPerText === '23/5' || HerDesPerInt[HerDesPerInt.length - 1] === '5') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 5</h3> <br>
        <p>
        You should get rid of your dependence on others since now is the time
        to be self-sufficient and independent. You should have faith in your
        own ability and follow your gut instincts. Risks made at this time will
        pay off handsomely. Adaptability and resilience are really important.
        Make an effort to be more courageous and unorthodox. To reach the
        pinnacle of achievement, you must take risks. Make an effort to strike
        a balance between sacrificing and behaving yourself. Make an effort to
        be more consistent.
        </p>
    
        `
    } else if (HerDesPerText === '6' || HerDesPerText === '15/6' || HerDesPerText === '24/6' || HerDesPerInt[HerDesPerInt.length - 1] === '6') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 6</h3> <br>
        <p>
        Relationships are really important in your life. Build positive and
        pleasant friendships with your peers. Spend lots of time with your
        family and close friends. It will provide you with a sense of inner peace
        and harmony. Companionship with other individuals has a beneficial
        impact on achieving your purpose. Understand that in any relationship,
        honesty is crucial. You must develop a sense of trust for others and
        take responsibility for your own people's sentiments. Don't be afraid to
        express your emotions to them. Use your imagination and
        inventiveness. It will have a positive impact on your growth. Tranquility
        and peace will follow if you fully express yourself and your feelings.
        </p>
    
        `
    } else if (HerDesPerText === '7' || HerDesPerText === '16/7' || HerDesPerText === '25/7' || HerDesPerInt[HerDesPerInt.length - 1] === '7') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 7</h3> <br>
        <p>
        For you, simply spending some time alone would be plenty. You will
        get a lot of knowledge and feel satisfied as a result of this. You want to 
        explore further into issues in order to discover some previously
        undisclosed answers. It's possible that you'll need to spend a lot of
        time by yourself and reflect on spiritual issues. Through your studies,
        you will seek out and obtain information and insight. Your mind is
        bursting at the seams with concepts. You'll have a lot of inquiries
        regarding various topics on your mind. You must be considerate. For
        you, self-reflection and solitude are the keys to cheerfulness
        </p>
    
        `
    } else if (HerDesPerText === '8' || HerDesPerText === '17/8' || HerDesPerText === '26/8' || HerDesPerInt[HerDesPerInt.length -1 ] === '8') {
        hdpbText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The heart’s desire/personality bridge number is like a bridge between
            what you really are and what others think you are.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Heart Desire/ Personality Bridge Bridge 8</h3> <br>
        <p>
        You focus more on money, wealth, and power. Shortcuts should be
        avoided at all costs. This strategy isn't going to work for you. You'll
        also need to work with a thorough and structured approach. To be
        fruitful in anything you do, you must combat your relaxed or lazy
        attitude and work hard. If you make the most of your resources now,
        you can achieve financial and monetary success. You must cherish
        the fact that financial security leads to happiness. You'll have to relax
        and let things happen naturally. You should strive for a high level of
        ambition. To reach your objectives, you will have to put in a lot of
        effort. Don't be irrational; instead, attempt to instill in yourself the belief
        that monetary stability equals security.
        
        </p>
    
        `
    }





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
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            rtNum.innerHTML = sum ;
        }
    };
    var ratTotText = (rtNum.textContent).trim();
    var ratTotInt = ratTotText.split('/');

    if (ratTotText === '1' || ratTotText === '10/1' || ratTotInt[ratTotInt.length - 1] === '1') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 1</h3> <br>
        <p>
        You're filled with creative concepts. You are well-concentrated,
        determined, and intelligent. You have diverse perspectives on the
        same situation. You put your thoughts into action and don't give others
        much thought. Your way of thinking is analytical, and if you don't
        believe in it, it's difficult to influence you. You prefer to do things your
        own way and dislike it when others call out your flaws. In challenging
        moments, instead of giving up, you are more likely to fight until the
        finish. You don't duplicate other people's ideas; instead, you have your
        own style. You have a unique way of thinking and seeing things that
        are often at odds with others. You are calm and composed in a
        stressful or tense situation, and you have a clear idea of what you
        desire.
        </p>
    
        `
    } else if (ratTotText === '11/2' || ratTotInt[0] === '11') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 11/2</h3> <br>
        <p>
        You may not be aware of your skills since you are spiritually gifted and
        active. You have artistic tastes and want to work in a unique and
        creative manner. Your talents, together with your work and effort, and
        enthusiasm, ensure that you succeed in every venture you take on.
        Though you can do it alone, you respect other people's opinions and
        would like to work in a group. You have the ability to be incredibly
        expressive. As a result, you can effectively communicate your ideas
        and views with others. You may be completely unaware of your
        dynamism, as well as your psychic side.
        
        </p>
    
        `
    } else if (ratTotText === '22/4' || ratTotInt[0] === '22') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 22/4</h3> <br>
        <p>
        You fantasize about more important things in life. You enjoy working in
        a methodical and organized manner to bring your ideas to life. And
        you go into the nitty-gritty of a situation, weighing the advantages and
        disadvantages before coming to a conclusion. You have a strong
        intuitive tendency and have premonitions about future events. You are
        ambitious, practical, a visionary, and a thinker at the same time. At the
        same time, you see the little and the larger image. You have a keen
        sense of intuition and may have visions of the future.
        </p>
    
        `
    } else if (ratTotText === '2' || ratTotText === '20/2' || ratTotInt[ratTotInt.length - 1] === '2') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 2</h3> <br>
        <p>
        You're outgoing and kind, and you enjoy debating issues with people
        before coming to a conclusion. You have excellent organizational skills
        and are always able to maintain a friendly environment at the
        workplace while avoiding conflicts. You value other people's opinions
        more than your own, therefore you're more likely to be affected by
        them. You're also a highly cautious thinker who prefers to find answers
        to challenges that benefit everyone. Before making a final decision,
        you prefer to connect with people and collaborate. You may be a
        daydreamer, yet your intuitive abilities are excellent.
        </p>
    
        `
    } else if (ratTotText === '3' || ratTotText === '12/3' || ratTotText === '21/3' || ratTotText === '30/3' || ratTotInt[ratTotInt.length -1] === '3') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 3</h3> <br>
        <p>
        Nobody really knows what's on your mind since you're a highly
        creative person with a flexible mind. Your mind is bursting at the
        seams with numerous thoughts. Despite this, you have a proclivity for
        extensively examining alternative options and developing the finest
        potential decision. You pay more attention to your instincts than to the
        current situation. You're extremely emotional and sensitive. You are
        indeed sensitive to the opinions of others. You have a powerful artistic
        side and enjoy getting to the bottom of things.
        
        </p>
    
        `
    } else if (ratTotText === '4' || ratTotText === '13/4' || ratTotText === '31/4' || ratTotInt[ratTotInt.length - 1] === '4') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 4</h3> <br>
        <p>
        You're brimming with various ideas. You develop a balanced and wellstructured mentality. You're always thinking about the future and
        weighing the pros and disadvantages. You don't want to take any
        chances by attempting to solve the situation. You, on the other hand,
        are extremely structured, methodical, and ordered, and would prefer to
        use a surefire approach to deal with a situation. Your most picky
        tendency to make you rigid at times. Despite the fact that your mind is
        full of varied thoughts, you are a well-organized thinker. Your strategy
        is really practical and reasonable. You're an excellent organizer and
        planner. You can, unfortunately, be a little too strict in your reasoning
        process at times
        </p>
    
        `
    } else if (ratTotText === '5' || ratTotText === '14/5' || ratTotText === '23/5' || ratTotInt[ratTotInt.length -1 ] === '5') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 5</h3> <br>
        <p>
        You have a unique perspective. You're always bursting at the seams
        with new and inventive ideas. When you perceive something, you
        respond with something. It might be difficult to interact with someone
        who always has a critical view and is so straight and truthful that it can
        cause you trouble. You like experimenting with your ideas by putting
        them into other contexts. Your thinking is fast and nimble. You are
        adaptive to shifting events and are always coming up with fresh ideas
        in response to changing circumstances. You're also a thinker who
        thinks beyond the box. You're also willing to take chances. Intense
        situations, you behave quickly and confidently.
        </p>
    
        `
    } else if (ratTotText === '6' || ratTotText === '15/6' || ratTotText === '24/6' || ratTotInt[ratTotInt.length - 1] === '6') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 6</h3> <br>
        <p>
        You are extremely alert and always keep track of what is going on
        around you. You notice even the tiniest changes in your workplace or
        home, and you are always willing to assist. You may become so
        focused on the specifics that the problem appears to be larger than it
        is, but you are simply missing the overall picture. You may quickly
        assign a grade to a person's behavior. You have a strong sense of
        unfairness, particularly in society, and you tend to defend those in
        need. You are willing to offer practical help and sound advice, and
        your assistance will be genuine. Take a deeper look at a sociological
        profession; you'll make money while also achieving full self-realization
        </p>
    
        `
    } else if (ratTotText === '7' || ratTotText === '16/7' || ratTotText === '25/7' || ratTotInt[ratTotInt.length - 1] === '7') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 7</h3> <br>
        <p>
        By nature, you're a researcher. You tend to be skeptical of most
        information unless you are certain that it is correct or until you have
        firsthand experience with it. When you are certain about something,
        you act quickly and impulsively. Because you are frequently correct, it
        is uncommon to find someone willing to dispute with you. If you are
        incorrect, you are not scared to lose; you will discover additional
        knowledge on this topic and be completely competent in it. You have
        an analytical mindset, and your findings or ideas are frequently
        intriguing and well-considered. You become annoyed when someone
        does not do the task as it should be completed. You'd rather things be
        done correctly the first time.
        </p>
    
        `
    } else if (ratTotText === '8' || ratTotText === '17/8' || ratTotText === '26/8' || ratTotInt[ratTotInt.length - 1] === '8') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 8</h3> <br>
        <p>
        Your mental activity is rarely understood by those around you since
        you are incredibly creative and full of thoughts. Working on ideas and
        projects always allows you to see more. You possess the ability to
        motivate others. You skip unnecessary details of any problem and
        reach a speedy conclusion since they can swiftly and readily grasp
        any subject or circumstance. Your capacity to understand concepts
        quickly makes you impatient and annoyed with those who aren't in
        your league. Despite this, you are a fast thinker and a visionary, and
        you are always looking for the bigger picture. You delegate the finer
        points to others. However, while you might be irritable and impulsive at
        times, you are incredibly self-aware and take excellent care of
        yourself.
        </p>
    
        `
    } else if (ratTotText === '9' || ratTotText === '18/9' || ratTotText === '27/9' || ratTotInt[ratTotInt.length -1 ] === '9') {
        rtText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Your Rational Thought number tells how your mind functions in
            various life situations People may gain a sense of your personality by
            understanding your style of thinking. This number also represents your
            intelligence and capacity to think logically. It is found by adding the
            sum of the value of all the letters in your first name that is <span class="underline">growth
            number</span> to your day of birth
        </p> <br> <br>
        
        <h3 class="bold-description-label">Rational Thought Number 9</h3> <br>
        <p>
        You are focused and considerate. Your analytical abilities are
        excellent, and you frequently accept even the tiniest errors made by
        others; nonetheless, you never act arrogantly; you may provide a
        courteous tip about the error, and it will not cause tension between
        you. Your ability is in coming up with a solution by eliminating all of the
        alternatives that aren't viable. You are typically kind and empathetic,
        and you have excellent intuition and can predict future occurrences
        </p>
    
        `
    }



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
        bnNum.innerHTML = 1;
    } else if (count === 11 || count === 22 || count === 33) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        bnNum.innerHTML = count + '/' + sum;
    } else if (count > 10) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        bnNum.innerHTML =  sum;
    }
    var balText = (bnNum.textContent).trim();
    var balInt = balText.split('/');

    if (balText === '1' || balText === '10/1' || balInt[balInt.length - 1] === '1') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 1</h3> <br>
        <p>
        To get out of stressful or difficult situations, you must use your mind's
        strength and inborn imagination. Because you have a big ego, you
        don't like to ask for help willingly. You are also harsh and inflexible.
        Don't be afraid to ask for help when you're in difficulties; no matter how
        self-assured you are. Understand that many of us need to feel
        supported and cared for during difficult times. Instead of building a
        protective barrier around you, allow your dearest friends and family to
        be present. You are self-assured and capable of dealing well with a
        problem; however, you should appreciate the perspectives of others
        as well. This mindset may benefit you in the long term. 
        </p>
    
        `
    } else if (balText === '2' || balText === '20/2' ||balInt[balInt.length - 1] === '2') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 2</h3> <br>
        <p>
        Learn to control your reaction, which is typically quite energetic and
        aggressive in nature. Demonstrate diplomatic abilities and learn how
        to deal with disputes through words. It's far more difficult to regulate all
        of your feelings at once; self-control and commitment are your best
        allies. If you use your intelligence, most confrontations can be whittled
        down and resolved before they begin. In tough situations, you allow
        people to influence and guide you. You lack the fundamental selfassurance and tenacity required to deal with a challenging scenario. In
        addition, in difficult situations, you lose your nerves. To discover an
        appropriate solution to an issue, you must be more calm, cool, and
        contemplative.
        
        </p>
    
        `
    } else if (balText === '3' || balText === '12/3' || balText === '21/3' || balText === '30/3' || balInt[balInt.length - 1] === '3') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 3</h3> <br>
        <p>
        You tend to lose faith in yourself in challenging times and situations.
        You get anxious and disoriented, which makes things even more
        difficult for you. To prevent messing things up, you should choose
        easy solutions to your difficulties. Learn to effectively communicate
        your thoughts and ideas. You should use your good sense of humor
        and expressivity. Try to adjust your mindset about it, and don't let
        stress destroy you. Focus on the problem and keep your emotions
        under control. Make use of your oratorical abilities. If you make
        a commitment during a difficult moment, keep it or don't make it at all.
        When necessary, you should keep your tongue in check. Make an
        effort to improve your listening skills. To fulfill your responsibilities, you
        should make use of all of your greatest resources. To achieve your
        objectives, have faith in yourself and be positive. You should take a
        lighter attitude to problem-solving.
        
        </p>
    
        `
    } else if (balText === '4' || balText === '13/4' || balText ==='31/4' || balText === '40/4' || balInt[balInt.length - 1] === '4') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 4</h3> <br>
        <p>
        You're emotional, and you can't see things clearly or solve difficulties
        in a sensible way. You're conservative and stubborn. You also have
        prejudices or assumptions about things. Learn to study a matter
        thoroughly before coming to a decision based on all of its advantages
        and disadvantages. Therefore, you should focus on controlling your
        emotions. You're prone to emotional explosions which block your
        progress. Remember the state of your emotional control reflects how
        you manage the entire circumstance. Analyze the problem and
        attempt to resolve it via discussion and compromise. Don't be ruled by
        your emotions. Keep track of things so you're sure you're aware of
        everything and practice self-discipline. Contest for justice, but always
        be truthful in exchange. You should also show others forgiveness,
        compassion, and profound understanding. Confrontations can be
        avoided by putting yourself in the shoes of the individual with whom
        you're having a disagreement.
        </p>
    
        `
    } else if (balText === '5' || balText === '14/5' || balText === '23/5' || balInt[balInt.length - 1] === '5') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 5</h3> <br>
        <p>
        You have a strict and traditional outlook, and you like to do things the
        same way everyone else does. You have a hard time adjusting to
        changing circumstances. As a result, you deal with an issue using tried
        and true methods. You attempt to hide when something worries or
        stresses you out because you can't seem to put yourself together. It is
        not the most advantageous choice for you. Being more proactive and
        persistent can assist you in getting out of the bind and reducing the
        amount of tension and tasks you must complete. Avoid putting
        anything on the shelf. If you don't want to do anything, you should just
        decline the request. Also, try to do everything completely so that you
        won't have to retake it later. You need to be trendier and value creative
        problem-solving techniques. You should also understand that human
        beings are social creatures and that if you do not keep up with
        changes or trends, you will fall behind in this competitive environment.
        When you face stressful situations, you become anxious and worried
        and try to avoid the situation. If you set your mind to it, you will find the
        solution. You have a proclivity towards binge eating or
        substance abuse. Understand that if you set your mind to it, you may
        come up with a highly innovative solution to any problem.
        </p>
    
        `
    } else if (balText === '6' || balText === '15/6' || balText === '24/6' || balInt[balInt.length - 1] === '6') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 6</h3> <br>
        <p>
        You are a positive individual, and sadly, your strength is required in
        some scenarios. Let's not be frightened to assume responsibility since
        you are the best person for the job. During difficult times in your life, try
        to restrict your interactions with others since they might make you
        angrier, sad, or encourage due process notions in you, which will only
        aggravate the situation. You lose confidence in your own talents while
        having certain great attributes. To fix an issue, you seek advice from
        others. You should also be aware of your own talents and appreciate
        your own as well as others' judgments. In life, you must adopt a more
        balanced perspective. You hold people accountable for any mistakes
        you make in life. It makes people have a poor image of you. In order
        to be respected and appreciated by everyone, you should strive to be
        more self-sufficient, dependable, and competent.
        </p>
    
        `
    } else if (balText === '7' || balText === '16/7' || balText === '25/7' || balInt[balInt.length - 1] === '7') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 7</h3> <br>
        <p>
        You have a tendency to flee from life's challenges, understand that
        you must confront the issues since they do not go away. Maintain a
        level head and assess the situation analytically and with perceptive
        thinking so that you can solve the issue more quickly. You must
        develop the ability to combat your own fights. When confronted with a
        challenging scenario, you withdraw inside your skin or head to protect
        yourself. You must understand that your brain's precision and logical 
        talents are adequate to supply you with the knowledge you need to
        solve any problem and find a clear route to its solution. <br> <br>
        However, you should prevent getting worked up about little problems
        because this will not address the situation. Rather than avoiding
        difficulties, learn to address them and find a solution. You must be
        able to regulate your emotions or feelings and think rationally. Attempt
        to stay focused, no matter how much you want to hide, and try to
        guide it all the way to the conclusion. If you refuse to deal with
        difficulties, they will simply become more serious and detrimental.
        Surround yourself with individuals who can either assist you or at the 
        </p>
    
        `
    } else if (balText === '8' || balText === '17/8' || balText === '26/8' || balInt[balInt.length - 1] === '8') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 8</h3> <br>
        <p>
        You're the one who lends a hand and usually assists people in
        navigating difficult situations. When you're having a hard time, be
        truthful with yourself and seek a positive resolution. You are impatient
        and you prefer to do and finish things as quickly as possible at all
        costs. You must learn to be methodical and structured. When
        confronted with a difficulty, you get confused, scared, and nervous, by
        making the problem bigger than it is. <br> <br>
        You make compromises with your honor and fairness from time to
        time. While you can employ manipulative and cruel strategies to fix
        your difficulties. You must recognize that everything has its own place
        and time. As a result, it must be dealt with at a certain moment, and
        losing your patience will not assist you. Using shortcuts to address an
        issue is not the simple way out, and it might lead to problems in the
        future. To discover solutions to your challenges, be creative; don't be
        too domineering and don't impose your option on others; instead,
        consider their worries and thoughts while coming up with a complete
        conclusion.
        
        </p>
    
        `
    } else if (balText === '9' || balText === '18/9' || balText === '27/9' || balInt[balInt.length - 1] === '9') {
        bnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Balance Number is a tool that assists us in dealing with real-life
            circumstances/crises and issues. It instructs you on how to handle
            challenging situations. It's calculated by adding the numerical value of
            your complete name's initials at birth.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Balance Number 9</h3> <br>
        <p>
        You were born to be a mediator since you usually discover solutions
        that are both equal and practical for all parties involved. You treat
        others with respect and expect the same in return. Though you are a
        kind person, you lack initiative and are unresponsive to difficulties.
        Don't wait for time to solve these issues; take action now. You should
        not be frightened of making errors; they are just transitory, and taking
        a passive approach to them will only prolong their impact on your life.
        By nature, you are sympathetic and understanding. You, on the other
        hand, have a propensity to remain distant. <br> <br>
        You enjoy isolation, yet you are always willing to support and assist
        others in their moments of need. People have a tendency to 
        misinterpret you because of your introverted personality. To resolve
        problems, you must demonstrate compassion and patience. You
        should realize that love may help you achieve a lot. Instead of being
        detached, learn to become connected with people and their issues.
        You have a propensity to withdraw into an aloofness in which you
        imagine yourself to be an elite above the rest. Being more practical
        and realistic can help you identify answers. Helping and giving to
        others will bring you benefits.
        </p>
    
        `
    }




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

    // for (let i = 0; i < )
    var subConText = (ssNum.textContent).trim();
    var subConInt = subConText.split('/');


    if (subConText === '3' || subConText === '12/3' || subConText === '21/3' || subConInt[subConInt.length - 1] === '3') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 3</h3> <br>
        <p>
        You want other people to help and support you with your difficulties if
        you have Subconscious Self number 3, you will continue to have
        troubles in your life until you learn to confront your problems on your
        own. In most cases, you rely on the help of your family members and
        friends to get through a crisis. For help and support, you will look for a
        long-term partner at a young age. You're more likely to date someone
        older than you who can provide you with stability and safety. You lack
        self-assurance and are easily upset. Allowing depression to overcome
        you is not a good idea. You might be too emotional, trust the wrong
        kind of people, and be disorganized at times. Discipline, attention,
        excellent judgment, and guidance are all required for success.
        
        </p>
    
        `
    } else if (subConText === '4' || subConText === '13/4' || subConText === '31/4' || subConInt[subConInt.length - 1] === '4') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 4</h3> <br>
        <p>
        When presented with details, you thoroughly immerse yourself inside
        them and become entirely lost. It makes it challenging for you to make
        a choice, and vacillation may be crushing. You have a tendency for
        obsessing over minor things, which leads to a lack of attention,
        disorientation, and uncertainty. It may even render you incapable of
        reacting fast and strongly. You're notorious for being slow/sluggish to
        respond to problems. You're possibly uncertain and prone to
        procrastination since you're not confident. Understand that a calm and
        steady pace is the best way to go. You should be more focused and
        confident in your abilities to make rapid and confident judgments.
        </p>
    
        `
    } else if (subConText === '5' || subConText === '14/5' || subConText === '23/5' || subConInt[subConInt.length - 1] === '5') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 5</h3> <br>
        <p>
        You are chaotic and undisciplined, and you have a difficult time
        devoting yourself to almost anything. You quickly lose interest and
        focus. Your escapist impulses cause more harm than good. You are
        anxious at times and avoid addressing issues. Instead of
        understanding the fundamental causes of the problem, you want to
        force change to avoid challenges. You really need to be more
        balanced and accountable, and you need to look for something to
        anchor you.
        </p>
    
        `
    } else if (subConText === '6' || subConText === '15/6' || subConText === '24/6' || subConInt[subConInt.length - 1] === '6') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 6</h3> <br>
        <p>
        Because you are a responsible person, you sacrifice yourself for
        others while neglecting your own needs. The main focus in your life is
        your family. When you're in a bad mood or facing troubles, you run to
        your relatives and friends for support and assistance, but you must
        eventually grow as an individual and be responsible.
        </p>
    
        `
    } else if (subConText === '7' || subConText === '16/7' || subConText === '25/7' || subConInt[subConInt.length -1 ] === '7') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 7</h3> <br>
        <p>
        Despite the fact that you are capable of dealing with life's obstacles
        and effectively overcoming them. In difficult situations, on the other
        hand, you withdraw into yourself and your mind, becoming emotionally
        distant and disturbed. Therefore, as a result, you tend to separate
        yourself and spend time alone for self-analysis. People tend to
        misinterpret you during these moments, and they may perceive you as
        cold and distant. You have an analytical mindset and strive to discover
        solutions to all difficulties. Normally, you look unconcerned about your
        surroundings and maintain a detached demeanor. You must learn to
        connect with others in difficult times instead of retreat and believe in
        your ability to withstand whatever storms life throws at you.
        </p>
    
        `
    } else if (subConText === '8' || subConText === '17/8' || subConText === '26/8' || subConInt[subConInt.length - 1] === '8') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 8</h3> <br>
        <p>
        You can get through everything life throws at you, and you can
        effectively handle abrupt and unexpected events, frequently making
        the most of them. You have the ability to rapidly learn from your
        mistakes and repair them. You're recognized for being able to
        overcome adversity and emerge stronger than before. So, you're
        realistic when it comes to challenges, fast to adapt to changes, and
        don't get into bad patterns. You want to be appreciated and rewarded
        for your work, and you want to be able to quantify your achievement.
        You are well-versed in financial and monetary stuff. Therefore, you
        can deal with any issue or crisis without displaying undue worry and
        do so effectively. You certainly know how to avoid being paralyzed by
        fear.
        </p>
    
        `
    } else if (subConText === '9' || subConText === '18/9' || subConText === '27/9' || subConInt[subConInt.length - 1] === '9') {
        ssText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Subconscious Self Number reflects your belief in yourself, your
            unique perspective on your skills and prospects, as well as <span class="underline">how you
            behave in stressful and unusual situations</span>. Also shows how you deal
            with difficult problems or something new. It helps in determining how to
            appropriately respond and react or how to increase your selfconfidence and assertiveness so that you can effectively tackle life's
            obstacles. 
        </p> <br> <br>
        
        <h3 class="bold-description-label">Subconcious Self Number 9</h3> <br>
        <p>
        Even though your emotions are strong, it might be difficult, to be
        honest about them. Problems that arise in your life have little impact
        on you. You like to stay in your own little world. Though you
        remain alone and don’t typically seek the support of others, you tackle
        hard situations with confidence and skill. It's tough for others to
        comprehend you because of your reserved personality. You are
        unconcerned with other people's problems or feelings and are cold.
        Although you are often efficient and poised in the face of
        adversity, you can also be arrogant, cold, withdrawn, and unable to
        see your own flaws. You should try to keep your anger under control
        and maintain a laidback attitude.
        
        </p>
    
        `
    }
    


    filteredNum = mainNumString;
    if (filteredNum === '' || filteredNum === ' ') {
        filteredNum = 'None';
    }
    klNum.innerHTML = filteredNum;

    var klcText = (klNum.textContent).trim();
    var klcInt = klcText.split('/');
    var klLoopList = klcText.split(',');
    klText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Karmic Lessons disclose weaknesses or undeveloped parts. It is
        found by looking at the missing letters in your <span class="underline">full birth name</span>. By
        observing the missing numbers, you can gain an understanding and
        insight into what you can do to help you overcome some of the
        potential disadvantages of the missing characteristics these numbers
        signify
    </p> <br> <br>`

    var klString = ``
    

    for (let i = 0; i <= klLoopList.length; i++) {
        klcText = klLoopList[i];

        if (klcText = 'None') {
            klString = ''
        } else if (klcText === '1' || klcText === '10/1' || klcInt[klcInt.length - 1] === '1') {
            klString += `
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 1</h3> <br>
            <p>
            You lack confidence, are afraid to lead, and need to build strength. Be
            more self-reliant by learning to think for yourself. The moral of the
            lesson is to be more determined, decisive, resolute, and independent.
            When the situation calls for it, try to be more aggressive. You may
            work on being more confident in your daily chores, with others, and
            while evaluating your own decisions, talents, and actions. 
            </p> <br><br>
        
            `
        } else if (klcText === '2' || klcText === '20/2' || klcInt[klcInt.length - 1] === '2') {
            klString += `
            
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 2</h3> <br>
            <p>
            Your lesson is that you must know when it is appropriate to say
            something and what the appropriate response is. You must pay more
            attention, be more conscious, and be more sensitive to others around
            you. When working with others, you may become a valuable member
            of the team by cooperating, being diplomatic, and being patient. Learn
            to collaborate more effectively with others and to be more
            compassionate. Therefore, you should learn to work better with others
            and be sensitive toward them so that you can keep the peace. 
            </p> <br> <br>
        
            `
        } else if (klcText === '3' || klcText === '12/3' || klcText === '21/3' || klcText === '30/3' || klcInt[klcInt.length - 1] === '3') {
            klString += `
            
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 3</h3> <br>
            <p>
            When you're in the limelight, you shouldn't expect too much of
            yourself. Be creative/imaginative and learn to see the positive side of
            things.  <br> <br>
            </p>
        
            `
        } else if (klcText === '4' || klcText === '13/4' || klcText === '31/4' || klcInt[klcInt.length - 1] === '4' ) {
            klString += `
            
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 4</h3> <br>
            <p>
            When it comes to your life's purpose and where you're heading, learn
            to be more structured, royal, and disciplined. The lesson for you is to
            be more careful, practical, and realistic in coping with whatever life
            throws at you.
            </p> <br> <br>
        
            `
        } else if (klcText === '5' || klcText === '14/5' || klcText === '23/5' || klcInt[klcInt.length - 1] === '5') {
            klString += `
            
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 5</h3> <br>
            <p>
            You must grip your independence and be more courageous and
            daring. Accept change, adapt to new situations, and take a chance or
            risk
            </p> <br> <br>
        
            `
        } else if (klcText === '6' || klcText === '15/6' || klcText === '24/6' || klcInt[klcInt.length - 1] === '6') {
            klString += `
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 6</h3> <br>
            <p>
            Instead of avoiding your obligations, you should commit to them and
            accept them. Learn to give of yourself and open out to others.
            </p> <br> <br>
        
            `
        } else if (klcText === '7' || klcText === '16/7' || klcText === '25/7' || klcInt[klcInt.length - 1] === '7') {
            klString += `
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 7</h3> <br>
            <p>
            Your lesson is to concentrate more on gaining experience and
            knowledge in any of your numerous subjects of interest. Everything
            should be questioned, and you should allow yourself to explore and
            study. Rather than wasting your energy, attempt to be more organized
            and disciplined in order to reach your full potential.
            
            </p> <br> <br>
        
            `
        } else if (klcText === '8' || klcText === '17/8' || klcText === '26/8' || klcInt[klcInt.length - 1] === '8') {
            klString += `
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 8</h3> <br>
            <p>
            Your lesson is to be more open to outside help and other people's
            perspectives. Try to be less stubborn and listen rather than just
            hearing when it comes to advise about your assets, whether it's
            money, material goods, or the people in your life. You may have
            challenges in your professional life, and you may have poor judgment
            of others. Learn to be self-disciplined and self-restrained.
            </p> <br> <br>
        
            `
        } else if (klcText === '9' || klcText === '18/9' || klcText === '27/9' || klcInt[klcInt.length -1] === '9') {
            klString += `
            
            
            <h3 class="bold-description-label">Karmic Lesson Number 9</h3> <br>
            <p>
            Your lesson is to be more understanding, helpful, accepting, and
            compassionate with everyone in your life, including family, friends,
            colleagues, and the rest of the public. Try to observe things from a
            different angle. <br> <br>
            </p>
        
            `
        } 

        
    } klText.innerHTML = klText.innerHTML + klString;

    
    


    // Karmic Debt Number
    var karmicString = ``;
    kdText.innerHTML = '';

    // life path 
    kdHold = lpNum.textContent;
    if (kdHold === '13/4') {
        karmicString += '13/4<br> '
    } else if (kdHold === '14/5') {
        karmicString += ' 14/5<br> '
    } else if (kdHold === '16/7') {
        karmicString += ' 16/7<br> '
    } else if (kdHold === '19/1') {
       karmicString += ' 19/1<br> '
    } 

    // destiny
    kdHold = edNum.textContent
    if (kdHold === '13/4') {
        karmicString += ' 13/4<br> '
    } else if (kdHold === '14/5') {
        karmicString += ' 14/5<br> '
    } else if (kdHold === '16/7') {
        karmicString += ' 16/7<br> '
    } else if (kdHold === '19/1') {
        karmicString += ' 19/1<br> '
    } 

    // soul urge 
    kdHold = suhdNum.textContent
    if (kdHold === '13/4') {
        karmicString += ' 13/4<br> '
    } else if (kdHold === '14/5') {
        karmicString += ' 14/5<br>  '
    } else if (kdHold === '16/7') {
        karmicString += ' 16/7<br> '
    } else if (kdHold === '19/1') {
        karmicString += ' 19/1<br> '
    } 

    // birthday number 
    kdHold = bdNum.textContent
    if (kdHold === '13/4') {
        karmicString += ' 13/4<br> '
    } else if (kdHold === '14/5') {
        karmicString += ' 14/5<br> '
    } else if (kdHold === '16/7') {
        karmicString += ' 16/7<br> '
    } else if (kdHold === '19/1') {
        karmicString += ' 19/1<br> '
    } 

    // personality
    kdHold = pNum.textContent
    if (kdHold === '13/4') {
        karmicString += ' 13/4<br> '
    } else if (kdHold === '14/5') {
        karmicString += ' 14/5<br> '
    } else if (kdHold === '16/7') {
        karmicString += ' 16/7<br> '
    } else if (kdHold === '19/1') {
        karmicString += ' 19/1<br> '
    } else if(karmicString === '') {
        karmicString = 'None'
    };
    kdNum.textContent = ''
    if (karmicString !== 'None' ) {
        karmicString.replace('None', '')
    }
    karmicString = karmicString.trim();
    kdNum.innerHTML = karmicString;
    var kdList = (kdNum.textContent).split(' ');
    var kdResult = `
    <br> <br>
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Usually derived from your date of birth, which can be discovered by
        looking at the numbers present (day of birth or life path, and name numbers). Can
        be viewed as current challenges that you may experience during your
        lifetime.   
    </p> <br> <br>
    `;

    for (let i = 0; i < kdList.length; i ++) {
        switch ((kdList[i]).trim()) {
            case '13/4':
                kdResult  += `
                
                
                <h3 class="bold-description-label">Karmic Debt Number 13/4</h3> <br>
                <p>
                With a 13 Karmic Debt, you must face the challenges that life throws
                at you. Delays, difficulties, and roadblocks appear along the way,
                forcing you to work twice as hard to accomplish your goals. It may
                appear that you will never receive what you want, but this is not the
                case. All you have to do now is put in the extra effort. You must learn
                to put in a lot of effort in this lifetime to achieve your goal. 
                </p>
                `
                break;
            case '14/5':
                kdResult += `
                
                
                <h3 class="bold-description-label">Karmic Debt Number 14/5</h3> <br>
                <p>
                With a 14 Karmic Debt, you must conquer your fear of change. You
                must learn to familiarize yourself with whatsoever life throws at you
                and regain internal strength. Refrain from doing terrible things and
                escaping from life. The way to victory is moderation. No matter how
                often you move up and down in life, you must devote yourself to
                whatever you want.
                </p>
                `
                break;
            case '16/7':
                kdResult += `
                
                
                <h3 class="bold-description-label">Karmic Debt Number 16/7</h3> <br>
                <p>
                With a 16 Karmic Debt, you continuously feel as if your life is being
                ripped apart and rebuilt, or that some aspect of yourself is being ripped
                apart and rebuilt. Everything being torn down is a terrible process, but
                you must be humbled by it and learn from it. It allows you to expand
                your consciousness and connect with your true self. This Karmic Debt
                Number 16 may affect your marital home or relationship where it feels
                like something is missing to make the relationship flourish or complete.
                It may also be manifested by making you feel unloved, unappreciated,
                and neglected in your relationship or marriage. Most people with this
                karmic debt may experience divorce or separation. Therefore, you
                need to learn to love and value yourself and heal. You should try to be
                strong and positive. 
                </p>
                `
                break;
            
            case '19/1':
                kdResult += `
                
                
                <h3 class="bold-description-label">Karmic Debt Number 19/1</h3> <br>
                <p>
                With a Karmic Debt 19, You must learn to be interdependent. You may
                find yourself alone all of the time, having to battle for yourself without
                the assistance of others, and feeling separated from the rest of the
                world, but this is mainly due to a refusal to open up to people or accept
                support. You must learn to accept help and understand that doing so
                does not imply that you are less autonomous
                </p>
                `
                break;
            default:
                break;
        }
    }; kdText.innerHTML = kdResult;
    
    


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
    var resultString = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        The hidden passion number tells you about your hidden talents and
        strengths, it also reveals your personality like what you are good at,
        and what you love to do.
    </p> <br> <br>`;
    var emptyString = '';
    if (mainNumString.split('1').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 1';
        } else if (emptyString === ''){
            emptyString += '1';
        }
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 1</h3> <br>
            <p>
            You are a very perceptive person who is ambitious, energetic,
            creative, and artistic. You have a good way of expressing your
            creativity. You are continuously striving for perfection. You're a terrific
            organizer with a rigorous approach to your work. You like to lead
            rather than be led. You're highly competitive and, at times, bossy,
            and arrogant. <br> <br>
            
            </p>

        ` 
    };
    if (mainNumString.split('2').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 2';
        } else if (emptyString === '') {
            emptyString += '2';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 2</h3> <br>
            <p>
            You're sensitive, caring, understanding, can work and collaborate well
            with people, and can resolve conflicts and reach agreements, all while
            attempting to build peaceful situations.
            </p>

        ` 
    }
    if (mainNumString.split('3').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 3';
        } else if (emptyString === '') {
            emptyString += '3';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 3</h3> <br>
            <p>
            You're outgoing, entertaining, artistic, and inventive. You demonstrate
            your abilities with ease. You're attractive and have an optimistic
            outlook on life.
            </p>

        ` 
    }
    if (mainNumString.split('4').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 4';
        } else if (emptyString === '') {
            emptyString += '4';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 4</h3> <br>
            <p>
            You're responsible, grounded, stable, and keep things in order. You
            are dependable because you have a realistic attitude and can stick to
            a timetable. <br> <br>
            </p>

        ` 
        

    } 
    if (mainNumString.split('5').length-1 >= 2) {
        if(emptyString !== '') {
            emptyString += ', 5';
        } else if (emptyString === '') {
            emptyString += '5';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 5</h3> <br>
            <p>
            You're a free spirit who enjoys being fun, brave and adventurous, and
            seductive. You can deal with any changes that arise without being
            thrown off. You’re a risk-taker. <br> <br>
            </p>

        ` 
        
    }
    if (mainNumString.split('6').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 6';
        } else if (emptyString === ''){
            emptyString += '6';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 6</h3> <br>
            <p>
            You're a generous person who wants to serve others and offer them
            whatever you have. You're dependable, compassionate, loving,
            selfless, peaceful, and nurturing. <br> <br>
            </p>

        ` 
        
    }
    if (mainNumString.split('7').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 7';
        } else if (emptyString === '') {
            emptyString += '7';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 7</h3> <br>
            <p>
            You're a profound thinker who enjoys studying and is contemplative.
            You're rational and analytical, and you want to know why things
            happen the way they do. <br> <br>
            </p>

        ` 
        
    }
    if (mainNumString.split('8').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 8';
        } else if (emptyString === ''){
            emptyString += '8';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 8</h3> <br>
            <p>
            You're determined, business-minded, ambitious, and hardworking, and
            you'll keep going until you reach your goals. You're a natural leader,
            manager, and judge of others. <br> <br>
            </p>

        ` 
        
    }
    if (mainNumString.split('9').length-1 >= 2) {
        if (emptyString !== '') {
            emptyString += ', 9';
        } else if (emptyString === '') {
            emptyString += '9';
        };
        resultString += `
            
            <h3 class="bold-description-label">Hidden Passion Number 9</h3> <br>
            <p>
            You're caring and empathetic, and you want to make a difference in
            the world. You can be artistic, imaginative, committed, accepting, and
            self-sufficient. <br> <br>
            </p>

        ` 
        
    };
    hpNum.innerHTML = emptyString;
    hpText.innerHTML = resultString







    // Hereditary Name Number 
    ednfName = fName.value.split(' ');
    var lastName = ednfName[ednfName.length - 1];
    indexList = lastName;
    countHold = 0;
    count = 0;
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
    console.log(count)
    if (count < 10) {
        count;
    } else if (count === 10) {
        count = 1;
    } else if (count === 11  ) {
        count = 2;
    } else if (count === 22) {
        count = 4;
    } else if (count === 33) {
        count = 6;
    } else if (count > 10) {
        mSplit = String(count).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum =1
        } else if (sum === 11) {
            sum = 2
        } else if (sum === 22) {
            sum = 4;
        } else if (sum === 33) {
            sum = 6;
        } else if (sum > 10) {
            dbSplit = String(sum).split('');
            sum = eval(dbSplit.join('+'));
        }
        count = sum;
    };
    hnNum.innerHTML = count;

    var hnnText = (hnNum.textContent).trim();
    var hnInt = hnnText.split('/');

    if (hnnText === '1' || hnnText === '10/1' || hnInt[hnInt.length - 1] === '1') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 1</h3> <br>
        <p>
            If your hereditary number is 1, it denotes masculine power,
            beginnings, leadership, individualism, self-confidence, ambition, and
            bravery are all characteristics that are in your family lineage. 
        </p>
    
        `
    }  else if (hnnText === '2' || hnnText === '20/2' || hnInt[hnInt.length - 1] === '2') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 2</h3> <br>
        <p>
        The concept of friendliness, sociability, loving, and kindness are part of
        hereditary number 2. The number 2 is also associated with feminine
        power, collaborations, relationships, sensitivity, harmony, peacemaker,
        and balance. This might imply that the family members actively
        interact within themselves or with their acquaintances easily.
         
        </p>
    
        `
    } else if (hnnText === '3' || hnnText === '12/3' || hnnText === '21/3' || hnnText === '30/3' || hnInt[hnInt.length - 1] === '3') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 3</h3> <br>
        <p>
        People with the last name heredity number 3 are known for being
        outspoken, active, sociable, and charming. You have the capacity to
        adapt to any circumstance and the ability to assimilate new
        information. Expressional abilities are a gift from heredity number 3.
        You want to be youthful, inventive, and engaged. You can be an artist,
        an actress, a singer, a dancer, a designer, or any other profession that
        allows you to express yourself.

        </p>
    
        `
    } else if (hnnText === '4' || hnnText === '13/4' || hnnText === '31/4' || hnInt[hnInt.length - 1] === '4') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 4</h3> <br>
        <p>
        People with the 4 heredities of their family name are known for being
        steady, organized, secure, dependable, hardworking, patient, loyal,
        and realistic. Because of your meticulous work ethic, you are capable
        of leading large organizations or corporations.
        </p>
    
        `
    } else if (hnnText === '5' || hnnText === '14/5' || hnnText === '23/5' || hnInt[hnInt.length - 1] === '5') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 5</h3> <br>
        <p>
        Change, independence, exploration, adventure, and diversity are the
        primary characteristics of persons with the last name of heredity
        number 5. You are ambitious, adaptive, tolerant, freedom-loving,
        traveler, sociable, and fun, according to your Heredity number 5.
        </p>
    
        `
    } else if (hnnText === '6' || hnnText === '15/6' || hnnText === '24/6' || hnInt[hnInt.length - 1] === '6') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 6</h3> <br>
        <p>
        Compassion, friendliness, loving, home, family, responsibility, equality,
        honesty, generosity, nurturing, and harmony are the key
        characteristics of persons with the last name with the hereditary
        number 6.

        </p>
    
        `
    } else if (hnnText === '7' || hnnText === '16/7' || hnnText === '25/7' || hnInt[hnInt.length - 1] === '7') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 7</h3> <br>
        <p>
        Intellectual, analytical, mysterious, spiritual, guarded, skeptical,
        observant, lonesome, contemplative, and secretive are the primary
        characteristics of persons with the last name with the heredity number
        7.
        </p>
    
        `
    } else if (hnnText === '8' || hnnText === '17/8' || hnText === '26/8' || hnText === '35/8' || hnInt[hnInt.length - 1] === '8') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 8</h3> <br>
        <p>
        Authority, mastery, wealth, leadership, prosperity, power, and money
        are the primary qualities of persons with the last name of the number
        8.
        </p>
    
        `
    } else if (hnText === '9' || hnText === '18/9' || hnText === '27/9' || hnText == '36/9' || hnInt[hnInt.length - 1] === '9') {
        hnText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Heredity Number of your last name reveals your ancestors’ talents and
            the ways the family interacts.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Hereditary Number 9</h3> <br>
        <p>
        Humanitarian, compassionate, sympathetic, artistic, inventive,
        dedicated, accepting, self-sufficient, and charitable are the primary
        qualities of persons with the last name of heredity number 9.

        </p>
    
        `
    }
    
    


    // CornerStone Letter 
    ednfName = ((fName.value).split(' '))[0];
    // console.log((ednfName[0][0]))
    var firstLetter = (ednfName[0]).toUpperCase();
    cstNum.innerHTML = firstLetter;

    switch (firstLetter) {
        case 'A':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter A</h3> <br>
            <p>
            You have a brave and determined attitude toward life. The strategy is
            based on independence, ambition, and commitment.
            </p>
            `
            break;

        case 'B':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter B</h3> <br>
            <p>
            You're likely to approach life on the lookout for possibilities to work as
            part of a team, completing tasks in collaboration with others.
            
            </p>
            `
            break;

        case 'C':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter C</h3> <br>
            <p>
            You're drawn to creative self-expression, inspiration, and originality as
            a way of life.
            </p>
            `
            break;
        
        case 'D':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter D</h3> <br>
            <p>
            You're more likely to approach life with the goal of improving whatever
            position you're in and your social standing.
            </p>
            `
            break;
        
        case 'E':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter E</h3> <br>
            <p>
            You have a tendency to approach life with a sense of personal
            liberation and independence. Passion, inventiveness, and adaptability
            are used in the approach.
            </p>
            `
            break;
        
        case 'F':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter F</h3> <br>
            <p>
            With respect to family, home, and nurture, you are prone to approach
            life with a feeling of responsibility.
            </p>
            `
            break;
        
        case 'G':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter G</h3> <br>
            <p>
            You have a tendency to approach things from a scientific standpoint.
            Solutions that have been thoroughly considered are favored.            
            </p>
            `
            break;
        
        case 'H':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter H</h3> <br>
            <p>
            You are drawn to a way of life that is focused on achieving financial
            success and material gain 
            </p>
            `
            break;
        
        case 'I':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter I</h3> <br>
            <p>
            You'll approach life with kindness and humanitarian (human rights)
            concerns, always keeping an ideal in mind.
            
            </p>
            `
            break;
        
        case 'J':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter J</h3> <br>
            <p>
            You are more likely to approach life with a sense of self-determination,
            exhibiting independence, and choosing self-reliance over-relying on
            others.
            </p>
            `
            break;
        
        case 'K':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter K</h3> <br>
            <p>
            You have a charismatic and spiritual outlook on life, and you frequently
            rely on intuition.            
            </p>
            `
            break;

        case 'L':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter L</h3> <br>
            <p>
            You have a proclivity for both creative and intellectual expression in
            your life.
            </p>
            `
            break;

        case 'M':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter M</h3> <br>
            <p>
            You have a proclivity for approaching life with the goal of achieving a
            desirable position or scenario, such as family or financial security.
            </p>
            `
            break;
        
        case 'N':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter N</h3> <br>
            <p>
            You are drawn to a way of life that is full of uniqueness, creativity, and
            true enjoyment of life – as well as a genuine delight when connecting
            with people.
            </p>
            `
            break;

        case 'O':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter O</h3> <br>
            <p>
            You have a strong desire to prioritize family, home, and harmony in
            your life. There is a natural tendency to lead the family toward a lofty
            objective.
            
            </p>
            `
            break;

        case 'P':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter P</h3> <br>
            <p>
            You're probably focusing on spiritual, philosophical, or metaphysical in
            your outlook on life.
            </p>
            `
            break;

        case 'Q':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter Q</h3> <br>
            <p>
            You're more likely to approach life from a business and financial
            standpoint, with some strange and unconventional activities thrown in
            for good measure.
            </p>
            `
            break;
        
        case 'R':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter R</h3> <br>
            <p>
            You're likely to approach life with a strong sense of self-determination
            and inner power, as well as acceptance, efficiency, honesty, selfcontrol, and kindness.
            
            </p>
            `
            break;

        case 'S':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter S</h3> <br>
            <p>
            You're prone to approaching life with a sense of personal autonomy,
            as well as ambition, confidence, and attractiveness.
            </p>
            `
            break;
        
        case 'T':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter T</h3> <br>
            <p>
            You prefer to view life as a shared experience with others. Being a
            part of a team is more enticing than being in charge.
            
            </p>
            `
            break;
        
        case 'U':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter U</h3> <br>
            <p>
            You have a lot of admiration for the arts and prefer to approach life
            with a positive attitude. You're likely to be charming and pleasant, as
            well as incredibly creative, bright, and perceptive.            
            </p>
            `
            break;

        case 'V':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter V</h3> <br>
            <p>
            You are drawn to a way of life that emphasizes honesty, dependability,
            efficiency, and focus. You are a team player and a builder.
            </p>
            `
            break;
        
        case 'W':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter W</h3> <br>
            <p>
            You are likely to approach life with a feeling of spontaneity,
            inventiveness, curiosity, humor, and a sense of personal
            independence.
            </p>
            `
            break;
        
        case 'X':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter X</h3> <br>
            <p>
            You have an optimistic outlook on life, which includes family, nurture,
            security, and friendship.
            </p>
            `
            break;
        
        case 'Y':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter Y</h3> <br>
            <p>
            You have a proclivity for intuition, clear vision, open-mindedness,
            boldness, and reflection when it comes to life.
            </p>
            `
            break;
        
        case 'Z':
            cstText.innerHTML = `
            <h3 class="bold-description-label">Definition</h3> <br>
            <p>
                The cornerstone letter can reveal information about you. How life is
                handled has a lot to do with how it is experienced, this can lead to a
                greater understanding.        
            </p> <br> <br>
            
            <h3 class="bold-description-label">Cornerstone Letter Z</h3> <br>
            <p>
            You have a vitality and optimism about life, as well as a high level of
            intellect, empathy, and good instinct.            
            </p>
            `
            break;

        default:
            break;
    }
    



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

    var ppPlaneText = (ppoeNum.textContent).trim();
    var ppPlaneInt = ppPlaneText.split('/');

    if (ppPlaneText === '1'  || ppPlaneText === '10/1' || ppPlaneInt[ppPlaneInt.length - 1] === '1') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 1</h3> <br>
        <p>
        You are a dedicated worker who is focused on achieving your
        objectives. You are energetic and motivating. You’re flexible and have
        a strong physique. You take risks in business and other aspects of
        your life. You are a flexible individual who can excel in any profession
        or industry. You have strong preferences and make your decisions in
        accordance with them.
        </p>
    
        `
    } else if (ppPlaneText === '11/2' || ppPlaneInt[0] === '11') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 11/2</h3> <br>
        <p>
        You are always engaged in artistic endeavors and have developed an
        inner appeal. Your thoughts are lively, intriguing, and humorous. You
        have a keen sense of intuition and experience glimpses of vision. Your
        beliefs and your creative imagination are your guides. One of your
        biggest instructors is your real body. You must understand how to
        properly care for it, including what keeps it healthy and robust.
        Because of your hypersensitivity, you'll need to make choices about
        food, exercise routine, and stress management techniques.
        </p>
    
        `
    } else if (ppPlaneText === '22/4' || ppPlaneInt[0] === '22') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 22/4</h3> <br>
        <p>
        You are a driven individual with excellent organizing abilities. You're
        good at sticking to a routine. You are a master builder who wants to
        create something that will help humanity. You are realistic, a hard
        worker, committed, and honest.        
        </p>
    
        `
    } else if (ppPlaneText === '2' || ppPlaneText === '20/2' || ppPlaneInt[ppPlaneInt.length -1] === '2') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 2</h3> <br>
        <p>
        You have a sensitive and fragile nature and are easily irritated. You
        pay close attention to the smallest details and consider it all. Your
        power lies in a steady yet gentle attempt. You could be timid and
        lacking in self-assurance. You have a tendency to be overly
        concerned. You may have moments of terror as a result of your lack of
        faith in your own particular ability.
        </p>
    
        `
    } else if (ppPlaneText === '3' || ppPlaneText === '12/3' || ppPlaneText === '21/3' || ppPlaneText === '30/3' || ppPlaneInt[ppPlaneInt.length - 1] === '3') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 3</h3> <br>
        <p>
        By nature, you are a highly attractive person. You have an enticing
        aura about you. You have a strong artistic, inventive, and theatrical
        side to you. You have a unique way of expressing yourself. You
        despise arduous labor. You must learn to be disciplined. You're a
        fantastic and interesting company during social gatherings since you
        like having a good time.
        
        </p>
    
        `
    } else if (ppPlaneText === '4' || ppPlaneText === '13/4' || ppPlaneText === '31/4' || ppPlaneText === '40/4' || ppPlaneInt[ppPlaneInt.length - 1] === '4') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 4</h3> <br>
        <p>
        You are self-disciplined, goal-oriented, well-organized, and pragmatic.
        Routine is easily addressed. You pay close attention to details and
        place a high value on them. You are dependable and trustworthy, as
        well as warm and compassionate. Change irritates you, and you may
        be stiff and inflexible. You're an excellent public speaker. You must
        restrain your impulse to rule over others and events. When presented
        with a challenge or an enemy, you can be stubborn.
        </p>
    
        `
    } else if (ppPlaneText === '5' || ppPlaneText === '14/5' || ppPlaneText === '23/5' || ppPlaneInt[ppPlaneInt.length - 1] === '5') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 5</h3> <br>
        <p>
        You're a flexible and adaptable individual who can handle a variety of
        responsibilities. You’re strong and energetic. Your body's physical
        ability can be greatly enhanced. Change, travel, and making new
        friends are all things you appreciate. You're drawn to fresh and
        fascinating things. From experience, you pursue knowledge and
        insight. You live your life in an imaginative and exciting way,
        avoiding routine and standards.
        
        </p>
    
        `
    } else if (ppPlaneText === '6' || ppPlaneText === '15/6' || ppPlaneText === '24/6' || ppPlaneInt[ppPlaneInt.length -  1] === '6') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 6</h3> <br>
        <p>
        You are the one who mixes reality with compassion. You are a loving
        person that always seeks harmony. This physical plane number is
        shared by many artists. You are a sensitive, peaceful, and kind
        individual. You're also quite interested in other people's lives. You're
        an excellent teacher and healer. Your love of beauty and art may be
        seen in your environments. You're a fantastic partner when it comes to
        marriage. Parenting, as well as the little act of service to everybody
        you interact with, brings you great joy. 
        </p>
    
        `
    } else if (ppPlaneText === '7' || ppPlaneText === '16/7' || ppPlaneText === '25/7' || ppPlaneInt[ppPlaneInt.length - 1] === '7') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 7</h3> <br>
        <p>
        You've acquired inner feelings, and you have excellent intuition and
        the capacity to comprehend abstract concepts. As a healer, you have
        a gift. Your intellect is naturally gifted at grasping science and
        technology concepts, so you could excel in either of these professions.
        You're at your best when you're in a calm environment. You require
        mental clarity as well as time to ponder and reflect. You should
        concentrate on one field of research. You have discipline and integrity,
        but you should be careful not to detach or distance too much
        </p>
    
        `
    } else if (ppPlaneText === '8' || ppPlaneText === '17/8' || ppPlaneText === '26/8' || ppPlaneInt[ppPlaneInt.length - 1] === '8') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 8</h3> <br>
        <p>
        Your life revolves around money and power. You are a driven
        individual with exceptional leadership and management skills. You are
        always striving for the best and inspiring others to do the same. You
        are very competitive. You have a strong personality and will battle
        tooth and nail to obtain what you believe you are entitled to. Several
        people with this number have strong bodies and great vocals. Many
        people appreciate and respect you for your dedication, ambition,
        hardworking, vision, determination, and accomplishment. In your latter
        years, you have a great possibility of becoming successful, wealthy,
        and comfortable. 
        </p>
    
        `
    } else if (ppPlaneText === '9' || ppPlaneText === '18/9' || ppPlaneText === '27/9' || ppPlaneInt[ppPlaneInt.length - 1] === '9') {
        ppoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Stands for physical activity, moderation, practicality, and values.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Physical Plane of Expression 9</h3> <br>
        <p>
        You are a determined and powerful individual with artistic ability.
        People like you should be performing in the arena. You're a good
        person. You are worried about the well-being of the humanities.
        Government, journalism, marketing, and public service are also
        appealing to you. You have a great deal of sympathy, understanding,
        and kindness in your heart. You like to satisfy everyone in some
        manner, so you make commitments that you're not able to maintain.
        Others frequently misunderstand you, because you are often
        misinterpreted and distant.
        </p>
    
        `
    }


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

    var mmpText = (mpoeNum.textContent).trim();
    var mmpInt = mmpText.split('/');

    if (mmpText === '1' || mmpText === '10/1' || mmpInt[mmpInt.length - 1] === '1') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Symbolizes the state of mind, way of thinking, and ability to make
        healthy conclusions and judgments.
        
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 1</h3> <br>
        <p>
        Your thinking is brilliant, you are humorous and clever, and your
        unique ideas can lead to success.
        </p>
    
        `
    } else if (mmpText === '11/2' || mmpInt[0] === '11') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Symbolizes the state of mind, way of thinking, and ability to make
        healthy conclusions and judgments.
        
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 11/2</h3> <br>
        <p>
        Individuals like you are hard to find these days. You are naturally
        creative, innovative, explorer, and inspirational.
        
        </p>
    
        `
    } else if (mmpText === '22/4' || mmpInt[0] === '22') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Symbolizes the state of mind, way of thinking, and ability to make
        healthy conclusions and judgments.
        
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 22/4</h3> <br>
        <p>
        You are intelligent and therefore can recognize the tiniest facts that
        others might overlook. You're also a terrific organizer and thinker.
        </p>
    
        `
    } else if (mmpText === '2' || mmpText === '20/2' || mmpInt[mmpInt.length - 1] === '2') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Symbolizes the state of mind, way of thinking, and ability to make
        healthy conclusions and judgments.
        
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 2</h3> <br>
        <p>
        You have exceptional memory skills and can comprehend and
        remember a large quantity of data or information.
        
        </p>
    
        `
    } else if (mmpText === '3' || mmpText === '12/3' || mmpText==='21/3' || mmpText=== '30/3' || mmpInt[mmpInt.length - 1] === '3') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Symbolizes the state of mind, way of thinking, and ability to make
        healthy conclusions and judgments.
        
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 3</h3> <br>
        <p>
        You are a gifted and artistic individual. You have a lot of imagination
        and are quite intelligent.
        </p>
    
        `
    } else if (mmpText === '4' || mmpText === '13/4' || mmpText === '31/4' || mmpInt[mmpInt.length - 1] === '4') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 4</h3> <br>
        <p>
        You are meticulous in your detailing and enjoy making schedules and
        checklists. You are a sensible, logical, and diligent person.
        </p>
    
        `
    } else if (mmpText === '5' || mmpText === '14/5' || mmpText === '23/5' || mmpInt[mmpInt.length - 1] === '5') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 5</h3> <br>
        <p>
        You are a creative and intellectual individual. You have a good
        memory and can memorize a great deal of information quickly.
        </p>
    
        `
    } else if (mmpText === '6' || mmpText === '15/6' || mmpText=== '24/6' || mmpInt[mmpInt.length - 1] === '6') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 6</h3> <br>
        <p>
        You have a sensitive personality and a creative inclination. You have
        the potential to be a fantastic actor or performer. You can also be an
        excellent, nurse, physician, and educator. 
        </p>
    
        `
    } else if (mmpText === '7' || mmpText === '16/7' || mmpText === '25/7' || mmpInt[mmpInt.length - 1] === '7') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 7</h3> <br>
        <p>
        You're hungry for information and the truth in everything. If you
        continue to improve intellectually, you have a good possibility of
        becoming a genius in any one of your fields of expertise.
        </p>
    
        `
    } else if (mmpText === '8' || mmpText === '17/8' || mmpText === '26/8' || mmpInt[mmpInt.length - 1] === '8') {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 8</h3> <br>
        <p>
        In business and entrepreneurship, you may achieve great success.
        You're prepared for challenges and obstacles, and your goals are
        quite legitimate.
        
        </p>
    
        `
    } else if (mmpText === '9' || mmpText === '18/9' || mmpText === '27/9' || mmpInt[mmpInt.length - 1] === '9')  {
        mpoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Symbolizes the state of mind, way of thinking, and ability to make
            healthy conclusions and judgments.
    
    
        </p> <br> <br>
        
        <h3 class="bold-description-label">Mental Plane of Expression 9</h3> <br>
        <p>
        You would like to accomplish something amazing and motivating. You
        are indeed a sensitive individual who has a tendency to exaggerate
        situations.
        </p>
    
        `
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
    };

    var ippText = (ipoeNum.textContent).trim();
    var ippInt = ippText.split('/');

    if (ippText === '1' || ippText === '10/1' || ippInt[ippInt.length - 1] === '1') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 1</h3> <br>
        <p>
        Your intuition works in combination with your conscious mind, it is
        informed by your past experiences and knowledge, so it hardly leads
        you mistaken. You can comprehend things of varying degrees of
        difficulty.
        </p>
    
        `
    } else if (ippText === '11/2' || ippInt[0] === '11') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 11/2</h3> <br>
        <p>
        Your intuition is very sharp. You can predict what will happen in the
        future, and you don't speculate; you explain what you think. You have
        the ability to influence and alter the moods of others around you.
        
        </p>
    
        `
    } else if (ippText === '22/4' || ippInt[0] === '22') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 22/4</h3> <br>
        <p>
        If others around you start speculating things they don't know with
        certainty, it makes you feel uneasy. You love accurate information and
        evidence. You have similar religious beliefs.
        </p>
    
        `
    } else if (ippText === '2' || ippText === '20/2' || ippInt[ippInt.length - 1] === '2') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 2</h3> <br>
        <p>
        Your instincts are spot on. You're a sentimental person who typically
        follows the path of your ideas when it comes to spiritual things.
        </p>
    
        `
    } else if (ippText === '3' || ippText === '12/3' || ippText === '21/3' || ippInt[ippInt.length - 1] === '3') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 3</h3> <br>
        <p>
        You have a lot of imagination, and you have profound ideas about a lot
        of things on this planet. You're a daydreamer who frequently imagines
        both conceivable and impossible scenarios for a given circumstance.
        </p>
    
        `
    } else if (ippText === '4' || ippText === '13/4' || ippText === '31/4' || ippInt[ippInt.length - 1] === 4) {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 4</h3> <br>
        <p>
        You prefer goods that have been thoroughly examined. You might be
        religious and follow customs.
        </p>
    
        `
    } else if (ippText === '5' || ippText === '14/5' || ippText === '23/5' || ippInt[ippInt.length - 1] === '5') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 5</h3> <br>
        <p>
        Your intuition is well evolved, and you depend on it frequently. Your
        internal visions need to be more disciplined.
        </p>
    
        `
    } else if (ippText === '6' || ippText === '15/6' || ippText === '24/6' || ippInt[ippInt.length - 1] === '6') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 6</h3> <br>
        <p>
        You have a strong sense of intuition. You normally take your own
        experiences and opinions extremely seriously. You stick to your gut
        instincts.
        </p>
    
        `
    } else if (ippText === '7' || ippText === '16/7' || ippText === '25/7' || ippInt[ippInt.length - 1] === '7') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 7</h3> <br>
        <p>
        Your intuition or instinct is something to be proud of since it is forwardthinking. You have a strong understanding of a variety of intangible
        issues. You're hoping for something amazing to occur.
        </p>
    
        `
    } else if (ippText === '8' || ippText === '17/8' || ippInt[ippInt.length - 1] === '8') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 8</h3> <br>
        <p>
        You have exceptional intuition and can occasionally make predictions.
        You can readily guess what people's underlying motivations are.
        
        </p>
    
        `
    } else if (ippText === '9' || ippText === '18/9' || ippText === '27/9' || ippInt[ippInt.length - 1] === '9') {
        ipoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Implicates an instinctive side, profound knowledge of self, and a
            general understanding of people. Also called <span class="red-span">Spiritual Plane of
            Expression </span>
        </p> <br> <br>
        
        <h3 class="bold-description-label">Intuitive/Spiritual Plane of Expresion 9</h3> <br>
        <p>
        You desire to be exposed to a wide range of spiritual experiences. You
        have a deep grasp of life. Many folks think you're at the very least
        attractive.
        </p>
    
        `
    }
    


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
    count = 0;
    sumCount = 0;
    if (finalList.length === 1) {
        if (finalList[0] < 10) {
            epoeNum.innerHTML = count;
        } else if (finalList[0] === 10) {
            epoeNum.innerHTML = '10/<b>1</b>';
        } else if (finalList[0] === 11 || finalList[0] === 22 || finalList[0] === 33) {
            mSplit = String(countList[0]).split('');
            sum = eval(mSplit.join('+'));
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
        if (sum < 10) {
            epoeNum.innerHTML = sum;
        } else if (sum === 10) {
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
        
    };

    var eppText = (epoeNum.textContent).trim();
    var eppInt = eppText.split('/');

    if (eppText === '1' || eppText === '10/1' || eppInt[eppInt.length - 1] === '1') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 1</h3> <br>
        <p>
        You have a stressful life, which is the source of your anxiety. Since
        you might be the head in your marriage or relationship, it is best
        for you to seek out an accepting and accommodating spouse
        </p>
    
        `
    } else if (eppText === '11/2' || eppInt[0] === '11') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 11/2</h3> <br>
        <p>
        You are incredibly intuitive and follow your gut instincts. You love so
        deeply that you might become lost in the other individual. You can be
        certain of what other people's motivations and goals are.
        
        </p>
    
        `
    } else if (eppText === '22/4' || eppInt[eppInt.length - 1] === '22') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 22/4</h3> <br>
        <p>
        You hardly trust your thoughts, emotions, and sentiments since they
        can injure you, jeopardizing your ambition to have a calm and stable
        existence.
        </p>
    
        `
    } else if (eppText === '2' || eppText === '20/2' || eppInt[eppInt.length - 1] === '2') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 2</h3> <br>
        <p>
        You are hypersensitive, which might have a negative impact on your
        self-esteem. Because you have a defensive personality, it will take a
        little time for you to trust other individuals.
        
        </p>
    
        `
    } else if (eppText === '3' || eppText === '21/3' || eppText === '12/3' || eppInt[eppInt.length - 1] === '3') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 3</h3> <br>
        <p>
        You have a loving, beautiful outlook on life and a creative imagination.
        You are charming and have a wonderful sense of humor as well.
        </p>
    
        `
    } else if (eppText === '4' || eppText === '13/4' || eppText === '31/4' || eppInt[eppInt.length - 1] === '4') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 4</h3> <br>
        <p>
        Any time your emotions take control, you strive to bring yourself
        together. Excessive gestures might detract from your concentration.
        </p>
    
        `
    } else if (eppText === '5' || eppText === '14/5' || eppText === '23/5' || eppInt[eppInt.length - 1] === '5') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 5</h3> <br>
        <p>
        You like observing other people's behavior, their speech patterns, and
        their way of life. Traveling is ideal for you since it allows you to
        understand a little more about the universe.        
        </p>
    
        `
    } else if (eppText === '6' || eppText === '15/6' || eppText === '24/6' || eppInt[eppInt.length - 1] === '6') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 6</h3> <br>
        <p>
        You're extremely sensitive, and your emotions frequently take control.
        If necessary, you will find it difficult to conceal your feelings. It is
        priceless that you really love and cherish your relatives and friends,
        and learn to remain calm.
        </p>
    
        `
    } else if (eppText === '7' || epoeText === '25/7' || eppText === '16/7' || eppInt[eppInt.length - 1] === '7') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 7</h3> <br>
        <p>
        You're filled with emotions and in desperate need of affection. Yet, you
        are having difficulty expressing your sentiments in the appropriate
        manner.
        </p>
    
        `
    } else if (eppText === '8' || eppText === '17/8' || eppText === '26/8' || eppInt[eppInt.length - 1] === '8' ) {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 8</h3> <br>
        <p>
        You're someone who wants to have complete control and
        authority over everybody and a lot of things around you. 
        </p>
    
        `
    } else if (eppText === '9' || eppText === '18/9' || eppText === '27/9' || eppInt[eppInt.length - 1] === '9') {
        epoeText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Accounts for sensitivity, emotional reaction, and total ability to express
            feelings during one's life.
        </p> <br> <br>
        
        <h3 class="bold-description-label">Emotional Plane of Expresion 9</h3> <br>
        <p>
        You are indeed a genuine individual who seeks to assist everyone
        who is in distress.        
        </p>
    
        `
    }
    


    // Chapters of Life: Period Cycle 

    // First Period Life Cycle 
    monthHold;
    if (monthHold < 10) {
        monthHold;
    }else if (monthHold === 10) {
        monthHold = 1;
    } else if (monthHold === 11) {
        monthHold = '11/2';
    } else if (monthHold === 12) {
        monthHold = 3;
    }
    var fpHold;
    var lpHoldList = lpNum.textContent.split('/');
    var lpHoldText = lpNum.textContent;

    if (lpHoldList.length === 1) {
        fpHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            fpHold = '11/2'
        } else if (lpHoldText === '22/4') {
            fpHold = '22/4'
        } else if (lpHoldText === '33/6') {
            fpHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            fpHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    };

    console.log(fpHold)
    if (fpHold === 1) {
        fpCycle.innerHTML = 'from birth to age 0 - 26';
        fpCycleNum.innerHTML = monthHold
    } else if (fpHold === 2) {
        fpCycle.innerHTML = 'from birth to age 0 - 34';
        fpCycleNum.innerHTML = monthHold
    } else if (fpHold === 3) {
        fpCycle.innerHTML = 'from birth to age 0 - 33';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === 4) {
        fpCycle.innerHTML = 'from birth to age 0 - 32';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === 5) {
        fpCycle.innerHTML = 'from birth to age 0 - 31';
        fpCycleNum.innerHTML = monthHold
    } else if (fpHold === 6) {
        fpCycle.innerHTML = 'from birth to age 0 - 30';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === 7) {
        fpCycle.innerHTML = 'from birth to age 0 - 29';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === 8) {
        fpCycle.innerHTML = 'from birth to age 0 - 28';
        fpCycleNum.innerHTML = monthHold
    } else if (fpHold === 9) {
        fpCycle.innerHTML = 'from birth to age 0 - 27';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === '11/2') {
        fpCycle.innerHTML = 'from birth to age  0 - 34';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === '22/4') {
        fpCycle.innerHTML = 'from birth to age 0 - 32';
        fpCycleNum.innerHTML = monthHold;
    } else if (fpHold === '33/6') {
        fpCycle.innerHTML = 'from birth to age 0 - 30';
        fpCycleNum.innerHTML = monthHold;
    };

    var fCycleText = (fpCycleNum.textContent).trim();
    var fCycleInt = fCycleText.split('/');

    if (fCycleText === '1' || fCycleText === '10/1' || fCycleInt[fCycleInt.length - 1] === '1') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 1</h3> <br>
        <p>
        Signifies someone who is highly autonomous, constantly takes the lead
        and has a difficult time following direction, which might get you into
        problems as a youngster. You’ll acquire your own unique freedom and
        originality, and you will be obliged to employ all of your abilities. Therefore,
        you’re very independent and taking lead as a child or adolescence. <br> <br>
        What to expect during a 1 cycle (in your 20s). Know that is a period of intensive
        activity that may provide opportunities for personal advancement and growth.
        You'll have greater self-assurance and freedom when it comes to trying new
        things. At that moment, you will be focused on your own goals and
        dreams. You will have the option of breaking out on your own in a
        relationship or working for yourself. During this time, separation and
        singleness are common. During this period, you can do great things and
        lead others.
        </p>
    
        `
    } else if (fCycleText === '11/2' || fCycleInt[0] === '11') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 11/2</h3> <br>
        <p>
        The first 30 years of your life are a period of spiritual growth, if not outright
        revelation. You might be idealistic and still struggle to deal with the practical
        world. As a kid, you'll be sensitive, cooperative, and kind. You will gain
        knowledge and wisdom. This is not the time to pursue personal material
        aspirations, but rather to explore larger human values. Most kids who start with
        the master 11 cycle may have come from broken homes and had a
        struggled childhood. <br> <br>
        It's a moment of enormous spiritual development, insight, and inspiration.
        You can be drawn to the spiritual realm if you have psychic powers such as
        clairvoyance, clear hearing, and clear seeing. You are a messenger, and you 
        will have many visions during this time. You may also gain fame and popularity. <br> <br>
        Understand that in this period, you have a message or a skill that should
        be presented among your society, but this gift can only be provided via
        significant personal development and improved by expressing yourself. The
        more determined you are to improve yourself, the greater the ability you'll
        have to help the rest of the world. There is a tremendous reward for those
        who adopt and embrace this route, including plenty of financial assistance
        and even fame. There's also the added joy of knowing that your attempts have
        aided individuals' growth. You will inspire many people along the way. 
        </p>
    
        `
    } else if (fCycleText === '2' || fCycleText === '20/2' || fCycleInt[fCycleInt.length - 1] === '2') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 2</h3> <br>
        <p>
        You're particularly sensitive throughout this cycle, easily hurt by other
        youngsters, and supportive with grownups. When you're young, having
        a new hobby is beneficial. Not only will you be sensitive to your environment
        after adolescence, but you will also be very intuitive. <br> <br>
        You have a gift for bringing people together and have immense influence
        via subtle persuasion. Develop your diplomatic and tactful skills. Work along
        with others. You may develop empathic abilities through empathizing with
        others. You may offer peace and diplomacy to the world while also
        finding love or friendship. Collaboration with others will be crucial. During this
        period, try to achieve balance and tranquility, otherwise, you'll get
        stressed and depressed. It's a period of gradual but steady improvement
        </p>
    
        `
    } else if (fCycleText === '3' || fCycleText === '12/3' || fCycleText === '21/3' || fCycleText === '30/3' || fCycleInt[fCycleInt.length - 1] === '3') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 3</h3> <br>
        <p>
        You'll have plenty of energy, be able to express yourself readily, socialize, be
        open to friendship, communicate, and take pleasure in all you do. Any artistic
        talent you have, especially in writing, acting, designing, and dancing, will be
        pushed to new heights and rewarded handsomely. People will want to be
        around you, and it may be a joyful and happy moment. However, you
        may have difficulty focusing on anything for an extended period of
        time. Try to be disciplined so that you don’t scatter your energy.
        </p>
    
        `
    } else if (fCycleText === '4' || fCycleText === '13/4' || fCycleText === '31/4' || fCycleInt[fCycleInt.length - 1] === '4') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 4</h3> <br>
        <p>
        Demonstrates a problem with being young, having too many responsibilities
        at a young age, being realistic, and starting a profession early. Number 4
        can also be about laying a foundation, which can be difficult for young children
        at this period because they are often preoccupied with other things. <br> <br>
        It also signifies a period of hard effort with all of the benefits and reward that
        comes with it. This is a time when you are mostly concerned with the practical
        aspects of life such as a job and profession, financial stability, a stable
        family, buying and creating a home, and a strong community. You're not
        one for fantasy or idealism, but you do want to put your life on a solid financial
        foundation.
        </p>
    
        `
    } else if (fCycleText === '5' || fCycleText === '14/5' || fCycleText === '23/5' || fCycleInt[fCycleInt.length - 1] === '5') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 5</h3> <br>
        <p>
        You're restless and adventurous, yet you might have several highs and lows,
        and your lack of structure and stability makes growing up tough for you. As a
        kid, you’ll probably travel, relocate, or start childcare/school early or have
        many changes in life at an early age. <br> <br>
        In your youth, it will depict a time when there’s a lot of change and a lot of
        growth. You're studying the subject of individual freedom. During this period,
        you will travel, change jobs, and relocate several times. It will be a
        period when you will be free of all duties. You'll be independent and have
        a natural talent for advertising oneself. <br> <br>
        You'll have fewer responsibilities, giving you more time to travel and see the
        world and other countries. You'll become more adaptive, curious,
        energetic, flexible, entertaining, and sociable as a consequence, and many
        people will gravitate toward you. It's possible that you'll lose your
        equilibrium. Make an effort to be disciplined. Don't be careless, addicted,
        or unstable.
        </p>
    
        `
    } else if (fCycleText === '6' || fCycleText === '15/6' || fCycleText === '24/6' || fCycleInt[fCycleInt.length - 1] === '6') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 6</h3> <br>
        <p>
        You are dedicated to your friends and family, eager to help out as much as
        possible, and you have a tendency to take on too much responsibility and
        obligation at an early age. <br> <br>
        Commitment, home, marriage, family, and community are all brought into
        great perspective. This is a phase of considerable peace and support when
        promises are made and one reacts tenderly and with understanding.  <br> <br>
        During this time, you may find yourself in an unprepared early marriage, which
        might lead to separation or divorce. At this period, you could even become a
        parent. You may also be the one who looks for and takes care of yourself and
        your needs. During this time, you will be well-known, you may start your own
        business, you will be creative, and you will find yourself frequently assisting
        people.
        </p>
    
        `
    } else if (fCycleText === '7' || fCycleText === '16/7' || fCycleText === '25/7' || fCycleText === '34/7' || fCycleInt[fCycleInt.length - 1] === '7') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 7</h3> <br>
        <p>
        You'll feel like an outcast, different from the other kids, quieter, and more
        contemplative. You're a natural learner who doesn't actually care about
        blending in. <br> <br>
        It's also a good time to study, think deeply, and ponder life's bigger
        concerns. Deepen your understanding of a subject you appreciate. Science,
        technology, literature, and theology all pique your interest. Also, become a
        specialist in a certain field. You have exceptional intuition and an intellect
        that can go under the surface of any topic you want to pursue. It is indeed a
        time for personal growth. Internal enrichment can be achieved via
        meditation, introspection, and selfreflection. Create a sense of wisdom. <br> <br>
        Due to a desire to spend time alone, a relationship might appear stressful at
        times. Revealing your innermost sentiments with others might be
        difficult. You'll look for answers to the question of life's meaning. Your intellect
        will grow in strength, and you will study to become anything you choose. <br> <br>
        People at times become more spiritual or religious. You will learn a lot of new
        things. You can find yourself relocating to the countryside from the bustling city. <br> <br>
        You could acquire psychic abilities and become highly perceptive. Negative
        traits are depression, anxiety, sadness, aloofness, distance, impulsive,
        suspicious, and paranoid
        </p>
    
        `
    } else if (fCycleText === '8' || fCycleText === '17/8' || fCycleText === '26/8' || fCycleInt[fCycleInt.length - 1] === '8') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 8</h3> <br>
        <p>
        Starting at a young age and lasting until your mid-thirties, you will be blessed
        with a favorable period for job, career, and financial reward. However,
        you may be too concerned with material belongings and financial gain.
        You may begin your job at any age. Hard effort and a desire to devote
        oneself after failures or challenges are the keys to success. Your motivation
        will improve, you will get braver and more ambitious, you will be challenged
        and may experience setbacks, but you will be able to achieve great things. <br> <br>
        As a manager, organizer, and financial planner, your talents will be
        substantially strengthened. You have a talent for seeing the big picture and
        putting daring vision into practice. During this time, you might achieve
        financial independence. Business and employment activities are going well,
        but they take a huge amount of focus and dedication. You will attract money
        and success during this time. 
        </p>
    
        `
    } else if (fCycleText === '9' ||fCycleText === '18/9' || fCycleText === '27/9' || fCycleInt[fCycleInt.length - 1] === '9') {
        fpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            Our lives are divided into three major categories called period cycles.
            Which cycle age of start and duration is based on your life path
            number. <br> <br>
            <b>First</b> Period Cycle or Opening Period
                - Your first three decades of your existence were a period of
                intense activity. Attempting to manage the tremendous
                influences that exist in our surroundings, our parents, and our
                family's socio-economic circumstances. Age 0 to 28/30. 
           </p> <br> <br>
        
        <h3 class="bold-description-label">First Period Cycle 9</h3> <br>
        <p>
        You'll be compelled to focus on the world and people rather than yourself,
        and you may struggle to feel confident and alone as a child. <br> <br>
        This is a time when people will develop a broad sense of humanity and genuine
        care for the well-being of others. These 9 Cycle’s purposes are acceptance,
        understanding, and love for humanity and while such achievement will not be
        entirely realized, the individual who is influenced by it will progress towards
        such ideals. You will be blessed more the more you serve others. You'll be
        extremely creative. You should live by a higher ethical standard since this will
        provide you with tremendous spiritual and personal richness. <br> <br>
        This is a moment of self-sacrifice in which you prioritize the needs of others
        before your own. That is to say, you are sacrificing yourself for the sake of
        others. You can be responsible for your loved ones or family, raise children
        (sometimes by yourself), or aid society as a whole. Past events might become
        a problem so try to let go. You might have some losses, or you may have a
        lot of beginnings and endings in relationships, things, and so on. You
        should try to heal from traumatic or negative experiences.
        </p>
    
        `
    } 


    // Second Cycle Life 
    dayHold;
    mSplit = String(dayHold).split('');
    sum = eval(mSplit.join('+'));
    dayHold = sum;
    if (dayHold === 10) {
        dayHold = 1;
    } else if (dayHold === 11) {
        dayHold = '11/2';
    } else if (dayHold === 22) {
        dayHold = '22/4'
    } else if (dayHold === 33 ) {
        dayHold = '33/6'
    } else if (dayHold > 11 ) {
        mSplit = String(dayHold).split('');
        sum = eval(mSplit.join('+'));
        dayHold = sum;
    }  else {
        dayHold;
    };

    var spHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        spHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            spHold = '11/2'
        } else if (lpHoldText === '22/4') {
            spHold = '22/4'
        } else if (lpHoldText === '33/6') {
            spHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            spHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }

    if (spHold === 1) {
        spCycle.innerHTML = 'from age 27 to 53';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 2) {
        spCycle.innerHTML = 'from age 35 to 61'
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 3) {
        spCycle.innerHTML = 'from age 34 to 60';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 4) {
        spCycle.innerHTML = 'from age 33 to 59';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 5) {
        spCycle.innerHTML = 'from age 32 to 58';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 6) {
        spCycle.innerHTML = 'from age 31 to 57';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 7) {
        spCycle.innerHTML = 'from age 30 to 56';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 8) {
        spCycle.innerHTML = 'from age 29 to 55';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === 9) {
        spCycle.innerHTML = 'from age 28 to 54';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === '11/2') {
        spCycle.innerHTML = 'from age 35 to 61';
        spCycleNum.innerHTML = dayHold
    } else if (spHold === '22/4') {
        spCycle.innerHTML = 'from age 33 to 59';
        spCycleNum.innerHTML = dayHold;
    } else if (spHold === '33/6') {
        spCycle.innerHTML = 'from age 31 to 57';
        spCycleNum.innerHTML = dayHold;
    };


    var sCycleText = (spCycleNum.textContent).trim();
    var sCycleInt = sCycleText.split('/');

    if (sCycleText === '1' || sCycleText === '10/1' || sCycleInt[sCycleInt.length - 1] === '1') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 1</h3> <br>
        <p>
        You'll be ambitious, focused, determined, and able to do a lot; you'll
        be a wonderful leader, but you'll be impatient. You'll almost certainly find
        yourself in a position of leadership, which will boost your self-assurance
        even further. <br> <br>
        This is the moment to define your own objectives and commit all of your focus
        and resources to accomplish them. You must put your abilities to good use in
        order to succeed. Instead of depending on others, you should have faith in
        yourself and depend on your talents and abilities. Keep a watch on the
        objectives you've set for yourself. Work hard and conquer the challenges that
        you face. <br> <br>
        Know that this is a period of intensive activity that may provide opportunities
        for personal advancement and growth. You'll have greater self-confidence and 
        freedom when it comes to trying new things. At that moment, you will be
        focused on your own goals and dreams. You will have the option of
        breaking out on your own in a relationship or working for yourself.
        During this time, divorce, separation, and singleness (loneliness) are all
        common. During this period, you can do great things (starting a business or
        something new) and lead others.

        </p>
    
        `
    } else if (sCycleText === '11/2' || sCycleInt[0] === '11') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 11/2</h3> <br>
        <p>
        An 11 is spiritual during the Second Period and tries to assist others with
        their spiritual struggle. If you don't establish a balance, you may get
        nervous. You will have a lot of spiritual growth, if not outright revelation. You
        will be sensitive, cooperative, and kind. You will gain knowledge and wisdom.
        This is not the time to pursue personal material aspirations, but rather to
        explore larger human values. <br> <br>
        It's a moment of enormous spiritual development, insight, and inspiration.
        You can be drawn to the spiritual realm if you have psychic powers such as
        clairvoyance, clear hearing, and clear seeing. You are a messenger, and you
        will have many visions during this time. You may also gain fame and popularity. <br> <br>
        Understand that in this period, you have a message or a skill that should
        be presented among your society, but this gift can only be provided via
        significant personal development and improved by expressing yourself. The
        more determined you are to improve yourself, the greater the ability you'll
        have to help the rest of the world. There is a tremendous reward for those
        who adopt and embrace this route, including plenty of financial assistance
        and even celebrity. There's also the added joy of knowing that your
        attempts have aided individuals' growth. You will inspire many people
        through your teaching and experiences.

        </p>
    
        `
    } else if (sCycleText === '22/4' || sCycleInt[0] === '22') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 22/4</h3> <br>
        <p>
        If your 2nd Period Cycle is a 22 Master, you have a lot of potential for creating a
        long-lasting organization, something, or teaching that will help a lot of people.
        You have the power to make a notion, a dream, or an innovation come true.
        You've reached the height of your abilities as a builder, planner, and
        visionary. You are able to identify the needs of others and develop creative
        and realistic solutions to meet those needs. You devote your complete
        attention to the task at hand. For many, this is a once-in-a-lifetime ambition that
        necessitates every bit of energy and skill. An all-consuming responsibility
        awaits, but it also offers a tremendous sense of personal achievement and
        pleasure. You have the potential to make a long-term contribution to
        humankind and well-being. <br> <br>
        It may be a difficult and sluggish moment, but amazing things are on the
        way. To construct anything enduring,
        your intuition will become really powerful. It's possible that your
        previous foundation may be wiped away, which can be difficult, but it will
        motivate you to build something larger, better, and more durable for future
        generations. Though, this energy sometimes manifested later than early.
        During this time, you may be able to find genuine love.
        </p>
    
        `
    } else if (sCycleText === '2' || sCycleText === '20/2' || sCycleInt[sCycleInt.length - 1] === '2') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 2</h3> <br>
        <p>
        Suggests you can collaborate effectively with others and find a
        partner to be really advantageous to your career. Though your emotions
        may still swing, your conciliatory attitude is a plus. You will be more
        cooperative and understanding during this time. <br> <br>
        Not only will you be sensitive to your environment, but you will also be very
        intuitive. You have a gift for bringing people together and have immense
        influence via subtle persuasion. Develop your diplomatic and tactful
        skills. Work along with others. You may develop empathic abilities through
        empathizing with others. You may offer peace and diplomacy to the world while
        also finding love or friendship. Collaboration with others will be crucial. During this period, try to achieve
        balance and tranquility, otherwise, you'll get stressed and depressed. It's a
        period of gradual but steady improvement. You should invest time in
        arts, particularly music, ballet, theatre, and other forms of performance art,
        which allows you to feel more relaxed and engaged.
        
        </p>
    
        `
    } else if (sCycleText === '3' || sCycleText === '12/3' || sCycleText === '21/3' || sCycleText === '30/3' || sCycleInt[sCycleInt.length - 1] === '3') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 3</h3> <br>
        <p>
        The middle part of your life is a time you'll have plenty of energy, be able to
        express yourself easily, socialize, be open to friendship, communicate, and
        take pleasure in all you do. Any artistic talent you have, especially in writing,
        acting, arts, poetry, designing, dancing, public speaking, and media will be
        pushed to new heights and rewarded handsomely. People will want to be
        around you, and it may be a joyful and happy moment. You will be creative in
        your profession and can do your own thing, but you need to work on learning
        how to plan ahead and focus because you may have difficulty focusing on
        anything for an extended period of time. Try to be disciplined so that you
        don’t scatter your energy. 
        </p>
    
        `
    } else if (sCycleText === '4' || sCycleText === '13/4' || sCycleText === '31/4' || sCycleInt[sCycleInt.length - 1] === '4') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 4</h3> <br>
        <p>
        The middle of your life is a time for hard effort and the benefits that come with it.
        You are preoccupied with the practical aspects of life, such as your profession,
        stable family, financial stability, buying and creating a home, and a strong
        community. During this period, you are not prone to chasing idealistic or
        impracticable ambitions, preferring instead to put your life on firmer
        ground. It's time to set some long-term objectives and work hard to achieve
        them. <br> <br>
        To build a firm financial foundation for  yourself, it would be beneficial if you
        worked in an orderly and methodical manner. It's also a good idea to keep
        focused and avoid becoming overly interested in too many things. Find
        employment that you enjoy so that your efforts are rewarded not merely in
        terms of advancement, success, and money, but also in terms of happiness
        and a sense of achievement. It's also a period when discipline, organization, 
        and self-determination reign supreme,
        qualities that will appeal to your relatives, colleagues, and society. So,
        strive to construct a steady, secure, and focused life for yourself, but don't
        overwork yourself and take vacations.
        </p>
    
        `
    } else if (sCycleText === '5' || sCycleText === '14/5' || sCycleText === '23/5' || sCycleInt[sCycleInt.length - 1] === '5') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 5</h3> <br>
        <p>
        The middle of your life is a time of significant change and development.
        You pick up on the teachings, values, and obligations that come with having
        your own freedom and independence. You probably travel, adapt, move
        houses or towns, or change work on a regular basis. You can achieve
        amazing things if you don't bounce about too much. You may move into
        new things with hardly any consideration, so accept change. <br> <br>
        You will encounter individuals from a variety of backgrounds. In the process,
        you will learn new cultures and languages. You will embrace your
        independence and spend your time traveling and experiencing new
        locations. This is when you may be confronted with scenarios that will put
        your mental foresight to the test. You should avoid a predictable, routine
        lifestyle. You develop a talent for selfpromotion, which can help you advance
        in your career. You improve your selfexpression and become less selfconscious. You will have many friends
        and may find happiness. Negative traits are addictions, restlessness,
        impulsiveness, fatigue, unstable, unreliable, and unfaithfulness. 
        </p>
    
        `
    } else if (sCycleText === '6' || sCycleText === '15/6' || sCycleText === '24/6' || sCycleInt[sCycleInt.length - 1] === '6') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 6</h3> <br>
        <p>
        The middle of your life is a period of responsibility and obligation.
        Commitment, marriage, family, and community are all brought into a clear 
        perspective. This may be a time of harmony and cooperation if you respect
        your obligations with acceptance and love. <br> <br>
        Now is the time to find love or settle into a happy and meaningful marriage.
        Partnerships work well in the same way, and development is created via
        teamwork. Relationships that are broken or not truly committed, on the
        other hand, are more likely to terminate in divorce or separation during this
        time. Your whole focus should be on cultivating healthy and pleasant
        relationships. You will be presented with new opportunities. <br> <br>
        You'll also be more concerned with others than with yourself. As a result,
        people will require your services (that can be family, children, or strangers);
        you are loved and valued. Your artistic abilities may emerge or develop, and
        possibilities for self-expression may arise. A business opportunity,
        potentially your own company, is supported. This is a period of progress
        characterized by adaptability, collaboration, and compromise. You'll
        also need to work with people and be adaptive to the many changes that life
        throws at you.
        </p>
    
        `
    } else if (sCycleText === '7' || sCycleText === '16/7' || sCycleText === '25/7' || sCycleText === '35/7' || sCycleInt[sCycleInt.length - 1] === '7') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 7</h3> <br>
        <p>
        A 7-period is a phase of intellectual depth and introspection. It's a good
        moment to think about life's major questions. Although you will be drawn
        to a variety of disciplines, it would be beneficial if you concentrated on one.
        Science, technology, philosophy, religion, spirituality, and metaphysics
        may all appeal to you. Meditation and spirituality can help you gain
        knowledge. This is the moment to put your skills to good use by assisting and
        guiding others. You'll continue to study and acquire a great deal of information,
        but you won't get much more done since you'd rather concentrate on your
        intellect. Keep your attention on the task at hand and go for it with passion. <br> <br>
        Due to your need to spend time alone, relationships might appear difficult at
        times. There's also a reluctance to share your innermost thoughts with
        others. It is helpful to share your expertise via teaching, advising, or
        simply chatting with others. You may have revelation or vision. You could
        acquire psychic abilities such as clairvoyant, Clair hearing and seeing,
        and become highly intuitive. You can find yourself relocating to the
        countryside from the bustling city. The negative trait of this cycle is that you
        might feel depressed at times, anxious, paranoid, sad, lonely, impulsive, aloof,
        distant, and suspicious. 
        </p>
    
        `
    } else if (sCycleText === '8' || sCycleText === '17/8' || sCycleText === '26/8' || sCycleInt[sCycleInt.length - 1] === '8') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 8</h3> <br>
        <p>
        The 8 Period Cycle is typically favorable for employment, professional
        advancement, wealth accumulation, money, power, and financial gain. This
        is a period when power is bestowed upon you, but it must be handled wisely
        and strategically. You're almost certainly in a position of power and
        influence. An 8 is incredibly productive, ambitious, goal-oriented, motivated,
        adept at being a boss, and tries to achieve throughout the Second Period.
        To succeed in your job or business, you'll need vision and a desire to take
        chances. However, there is a risk of getting misled by get-rich-quick
        programmers or scammers or you attempting to make money in any way
        possible (stealing, cheating, and frauding others). <br> <br>
        Know that you will harvest what you sow since balance is the most
        important attribute. Financial reward is practically certain if you put out the
        work and devotion. You will have many setbacks and hard lessons to learn but
        you will be successful if you are determined and do not give up. If, on
        the other hand, cutting corners, scrounging or opportunism is
        the driving factor behind your work life, financial disaster may be the outcome.
        When it comes to rewards and punishments, the number 8 is rarely
        impartial. This is the perfect opportunity to learn from your mistakes and start
        fresh. Working on your past errors and understanding how to deal with them
        can help you build a business, administrative and leadership
        skills. This is also a period of financial stability. This is the moment to exercise
        patience and focus your attention on the task at hand. Make precise plans
        that take into account all of the variables. You will become wealthy and
        successful as you were born to be if you are positive, on the right track, and
        then do the right things.

        </p>
    
        `
    } else if (sCycleText === '9' || sCycleText === '18/9' || sCycleInt[sCycleInt.length - 1]=== '9') {
        spCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Second</b> Period Cycle or Middle Period
                - Throughout your middle years of life, you are on a tough
                journey of personal development (about ages 28/30 to 55/60).
                On a regular basis, you must adapt to the numerous highs and
                lows in your life. Carries to the gradual blossoming of our
                unique and creative abilities.
           </p> <br> <br>
        
        <h3 class="bold-description-label">Second Period Cycle 9</h3> <br>
        <p>
        You'll be compelled to focus on the world and people rather than yourself,
        and you may struggle to feel confident and alone. You will accomplish more
        for humanity, and acquire compassion, acceptance, understanding, caring,
        love, and empathy during the Second Period. You have a greater capacity for
        personal development than the majority of people. As you are urged to forgive
        previous grievances and let go of bad attachments and past suffering. <br> <br>
        The 9 Cycle’s purposes are for humanity, and while such achievement
        will not be entirely realized, the individual who is influenced by it will
        progress towards such ideals. You will be blessed more the more you serve
        others. You'll be extremely creative. You should live by a higher ethical
        standard since this will provide you with tremendous spiritual and personal
        richness. Some may become famous during his period. <br> <br>
        Though, this is a moment of selfsacrifice in which you prioritize the
        needs of others before your own. That is to say, you are sacrificing yourself for
        the sake of others. You can be responsible for your loved ones or
        family, raise children (sometimes by yourself), or aid society as a whole.
        Past events might become a problem so try to let go. You might have some
        losses, or you may have a lot of beginnings and endings in relationships, careers/jobs, or other
        things. You should try to heal from traumatic or negative experiences.

        </p>
    
        `
    }
    


    // Third Period Cycle 
    yearHold;
    mSplit = String(yearHold).split('');
    sum = eval(mSplit.join('+'));
    yearHold = sum;
    if (yearHold < 10) {
        yearHold;
    } else if (yearHold === 10) {
        yearHold = 1;
    } else if (yearHold === 11) {
        yearHold = '11/2';
    } else if (yearHold === 22) {
        yearHold = '22/4'
    } else if (yearHold === 33 ) {
        yearHold = '33/6'
    } else if (yearHold > 10 ) {
        mSplit = String(yearHold).split('');
        sum = eval(mSplit.join('+'));
        if(sum === 10) {
            sum = 1;
        } else if (sum === 11 || sum === 22 || sum === 33) {
            mSplit = String(sum).split('');
            sum = sum + '/'+ eval(mSplit.join('+'));
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
        }
        yearHold = sum;
    }  

    var tpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        tpHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            tpHold = '11/2'
        } else if (lpHoldText === '22/4') {
            tpHold = '22/4'
        } else if (lpHoldText === '33/6') {
            tpHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            tpHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }

    if (tpHold === 1) {
        tpCycle.innerHTML =  'from age 54 and on';
        tpCycleNum.innerHTML = yearHold;
    } else if (tpHold === 2) {
        tpCycle.innerHTML = 'from age 62 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 3) {
        tpCycle.innerHTML = 'from age 61 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 4) {
        tpCycle.innerHTML = 'from age 60 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 5) {
        tpCycle.innerHTML = 'from age 59 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 6) {
        tpCycle.innerHTML = 'from age 58 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 7) {
        tpCycle.innerHTML = 'from age 57 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 8) {
        tpCycle.innerHTML = 'from age 56 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === 9) {
        tpCycle.innerHTML =  'from age 55 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === '11/2') {
        tpCycle.innerHTML = 'from age 62 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === '22/4') {
        tpCycle.innerHTML = 'from age 60 and on'
        tpCycleNum.innerHTML = yearHold
    } else if (tpHold === '33/6') {
        tpCycle.innerHTML = 'from age 58 and on'
        tpCycleNum.innerHTML = yearHold
    };

    var tCycleText = (tpCycleNum.textContent).trim();
    var tCycleInt = tCycleText.split('/');

    if (tCycleText === '1' || tCycleText === '10/1' || tCycleInt[tCycleInt.length - 1] === '1' ) {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 1</h3> <br>
        <p>
        A 1 Third period cycle shows that you having a highly busy life, presumably
        not retiring or losing steam, and maybe witnessing the culmination of what
        you've been working so hard for your whole life. You will most likely be in a
        leadership position in the latter half of your life. You are an initiator and a selfstarter who acts instead of reacts. <br> <br>
        During this time, you may decide to choose a different path. To overcome
        difficulties, you'll need to be proactive. Strength, self-confidence, and
        endurance are required, and you may not receive support from others at this
        time, leaving alone (singleness) and loneliness are possible. <br> <br>
        Due to your active energy, though, it will be necessary to achieve your
        objectives. While many individuals become less energetic or interested as
        they become older, you on the other end have a fresh sense of purpose and
        vitality. This is a time when you're combining diverse components of your
        personality and focused on your life's ambition. Many people connected to
        you may advise you to slow down, but you were born to achieve your greatest
        success later in life.
        
        </p>
    
        `
    } else if (tCycleText === '11/2' || tCycleInt[0] === '11') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 11/2</h3> <br>
        <p>
        You'll spend the latter half of your life focusing on your spiritual self and
        letting go of material goods. You're contemplative, study a lot, and want to
        understand more about the universe. You'll notice that you're becoming more
        intuitive and depending on your feelings. As you eliminate the fear of
        exposing your genuine, inner self, you become less constrained. You are less
        afraid to communicate your thoughts and are more straightforward. You get
        to be a master of the exquisite art of communication and are better at
        dealing or working with others. Others are drawn to you, especially those who
        are in desperate need of assistance. <br> <br>
        You'll almost certainly uncover a skill you didn't know you possessed,
        possibly in the fine arts. During this period, you may experience
        clairvoyance, hearing and seeing, or visions. You could find it easier to
        connect to the spiritual realm than others. You must recognize the
        advantages of the spiritual insight you have acquired. Share the wisdom and
        spiritual understanding you've received with others. 
        
        </p>
    
        `
    } else if (tCycleText === '22/4' || tCycleInt[0] === '22') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 22/4</h3> <br>
        <p>
        You're always having something to do, something to strive for, and this is when
        you may achieve your greatest achievement. This cycle has a lot of
        promise for creating a long-lasting institution or education that will help a
        lot of people. You have the power to make a notion, a dream, or an
        innovation come true. You've reached the height of your abilities as a builder,
        planner, and visionary. You are able to identify the needs of others and devise
        creative and realistic solutions to meet those needs. You devote your
        complete attention to the task at hand. For many, this is a once-in-a-lifetime
        ambition that necessitates every ounce of strength and talent. A whole position
        awaits, but it also offers a tremendous sense of personal achievement and
        pleasure. You have the potential to make a long-term impact on society's
        well-being. <br> <br>
        It may be a difficult and sluggish moment, but amazing things are on the
        way. To construct anything enduring, your intuition will become really
        powerful. It's possible that your previous foundation may be wiped
        away, which can be difficult, but it will motivate you to build something larger,
        better, and more durable for future generations. During this time, you may
        be able to find genuine love.
        </p>
    
        `
    } else if (tCycleText === '2' || tCycleText === '20/2' || tCycleInt[tCycleInt.length - 1] === '2') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 2</h3> <br>
        <p>
        Having a large number of close relatives and friends around you,
        retiring with comfort and security, and bringing people together are all shown
        in the Third Period. Many people will be drawn to you, particularly those who
        are in tough situations. <br> <br>
        You become increasingly intuitive as you get older, relying more on your
        instincts than your head. As you eliminate the fear of revealing your
        actual and deeper self, you become less constrained. You are less afraid to
        communicate your thoughts and are more straightforward. You're more
        likely to trust your intuition. You become an expert in the exquisite art of
        persuasion and are better at dealing with others. You improve your
        interpersonal skills and become an expert in convincing. You could
        uncover a skill you didn't know you had, such as in the creative arts.
        
        </p>
    
        `
    } else if (tCycleText === '3' || tCycleText === '12/3' || tCycleText=== '21/3' || tCycleInt[tCycleInt.length - 1] === '3') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 3</h3> <br>
        <p>
        You will be extremely outgoing in your latter years, allowing your creative
        personality to completely express itself while also having a wonderful time.
        You've noticed that you're aging slower than your friends. Yet, there is a
        proclivity to squander time and effort on ineffective undertakings. You have a lot
        of unique ideas, but you could have trouble telling the difference between
        them. People are drawn to you because your energy is inspiring and
        encouraging. However, maintaining concentration may be difficult, which
        may jeopardize your capacity to achieve your goal. Your desire to
        express oneself via art, particularly through communication and theatrical
        improves with maturity. 
        </p>
    
        `
    } else if (tCycleText === '4' || tCycleText === '13/4' || tCycleText === '31/4' || tCycleInt[tCycleInt.length - 1] === '4') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 4</h3> <br>
        <p>
        In your later years, you're likely to be as busy as you've always been. You keep
        moving forward, whether it's because you keep working or because you've
        chosen to get engaged in a mission. You don't like being inactive
        or feeling useless, and you're always looking for ways to serve. In many
        aspects of your life, you will strengthen your foundation during this period. Your
        house, family, and wealth are still vital, but your internal divine and emotional
        lives are also developing. This is the time some people are building a home
        or creating a foundation for themselves or future generations. Moral and legal
        concerns may become extremely relevant to you. You could feel
        compelled to volunteer for a cause that addresses inequalities that exist, such
        as a non-profit organization.
        </p>
    
        `
    } else if (tCycleText === '5' || tCycleText === '14/5' || tCycleInt[tCycleInt.length - 1] === '5') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 5</h3> <br>
        <p>
        You continue to navigate through shifting situations throughout the later
        part of your life. A 5 Period Cycle has innate energy to it that promotes a
        more spontaneous response to conditions. You'll be going to have
        adventures, learn new things, and most likely won't quit working since you're
        finally doing something you enjoy. You are lured to travel, fresh faces, and
        diverse cultures at this time. This is a dynamic, rather turbulent cycle in which
        nothing goes as planned. Relocating is possible. You're at your best when
        you're sociable, active, and engaged, providing your soul the experiences it
        wants. You have a talent for effectively presenting yourself at this time. You are
        captivated by everything innovative and forward-thinking. This is a moment to
        be active and adaptable, to seize possibilities as they present
        themselves.

        </p>
    
        `
    } else if (tCycleText === '6' || tCycleText === '15/6' || tCycleInt[tCycleInt.length - 1] === '6') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 6</h3> <br>
        <p>
        In the later period of your life, you are mostly concerned with family and
        community issues. You'll feel more at ease with your duties, and you'll feel
        more at peace with yourself. It's probable that you'll continue to help
        people well into your sixties or beyond, which will bring you tremendous joy.
        You may get more active in the arts by helping or educating, as well as being
        interested in public affairs or government. Your artistic abilities are
        boosted, and you will be given opportunities to express yourself. This
        is a period of security in relationships; however, it may not be romantic.
        Partnerships and family-owned enterprises have a good probability of
        succeeding.
        
        </p>
    
        `
    } else if (tCycleText === '7' || tCycleText === '16/7' || tCycleInt[tCycleInt.length - 1] === '7') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 7</h3> <br>
        <p>
        Wisdom and satisfaction are at the core of a 7 Period Cycle, especially in older
        years. This is a period of spiritual and intellectual development, as well as the
        discovery of the elegance that drives life. This might be one of the most
        challenging final cycles of life since you can feel depressive and isolated at
        times. You may feel socially aloof, lonely, and withdrawn. Try to get
        involved in various activities such as art gatherings, reading, meditation,
        religious gatherings, and spiritually engaging activities that might make you
        stay connected. <br> <br>
        Despite the fact that you are in yourlater years, this might be the most
        fascinating period of your life in termsof personal growth and revelation. You
        have the option of being alone and at one with your thoughts. You can come
        up with amazing ideas, conduct extensive research, and attempt to
        convey your findings. During this period, you study a lot and gain a lot of
        wisdom, you may become more religious, and feel more connected to
        God or sources.
        
        </p>
    
        `
    } else if (tCycleText === '8' || tCycleText === '17/8' || tCycleInt[tCycleInt.length - 1] === '8') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 8</h3> <br>
        <p>
        You'll have the ability to accomplish something you haven't done before,
        participate in a group, and desire to feel useful. It's possible to be a late starter,
        achieving success later in life such as wealth, money, and power. You
        continue to recognize chances and are thrilled about your potential when you
        approach the stage of life when most individuals want to slow down. Under
        this Period Cycle, retiring is unlikely. <br> <br>
        There's a sense of possibility in the air, both monetarily and in personal
        relationships. Others look to you for direction and support, and you win
        respect and appreciation. Your own power and influence grow, but you
        exercise it with care and respect for others. As an administrator, organizer,
        or financial planner, you have improved talents. With age, your capacity to
        perceive the big picture and carry out audacious ideas improves. However,
        this phase can be a bit of a slide ride with the possibility of unanticipated
        losses. Knowing the limitations of monetary prosperity is crucial to your
        success.
        
        </p>
    
        `
    } else if (tCycleText === '9' || tCycleText === '18/9' || tCycleInt[tCycleInt.length - 1] === '9') {
        tpCycleText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
             
            <b>Third</b> Period or Final Cycle
                - May signify the blossoming of our inner essence, bringing our
                real nature to manifestation. This is the time when you have the
                most freedom and capacity to express yourself. around 55/60
                till death.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label">Third Period Cycle 9</h3> <br>
        <p>
        You become progressively idealistic and passionate about the improvement
        of humanity as you become older. You offer a lot to others because you want
        to make a difference in the world. You may achieve the status of ultimate
        humanitarian while remaining content with your life. You broaden your
        horizons and interact with individuals from different walks of life. You donate
        your time and resources to issues that you care about. Your interests are
        becoming more and more focused on foreign cultures and societies. Your
        approach to ethics, as well as your curiosity in political and social matters,
        improves. You find yourself growing more impassioned as you get older
        when most individuals are laid back. <br> <br>
        Your creativity blossoms in your latter years, with an emphasis on design and
        huge undertakings. You could be motivated to pursue a career in
        designing, technology, or building. You can also become more intuitive
        and spiritual during this cycle. 
        </p>
    
        `
    }






    // Season Of Your Life : Pinnacle # 

    // First Pinnacle
    monthHold = Number(dMonth.value);
    dayHold = Number(dDay.value);
    yearHold = Number(dYear.value);
    dayHold, monthHold, yearHold;

    if (monthHold === 10) {
        monthHold = 1;
    } else if (monthHold === 11) {
        monthHold = 11;
    } else if (monthHold === 12) {
        monthHold = 3
    } else {
        monthHold;
    };

    if (Number(dayHold) < 10) {
        sum = Number(dayHold)
    } else if (Number(dayHold) === 10) {
        sum = 1;
    } else if (Number(dayHold) === 11) {
        sum = 11
    } else if (Number(dayHold) === 22) {
        sum = 22;
    } else if (Number(dayString) > 10) {
        mSplit = String(dayString).split('');
        sum = eval(mSplit.join('+'));

        if (sum < 10) {
            sum ;
        } else if (sum === 10) {
            sum = 1;
        } else if (sum === 11 || sum === 22 || sum === 33) {
            sum ; 
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
        }
    }

    var fpSum = monthHold + sum;
    dayHold = sum;
    var ffpHold;
    if (fpSum === 10) {
        fpSum = 1;
        ffpHold = fpSum
    } else if (fpSum === 11 ) {
        fpSum = '11/2';
        ffpHold = 11
    } else if (fpSum < 10) {
        fpSum;
        ffpHold = fpSum
    } else if (fpSum === 22) {
        fpSum = '22/4';
        ffpHold = 22
    } else if (fpSum === 33) {
        fpSum = '33/6';
        ffpHold = 33;
    } else if(fpSum > 10) {
        mSplit = String(fpSum).split('');
        sum = eval(mSplit.join('+'));
        if ( sum < 10) {
            fpSum = sum;
            ffpHold = fpSum
        } else if (sum === 10) {
            sum =1;
            fpSum = sum;
            ffpHold = 1;
        } else if (sum === 11 ) {
            sum = '11/2';
            fpSum = sum;
            ffpHold = 11;
        } else if (sum === 22) {
            sum = '22/4';
            fpSum = sum;
            ffpHold = 22;
        } else if (sum === 33) {
            sum = '33/6';
            fpSum = sum;
            ffpHold = 33;
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            if (sum < 10) {
                sum;
                ffpHold = sum;
            } else if (sum === 10) {
                sum = 1;
                ffpHold = 1;
            } else if (sum === 11) {
                sum = '11/2';
                ffpHold = 11;
            } else if (sum === 22) {
                sum = '22/4';
                ffpHold = 22;
            } else if (sum === 33) {
                sum = '33/6';
                ffpHold = 33;
            } else if (sum > 10) {
                mSplit = String(sum).split('');
                sum = eval(mSplit.join('+'));
                ffpHold = sum;
            }
            fpSum = sum
        }
    };


    fpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        fpHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            fpHold = '11/2'
        } else if (lpHoldText === '22/4') {
            fpHold = '22/4'
        } else if (lpHoldText === '33/6') {
            fpHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            fpHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }
    
    if (fpHold === 1) {
        fPin.innerHTML = 'from birth to age 35'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 2) {
        fPin.innerHTML = 'from birth to age 34'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 3) {
        fPin.innerHTML = 'from birth to age 33'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 4) {
        fPin.innerHTML = 'from birth to age 32'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 5) {
        fPin.innerHTML = 'from birth to age 31'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 6) {
        fPin.innerHTML = 'from birth to age 30'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 7) {
        fPin.innerHTML = 'from birth to age 29'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 8) {
        fPin.innerHTML = 'from birth to age 28'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === 9) {
        fPin.innerHTML = 'from birth to age 27'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === '11/2') {
        fPin.innerHTML = 'from birth to age 34'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === '22/4') {
        fPin.innerHTML = 'from birth to age 32'
        fPinNum.innerHTML = fpSum;
    } else if (fpHold === '33/6') {
        fPin.innerHTML = 'from birth to age 30'
        fPinNum.innerHTML = fpSum;
    };

    var fpinText = (fPinNum.textContent).trim();
    var fpinInt = fpinText.split('/');



    

    
if (fpinText === '1' || fpinText === '10/1' || fpinInt[fpinInt.length - 1] === '1') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 1</h3> <br>
    <p>
    It's all about being a leader, becoming self-sufficient, and knowing how to be
    strong without being confrontational in your early years. This young defining
    moment encourages you to go alone, to establish your own uniqueness, and
    build something unique. It is preferable to lead instead of being led throughout
    this time. You may be disappointed simply because people will be in a
    higher position to lead you early in life, and they might not accept your displays
    of individualism. It is not your job to be obstinate and self-centered in your
    response, just be you. <br> <br>
    You will be more self-reliant, confident, ambitious, and desire freedom. You
    can be pushed into a leadership role. You may face several difficulties or
    barriers on your way to being selfsufficient. You might be self-centered,
    selfish, and individualistic because you desire to be alone. During this period,
    singleness or separation are common. Recognize that the goal at this level is
    for you to be self-sufficient, resourceful, and innovative.
    </p>

    `
} else if (fpinText === '11/2' || fpinInt[0] === '11') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label blue">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 11/2</h3> <br>
    <p>
    You're a sensitive person who may also be idealistic. You wish the world was a
    better place. Possessing the very strong 11 energy may allow you to get
    public attention early in life. Much is required of you during these years, and
    you may experience anxious strain as a result. Your mission is to use the
    knowledge, inspiration, and even innovative brilliance that has been
    bestowed upon you to improve the lives of others. Understand that most
    children that startup with a master's 11 have a difficult childhood or come from
    broken homes at times. <br> <br>
    In your youth, your stories and experiences will inspire and influence
    others. It's possible that you'll acquire psychic talents and experience a 
    spiritual awakening. You'll have a strong sense of intuition and may have
    constant visions. You’ll be connected to the spiritual realm. You can work your
    way up to a position of leadership, becoming well-known and influential.
    You will face several trials in order to develop your strength.
    </p>

    `
} else if (fpinText === '22/4' || fpinInt[0] === '22') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label blue">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 222/4</h3> <br>
    <p>
    You'll struggled to use this energy in your childhood because you'll
    be terrified of its strength, and you'll be forced to learn responsibility and
    discipline in your profession. Dedication and tenacity learned today will
    undoubtedly pay off later. <br><br>
    Having the extremely high vibration of 22 allows you to blend material
    interests with your greatest objectives. As a result, you will be able to create
    something substantial that will help others. Your challenge is to learn to
    wield the immense power that has been bestowed upon you at such a
    young age for the greater good of society. This will earn you a reputation
    that you will cherish for the rest of your existence. Though if you work hard,
    you can build something long-lasting and profitable for society. 
    </p>

    `
} else if (fpinText === '33/6' || fpinInt[0] === '33') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 33/6</h3> <br>
    <p>
    You’ll be more concerned with your family and community. You have a lot
    of potentials to better yourself and your life. You will be focused on your home,
    family, and community. 
    </p>

    `
} else if (fpinText === '2' ||fpinText === '20/2' || fpinInt[fpinInt.length - 1] === '2') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 2</h3> <br>
    <p>
    When you're young, you're sensitive, with powerful sentiments that you can't
    handle, and you're emotional. You may be battling a propensity to be shy and
    easily hurt at your juvenile-defining moment, and you may have a deep
    affinity with your family. It also gives you the opportunity to learn how to
    operate as part of a group and strengthen your diplomatic and
    peacemaking abilities. <br> <br>
    As a result, you must learn how to collaborate, comprehend, be kind,
    cooperate, be a team player, and work with others. If you try to do tasks on
    your own, you may not succeed. 
    </p>

    `
} else if (fpinText === '3' || fpinText === '12/3' || fpinText === '21/3' || fpinInt[fpinInt.length - 1] === '3') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label ">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 3</h3> <br>
    <p>
    You'll be disorganized and distracted, with a lot of creative energy but again
    no idea how to use it. These young defining moment provides an
    opportunity to grow socially and creatively. Try to be happy and
    inventive. You'll need to educate yourself to apply consistency and not
    disperse your efforts if you want to maximize your creative abilities. After
    then, you may get the opportunity to luxuriate in the spotlight and revel in
    the adulation. <br> <br>
    During your teen period, you will be very creative, and able to speak and
    express yourself more effectively than ever before. You may become famous,
    be outgoing and attract friends. You should be able to navigate across all
    forms of creation. Gardening, decorating, designing, cooking, writing,
    podcasting, social networking, internet, acting, dancing, singing, and other
    similar activities are examples.
    </p>

    `
} else if (fpinText === '4' || fpinText === '13/4' || fpinInt[fpinInt.length - 1] === '4') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label blue">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 4</h3> <br>
    <p>
    You either have too much responsibility to do regular child
    activities, or you have to be too realistic and concentrate on other things. This
    adolescent defining moment may leave you with no or little time to enjoy the
    delights of childhood, but it does provide an opportunity to develop workrelated devotion and discipline. You will
    reap the benefits of your dedication and  tenacity in the future. <br><br>
    In your 20s, you might anticipate  discovering the genuine purpose of
    work. You will put forth a lot of effort  and eventually succeed. You will
    experience several hurdles and  setbacks in order to become more
    motivated, focused, organized, selfdisciplined, and detail-oriented. You
    may lay a solid foundation and achieve more stability and equilibrium. It is
    possible to purchase a home and build your career. Know that many young
    individuals who got a first pinnacle number 4 may struggle to work hard to
    build a foundation in their early years due to a lack of knowledge or focus. 
    </p>

    `
} else if (fpinText === '5' || fpinText === '14/5' || fpinInt[fpinInt.length - 1] === '5') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 5</h3> <br>
    <p>
    You may suffer a lack of consistency in your life and be subjected to continual
    change. You are reluctant to obey the rules, which might lead to difficulties.
    This young defining moment provides opportunities for travel, creative
    approaches, and perhaps a new way of life. Face your fears front on, and you'll
    be well on your way to developing your personality for the following stage. You
    have a way of dealing with people, and  you can now use it to your advantage.
    You may feel insecure and directionless at this time, and you'll
    need to delay for a more appropriate time to lay a pleasingly strong
    foundation for your adult years. <br> <br>
    During this period, you should expect a lot of changes and transitions. You may
    relocate many times, travel, or change jobs. You'll want to be more
    adventurous, have more friends, and have more fun. You will be more
    independent, and freedom will be more vital to you than ever before. You may
    learn to be more extroverted and communicate more effectively. You'll
    become more adaptive, flexible, curious, cheerful, and energetic as a
    result of this experience. On the bad side, you risk becoming unstable,
    unpredictable, and addicted to drugs, alcohol, sex, and other substances.
    Learn to be self-disciplined and concentrate on your goals and
    adventures.

    </p>

    `
} else if (fpinText === '6' || fpinText === '15/6' || fpinInt[fpinInt.length - 1] === '6') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 6</h3> <br>
    <p>
    You have quite a lot of responsibilities as a young child, and you must devote
    a lot of your time and energy to your family. This adolescent-defining
    moment may prompt you to assume major home duties at a young age,
    depriving you of a pleasant upbringing. If you accept these obligations
    gracefully, you may indeed be rewarded with love, stability, protection,
    commitment, and compassion, which you may offer and receive. This major
    shift might also be an early marriage that occurs while you're still too young
    to marry and have kids. <br><br>
    Therefore, the major goal of this pinnacle is to promote home, family,
    and community service. During this  time, you may fall in love and
    get married. You'll have to be more domestic, and you'll be responsible for
    a lot of things. Purchasing a home, starting a family, and having children
    are all regular activities. You might become a caregiver for family
    members, strangers, or children. You may face several obstacles in your
    quest to become more domestic and helpful. During this time commitment
    are important and if your relationship is broken this may lead to a separation or
    divorce at an early age.
    </p>

    `
} else if (fpinText === '7' || fpinText === '16/7' || fpinInt[fpinInt.length - 1] === '7') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 7</h3> <br>
    <p>
    You're a great learner, even though you're a teenager. You're different from
    the other youngsters in that you're more serious and intelligent. When
    you're young, this defining moment may provide the issue of loneliness and
    alienation. It's conceivable that you'll be refused the knowledge you want or that
    your family may exert pressure on you to learn and study. If you're fortunate,
    you'll be allowed to retreat to your room to read and fantasize. This will allow
    you to establish a profound meaning of life that will last you a lifetime. <br> <br>
    Know that you can become more introspective and analytical, and you'll
    have a greater mental capacity to study for a degree. You’ll be very intuitive,
    and you'll have clear visions or spiritual awakenings. You could feel more
    spiritual, religious, or connected to God or other sources. The negative side is
    that you may become aloof, distant, withdrawn, paranoid, depressed, anxious, sad, and lonely at times. 
    </p>

    `
} else if (fpinText === '8' || fpinText === '17/8' || fpinInt[fpinInt.length - 1] === '8') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>
        
        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 8</h3> <br>
    <p>
    You're realistic and hardworking, with a keen business sense from an early 
    age. You have the opportunity to begin your career sooner than the majority of
    others. These young defining moment requires you to cope with money and
    influence, maybe at the sacrifice of having fun. Develop your organizing
    skills, learn how to work hard, and set your sights on achievement. Early in
    life, the talents you learn and the financial comfort you obtain can act as
    a base for future pursuits. <br> <br>
    (In your 20s) You can anticipate gaining a great deal of personal power,
    money, and prosperity. You'll be ambitious, self-assured, well-organized, 
    motivated, goal-oriented, and laserfocused. While you don't have to put in
    a lot of effort, money will come easily. During this period, you will gain a
    variety of skills. You could also be placed in a position of authority, so be
    careful not to misuse it. Do things the correct way and don't cheat or steal to
    get rich fast since this energy will compel you to seek more in life. Make
    an effort to be disciplined and to have a strategy for success. 
    It's harvest season, and it's time to reap what
    you've sown. Be generous and respectful of others. During this time,
    manifest whatever you desire. It's a great moment to start your own
    business and be your own boss, and everything you do will be a success.
    You might be excessively dominating, greedy, stubborn, aggressive, and
    materialistic on the bad side.


    </p>

    ` 
} else if (fpinText === '9' || fpinText === '18/9' || fpinInt[fpinInt.length - 1] === '9') {
    fpPinText.innerHTML = `
    <h3 class="bold-description-label">Definition</h3> <br>
    <p>
        Pinnacles are four unique stages of growth that occur throughout our
        lifetimes. In addition to your Life Path Number, the pinnacles are the
        energies that surround and influence you during each designated era
        of your life. Each Pinnacle Number denotes the lessons that must be
        learned and understood during a specific time period. The longest
        periods of time are found at the start and conclusion of your life, with
        two 9-year cycles in the between that frequently correspond to the
        energies associated with your Personal Year Cycle. It's also beneficial
        to be aware of the challenge and period cycle number associated with
        each pinnacle. Your Life Path # determines your age at each stage.
        Pinnacles' number is calculated as follows: Add each # till reaching a
        single digit. <br> <br>

        First Pinnacle = Month of Birth + Day of Birth (3 decades)
       </p> <br> <br>
    
    <h3 class="bold-description-label blue">First Pinnalce Number 9</h3> <br>
    <p>
    You're a young humanitarian who tries to help people who can't help
    themselves. This adolescent defining moment may bring change or loss to
    you at a young age with a lot of endings. It may be extremely
    challenging for a young person to deal with the tremendous stress involved, as 
    well as to love and give without expecting anything in return.
    Nonetheless, happiness can be found at a 9 energy. The further you face this
    difficulty; the more wonderful life appears to you. You may indeed be
    able to attain wealth, money, and fame early in life if you strive for the welfare
    of others. <br> <br>
    (In or after teen years) You will grow in spirituality, charity, and self-sacrifice.
    The difficulties arise when you are placed in a position of caring for others,
    such as other individuals, children (sometimes alone), family members, or
    society in general. Many people will gravitate toward you and may
    constantly want your assistance, and you will be seen as a hero who always
    saves the day. During this period, you can also start a family and have
    children. You may experience losses, beginnings, and endings of things,
    relationships, and so on are all levels.
    </p>

    `
} 

    // Second Pinnacle 
    dayHold;
    yearHold = Number(dYear.value);
    mSplit = String(yearHold).split('');
    sum = eval(mSplit.join('+'));
    if (sum === 10) {
        sum = 1;
    } else if (sum === 11) {
        sum = 11;
    } else if (sum === 22) {
        sum = 22;
    } else if (sum === 33) {
        sum = 33;
    } else if (sum < 10) {
        sum;
    } else {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum = 1
        } else if (sum === 11 || sum === 22 || sum === 33) {
            sum;
        } else if (sum > 10) {
            dbSplit = String(sum).split('');
            sum = eval(dbSplit.join('+'));
        }
    };
    yearHold = sum;
    var spSum = dayHold + yearHold;
    var sspSum;

    if (spSum < 10) {
        spSum;
        sspSum =spSum;
    } else if (spSum === 10) {
        spSum = 1;
        sspSum = spSum;
    } else if (spSum === 11 ) {
        spSum = '11/2';
        sspSum = 11;
    } else if (spSum === 22) {
        spSum = '22/4';
        sspSum = 22;
    } else if(spSum === 33) {
        spSum = '33/6';
        sspSum = 33
    } else if (spSum > 10) {
        mSplit = String(spSum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
            sspSum = sum;
        } else if (sum === 10) {
            sum = 1;
            sspSum = 1;
        } else if (sum === 11) {
            sum = '11/2';
            sspSum = 11;
        } else if (sum === 22) {
            sum = '22/4';
            sspSum = 22;
        } else if (sum === 33) {
            sum = '33/6';
            sspSum = 33
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            sspSum = sum;
        }
        spSum = sum;
    };


    spHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        spHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            spHold = '11/2'
        } else if (lpHoldText === '22/4') {
            spHold = '22/4'
        } else if (lpHoldText === '33/6') {
            spHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            spHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }

    if (spHold === 1) {
        sPin.innerHTML = 'from age 36 to 44';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 2) {
        sPin.innerHTML = 'from age 35 to 43';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 3) {
        sPin.innerHTML = 'from age 34 to 42';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 4) {
        sPin.innerHTML = 'from age 33 to 41';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 5) {
        sPin.innerHTML = 'from age 32 to 40';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 6) {
        sPin.innerHTML = 'from age 31 to 39';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 7) {
        sPin.innerHTML = 'from age 30 to 38';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 8) {
        sPin.innerHTML = 'from age 29 to 37';
        sPinNum.innerHTML = spSum;
    } else if (spHold === 9) {
        sPin.innerHTML = 'from age 28 to 36';
        sPinNum.innerHTML = spSum;
    } else if (spHold === '11/2') {
        sPin.innerHTML = 'from age 35 to 43';
        sPinNum.innerHTML = spSum;
    } else if (spHold === '22/4') {
        sPin.innerHTML = 'from age 33 to 41';
        sPinNum.innerHTML = spSum;
    } else if (spHold === '33/6') {
        sPin.innerHTML = 'from age 31 to 39';
        sPinNum.innerHTML = spSum;
    };
    var spinText = (sPinNum.textContent).trim();
    var spinInt = spinText.split('/');

    if (spinText === '1' || spinText === '10/1' || spinInt[spinInt.length - 1] === '1') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 1</h3> <br>
        <p>
        During this period, you’ll stand up for yourself, do what you want, and can do
        everything you set your mind to. This  might be a fruitful period for you. You
        will be more self-reliant, confident, ambitious, and desire freedom. You
        can be pushed into a leadership role. You may face several difficulties or
        barriers on your way to being selfsufficient. You might be self-centered,
        selfish, and individualistic because you desire to be alone. During this period,
        singleness, separation, and divorce are common. Recognize that the goal at
        this level is for you to be self-sufficient, resourceful, and innovative. 
        </p>
    
        `
    } else if (spinText === '11/2' || spinInt[0] === '11') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 11/2</h3> <br>
        <p>
        During this period, your idealistic inclination has become more
        prominent, and it motivates you in all you do. You grow spiritually as well.
        Your stories and experiences will inspire others. It's possible that you'll
        acquire psychic talents and experience  a spiritual awakening. You'll have a
        strong sense of intuition. You can work your way up to a position of leadership,
        becoming well-known and influential. You will face several trials in order to
        develop your strength. You can collaborate effectively with others and
        be more understanding, accepting, and compassionate. You can find love,
        soulmate, and twin flame during this time.

        </p>
    
        `
    } else if (spinText === '22/4' || spinInt[0] === '22') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 22/4</h3> <br>
        <p>
        The following nine years of this pinnacle will challenge your capacity to
        put your principles into action in the physical world to trial. Master number
        22 can help you achieve tremendous success and riches. It is important to
        use the power you will have at this time for the greater good of society rather
        than for your own benefit. As you learn to acclimatize to the demands of this
        extremely high and strong energy, you may experience increased mental
        strain. You need to create something that will serve the community or the
        world. If you work hard, you can build something long-lasting for society and it
        will benefit your future generation. So be creative and come up with great
        ideas, and your hard work will pay off. 
        </p>
    
        `
    } else if (spinText === '33/6' || spinInt[0] === '33') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 33/6</h3> <br>
        <p>
        You have a lot of potentials to better yourself and your life. You become the
        master instructor, and your wisdom may have a huge influence. You will be
        involved with family and community. 
        </p>
    
        `
    } else if (spinText === '2' || spinText === '20/2' || spinInt[spinInt.length - 1] === '2') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 2</h3> <br>
        <p>
        You need to be patient and practical As a result, you must learn how to
        collaborate, comprehend, be kind, cooperate, be a team player, and work
        with others. If you try to do tasks on your own, you may not succeed. This is
        also a good time to look for love. You may also find your soulmate and twin
        flame during this time. Though, you may be oversensitive and feel
        depressed at times. 
        </p>
    
        `
    } else if (spinText === '3' || spinText === '12/3' || spinText == '21/3' || spinInt[spinInt.length - 1] === '3') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 3</h3> <br>
        <p>
        During this period, you will be very creative, and able to speak and
        express yourself more effectively than ever before. You may become famous,
        have children, be outgoing, and attract friends. You should be able to navigate
        across all forms of creation. Gardening, decorating, designing, cooking, writing,
        podcasting, social networking, acting, dancing, singing, and other similar
        activities are examples.
        
        </p>
    
        `
    } else if (spinText === '4' || spinText === '13/4' || spinInt[spinInt.length - 1] === '4') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 4</h3> <br>
        <p>
        You might anticipate discovering the genuine purpose of work. If you work
        harder, you may build a foundation slowly, with patience, and achieve
        success. You will experience several hurdles and setbacks in order to
        become more motivated, focused, organized, self-disciplined, and 
        detailoriented. This is a time to lay a solid foundation and achieve more financial
        stability and equilibrium. It is possible to start a family or purchase a home.
        Career and work are very important during this period. 
        </p>
    
        `
    } else if (spinText === '5' || spinText === '14/5' || spinInt[spinInt.length - 1] === '5') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 5</h3> <br>
        <p>
        During this period, you should expect a lot of changes and transitions. You can
        succeed if you are able to go with the flow. You yearn for greater freedom
        and desire to travel. You may relocate many times, travel, or change jobs.
        You'll want to be more adventurous, have more friends, and have more fun.
        You will be more independent, and freedom will be more vital to you than
        ever before. You may learn to be more extroverted and communicate more
        effectively. You'll become more adaptive, flexible, curious, cheerful, and
        energetic as a result of this experience. On the bad side, you risk becoming
        unstable, unpredictable, and addicted to drugs, alcohol, sex, and other
        substances. Learn to be self-disciplined and concentrate on your goals and
        adventures.
        
        </p>
    
        `
    } else if (spinText === '6' || spinText === '15/6' || spinInt[spinInt.length - 1] === '6') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 6</h3> <br>
        <p>
        The major goal of this pinnacle is to promote the home, family, and
        community service. During this time, you may fall in love and get married.
        You'll have to be more domestic, and you'll be responsible for a lot of things.
        Purchasing a home, starting a family, and having children are all common.  <br>
        You might become a caregiver for family members, strangers, or children.
        You may face several obstacles in your quest to become more domestic and
        helpful. Separation and divorce may occur if a commitment is not made or if
        your current partnership is broken. This is a moment for self-sacrifice as well as
        experiencing and being loved.

        </p>
    
        `
    } else if (spinText === '7' || spinText === '16/7' || spinInt[spinInt.length - 1] === '7') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 7</h3> <br>
        <p>
        This is a time you can achieve intellectual, emotional, and spiritual
        improvement, but you won't see much money growth. Know that you can
        become more introspective and analytical, and you'll have a greater
        mental capacity to study for a degree. It's possible that your psychic powers
        may grow, and you'll have visions and spiritual awakenings. You could feel
        more spiritual, religious, or connected to God or other sources. The negative
        side is that you may become aloof, distant, withdrawn, paranoid, sad, and
        lonely at times. 
        </p>
    
        `
    } else if (spinText === '8' || spinText === '17/8' || spinInt[spinInt.length -1] === '8') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 8</h3> <br>
        <p>
        During this time, you are more practical and less irrational, and you desire to be
        successful in life. You can anticipate gaining a great deal of personal power,
        money, and prosperity. You'll be ambitious, self-assured, well-organized,
        motivated, goal-oriented, and laserfocused. While you don't have to put in
        a lot of effort, money will come easily. During this period, you will gain a
        variety of skills. You could also be placed in a position of authority, so be
        careful not to misuse or abuse it. Do things the correct way and don't cheat
        or steal to get rich fast since this energy will compel you to seek more in life.
        Make an effort to be disciplined and to have a strategy for success. It's harvest
        season, and it's time to reap what you've sown. Be generous and
        respectful of others. During this time, manifest whatever you desire. It's a
        great moment to start your own business and be your own boss, and
        everything you do will be a success. You might be excessively dominating,
        greedy, stubborn, aggressive, and materialistic on the bad        
        </p>
    
        `
    } else if (spinText === '9' || spinText === '18/9' || spinInt[spinInt.length - 1] === '9') {
        spPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
    
            Second Pinnacle = Day of Birth + Year of Birth (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Second Pinnalce Number 9</h3> <br>
        <p>
        You have a broader perspective on the world and wish to make a significant
        contribution to it. You have the ability to be charitable and empathetic. <br> <br>
        You'll start to care more about society and other people. You will grow in
        spirituality, charity, and self-sacrifice. The difficulties arise when you are
        placed in a position of caring for others, such as other individuals, children
        (sometimes alone), family members, or society in general. Many people will
        gravitate toward you and may constantly want your assistance, and
        you will be seen as a hero who always saves the day. During this period, you
        can also start a family and have children. You may also experience
        losses, beginnings, and endings of things, relationships, and so on are all
        possibilities.
        
        </p>
    
        `
    }
    


    // Third Pinnacle Cycle 
    var tpSum = ffpHold + sspSum;
    // console.log(tpSum, ffpHold, sspSum)

    if (tpSum < 10) {
        tpSum;
    } else if (tpSum === 10) {
        tpSum = 1;
    } else if (tpSum === 11 ) {
        tpSum = '11/2';
    } else if (tpSum === 22) {
        tpSum = '22/4'
    } else if (tpSum === 33) {
        tpSum = '33/6'
    } else if (tpSum > 10) {
        mSplit = String(tpSum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
            tpSum = sum;
        } else if (sum === 10) {
            sum = 1;
            tpSum = sum;
        } else if (sum === 11) {
            sum = '11/2';
            tpSum = sum;
        } else if (sum === 22) {
            sum = '22/4';
            tpSum = sum;
        } else if (sum === 33) {
            sum = '33/6';
            tpSum = sum;
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            tpSum = sum
        }
        
    };
    tpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;

    if (lpHoldList.length === 1) {
        tpHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            tpHold = '11/2'
        } else if (lpHoldText === '22/4') {
            tpHold = '22/4'
        } else if (lpHoldText === '33/6') {
            tpHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            tpHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }

    if (tpHold === 1) {
        tPin.innerHTML = 'from age 45 to 53';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 2) {
        tPin.innerHTML = 'from age 44 to 52';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 3) {
        tPin.innerHTML = 'from age 43 to 51';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 4) {
        tPin.innerHTML = 'from age 42 to 50';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 5) {
        tPin.innerHTML = 'from age 41 to 49';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 6) {
        tPin.innerHTML = 'from age 40 to 48';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 7) {
        tPin.innerHTML = 'from age 39 to 47';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 8) {
        tPin.innerHTML = 'from age 38 to 46';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === 9) {
        tPin.innerHTML = 'from age 37 to 45';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === '11/2') {
        tPin.innerHTML = 'from age 44 to 52';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === '22/4') {
        tPin.innerHTML = 'from age 42 to 50';
        tPinNum.innerHTML = tpSum
    } else if (tpHold === '33/6') {
        tPin.innerHTML = 'from age 40 to 48';
        tPinNum.innerHTML = tpSum
    };

    var tPinText = (tPinNum.textContent).trim();
    var tPintInt = tPinText.split('/');

    if (tPinText === '1' || tPinText === '10/1' || tPintInt[tPintInt.length - 1] === '1') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 1</h3> <br>
        <p>
        You stand up for yourself, do what you want, and can do everything you set
        your mind to. This might be a  successful period for you. It is
        increasingly preferred to work alone or to be the boss. You will 
        be more selfreliant, confident, ambitious, and desire
        freedom. You can be pushed into a leadership role. You may face several
        difficulties or barriers on your way to being self-sufficient. You might
        be selfcentered, selfish, and individualistic because you desire to be alone. During
        this period, singleness, separation, and divorce are common. Recognize that
        the goal at this level is for you to be  self-sufficient, resourceful, and
        innovative. 
        </p>
    
        `
    } else if (tPinText === '11/2' || tPintInt[0] === '11') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 11/2</h3> <br>
        <p>
        During this period, your idealistic side is more prominent, and it motivates you in
        all you do. You also grow more spiritual. Your stories and experiences
        will inspire others. It's possible that you'll acquire psychic talents and
        experience a spiritual awakening. You'll have a strong sense of intuition. You
        can work your way up to a position of leadership, becoming well-known and
        influential. You will face several trials in order to develop your strength. During
        this time, you can collaborate well with others and have more friends. You can
        also find love if you are single or strengthen your existing relationship.
        You can meet your soulmate or twin flame as well.
        
        </p>
    
        `
    } else if (tPinText === '22/4' || tPintInt[0] === '22') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 22/4</h3> <br>
        <p>
        Possessing the master number 22 energy when you are in the bloom of
        your life is a wonderful gift, because this is the period when you can make
        the most impact. This is your chance to create something big and earn a lot of
        money. It is important to use the strength you will have at this time for
        the greater good of the community rather than for your own benefit. You
        will put a lot of hard work to create something long-lasting for society and
        your future generation will benefit from it. 

        </p>
    
        `
    } else if (tPinText === '33/6' || tPintInt[0] === '33') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 33/6</h3> <br>
        <p>
        You have a lot of potentials to better yourself and your life. You become the
        master instructor, and your wisdom may have a huge influence. You’ll still
        be involved with family and community
        </p>
    
        `
    } else if (tPinText === '2' || tPinText === '20/2' || tPintInt[tPintInt.length - 1] === '2') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 2</h3> <br>
        <p>
        The majority of your achievement is due to the support of a partnership or
        others. Patience and practicality are required. As a result, you must learn
        how to collaborate, comprehend, be kind, cooperate, be a team player, and
        work with others. If you try to do tasks on your own, you may not succeed.
        This is also a good time to look for love. <br> <br>
        The 2 energies in your peak allow you to figure out your fate through marriage
        or business collaboration. Finding a balance among equals is the
        fundamental lesson of a relationship. This entails not just learning to love, but
        also learning to battle, or finding a kinder approach to meet both your own
        and your partner's demands.
        </p>
    
        `
    } else if (tPinText === '3' || tPinText === '12/3' || tPintInt[tPintInt.length - 1] === '3') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 3</h3> <br>
        <p>
        During this period, you will be very creative, and able to speak and
        express yourself more effectively than ever before. You may become famous,
        have children, and you'll be more outgoing and attract friends. You
        should be able to navigate across all forms of creation. Gardening, 
        During this period, you will be very creative, and able to speak and
        express yourself more effectively than ever before. You may become famous,
        have children, and you'll be more outgoing and attract friends. You
        should be able to navigate across all forms of creation. Gardening, 
        </p>
    
        `
    } else if (tPinText === '4' || tPinText === '13/4' || tPintInt[tPintInt.length - 1] === '4') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 4</h3> <br>
        <p>
        You might anticipate discovering the genuine purpose of work. If you work
        harder, you may create a foundation slowly, with patience, and achieve
        success. You will experience several hurdles and setbacks in order to
        become more motivated, focused, organized, self-disciplined, and 
        detail-oriented. You may lay a solid foundation and achieve more stability
        and equilibrium. It is possible to start a family or purchase a home during this
        time. You’ll also be more focused on your work career and achieving your
        goal.
        </p>
    
        `
    } else if (tPinText === '5' || tPinText === '14/5' || tPintInt[tPintInt.length - 1] === '5') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 5</h3> <br>
        <p>
        During this period, you should expect a lot of changes and transitions. You can
        succeed if you are able to go with the flow. You yearn for greater freedom
        and desire to travel. You may relocate many times, travel, or change jobs.
        You'll want to be more adventurous, have more friends, and have more fun.
        You will be more independent, and freedom will be more vital to you than
        ever before. You may learn to be more extroverted and communicate more
        effectively. You'll become more adaptive, flexible, curious, cheerful, and
        energetic as a result of this experience. On the bad side, you risk becoming
        unstable, unpredictable, and addicted to drugs, alcohol, sex, and other
        substances. Learn to be self-disciplined and concentrate on your goals and
        adventures.
        </p>
    
        `
    } else if (tPinText === '6' || tPinText === '15/6' || tPintInt[tPintInt.length - 1] === '6') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 6</h3> <br>
        <p>
        The major goal of this pinnacle is to promote the home, family, and
        community service. During this time, you may fall in love and get married.
        You'll have to be more domestic, and you'll be responsible for a lot of things.
        Purchasing a home, starting a family, and having children are all major
        events. You might become a caregiver for family members, strangers, or
        children. You may face several obstacles in your quest to become
        more domestic and helpful. Good time to start a business. Divorce or
        separation is common if relationships are broken. 
        </p>
    
        `
    } else if (tPinText === '7' || tPinText === '16/7' || tPintInt[tPintInt.length - 1] === '7') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 7</h3> <br>
        <p>
        You can achieve intellectual, emotional, and spiritual improvement, but you
        won't see much money progress. Know that you can become more
        introspective and analytical, and you'll have a greater mental capacity to study
        for a degree. It's possible that your psychic powers may grow, and you'll
        have visions and spiritual awakenings. You could feel more spiritual, religious,
        or connected to God or other sources. The negative side is that you may
        become aloof, distant, withdrawn, paranoid, sad, and lonely at times.
        </p>
    
        `
    } else if (tPinText === '8' || tPinText === '17/8' || tPintInt[tPintInt.length - 1] === '8') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 8</h3> <br>
        <p>
        You are more practical and less irrational, and you desire to be
        successful in life. You can anticipate gaining a great deal of personal power,
        money, and prosperity. You'll be ambitious, self-assured, well-organized,
        motivated, goal-oriented, and laserfocused. While you don't have to put in
        a lot of effort, money will come easily.  <br>
        During this period, you will gain a variety of skills. You could also be
        placed in a position of authority, so be careful not to misuse it. Do things the
        correct way and don't cheat or steal to get rich fast since this energy will
        compel you to seek more in life. Make an effort to be disciplined and to have a
        strategy for success. It's harvest season, and it's time to reap what
        you've sown. Be generous and respectful of others. During this time,
        manifest whatever you desire. It's a great moment to start your own
        business and be your own boss, and everything you do will be a success.
        You might be excessively dominating, greedy, stubborn, aggressive, and
        materialistic on the bad side.
        </p>
    
        `
    } else if (tPinText === '9' || tPinText === '18/9' || tPintInt[tPintInt.length - 1] === '9') {
        tpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Third Pinnacle = First Pinnacle + Second Pinnacle (lasted 9 years)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Third Pinnalce Number 9</h3> <br>
        <p>
        You have a broader perspective on the world and wish to make a significant
        contribution to it. You have the ability to be charitable and empathetic. <br> <br>
        You'll start to care more about society and other people. You will grow in
        spirituality, charity, and self-sacrifice. The difficulties arise when you are
        placed in a position of caring for others, such as other individuals, children
        (sometimes alone), family members, or society in general. Many people will
        gravitate toward you and may constantly want your assistance, and
        you will be seen as a hero who always saves the day. During this period, you
        can also start a family and have children. You may have losses,
        beginnings, and endings on things, relationships, and so on are all
        possibilities.
        </p>
    
        `
    } 


    // fourth pinnacle 
    var ftSum = monthHold + yearHold;

    if (ftSum === 10) {
        ftSum = 1;
    } else if (ftSum < 10) {
        ftSum;
    } else if(ftSum === 11) {
        ftSum = '11/2'
    } else if (ftSum === 22) {
        ftSum = '22/4'
    } else if(ftSum === 33) {
        ftSum = '33/6'
    } else if (ftSum > 10) {
        mSplit = String(ftSum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum = 1
        } else if (sum === 11) {
            sum = '11/2'
        } else if ( sum === 22 ) {
            sum = '22/4'
        } else if (sum === 33) {
            sum === '33/6';
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));
            if (sum < 10) {
                sum;
            } else if (sum === 10) {
                sum = 1
            } else if (sum === 11) {
                sum = '11/2'
            } else if ( sum === 22 ) {
                sum = '22/4'
            } else if (sum === 33) {
                sum === '33/6';
            } else if (sum > 10) {
                mSplit = String(sum).split('');
                sum = eval(mSplit.join('+'));
            }
        }
        ftSum = sum;
    };
    console.log(ftSum)
    
    fpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        fpHold = Number(lpHoldText)
    } else if (lpHoldList.length > 1) {
        if (lpHoldText === '11/2') {
            fpHold = '11/2'
        } else if (lpHoldText === '22/4') {
            fpHold = '22/4'
        } else if (lpHoldText === '33/6') {
            fpHold = '33/6'
        } else if (lpHoldList[lpHoldList.length - 1] < 10) {
            fpHold = Number(lpHoldList[lpHoldList.length - 1])
        }
    }

    if (fpHold === 1) {
        ftPin.innerHTML = 'from age 54 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 2) {
        ftPin.innerHTML = 'from age 53 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 3) {
        ftPin.innerHTML = 'from age 52 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 4) {
        ftPin.innerHTML = 'from age 51 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 5) {
        ftPin.innerHTML = 'from age 50 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 6) {
        ftPin.innerHTML = 'from age 49 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 7) {
        ftPin.innerHTML = 'from age 48 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 8) {
        ftPin.innerHTML = 'from age 47 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === 9) {
        ftPin.innerHTML = 'from age 46 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === '11/2') {
        ftPin.innerHTML = 'from age 53 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === '22/4') {
        ftPin.innerHTML = 'from age 51 and on';
        ftPinNum.innerHTML = ftSum;
    } else if (fpHold === '33/6') {
        ftPin.innerHTML = 'from age 49 and on';
        ftPinNum.innerHTML = ftSum;
    };

    var ftText = (ftPinNum.textContent).trim();
    var ftInt = ftText.split('/');

    if (ftText === '1' || ftText === '10/1' || ftInt[ftInt.length - 1] === '1') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 1</h3> <br>
        <p>
        You want to keep moving forward in life, express yourself, and be in
        command. You’ll have the energy to work, be self-reliant, and desire
        freedom. You might be self-centered, selfish, and individualistic because you
        desire to be alone. It is possible to find yourself alone or living alone during this
        time. 
        
        </p>
    
        `
    } else if (ftText === '11/2' || ftInt[0] === '11') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 11/2</h3> <br>
        <p>
        During this period, you’re spiritually enlightened, and your activity will be
        centered on assisting others. Your stories and experiences will inspire
        others. It's possible that you'll acquire psychic talents and experience a
        spiritual awakening. You'll have a strong sense of intuition. You’ll attract
        many friends and you’ll be very corporate in working with others. 
        </p>
    
        `
    } else if (ftText === '22/4' || ftInt[0] === '22') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 22/4</h3> <br>
        <p>
        This master number 22 requires you to put your principles into action for the
        greater good. You should develop something that will benefit people or
        society for an extended period of time. Therefore, you are the master builder,
        with a long history of success and engagement. You’ll be working in your
        later years to achieve your goal or to build a foundation for future
        generations.
        
        </p>
    
        `
    } else if (ftText === '33/6' || ftInt[0] === '33') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 33/6</h3> <br>
        <p>
        You have a lot of potentials to better yourself and your life. You become the
        master instructor, and your wisdom may have a huge influence. You’ll be
        involved with your family and community. 
        </p>
    
        `
    } else if (ftText === '2' || ftText === '20/2' || ftInt[ftInt.length - 1] === '2') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 2</h3> <br>
        <p>
        You're still sensitive, but you want to be among others and have a quiet
        existence. At this time, you will be more collaborative, comprehending, kind,
        compassionate, and a team player
        </p>
    
        `
    } else if (ftText === '3' || ftText === '12/3' || ftInt[ftInt.length - 1] === '3') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 3</h3> <br>
        <p>
        During this period, you may travel extensively, make a large number of
        friends, and not be concerned about money. You will be very creative, able
        to speak and express yourself more effectively than ever before, you may
        become famous, you'll be outgoing and attract friends. You should be able to
        navigate across all forms of creation. Gardening, decorating, designing,
        cooking, writing, podcasting, social networking, acting, dancing, singing,
        and other similar activities are examples.
        </p>
    
        `
    } else if (ftText === '4' || ftText === '13/4' || ftInt[ftInt.length - 1] === '4') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 4</h3> <br>
        <p>
        You keep working hard and don't quit what you're doing. It's time to start
        laying a foundation for the future by purchasing or building a home.
        You might anticipate discovering the genuine purpose of work. You will put
        forth a lot of effort and eventually succeed. You’ll become more
        motivated, focused, organized, selfdisciplined, and detail-oriented. You 
        may lay a solid foundation and achieve more stability and equilibrium. 
        </p>
    
        `
    } else if (ftText === '5' || ftText === '14/5' || ftInt[ftInt.length - 1] === '5') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 5</h3> <br>
        <p>
        During this period, you still have a lot of changes in your life, you like diversity,
        and you don't have any financial or family concerns. You should expect a
        lot of changes and transitions. You may relocate many times and travel the
        world. You'll want to be more adventurous, have more friends, and
        have more fun. Independent and freedom are more vital to you than ever
        before. You may learn to be more extroverted and communicate more
        effectively. You'll become more adaptive, flexible, curious, cheerful, and
        energetic as a result of this experience. On the bad side, you risk becoming
        unstable, unpredictable, and addicted to drugs, alcohol, sex, and other
        substances. Learn to be self-disciplined and concentrate on your goals and
        adventures.
        
        </p>
    
        `
    } else if (ftText === '6' || ftText === '15/6' || ftInt[ftInt.length - 1] === '6') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 6</h3> <br>
        <p>
        You're content with your home life and like spending time with your family.
        Home, family, and community service are still important and you’ll still be
        selfsacrificing for others. 
        </p>
    
        `
    } else if (ftText === '7' || ftText === '16/7' || ftInt[ftInt.length - 1] === '7') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 7</h3> <br>
        <p>
        You devote time to studying, researching, introspection, and
        solitude. Know that you can become more introspective and analytical, and
        you'll have a greater mental capacity to read and research. It's possible that
        your psychic powers may grow, and you'll have visions and spiritual
        awakenings. You could feel more spiritual, religious, or connected to God
        or other sources. The negative side is that you may become aloof, distant,
        withdrawn, paranoid, sad, and lonely at times. 
        </p>
    
        `
    } else if (ftText === '8' || ftText === '17/8' || ftInt[ftInt.length - 1] === '8') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 8</h3> <br>
        <p>
        You can rise through the ranks of life and most likely continue to work.
        You can anticipate gaining a great deal of personal power, money, and
        prosperity. You'll be self-assured, wellorganized, motivated, goal-oriented,
        and laser-focused. While money will come easily. You could also be placed
        in a position of authority, so be careful not to misuse it. It's harvest season,
        and it's time to reap what you've sown. Be generous and respectful of others.
        You might be excessively dominating, greedy, stubborn, aggressive, and
        materialistic on the bad side.
        
        </p>
    
        `
    } else if (ftText === '9' || ftText === '18/9' || ftInt[ftInt.length - 1] === '9') {
        ftpPinText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Fourth Pinnacle = Month of Birth + Year of Birth (late 40s till death)
           </p> <br> <br>
        
        <h3 class="bold-description-label blue">Fourth Pinnalce Number 9</h3> <br>
        <p>
        You care about humanity and go out of your way to help others, whether via
        volunteer labor or through charitable contributions. You will grow in
        spirituality and self-sacrifice. You may become famous. You may experience
        losses and endings during this time.
        </p>
    
        `
    }




    // Challenges in Life 

    // First Challenge
    dayHold, monthHold, yearHold;
    fCha;

    dayHold = ddayHold;
    monthHold = mmonthHold;
    yearHold = yyearHold;
    if (dayHold === 11) {
        dayHold =2
    } else if (dayHold === 22) {
        dayHold = 4
    }

    if (monthHold === 11) {
        monthHold = 2
    } else if (monthHold < 10) {
        monthHold
    } else if (monthHold === 10) {
        monthHold = 1
    };

    if (yearHold === 11) {
        yearHold = 2
    } else if (yearHold === 22) {
        yearHold = 4
    } else if (yearHold === 33) {
        yearHold = 6
    }

    var fAnims, sAnims;
    
    var fAnim = dayHold - monthHold;
    if (fAnim < 0) {
        fAnim = fAnim * (-1);
        fAnims = fAnim;
    } else if (fAnim < 10) {
        fAnim;
        fAnims = fAnim;
    } else if (fAnim === 10) {
        fAnim = 1;
        fAnims = 1
    } else if ( fAnim === 11) {
        fAnim = 2
        fAnims = 2;
    } else if (fAnim === 22) {
        fAnim = 4;
        fAnims = 4;
    } else if (fAnim === 33) {
        fAnim = 6;
        fAnims = 6;
    } else if (fAnim > 10) {
        mSplit = String(fAnim).split('');
        fAnim = eval(mSplit.join('+'));
        fAnims = fAnim;
    }
    fChaNum.innerHTML = fAnim;
    var ffchaText = (fChaNum.textContent).trim();
    var ffchaInt = ffchaText.split('/');

    if (ffchaText === '0' || ffchaInt[ffchaInt.length - 1] === '0') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth <br> 
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 0</h3> <br>
        <p>
        In life, you must be prepared for obstacles. So, challenge 0 is all about
        coming up with a long-term solution to any problem you may come into
        in your quest for success. <br> <br>
        Life's challenges might be few or numerous, and they can come from
        all sources. The choice challenge is the name given to this problem.
        It's possible that you'll have trouble relying on your choices. You can
        analyze an issue and realistically consider different approaches. You
        must have trust in your own talents to tackle the problem. This is a
        task that is often encountered in a highly developed person; in many
        other regards, you have to be a particularly gifted individual to face this
        obstacle. 
        </p>
    
        `
    } else if (ffchaText === '1' || ffchaText === '10/1' || ffchaInt[ffchaInt.length - 1] === '1') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth <br> 
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 1</h3> <br>
        <p>
        You have a large ego and believe that others are attempting to control
        or dominate you. People with a lot of power over you, such as your
        parents or others with whom you struggle, are likely to make you feel
        controlled. The issue is to avoid becoming dominated while also
        ensuring that others are not dominated. It's critical to keep your ego in
        check. You're currently at a phase where you're learning to be
        independent and solve difficulties on your own. This challenge can be
        overcome with awareness.        
        </p>
    
        `
    } else if (ffchaText === '2' || ffchaText === '20/2' || ffchaInt[ffchaInt.length - 1] === '2') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 2</h3> <br>
        <p>
        Because you are terrified of being criticized or ignored, you are likely
        to be exceedingly sensitive and find it difficult to cooperate with others.
        Your feelings are easily hurt, and you may be an empath who picks up
        on other people's feelings. Emotions have the ability to overtake you.
        You have a high level of self-assurance. There's a propensity to be
        continually concerned about what people think of you. Your high
        sensitivity may be a tremendous strength when used constructively,
        allowing you to be extremely conscious of so much that others barely
        notice. However, you will find it difficult to make decisions at this time.
        During this period, friendships provide you with a great deal of
        pleasure. You should be sensitive to others' feelings, and value your
        capacity to compromise and grow in a peaceful manner. Also, strive to
        keep your energy safe.
        
        </p>
    
        `
    } else if (ffchaText === '3' || ffchaText === '12/3' || ffchaInt[ffchaInt.length - 1] === '3') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 3</h3> <br>
        <p>
        You're afraid of being judged, and you're scared that others will
        criticize you. You're disorganized and scattered, and you tend to focus
        your attention on many projects or attempt to accomplish too many
        things at once. You may have a vivid imagination and a talent for
        communication, yet you struggle to communicate effectively. Despite
        the fact that you are aware that you should make friendships and be 
        sociable, you are somewhat isolated and guarded. You may have a
        gift for writing, singing, acting, or speaking, but you are hesitant to
        engage in these hobbies because you are afraid of receiving negative
        feedback. You're using a negative tone to describe yourself, and
        you're burying your creative abilities behind a wall of timidity. It's
        difficult to simply unwind and enjoy yourself. You must work hard to
        improve your social and creative skills without being afraid of critics.

        </p>
    
        `
    } else if (ffchaText === '4' || ffchaText === '13/4' || ffchaInt[ffchaInt.length - 1] === '4') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 4</h3> <br>
        <p>
        You may be having difficulties with work because you are lazy or
        overworked. Maybe you dislike working, or the work you are required
        to accomplish, or you are having trouble completing chores and
        functioning effectively. You might be irresponsible and lacking in
        practicality. It's indeed critical that you develop tolerance,
        understanding, and a realistic, rational approach to handling duties.
        
        </p>
    
        `
    } else if (ffchaText === '5' || ffchaText === '14/5' || ffchaInt[ffchaInt.length - 1] === '5') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 5</h3> <br>
        <p>
        Your goal is to conquer the yearning and need for complete
        independence at whatever cost, which could also end up destroying
        your relationship. You place a higher value on freedom than anything
        else. It's possible that you'll be having a lot of changes or traveling.
        This problem is particularly tough for you to face because you are
        prone to being impulsive where you want to try anything at least
        occasionally, and you are in many ways unstable. You easily can
        become hooked on drugs or alcohol, sex, and so on. Change may be
        vital for you, but it must be treated with caution and precaution, and
        you must exercise discipline.
        </p>
    
        `
    } else if (ffchaText === '6' || ffchaText === '15/6' || ffchaInt[ffchaInt.length - 1] === '6') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 6</h3> <br>
        <p>
        Because of your focus on exceedingly high standards, you may face
        obstacles. You could come across as intolerant and a bit arrogant.
        Others find it difficult to live up to your high expectations, as a result,
        you may have relationship problems with your romantic partner or with
        people in general. You must understand that people will enjoy your
        diplomatic attitude if they feel their needs are addressed, their wishes
        are acknowledged, and their opinion is valued. You need to show
        compassion, harmony, love, and understanding. 
        </p>
    
        `
    } else if (ffchaText === '7' || ffchaText === '16/7' || ffchaInt[ffchaInt.length - 1] === '7') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 7</h3> <br>
        <p>
        It's possible that you're uncomfortable with your own inner sentiments.
        You may believe that you are powerless to alter or better your
        situation. With this obstacle, it's easy to become a persistent critic and
        whiner. Discrimination is a powerful feeling, yet it is conveyed in a bad 
        way. Avoid the inclination to approach individuals with caution and
        establish confidence in your own talents. <br> <br>
        As a result, you are harsh with yourself and others, which might harm
        your relationship. You have a tendency to be negative at times. The
        greatest method to tackle this difficulty is to examine yourself before
        passing judgment.

        </p>
    
        `
    } else if (ffchaText === '8' || ffchaText === '17/8' || ffchaInt[ffchaInt.length - 1] === '8') {
        fChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            Your Challenge numbers show weaknesses and blocks in your life that
            serve to help you learn and grow. There are 4 challenges, and each
            has its own number. <br>
            <b>The first Challenge number</b> is an issue you’ll have in the first half of
            your life. Lasts from birth until about the age of 30/35 years.
            <br> 
            First Challenge Number = Day of Birth – Month of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">First Challenge Number 8</h3> <br>
        <p>
        You have a tendency to be highly frugal, according to challenge 8. You
        may be stingy with your money and dislike spending it. You
        have financial problems where you don't like to contribute or waste
        cash. Material acquisition is the only way to achieve and maintain
        happiness. Money, prestige, wealth, and power may require a
        significant amount of effort. You must learn to balance your abilities to
        attain money, position, power, and wealth with a grip on reality in order
        to interact comfortably with the material world.
        
        </p>
    
        `
    } 

    // Second Challenge 
    sAnims;
    dayHold = ddayHold;
    monthHold = mmonthHold;
    yearHold = yyearHold;
    if (dayHold === 11) {
        dayHold =2
    } else if (dayHold === 22) {
        dayHold = 4
    }

    if (monthHold === 11) {
        monthHold = 2
    } else if (monthHold < 10) {
        monthHold
    } else if (monthHold === 10) {
        monthHold = 1
    };

    if (yearHold === 11) {
        yearHold = 2
    } else if (yearHold === 22) {
        yearHold = 4
    } else if (yearHold === 33) {
        yearHold = 6
    }

    var sAnim = yearHold - dayHold;
    if (sAnim < 0) {
        sAnim = sAnim * (-1);
        sAnims = sAnim;
    } else if (sAnim < 10) {
        sAnim;
        sAnims = sAnim;
    } else if (sAnim === 10) {
        sAnim = 1;
        sAnims = 1
    } else if ( sAnim === 11) {
        sAnim = 2;
        sAnims = 2;
    } else if (sAnim === 22) {
        sAnim =  4;
        sAnims = 4;
    } else if (sAnim === 33) {
        sAnim = 6;
        sAnims = 6;
    } else if (sAnim > 10) {
        mSplit = String(sAnim).split('');
        sAnim = eval(mSplit.join('+'));
        sAnims = sAnim;
        if (sAnim < 0) {
            sAnim = sAnim * (-1);
            sAnims = sAnim;
        } else if (sAnim < 10) {
            sAnim;
            sAnims = sAnim;
        } else if (sAnim === 10) {
            sAnim = 1;
            sAnims = 1
        } else if ( sAnim === 11) {
            sAnim = 2;
            sAnims = 11;
        } else if (sAnim === 22) {
            sAnim =  4;
            sAnims = 4;
        } else if (sAnim === 33) {
            sAnim = 6;
            sAnims = 6;
        } else if (sAnim > 10) {
            mSplit = String(sAnim).split('');
            sAnim = eval(mSplit.join('+'));
            sAnims = sAnim;
        };
    };
    sChaNum.innerHTML = sAnim;
    var sschaText = (sChaNum.textContent).trim();
    var sschaInt = sschaText.split('/');

    if (sschaText === '0' || sschaInt[sschaInt.length - 1] === '0') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 0</h3> <br>
        <p>
        In life, you must be prepared for obstacles. So, challenge 0 is all about
        coming up with a long-term solution to any problem you may come into
        in your quest for success. <br> <br>
        Life's challenges might be few or numerous, and they can come from
        all sources. The choice challenge is the name given to this problem.
        It's possible that you'll have trouble relying on your choices. You can
        analyze an issue and realistically consider different approaches. You
        must have trust in your own talents to tackle the problem. This is a
        task that is often encountered in a highly developed person; in many
        other regards, you have to be a particularly gifted individual to face this
        obstacle. 
        </p>
    
        `
    } else if (sschaText === '1' || sschaText === '10/1' || sschaInt[sschaInt.length - 1] === '1') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 1</h3> <br>
        <p>
        You have a large ego and believe that others are attempting to control
        or dominate you. People with a lot of power over you, such as your
        parents or others with whom you struggle, are likely to make you feel
        controlled. The issue is to avoid becoming dominated while also
        ensuring that others are not dominated. It's critical to keep your ego in
        check. You're currently at a phase where you're learning to be
        independent and solve difficulties on your own. This challenge can be
        overcome with awareness.
        </p>
    
        `
    } else if (sschaText === '2' || sschaText === '20/2' || sschaInt[sschaInt.length - 1] === '2') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 2</h3> <br>
        <p>
        Because you are terrified of being criticized or ignored, you are likely
        to be exceedingly sensitive and find it difficult to cooperate with others.
        Your feelings are easily hurt, and you may be an empath who picks up
        on other people's feelings. Emotions have the ability to overtake you.
        You have a high level of self-assurance. There's a propensity to be
        continually concerned about what people think of you. Your high
        sensitivity may be a tremendous strength when used constructively,
        allowing you to be extremely conscious of so much that others barely
        notice. However, you will find it difficult to make decisions at this time.
        During this period, friendships provide you with a great deal of
        pleasure. You should be sensitive to others' feelings, and value your
        capacity to compromise and grow in a peaceful manner. Also, strive to
        keep your energy safe.
        
        </p>
    
        `
    } else if (sschaText === '3' || sschaText === '12/3' || sschaInt[sschaInt.length - 1] === '3') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 3</h3> <br>
        <p>
        You're afraid of being judged, and you're scared that others will
        criticize you. You're disorganized and scattered, and you tend to focus
        your attention on many projects or attempt to accomplish too many
        things at once. You may have a vivid imagination and a talent for
        communication, yet you struggle to communicate effectively. Despite
        the fact that you are aware that you should make friendships and be
        sociable, you are somewhat isolated and guarded. You may have a
        gift for writing, singing, acting, or speaking, but you are hesitant to
        engage in these hobbies because you are afraid of receiving negative
        feedback. You're using a negative tone to describe yourself, and
        you're burying your creative abilities behind a wall of timidity. It's
        difficult to simply unwind and enjoy yourself. You must work hard to
        improve your social and creative skills without being afraid of critics.
        </p>
    
        `
    } else if (sschaText === '4' || sschaText === '13/4' || sschaInt[sschaInt.length - 1] === '4') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 4</h3> <br>
        <p>
        You may be having difficulties with work because you are lazy or
        overworked. Maybe you dislike working, or the work you are required
        to accomplish, or you are having trouble completing chores and
        functioning effectively. You might be irresponsible and lacking in
        practicality. It's indeed critical that you develop tolerance,
        understanding, and a realistic, rational approach to handling duties.
        
        </p>
    
        `
    } else if (sschaText === '5' || sschaText === '14/5' || sschaInt[sschaInt.length - 1] === '5') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 5</h3> <br>
        <p>
        Your goal is to conquer the yearning and need for complete
        independence at whatever cost, which could also end up destroying
        your relationship. Therefore, you place a higher value on freedom than
        anything else. It's possible that you'll be having a lot of changes during
        this time. This problem is particularly tough for you to face because
        you are prone to being impulsive and hot-tempered where you want to
        try anything at least occasionally, and you are in many ways unstable. <br> 
        You easily can become hooked on drugs or alcohol, sex, and so on.
        Change may be vital for you, but it must be treated with caution and
        precaution, and you must exercise discipline.

        </p>
    
        `
    } else if (sschaText === '6' || sschaText === '15/6' || sschaInt[sschaInt.length -1 ] === '6') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 6</h3> <br>
        <p>
        Because of your focus on exceedingly high standards, you may face
        obstacles. You could come across as intolerant and a bit arrogant.
        Others find it difficult to live up to your high expectations, as a result,
        you may have relationship problems with your romantic partner or with
        people in general. You need to learn how to love, appreciate others,
        be understanding, compassionate, and peaceful. You must
        understand that people will enjoy your diplomatic attitude if they feel
        their needs are addressed, their wishes are acknowledged, and their
        opinion is valued.
        </p>
    
        `
    } else if (sschaText === '7' || sschaText === '16/7' || sschaInt[sschaInt.length - 1] === '7') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 7</h3> <br>
        <p>
        It's possible that you're uncomfortable with your own inner sentiments.
        You may believe that you are powerless to alter or better your
        situation. With this obstacle, it's easy to become a persistent critic and
        whiner. Discrimination is a powerful feeling, yet it is conveyed in a bad
        way. Avoid the inclination to approach individuals with caution and
        establish confidence in your own talents.<br>
        As a result, you are harsh with yourself and others, which might harm
        your relationship. You have a tendency to be negative at times. The
        greatest method to tackle this difficulty is to examine yourself before
        passing judgment.
        
        </p>
    
        `
    } else if (sschaText === '8' || sschaText === '17/8' || sschaInt[sschaInt.length -1] === '8') {
        sChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The second Challenge number</b> is an issue you’ll have during the
            second half of your life. Lasts till about the age of 35 to 55/60. <br> 
    
            Second Challenge Number = Year of Birth – Day of Birth
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Second Challenge Number 8</h3> <br>
        <p>
        You have a tendency to be highly frugal, according to challenge 8. You
        may be stingy with your money and dislike spending it. In other ways,
        you have financial problems where you don't like to contribute or waste
        cash. Material acquisition is the only way to achieve and maintain
        happiness. Money, prestige, wealth, and power may require a
        significant amount of effort. You must learn to balance your abilities to
        attain money, position, power, and wealth with a grip on reality in order
        to interact comfortably with the material world.
        
        </p>
    
        `
    } 

    // Third Challenge
    dayHold = ddayHold;
    monthHold = mmonthHold;
    yearHold = yyearHold;
    if (dayHold === 11) {
        dayHold =2
    } else if (dayHold === 22) {
        dayHold = 4
    }

    if (monthHold === 11) {
        monthHold = 2
    } else if (monthHold < 10) {
        monthHold
    } else if (monthHold === 10) {
        monthHold = 1
    };

    if (yearHold === 11) {
        yearHold = 2
    } else if (yearHold === 22) {
        yearHold = 4
    } else if (yearHold === 33) {
        yearHold = 6
    }
 
    var tAnim = sAnims - fAnims;
    // console.log(sAnims);
    // console.log(fAnims)
    if (tAnim < 0) {
        tAnim = tAnim * (-1);
    } else {
        tAnim;
    };
    tChaNum.innerHTML = tAnim;
    var ttchaText = (tChaNum.textContent).trim();
    var ttchaInt = ttchaText.split('/');

    if (ttchaText === '0' || ttchaInt[ttchaInt.length -1] === '0') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 0</h3> <br>
        <p>
        In life, you must be prepared for obstacles. So, challenge 0 is all about
        coming up with a long-term solution to any problem you may come into
        in your quest for success. <br> <br>
        Life's challenges might be few or numerous, and they can come from
        all sources. The choice challenge is the name given to this problem.
        It's possible that you'll have trouble relying on your choices. You can
        analyze an issue and realistically consider different approaches. You
        must have trust in your own talents to tackle the problem. This is a
        task that is often encountered in a highly developed person; in many
        other regards, you have to be a particularly gifted individual to face this
        obstacle. 
        </p>
    
        `
    } else if (ttchaText === '1' || ttchaText === '10/1' || ttchaInt[ttchaInt.length - 1] === '1') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 1</h3> <br>
        <p>
        You have a large ego and believe that others are attempting to control
        or dominate you. People with a lot of power over you, such as your
        parents or others with whom you struggle, are likely to make you feel
        controlled. The issue is to avoid becoming dominated while also
        ensuring that others are not dominated. It's critical to keep your ego in
        check. You're currently at a phase where you're learning to be
        independent and solve difficulties on your own. This challenge can be
        overcome with awareness.
        </p>
    
        `
    } else if (ttchaText === '2' || ttchaText === '20/2' || ttchaInt[ttchaInt.length -1] === '2') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 2</h3> <br>
        <p>
        Because you are terrified of being criticized or ignored, you are likely
        to be exceedingly sensitive and find it difficult to cooperate with others.
        Your feelings are easily hurt, and you may be an empath who picks up
        on other people's feelings. Emotions have the ability to overtake you.
        You have a high level of self-assurance. There's a propensity to be
        continually concerned about what people think of you. Your high
        sensitivity may be a tremendous strength when used constructively,
        allowing you to be extremely conscious of so much that others barely
        notice. However, you will find it difficult to make decisions at this time.
        During this period, friendships provide you with a great deal of
        pleasure. You should be sensitive to others' feelings, and value your
        capacity to compromise and grow in a peaceful manner. Also, strive to
        keep your energy safe.
        </p>
    
        `
    } else if (ttchaText === '3' || ttchaText === '12/3' || ttchaInt[ttchaInt.length - 1] === '3') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 3</h3> <br>
        <p>
        You're afraid of being judged, and you're scared that others will
        criticize you. You're disorganized and scattered, and you tend to focus
        your attention on many projects or attempt to accomplish too many
        things at once. You may have a vivid imagination and a talent for
        communication, yet you struggle to communicate effectively. Despite
        the fact that you are aware that you should make friendships and be
        sociable, you are somewhat isolated and guarded. You may have a
        gift for writing, singing, acting, or speaking, but you are hesitant to
        engage in these hobbies because you are afraid of receiving negative
        feedback. You're using a negative tone to describe yourself, and 
        you're burying your creative abilities behind a wall of timidity. It's
        difficult to simply unwind and enjoy yourself. You must work hard to
        improve your social and creative skills without being afraid of critics.

        </p>
    
        `
    } else if (ttchaText === '4' || ttchaText === '13/4' || ttchaInt[ttchaInt.length - 1] === '4') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 4</h3> <br>
        <p>
        You may be having difficulties with work because you are lazy or
        overworked. Maybe you dislike working, or the work you are required
        to accomplish, or you are having trouble completing chores and
        functioning effectively. You might be irresponsible and lacking in
        practicality. It's indeed critical that you develop tolerance,
        understanding, and a realistic, rational approach to handling duties.
        </p>
    
        `
    } else if (ttchaText === '5' || ttchaText === '14/5' || ttchaInt[ttchaInt.length - 1 ] === '5') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 5</h3> <br>
        <p>
        Your goal is to conquer the yearning and need for complete
        independence at whatever cost, which could also end up destroying
        your relationship. You place a higher value on freedom than anything
        else. It's possible that you'll be having a lot of changes or traveling.
        This problem is particularly tough for you to face because you are
        prone to being impulsive or hot-tempered where you want to try
        anything at least occasionally, and you are in many ways unstable.
        You easily can become hooked on drugs or alcohol, sex, and so on.
        Change may be vital for you, but it must be treated with caution and
        precaution, and you must exercise discipline.
        
        </p>
    
        `
    } else if (ttchaText === '6' || ttchaText === '15/6' || ttchaInt[ttchaInt.length - 1] === '6') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 6</h3> <br>
        <p>
        Because of your focus on exceedingly high standards, you may face
        obstacles. You could come across as intolerant and a bit arrogant.
        Others find it difficult to live up to your high expectations, as a result,
        you may have relationship problems with your romantic partner or with
        people in general. You must understand that people will enjoy your
        diplomatic attitude if they feel their needs are addressed, their wishes
        are acknowledged, and their opinion is valued. You need to show
        compassion, harmony, love, and understanding. 
        </p>
    
        `
    } else if (ttchaText === '7' || ttchaText === '16/7' || ttchaInt[ttchaInt.length - 1] === '7') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 7</h3> <br>
        <p>
        It's possible that you're uncomfortable with your own inner sentiments.
        You may believe that you are powerless to alter or better your
        situation. With this obstacle, it's easy to become a persistent critic and
        whiner. Discrimination is a powerful feeling, yet it is conveyed in a bad
        way. Avoid the inclination to approach individuals with caution and
        establish confidence in your own talents. <br> <br>
        As a result, you are harsh with yourself and others, which might harm
        your relationship. You have a tendency to be negative at times. The 
        greatest method to tackle this difficulty is to examine yourself before
        passing judgment.
        </p>
    
        `
    } else if (ttchaText === '8' || ttchaText === '17/8' || ttchaInt[ttchaInt.length - 1] === '8') {
        tChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>third and fourth challenge number</b> is an issue and weakness
            you can have all of your life. It is the most important challenge. <br><br>
    
            Third Challenge Number = Second Challenge # – First Challenge # <br>
    
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Third Challenge Number 8</h3> <br>
        <p>
        You have a tendency to be highly frugal, according to challenge 8. You
        may be stingy with your money and dislike spending it. You
        have financial problems where you don't like to contribute or waste
        cash. Material acquisition is the only way to achieve and maintain
        happiness. Therefore, money, prestige, wealth, and power may
        require a significant amount of effort. You must learn to balance your
        abilities to attain money, position, power, and wealth with a grip on
        reality in order to interact comfortably with the material world.
        
        </p>
    
        `
    } 

    // Forth Challenge 
    dayHold = ddayHold;
    monthHold = mmonthHold;
    yearHold = yyearHold;
    if (dayHold === 11) {
        dayHold =2
    } else if (dayHold === 22) {
        dayHold = 4
    }

    if (monthHold === 11) {
        monthHold = 2
    } else if (monthHold < 10) {
        monthHold
    } else if (monthHold === 10) {
        monthHold = 1
    };

    if (yearHold === 11) {
        yearHold = 2
    } else if (yearHold === 22) {
        yearHold = 4
    } else if (yearHold === 33) {
        yearHold = 6
    }

    var ftAnim = yearHold - monthHold;
    if (ftAnim < 0) {
        ftAnim = ftAnim * (-1)
    } else if (ftAnim === 10) {
        ftAnim = 1;
    } else {
        ftAnim;
    };
    ftChaNum.innerHTML = ftAnim;
    var fttChaText = (ftChaNum.textContent).trim();
    var fttChaInt = fttChaText.split('/');

    if (fttChaText === '0' || fttChaInt[fttChaInt.length - 1] === '0') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 0</h3> <br>
        <p>
        In life, you must be prepared for obstacles. So, challenge 0 is all about
        coming up with a long-term solution to any problem you may come into
        in your quest for success. <br> <br>
        Life's challenges might be few or numerous, and they can come from
        all sources. The choice challenge is the name given to this problem.
        It's possible that you'll have trouble relying on your choices. You can
        analyze an issue and realistically consider different approaches. You
        must have trust in your own talents to tackle the problem. This is a
        task that is often encountered in a highly developed person; in many
        other regards, you have to be a particularly gifted individual to face this
        obstacle. 
        </p>
    
        `
    } else if (fttChaText === '1' || fttChaText === '10/1' || fttChaInt[fttChaInt.length - 1] === '1') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 1</h3> <br>
        <p>
        You have a large ego and believe that others are attempting to control
        or dominate you. People with a lot of power over you, such as your
        parents or others with whom you struggle, are likely to make you feel
        controlled. The issue is to avoid becoming dominated while also
        ensuring that others are not dominated. It's critical to keep your ego in
        check. You're currently at a phase where you're learning to be
        independent and solve difficulties on your own. This challenge can be
        overcome with awareness.
        
        </p>
    
        `
    } else if (fttChaText === '2' || fttChaText === '20/2' || fttChaInt[fttChaInt.length - 1] === '2') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 2</h3> <br>
        <p>
        Because you are terrified of being criticized or ignored, you are likely
        to be exceedingly sensitive and find it difficult to cooperate with others.
        Your feelings are easily hurt, and you may be an empath who picks up
        on other people's feelings. Emotions have the ability to overtake you. <br> <br>
        You have a high level of self-assurance. There's a propensity to be
        continually concerned about what people think of you. Your high
        sensitivity may be a tremendous strength when used constructively,
        allowing you to be extremely conscious of so much that others barely
        notice. However, you will find it difficult to make decisions at this time.
        During this period, friendships provide you with a great deal of
        pleasure. You should be sensitive to others' feelings, and value your
        capacity to compromise and grow in a peaceful manner. Also, strive to
        keep your energy safe.
        </p>
    
        `
    } else if (fttChaText === '3' || fttChaText === '12/3' || fttChaInt[fttChaInt.length - 1] === '3') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 3</h3> <br>
        <p>
        You're afraid of being judged, and you're scared that others will
        criticize you. You're disorganized and scattered, and you tend to focus
        your attention on many projects or attempt to accomplish too many
        things at once. You may have a vivid imagination and a talent for
        communication, yet you struggle to communicate effectively. Despite
        the fact that you are aware that you should make friendships and be
        sociable, you are somewhat isolated and guarded. You may have a
        gift for writing, singing, acting, or speaking, but you are hesitant to
        engage in these hobbies because you are afraid of receiving negative
        feedback. You're using a negative tone to describe yourself, and
        you're burying your creative abilities behind a wall of timidity. It's
        difficult to simply unwind and enjoy yourself. You must work hard to
        improve your social and creative skills without being afraid of critics.
        
        </p>
    
        `
    } else if (fttChaText === '4' || fttChaText === '13/4' || fttChaInt[fttChaInt.length - 1]=== '4') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 4</h3> <br>
        <p>
        You may be having difficulties with work because you are lazy or
        overworked. Maybe you dislike working, or the work you are required
        to accomplish, or you are having trouble completing chores and
        functioning effectively. You might be irresponsible and lacking in
        practicality. It's indeed critical that you develop tolerance,
        understanding, and a realistic, rational approach to handling duties.
        </p>
    
        `
    } else if (fttChaText === '5' || fttChaText === '14/5' || fttChaInt[fttChaInt.length - 1] === '5') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 5</h3> <br>
        <p>
        Your goal is to conquer the yearning and need for complete
        independence at whatever cost, which could also end up destroying
        your relationship. You place a higher value on freedom than anything
        else. It's possible that you'll be having a lot of changes or traveling.
        This problem is particularly tough for you to face because you are
        prone to being impulsive or hot-tempered where you want to try
        anything at least occasionally, and you are in many ways unstable.
        You easily can become hooked on drugs or alcohol, sex, and so on.
        Change may be vital for you, but it must be treated with caution and
        precaution, and you must exercise discipline.
        </p>
    
        `
    } else if (fttChaText === '6' || fttChaText === '15/6' || fttChaInt[fttChaInt.length - 1] === '6') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 6</h3> <br>
        <p>
        Because of your focus on exceedingly high standards, you may face
        obstacles. You could come across as intolerant and a bit arrogant.
        Others find it difficult to live up to your high expectations, as a result,
        you may have relationship problems with your romantic partner or with
        people in general. You must understand that people will enjoy your
        diplomatic attitude if they feel their needs are addressed, their wishes
        are acknowledged, and their opinion is valued. You need to show
        compassion, harmony, love, and understanding. 
        </p>
    
        `
    } else if (fttChaText === '7' || fttChaText === '16/7' || fttChaInt[fttChaInt.length -1] === '7') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 7</h3> <br>
        <p>
        It's possible that you're uncomfortable with your own inner sentiments.
        You may believe that you are powerless to alter or better your
        situation. With this obstacle, it's easy to become a persistent critic and
        whiner. Discrimination is a powerful feeling, yet it is conveyed in a bad
        way. Avoid the inclination to approach individuals with caution and
        establish confidence in your own talents. <br> <br>
        As a result, you are harsh with yourself and others, which might harm
        your relationship. You have a tendency to be negative at times. The
        greatest method to tackle this difficulty is to examine yourself before
        passing judgment.
        
        </p>
    
        `
    } else if (fttChaText === '8' || fttChaText === '17/8' || fttChaInt[fttChaInt.length - 1] === '8') {
        ftChaText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            <b>The fourth challenge number</b> is an issue and weakness you can
            have all of your life. (55/60 - Till death) <br> <br>
    
            Fourth Challenge Number = Year of Birth – Month of Birth
           </p> <br> <br>
        
        <h3 class="bold-description-label ">Fourth Challenge Number 8</h3> <br>
        <p>
        You have a tendency to be highly frugal, according to challenge 8. You
        may be stingy with your money and dislike spending it. You
        have financial problems where you don't like to contribute or waste
        cash. Material acquisition is the only way to achieve and maintain
        happiness. Money, prestige, wealth, and power may require a
        significant amount of effort. You must learn to balance your abilities to
        attain money, position, power, and wealth with a grip on reality in order
        to interact comfortably with the material world.
        
        </p>
    
        `
    } 







    // Tansit Cycle

    // Physical Transit
    ednfName = fName.value.split(' ');
    lastName = ednfName[ednfName.length - 1];
    indexList = lastName;
    firstName = ednfName[0];
    count = 0;

    var currentYear = Number(new Date().getFullYear());
    yearNum = Number(yearString);
    var yearDiff;
    

    if (currentYear === yearNum) {
        yearDiff = 1;
    } else if (currentYear < yearNum) {
        yearDiff = (yearNum - currentYear) ;
    } else if (currentYear > yearNum) {
        yearDiff = (currentYear - yearNum) ;
    };
    var emptyNameString = '';
    firstName = firstName.repeat(yearDiff/2);
    var fNameList = firstName.split('');
    
    
    for (let i = 0; i< yearDiff; i++) {
        if (String(fNameList[i]).toLowerCase() === 'a' ||  String(fNameList[i]).toLowerCase() === 'j' || String(fNameList[i]).toLowerCase() === 's' ) {
            emptyNameString += (fNameList[i]) ;
       } else if (String(fNameList[i]).toLowerCase() === 'b' || String(fNameList[i]).toLowerCase() === 'k' || String(fNameList[i]).toLowerCase() === 't') {
            emptyNameString += (fNameList[i]).repeat(2);
        } else if (String(fNameList[i]).toLowerCase() === 'c' || String(fNameList[i]).toLowerCase() === 'l' || String(fNameList[i]).toLowerCase() === 'u') {
            emptyNameString += (fNameList[i]).repeat(3);
        } else if (String(fNameList[i]).toLowerCase() === 'd' || String(fNameList[i]).toLowerCase() === 'm' || String(fNameList[i]).toLowerCase() === 'v') {
            emptyNameString += (fNameList[i] ).repeat(4);
        } else if (String(fNameList[i]).toLowerCase() === 'e' || String(fNameList[i]).toLowerCase() === 'n' || String(fNameList[i]).toLowerCase() === 'w') {
            emptyNameString += (fNameList[i]).repeat(5);
        } else if (String(fNameList[i]).toLowerCase()=== 'f' || String(fNameList[i]).toLowerCase() === 'o' || String(fNameList[i]).toLowerCase() === 'x') {
            emptyNameString += (fNameList[i]).repeat(6);
        } else if (String(fNameList[i]).toLowerCase()=== 'g' || String(fNameList[i]).toLowerCase() === 'p' || String(fNameList[i]).toLowerCase() === 'y') {
            emptyNameString += (fNameList[i]).repeat(7);
        } else if (String(fNameList[i]).toLowerCase() === 'h' || String(fNameList[i]).toLowerCase() === 'q' || String(fNameList[i]).toLowerCase() === 'z') {
            emptyNameString += (fNameList[i]).repeat(8);
        } else if (String(fNameList[i]).toLowerCase() === 'i' || String(fNameList[i]).toLowerCase() === 'r' ) {
            emptyNameString += (fNameList[i]).repeat(9);
        }
    };

    
    var transit = emptyNameString[yearDiff];
    phtrNum.innerHTML = '<b>' + transit.toUpperCase() + '</b>';

    var physicalText = (phtrNum.textContent).trim();
    var physicalInt = physicalText.split('/');






    // Spiritual Transit
    ednfName = fName.value.split(' ');
    lastName = (ednfName[ednfName.length - 1]).toLowerCase();
    // console.log(lastName)
    fNameList = [];
    emptyNameString = '';
    firstName = lastName.repeat(yearDiff/2);
    fNameList = firstName.split('');

    
    for (let i = 0; i< yearDiff; i++) {
        // console.log(fNameList[i])
        if (String(fNameList[i]).toLowerCase() === 'a' ||  String(fNameList[i]).toLowerCase() === 'j' || String(fNameList[i]).toLowerCase() === 's' ) {
            emptyNameString += (fNameList[i]) ;
       } else if (String(fNameList[i]).toLowerCase() === 'b' || String(fNameList[i]).toLowerCase() === 'k' || String(fNameList[i]).toLowerCase() === 't') {
            emptyNameString += (fNameList[i]).repeat(2);
        } else if (String(fNameList[i]).toLowerCase() === 'c' || String(fNameList[i]).toLowerCase() === 'l' || String(fNameList[i]).toLowerCase() === 'u') {
            emptyNameString += (fNameList[i]).repeat(3);
        } else if (String(fNameList[i]).toLowerCase() === 'd' || String(fNameList[i]).toLowerCase() === 'm' || String(fNameList[i]).toLowerCase() === 'v') {
            emptyNameString += (fNameList[i] ).repeat(4);
        } else if (String(fNameList[i]).toLowerCase() === 'e' || String(fNameList[i]).toLowerCase() === 'n' || String(fNameList[i]).toLowerCase() === 'w') {
            emptyNameString += (fNameList[i]).repeat(5);
        } else if (String(fNameList[i]).toLowerCase()=== 'f' || String(fNameList[i]).toLowerCase() === 'o' || String(fNameList[i]).toLowerCase() === 'x') {
            emptyNameString += (fNameList[i]).repeat(6);
        } else if (String(fNameList[i]).toLowerCase()=== 'g' || String(fNameList[i]).toLowerCase() === 'p' || String(fNameList[i]).toLowerCase() === 'y') {
            emptyNameString += (fNameList[i]).repeat(7);
        } else if (String(fNameList[i]).toLowerCase() === 'h' || String(fNameList[i]).toLowerCase() === 'q' || String(fNameList[i]).toLowerCase() === 'z') {
            emptyNameString += (fNameList[i]).repeat(8);
        } else if (String(fNameList[i]).toLowerCase() === 'i' || String(fNameList[i]).toLowerCase() === 'r' ) {
            emptyNameString += (fNameList[i]).repeat(9);
        }
    };
    // console.log(emptyNameString)
    
    transit = emptyNameString[yearDiff ];
    sptrNum.innerHTML = '<b>' + transit.toUpperCase() + '</b>';

    // Mental Transit
    var ednfName = fName.value.split(' ');
    var empty = '';
    var lastName;
    if (ednfName.length > 2) {
        ednfName = ednfName.slice(1, -1);
        // console.log(ednfName)
        for (let i = 0; i < ednfName.length; i ++) {
            empty += ednfName[i];
        };
        lastName = empty;
    } else {
        lastName = ednfName[ednfName.length - 1];
    };
    
    if (currentYear === yearNum) {
        yearDiff = 1;
    } else if (currentYear < yearNum) {
        yearDiff = (yearNum - currentYear) ;
    } else if (currentYear > yearNum) {
        yearDiff = (currentYear - yearNum) ;
    };
    var middle = lastName;

    emptyNameString = '';
    firstName = middle.repeat(yearDiff/2);
    fNameList = firstName.split('');

    
    for (let i = 0; i< yearDiff; i++) {
        if (String(fNameList[i]).toLowerCase() === 'a' ||  String(fNameList[i]).toLowerCase() === 'j' || String(fNameList[i]).toLowerCase() === 's' ) {
            emptyNameString += (fNameList[i]) ;
       } else if (String(fNameList[i]).toLowerCase() === 'b' || String(fNameList[i]).toLowerCase() === 'k' || String(fNameList[i]).toLowerCase() === 't') {
            emptyNameString += (fNameList[i]).repeat(2);
        } else if (String(fNameList[i]).toLowerCase() === 'c' || String(fNameList[i]).toLowerCase() === 'l' || String(fNameList[i]).toLowerCase() === 'u') {
            emptyNameString += (fNameList[i]).repeat(3);
        } else if (String(fNameList[i]).toLowerCase() === 'd' || String(fNameList[i]).toLowerCase() === 'm' || String(fNameList[i]).toLowerCase() === 'v') {
            emptyNameString += (fNameList[i] ).repeat(4);
        } else if (String(fNameList[i]).toLowerCase() === 'e' || String(fNameList[i]).toLowerCase() === 'n' || String(fNameList[i]).toLowerCase() === 'w') {
            emptyNameString += (fNameList[i]).repeat(5);
        } else if (String(fNameList[i]).toLowerCase()=== 'f' || String(fNameList[i]).toLowerCase() === 'o' || String(fNameList[i]).toLowerCase() === 'x') {
            emptyNameString += (fNameList[i]).repeat(6);
        } else if (String(fNameList[i]).toLowerCase()=== 'g' || String(fNameList[i]).toLowerCase() === 'p' || String(fNameList[i]).toLowerCase() === 'y') {
            emptyNameString += (fNameList[i]).repeat(7);
        } else if (String(fNameList[i]).toLowerCase() === 'h' || String(fNameList[i]).toLowerCase() === 'q' || String(fNameList[i]).toLowerCase() === 'z') {
            emptyNameString += (fNameList[i]).repeat(8);
        } else if (String(fNameList[i]).toLowerCase() === 'i' || String(fNameList[i]).toLowerCase() === 'r' ) {
            emptyNameString += (fNameList[i]).repeat(9);
        }
    }

    
    transit = emptyNameString[yearDiff ];
    metrNum.innerHTML = '<b>' + transit.toUpperCase() + '</b>';

    // Essence Cycle
    var physicalTransit = phtrNum.textContent;
    var spiritualTransit = sptrNum.textContent;
    var mentalTransit = metrNum.textContent;
    var transitList = [];
    transitHold = fName.value.split(' ');

    transitList.push(physicalTransit, spiritualTransit, mentalTransit);
    if (transitHold.length === 2) {
        transitList.pop();
    };
    fNameList = transitList;
    count = 0;
    for (let i = 0; i< yearDiff; i++) {
        if (String(fNameList[i]).toLowerCase() === 'a' ||  String(fNameList[i]).toLowerCase() === 'j' || String(fNameList[i]).toLowerCase() === 's' ) {
            count += 1;
       } else if (String(fNameList[i]).toLowerCase() === 'b' || String(fNameList[i]).toLowerCase() === 'k' || String(fNameList[i]).toLowerCase() === 't') {
            count += 2;
        } else if (String(fNameList[i]).toLowerCase() === 'c' || String(fNameList[i]).toLowerCase() === 'l' || String(fNameList[i]).toLowerCase() === 'u') {
            count += 3;
        } else if (String(fNameList[i]).toLowerCase() === 'd' || String(fNameList[i]).toLowerCase() === 'm' || String(fNameList[i]).toLowerCase() === 'v') {
            count += 4;
        } else if (String(fNameList[i]).toLowerCase() === 'e' || String(fNameList[i]).toLowerCase() === 'n' || String(fNameList[i]).toLowerCase() === 'w') {
            count += 5;
        } else if (String(fNameList[i]).toLowerCase()=== 'f' || String(fNameList[i]).toLowerCase() === 'o' || String(fNameList[i]).toLowerCase() === 'x') {
            count += 6;
        } else if (String(fNameList[i]).toLowerCase()=== 'g' || String(fNameList[i]).toLowerCase() === 'p' || String(fNameList[i]).toLowerCase() === 'y') {
            count += 7;
        } else if (String(fNameList[i]).toLowerCase() === 'h' || String(fNameList[i]).toLowerCase() === 'q' || String(fNameList[i]).toLowerCase() === 'z') {
            count += 8;
        } else if (String(fNameList[i]).toLowerCase() === 'i' || String(fNameList[i]).toLowerCase() === 'r' ) {
            count += 9;
        }
    };

    if (count < 10) {
        count;
    } else if (count === 10) {
        count = 1
    } else if (count === 11) {
        count = '11/2'
    } else if (count === 16) {
        count = '16/7'
    } else if(count === 19) {
        count = '19/1'
    } else if (count === 22) {
        count = '22/4'
    } else if (count > 10) {
        mSplit = String(count).split('');
        count = eval(mSplit.join('+'));
        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1
        } else if (count === 11) {
            count = '11/2'
        } else if (count === 16) {
            count = '16/7'
        } else if(count === 19) {
            count = '19/1'
        } else if (count === 22) {
            count = '22/4'
        } else if ( count > 10) {
            mSplit = String(count).split('');
            count = eval(mSplit.join('+'));
        }
    };

    escyNum.innerHTML = '<b>' + count + '</b>';
    var transitString = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transits are included in your developmental and will reveal a lot about
            certain influences in your life during various years. The letters of your first,
            middle, and last names are used to create transits. Each name represents a different
            aspect of your consciousness (physical, mental, or spiritual). The Physical Transit
            is based on your first name, while the Mental Transit is based on your middle
            name, and the Spiritual Transit is based on your last name.
                
        </p> <br> <br>
    `;
    for (let i = 0; i< transitList.length; i++) {
        switch (transitList[i]) {
            case 'A':
                transitString += `
                
                
                <h3 class="bold-description-label">A Transit</h3> <br> <br> 
                <p>
                This Essence gives you a new outlook on life. It serves as a turning point,
                presenting new chances for the horn to seize. You always second-guess yourself
                before acting, and you feel compelled to apply your mental talents in everything
                you do. This is a moment of transformation, a dynamic way of life, and
                uniqueness. This letter awakens your inner leader and helps you become more
                self-reliant. <br> <br>
                There is the option of traveling and maybe relocating. You might also gain
                insight into your place in life during this time. This is an excellent moment to
                begin a new chapter in your life, whether personal or professional. You can marry,
                start up a new relationship, or business, establish a family, and so forth. Your
                creative talents will be at their height, and now is the moment to demonstrate them
                off to the entire world. There will be numerous changes in your life at this time.
                
                </p>
                `
                break;
            
            case 'B':
                transitString += `
                
                
                <h3 class="bold-description-label">B Transit</h3> <br> <br> 
                <p>
                It's possible that you're more sensitive, timid, or emotional than normal. You are
                desperate for love and are vulnerable to passionate love affairs. You should pay
                great attention to your health in general, and your neurological system in
                particular, during this time. You should get lots of rest and relax. Be receptive to
                what others have to say. Due to your compassion and diplomacy, your career
                may flourish. People in your surrounding would be particularly nice
                and helpful.
                </p>
                `
                break;
            
            case 'C':
                transitString += `
                
                
                <h3 class="bold-description-label">C Transit</h3> <br> <br> 
                <p>
                You'll notice that expressing yourself is becoming simpler for you. You have
                additional notions and ideas. Prepare for some form of prophecy, as well as
                premonitions or other spiritual experiences, since your brain is in an
                extremely creative period and your intuition is as sharp as it's ever been. You
                have a new sense of adventure and make numerous new acquaintances. There will
                be more social gatherings. You have the ability to promote yourself. You'll meet
                someone fresh and fascinating and become friends with them. It's an
                excellent moment to expand your business.
                
                </p>
                `
                break;
            
            case 'D':
                transitString += `
                
                
                <h3 class="bold-description-label">D Transit</h3> <br> <br> 
                <p>
                You must take care of your health while also paying attention to your nutrition and
                physical activities. Taking care of your health today might help you avoid
                problems in the future. These days, you have a great need to be loved and
                respected. You need to communicate your concerns more in your love
                relationships, even if they are hazy or stressful. You'll have the chance to grow
                and gain self-confidence, become more autonomous, and travel is a distinct
                possibility.
                </p>
                `
                break;
            
            case 'E':
                transitString += `
                
                
                <h3 class="bold-description-label">E Transit</h3> <br> <br> 
                <p>
                You'll be motivated and helpful. Changes in job, travel, and maybe relocating are all
                possibilities. You're energized, full of fresh aspirations, and eager to go on new
                adventures. You are drawn to new and exciting experiences, especially romantic
                relationships. There is also the possibility of marriage. Despite the fact that this is
                an excellent letter for finances or getting a promotion, there could be a lack of
                concentration and a much more carefree attitude, which may harm your prospects
                of making actual progress. New religions and philosophical concepts excite your
                interest.
                </p>
                `
                break;
            
            case 'F':
                transitString += `
                
                
                <h3 class="bold-description-label">F Transit</h3> <br> <br> 
                <p>
                    It's time to go into your soul (soul searching and spiritual development) and
                    stay true to yourself. At work and at home, you will face several challenges
                    and greater liabilities. You'll begin to question your past beliefs and authority.
                    This year, your intuitive and emotional part will triumph, but it will not provide you
                    with the answers to your life's questions. You'll need to focus on yourself, reflect
                    and meditate, and listen to your inner voice. During this time, you may feel
                    compelled to behave as though you are suffering, but this is only an act of 
                    deception rather than self-sacrifice. A large number of individuals will seek your
                    assistance and direction, as well as your
                    compassion. 
                </p>
                `
                break;
            
            case 'G':
                transitString += `
                
                
                <h3 class="bold-description-label">G Transit</h3> <br> <br> 
                <p>
                This is a contentious time in your life. On the one side, you will be compensated
                financially, but you should not expect people to thank you for your efforts. The
                letter G has to do with mental and spiritual matters. This season is often
                successful and positive, but you should not hurry into it. You will feel isolated and
                lonely many times, and you will have to go inside yourself and reflect on all that is
                happening at some point throughout this time. Your energy is focused on the
                correct things, although you might be a little more secretive than normal. During
                this time, you're more emotional than usual when it comes to romantic
                connections.
                
                </p>
                `
                break;
            
            case 'H':
                transitString += `
                
                
                <h3 class="bold-description-label">H Transit</h3> <br> <br> 
                <p>
                During this year, your mind will be quite busy and have a lot of activity. Your ideas
                are a little out of the ordinary. You have a talent for coming up with unique, even
                imaginative ideas. This is an exciting ambitious period, and self-promotion will
                be advantageous. It is possible to advance and succeed. You are focused and determined,
                 which is a winning combination. You are self-disciplined and have a strong vision of 
                 your goals. You're emotionally fragile and in need of affectionate love and care.
                
                </p>
                `
                break;
            
            case 'I':
                transitString += `
                
                
                <h3 class="bold-description-label">I Transit</h3> <br> <br> 
                <p>
                Prepare for both good and bad happenings at this sensitive and
                emotional time. You're overworked and need to get some rest, or you'll get
                anxious. Learn how to maintain your  composure and remain cool. Do not
                allowing things in your life and environment to ruin your attitude and
                mood. Insecurity and self-indulgence should be avoided. Despite the
                unfavorable aspects, this year has the potential to be fruitful for you in terms of
                offers and material compensation.
                </p>
                `
                break;
            
            case 'J':
                transitString += `
                
                
                <h3 class="bold-description-label">J Transit</h3> <br> <br> 
                <p>
                This time will bring along the energy and tremendous changes. You will have a
                number of significant opportunities to improve your financial status. It won't be
                simple, and you'll have to make check sure and study every aspect and
                conceivable scenario. Make an effort to finish everything. There will be new
                obligations. Most likely, you will relocate from where you currently reside. But, after
                a time of erratic peaks and falls, you will have a sense of rejuvenation or rebirth,
                and it will be a fresh start for you, giving you renewed confidence.
                
                </p>
                `
                break;
            
            case 'K':
                transitString += `
                
                
                <h3 class="bold-description-label">K Transit</h3> <br> <br> 
                <p>
                You will be more sensitive than normal throughout this time. Things that others
                find obscure will appear plain to you. You're going to meet some new
                individuals. Your thoughts are original, and they provide spice to your life. Allow
                yourself to experience all of the great aspects of teamwork and cooperation
                with others, as you will be sharing your achievements as well as your obligations
                with them. During this time, you will be extra sensitive, and you will encounter
                some strange and difficult events. In general, the letter K is associated with
                good fortune and celebrity. Avoid having too much of anything. Therefore, Cheating, 
                discretion, and misrepresentation must all be avoided.
                </p>
                `
                break;

            case 'L':
                transitString += `
                
                
                <h3 class="bold-description-label">L Transit</h3> <br> <br> 
                <p>
                It's time to take it easy. You should consider your future ambitions and
                objectives. It is a time to reflect on your life, figure out your true feelings, and
                separate your wants from your requirements and responsibilities. If you
                have the opportunity to travel, take advantage of it. Consider what you enjoy
                doing more and express yourself. Throughout this time, every kind of artistic
                expression is definitely welcome. New individuals will come into your life with
                ease. This is also a good time to be married. Nonetheless, you must analyze
                each option carefully, or you risk losing crucial individuals.
                
                </p>
                `
                break;
            
            case 'M':
                transitString += `
                
                
                <h3 class="bold-description-label">M Transit</h3> <br> <br> 
                <p>
                This will be a period of strenuous work and practicality. You may be secretive,
                which might cause others close to you to be worried. So, strive to express your
                sentiments to others around you more. Relationships may face difficulties or be
                put to the test. Before making major life decisions, think carefully. Get yourself
                together and don't allow your emotions or impulse to run your life or damage it.
                Allow time to clean away the clutter. 
                
                </p>
                `
                break;
            
            case 'N':
                transitString += `
                
                
                <h3 class="bold-description-label">N Transit</h3> <br> <br> 
                <p>
                You will have the opportunity to extend your views. This time period is jampacked 
                with adventures and activities. Most likely, you will relocate to a new
                location. It's a busy time with a lot of opportunities. You're looking for love and
                happiness. Sacrifice, flexibility, and adaptation are all required. You'll make a
                few important acknowledgments. You'll have to adjust to and fit various
                conditions. The financial aspect of your life will be a big source of concern for you.
                Because you are more sensitive and your attention is not stable, try to focus on only
                the most important things. During this period, you have a tendency to forget
                things. Consider altering your diet and getting some physical activity.
                
                </p>
                `
                break;
            
            case 'O':
                transitString += `
                
                
                <h3 class="bold-description-label">O Transit</h3> <br> <br> 
                <p>
                It's a worried and stressful period that, if you let it, might have significant health
                implications. You might become overly concerned all of the time. It's
                understandable because you're responsible for so many things. Perhaps
                you'll be drawn to religious and philosophical study. During this time, your
                managerial and leadership abilities will improve.
                
                </p>
                `
                break;

            case 'P':
                transitString += `
                
                
                <h3 class="bold-description-label">P Transit</h3> <br> <br> 
                <p>
                In your life, new things and people will arrive out of nowhere. You won't be able
                to effectively manage your life throughout this time. Avoid taking any risks that aren't
                necessary. During this period, you're a little confused. Relationships may also
                face difficulties, making it difficult for you to express your true sentiments. So,
                make the most of this opportunity to grow spiritually. You will be rewarded for your
                abilities and talents throughout this time, and promotion is a definite possibility.
                However, it is more of a spiritual period than a time for worldly matters in general
                </p>
                `
                break;

            case 'Q':
                transitString += `
                
                
                <h3 class="bold-description-label">Q Transit</h3> <br> <br> 
                <p>
                Under the effect of the Q, your intuition and intelligence are substantially
                strengthened. You'll come up with a lot of unique ideas and may even invent
                something. At this moment, your problemsolving abilities are exceptional. However,
                you've become increasingly unsteady and chaotic. You'll meet some weird and
                quirky people, and you'll have to be wary about acting on impulse. Therefore, 
                strange and remarkable individuals will be drawn to you in some way, so make
                logical judgments. Keep an eye on your finances. This is an excellent time for
                financial expansion. You have a strong desire for power and recognition. Your
                working environment may undergo significant changes. You have the option of 
                changing jobs. This is the time when you truly need to feel valued and worthy
                </p>
                `
                break;

            case 'R':
                transitString += `
                
                
                <h3 class="bold-description-label">R Transit</h3> <br> <br> 
                <p>
                During this stage, you have a lot of understanding and insight. You'll have to
                cope with money, power, and leadership during this period. You have the chance
                to improve your financial situation as well as your personal development. It's a
                period of extreme ups and downs. You'll have to be extremely cautious and
                double-check your activities. This is a moment when you will encounter both the
                good and the bad. Therefore, anything you do and any decision you make must
                be done with prudence. Keep an eye on what's going on around you
                and unfamiliar surroundings.
                </p>
                `
                break;

            case 'S':
                transitString += `
                
                
                <h3 class="bold-description-label">S Transit</h3> <br> <br> 
                <p>
                You have a clear mind and are able to express your objectives accurately. It's a
                period of universal awakening, and the underlying anxieties and thoughts will
                come to the surface as well. During this time, you will achieve true independence
                in every meaning of the term. Prepare yourself for sudden changes in your life
                that will leave you feeling relieved and refreshed. You will comprehend and
                review your dreams. Once you've made the decision to alter your life, be prepared
                to face those who want to keep you from doing so. It's an exciting period, full of
                new and unexpected experiences.
                </p>
                `
                break;

                case 'T':
                    transitString += `
                    
                    
                    <h3 class="bold-description-label">T Transit</h3> <br> <br> 
                    <p>
                    During this time, you don't feel like discussing your thoughts with others. You
                    want to put yourself out there and do your job well, but you should be wary of
                    excessive self-pity. Take the time to think about every decision you make;
                    some solitude will be beneficial to you. You will have a great drive to learn new
                    things. You can try picking up a new activity, going on a trip, or educating
                    yourself in some way because your knowledge intake is high and productive
                    right now. This is a terrific and profitable moment for business and new
                    relationships, but you must protect your turf from those who want to interfere with
                    your efforts. know that this time is a terrific time for fresh collaboration, but
                    don't allow anyone to take advantage of it.
                    </p>
                    `
                    break;

                case 'U':
                    transitString += `
                    
                    
                    <h3 class="bold-description-label">U Transit</h3> <br> <br> 
                    <p>
                    During this period, you will notice an increase in intuition and perception, yet
                    you may be too relaxed for essential duties. You will have a lower level of
                    motivation than normal. Some pictures from your history may emerge, a lot of old
                    and long-forgotten emotional issues may surface, and individuals you've met before
                    may reappear. Pay greater attention to your family and friends. Make the most of
                    your instincts and ideas. You may accomplish remarkable success,
                    especially in the artistic and selfexpression fields, if you conquer your
                    laziness. Make use of it to advertise yourself. Therefore, this Transit can help
                    you achieve great things in the arts, particularly in writing, acting, music, and
                    so on. 
                    
                    </p>
                    `
                    break;

                case 'V':
                    transitString += `
                    
                    
                    <h3 class="bold-description-label">V Transit</h3> <br> <br> 
                    <p>
                    The letter V is by far the most mystical, mysterious, and spiritually potent of all the
                    letters. You'll have a strong intuitive sense and have revelations and deep religious
                    insights. You'll feel incredibly inspired, but you'll need some alone time to process
                    your ideas. This is also an excellent financial moment. You'll have the chance
                    to invest in potential businesses. You are able to pay off previous debts and
                    achieve increased wealth. You'll need to retain a firm grip on your tasks and pay
                    attention to your intuition.
                    </p>
                    `
                    break;

                case 'W':
                    transitString += `
                    
                    
                    <h3 class="bold-description-label">W Transit</h3> <br> <br> 
                    <p>
                    This is an excellent moment to forget about the past and focus on the future.
                    The letter W is usually associated with forthcoming adventures. You will,
                    nevertheless, occasionally feel disoriented and confused. To avoid
                    regrets, you'll need to get your act together and effectively manage your time
                    and life. Your major characteristics should be purposefulness and determination if
                    you want to succeed during this time. There may be some legal proceedings,
                    but you will come out on top. Pay greater attention to your physical well-being.
                    </p>
                    `
                    break;

            case 'X':
                transitString += `
                
                
                <h3 class="bold-description-label">X Transit</h3> <br> <br> 
                <p>
                You'll become more sensitive and your emotions will be extremely conflicted.
                During this time, stay away from unusual people and ideas; instead, wait until your
                thoughts have calmed down. Changes should be expected in all areas of your
                life, but they will be especially important in the area of romantic relationships. You're
                going to have a lot of problems if you keep anything from others who need to
                know about it. It's a fantastic moment to face your fears and expose the truth. You
                can typically make quick and helpful judgments, but you'll need someone to
                keep a close eye on you throughout this time. It is possible to obtain material
                wealth and achieve success.
                </p>
                `
                break;

            case 'Y':
                transitString += `
                
                
                <h3 class="bold-description-label">Y Transit</h3> <br> <br> 
                <p>
                It is a moment of spiritual development, maturation, and awareness of higher
                realms. Your intuition is well developed; thus, use it. You are highly intuitive, and
                psychic impressions will occur. During this period, soul-searching and
                mindfulness are incredibly useful to you. Try to reflect on your life and how you
                perceive it since the decisions you make now will have a significant impact on your
                future. Don't be scared of selfexamination; it will provide you with
                knowledge. You'll be on the lookout for new folks to add to your life. Keep a
                watch on your health because there might be some small issues, and avoid eating
                too much and eating items that aren't natural.
                </p>
                `
                break;

            case 'Z':
                transitString += `
                
                
                <h3 class="bold-description-label">Z Transit</h3> <br> <br> 
                <p>
                It's an energizing time of year. You are prepared for any degree of intricacy as
                well as a life progression. You will enjoy financial security throughout this period if
                you work honestly, and avoid schemes. Don't be frightened to follow
                your intuition because it is profound. A new and unusual relationship may
                develop which will cause many changes in your life, and you may even relocate to
                a new residence.
                
                </p>
                `
                break;

            default:
                break;
        }
    }; 
    phyText.innerHTML = transitString;



    var essenceText = (escyNum.textContent).trim();
    var essenceInt = essenceText.split('/');

    if (essenceText === '1' || essenceText === '10/1') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  1</h3> <br>
        <p>
        This Essence holds the energy to be unique, to make a fresh start, to take on
        and handle tasks on your own. It usually leads to success and promotions. You
        are on the verge of a new beginning. This might also be a time of transitions, such
        as leaving your home and traveling. You'll be full of ideas and willing to try anything
        new, and have a lot of energy. You will be able to develop your own leadership
        abilities. Things and people around you might constantly demand your attention,
        causing you a load of problems. Make an effort to protect and conserve your
        energy so you can achieve your goal. <br> <br>
        You'll feel liberated and have more options. It is a significant test of your
        willpower. This time will boost your selfconfidence, fearlessness, and self-
        awareness. You will be more connected with your internal self, and you
        will be able to quickly identify your genuine aspirations and ambitions. This
        time denotes doing things on your own or going alone, therefore it's an excellent
        time to start your own business or create something new and unique.
    
        </p>
    
        `
    } else if (essenceText === '11/2' || essenceInt[0] === '11') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  11/2</h3> <br>
        <p>
        Inspiration, intuition, a certain attraction, and occasionally tremendous
        accomplishment are favored by this Essence. This time is marked by an
        increase in emotionality and a complete shift in lifestyle. You are perceptive and
        energetic, and you may even have psychic abilities. Now that you know
        more, you can see and appreciate the horrific contrast between positive and
        negative in this world. You're overly sensitive, which might have a detrimental
        impact on you. As a result, you might wish to take a break from society for a
        while. After you've gone through the trials of this time, you'll know exactly what your
        objective is and how to achieve it. This time serves as a building block for your 
        future happiness. You will undergo an inner shift that will significantly affect you.
        It is a time of self-development. Trust your instincts, and they will guide you in
        the correct direction. Mindfulness and a connection with nature might help you
        find your center. Taking walks in the woods or a picnic by the lake are
        excellent ways to connect with your inner and outside world.
    
        </p>
    
        `
    } else if (essenceText === '16/7' || essenceInt[0] === '16') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  16/7</h3> <br>
        <p>
        This moment may appear to you like a storm wreaking on you, yet it is only a
        restructuring of your life. It's an emotionally trying period for you, and you
        were just not prepared for it. You may feel alone and lost. This time will also
        teach you to be appreciative. You will require some time to comprehend and
        assess all that has been presented to you. The love you ignore, the ability you
        possess, and the positive memories in your life that were created without your
        awareness. <br> <br>
        The 16 Essence is generally only present for a brief time. After this time, you will
        realize that you have become stronger and more self-reliant. It denotes the start
        of a new stage in life. It's time to express yourself and the simple words and
        it's crucial to your change. As a result, make an effort to become freer and more
        open and realize that your perspective isn't always correct. You may feel deeply
        disappointed at this time, but you must cultivate faith. Trust will enable you to
        persevere through difficult periods in your life with the assurance that things will
        improve. Consider, listening to soothing music, meditating, pray, and establishing
        spiritual habits for yourself.
    
        </p>
    
        `
    } else if (essenceText === '19/1' || essenceInt[0] === '19') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  19/1</h3> <br>
        <p>
        Your desire for independence will be as strong as it has ever been at this time.
        You're driven and determined. You realize that you must work hard today in
        order to create the foundation for your future financial security and
        accomplishment. Internal conflicts may arise as a result of an immediate conflict
        between your aspirations and the ones you love. Regardless of your viewpoint,
        strive not to silence your inner dialogue, which guides you toward better goals. <br> <br>
        distant and less talkative than in previous years, or even disappear from society.
        You might be irritated and perplexed when your aspirations demand greater
        and greater work, and you have little time to devote to them. During this essence,
        your major difficulty and goal are to maintain a balance between your desire
        for worldly wealth and higher ideals like love, morality, and relatives. Typically, a
        person's material well-being improves greatly towards the end, his or her job
        prospers, but interpersonal relationships deteriorate.
        
    
        </p>
    
        `
    } else if (essenceText === '22/4' || essenceInt[0] === '22') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  22/4</h3> <br>
        <p>
        This Essence is ideal for large projects, innovation, and high-quality ideas.
        Mastering the energy is both powerful and sensitive. Number 22's essence is
        one of the most potent of all numbers. It does have a strong desire to collaborate
        with others while also having a strong desire to create something valuable for
        the future. You'll be pragmatic, ambitious, team-oriented, diplomatic, disciplined,
        and self-assured. You will be extremely capable, powerful, and efficient. It's one
        of the most likely numbers to turn aspirations become reality. You must
        concentrate and plan for the future and build something that serves society.
    
        </p>
    
        `
    } else if (essenceText === '2' || essenceText === '20/2' || essenceInt[essenceInt.length - 1] === '2') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  2</h3> <br>
        <p>
        During this time, you should strive to communicate with others more and
        collaborate more. The focus is on partnerships, agreements, friendships,
        marriage, love life, and sentiments, as well as the difficulties that they entail. It's
        time to relax and follow the advice you've been given. You should wait for
        responses and the completion of previous acts, as well as consolidation
        and arrangement. You must make the most of your capacity to work together. <br> <br>
        Be gentle with people and events. It's important to keep in mind that there's no
        need to hurry. Be willing to accept assistance from others. Always look on
        the bright side of things and keep an optimistic attitude. Keep track of the
        specifics and complete the tasks you've set out to complete. Even though you are
        not a leader at this time, your intuition will guide you on the proper route. It's a good
        idea to pay attention to how your neurological system since you could be
        having anxiety issues. Try to be calm and meditate.
        
    
        </p>
    
        `
    } else if (essenceText === '3' || essenceText === '12/3' || essenceInt[essenceInt.length - 1] === '3') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  3</h3> <br>
        <p>
        This essence 3 conveys energy that may be used to communicate, express
        oneself, build, and sustain social relationships, as well as provide joy to
        one's life. Personal development, as well as the birth of a project or a baby. Your
        abilities will be highly valued, and you will be inspired artistically, particularly in 
        writing. Because of your charm, talent, and vibrant self-expression, you have a
        tremendous opportunity to advertise yourself. You will feel rejuvenated and
        pleased since you are in the spotlight. <br> <br>
        There will be a lot of social events. You can be pushed to research history,
        culture, or something else. Because you love connecting and engaging with
        others, you will be more motivated to work and your fresh enthusiasm for work
        may pay off financially. It's a time when all of your buried emotions rise to the
        surface, and all of the feelings you've blocked off will be revealed. Always
        speak to your rational mind and maintain your stability in this manner. You
        must avoid overspending and strive to make smart investments and choices. <br> <br>
        Consistently fulfill your responsibilities, and you will be rewarded at work. It is
        critical that you consider the long term rather than the short term when it comes
        to doing things such as investment or other things. Be careful of rushed
        weddings or get-rich-quick scams. <br> <br>
        Therefore, try to enjoy yourself and express yourself in many ways you can
        such as decorating, gardening, painting anything that makes you happy.
    
        </p>
    
        `
    } else if (essenceText === '4' || essenceInt[essenceInt.length - 1] === '4') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  4</h3> <br>
        <p>
        It's a time when you put in a lot of effort, save a lot of money, take care of your
        house and family, and advance in your job. It is indeed a materialistic time. You'll
        obtain what you've been striving for, so if you put in the effort, you'll be rewarded
        handsomely. It's a period when you can be certain of a secure future. This is a
        good time to be disciplined and pay attention to all elements of your life. It's a
        period of disclosures when you finally understand certain things that had
        previously perplexed you. Things may progress slowly, but if you stay
        disciplined and stick to the process, you will reap the benefits of your effort. This is
        a constricting and restricting moment that requires you to be vigilant in your task.
        Be prepared because many of those close to you, both family or friends, may
        beg for your assistance and make financial demands. Make appointments
        for health screenings and self-care. Try out just the things in which you are
        completely certain; else, any ambiguity will lead to disaster. Always make time
        for yourself when you're stressed. <br> <br>
        Maintain a healthy relationship with your body.
    
        </p>
    
        `
    } else if (essenceText === '5' || essenceInt[essenceInt.length - 1] === '5') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  5</h3> <br>
        <p>
        Changes, novelty, diversity, the possibility of moving, traveling, and
        transformations are all highlighted, as well as sensuality, emotive adventures,
        and pleasures. Breathe deeply and take command of the waves because you'll
        feel more independent and freer of your worries and routine. During this time,
        your current abilities will be enhanced and preferred. With the influx of new
        ideas and initiatives, business and financial improvement are also on the
        way. The people in your immediate vicinity are pleasant and helpful. <br> <br>
        Your self-expression is really vibrant and intriguing. It's a good time to go on
        adventures and work on yourself. You will have several possibilities to travel
        throughout the world and interact with people from other cultures. A lot of the
        behaviors and activities you used to like will just go from your life because you no
        longer require them. It is indeed part of the self-renewal process; you're
        transitioning to a new and improved person. <br> <br>
        At this time, your wants will be difficult to fulfill as you become more hypersensitive 
        and demanding. Strive not to overindulge in food, alcohol, sex, or substances. You
        can feel as though you're being pulled in every way. You may find yourself
        procrastinating and leaving things incomplete. Duties may bore you to
        death, and you will eventually abandon them. You are always on the go,
        traveling, and taking short vacations. Try to be disciplined and take care of your
        duties because if you fail to fulfill your responsibilities you might land yourself in
        hot water.
        </p>
    
        `
    } else if (essenceText === '6' || essenceInt[essenceInt.length - 1] === '6') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  6</h3> <br>
        <p>
        It's a period of responsibilities, liabilities, family relationships, personal
        development, commitments, marriage, the household, comfort, and the need to
        resolve a problem or assist others are all highlighted. People in your immediate
        vicinity will require your constant assistance, guidance, or attention. Others
        will be encouraged and influenced by you. It may be used to improve and
        decorate the inside of your home. You want to be surrounded by beautiful things
        while yet being able to relax and unwind. Know that unanticipated medical
        expenses may be a source of tragedy sometimes. <br> <br>
        During this time, you should expect your friendship, and financial situation to
        improve, and you’ll also be fortunate in your career and your romantic
        relationships will prosper. You could receive a raise or a monetary
        bonus. Know that close connection that affects your mental health should be
        avoided. You will be recognized and elevated in society if you have provided
        excellent service to others. You might be able to profit financially from the other
        sex. In your life, the subject of love will come up. People frequently realize what
        their genuine desires in their love life or spouse are, which leads to
        marriage or divorce if the commitment is broken.
    
        </p>
    
        `
    } else if (essenceText === '7') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  7</h3> <br>
        <p>
        Allow yourself some solitude and quiet to reconnect with your inner self. A moment
        of introversion, separation, reflection, knowledge, inquiry, philosophy, and
        intellectual camaraderie is represented by Essence Number 7. Your need for
        independence or alone will be evident. Finances might be favored to the extent
        that you allow things to come to you. Meditation, spiritual contemplation, and
        personal improvement are all connected with this period. Your investigation should
        be focused on yourself. You'll need some alone time to reflect on life and where
        you want to go, what you want to accomplish, and how you envision
        yourself in your aspirations. This is an excellent time to think about things that
        aren't material. It's time to investigate spiritual and religious practices and
        mysticism. <br> <br>
        You may experience coincidence and unexpected, which will prompt you to
        reconsider your life views. Make the most of your academic and artistic potential.
        Before you do anything, think about your long-term contentment. There may be
        some strain or tension if you are already married or in a relationship. To ensure
        your happiness, learn to regulate your thoughts and balance your emotions.
    
        </p>
    
        `
    } else if (essenceText === '8' || essenceInt[essenceInt.length - 1] === '8') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  8</h3> <br>
        <p>
        Essence Number 8 is a fortunate number in which you may easily advance
        financially and build your self-worth and net-worth. The focus is on business,
        projects, wealth, money, investments, and power, which may be beneficial but 
        can also be detrimental. This is a moment when you may be given authority and power.
        You could be asked to perform leadership roles or utilize your executive talents 
        to sort out financial matters. It's possible that you're involved in real estate during this time. <br> <br>
        During this time, money should be easy to come by. Make sure you manage your
        finances because while you may be making a lot, you may also be spending a
        lot. At this point, it's critical to remember that working in groups instead of doing
        everything by oneself yields better results. This Essence frequently brings
        up old memories, as well as previous obligations. People to whom you owe
        money may become a genuine issue, therefore it may be time to pay off your
        obligations and live a less stressful life. <br> <br>
        Many people will constantly ask or demand money from you, so be careful
        not to give all you have but be genuine to others. Although it’s a favorable time that
        can bring financial stability, it can also bring financial troubles, losses, situations
        that flip upside down, and your health may be put to the test. Be careful of getrich-quick 
        scams since your ambition might be heightened. 
    
        </p>
    
        `
    } else if (essenceText === '9' || essenceInt[essenceInt.length - 1] === '9') {
        essText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            The Transit and Essence cycles represent your inner state of mind,
        internal changes, and progress, as well as how you will manage any challenges
        you face in the future year. The essence - is how you feel from the inside.
        </p> <br> <br>
        
        <h3 class="bold-description-label ">Essence Number  9</h3> <br>
        <p>
        The essence number 9 significant transformation and might represent a
        moment when your emotions have a stronghold on you. According to the
        nature of your activities during the past years, the emphasis is placed on joyful
        results, goals, aspirations, exposure to the world, or disillusionment. Public life
        and travel to distant regions are occasionally favored. Because things are
        going to be dramatic, strive for balance and spiritual purification. The majority of
        your principles and authority will be questioned and re-examined. You'll make
        strides in areas you never imagined possible. You have a good chance of
        becoming deeper on a psychological and spiritual level. <br> <br>
        People and relationships that no longer serve you will end. The behaviors you
        believed defined you are likely to alter or go away. Many gifts can come your way
        if you stay open-minded, trustworthy, and kind throughout this period. However, on
        the other hand, romantic affairs and love partnerships may bloom at this time. <br> <br>
        Losses are possible at this time, yet these catastrophes will pave the way for
        a new and brighter beginning and even greater prospects. You’ll gain some
        material gain during this period, as well as better commercial and government
        relations. If you're an artist, this time period is associated with creative
        advancement, new ideas, and a plethora of other prospects for artistic
        advancement. To prevent lawsuits and conflict, it is critical to be completely
        honest.
    
        </p>
    
        `
    } 


    // Personal Cycles 
    cYear.innerHTML = currentYear;

    // Personal Year 
    var sum = 0;
    mSplit = String(currentYear).split('');
    xsum = eval(mSplit.join('+'));
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
        sumDayArray = xsum;
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
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var keepDay = sumDayArray;
    var kdHold = sum;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        cYearNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (sum === 10) {
        cYearNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
            cYearNum.innerHTML = '11/<b>2</b>';
            sum = 2;
            break
        } else if(sum === 22) {
            cYearNum.innerHTML = '22/<b>4</b>';
            sum = 4;
            break;
        } else if (sum === 33) {
            cYearNum.innerHTML = '33/<b>6</b>';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            if (sum === 10) {
                cYearNum.innerHTML = '<b>1</b>';
            } else {
                cYearNum.innerHTML = '<b>' +sum + '</b>';
            }
        }
    };

    var perCYText = (cYearNum.textContent).trim();
    var perCYInt = perCYText.split('/');

    if (perCYText === '1' || perCYText === '10/1' || perCYInt[perCYInt.length - 1] === '1') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
    
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 1</h3> <br>
        <p>
            <p class="border">New beginnings, independent, adjustments to direction of life, plant new seed, leadership</p>
            You're at the start of your pinnacle cycle. There will be a lot of change and new
        beginnings for you (could be in career, family, love, relationship, friends, in
        everything). This year, you'll have a lot of energy. You must take the initiative and
        start new activities. This is a great year to start anything new. This year, you'll be
        focused heavily on yourself. Remember that whatever you do this year will have an
        impact on you in the future, so do well and build something you desire (business,
        etc.). This year is a period of rebirth, as last year was a time of letting go at your last
        pinnacle. This is the time to take responsibility for your own destiny and future. <br> <br>
        Personal Year 1 is associated with freedom, new beginnings, opportunity, and people
        like to do things their own way during this year. There is a strong desire to go forward,
        better conditions, establish uniqueness, and move on with one's life. You will meet
        new people and learn new things, and you will be full of energy, willpower, and
        courage. Ambitions, independence, leadership characteristics, decisiveness,
        ingenuity, and the desire to take initiative are all-natural to you this year. If you have a
        partner, it might be tough for your partner who is used to doing everything together to
        understand that you are starting to do things on your own and desire to be more
        independent in certain ways. Your partners may develop suspensions and demand an
        explanation, or they may begin to feel excluded and question where they went wrong.
        However, some people in Personal Year 1 may feel quite lonely, have difficulty
        making friends, and have trouble in their existing relationships. <br> <br>
        Recognize that this is the year to make a difference and take action. Because
        everything is changing, this is the year to reconsider your style, old beliefs, and
        worldview. It's time to put your plans into action and make your ambitions a reality. It's
        the start of a whole different era for you, one packed with vivid feelings and changes,
        and this is an ideal year to plan your future. This is the year to broaden your horizons
        and become more adaptable. All of your previous troubles will fade away as the new
        year brings fresh events into focus. You should let go of your past in order to be
        content, otherwise, you may probably wind up becoming the one who hangs on the
        past. People and things will disclose their true selves to you this year. <br> <br>
        Know that the bright side is that such a year may be full of fresh new ideas, giving you
        a break from the previous year's excessive duties. If you've worked hard for years to
        reach a goal, you'll be rewarded for your efforts during this vibration; you may even be
        promoted at work or receive news that will transform your life for the better. It’s a year
        to plant new seeds for the future. This is not a year for partnership so you should do
        things on your own. <br> <br>
        On the bad side, you'll be impulsive and make rash judgments, as well as
        opinionated, chauvinistic, combative, may experience headache and tension,
        impatient, and cynical to a degree. Although you may face challenges this year; avoid
        procrastination and have an optimistic attitude. A fantastic opportunity will present
        itself to you. <br> <br>
        Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
        <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year
        </p>
    
        `
    }else if (perCYText === '11/2' || perCYInt[0] === '11') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 11/2</h3> <br> <br>
        <p>
            <p class="border">Inspiration, adaptability, diplomacy, relationships, partnerships, cooperation, receptivity</p> <br>
            You should expect huge changes in your life if your personal year number is 11.
            You'd be aspirational, with new ideas and objectives. This is an excellent time to plan
            and make decisions in your life. Get suggestions and encouragement from your
            friends and relatives. Anything you do today will have an impact on your future, so
            proceed with caution. In actuality, there would be greater commitment. Allow your
            ideas to fly. This is also an excellent time to make significant changes in your life, like
            beginning something new or enrolling in a new field of study. You'll face some
            emotional roadblocks along the way, but keep going forward. The only thing that
            collects grass is a moving stone. <br> <br>
            People can collect inspiring energy at a higher level under the influence of the year,
            which they can then utilize to inspire others. Be prepared for anything this year. This
            master number 11 has the ability to bring enlightenment, inspiration, and spirituality
            into one's life. Your psychic abilities may improve, and your intuition will sharpen. You
            can discover love, meet your soulmate, or twin flame. Caffeine and alcohol should not
            be consumed in large quantities. <br> <br>
            During this time, people will conceal emotions from others they encounter. They can
            also hone their intuitive abilities to the point where they can sense and bring to the
            surface sensations that others cannot. People will be able to detect and unleash the
            hidden characteristics and opportunities in everything they meet during Personal Year
            11, and if they can calmly and thoroughly utilize all they see around them, they will be
            able to assist others in realizing their aspirations. Any tension this year will be tiring,
            but those who can use Personal Year 11's intuitive qualities to express kindness and
            provide a bit of assistance may find tremendous delight. Be aware of depression,
            anxiety, and emotional imbalance this year. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year
        
        </p>
    
        `
    } else if (perCYText === '22/4' || perCYInt[0] === '22') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 22/4</h3> <br>
        <p>
            <p class="border">Work, foundations, family, health</p> <br>
            You should expect a lot of huge things if you put in a lot of effort with master 22 this
            year. You will be put to test to create something long-lasting and substantial for the
            future. It may be necessary to demolish something in order to construct something
            new, but whatever you make will be better and more stable. So, if you see something
            has been taken away from your life, know that you will rebuild and that something
            greater is on the way. This is an excellent year for finding love. Try not to put too
            much pressure on yourself. <br> <br> 
            Know that this year, more than in past years, you will have a lot of steadiness in your
            life. A steady relationship is possible. It's possible that you'll need to be more focused
            and work harder. You will put in a lot of effort and be successful. You will be tested
            and limited, but you will be rewarded afterward for your perseverance. Don't overwork
            yourself and try to have a good time. It's time to buy a home or make an investment in
            real estate. Although much may be accomplished at this time, it is vital to learn how to
            organize one's life and channel energy positively; otherwise, stress can induce
            nervous strain or even physical sickness. When challenged, the native would be
            limited, frustrated, disorderly, sluggish, rigid, and furious. <br> <br>
            Personal Year 22/4 may be a tremendous success if you try and relax and cope with
            this energy and sometimes difficulties may arise. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year
        
        </p>
    
        `
    } else if (perCYText === '33/6' || perCYInt[0] === '33') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 33/6</h3> <br>
        <p>
            <p class="border">Teaching, healing, responsibility, family, burdens, search for peace, love, balance, harmony</p> <br>
            Big things are likely to occur that are unexpected and unforeseeable. This may be a
            difficult year, but you will be rewarded. This is a year of personal healing; you will
            have the ability to heal yourself or others. Your guardian angels will keep a careful
            eye on you. This is a year for you to give advice and guidance to others. This year,
            you'll be more innovative and attractive. You'll be assisting a large number of folks in
            any manner you can. <br> <br>
            This year, you will be responsible for a number of things, including your family,
            children, community, and career. The attention is on other people or things, such as
            your house. You'll be more engaged and disciplined. A major career and business
            opportunity may present itself to you. If you are jobless, you will most likely find work
            or get promoted. This year, you'll feel more loved and appreciated. Partnership or
            marital problems might emerge, especially if the relationship is broken. It's an
            excellent year for finding a partner or going on a date, getting married, having a
            family, purchasing a home, or renovating an existing property. During this year,
            people from your past may reappear in your life. You will be rewarded if you try to be
            of help to others. You may want to improve your appearance and dress properly since
            you will desire to appear more lovely than ever before. Although this is a year of love,
            it is also a year to end a bad relationship if you’re unhappy. <br> <br>
            The drawbacks are that you will experience guilt, self-sacrificing, resentment,
            selfishness, loss, and instability on a regular basis. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year
        
        </p>
    
        `
    } else if (perCYText === '2' || perCYText === '20/2' || perCYInt[perCYInt.length - 1] === '2') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 2</h3> <br>
        <p>
            <p class="border">Adaptability, diplomacy, relationships, partnerships, cooperation, receptivity</p> <br>
            This personal number 2 denotes sensitivity, tact, diplomacy, cooperation with others,
            persuasion, modesty in lifestyle, resilience in the face of adversity, outgoing, friendly,
            amorous, healing, and soothing in partnerships. You will be more inclined to work
            together this year, as well as more understanding and involvement. It is the year in
            which it is possible to expand and mature ideas that emerged in Personal Year 1, as
            well as to take advantage of new chances and make the most of them. Seeds were
            planted in Personal Year 1 that can now germinate and flourish in Personal Year 2.
            You will feel better if others assist you and if you are able to share your views with
            others. You won't need to spend as much time alone as you did last year, and you'll
            feel much more at ease with yourself. <br> <br>
            You will see a lot of improvement in the field of relationships, but if you work alone,
            you will not get very far. This year marks the beginning of a new partnership that will
            be balanced and cheerful. If you're already in a relationship, you'll have the energy to
            make it work again. When dealing with others, avoid becoming obnoxious. This year,
            your intuition will be enhanced. Because you will be more sensitive, try to safeguard
            your energy. You may be unhappy, nervous, and tired compared to the previous year.
            This is a slow-paced year, and you will notice that things move slowly. Since you will
            have less energy this year, it is not a good year to start a business or do anything
            substantial. If you are wise in all of your relationships, you will most likely discover
            your soulmate or twin flame this year and be able to develop a successful romantic
            relationship. <br> <br>
            Because this year comes with emotional instability, the most important areas for you
            to focus on are communication and comprehension. It's time to grow and meet new
            individuals who may provide you with fresh perspectives and innovative ideas. Don't
            rush your projects, this is a year for reflection and accumulation rather than action.
            Before taking any actions that may have financial implications, double-check
            everything. Make time for yourself and your personal growth. There will be a lot of
            ordinary chores to complete this year. Pay attention to your body, educate yourself on
            vitamins, and pick an activity that best meets your needs. <br> <br>
            Personal Year two is ideal for establishing new relationships and finding love. It's the
            year when individuals make more friends and get along better with others. It's a time
            when people need to express themselves and share significant sentiments and
            experiences from their daily lives. Stress would be felt strongly by you during this
            vibration; thus, it is critical that you live in a quiet atmosphere where you can retain a
            sense of balance in your life; otherwise, you risk becoming unwell or emotional. You
            may experience digestion and stomach issues, so drink plenty of fluid and stay active
            during this year. <br> <br>
            On the negative side, you are likely to be self-conscious, anxious, emotional
            instability, hot-temped, timid, and discordant with those around you. You are also
            likely to be deceitful, melodramatic, and cowardly. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '3' || perCYText === '12/3' || perCYInt[perCYInt.length - 1] === '3') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 3</h3> <br>
        <p>
            <p class="border">The social life, communication, creativity, happy/joy, self-expression</p> <br>
            This personal number 3 denotes a strong level of creativity, imagination, inspiration,
            motivation, and optimism in life. When it comes to your natural characteristics, you'll
            be considered to be highly self-expressive, lively, joyous, lucky, beautiful, loving, and
            prophetic. As a result, if you have number 3, you are planning something spectacular
            this year. It will be pleasant and profitable to you in the majority of your endeavors.
            You will be given full credit for whatever you have accomplished. You will be
            rewarded if you were challenged at work. If you've been having relationship issues,
            you'll finally be able to deal with them and feel better. If you experienced any issues,
            you should wait until the fourth quarter of the year to get them fixed. <br> <br>
            There's no way you'll be bored in year three because it's jam-packed with exciting
            events. You will be presented with several opportunities. It's a great year to start
            anything new, such as a family or baby. You'll have a lot of energy. This year, all
            forms of communication, including the internet, media, writing, and podcasting, will be
            embraced. Attempt to avoid working on many projects at the same time. You'll
            experience a lot of fun and happiness. Before making any major decisions, you
            should consider them again. Avoid making any unintended purchases or taking any
            spontaneous vacations. Consider organizing your schedule and turning on your calm
            mode at least once a week, as you need to relax and prepare for the next year. This
            is not the year for mundane, day-to-day activity. This year, individuals are becoming
            more innovative, and all activities must be demanding and interesting in order to fully
            utilize the available intellectual energy. <br> <br>
            People may be compelled to cope with the past this year, with a variety of unresolved
            relationships and circumstances. It's almost astounding how many individuals meet
            with family or old friends they haven't seen in a long time during this personal year to
            attempt to settle buried problems they didn't want to think about until now. When
            individuals strive to solve their problems via reasonable discussion, the emotional
            distress of the circumstance naturally fades away. This is also the optimum time to
            study because brain energy is at its highest. This is a great year to earn money, sell
            property, invest, travel, and socialize. <br> <br>
            There would be some egoism, impulsiveness, manipulative, dispersed energy
            resulting in losses, disappointment, emotional overload, stress, moodiness, 
            gossipiest, nervousness, fatigue, extravagance, and criticalness among the
            drawbacks.
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '4' || perCYText === '13/4' || perCYInt[perCYInt.length - 1] === '4') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 4</h3> <br>
        <p>
            <p class="border">Work, foundations, family, health</p> <br>
            Personal year number 4 is associated with hard work and getting things done, with an
            emphasis on laying a more solid foundation for the future. It's a pragmatic and
            resourceful year, with a practical vitality. This year, more than the previous year, you
            will have a lot of steadiness in your life. A stable relationship is possible. You'll be
            more focused and work harder, and you'll achieve your goals. This is the year to lay
            the groundwork for the next generation. You will be tested and limited, but you will be
            rewarded for your perseverance eventually. Don't overwork yourself and try to have a
            good time. It's a fantastic moment to purchase a house, make real estate
            investments, or put money into investments or activities you enjoy. <br> <br>
            You'd be an excellent manager this year because you're hardworking, proactive,
            detail-oriented, dependable, timely, realistic, systematic in your thoughts and deeds,
            of constructive ideas, driven, concentrative, and perseverant until the finish. Because
            you may feel uneasy and doubtful about your abilities to attain success in life this
            year, you will seek support and encouragement. It's because you're so focused on
            your job that you don't recognize how far you've come. Much may be accomplished at
            this time, but it is vital to learn how to organize one's life and channel energy
            positively; otherwise, stress can induce nervous strain or even physical sickness.
            When challenged, the native would be limited, frustrated, tired, disorderly, sluggish,
            rigid, and furious. Watch out for back pain, kidneys, or bladder issues. Try to exercise
            as much as you can to reduce your stress level. <br> <br>
            Personal Year 4 may be a tremendous success if you try and relax and cope with the
            energy and the difficulties. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '5' || perCYInt[perCYInt.length - 1] === '5') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 5</h3> <br>
        <p>
            <p class="border">Change, instability, Traveling, adventure, new experiences, creativity, freedom</p> <br>
            This would be a good year to take a break because your personal year 4 was quite
            demanding and involved a lot of labor. During Personal Year 5, people place a high
            value on freedom, which includes both freedom of thinking, the ability to explore one's
            own ideas without excessive influence or pressure from others, and freedom of
            movement. This year, you'll want to get out into nature and be alone for a bit while 
            thinking, but you'll also want to meet new people and build friendships. You can have
            a good time and travel this year. You'll feel more relaxed, excited, and ready to meet
            new people or dating. If you're already in a relationship, you can make it more
            enjoyable and romantic. You will experience some changes in your life, including the
            possibility of relocating, and much goodwill result. This will be an unpredictable and
            surprising year, so be prepared for everything, including unexpected adventures.
            Avoid becoming unstable by drinking excessively or experimenting. <br> <br>
            The energy of number five encourages us to cope with change responsibly while also
            considering the needs of those who may be impacted, so strengthening our own drive
            and self-discipline. Then it will be easier to focus all of one's efforts on one problem at
            a time, rather than being distracted by attempting to tackle too many things at once.
            You can find tremendous inspiration this year, and if you select a goal and focus on it,
            your energy levels will remain strong. As a result, you are a dynamic, progressive,
            vocal, social with others, original, faster, flexible, adaptive to changes, creative,
            versatile, freedom-loving, accepting of restriction, amorous, adventurous, and travelloving character with a 5 personal number.
            The disadvantages include a lack of concentration, anxiety, limb injuries, insomnia,
            restlessness, changeability, nervousness, impatience, the potential to be
            untrustworthy at times, avoid substance use, unpredictable, and dissatisfied in
            relationships.
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '6' || perCYInt[perCYInt.length - 1] === '6') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 6</h3> <br>
        <p>
            <p class="border">Responsibility, family, burdens, search for peace, love, balance, harmony</p> <br>
            This year, you will be responsible for a number of things, including your family,
            children, community, and career. The attention is on other people or things, such as
            your house. You'll be more engaged and disciplined. A major career and business
            opportunity may present itself to you. If you are jobless, you will most likely find work
            or get promoted. This year, you'll feel more loved and appreciated. Partnership or
            marital problems might emerge, especially if the relationship is broken. It's an
            excellent year for finding a partner or going on a date, getting married, having a
            family, purchasing a home, or renovating an existing property. During this year,
            people from your past may reappear in your life. You will be rewarded if you try to be
            of help to others. You may also be tested to take on more responsibility at work or at
            home. You may want to improve your appearance and dress properly since you will
            desire to appear more lovely than ever before. Although this is a year of love, it is also
            a year to end a bad relationship if you’re unhappy. <br> <br>
            The energy of this year will make you a domestic-loving person, devoted to
            relationships, helpful to people around you, self-sacrificing, peaceful, loving, kind, 
            sympathetic, counseling, balanced, happy with material resources, responsive,
            romantic, artistic, and proficient in talents if you have a 6 personal number.
            The drawbacks are that you may experience guilt, resentment, frustration, burden,
            selfishness, loss, lung issues, and instability on a regular basis. Try to eat healthily
            and exercise. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '7' || perCYInt[perCYInt.length - 1] === '7') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 7</h3> <br>
        <p>
            <p class="border">Study, soul-searching, research, the inner life, spirituality, withdraw, honing skills, meditation</p> <br>
        
            This is a spiritually significant year where you’re supposed to research and try to
            know who you are at the soul level. You'll spend a lot of time inside your mind. This is
            a contemplative year, and you'll be reflecting on where you've been and where you're
            going. You'll reflect on the past and the future, as well as where you wish to go in life.
            What aspect of your life would you like to improve? This is a year for you to grow
            spiritually and learn about yourself. You'll spend a lot of time analyzing yourself or the
            environment around you. Because your mental ability is high, this is an excellent year
            for studying or earning a degree so that your mind can keep working instead of
            wondering. <br> <br>
            Because 7 is a spiritual number, you may have a spiritual awakening, acquire psychic
            abilities, become more religious, have heightened intuition, and sense a stronger
            connection to God or sources on all levels. This is the year you withdraw from society
            and take some time to reflect on your life. This is a soul-searching year in which you
            must look within to discover more about yourself, who you are, and what your mission
            is in this life. This is not a good year for business or significant projects since you are
            likely to have many delays, obstacles, and setbacks. It's also not a good year to catch
            up with friends because your communication is not good due to overwhelming
            emotions. However, try your best to stay close to family so you don’t be too lonely.
            In this period, you may be mentally challenging, with many misconceptions, anxiety,
            disobedience, impatience, questioning, depression, or inconveniences. You'll put in a
            lot of hours yet make very little. Internal conflicts have arisen within you, then you
            have no understanding of where they originated from, so you'll have less energy at
            this time. You'll be forced to speak your feelings as a result of your emotional pain,
            which can quickly lead to disputes. Strive to be cool, relax, and come up with an
            alternative that benefits all parties. If you’re facing legal issues, you should settle the
            matter instead of fighting it. Because your financial situation isn't ideal, be cautious of
            bad investments, and scammers, and consider things very thoroughly. Try to
            meditate, relax, get a massage, watch your favorite TV show or movie, read, reflect,
            or go on a walk in the woods/nature or by the sea. Enjoy the beauty of life rather than
            focusing on the material world this year. Try not to spend a lot of money which you
            may regret later, and this is not the time to make short-term investments. It’s also not
            a time to sign contracts or agreements. <br> <br>
            So, if you had negative feelings/emotions before entering this 7th year, you will face
            many emotional obstacles and this year may be difficult for you. Be aware that the
            energies of number seven cause processes in the brain that can be quite hurtful to
            emotions. Expect changes to occur in friendships and sexual relationships, at home
            and in the workplace, and even in one's soul, making this a difficult year. You may
            not get along with your loved ones, which might lead to you growing apart and ending
            up in a divorce or separation. The goal of challenges that develop during this time is
            for the person to reconnect with his own internal capabilities and begin to depend on
            oneself rather than others, as well as to recognize his own strengths. <br> <br>
            Understand that the Personal Year 7 is a year of spiritual instead of physical growth,
            so everything that transpires during this year causes the individual to focus on
            spiritual matters such as life, life lessons, death, and life beyond death. People may
            be afflicted or lose a friend or relative this year. In terrible life conditions, people may
            be required to care for others or to demonstrate compassion and empathy. If it is for
            someone outside of their immediate family, it is likely that the individual going through
            Personal Year 7 psychological alterations will be unable to offer emotional help to
            another. As a result, if you are conscious of yourself or at a good spiritual place in
            your life, 7 may be a magnificent year. Though, after a difficult seven years, you may
            recognize that your challenges aren't quite as serious as they once appeared. You will
            continue to grow and change in the way that God desires. <br>  <br>
            The other negative side of the year 7 is that you can be isolated, depressed, anxious,
            angry, paranoid, distrustful, suspicious, feeling like you’re going crazy, and
            possessive. Try to get a complete health check at the end of this year since all the
            emotional distress may have an impact on your wellbeing. <br> <br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '8' || perCYInt[perCYInt.length - 1] === '8') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 8</h3> <br>
        <p>
            <p class="border">Career, promotion, results, power, investment, accomplishment, money, business</p> <br>
            Business, accomplishment, results, capital gains, and material acquisition are all
            themes that come up in personal year number eight. It's usually a year of success.
            This energy is usually associated with a desire to improve one's financial situation.
            This is a breakthrough year. This year is the year of achievement, money, power, and
            promotion. Whatever you've been struggling with for the last seven years is now over.
            This is the year of the light at the end of the tunnel since all will work out for the
            better in the end. Last year may have been a depressing year in which you didn't
            have much energy to accomplish anything or setback, but this year, you'll have plenty
            of energy to do anything you want. This is an excellent year to start up a business and
            it will be profitable. <br><br>
            If you are unemployed, you can find a secure employment or advance in your career
            at any level. You'll be more confident, have a great investment year, and have a
            business-like-minded, efficient, focused, strong, profitable attitude. You'll be
            respected, recognized, generous, powerful, and authoritative by nature. This year,
            you will be a visionary and a planner, and you're good with agreements, sales, and
            money, as well as being a smart judge of character. Keep an eye on your finances
            since you may wind up spending a lot of money, and many people may seek and
            demand financial assistance from you. Be generous and kind to others. You'll be able
            to build a financial foundation for yourself that will remain steady. It is also possible to
            strike a pleasant balance in love relationships. Even though personal year number 8
            is a successful year, there could also be disappointments or losses. <br> <br>
            Understand that the number eight represents karma and balance, therefore the
            achievement of this time is determined by how good the individual has been in his life
            thus far. If he puts in a lot of effort, thought, and goodwill, he will more than likely be
            honored, if he is greedy and acts without regard and compassion for others, he will
            most likely receive what he deserves. Karma is a cycle of a sequence of events
            including giving and receiving, fairness and injustice, action and response that
            continues until a natural equilibrium is reached and maintained. <br> <br>
            Even though your health will strengthen this year and your physical state will
            increase, the bad side of number 8 is that you may be greedy to some level, hungry
            for money or materialistic, dishonest, have money issues, and you may be aggressive
            at times. Watch out for headaches or high blood pressure. <br><br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } else if (perCYText === '9' || perCYInt[perCYInt.length - 1] === '9') {
        perYearText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
            
            The Personal Year Cycles disclose external influences, changing circumstances,
            situations, opportunities, and challenges for the upcoming year. 
            Your personal year number is based on your month and day of birth. It gives you awareness into the current calendar year. The energy begins January 1st – December 31st. It describes the energies that you'll have and what may happen.

            To calculate the Personal Year # for a given year, first reduce the numbers of the birthday, month, and given year to a single digit.
           </p> <br> <br>
        
        <h3 class="bold-description-label red-span">Personal Year - 9</h3> <br>
        <p>
            <p class="border">Endings, Letting go of the old, charity, humanitarianism, the arts, completion</p> <br>
            Congratulations on the completion of your 9-year cycle. Personal Year 9 indicates the
            completion and end of cycles, as well as the preparation to proceed to a higher level
            with Personal Year 1 in the future year. Whatever you've been struggling with for the
            past eight years, that's the end of it. This year is about letting go of bad habits, poor
            relationships, and negative experiences, among other things. People may feel as
            though their stuff, situations, and relationships are getting out of control during this
            period, and may feel worried and dissatisfied. There will be numerous endings this
            year; in other words, a lot of things will come to an end. <br> <br>
            Don’t start anything important this year since it makes marks the end of a cycle and
            do not start a relationship this year since it may end quickly. During this year,
            someone from your past may visit or appear. You will be put to test to take care of
            others or help others, such as your family, children, community, or by doing
            something public. This is the year to clean up your residence, pay off old debt, donate
            generously, and compromise. This is a moment for reflection and can be emotional. <br> <br> 
            This year, your relationship may be smoother or terminate totally. Divorce and
            separation are both common events. Make positive space for next year as your 9-
            year pinnacle cycle comes to a conclusion. <br><br> 
            During this time, people may relocate, change careers, travel greater distances,
            redirect their efforts, or lose something of significant worth. It is indeed the year in
            which people are given responsibilities or assume responsibility for oneself, and for a
            part of their lives that they've always desired to alter. It can occur inside the family,
            such as via marriage, the birth of a kid, or the buying of real estate, or it can occur
            outside the family, such as through job or community engagements. People are
            compelled to restructure their goals during this time, and this sparks numerous ideas,
            which are then nurtured and extended in the following cycle. <br> <br>
            This year's events and duties raise awareness and allow for spiritual and
            personal transformation. Personal Year 9, along with Four and Seven, is among the
            most challenging years, yet despite all of the obstacles that individuals seem to
            encounter throughout this period, it provides them with the chance to learn something
            different and strengthen their characters by becoming their true self. <br> <br>
            Indifference, coldness, narcissism, aloofness, isolation, and self-pity are all
            undesirable traits that should be avoided at all costs. <br><br>
            Keep in mind that, in addition to the pinnacle you're in, the <b>physical</b>, <b>mental</b>, and
            <b>spiritual</b> transits you're having that year will have a <span class='underline'>big impact</span> on your personal year.

        </p>
    
        `
    } 

    


    // Personal Month 
    var monthNum = new Date().getMonth();
    monthNum = monthNum + 1;

    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var d = new Date();
    let name = month[d.getMonth()];
    cMonth.innerHTML = name;

    if (monthNum === 10) {
        monthNum = 1;
    } else if (monthNum == 11) {
            monthNum = 11
    } else if (monthNum === 12) {
        monthNum = 3;
    } else {
        monthNum;
    };

    var cYearText = cYearNum.textContent;
    var cYearInt;
    if (cYearText === '11/2') {
        cYearInt = 11;
    } else if (cYearText === '22/4') {
        cYearInt = 22;
    } else if (cYearText === '33/6') {
        cYearInt = 33;
    } else {
        cYearInt = Number(cYearText)
    }
    var personalMonth = monthNum + cYearInt ;
    if (personalMonth < 10) {
        personalMonth;
    } else if (personalMonth === 10) {
        personalMonth = 1
    } else if (personalMonth === 11) {
        personalMonth = '11/2'
    } else if (personalMonth === 22) {
        personalMonth = '22/4'
    } else if (personalMonth === 33) {
        personalMonth = '33/6'
    } else if (personalMonth > 10) {
        mSplit = String(personalMonth).split('');
        personalMonth = eval(mSplit.join('+'));
        if (personalMonth < 10) {
            personalMonth;
        } else if (personalMonth === 10) {
            personalMonth = 1;
        } else if (personalMonth === 11) {
            personalMonth = '11/2'
        } else if (personalMonth === 22) {
            personalMonth = '22/4'
        } else if (personalMonth === 33) {
            personalMonth = '33/6'
        } else if (personalMonth > 10) {
            mSplit = String(personalMonth).split('');
            personalMonth = eval(mSplit.join('+'));
        };
    };
    cMonthNum.innerHTML = '<b>' + personalMonth + '</b>';

    var perCMText = (cMonthNum.textContent).trim();
    var perCMInt = perCYText.split('/');


    if (perCMText === '1' || perCMText === '10/1' || perCMInt[perCMInt.length - 1] === '1') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        </p> <br>
        
        <h3 class="bold-description-label ">Personal Month - 1</h3> <br>
        <p>
            <p class="blue">New beginnings, adjustments to direction of life, leadership, plant new seeds, independent.</p> <br>
            You're starting at the beginning of your personal first-month cycle. You will
            experience some change and a fresh start in your profession, family, love,
            relationship, friends, and everything else. This month, you'll have a lot of energy.
            You will feel the energy of leadership, freedom, confidence, and
            independence. The emphasis is on you and your future plans. Be willing to try
            new things and meet new people. If you have an idea in the month preceding to
            this month, now is the time to put it into action. Override other people's counsel
            with your own instincts and judgment. You are in control of your life and its
            circumstances this month. <br><br>
            This is a great month to get started on whatever you desire. This month, you'll put more emphasis on yourself.
            Recognize that whatever you do this month will have an impact, so do well and
            develop something you enjoy, whether it's a business or anything else. This month
            is a time for rebirth and for planting new seeds so use your time wisely. This is the
            time to take responsibility for your own destiny and future. Be careful who you
            meet this month or what you start this month because that relationship may last
            a long time. 
        </p>
    
        `
    } else if (perCMText === '11/2' || perCMInt[0] === '11') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
          
        </p> <br>
        
        <h3 class="bold-description-label ">Personal Month - 11/2</h3> <br>
        <p>
            <br>
            <p class="blue">Adaptability, relationships, collaboration partnerships, cooperation, receptivity.</p> <br>
            The master number 11's personal month energy is profoundly spiritual in character.
            A month for contemplation on life's greater aims. This month, be a reflection
            of light and motivation for others. Describe your ideals and aspirations. This
            is not a month for self-indulgence, but rather for collaborating with others for the
            greater benefit. It has an intuitive quality to it, as well as charm, harmony, and
            calm. It inspires a focus on the spiritual sides of relationships as well as a desire
            to teach. Being a team player, considering each other's feelings, playing
            the role of mediator, and settling conflicts with grace and diplomacy are all
            important qualities. Relationships are expected to take center stage. Spend
            time with love one.
        </p>
    
        `
    } else if (perCMText === '22/4' || perCMInt[0] === '22') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
          
        </p> <br>
        
        <h3 class="bold-description-label ">Personal Month - 22/4</h3> <br>
        <p>
            <br>
            <p class="blue">Work, foundations, family, health</p> <br>
            The energy of this month is resonant with producing things that are both societal
            and spiritually beneficial. It is realistic, systematic, self-assured, and typically
            finds it simple to enlist the help of others to achieve a common objective. This
            month energy is systematic. It usually attracts the notion that the best approach
            to get things done is to do them the way they've always been done effectively. It
            also raises the issue of laying a solid basis for the future
            
        </p>
    
        `
    } else if (perCMText === '33/6' || perCMInt[0] === '33') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label ">Personal Month - 33/6</h3> <br>
        <p>
            <br>
            <p class="blue">Responsibility, family, home, search for peace, balance, love, and harmony.</p> <br>
            This master number's energy is pleasant, caring, and brings about harmony. It
            conjures up images of caring, instructing, and guiding a group of individuals toward
            a common purpose. The predominant focus is home and family. It is an energy
            that inspires people to be nurtured and supported. Also, the formation of an ideal
            relating to society's actions and goals in general. You can be taking care of
            children, family member, or others. 
        </p>
    
        `
    } else if (perCMText === '2' || perCMText === '20/2' || perCMInt[perCMInt.length - 1] === '2') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 2</h3> <br>
        <p>
            <p class="blue">Adaptability, relationships, collaboration partnerships, cooperation, receptivity.</p> <br>
            This personal month 2 denotes  sensitivity, tact, diplomacy, cooperation
            with others, persuasion, modesty in  lifestyle, resilience in the face of
            adversity, outgoing, friendly, amorous,  healing, and soothing in partnerships.
            The second month is ideal for being  surrounded by friends and family. Now is
            the moment to work together and interact  with others. This is a good month to take
            a break since you will have less energy. If  you require assistance, ask for it. You can
            feel as if you're going backward rather  than forwards. Keep your cool and relax
            so you don't get into any trouble. It's a  bad time to do business. Be cautious with
            your money month, as you may wind up  spending a lot. Do not make rash
            decisions. It's a fantastic month to look for  love and go on a date. Try your best to
            show understanding and collaboration. <br> <br>
            Anxiety, depression, rage, disorganization, dishonesty, hypocrisy,
            and a lack of willpower are all negative attributes.
        </p>
    
        `
    } else if (perCMText === '3' || perCMText === '12/3' || perCMInt[perCMInt.length - 1] === '3') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 3</h3> <br>
        <p>
            <p class="blue">The social life, creativity, joyful/fun, selfexpression, communication</p> <br>
            There's no way you'll be bored in the month of three because it's jam-packed
            with exciting events. You will be presented with several opportunities. It's
            a great month to start anything new, such as a family or baby. This month, you'll
            have a lot of energy, you’ll be outgoing, and make new friends. This month, all
            forms of communication, including the internet, media, writing, and podcasting,
            will be embraced. Attempt to avoid working on many projects at the same
            time. You'll experience a lot of fun and happiness. Before making any major
            decisions, you should consider them again. Avoid making any unintended
            purchases or taking any spontaneous vacations. Consider organizing your
            schedule and turning on your calm mode at least once a week, as you need to
            relax and prepare for the next month. <br> <br>
            This is not the month for mundane, dayto-day activity. This month, individuals are
            becoming more innovative, and all activities must be demanding and
            interesting in order to fully utilize the available intellectual energy.
        </p>
    
        `
    } else if (perCMText === '4' || perCMText === '13/4' || perCMInt[perCMInt.length - 1] === '4') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 4</h3> <br>
        <p>
            <p class="blue">Work, foundations, family, health</p> <br>
            This is the month to put in the most work and achieve the most success in your
            professional endeavors. The goal of the 4 Personal month is to make every effort
            as fruitful as possible, and it is a good month for signing agreements. This is
            also a good month to resolve business matters. You should be proud of what you
            have accomplished so far. Arguments should be avoided at all costs. You have
            the ability to resolve housing and legal problems. Purchase a house and
            renovation are favored this month. <br> <br>
            Material gain is also possible. Be patient and don't put too much pressure on
            yourself since this is a stressful month that is full of constraints, limitations, and
            hard labor. <br> <br>
            This might be a difficult day. You may have headaches and exhaustion on a
            regular basis. Keep a close eye on your kidneys and bladder.
            
        </p>
    
        `
    } else if (perCMText === '5' || perCMText === '14/5' || perCMInt[perCMInt.length -1 ] === '5') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 5</h3> <br>
        <p>
            <p class="blue">Change, instability, adventure, new experiences,travel, creativity, freedom</p> <br>
            On this particular month, you'd want to relax by traveling and you’ll feel relief.
            This is a great month to relocate and rearrange your home. You will feel
            compelled to flee the constraints, limitations, and hard work of the last
            month number 4. This is a month when you are ready to take on the world with
            new adventure, enthusiasm, and vitality. This month is the perfect month to meet
            some new friends and socialize. The number 5 represents sexual desire, and
            you will attract others this month. If you're single and seeking love, this month is a
            fantastic month to go out and meet other singles. Do not make rash decisions.
            Capital or financial increase is possible. You’ll be more open to collaboration and
            you’ll be conversing more. Unpredictable change may occur at work or at home. <br><br>
            Be aware of possible insomnia, tension, physical exhaustion, and impulsiveness. 
        </p>
    
        `
    } else if (perCMText === '6' || perCMText === '15/6' || perCMInt[perCMInt.length - 1] === '6') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 6</h3> <br>
        <p>
            <p class="blue">Responsibility, family, home, search for peace, balance, love, and harmony.</p> <br>
            This month, you will be responsible for a number of things, including your family,
            children, community, and career. The attention is on other people or things,
            such as your house. You'll be more engaged and disciplined. If you are
            jobless, you will most likely find work or get promoted. Partnership or marital
            problems might emerge, especially if the relationship is broken. It's an excellent
            month for finding a partner or going on a date, getting married, having a family,
            purchasing a home, or renovating an existing property. You will be rewarded if
            you try to be of help to others. You may want to improve your appearance and
            dress properly since you will desire to appear more lovely than ever before. You
            may be responsible for taking care of children, family, or others. You may also
            encounter burdens at work. <br> <br>
            The drawbacks are that you may selfsacrificing, and experience guilt,
            resentment, selfishness, loss, and instability on a regular basis.
        </p>
    
        `
    } else if (perCMText === '7' || perCMText === '16/7' || perCMInt[perCMInt.length - 1] === '7') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 7</h3> <br>
        <p>
            <p class="blue">Study, research, the inner life, honing your skills meditation, deep thoughts, soul-search and reasoning.</p> <br>
            Take a break from the stresses of daily life this month to calm your mind and
            replenish your spirit. You may occasionally feel as though your emotions
            or external situations are ripping you apart, leaving you furious or disoriented.
            This is a chance for you to develop control over your thinking so that you feel
            in control of your life rather than feeling like things happen at random. Take some 
            deep breaths and stay in the present moment if you feel overwhelmed. You'll
            spend a lot of time inside your mind. This is a contemplative month, you'll reflect on
            the past and the future, as well as where you wish to go in life. You'll spend a lot of
            time analyzing yourself and your surroundings. <br> <br>
            This month, you’ll have a heightened intuition. Try to withdraw from society
            and take some time to reflect on your life. This is a soul-searching month in which
            you must look within to discover more about yourself. This is not a good month
            for business or significant projects since you are likely to have many delays,
            obstacles, setbacks, many misconceptions, anxiety, disobedience,
            impatience, questioning, or inconveniences. You'll put in a lot of
            hours yet make very little which will frustrate you. Internal conflicts have
            arisen within you, then you have no understanding of where they originated
            from, so you'll have less energy at this time. You'll be forced to speak
            your feelings as a result of your emotional pain, which can quickly lead to disputes.
            Strive to be cool, relax. You may not get along with your loved ones. It's also not a
            good month to catch up with acquaintances because your
            communication is not good due to overwhelming emotions. But try to
            socialize with families or close friends so you don’t be alone. You may encounter
            problems with your partner or others if they triggered you. Try to meditate, read,
            reflect, or go on a walk in the woods/nature or by the sea. Enjoy the
            beauty of life rather than focusing on the material world this month. Try not to
            spend a lot of money or investing. It’s also not a good month to sign contracts
            or agreements since you may experience mental distress and emotions. If you get
            into legal issues, try to settle the matter. The other negative side of the year 7 is
            that you can be isolated, angry, paranoid, resentful, distrustful, suspicious, annoyed,
            and possessive.
        </p> 
    
        `
    } else if (perCMText === '8' || perCMText === '17/8' || perCMInt[perCMInt.length -1 ] === '8') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 8</h3> <br>
        <p>
            <p class="blue">Career, results, power, promotion, accomplishment, money, business</p> <br>
            This month, there is an energetic correlation with money and material
            acquisition. It's a business-oriented energy that also evokes efficiency,
            results, pragmatism, and the creation of long-term gain. You will have plenty of
            energy this month and be at your most powerful, allowing you to command and
            direct your actions. You will be ambitious, confident, focused, practical, and realistic
            in your pursuit of your objectives. This month is the month you will reap the
            blessings or repercussions of whatever you have sown in the past. It might be a
            materialistic month, with an emphasis on getting money or results, increase in
            investments, and belongings, but it can also be a month of losses and
            disappointment. <br> <br>
            Therefore, this is the month to press forward and accomplish those gains if
            you can improve your financial situation. Emotional ties or hobbies are likely to be
            set aside in order to give you the proper mindset and focus you'll need to attain
            your objectives. If you're feeling stuck or worried, use your instinct, which is
            unusually sharp this month, to help you make judgments.
        </p>
    
        `
    } else if (perCMText === '9' || perCMText === '18/9' || perCMInt[perCMInt.length - 1] === '9') {
        perMonthText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal month definitions: The Personal Month number provides useful information on the energies you'll have and what may occur. The energy of the Personal Month begins on the 1st of the month and ends on the last day.
        To calculate your Personal Month #, 
        add the Calendar Month (reduced to a single digit or Master number) and the Personal Year number and then reduce to one digit.  
        
           </p> <br>
        
        <h3 class="bold-description-label">Personal Month - 9</h3> <br>
        <p>
            <p class="blue">Endings, Letting go of the old, humanitarianism, artistic</p> <br>
            This month is about letting go of bad habits, poor relationships, and negative
            experiences, among other things. You may feel worried and
            dissatisfied. Don’t start anything important this month since it mark the end
            of a 9 months cycle and do not start a new relationship this month since it may
            end quickly. During this month, someone from your past may appear in your life.
            You may be put to test to take care of others or helping others, such as your
            family, children, community, or by doing something public. This is the month to
            clean up your residence, pay off old debt, donate generously, and compromise.
            This is a moment for reflection and can be emotional. This month, your
            relationship may be smoother or terminate totally. Divorce and separation
            are both common events. Make positive space for next month as your 9-month
            cycle comes to an end. <br> <br>
            You may feel depressed, anxious, emotional, mood swing. aloof, and
            distant.
        </p>
    
        `
    } 
    



    
    // Personal Day 
    var currentDay = new Date().getDate();
    
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    name = day[d.getDay()];
    cDay.innerHTML = name ;

    var personalDay, cMonthInt;

    var cMonthText = monthNum;
    if (cMonthText === '11/2') {
        cMonthInt = 11
    } else if (cMonthText === '22/4') {
        cMonthInt = 22;
    } else if (cMonthText === '33/6') {
        cMonthInt = 33;
    } else if (Number(cMonthText) < 10) {
        cMonthInt = Number(cMonthText);
    };
    var newYear = (cYearNum.textContent).trim();
    newYear = (newYear.split('/'))[0];
    personalDay = cMonthInt + Number(currentDay) + Number(newYear);

    if (personalDay <  10) {
        personalDay;
    } else if (personalDay === 10) {
        personalDay = 1;
    } else if (personalDay === 11) {
        personalDay = '11/2'
    } else if (personalDay === 22) {
        personalDay = '22/4'
    } else if (personalDay === 33) {
        personalDay = '33/6'
    } else if (personalDay > 10) {
        mSplit = String(personalDay).split('');
        personalDay = eval(mSplit.join('+'));
        if (personalDay <  10) {
            personalDay;
        } else if (personalDay === 10) {
            personalDay = 1;
        } else if (personalDay === 11) {
            personalDay = '11/2'
        } else if (personalDay === 22) {
            personalDay = '22/4'
        } else if (personalDay === 33) {
            personalDay = '33/6'
        } else if (personalDay > 10) {
            mSplit = String(personalDay).split('');
            personalDay = eval(mSplit.join('+'));
        }
    }

    cDayNum.innerHTML = '<b>'+personalDay +'</b>';
    var perCDText = (cDayNum.textContent).trim();
    var perCDInt = perCDText.split('/');

    if (perCDText === '1' || perCDText === '10/1' || perCDInt[perCDInt.length -1 ] === '1') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.
           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 1</h3> <br>
        <p>
            <p class="blue">New beginnings, adjustments to direction of life, leadership, plant new seeds, independent.</p> <br>
            This is the day when you're most concerned with yourself, you will want
            your freedom to focus on your own objectives and your aspirations. Personal
            day number 1 gives driving energy and it’s the beginning of a nine-day cycle.
            You'll have plenty of energy to get things done so plant new seeds. Hopefully, you
            have some unique and imaginative ideas that you'd want to put to good use. This is
            also a moment when you are more susceptible to other people's bad effects. <br> <br>
            To succeed, you need to have faith in your ability and work independently for
            you to examine your dreams, goals, and wants. Solve unsettled issues and expect
            results later. 
        </p>
    
        `
    } else if (perCDText === '11/2' || perCDInt[0]=== '11') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 11/2</h3> <br>
        <p>
        <p class="blue">Adaptability, relationships, collaboration partnerships, cooperation, receptivity.</p> <br>
        The master number 11's personal day energy is profoundly spiritual in character.
        A day for contemplation on life's greater aims. Today, be a reflection of light and
        motivation for others. Describe your ideals and aspirations. This is not a day
        for self-indulgence, but rather for collaborating with others for the greater
        benefit. <br> <br>
        It has an intuitive quality to it, as well as charm, harmony, and calm. It inspires a
        focus on the spiritual sides of relationships as well as a desire to
        teach. Being a team player, considering each other's feelings, playing the role of
        mediator, and settling conflicts with grace and diplomacy are all important qualities.
        Relationships are expected to take center stage. Spend time with loved ones.

        </p>
    
        `
    } else if (perCDText === '22/4' || perCDInt[0] === '22') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 22/4</h3> <br>
        <p>
            
            <br>
            <p class="blue">Work, foundations, family, health</p> <br>
            The energy of today is resonant with producing things that are both societal
            and spiritually beneficial. It is realistic, systematic, self-assured, and typically
            finds it simple to enlist the help of others to achieve a common objective. Today's
            energy is systematic. It usually attracts the notion that the best approach to get
            things done is to do them the way they've always been done effectively. It also
            raises the issue of laying a solid basis for the future.
        </p>
    
        `
    } else if (perCDText === '33/6' || perCDInt[0] === '33') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 33/6</h3> <br>
        <p>
            <br>
            This master number's energy is pleasant, caring, and brings about harmony. It
            conjures up images of caring, instructing, and guiding a group of individuals toward
            a common purpose. The predominant focus is home and family. It is an energy
            that inspires people to be nurtured and supported. Also, the formation of an ideal 
            relating to society's actions and goals in general.
        </p>
    
        `
    } else if (perCDText === '2' || perCDText === '20/2' || perCDText[perCDText.length - 1] === '2') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 2</h3> <br>
        <p>
            <p class="blue">Adaptability, relationships, collaboration partnerships, cooperation, receptivity.</p> <br>
            The second day is ideal for being surrounded by friends and family. Now is
            the moment to work together and -interact with others. Today is a good day to take a
            break. If you require assistance, ask for it since it’s a collaboration day. You can
            feel as if you're going backward rather than forwards. Keep your cool and relax
            so you don't get into any trouble. It's a bad time to do business. Be cautious with
            your money today, as you may wind up spending a lot. Do not make rash
            decisions. It's a fantastic day for a date and catching up with pals. Try your best
            to show understanding and collaboration
        </p>
    
        `
    } else if (perCDText === '3' || perCDText === '12/3' || perCDInt[perCDInt.length - 1] === '3') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 3</h3> <br>
        <p>
            <p class="blue">The social life, creativity, joyful/fun, selfexpression, communication</p> <br>
            This number 3 indicate that you will have a good time participating in some active
            leisure activities on this day. On this particular day, you like to find joy in the
            simple pleasures that life has to offer. Make the most of it and don't let your
            anxieties get the best of you. It's the ideal day for having some fun and
            enjoying yourself with friends or loved ones. It would be beneficial if you were
            occupied with recreational activities. You'll be a great communicator. You'll
            have to be cautious about what you say to others. You'll feel artistic and more
            talkative today.
            
        </p>
    
        `
    } else if (perCDText === '4' || perCDText === '13/4' || perCDInt[perCDInt.length - 1] === '4') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 4</h3> <br>
        <p>
            <p class="blue">Work, foundations, family, health</p> <br>
            This is the day to put in the most work and achieve the most success in your
            business endeavors. The goal of the 4 Personal Day is to make every effort as
            fruitful as possible and is a good day for signing agreements and resolving
            business matters. Arguments should be avoided at all costs. Material gain is also
            possible. Be patient and don't put too much pressure on yourself since this
            might be a stressful day full of hard work. This might be a difficult day. You may
            have headaches, worrisome, inner turmoil, and exhaustion on a regular
            basis.
        </p>
    
        `
    } else if (perCDText === '5' || perCDText === '14/5' || perCDInt[perCDInt.length - 1] === '5') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 5</h3> <br>
        <p>
            <p class="blue">Change, instability, adventure, new experiences, travel, creativity, freedom</p> <br>

            On day number 5, you'd want to unwind by traveling to faraway locations. Today
            is a great day to relocate and rearrange your home. You will feel compelled to flee
            the constraints, limitations, and hard labor of yesterday's day 4. This is a day when
            you are ready to take on the world with new enthusiasm and vitality. Today is the
            perfect day to meet some new acquaintances and socialize. The number
            5 represents sexual desire, and you will fascinate others today. If you're single
            and seeking love, today is a fantastic day to go out and meet other singles. <br> <br>
            Financial gain or possible changes that may occur at work or home. Do not argue
            with others. <br> <br>
            Insecurity, fear, a lack of control, physical exhaustion, rage, unpredictability,
            impulsiveness, and explosiveness are all negative attributes to avoid.
    
        </p>
    
        `
    } else if (perCDText === '6' || perCDText === '15/6' || perCDInt[perCDInt.length - 1] === '6') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 6</h3> <br>
        <p>
            <p class="blue">Responsibility, family, home, search for peace, balance, love, and harmony.</p> <br>
            Today is a day to keep life's balance and harmony. This is a great opportunity to
            spend time with your friends and family. Great day to look for a job by sending
            your application. You'll have to look for and facilitate understanding in every
            manner imaginable. This is an excellent time to seek out lasting happiness by
            going on a date, starting a relationship, or working on your love life. If you are
            miserable in a relationship, this is also a day to end. This is a good time to conduct
            household chores. You may be put to test to take care of family, children, etc. Dress
            up nicely and try to relax or go shopping.
            Anxiety, egotism, burdens, and a lack of self-sufficiency are all negative attributes.
            Wear bright red, yellow, mustard, sea green, and silver as accent colors.
            
        </p>
    
        `
    } else if (perCDText === '7' || perCDText === '16/7' || perCDInt[perCDInt.length - 1] === '7') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 7</h3> <br>
        <p>
            <p class="blue">Study, research, the inner life, honing your skills, meditation, deep thoughts, soul-search and reasoning.</p> <br>
            The energy of the day fosters reflection and the search for solutions inside. It’s
            associated with overcoming challenges and researching both intellectual spiritual
            matters, and gaining knowledge. Today, you’ll have a heightened intuition, and
            sense a stronger connection to God or sources on all levels. This is the day you
            withdraw from society and take some time to reflect on your life. This is a 
            soulsearching day in which you must look within to discover more about yourself.
            Reading and meditation are helpful. 
        </p>
    
        `
    } else if (perCDText === '8' || perCDText === '17/8' || perCDInt[perCDInt.length - 1] === '8') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 8</h3> <br>
        <p>
            <p class="blue">Career, results, power, accomplishment, money, business</p> <br>
            Today, there is an energetic correlation with money and material acquisition. It's a
            business-oriented energy that also evokes efficiency, pragmatism, and the
            creation of long-term gain. You will have plenty of energy today and be at your
            most powerful, allowing you to command and direct your actions. You will be
            ambitious, focused, practical, and realistic in your pursuit of your objectives. Today
            is the day you will reap the blessings or repercussions of whatever you have
            sown in the past. It might be a materialistic day, with an emphasis on
            getting money and belongings, but it can also be a day of losses and
            disappointment. 
        </p>
    
        `
    } else if (perCDText === '9' || perCDText === '18/9' || perCDInt[perCDInt.length - 1] === '9') {
        perDayText.innerHTML = `
        <h3 class="bold-description-label">Definition</h3> <br>
        <p>
        Personal day definition: The Personal Day Number gives you insights on the energy you'll have and what may happen. 
        To calculate your Personal Day #, add the values together and (reduced to single digits or Master numbers) of the 
        Calendar Month, the Calendar Day, and your Personal Year, then reduce to single digit #.

           </p> <br>
        
        <h3 class="bold-description-label red-span">Personal Day Number - 9</h3> <br>
        <p>
            <p class="blue">Endings, Letting go of the old,</p> <br>
            Today is the end of a 9-day cycle, is the day to clean up and get rid of anything
            that has gone off the rails in your life. It's an excellent day to call it quits on a
            terrible relationship or undesirable habits. Complete all of the chores and projects
            that remain unfinished. This is an end-ofthe-day kind of day so don't start anything
            important today which might end quickly. <br> <br>
            If you started a new project on one personal day, today is the day to
            finish it. Because the number 9 represents humanity, today is a good day
            to be a humanitarian and donate to charity. You might be put to test to care
            for loved ones, children, or strangers. If you are in a bad relationship or job, today
            is a good day to end it without feeling
            guilty. 
        </p>
    
        `
    }












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