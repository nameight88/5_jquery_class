/**
 * 
 */
$(function(){
  
    // 첫번째 <a>에 prettyPopin
    $('a[rel="prettyPopin"]:eq(0)').prettyPopin({
        width: 500
    });

    $('a[rel="prettyPopin"]:eq(1)').prettyPopin({
        width: 500
    });
})