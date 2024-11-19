let lastScrollY = 0
const navbar = document.querySelector('header')!

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navbar.classList.add('hidden')
  } else {
    navbar.classList.remove('hidden')
  }

  lastScrollY = currentScrollY
})

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video-background") as HTMLVideoElement;
  const source = video.querySelector("source") as HTMLSourceElement;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    source.src = "video/video-480p.webm";
  } else if (screenWidth <= 1280) {
    source.src = "video/video-720p.webm";
  } else {
    source.src = "video/video-1080p.webm";
  }

  video.load();
});