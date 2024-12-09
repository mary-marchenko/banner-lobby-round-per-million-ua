// padding no-ios
document.addEventListener("DOMContentLoaded", function() {
    let bannerLobbyLink = document.querySelector('.bannerLobby__link');
    let bannerRightTop = document.querySelector('.bannerLobby__right-top');
    let bannerRightBottom = document.querySelector('.bannerLobby__right-bottom');
    let bannerLeftTop = document.querySelector('.bannerLobby__left-top');
    let bannerRightLeft = document.querySelector('.bannerLobby__left-bottom');

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        bannerLobbyLink.classList.add('noios-padding');
        bannerRightTop.classList.add('noios-padding');
        bannerRightBottom.classList.add('noios-padding');
        bannerLeftTop.classList.add('noios-padding');
        bannerRightLeft.classList.add('noios-padding');
    }
});