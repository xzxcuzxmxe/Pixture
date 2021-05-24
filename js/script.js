$(document).ready(function(){
    $('.slider').slick({
        arrows:true, // показать стрелки
        dots:false, // не показывать точки
        slidesToScroll:3,
        slidesToShow:4, // показывать по 4 слайда
        autoplay:false, // автоматическое проигрывание слайдов
         responsive:[
{
    breakpoint:1323,
    settings: {
        slidesToShow:3
    }
},
{
    breakpoint: 1000,
    settings: {
        slidesToShow:2
    }
},
{
    breakpoint: 760,
    settings: {
        slidesToShow:2
    }
}
]
    });
});
