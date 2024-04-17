$(function(){
    $('#bInsert').css({ 'cursor': 'pointer' });
    $('#bInsert').click(function(){
        let name = $('<td>'+$('#name').val()+'</td>');
        let age = $('<td>'+$('#age').val()+'</td>');
        let tel = $('<td>'+$('#tel').val()+'</td>');
        let addr = $('<td>'+$('#addr').val()+'</td>');
        let del = $('<td><button class="del">삭제</button></td>'); 

        let newRow = $('<tr>').append(name, age, tel, addr, del); 
        $('#listTable').append(newRow);

       /*
        $('.del').click(function() {
            $(this).closest('tr').remove(); 
        });
        */

        
        $('td').on('click','.del',function(){
            $(this).parent().parent().remove();
        });
    });
});
