/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
	"use strict"; // Start of use strict

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : ($($anchor.attr('href')).offset().top - 50)
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target : '.navbar-fixed-top',
		offset : 51
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});

	// Downsize header text in narrow screen (Fit Text Plugin)
	$("h1").fitText(1.2, {
		minFontSize : '30px',
		maxFontSize : '36px'
	});
	$("h2").fitText(1.6, {
		minFontSize : '24px',
		maxFontSize : '30px'
	});

	// Offset for Main Navigation
	$('#mainNav').affix({
		offset : {
			top : 100
		}
	});

	// Initialize WOW.js Scrolling Animations
	new WOW().init();

})(jQuery); // End of use strict

/*
 * Header Text and Background conversion test
 */

/*
 * Leave the element be if it's already defined (for l10n) Else, try use the GET
 * parameter specified value Otherwise, use the default value
 * 
 * return el if it is already defined, otherwise return paramVal if it is
 * defined, else return defaultVal
 */
function initElement(el, paramVal) {
	return (typeof el === 'undefined') ? paramVal : el;
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
			.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1];
		}
	}
};

var DEBUG = false;

/*
 * these values is used only when parameter is available If not, the default
 * value (the third argument of initElement function) will be used
 */

var defaultVals = {
	'blogName' : undefined,
	'buttonText' : 'Notify Me When Available',
	'headerBackground' : 'header-background-1',
	'videoBackground' : 'header-background-5',
	'headerText' : 'Hop: A Sincere Way to Connect with Friends of Your Friends',
	'videoText' : 'Hop: Meet Friends\' Friends, from Heart to Hearts',
	'video' : 'QjDbaEESClw',
	'playBtn' : 'img/play-button.png',
	'reason' : 'dating', /* career, dating, points_of_view */
	'cta1' : true,
	'cta2' : true,
	'cta3' : true,
	'headerDownButton' : false
};
var refMap = {
	'sinderella' : {
		'blogName' : 'Sinderella'
	},
	'lara' : {
		'blogName' : 'Lara loveless'
	},
	'datingwithdignity' : {
		'blogName' : 'Dating with Dignity'
	},
	'datingGoddess' : {
		'blogName' : 'Dating Goddess'
	},
	'Soon2becatlady' : {
		'blogName' : 'Soon2becatlady'
	},
	'fourtydays' : {
		'blogName' : '40 Days of Dating'
	},
	'datingadvice' : {
		'blogName' : 'DatingAdvice'
	},
	'coupleconnection' : {
		'blogName' : 'Couple Connection'
	},
	'sheknows' : {
		'blogName' : 'She Knows'
	},
	'30dates' : {
		'blogName' : '30 Dates'
	},
	'buzzfeed' : {
		'blogName' : 'Buzzfeed Dating Blog'
	},
	'datingdiva' : {
		'blogName' : 'Single Dating Diva'
	},
	'lovedates' : {
		'blogName' : 'We Love Dates'
	},
	'timeoutdating' : {
		'blogName' : 'Time Out Dating'
	},
	'huffinton' : {
		'blogName' : 'Huffington Post'
	},
	'girlsmiling' : {
		'blogName' : 'Divorced Girl Smiling'
	},
	'guygrinning' : {
		'blogName' : 'Divorced Guy Grinning'
	},
	'fitness' : {
		'blogName' : 'Men’s Fitness'
	},
	'role' : {
		'blogName' : 'Role Reboot'
	},
	'career' : {
		'reason' : 'career',
		'headerBackground' : 'header-background-1'
	},
	'perspective' : {
		'reason' : 'points_of_view',
		'headerBackground' : 'header-background-1'
	},
	'lover-or-player' : {},
	'dummy' : {}
};

function getValueForParam(param) {
	var ref = getUrlParameter("ref");
	var refVals = refMap[ref];
	if (typeof refVals === 'undefined') {
		return defaultVals[param];
	} else {
		var val = refVals[param];
		if (typeof val === 'undefined') {
			return defaultVals[param];
		} else {
			return val;
		}
	}
}
var localeVer = initElement(localeVer, 'en');
/* buttonText */
var buttonText = initElement(buttonText, getValueForParam("buttonText"));
var buttonTextPrefix = initElement(buttonTextPrefix,
		'Early Bird Reward Exclusively for ');
var buttonTextPostfix = initElement(buttonTextPostfix, "\'s Readers");

var blogName = getValueForParam("blogName");
if (typeof blogName !== 'undefined')
	buttonText = buttonTextPrefix + blogName + buttonTextPostfix;

$("a.notify-when-available").html(
		buttonText + '&nbsp;<i	class="fa fa-chevron-right"></i>');

/* background */

var hbg = initElement(hbg, getValueForParam("headerBackground"));
$('#header-content').addClass(hbg);
var vbg = initElement(vbg, getValueForParam("videoBackground"));
$('#video-content').addClass(vbg);

/* header text */
var headerText = initElement(headerText, getValueForParam("headerText"));
$("#slogan").text(headerText);

/* video text */
var videoText = initElement(videoText, getValueForParam("videoText"));
$("#video-slogan").text(videoText);

/* video play button */
var playBtn = initElement(playBtn, getValueForParam("playBtn"));
$('img.play-button').attr('src', playBtn);

/* show/hide call to action button */
var cta1 = initElement(cta1, getValueForParam("cta1"));
var cta2 = initElement(cta2, getValueForParam("cta2"));
var cta3 = initElement(cta3, getValueForParam("cta3"));

if (!cta1) {
	$("#callToAction-1").hide();
}
if (!cta2) {
	$("#callToAction-2").hide();
}
if (!cta3) {
	$("#callToAction-3").hide();
}

