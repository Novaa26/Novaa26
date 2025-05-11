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

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Tambah transparan
    } else {
      navbar.classList.remove("scrolled"); // Tetap hitam
    }
  });


  const checkbox = document.getElementById('darkModeToggle');

  // Cek preferensi saat halaman dimuat
  const darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
  }

  // Saat toggle diklik
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });

  let activeStars = 0;
  const maxStars = 5; // Maksimal jumlah bintang jatuh sekaligus di layar

  function createShootingStar() {
    if (!document.body.classList.contains("dark-mode") || activeStars >= maxStars) return;

    const star = document.createElement("div");
    star.classList.add("shooting-star");

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.4;
    const duration = 1.5 + Math.random() * 1.5;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.animationDuration = `${duration}s`;

    document.querySelector(".shooting-stars").appendChild(star);
    activeStars++;

    setTimeout(() => {
      star.remove();
      activeStars--;
    }, duration * 1000);
  }

  // Interval bintang jatuh lebih jarang: setiap 700–1500ms
  setInterval(() => {
    createShootingStar();
  }, 700 + Math.random() * 800);

  const container = document.querySelector('.venue-container');
  const nextBtn = document.querySelector('.slide-btn.next');
  const prevBtn = document.querySelector('.slide-btn.prev');

  const cardWidth = 320; // ukuran kartu + gap

  nextBtn.addEventListener('click', () => {
    container.scrollLeft += cardWidth * 1;
  });

  prevBtn.addEventListener('click', () => {
    container.scrollLeft -= cardWidth * 1;
  });


  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".venue-card");

    function isMobile() {
      return window.innerWidth <= 768;
    }

    cards.forEach(card => {
      const overlay = card.querySelector(".overlay");
      card.addEventListener("click", () => {
        if (isMobile()) {
          overlay.classList.toggle("show");
        }
      });
    });
  });

//         const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach(el => observer.observe(el));
