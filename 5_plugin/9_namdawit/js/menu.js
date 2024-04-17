$(function(){
    $('.menuadd').click(function(){
    let name = $('<td>'+$('.label').val()+'</td>');
    let price = $('<td>'+$('.price').val()+'</td>');
    let del = $('<td><button class="del">삭제</button></td>'); 
    let newRow = $('<tr>').append(name, price,del); 
    $('#orderList').append(newRow);
    $('.del').click(function() {
        $(this).closest('tr').remove(); 
    });
})
   
    
    
})