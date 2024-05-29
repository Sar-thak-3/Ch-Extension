"use strict";

var url = "";

function replace() {
	// var images = document.getElementsByTagName("img");
	var images = document.querySelectorAll('.ivm-view-attr__img--centered.EntityPhoto-circle-3');
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}
}

chrome.storage.sync.get({
	enabled: false,
	url: ""
}, function(items) {
	if (items.enabled) {
		url = items.url;
		window.setInterval(replace, 3000);
		replace();
	}
});