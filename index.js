

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

var cYear = document.getElementById('cYear');
var cYearNum = document.getElementById('cYearNum');

var cMonth = document.getElementById('cMonth');
var cMonthNum = document.getElementById('cMonthNum');

var cDay = document.getElementById('cDay');
var cDayNum = document.getElementById('cDayNum');





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
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
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
    console.log(lifePathNum)

    if (lifePathText === '11/2') {
        lpText.innerHTML = `
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
            If you are on the negative side of your life path number 22, you can
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
            If you are vibrating on the negative side of life path 2, you can
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
            If you’re on the negative side of life path 3, your weaknesses are that
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
            If you’re on the negative side of your life path 4, your weaknesses are
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
            Your weaknesses are that you are secretive, reclusive, suspicious,
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
            <h3 class="bold-description-label">Life Path Number 8</h3> <br>
            <p>
            Money, wealth, and power are associated with the number 8.
            Furthermore, this number is linked to excellent administrative,
            entrepreneur, and management abilities. The negative aspects of
            number 8 include dictatorial proclivity, misused or abuse of power,
            stubborn attitude, a procrastinating propensity, and relationship issues.
            Despite the fact that 8 appears to be associated with the material
            world. It has a spiritual component as well. If you have 8 in your core
            chart: life path number, birth number, expression/destiny, soul
            urge/heart desire, and personality number, then you have the number
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





    // expression / destiny number 
    var ednfName = fName.value.split(' ');
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





    // personality number 
    pnfName = fName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
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
    // mpNum.innerHTML = count ;


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




    // life Path / Expression Bridge
    var subtract = lpHold - edHold;
    // console.log(subtract);
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
    // life path 
    kdHold = lpNum.textContent;
    if (kdHold === '13/4') {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === '14/5') {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === '16/7') {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === '19/1') {
        kdNum.innerHTML = '19/1'
    } else if(kdNum.textContent === '') {
        kdNum.innerHTML = 'None'
    }

    // destiny
    kdHold = edNum.textContent
    if (kdHold === '13/4') {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === '14/5') {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === '16/7') {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === '19/1') {
        kdNum.innerHTML = '19/1'
    } else if(kdNum.textContent === '') {
        kdNum.innerHTML = 'None'
    }

    // soul urge 
    kdHold = suhdNum.textContent
    if (kdHold === '13/4') {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === '14/5') {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === '16/7') {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === '19/1') {
        kdNum.innerHTML = '19/1'
    } else if(kdNum.textContent === '') {
        kdNum.innerHTML = 'None'
    }

    // birthday number 
    kdHold = bdNum.textContent
    if (kdHold === '13/4') {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === '14/5') {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === '16/7') {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === '19/1') {
        kdNum.innerHTML = '19/1'
    } else if(kdNum.textContent === '') {
        kdNum.innerHTML = 'None'
    }

    // expression 
    kdHold = pNum.textContent
    if (kdHold === '13/4') {
        kdNum.innerHTML = '13/4'
    } else if (kdHold === '14/5') {
        kdNum.innerHTML = '14/5'
    } else if (kdHold === '16/7') {
        kdNum.innerHTML = '16/7'
    } else if (kdHold === '19/1') {
        kdNum.innerHTML = '19/1'
    } else if(kdNum.textContent === '') {
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
    countHold = 0;
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
    if (count < 10) {
        count;
    } else if (count === 10) {
        count = 1;
    } else if (count === 11  ) {
        count = '11/2';
    } else if (count === 22) {
        count = '22/4';
    } else if (count === 33) {
        count = '33/6';
    } else if (count > 10) {
        mSplit = String(count).split('');
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
            dbSplit = String(sum).split('');
            sum = eval(dbSplit.join('+'));
        }
        count = sum;
    };
    hnNum.innerHTML = count;
    
    


    // CornerStone Letter 
    ednfName = (fName.value).split(' ');
    // console.log((ednfName[0][0]))
    var firstLetter = (ednfName[0][0]).toUpperCase();
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
    if (monthHold < 10) {
        monthHold;
    }
    if (monthHold === 10) {
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
        fpHold = Number(lpHoldText[0])
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

    // console.log(fpHold, monthHold)

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
        spHold = Number(lpHoldText[0])
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
        yearHold = sum;
    }  

    var tpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        tpHold = Number(lpHoldText[0])
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
        fpHold = Number(lpHoldText[0])
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
        spHold = Number(lpHoldText[0])
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
        tpHold = Number(lpHoldText[0])
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


    // fourth pinnacle 
    var ftSum = monthHold + yearHold;

    if (ftSum === 10) {
        ftSum = 1;
    } else if (ftSum === 11 || ftSum === 22 || ftSum === 33 || ftSum < 10) {
        ftSum;
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
        }
        ftSum = sum;
    };
    
    fpHold;
    lpHoldList = lpNum.textContent.split('/');
    lpHoldText = lpNum.textContent;
    if (lpHoldList.length === 1) {
        fpHold = Number(lpHoldText[0])
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



    // Challenges in Life 

    // First Challenge
    dayHold, monthHold, yearHold;
    fCha;

    if (dayHold === 11) {
        dayHold =2
    } else if (dayHold === 22) {
        dayHold = 4
    } else if (dayHold < 10) {
        dayHold
    };
    if (monthHold === 11) {
        monthHold = 2
    } else if (monthHold < 10) {
        monthHold
    }
    // console.log(dayHold, monthHold)
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
        fAnim = '11/2'
        fAnims = 11;
    } else if (fAnim === 22) {
        fAnim = '22/4';
        fAnims = 22;
    } else if (fAnim === 33) {
        fAnim = '33/6';
        fAnims = 33;
    } else if (fAnim > 10) {
        mSplit = String(fAnim).split('');
        fAnim = eval(mSplit.join('+'));
        fAnims = fAnim;
    }
    fChaNum.innerHTML = fAnim;

    // Second Challenge 
    sAnims;
    var sAnim = yearHold - dayHold;
    if (sAnim < 0) {
        sAnim = sAnim * (-1);
    } else if (sAnim < 10) {
        sAnim;
        sAnims = fAnim;
    } else if (fAnim === 10) {
        sAnim = 1;
        sAnims = 1
    } else if ( sAnim === 11) {
        sAnim = '11/2'
        sAnims = 11;
    } else if (sAnim === 22) {
        sAnim = '22/4';
        sAnims = 22;
    } else if (sAnim === 33) {
        fAnim = '33/6';
        sAnims = 33;
    } else if (sAnim > 10) {
        mSplit = String(sAnim).split('');
        sAnim = eval(mSplit.join('+'));
        sAnims = sAnim;
    };
    sChaNum.innerHTML = sAnim;

    // Third Challenge 
    var tAnim = sAnims - fAnims;
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
    var fNameLength = firstName.length;
    count = 0;

    var currentYear = Number(new Date().getFullYear());
    yearNum = Number(yearString);
    var yearDiff = currentYear - yearNum;
    var remainder = yearDiff % fNameLength;
    var divisible = Math.floor(yearDiff / fNameLength);
    var transit;

    if (yearDiff < fNameLength) {
        transit = firstName[yearDiff - 1]
    } else if (remainder === 0) {
        transit = firstName[fNameLength -1]
    } else if (remainder > 0) {
        transit = firstName[remainder -1];
    }

    phtrNum.innerHTML = '<b>' + transit.toUpperCase() + '</b>';


    // Spiritual Transit
    lastName;
    var lNameLength = lastName.length;
    remainder = yearDiff % lNameLength;
    divisible = Math.floor(yearDiff / lNameLength);

    if (yearDiff < lNameLength) {
        transit = lastName[yearDiff - 1]
    } else if (remainder === 0) {
        transit = lastName[lNameLength -1]
    } else if (remainder > 0) {
        transit = lastName[remainder -1];
    }
    sptrNum.innerHTML = '<b>' + transit.toUpperCase() + '</b>';

    // Mental Transit



    // Essence Cycle
    var middleName, mNameLength;



    // Personal Cycles 
    cYear.innerHTML = currentYear;
    // cDay.innerHTML = day.value

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
                cYearNum.innerHTML = '/<b>1</b>';
            } else {
                cYearNum.innerHTML = '<b>' +sum + '</b>';
            }
        }
    };


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

    
    // Personal Day 
    var currentDay = new Date().getDay();
    
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satursday'];
    var d = new Date();
    name = day[d.getDay()];
    cDay.innerHTML = name ;

    var personalDay, cMonthInt;

    var cMonthText = monthNum;
    // console.log(cMonthText)
    if (cMonthText === '11/2') {
        cMonthInt = 11
    } else if (cMonthText === '22/4') {
        cMonthInt = 22;
    } else if (cMonthText === '33/6') {
        cMonthInt = 33;
    } else if (Number(cMonthText) < 10) {
        cMonthInt = Number(cMonthText);
    };

    personalDay = cMonthInt + Number(currentDay);
    // console.log(personalDay, cMonthInt, currentDay)

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

    cDayNum.innerHTML = '<b>'+personalDay +'</b>';











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