// ================== Modal Akun ==================
const akunModal = document.getElementById("akun-modal");
const akunLink = document.querySelector(".account-link"); // hanya link akun
const closeAkunBtn = akunModal ? akunModal.querySelector(".close") : null;

if (akunLink && akunModal) {
  akunLink.addEventListener("click", (e) => {
    e.preventDefault();
    akunModal.style.display = "flex";
  });

  if (closeAkunBtn) {
    closeAkunBtn.addEventListener("click", () => {
      akunModal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === akunModal) {
      akunModal.style.display = "none";
    }
  });
}

// ================== Popup Global ==================
let popup = document.createElement("div");
popup.id = "popup";
popup.className = "modal";
popup.style.display = "none";
popup.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <p id="popup-text"></p>
  </div>
`;
document.body.appendChild(popup);

const popupText = document.getElementById("popup-text");
const closePopupBtn = popup.querySelector(".close");

function showPopup(message) {
  popupText.textContent = message;
  popup.style.display = "flex";
}

if (closePopupBtn) {
  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

// ================== Tombol Produk ==================

// Event "Tambahkan ke Keranjang"
document.querySelectorAll(".cta-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    showPopup("Produk telah ditambahkan ke keranjang!");
  });
});

// Event "Pesan Sekarang"
document.querySelectorAll(".pesan-sekarang").forEach((btn) => {
  btn.addEventListener("click", () => {
    showPopup("Pesanan Anda sedang diproses!");
  });
});

// ================== Halaman Keranjang (Dummy) ==================
if (document.querySelector(".keranjang-list")) {
  // Event checkout dummy
  const checkoutBtn = document.querySelector(".keranjang-total .pesan-sekarang");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      showPopup("Pesanan Anda sedang diproses!");
    });
  }
}
