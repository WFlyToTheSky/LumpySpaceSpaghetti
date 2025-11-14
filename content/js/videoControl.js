document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("video.restart-on-click").forEach(v => {
    v.removeAttribute("controls");
    v.addEventListener("click", () => {
      v.currentTime = 0;
      v.play();
    });
  });
});

