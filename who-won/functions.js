//arrow on splash page
$("#scroll-down").click(function(event) {
	$('html,body').animate({
		scrollTop: $(".text-area").offset().top
	});
});

//next round button on footer
$("#next-round").click(function(event) {
	var currentRound = $(".round-start").data('round');
	var nextRound = "round"+(currentRound+1)+".html";
	$(".round").load(nextRound);
	fixFooter(currentRound+1);
	document.location.hash = currentRound+1;
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
		$("#prev-round").text("< Prev Round");
	}
	//first round
	if(newRound==0){
		$(".pull-xs-left").hide();
		$(".pull-xs-right").show();
	}
	//last possible round
	else if(newRound==4){
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
	//load round from hash
	if(window.location.hash.slice(1)>=1){
		var currentRound = window.location.hash.slice(1);
		var loadRound = "round"+(currentRound)+".html";
		$(".round").load(loadRound);
		fixFooter(currentRound);
	}
	//load round 1 if no hash specified
	else{
		$(".round").load('round0.html');
		$(".pull-xs-left").hide();
		$(".pull-xs-right").show();	
	}
	$(function () {
		$(window).scroll(function () {
			//show navbar and footer after splash
			if ($(this).scrollTop() > $(window).height()-50) {
				$('.navbar').fadeIn(200);
				$('.footer').fadeIn(200);
			} else {
				$('.navbar').fadeOut();
				$('.footer').fadeOut();
			}
		});
	});
});