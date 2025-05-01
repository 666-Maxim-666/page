document.addEventListener("DOMContentLoaded", (e) => {
  function initAppPlayVideo(url, buttonPlay) {
    const play = document.querySelector(buttonPlay);
    if (!play) {
      return;
    }
    const videoTag = `
    <div class="video-page-wrap">
        <video class="video-page" controls>
            <source src="${url}" type="video/mp4">
        </video>
          <button class="button-close button-close--video button-default-scale">
        <span class="svg-item">
          <svg
            class="svg-item__icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 1L1.00042 26.9996"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M1 1L26.9996 26.9996"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", videoTag);
    const videoWrap = document.querySelector(".video-page-wrap");
    const videoNod = videoWrap.querySelector(".video-page");
    const closeVideo = videoWrap.querySelector(".button-close--video");
    play.addEventListener("click", (e) => {
      e.preventDefault();
      videoWrap.classList.add("video-page-wrap--active");
      videoNod.play();
      if (videoNod.requestFullscreen) {
        videoNod.requestFullscreen();
      } else if (videoNod.webkitRequestFullscreen) {
        videoNod.webkitRequestFullscreen();
      }
    });
    closeVideo.addEventListener("click", (e) => {
      e.preventDefault();
      videoWrap.classList.remove("video-page-wrap--active");
      videoNod.pause();
      videoNod.currentTime = 0;
    });
  }
  initAppPlayVideo("/media/video.mp4", ".button-play-video--js");
});
