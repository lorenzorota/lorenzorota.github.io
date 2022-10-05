hideMenu = () => {
	menuBar = document.getElementsByClassName("_abpb")[0];
	useAppBar = document.getElementsByClassName("_acc8")[0];

	menuBar.style.visibility = "hidden";
	useAppBar.style.visibility = "hidden";
}

hidePostDistractions = () => {
	listedLikesBar = document.getElementsByClassName("_ae5m")[0];
	tmp = Array.from(document.getElementsByClassName("_aacl _aaco _aacu _aacy _aad6 _aade"));
	viewCommentsText = tmp.find(
	  e =>
	    e.outerHTML.contains("View")
	);
	contentCreatorBar = document.getElementsByClassName("_aasi")[0];
	contentCreatorName = document.getElementsByClassName("_ae5q")[0];
	commentButton = document.getElementsByClassName("_abl-")[2];
	moreButton = document.getElementsByClassName("_aacl _aaco _aacu _aacy _aad6 _aade")[0];

	// change styles
	viewCommentsText.style.display = "none";
	listedLikesBar.style.display = "none";
	contentCreatorBar.style.display = "none";
	contentCreatorName.style['pointer-events'] = "none";
	commentButton.style.display = "none";

	// perform actions
	moreButton.click();
}

removeDistractions = () => {
	if (window.location.href.indexOf("/direct/inbox") > 0) {
		returnButton = document.getElementsByClassName("_ab18 _ab19")[0];
		returnButton.style.visibility = "hidden";
	} else if (window.location.href.indexOf("/direct/t/") > 0) {
	} else if (window.location.href.indexOf("/p/") > 0) {
		hideMenu();
		hidePostDistractions();
	} else if (window.location.pathname == "/") {
		window.location = "https://www.instagram.com/direct/inbox/";
	} else {
		hideMenu();
	}
};

removeDistractions();

setInterval(function() {
	hideStuff();
}, 1*60);