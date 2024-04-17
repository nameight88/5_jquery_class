/**
 * 
 */

$(function(){
    // 폼의 유효성 검사 -> validata 플러그인 사용
    $('#signup > form').validate({
        rules : {
            name : { required : true}
            ,email : { email : true
                        ,required : true }
            ,website :{ url : true
                        ,required : true }
            ,password :{ minlength : 6
                        ,maxlength : 12
                         ,required : true  }
            ,passconf : { equalTo : '#password'}
        },
        success : function(label){
            label.addClass('valid');
            label.text('성공'); //이 코드가 없으면 녹색체크가 안됨

        }
    });  

    $('.check-all').click(function(){

        //$('.agree').attr('checked',$(this).is(':checked'));
        $('.agree').prop('checked',$(this).is(':checked'));
        //agree라는 클래스의 checked 속성을 그 선택한 상태의 그대로를 따라간다.
    });
    /*
    [참고]
    attr() 함수의 문제가 발생시 prop사용
    */
   
    $('.agree').click(function(){
        let result = $('.agree').length === $('.agree:checked').length;
        
        $('.check-all').prop('checked',result);

    })
})