hideStuff = () => {
	if (window.location.href.indexOf("/direct/inbox") > 0) {
		returnButton = document.getElementsByClassName("_ab18 _ab19")[0];
		returnButton.style.visibility = "hidden";
	} else if (window.location.href.indexOf("/direct/") < 0) {
		menuBar = document.getElementsByClassName("_abpb")[0];
		useAppBar = document.getElementsByClassName("_acc8")[0];

		menuBar.style.visibility = "hidden";
		useAppBar.style.visibility = "hidden";
	}
};

setInterval(function() {
	hideStuff();
}, 1*60);