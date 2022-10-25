const adButtons = document.querySelectorAll("#adDivs"),
	bodyTag = document.querySelector("body"),
	modalTemplate = `
		<section class="modal-container hidden">
			<div class="custom-modal">
				<div class="modal-header">
					<div>
						<h1 class="modal-h1">AD MODAL</h1>
					</div>
					<div class="modal-cls-container">
						<p class="modal-timeLeft"></p>
						<button class="modal-close-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				
				<div>
					<p class="modal-description">
					</p>
				</div>
				
				<div class="modal-vid-wrapper">
					<iframe
						src="https://www.youtube.com/embed/C0DPdy98e4c"
						frameborder="0"
					></iframe>
				</div>
				
				<div class="modal-reward-btn-container">
					<button class="modal-reward-btn">Earn Reward</button>
				</div>
			</div>
		</section>`;
var adViewed = JSON.parse(localStorage.getItem("popupAD")),
	timerRunning = null;
function populateModal() {
	bodyTag.insertAdjacentHTML("afterbegin", modalTemplate),
		console.log("modal Populated");
}
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
populateModal(), init(), initEventListeners();
const modalContainer = document.querySelector(".modal-container"),
	modalCloseBtn = document.querySelector(".modal-close-btn"),
	modalRewardBtn = document.querySelector(".modal-reward-btn "),
	modalTimeLeftDisplay = document.querySelector(".modal-timeLeft"),
	modalDescription = document.querySelector(".modal-description"),
	modalH1 = document.querySelector(".modal-h1");
function popupAd(t) {
	let e = new URLSearchParams(window.location.search),
		a = e.get("h1") || t.getAttribute("data-h1") || "Popup AD",
		o = e.get("btn") || t.getAttribute("data-btn-txt") || "Earn Reward",
		d = e.get("timer") || t.getAttribute("data-timer") || 10,
		i =
			e.get("adlink") ||
			t.getAttribute("data-adLink") ||
			"https://www.google.com/",
		n = e.get("mobilead") || t.getAttribute("data-mobilead") || i,
		r = e.get("desktopad") || t.getAttribute("data-desktopad") || i,
		l = e.get("originallink") || t.getAttribute("data-originalLink") || null,
		s = t.getAttribute("data-description") || "Sample Description";
	if (!JSON.parse(localStorage.getItem("popupAD"))) {
		editModal(a, o, n, r, d, s), modalContainer.classList.remove("hidden");
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
function editModal(t, e, a, o, d, i) {
	let n = screen.width > 765 ? o : a;
	(modalH1.textContent = t),
		(modalRewardBtn.textContent = e),
		(modalDescription.textContent = i),
		modalRewardBtn.setAttribute("data-redirect", n),
		modalRewardBtn.setAttribute("data-adtimer", d);
}
modalCloseBtn.addEventListener("click", closePopUp),
	modalRewardBtn.addEventListener("click", rewardRedirection);
