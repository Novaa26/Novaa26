// function learnMore() {
//     alert("Terima kasih telah tertarik untuk belajar lebih lanjut tentang Candi Plaosan! Kunjungi halaman sejarah untuk mendapatkan informasi lebih detail.");
//   }

  function toggleMenu() {
    const menu = document.querySelector('.menu'); // Mendapatkan elemen menu
    menu.classList.toggle('active');  // Menambahkan/menghapus kelas 'active' pada menu
  }

  function learnMore() {
    document.getElementById("ab").scrollIntoView({
      behavior: "smooth"
    })
  }
