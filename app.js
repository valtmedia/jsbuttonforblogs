const adButtons = document.querySelectorAll("#adDivs"),
	modalContainer = document.querySelector(".modal-container"),
	modalCloseBtn = document.querySelector(".modal-close-btn"),
	modalRewardBtn = document.querySelector(".modal-reward-btn "),
	modalTimeLeftDisplay = document.querySelector(".modal-timeLeft"),
	modalH1 = document.querySelector(".modal-h1");
var adViewed = !1,
	timerRunning = null;
function popupAd(t) {
	let e = t.getAttribute("data-h1"),
		d = t.getAttribute("data-btn-txt"),
		a = t.getAttribute("data-adLink");
	t.getAttribute("data-adViewed"), t.getAttribute("data-originalLink");
	let o = t.getAttribute("data-timer");
	editModal(e, d, a, t.getAttribute("data-adVid")),
		console.log("Pop up the Ad"),
		modalContainer.classList.remove("hidden"),
		(adViewed = !1),
		(timerRunning = !0);
	var n = parseInt(o, 10),
		i = setInterval(function () {
			n <= 0 && (clearInterval(i), (timerRunning = !1)),
				console.log("Timer", n),
				(modalTimeLeftDisplay.textContent = "You can close the ad in " + n),
				(n -= 1);
		}, 1e3);
}
function closePopUp() {
	console.log("close"),
		adViewed ||
			(modalTimeLeftDisplay.textContent = "Click the Reward Button to Close"),
		adViewed && !timerRunning && modalContainer.classList.add("hidden");
}
function rewardRedirection() {
	(adViewed = !0),
		window.open(modalRewardBtn.dataset.redirect),
		console.log(modalRewardBtn.dataset.redirect);
}
function editModal(t, e, d, a) {
	(modalH1.textContent = t),
		(modalRewardBtn.textContent = e),
		modalRewardBtn.setAttribute("data-redirect", d);
}
console.log(adButtons),
	adButtons.forEach((t) => t.addEventListener("click", () => popupAd(t))),
	modalCloseBtn.addEventListener("click", closePopUp),
	modalRewardBtn.addEventListener("click", rewardRedirection),
	console.log(adButtons);
