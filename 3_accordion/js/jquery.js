/**
 * 
 */

$(function(){
    $('.accordion').each(function(){
        let allDt = $(this).find('dt');
        let allDd = $(this).find('dd');

        allDd.hide();
        
        allDd.first().show();
        allDt.css({'cursor':'pointer'});

        allDt.click(function(){

            allDd.hide();
            $(this).next().show();
           
        });
    });

    
})