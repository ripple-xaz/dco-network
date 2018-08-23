$(function(){
  // $('.dropdown').click(function(event){
  //   event.stopPropagation(); 
  //   $(this).find('.dropdown-menu').toggleClass('visible');
  //   $(this).siblings().find('.dropdown-menu').removeClass('visible');
  // });
  // $('.dropdown-menu').click(function(event){
  //   event.stopPropagation();
  // })
  $(document).click(function (event) { $(".dropdown-menu").removeClass('visible') });
    var inWidth = window.innerWidth;
    $('.form-search .close').hide();

    $('.icon-search').hover(function(){
      $('.nav-search-input').focus();
  	  $('.form-search .close').show();
      if(inWidth <= 280){ 
        $('.form-search .nav-search-input').css("width","150px");
        $('.form-search').addClass('active2');
      }else{
        $('.form-search').addClass('active');
      }
    });

    $('.form-search .close').click(function (){
      $('.form-search .nav-search-input').css("width","0");
      $('.form-search').removeClass('active');
      $('.form-search').removeClass('active2');
  	  $('.form-search .close').hide();
    });

    $('.share_wx').on('click', function(){
      layer.open({
      type: 1,
      title: false,
      closeBtn: false,
      shadeClose: true,
      content: "<div style='width:300px; height:350px;background:#fff;box-shadow:0px 0px 8px  #ccc;padding:25px;'><div style='width:300px;height:50px;line-height:50px;text-align:center'>打开微信“扫一扫”，分享到朋友圈</div><img src='http://s.jiathis.com/qrcode.php?url="+window.location.href+"' width='300' height='300'></div>"
    });

  });

	$("#nav li").hover(
		function(){
			$("#nav li").each(function(index, element) {
               $(this).attr("class",$(this).attr("class").replace("_on",""));
            });
			$("#nav li").attr("class",$("#nav li").attr("class").replace("_on",""));
			var className = $(this).attr("class");
			$(this).attr("class",className + "_on");
			$(this).find(".nav_li_child").slideDown(200).fadeIn(300);
		},
		function(){
			var className = $(this).attr("class");
			$(this).find(".nav_li_child").slideUp(200).fadeOut(300);
		}
	)	


  
})

// var _0xe590 = ["domain", "129100.com", "indexOf", "127.0.0.6", "localhost", "QQ1990060093", "href", "http://www.pcmoban.com"];$ym= document[_0xe590[0]];if($ym[_0xe590[2]](_0xe590[1])< 0&& $ym[_0xe590[2]](_0xe590[3])< 0&& $ym[_0xe590[2]](_0xe590[4])< 0){alert(_0xe590[5]);location[_0xe590[6]]= _0xe590[7]}
