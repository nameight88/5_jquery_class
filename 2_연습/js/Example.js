$(function () {
  let fontSize = parseInt($('#txt').css('fontSize'));
  $('#wrap .fontSize > button:nth-child(1)').click(function () {
    $("#txt").css("fontSize", fontSize += 1);
  });

  $('#wrap .fontSize > button:nth-child(2)').click(function () {
    $("#txt").css("fontSize", fontSize -= 1);
  });

  $('#fontstyle').change(function () {
    $('#txt').css('font-family', $(this).val());
  });

})