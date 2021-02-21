$(function () {
  looking = function(){
    let lookText = $(this).val(), // 入力された値
        targetText;

    $('.list li').each(function() {
      targetText = $(this).text();

      // リストに入力された文字列が存在するか判断
      if (targetText.indexOf(lookText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };
  // 入力ごとに関数実施
  $('#look').on('input', looking);
});