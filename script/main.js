$(function () {
  var idx = 0;

  setInterval(slide, 3000);
  function slide() {
    idx < 2 ? idx++ : (idx = 0);
    $('.sec1 ul').animate({ left: -(100 * idx) + '%' });
  }

  $('.gnb>li').hover(
    function () {
      $(this).children('.sub').stop().fadeIn(100);
      $('.navbox').stop().slideDown(300);
      if ($(this).hasClass('nosub')) {
        $('.navbox').hide();
      }
    },
    function () {
      $(this).children('.sub').stop().hide();
      $('.navbox').stop().slideUp(300);
    }
  );

  $('.about li a').click(function () {
    $('.about li a').removeClass('active');
    $(this).addClass('active');
  });

  //탭의 텍스트에 따라 필터하여 show/hide
  var thisText = $(this).text();
  if ($(this).parents('ul').hasClass('filter')) {
    $('.board  tbody tr').filter(function () {
      if (thisText == '전체보기') {
        $('.board  tbody tr').show();
      } else {
        $(this).toggle($(this).text().indexOf(thisText) > -1);
      }
    });
  }

  $('.sub_tit').click(function (e) {
    $(this).next('tr').show();
    e.preventDefault();
  });
});
