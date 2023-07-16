hideMenu = () => {
	menuBar = document.getElementsByClassName("xvbhtw8 xh8yej3")[0];
	useAppBar = document.getElementsByClassName("_acc8 _abpk")[0];
	
	menuBar.style.visibility = "hidden";
	useAppBar.style.visibility = "hidden";
}

hidePostDistractions = () => {
	listedLikesBar = document.getElementsByClassName("x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 x1i0vuye xvs91rp x1s688f x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj")[0];
	viewCommentsText = document.getElementsByClassName("x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x12nagc x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1")[0];
	descriptionMoreButton = document.getElementsByClassName("x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x1roi4f4 x1yc453h x10wh9bi x1wdrske x8viiok x18hxmgj")[0];
	taggedPeople = document.getElementsByClassName("_a9-5 _a9-6 _a9-7")[0];
	userBar = document.getElementsByClassName("_aasi")[0];
	contentCreatorName = document.getElementsByClassName("x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd")[0];
	likeButton = document.getElementsByClassName("_aamw")[0];
	commentButton = document.getElementsByClassName("_aamx")[0];

	// change styles
	listedLikesBar.style.display = "none";
	viewCommentsText.style.display = "none";

	if (typeof taggedPeople !== 'undefined') {
    	taggedPeople.style.display = "none";
	}

	userBar.style.display = "none";
	contentCreatorName.style.display = "none";
	commentButton.style.display = "none";
	likeButton.style.display = "none";

	// perform actions
	if (typeof descriptionMoreButton !== 'undefined') {
    	descriptionMoreButton.click();
	}
}

hideReturnButton = () => {
	returnButtonOnDMPage = document.getElementsByClassName("_ab6-")[0];
	returnButtonOnVideoPage = document.getElementsByClassName("_ab18 _ab19")[0];

	if (typeof returnButtonOnDMPage !== 'undefined') {
    	returnButtonOnDMPage.style.visibility = "hidden";
	}

	if (typeof returnButtonOnVideoPage !== 'undefined') {
    	returnButtonOnVideoPage.style.visibility = "hidden";
	}
}

removeDistractions = () => {
	if (window.location.href.indexOf("/direct/inbox") > 0) {
		// disable return button
		hideReturnButton();
	} else if (window.location.href.indexOf("/direct/t/") > 0) {
	} else if (window.location.href.indexOf("/p/") > 0) {
		hideReturnButton();
		hideMenu();
		hidePostDistractions();
	} else {
		hideMenu();
	}
};

interval = setInterval(function() {
	if (window.location.pathname == "/") {
		clearInterval(interval);
		window.location.href = "https://www.instagram.com/direct/inbox/";
	} else {
		removeDistractions();
	}
}, 1*60);