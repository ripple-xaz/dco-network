$(function(){

    var textArr = ['CN','EN','JP']
    var curText = 'CN'

    // var iconArr = ['images/chn.png','images/usa.png','images/jpn.png']
    var curIcon = 'images/chn.png';

	$('#lang').on('click',function(event){
		event.stopPropagation()
		var opacity = $('#other-lang').css('opacity')
		$('#other-lang').slideToggle()

		if(opacity == 0){
			$('#other-lang').animate({
				opacity:1
			},300)

		}else{
			$('#other-lang').animate({
				opacity:0
			},300)
		}
	})

	$('#other-lang').find('li').on('click',function(event){
		event.stopPropagation()
		var opacity = $('#other-lang').css('opacity')
		$('#other-lang').slideToggle()
		if(opacity == 0){
			$('#other-lang').animate({
				opacity:1
			},300)
		}else{
			$('#other-lang').animate({
				opacity:0
			},300)
		}
        

       


        var nextText = $(this).find('span').text()
        var nextIcon = $(this).find('img').attr('src')

        $(this).find('span').text(curText)
		$(this).find('img').attr('src',curIcon)

		curText = nextText
		curIcon = nextIcon
        
		$('#cur-lang-name').text(curText)
		$('#cur-lang-icon').attr('src',curIcon)

		var href = window.location.href
		if(curText === 'CN'){
			if(href.indexOf('question')>-1){
				window.location.href = baseUrl +'question.html'
			}else{
				window.location.href = baseUrl +'index.html'
			}
			
		}else{
			if(href.indexOf('question')>-1){
				window.location.href = baseUrl + nextText.toLowerCase()+'/question.html'
			}else{
				window.location.href = baseUrl + nextText.toLowerCase()+'/index.html'
			}
			
		}
   		

	})




	$(document).on('click',function(event){
		console.log()
		if(!$.contains( $('.lang')[0], event.target )){
			$('#other-lang').animate({
				opacity:0
			},300)
			$('#other-lang').slideUp()
		}
	})



	$('.s-4-text').each(function(i,v){
		 $(this).mouseenter(function(){
		 	$('.s-4-img').not('.s-4-img:nth-child('+(i+1)+')').addClass('active')
		 })
		$(this).mouseleave(function(){
		 	$('.s-4-img').removeClass('active')
		 })
	})
})