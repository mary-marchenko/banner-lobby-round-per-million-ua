// padding no-ios
document.addEventListener("DOMContentLoaded", function() {
    let bannerLobbyBtn = document.querySelector('.bannerLobby__link');

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        bannerLobbyBtn.classList.add('noios-padding');
    }
});