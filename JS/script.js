function openFullscreen() {
    var elem = document.querySelector("embed");

  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
  }  
}

function openGames(url) {
    var win = window.open()
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.style.margin = '0';
    win.document.body.appendChild(iframe)};