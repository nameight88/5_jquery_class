/**
 * 
 */

$(function () {//hover event
    // 테이블에서 짝수행 css
    $('#celebs > table > tbody tr:odd').addClass('table_striping'); //0번째 짝수

    //마우스가 올라갔을때 td_mouseover
    // 마우스가 내려가면 
    /*
    $('#celebs > table > tbody tr').mouseover(function(){
        $('#celebs > table > tbody tr:hover').addClass('td_mouseover');
    });
    $('#celebs > table > tbody tr').mouseout(function(){
        $('#celebs > table > tbody tr').removeClass('td_mouseover');
    });
    */

    /*
    $('#celebs > table > tbody tr').mouseenter(function(){
        $('#celebs > table > tbody tr:hover').addClass('td_mouseover');
    });
    $('#celebs > table > tbody tr').mouseleave(function(){
        $('#celebs > table > tbody tr').removeClass('td_mouseover');
    });
    */

    $('#celebs > table > tbody tr').hover(function () {
        $('#celebs > table > tbody tr:hover').addClass('td_mouseover');
    },
        function () {
            $('#celebs > table > tbody tr').removeClass('td_mouseover');
        });

})

$(function () {// images event

    $('#hideButton').click(function () {
        $('#intro > img').fadeOut(2000);
    });

    /*
    $('#hideButton').click(function(){
        $('#intro > img').slideUp(2000);
    });
    */
    $('#showButton').click(function () {
        $('#intro > img').fadeIn(2000);
    });

    /*
     $('#showButton').click(function(){
         $('#intro > img').slideDown(2000);
     });
     */
    /*
    $('#toggleButton').click(function(){
        $('#intro > img').toggle();
    }); //toggle 안에 시간 값을 넣어주면 자동으로 슬라이드효과로 작동한다.
    */

    /*
    $('#toggleButton').click(function () {
        $('#intro > img').fadeToggle(2000);
    });
    */
    //-----------------------------------------------

    /*
    //수동으로 toggle 이벤트 만들어주기
    $('#toggleButton').click(function () {
    let img = $('#intro img');
    if(img.is(':visible')){
        img.fadeOut(2000);
        $(this).val("보이기");
    }else{
        img.fadeIn(2000);
        $(this).val("안보이기");
    };
    });
    */

}
);
