var latestRound=4;

//check if mobile device
function isMobile(){
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	}
	else return false;
}

//arrow on splash page
$("#scroll-down").click(function(event) {
	$('html,body').animate({
		scrollTop: $(".text-area").offset().top
	});
});

//next round button on footer
$("#next-round").click(function(event) {
	var currentRound = $(".round-start").data('round');
	if(currentRound+1<=latestRound){
		var nextRound = "round"+(currentRound+1)+".html";
		$(".round").load(nextRound);
		fixFooter(currentRound+1);
		document.location.hash = currentRound+1;
	}
});

//prev round button on footer
$("#prev-round").click(function(event) {
	var currentRound = $(".round-start").data('round');
	var nextRound = "round"+(currentRound-1)+".html";
	$(".round").load(nextRound);
	fixFooter(currentRound-1);
	if(currentRound-1==0){
		window.location.hash = "";
	}else{
		document.location.hash = currentRound-1;
	}
});

function fixFooter(newRound){
	//scroll to top of round
	$('html,body').animate({
		scrollTop: $(".text-area").offset().top-30
	},1);
	if(newRound==1){
		$("#prev-round").text("< Introduction");
	}
	else{
		$("#prev-round").text("< Prev Part");
	}
	//first round
	if(newRound==0){
		$(".pull-xs-left").hide();
		$(".pull-xs-right").show();
	}
	//last possible round
	else if(newRound==latestRound){
		$(".pull-xs-left").show();
		$(".pull-xs-right").hide();
	}
	//every other round
	else{
		$(".pull-xs-left").show();
		$(".pull-xs-right").show();
	}
}

$(document).ready(function(){
	//hide navbar and footer on splash
	$(".navbar").hide();
	$(".footer").hide();
	var scrollHeight= $(window).height()-50;
	if(isMobile()){
		$(".splash").css('background-size', '100%');
		$(".splash").css('height', '35vh');
		$(".arrow").hide();
		scrollHeight = $(window).height()/2 - 50;
	}
	//load round from hash
	var loaded=false;
	if(window.location.hash.slice(1)>=1){
		//change 0 to the latest part released
		if(window.location.hash.slice(1)<=latestRound){
			var currentRound = window.location.hash.slice(1);
			var loadRound = "round"+(currentRound)+".html";
			$(".round").load(loadRound);
			fixFooter(currentRound);
			loaded=true;
		}
		else{
			alert("We're not that dumb. Wait for the next part to come out.");
		}
	}
	//load intro if no hash specified
	if(loaded==false){
		$(".round").load('round0.html');
		$(".pull-xs-left").hide();
		$(".pull-xs-right").show();
	}
	$(function () {
		$(window).scroll(function () {
			//show navbar and footer after splash
			if ($(this).scrollTop() > scrollHeight) {
				$('.navbar').fadeIn(200);
				if(latestRound>0){
					$('.footer').fadeIn(200);//footer hidden for intro. uncomment after round 0
				}
			} else {
				$('.navbar').fadeOut();
				$('.footer').fadeOut();//footer hidden for intro. uncomment after round 0
			}
		});
	});
});