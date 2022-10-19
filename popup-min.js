const adButtons = document.querySelectorAll("#adDivs"),
	modalContainer = document.querySelector(".modal-container"),
	modalCloseBtn = document.querySelector(".modal-close-btn"),
	modalRewardBtn = document.querySelector(".modal-reward-btn "),
	modalTimeLeftDisplay = document.querySelector(".modal-timeLeft"),
	modalH1 = document.querySelector(".modal-h1");
var adViewed = !1,
	timerRunning = null;
function init() {
	console.log("popupAD Script Loaded");
	let t = new URLSearchParams(window.location.search);
	if (
		("clear" === t.get("local") && localStorage.removeItem("popupAD"),
		0 === adButtons.length)
	) {
		let e = Error(
			"No Divs Found. Make sure to add ID 'adDivs' to the required divs for popup. "
		);
		console.log("popupAD ", e);
	}
}
function popupAd(t) {
	let e = new URLSearchParams(window.location.search),
		a = e.get("h1") || t.getAttribute("data-h1") || "Popup AD",
		d = e.get("btn") || t.getAttribute("data-btn-txt") || "Earn Reward",
		o = e.get("timer") || t.getAttribute("data-timer") || 10,
		n =
			e.get("adlink") ||
			t.getAttribute("data-adLink") ||
			"https://www.google.com/",
		i = e.get("mobilead") || t.getAttribute("data-mobilead") || n,
		r = e.get("desktopad") || t.getAttribute("data-desktopad") || n,
		l =
			e.get("originallink") ||
			t.getAttribute("data-originalLink") ||
			"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
	if (!JSON.parse(localStorage.getItem("popupAD"))) {
		editModal(a, d, i, r, o), modalContainer.classList.remove("hidden");
		return;
	}
	window.open(l);
}
function startTimer(t) {
	timerRunning = !0;
	var e = parseInt(t, 10),
		a = setInterval(function () {
			e <= 0 &&
				(clearInterval(a),
				(timerRunning = !1),
				modalContainer.classList.add("hidden")),
				(e -= 1);
		}, 1e3);
}
function closePopUp() {
	timerRunning || modalContainer.classList.add("hidden");
}
function rewardRedirection() {
	startTimer(modalRewardBtn.dataset.adtimer),
		window.open(modalRewardBtn.dataset.redirect),
		localStorage.setItem("popupAD", !0);
}
function editModal(t, e, a, d, o) {
	let n = screen.width > 765 ? d : a;
	(modalH1.textContent = t),
		(modalRewardBtn.textContent = e),
		modalRewardBtn.setAttribute("data-redirect", n),
		modalRewardBtn.setAttribute("data-adtimer", o);
}
adButtons.forEach((t) => t.addEventListener("click", () => popupAd(t))),
	modalCloseBtn.addEventListener("click", closePopUp),
	modalRewardBtn.addEventListener("click", rewardRedirection),
	init();
