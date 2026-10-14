const dialog = document.getElementById('quote-dialog');
const promotionalVideo = document.querySelector('.live-video video');
const videoPlayButton = document.querySelector('.video-play');
const videoStatus = document.querySelector('.video-status');
if (promotionalVideo && videoPlayButton) {
  promotionalVideo.controls = false;
  videoPlayButton.addEventListener('click', async () => {
    if (!promotionalVideo.currentSrc && !promotionalVideo.getAttribute('src') && !promotionalVideo.querySelector('source[src]')) {
      videoStatus.textContent = 'Video coming soon.';
      return;
    }
    videoStatus.textContent = '';
    videoPlayButton.disabled = true;
    try {
      await promotionalVideo.play();
    } catch {
      videoStatus.textContent = 'Unable to play the video. Please try again.';
    } finally {
      videoPlayButton.disabled = false;
    }
  });
}
promotionalVideo?.addEventListener('playing', () => {
  promotionalVideo.controls = true;
  promotionalVideo.closest('.live-video').classList.add('has-started');
  promotionalVideo.setAttribute('tabindex', '0');
  promotionalVideo.focus({ preventScroll: true });
}, { once: true });
const frame = dialog.querySelector('iframe');
let opener;
document.querySelectorAll('[data-quote]').forEach(button => {
  button.type = 'button';
  button.addEventListener('click', () => {
    opener = button;
    if (!frame.src) {
      frame.src = frame.dataset.src;
    }
    dialog.showModal();
    document.body.classList.add('dialog-open');
    dialog.querySelector('.close').focus();
  });
});
function closeQuote() {
  dialog.close();
  document.body.classList.remove('dialog-open');
  opener?.focus({ preventScroll: true });
}
dialog.querySelector('.close').addEventListener('click', closeQuote);
dialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeQuote();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog.open) {
    event.preventDefault();
    closeQuote();
  }
});
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeQuote();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  opener?.focus({ preventScroll: true });
});
