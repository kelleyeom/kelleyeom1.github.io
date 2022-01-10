jQuery(document).ready(function(){
	var options = {// 플러그인의 인자값 바꾸는것
		'speed' : 500,
		'initTop' : 250, // 처음 시작 위치
		'alwaysTop' : false, // 항상 고정 - true , 이동 - false
		'default_x' : '#wrap' // 레이아웃이 가운데 정렬일 때 레이어가 붙는 아이디값
	}
	
	$('#floatdiv').Floater(options);
	
	$('#hr').click(function(){
		$('html,body').animate({scrollTop: $('#section1').offset().top-0},0);
	});
	$('.btn01').click(function(){
		$('html,body').animate({scrollTop: $('#section2').offset().top-0},800);
	});
	$('.btn02').click(function(){
		$('html,body').animate({scrollTop: $('#section3').offset().top-0},800);
	});
	$('.btn03').click(function(){
		$('html,body').animate({scrollTop: $('#section4').offset().top-0},800);
	});
	$('.btn04').click(function(){
		$('html,body').animate({scrollTop: $('#section5').offset().top-0},720);
	});
	$('.btn05').click(function(){
		$('html,body').animate({scrollTop: $('#section6').offset().top-0},950);
	});
	$('.btn06').click(function(){
		$('html,body').animate({scrollTop: $('#section7').offset().top-0},750);
	});
	$('.btn07').click(function(){
		$('html,body').animate({scrollTop: $('#section8').offset().top-0},800);
	});
	$('.btn08').click(function(){
		$('html,body').animate({scrollTop: $('#section9').offset().top-0},800);
	});
	
	
	var quickbar = $('#floatdiv>ul>li');//불들어오는 li
	var contents= $('#contents>div');
	
	quickbar.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		//console.log(section);
		var tt = section.offset().top; // 얼마나 떨어져 있는지
		$('html, body').stop().animate({scrollTop: tt});
	});
	
	$(window).scroll(function(){//스크롤 자동인식
		var sct = $(window).scrollTop();
		/* if(sct>=contents.eq(0).offset().top){
			quickbar.removeClass('on');
			quickbar.eq(0).addClass('on');
		}
		if(sct>=contents.eq(1).offset().top){
			quickbar.removeClass('on');
			quickbar.eq(1).addClass('on');
		}
		if(sct>=contents.eq(2).offset().top){
			quickbar.removeClass('on');
			quickbar.eq(2).addClass('on');
		} */
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if (tg.offset().top <= sct){
				quickbar.removeClass('active');
				quickbar.eq(i).addClass('active');
			}
		});
	});

/* lnb on class */
 
	
	var menu = $('#top_menu>ul>li');//불들어오는 li
	var contents= $('#contents>div');	
	
	menu.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		//console.log(section);
		var tt = section.offset().top; // 얼마나 떨어져 있는지
		$('html, body').stop().animate({scrollTop: tt});
	});
	
	$(window).scroll(function(){//스크롤 자동인식
		var sct = $(window).scrollTop();
		/* if(sct>=contents.eq(0).offset().top){
			menu.removeClass('on');
			menu.eq(0).addClass('on');
		}
		if(sct>=contents.eq(1).offset().top){
			menu.removeClass('on');
			menu.eq(1).addClass('on');
		}
		if(sct>=contents.eq(2).offset().top){
			menu.removeClass('on');
			menu.eq(2).addClass('on');
		} */
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if (tg.offset().top <= sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
			}
		});
	});
});

jQuery(document).ready(function(){
	$('.v1').DB_springMove({
		key:'c65806',                //¶óÀÌ¼¾½ºÅ°
		dir:'x',               //¹æÇâÃà('x','y')
		mirror:1,              //¹Ý´ë¹æÇâÀÌµ¿(1,-1)
		radius:5,             //¹Ý°æ
		motionSpeed:0.07       //¼Óµµ(0~1)
	})
	$('.ul').DB_springMove({
		key:'c65806',                //¶óÀÌ¼¾½ºÅ°
		dir:'y',               //¹æÇâÃà('x','y')
		mirror:1,              //¹Ý´ë¹æÇâÀÌµ¿(1,-1)
		radius:5,             //¹Ý°æ
		motionSpeed:0.05       //¼Óµµ(0~1)
	})
	$('.s1').DB_springMove({
		key:'c65806',                //¶óÀÌ¼¾½ºÅ°
		dir:'y',               //¹æÇâÃà('x','y')
		mirror:1,              //¹Ý´ë¹æÇâÀÌµ¿(1,-1)
		radius:5,             //¹Ý°æ
		motionSpeed:0.07       //¼Óµµ(0~1)
	})
	$('.t1').DB_springMove({
		key:'c65806',                //¶óÀÌ¼¾½ºÅ°
		dir:'y',               //¹æÇâÃà('x','y')
		mirror:1,              //¹Ý´ë¹æÇâÀÌµ¿(1,-1)
		radius:5,             //¹Ý°æ
		motionSpeed:0.1      //¼Óµµ(0~1)
	})
});