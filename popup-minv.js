const adButtons = document.querySelectorAll("#adDivs"),
	modalContainer = document.querySelector(".modal-container"),
	modalCloseBtn = document.querySelector(".modal-close-btn"),
	modalRewardBtn = document.querySelector(".modal-reward-btn "),
	modalTimeLeftDisplay = document.querySelector(".modal-timeLeft"),
	modalH1 = document.querySelector(".modal-h1"),
	modalDescription = document.querySelector(".modal-description");
var adViewed = JSON.parse(localStorage.getItem("popupAD")),
	timerRunning = null;
function init() {
	console.log("popupAD Script Loaded ,V2");
	let t = new URLSearchParams(window.location.search);
	if (
		(("clear" === t.get("local") ||
			"clear" === adButtons[0].getAttribute("data-local")) &&
			((adViewed = !1), localStorage.removeItem("popupAD")),
		0 === adButtons.length)
	) {
		let e = Error(
			"No Divs Found. Make sure to add ID 'adDivs' to the required divs for popup. "
		);
		console.log("popupAD ", e);
	}
}
function initEventListeners(t = !1) {
	adButtons.forEach((e) => {
		e.addEventListener("click", () => popupAd(e)),
			adViewed ||
				Array.from(e.children).forEach((e) => {
					t
						? e.classList.remove("prevent-click")
						: e.classList.add("prevent-click");
				});
	});
}
function popupAd(t) {
	let e = new URLSearchParams(window.location.search),
		a = e.get("h1") || t.getAttribute("data-h1") || "Popup AD",
		i = e.get("btn") || t.getAttribute("data-btn-txt") || "Earn Reward",
		n = e.get("timer") || t.getAttribute("data-timer") || 10,
		d =
			e.get("adlink") ||
			t.getAttribute("data-adLink") ||
			"https://www.google.com/",
		o = e.get("mobilead") || t.getAttribute("data-mobilead") || d,
		r = e.get("desktopad") || t.getAttribute("data-desktopad") || d,
		l = e.get("originallink") || t.getAttribute("data-originalLink") || null,
		s = t.getAttribute("data-description") || "Sample Description";
	if (!JSON.parse(localStorage.getItem("popupAD"))) {
		editModal(a, i, o, r, n, s), modalContainer.classList.remove("hidden");
		return;
	}
	l && window.open(l);
}
function startTimer(t) {
	timerRunning = !0;
	var e = parseInt(t, 10),
		a = setInterval(function () {
			e <= 0 &&
				(clearInterval(a),
				(timerRunning = !1),
				modalContainer.classList.add("hidden"),
				initEventListeners((reset = !0))),
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
function editModal(t, e, a, i, n, d) {
	let o = screen.width > 765 ? i : a;
	(modalH1.textContent = t),
		(modalRewardBtn.textContent = e),
		(modalDescription.textContent = d),
		modalRewardBtn.setAttribute("data-redirect", o),
		modalRewardBtn.setAttribute("data-adtimer", n);
}
modalCloseBtn.addEventListener("click", closePopUp),
	modalRewardBtn.addEventListener("click", rewardRedirection),
	init(),
	initEventListeners();
