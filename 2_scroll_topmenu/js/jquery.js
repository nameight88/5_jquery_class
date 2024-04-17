/**
 * jquery에서 css 속성 변경 : css() 문법 사용
 *      animate()
 */
$(function(){
    $('p#intro').animate({
        padding : '20px',
        fontSize : '30px'
    },2000);

    $('#navigation > ul > li').mouseover(function(){
        $(this).animate({paddingLeft : '+=15px'},300)
    });

    $('#navigation > ul > li').mouseout(function(){
        $(this).animate({paddingLeft : '-=15px'},300)
    });
})