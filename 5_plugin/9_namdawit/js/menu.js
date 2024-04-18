$(function(){
    // 주문 내역에 메뉴를 추가하는 함수
    function addToOrder(menuName, price) {
        let name = $('<td>').text(menuName);
        let priceCell = $('<td>').text(price);
        let del = $('<td>').html('<button class="del">삭제</button>'); 
        let newRow = $('<tr>').append(name, priceCell, del); 
        $('#orderList').append(newRow);
        updateTotalPrice(); // 총합 업데이트
    }
    $("#ad").bxSlider({
        minSlides : 4
        ,maxSlides : 4
        ,slideMargin :10
        ,slideWidth :90
        ,moveSlides :1
        ,auto : true
      });

    // 총합을 업데이트하는 함수
    function updateTotalPrice() {
        var totalPrice = 0;
        $('#orderList tbody tr').each(function() {
            let price = parseInt($(this).find('td:eq(1)').text());
            totalPrice += price;
            return totalPrice;
        });
        $('#result').text( totalPrice );
    }

    // 담기 버튼 클릭 시 주문 내역에 추가
    $('.menuadd').click(function(){
        let menuName = $(this).siblings('.label').text();
        let price = parseInt($(this).siblings('.price').data('price'));
        addToOrder(menuName, price);
    });

    // 삭제 버튼 클릭 시 해당 행 삭제
    $(document).on('click', '.del', function() {
        $(this).closest('tr').remove();
        updateTotalPrice(); // 총합 업데이트
    });

    // 주문내역 보기 버튼 클릭 시 주문 내역 창 토글
    $('#orderview').click(function() {
        $('#rightTable').toggle();
    });

    $('#adview').click(function() {
        $('.footerTable').toggle();
    });
    

    $('#pay').click(function(){
        alert('확인');
    })

});