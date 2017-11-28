var defaultVals = {
	'blogName' : undefined,
	'headerText' : 'Hop: 用真誠的方式 認識朋友的朋友',
	'videoText' : 'Hop: Meet Friends\' Friends, from Heart to Hearts',
	'playBtn' : '../img/play-button.png',
};

var refMap = {};

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
var localeVer = 'zh-tw';
var buttonText = initElement(buttonText, getValueForParam("buttonText"));
var buttonTextPrefix = initElement(buttonTextPrefix,
		'Early Bird Reward Exclusively for ');
var buttonTextPostfix = initElement(buttonTextPostfix, "\'s Readers");

var blogName = getValueForParam("blogName");

var hbg = initElement(hbg, getValueForParam("headerBackground"));
var vbg = initElement(vbg, getValueForParam("videoBackground"));

/* header text */
var headerText = initElement(headerText, getValueForParam("headerText"));

/* video text */
var videoText = initElement(videoText, getValueForParam("videoText"));

/* video play button */
var playBtn = initElement(playBtn, getValueForParam("playBtn"));

/* show/hide call to action button */
var cta1 = initElement(cta1, getValueForParam("cta1"));
var cta2 = initElement(cta2, getValueForParam("cta2"));
var cta3 = initElement(cta3, getValueForParam("cta3"));
var headerDownButton = initElement(headerDownButton,
		getValueForParam("headerDownButton"));
var reason = initElement(reason, getValueForParam("reason"));
var vid = initElement(vid, getValueForParam("video"));