const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeBtn = document.getElementById('closeBtn');

    // STOP VIDEO FUNCTION
    function stopAllVideos() {
      const vid = lightboxContent.querySelector("video");
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    }

    // Open image in modal with description
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const desc = img.dataset.desc || 'No description available.';
        lightbox.classList.add('active');
        lightboxContent.innerHTML = `
          <p>${desc}</p>
          <img src="${img.src}" alt="${img.alt}">
        `;
      });
    });

    // Open video in modal with description
    document.querySelectorAll('.gallery video').forEach(video => {
      video.addEventListener('click', () => {
        const desc = video.dataset.desc || "No description available.";

        lightbox.classList.add("active");
        lightboxContent.innerHTML = `
          <p>${desc}</p>
          <video src="${video.src}" controls autoplay playsinline
            style="max-width:50vw; max-height:80vh; border-radius:10px;">
          </video>
        `;
      });
    });

    // Close modal (X)
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      stopAllVideos(); // << added
    });

    // Close modal (background click)
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        stopAllVideos(); // << added
      }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        stopAllVideos(); // << added
      }
    });