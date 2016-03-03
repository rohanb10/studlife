function isMobile(){
		if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else{
			return false;
		}
	}
	function isPad(){
		if(/iPad/i.test(navigator.userAgent)){
			return true;
		}
		else{
			return false;
		}
	}
	$(window).load(function() {
		if(isMobile()){
			$(".title").css('height', '100vh');
			$(".info").css('padding', '30px 0px');
			$(".bio-quote").css('line-height', '150%');
			$(".arrow").css('display', 'none');
		}
		if(isPad()){
			$(".info").css('padding', '15vh 0px');
		}
	});

	$('.candidate').click(function(event) {
		var can_id = this.id;
		var candidate = $.grep(candidates, function(e){ 
			return e.id == can_id; 
		})[0];
		var position = can_id.substring(0,can_id.search("-"));
		var desk = $('#descriptor-'+position);
		$('.bio').each(function(index, el) {
			$(this).hide();
		});
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
		}
		else{
			$('.candidate').each(function(index, el) {
				$(this).removeClass('selected');
			});
			var firstName = (candidate.name).substring(0,(candidate.name).indexOf(' '));
			$(this).addClass('selected');
			var inject="";
			inject+='<div class="bio"><h3>'+candidate.name+'</h3>';
			inject+='<p class="class">Class of '+candidate.class +'</p>';
			inject+='<p class="bio-quote"><span class="pull-quotes">&ldquo;</span>&nbsp;'+candidate.description+'<span class="pull-quotes">&rdquo;</span></p>';
			inject+="<p><a href='docs/"+candidate.document+"'download>";
			inject+='Download '+firstName+'\'s full candidate statement.</a></p></div>';
			desk.append(inject);
			desk.show();
		}
	});
	var twitTop = $('.twitter-timeline').offset().top;
	$(window).scroll(function() {
		var currentScroll = $(window).scrollTop()+30;
		if (currentScroll >= twitTop && !isMobile()) {
			$('.twitter-timeline').css({
				position: 'fixed',
				width: $(".col-md-4").width(),
				top: '30px',
				right: $('.twitter-timeline').offset().right
			});
		} else {
			$('.twitter-timeline').css({
				position: 'static'
			});
		}
	});
	$(".arrow-size").click(function() {
		$('html, body').animate({
			scrollTop: $("#positions").offset().top
		}, 1000);
	});