var logic = false;
var questions = [];
var element_arr = 'Пусто';
var myarr = new Array();

let question_1 = 'Пусто';
let question_2 = 'Пусто';
let question_3 = 'Пусто';
let question_4 = 'Пусто';
let question_5 = 'Пусто';
let question_6 = 'Пусто';
let question_7 = 'Пусто';
let question_8 = 'Пусто';

let phone;
let fio;

var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

var istochnik = params['utm_source']
var keyword = params['utm_term']
var dataset = 'Разработчик сайтов Александр Плыгун https://pl-site.ru/'
if(params['utm_source'] == 'yandex' || params['utm_source'] == 'google'){
    dataset = 'Источник: ' +  params['utm_source'] + ' ключевое слово: ' + params['utm_term']
}

const currentYear = new Date().getFullYear();
const yearElements = document.getElementsByClassName('current-year');
for (let i = 0; i < yearElements.length; i++) {
  yearElements[i].textContent = currentYear;
}

jQuery(window).scroll(function(){

    var windowScrollTop = jQuery(this).scrollTop();

    if (windowScrollTop > 60){
        jQuery('#menu-vk').addClass('menu-fix')
    } else {
        jQuery('#menu-vk').removeClass('menu-fix')
    }
});

jQuery(document).on('ready', function() {
    jQuery('.progress-bar').html('10%');
    jQuery('.progress-bar').css({'width':'10%'});

    jQuery('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth: true,
        prevArrow: '<button id="prev" type="button" class="btn-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

jQuery('.type4').click(function(){
    jQuery('.type4').removeClass('type4-check');
    myarr = [];
    if(jQuery(this).find('input')[0].checked == true){
        jQuery(this).find('input')[0].checked = false;
        jQuery(this).removeClass('type4-check');

        i = myarr.indexOf(jQuery(this).find('input')[0].value);
        if(i >= 0) {
            myarr.splice(i,1);
        }
        logic = false;
    }else{
        jQuery(this).addClass('type4-check');
        jQuery(this).find('input')[0].checked = true;
        myarr.push(jQuery(this).find('input')[0].value);

        logic = true;
    }
});

jQuery('.type-input').click(function(){
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);
    myarr = [];
    jQuery(this).addClass('type4-check');
});

jQuery('.karta').click(function(){
    myarr = [];
    if(jQuery(this)[0].checked == true){
        jQuery(this)[0].checked = false;
        jQuery(this).parent().removeClass('type4-check');
        i = myarr.indexOf(jQuery(this).parent().find('input')[0].value);
        if(i >= 0) {
            myarr.splice(i,1);
        }

        logic = false;
    }else{
        jQuery(this).parent().addClass('type4-check');
        jQuery(this)[0].checked = true;
        myarr.push(jQuery(this).parent().find('input')[0].value);

        logic = true;
    }
});

// множественный выбор
jQuery('.questions_step2').click(function(){ 

    element_arr = jQuery(this).find('p')[0].innerText;

    jQuery(this).children('button').addClass('btn-none-check');
    jQuery(this).children('p').addClass('active-block');

    for(var i in questions){
        if(questions[i]==element_arr){
            questions.splice(i,1);
            break;
        }
    }

    questions.push(jQuery(this).find('p')[0].innerText);

    if(questions.length>=1){
        logic = true;
    }else{
        logic = false;
    }

    console.log(questions);
    return false;
});

//одиночный выбор
jQuery('.questions_step1').click(function(){

    questions = [];

    element_arr = jQuery(this).find('p')[0].innerText;

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    // jQuery('.questions_step1').children('img').removeClass('active-block');
    // jQuery('.questions_step1').children('input').removeClass('active-block');

    jQuery(this).children('button').addClass('btn-none-check');
    jQuery(this).children('p').addClass('active-block');
    // jQuery(this).children('img').addClass('active-block');
    // jQuery(this).children('input').addClass('active-block');
    // jQuery(this).children('type-input').addClass('type4-check');

    for(var i in questions){
        if(questions[i]==element_arr){
            questions.splice(i,1);
            break;
        }
    }

    questions.push(jQuery(this).find('p')[0].innerText);

    if(questions.length>=1){
        logic = true;
    }else{
        logic = false;
    }

    console.log(questions);
    return false; 
});

jQuery('.btn-none').on('click', function() {
    element_arr = jQuery(this).siblings('p')[0].innerText;
    jQuery(this).siblings('p').removeClass('active-block');
    jQuery(this).removeClass('btn-none-check');
    for(var i in questions){
        if(questions[i]==element_arr){
            questions.splice(i,1);
            break;
        }
    }
    if(questions.length>=1){
        logic = true;
    }else{
        logic = false;
    }
    console.log(questions);
    return false;
});





jQuery('#btn1').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('20%'); 
        jQuery('.progress-bar').css({'width':'20%'});

        question_1 = questions;

        // Код для нелинейного квиза
        // if(question_1 == 'Вариант ответа') {
        //     jQuery('.step1').hide();
        //     jQuery('.step10').show();
        // } else {
        //     jQuery('.step1').hide();
        //     jQuery('.step2').show();
        // }

        jQuery('.step1').hide();
        // jQuery('.step10').hide();
        jQuery('.step2').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back2').on('click', function() {

    jQuery('.progress-bar').html('10%');
    jQuery('.progress-bar').css({'width':'10%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step2').hide();
    jQuery('.step1').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn2').on('click', function() {
    // var variant2 = jQuery('#variant2').val();


    if(logic){
        jQuery('.progress-bar').html('30%');
        jQuery('.progress-bar').css({'width':'30%'});

        // if(variant2){
        //     question_2 = variant2;
        //     console.log(question_2);
        // } else {
        //     question_2 = myarr;
        //     console.log(question_2);
        // }

        // jQuery('#bonus').html("OK");
        question_2 = questions;

        jQuery('.step2').hide();
        jQuery('.step3').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back3').on('click', function() {

    jQuery('.progress-bar').html('20%');
    jQuery('.progress-bar').css({'width':'20%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step3').hide();
    jQuery('.step2').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn3').on('click', function() {
    // var variant3 = jQuery('#variant3').val();
    
    if(logic){
        jQuery('.progress-bar').html('40%');
        jQuery('.progress-bar').css({'width':'40%'});

        // if(variant3){
        //     question_3 = variant3;
        //     console.log(question_3);
        // } else {
        //     question_3 = myarr;
        //     console.log(question_3);
        // }
        question_3 = questions;

        jQuery('.step3').hide();
        jQuery('.step4').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back4').on('click', function() {

    jQuery('.progress-bar').html('30%');
    jQuery('.progress-bar').css({'width':'30%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step4').hide();
    jQuery('.step3').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn4').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('50%');
        jQuery('.progress-bar').css({'width':'50%'});

        question_4 = questions;

        jQuery('.step4').hide();
        jQuery('.step5').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back5').on('click', function() {

    jQuery('.progress-bar').html('40%');
    jQuery('.progress-bar').css({'width':'40%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step5').hide();
    jQuery('.step4').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn5').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('60%');
        jQuery('.progress-bar').css({'width':'60%'});

        question_5 = questions;

        jQuery('.step5').hide();
        jQuery('.step6').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back6').on('click', function() {

    jQuery('.progress-bar').html('50%');
    jQuery('.progress-bar').css({'width':'50%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step6').hide();
    jQuery('.step5').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn6').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('70%');
        jQuery('.progress-bar').css({'width':'70%'});

        question_6 = questions;

        jQuery('.step6').hide();
        jQuery('.step7').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back7').on('click', function() {

    jQuery('.progress-bar').html('60%');
    jQuery('.progress-bar').css({'width':'60%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step7').hide();
    jQuery('.step6').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn7').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('80%');
        jQuery('.progress-bar').css({'width':'80%'});

        question_7 = questions;

        jQuery('.step7').hide();
        jQuery('.step8').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});

jQuery('#btn-back8').on('click', function() {

    jQuery('.progress-bar').html('70%');
    jQuery('.progress-bar').css({'width':'70%'});

    jQuery('.questions_step1').children('button').removeClass('btn-none-check');
    jQuery('.questions_step1').children('p').removeClass('active-block');
    jQuery('.questions_step2').children('button').removeClass('btn-none-check');
    jQuery('.questions_step2').children('p').removeClass('active-block');
    jQuery('.type4').removeClass('type4-check');
    jQuery('.karta').attr('checked', false);

    jQuery('.step8').hide();
    jQuery('.step7').show();

    logic = false;
    questions = [];
    return false;
});

jQuery('#btn8').on('click', function() {
    if(logic){
        jQuery('.progress-bar').html('90%');
        jQuery('.progress-bar').css({'width':'90%'});

        question_8 = questions;

        jQuery('.step8').hide();
        jQuery('.step9').show();

        logic = false;
        questions = [];
        return false;
    }else{
        jQuery('#error').html('Выберите один или несколько вариантов!');
        jQuery('#modal-1').modal();
        return false;
    }
});


jQuery('#btn9').on('click', function() {

    jQuery('.progress-bar').html('100%');
    jQuery('.progress-bar').css({'width':'100%'});

    phone = jQuery('#phone-1').val();
    fio = jQuery('#name-1').val();

    if(phone.length > 5){

        jQuery('.step9').hide();
        jQuery('.step10').show(500);

        var msg = {
            question1: JSON.stringify(question_1),
            question2: JSON.stringify(question_2),
            question3: JSON.stringify(question_3),
            question4: JSON.stringify(question_4),
            question5: JSON.stringify(question_5),
            question6: JSON.stringify(question_6),
            question7: JSON.stringify(question_7),
            question8: JSON.stringify(question_8),
            fio: fio,
            phone: phone,
            dataset: dataset
        };
        jQuery.ajax({
            type: 'POST',
            url: '/ok.php',
            data: msg,
            success: function(data) {
                console.log('почта отправлена!');
                ym(81777394,'reachGoal','yes')
                // gtag('event', 'conversion', {
                //     'send_to': 'AW-511696691/pHZcCK7Jo-QBELO-__MB',
                //     'event_callback': callback
                // });
                return false;
            },
            error:  function(xhr, str){
                console.log('2');
            }
        });

        questions = [];
        return false;
    }else{
        jQuery('#error').html('Заполните контактные даные!');
        jQuery('#modal-1').modal();
        return false;
    }

});