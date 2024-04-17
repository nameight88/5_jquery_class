$(function(){

    let allBio= $('#bio');

    let b_Div = allBio.find($('#bio>div'));
    b_Div.hide();
    b_Div.eq(0).show();
    //b_Div.first().show();

    let title = allBio.find('h3');

    title.css({'cursor':'pointer'});

    title.click(function(){
        //$(this).next().toggle();

        $(this).next()
        .animate({'height':'toggle'}
        ,'4000','easeOutBounce');


    });

    
})