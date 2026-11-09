// Fungsi untuk berpindah menu/halaman (Tab Navigation)
function switchTab(pageId) {
  // 1. Sembunyikan semua halaman
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // 2. Hilangkan status aktif dari semua tombol sidebar
  const buttons = document.querySelectorAll('.sidebar .nav-btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // 3. Tampilkan halaman yang dipilih
  const activeSection = document.getElementById(pageId);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // 4. Beri warna aktif pada tombol sidebar yang diklik
  event.currentTarget.classList.add('active');
}

// Fungsi untuk tombol Toggle ON/OFF di Status Perlu Dibeli
function toggleStatus(btn) {
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    btn.textContent = 'OFF';
  } else {
    btn.classList.add('active');
    btn.textContent = 'ON';
  }
}