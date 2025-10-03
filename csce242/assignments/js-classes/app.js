/* Mount the gallery and wire up the modal */
(function () {
  const gallery = document.getElementById("gallery");

  // Render all cards
  gallery.innerHTML = window.PAINTINGS.map(p => p.getSection()).join("");

  // Modal elements
  const modal = document.getElementById("paintingModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalArtist = document.querySelector(".modal-artist");
  const modalImgWrap = document.getElementById("modalImageWrap");
  const closeBtn = document.getElementById("modalClose");
  const frameBadge = document.getElementById("frameBadge");
  const unframedNote = document.getElementById("unframedNote");

  function openModal(painting) {
    modalTitle.textContent = painting.title;
    modalArtist.textContent = `by ${painting.artist}`;

    // Build image
    const img = document.createElement("img");
    img.src = painting.img;
    img.alt = `${painting.title} by ${painting.artist}`;

    modalImgWrap.innerHTML = "";
    if (painting.framed) {
      const frame = document.createElement("div");
      frame.className = "frame";
      frame.appendChild(img);
      modalImgWrap.appendChild(frame);
      frameBadge.hidden = false;
      unframedNote.hidden = true;
    } else {
      modalImgWrap.appendChild(img);
      frameBadge.hidden = true;
      unframedNote.hidden = false;
    }

    // Show modal
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  // Click on a card
  gallery.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-modal");
    if (!btn) return;

    const card = e.target.closest(".card");
    const id = card?.dataset.id;
    const painting = window.PAINTINGS.find(p => p.id === id);
    if (painting) openModal(painting);
  });

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  modal.addEventListener("click", (e) => {
    if (e.target.id === "paintingModal") closeModal();
  });
})();
