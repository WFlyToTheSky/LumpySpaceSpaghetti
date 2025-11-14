if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll<HTMLVideoElement>("video.restart-on-click").forEach(v => {
      // hide built-in controls if present
      v.removeAttribute("controls");
      // restart + play on click
      v.addEventListener("click", () => {
        try {
          v.currentTime = 0;
          v.play();
        } catch (e) {
          // ignore autoplay restrictions
        }
      });
    });
  });
}