/* show/hide header down arrow button */
var headerDownButton = initElement(headerDownButton,
		getValueForParam("headerDownButton"));
if (!headerDownButton) {
	$("#header-down-button").hide();
}

var reason = initElement(reason, getValueForParam("reason"));
// $(".reason-" + reason).removeClass('hidden');
// $(".reason-" + reason + " h2").css('font-size:30px;');
$('.carousel').carousel({
	interval : 1000 * 10
});

/*
 * Youtube iFrame API
 */
var vid = initElement(vid, getValueForParam("video"));
$("img.click-to-play-video").click(function() {
	if (window.hopPlayer === null || window.hopPlayer === undefined) {
		window.hopPlayer = new YT.Player('player', {
			width : '100%',
			height : '100%',
			videoId : vid,
			playerVars : {
				'autoplay' : 1,
				'cc_load_policy' : 1
			},
			events : {
				'onReady' : function() {
					window.hopPlayer.playVideo();
				},
				'onStateChange' : onPlayerStateChange
			}
		});
	} else { // resume
		window.hopPlayer.playVideo();
	}

	$('#player-modal').on('hidden.bs.modal', function() {
		window.hopPlayer.seekTo(0, true);
		window.hopPlayer.pauseVideo();
	})
	$('#player-modal').modal('show');
	ga('send', {
		hitType : 'event',
		eventCategory : localeVer,
		eventAction : 'Play Video',
		eventLabel : getUrlParameter("ref")
	});

	// stop video when the "back" button in browser is pressed
	var data = History.getState().data;
	if (data === null || data === undefined || data.state !== 'playing') {
		History.replaceState({
			state : 'header'
		}, document.title, location.pathname + location.search);
		History.pushState({
			state : 'playing'
		}, document.title, location.pathname + location.search);
	}
	History.Adapter.bind(window, 'statechange', function() {
		var data = History.getState().data;
		if (data !== null && data !== undefined && data.state === 'header') {
			$('#player-modal').modal('hide');
			// prevent the statechange event from being fired duirng
			// History.replaceState()
			// when the "play" button is pressed next time
			History.Adapter.bind(window, 'statechange', null);
		}
	});
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var stub;

function onPlayerStateChange(event) {
	if (/* event.data === YT.PlayerState.PAUSED || */event.data === YT.PlayerState.ENDED) {
		// go back in history only when the current state is "playing"
		var data = History.getState().data;
		if (data !== null && data !== undefined && data.state === 'playing') {
			// delayed going back to allow users to seek viedo frames
			stub = setTimeout(function() {
				$('#player-modal').modal('hide');
				History.back();
			}, 0); // no need to delay anymore since only ENDED is detected
		}
	} else if (stub !== null && stub !== undefined) {
		clearTimeout(stub);
		stub = null;
	}
};

$('.app-store').click(function() {
	var store = 'unknown';
	if ($(this).hasClass('appstore')) {
		store = 'AppStore';
	} else if ($(this).hasClass('playstore')) {
		store = 'PlayStore';
	}
	ga('send', {
		hitType : 'event',
		eventCategory : localeVer,
		eventAction : store,
		eventLabel : getUrlParameter("ref")
	});
});

$('.fb-share')
		.click(
				function() {
					window
							.open(
									"https://www.facebook.com/sharer/sharer.php?u="
											+ escape("http://hop.appfinca.com/"
													+ (localeVer == 'en' ? ''
															: localeVer)), '',
									'menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=300,width=600');
					if (DEBUG)
						return;

					ga('send', {
						hitType : 'event',
						eventCategory : localeVer,
						eventAction : 'Facebook Share',
						eventLabel : getUrlParameter("ref")
					});
				});

/* Get email for reward */
$('[data-toggle="tooltip"]').tooltip({
	trigger : "manual"
});

function validateEmail(email) {
	var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return regex.test(email);
}

function postEmail(email) {
	var xhr = new XMLHttpRequest();
	var params = "entry.783777740=" + email;
	xhr
			.open(
					"POST",
					"https://docs.google.com/forms/d/1ZWQDUNEwgOfEsk0T7qQa-qitICobMS27tN7R2Midod8/formResponse",
					true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader("Content-length", params.length);
	xhr.send(params);
	/*
	 * Note that the response cannot be processed because this is a cross-origin
	 * HTTP request
	 */
}
/*
 * $("a.notify-when-available").click(function() { $("#get-reward").click(); });
 */
$("a.notify-when-available").click(function() {
	$("div.get-reward-container").collapse('hide');
	$("form.email-form").collapse('show');
	if (DEBUG)
		return; // for debug

	ga('send', {
		hitType : 'event',
		eventCategory : 'Referral',
		eventAction : 'Get Reward',
		eventLabel : getUrlParameter("ref")
	});

});
$("form.email-form").submit(function(event) {
	var email = $("input:first", this).val();
	if (email == "" || !validateEmail(email)) {
		$('[data-toggle="tooltip"]').tooltip("show");
		setTimeout(function() {
			$('[data-toggle="tooltip"]').tooltip("hide");
		}, 2000);
		$("input:first", this).focus();
		return false;
	}
	if (!DEBUG)
		postEmail(email); // for debug
	/*
	 * Google docs may reject the email address if it is not a valid email
	 * address
	 */

	$("form.email-form").collapse('hide');
	$("h3.thank-you").collapse('show');

	if (DEBUG)
		return false; // for debug

	/* Facebook Convertion */
	fbq('track', 'AddToWishlist');

	ga('send', {
		hitType : 'event',
		eventCategory : localeVer,
		eventAction : 'Submit Email',
		eventLabel : getUrlParameter("ref")
	});

	return false;
});
