// ===================
// Modal Akun
// ===================
const accountLink = document.querySelector('.account-link');
const modal = document.getElementById('akun-modal');
const closeBtn = modal ? modal.querySelector('.close') : null;
const ctaButton = document.querySelector('.cta-button');
const messageForm = document.querySelector('.message-form');

// Fungsi buka modal
function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
}

// Fungsi tutup modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener buka modal saat klik "User 12Tkj"
if (accountLink && modal) {
    accountLink.addEventListener('click', openModal);
}

// Event listener tutup modal saat klik tombol close (×)
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Tutup modal saat klik di luar konten modal
window.addEventListener('click', function(e) {
    if (modal && e.target === modal) {
        closeModal();
    }
});

// ===================
// Smooth Scrolling
// ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================
// Form Kirim Pesan Kontak
// ===================
if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
        messageForm.reset();
    });
}

// ===================
// Tombol CTA "Jelajahi Produk"
// ===================
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const produkSection = document.querySelector('#produk');
        if (produkSection) {
            produkSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Fungsi Tambah ke Keranjang
function tambahKeKeranjang(namaProduk, hargaProduk) {
    // bisa ditambah array keranjang kalau mau simpan produk
    tampilkanNotifikasi(` Ditambahkan ke Keranjang`);
}

// Fungsi Pesan Sekarang
function pesanSekarang() {
    tampilkanNotifikasi("Pesanan Anda Akan Di Kirim Secepatnya, Secepat dia melupakanmu");
}

// Fungsi umum untuk notifikasi
function tampilkanNotifikasi(pesan) {
    const notif = document.getElementById("notifikasi");
    notif.innerText = pesan;
    notif.style.display = "block";

    // otomatis hilang setelah 3 detik
    setTimeout(() => {
        notif.style.display = "none";
    }, 3000);
}


// Tampilkan isi keranjang jika ada halaman keranjang.html
if (document.getElementById("list-keranjang")) {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    let list = document.getElementById("list-keranjang");
    let total = 0;

    keranjang.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
        list.appendChild(li);
        total += item.harga;
    });

    document.getElementById("total").textContent = "Total: Rp " + total.toLocaleString();
}

// Fungsi Pesan Sekarang
function pesanSekarang(nama, harga) {
  tambahKeKeranjang(nama, harga); // masukin ke keranjang dulu
  window.location.href = "keranjang.html"; // langsung arah ke keranjang
}

// Fungsi tampilkan notifikasi
function tampilNotifikasi(pesan) {
  const notif = document.getElementById("notifikasi");
  if (notif) {
    notif.textContent = pesan;
    notif.style.display = "block";

    setTimeout(() => {
      notif.style.display = "none";
    }, 3000); // hilang setelah 3 detik
  }
}

// Fungsi Pesan Sekarang (hanya popup notifikasi)
function pesanSekarang() {
  tampilNotifikasi("Pesanan Anda Akan Di Kirim Secepatnya, Secepat dia melupakanmu");
}

// Tampilkan isi keranjang di keranjang.html
if (document.getElementById("list-keranjang")) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  let list = document.getElementById("list-keranjang");
  let total = 0;

  keranjang.forEach(item => {
    let row = document.createElement("tr");

    let nama = document.createElement("td");
    nama.textContent = item.nama;

    let harga = document.createElement("td");
    harga.textContent = "Rp " + item.harga.toLocaleString();

    let jumlah = document.createElement("td");
    jumlah.textContent = 1; // default jumlah 1

    let subtotal = document.createElement("td");
    subtotal.textContent = "Rp " + item.harga.toLocaleString();

    row.appendChild(nama);
    row.appendChild(harga);
    row.appendChild(jumlah);
    row.appendChild(subtotal);

    list.appendChild(row);

    total += item.harga;
  });

  document.getElementById("total").textContent = "Total: Rp " + total.toLocaleString();
}
