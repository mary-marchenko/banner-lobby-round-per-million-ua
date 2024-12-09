"use strict";

// padding no-ios
document.addEventListener("DOMContentLoaded", function () {
  var bannerLobbyLink = document.querySelector('.bannerLobby__link');
  var bannerRightTop = document.querySelector('.bannerLobby__right-top');
  var bannerRightBottom = document.querySelector('.bannerLobby__right-bottom');
  var bannerLeftTop = document.querySelector('.bannerLobby__left-top');
  var bannerRightLeft = document.querySelector('.bannerLobby__left-bottom');
  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    bannerLobbyLink.classList.add('noios-padding');
    bannerRightTop.classList.add('noios-padding');
    bannerRightBottom.classList.add('noios-padding');
    bannerLeftTop.classList.add('noios-padding');
    bannerRightLeft.classList.add('noios-padding');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYmFubmVyTG9iYnlMaW5rIiwicXVlcnlTZWxlY3RvciIsImJhbm5lclJpZ2h0VG9wIiwiYmFubmVyUmlnaHRCb3R0b20iLCJiYW5uZXJMZWZ0VG9wIiwiYmFubmVyUmlnaHRMZWZ0IiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBSUMsZUFBZSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUNsRSxJQUFJQyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ3RFLElBQUlFLGlCQUFpQixHQUFHTCxRQUFRLENBQUNHLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztFQUM1RSxJQUFJRyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHdCQUF3QixDQUFDO0VBQ3BFLElBQUlJLGVBQWUsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsMkJBQTJCLENBQUM7RUFFekUsSUFBSSxDQUFDLHNCQUFzQixDQUFDSyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQUU7SUFDbkRSLGVBQWUsQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzlDUixjQUFjLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM3Q1AsaUJBQWlCLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUNoRE4sYUFBYSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDNUNMLGVBQWUsQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQ2xEO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWRkaW5nIG5vLWlvc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGJhbm5lckxvYmJ5TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJMb2JieV9fbGluaycpO1xuICAgIGxldCBiYW5uZXJSaWdodFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJMb2JieV9fcmlnaHQtdG9wJyk7XG4gICAgbGV0IGJhbm5lclJpZ2h0Qm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lckxvYmJ5X19yaWdodC1ib3R0b20nKTtcbiAgICBsZXQgYmFubmVyTGVmdFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJMb2JieV9fbGVmdC10b3AnKTtcbiAgICBsZXQgYmFubmVyUmlnaHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lckxvYmJ5X19sZWZ0LWJvdHRvbScpO1xuXG4gICAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgYmFubmVyTG9iYnlMaW5rLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAgICAgYmFubmVyUmlnaHRUb3AuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgICAgICBiYW5uZXJSaWdodEJvdHRvbS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4gICAgICAgIGJhbm5lckxlZnRUb3AuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgICAgICBiYW5uZXJSaWdodExlZnQuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgIH1cbn0pOyJdfQ==