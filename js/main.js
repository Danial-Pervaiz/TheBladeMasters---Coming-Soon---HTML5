"use strict";

$(document).ready(function() {
	$(".about").mCustomScrollbar({
		scrollInertia: 100
	});
// Countdown
	$('.countdown').countdown({
		date: date,
		render: function(data) {
			$(this.el).html(
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.days + "</h2>" + " <h4>days</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.hours + "</h2>" + " <h4>hours</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.min, 2) + "</h2>" + " <h4>minutes</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.sec, 2) + "</h2>" + " <h4>seconds</h4></div>");
		}
	});
	var hero = $("#hero");
	var about = $("#about");
	var subscribe = $("#subscribe")
	var aboutTougle = $("#exit-tougle-about");
	var subscribeTougle = $("#exit-tougle-subscribe");
	var readMore = $("#read-more");
	var singUp = $("#sign-up");
	readMore.on("click", function(){
		if (about.hasClass("visible")) {
			about.removeClass("visible")
		} else {
			about.addClass("visible");
		}
	});
	aboutTougle.on("click", function(){
		if (about.hasClass("visible")) {
			about.removeClass("visible")
		} else {
			about.addClass("visible");
		}
	});
	singUp.on("click", function(){
		subscribe.addClass("visible");
		hero.addClass("shade")
	});
	subscribeTougle.on("click", function(){
		subscribe.removeClass("visible");
		hero.removeClass("shade")
	});
// Mail Chimp
	$('#mc-form').on("submit", function(){
		$(".subscribe-response").addClass("active");
	});

	$('#mc-form').ajaxChimp({
		url: url
	});
		var $contactForm = $('#contact-form');

	$contactForm.on("submit", function(e) {
		e.preventDefault();
		var $submit = $('input:submit', $contactForm);
		var proceed = true;

		var post_data = {
			'email': email,
			'user_name'     : $('input[name=name]').val(), 
			'user_email'    : $('input[name=email]').val(), 
			'msg'           : $('textarea[name=message]').val()
		};
		$.post('contact_me.php', post_data, function(response){

			var output = response.text;

			$("#name").val('');
			$("#name").removeClass("ng-not-empty")

			$("#email").val('');
			$("#email").removeClass("ng-not-empty")

			$("#msg").val('');
			$("#msg").removeClass("ng-not-empty")

			$("#contact-form #contact-result").addClass("submited");
			$("#contact-form #contact-result").html(output);
		}, 'json');
	});
});