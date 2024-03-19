// navbar fixed
window.onscroll = function() {
     const header = document.querySelector('header');
     const fixedNav = header.offsetTop;
     const toTop = document.querySelector('#to-top');

     if(window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
          toTop.classList.remove('hidden');
          toTop.classList.add('flex');

     } else {
          header.classList.remove('navbar-fixed');
          toTop.classList.remove('flex');
          toTop.classList.add('hidden');
     }
};



// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('hamburger-active');
     navMenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function(e){
     if(e.target!= hamburger && e.target != navMenu) {
          hamburger.classList.remove('hamburger-active');
          navMenu.classList.add('hidden');
     }
});



// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
     if (darkToggle.checked) {
          html.classList.add('dark');
          localStorage.theme = 'dark';
     } else {
          html.classList.remove('dark');
          localStorage.theme = 'light';
     }
});

// pindahkan posisi toggle sesuai toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark')
     darkToggle.checked = true;
   } else {
     darkToggle.checked = false;
     
   };





// animasi ketik
// Fungsi untuk mengetik teks seperti mesin ketik
function typeWriter() {
     // Anda dapat menambahkan implementasi di sini jika diperlukan
 }
 
 // Mulai mengetik menggunakan Typed.js
 typeWriter();
 const mengetik = new Typed(".typing", {
     strings : ["Front End Developer", "Designer"],
     typeSpeed : 120,
     backSpeed : 60,
     loop : true,
 });
 



// qr code
const form = document.getElementById('qrCodeForm');
const namaInput = document.getElementById('nama');
const createQRCodeButton = document.getElementById('createQRCode');
const qrCodeContainer = document.getElementById('qrCodeContainer');
const resetQRCodeButton = document.getElementById('resetQRCode');

createQRCodeButton.addEventListener('click', (event) => {
  event.preventDefault();
  const nama = namaInput.value;
  if (nama) {
    // Hapus konten sebelum membuat QR code baru
    qrCodeContainer.innerHTML = '';

    const qrCode = new QRCode(qrCodeContainer, {
      text: nama,
      width: 200,
      height: 200,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    // Tampilkan tombol reset
    resetQRCodeButton.style.display = 'block';
  } else {
    alert('Harap isi form dengan teks yang valid.');
  }
});

resetQRCodeButton.addEventListener('click', () => {
  // Hapus QR code
  qrCodeContainer.innerHTML = '';

  // Sembunyikan tombol reset
  resetQRCodeButton.style.display = 'none';
});




// form contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
     // Memastikan form tidak di-submit secara default
     event.preventDefault();
     
     // Mengambil nilai dari input
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var message = document.getElementById("message").value;
 
     // Validasi input
     if (name === "" || email === "" || message === "") {
       alert("Mohon lengkapi semua kolom.");
       return; // Menghentikan fungsi agar form tidak terkirim
     }
     
     // Jika semua input telah diisi, tampilkan notifikasi
     alert("Terima kasih! Form berhasil dikirim.");
 
     // Mengosongkan input setelah form berhasil dikirim
     document.getElementById("contactForm").reset();
   });

  


//    blur img hero
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.blur-on-scroll');

  // Membuat fungsi untuk mengecek apakah elemen dalam viewport atau tidak
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Menjalankan fungsi ketika halaman di-scroll
  window.addEventListener('scroll', function() {
    images.forEach(function(image) {
      if (isInViewport(image)) {
        image.classList.remove('blurred'); // Jika dalam viewport, hilangkan efek blur
      } else {
        image.classList.add('blurred'); // Jika tidak dalam viewport, tambahkan efek blur
      }
    });
  });

  // Sekaligus jalankan untuk gambar yang sudah terlihat pada saat halaman dimuat
  images.forEach(function(image) {
    if (isInViewport(image)) {
      image.classList.remove('blurred'); // Jika dalam viewport, hilangkan efek blur
    } else {
      image.classList.add('blurred'); // Jika tidak dalam viewport, tambahkan efek blur
    }
  });
});




// ganti gambar hero section
// script.js
var imageUrls = [
  'dist/img/RA400.png',
  'dist/img/pp2.png',
  'dist/img/pp3.png'
];

var currentImageIndex = 0;

function changeImage() {
  var image = document.getElementById('myImage');
  image.style.opacity = '0';

  setTimeout(function() {
    image.src = imageUrls[currentImageIndex];
    image.style.opacity = '1';
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    updateDots(); // Memanggil fungsi untuk memperbarui indikator titik
  },500);

  setTimeout(changeImage, 10500);
}

function updateDots() {
  var dotsContainer = document.getElementById('dots');
  dotsContainer.innerHTML = ''; // Mengosongkan kontainer titik sebelum menambahkan titik baru
  for (var i = 0; i < imageUrls.length; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentImageIndex) {
      dot.classList.add('active'); // Menandai titik yang sesuai dengan gambar saat ini
      dot.style.backgroundColor = '#0ea5e9'; // Mengubah warna titik menjadi #0ea5e9
    }
    dotsContainer.appendChild(dot);
  }
}


window.onload = function() {
  changeImage();
  updateDots();
};
