<?php
/*
Template Name: Housing Page
*/
?>

<?php get_header(); 

//Breaking out of site-container
?>
</div>

<style type="text/css">
	a{
		cursor: pointer;
	}
	.person-container > a:hover{
		color: #d31c13;
	}
	/*image shadow on hover*/
	.person-container > a:hover img{
		filter: brightness(80%);
		-webkit-filter: brightness(80%);
		-moz-filter: brightness(80%);
		/*box-shadow: 3px 3px 3px #d31c13;
		-moz-box-shadow: 3px 3px 3px #d31c13;
		-webkit-box-shadow: 10px -10px #d31c13;*/
	}
	.static-house .feature-image.feature-staff{
		background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("../south40/images/housing-cover.jpg");
		background-position: 0 40%;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.breakingnews{
		display: none;
	}
	.h-c {
		max-width: 850px;
		margin: 50px auto;
		padding: 0 15px;
	}
</style>

<div class="static-house">
	<a onclick="load(0)">
		<div id="top" class="feature-image feature-staff">
			<div class="title-container">
				<h1 class="tagline">Student Life Housing Guide</h1>
			</div>
		</div>
	</a>

	<div class="static-nav">
		<div class="container">
			<a onclick="load(1)" id="s40f">South 40 Freshmen</a>
			<a onclick="load(2)" id="s40s">South 40 Sophomores</a>
			<a onclick="load(3)" id="voc">Village &amp; Off Campus</a>
			<div class="float-clear">
			</div>
		</div>
	</div>

	<div class="site-container" id="housing-container">
	</div>
</div>

<div class="site-container">
	<?php get_footer(); ?>
</div>
<!-- load jquery for tab selector -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<script>

	$(document).ready(function () {
		$('html, body').animate({scrollTop: $('#top').offset().top}, 'slow');
		var url = window.location.href;
		var tab = url.charAt(url.length-1);
		if(tab==1||tab==2||tab==3){
			load(tab);
		}
		else{
			load(0);
		}
	});

	function load(tab){
		if(tab=="0"){
			front();
		}
		if(tab=="1"){
			fresh();
		}
		if(tab=="2"){
			soph();
		}
		if(tab=="3"){
			north();
		}
	}
	function fresh(){
		$("#housing-container").load("../south40/south40freshmen.html");
		$("#s40s").removeClass('current');
		$("#voc").removeClass('current');
		$("#s40f").addClass('current');
	}
	function soph(){
		$("#housing-container").load("../south40/south40sophomores.html");
		$("#s40f").removeClass('current');
		$("#voc").removeClass('current');
		$("#s40s").addClass('current');
	}
	function north(){
		$("#housing-container").load("../northside/villageoffcampus.html");
		$("#s40f").removeClass('current');
		$("#s40s").removeClass('current');
		$("#voc").addClass('current');
	}
	function front(){
		$("#housing-container").load("../northside/front.html");
		$("#s40f").removeClass('current');
		$("#s40s").removeClass('current');
		$("#voc").removeClass('current');
	}
</script>
