// Navbar Fixed
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const toTop = document.querySelector('#to-top'); 

  // Menentukan posisi scroll dan posisi navbar
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
});

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function(e) {
  if (e.target !== hamburger && !navMenu.contains(e.target)) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Pindahkan posisi toggle sesuai mode saat ini
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Animasi
window.addEventListener('load', () => {
  const body = document.body;

  // Tambahkan kelas animasi setelah halaman dimuat
  setTimeout(() => {
    body.classList.add('hide-anim');
  }, 100); // Penundaan sedikit untuk memastikan elemen dirender

  // Hapus elemen dari DOM setelah animasi selesai
  setTimeout(() => {
    document.querySelector('.atas').style.display = 'none';
    document.querySelector('.bawah').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }, 1100); // Durasi harus sesuai dengan durasi transisi CSS ditambah penundaan awal
});

// Typewriter Effect
const mengetik = new Typed(".typing", {
  strings: ["Front End Developer", "Designer"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});

// QR Code (Jika diperlukan, aktifkan dengan menambahkan library QRCode)
// const form = document.getElementById('qrCodeForm');
// const namaInput = document.getElementById('nama');
// const createQRCodeButton = document.getElementById('createQRCode');
// const qrCodeContainer = document.getElementById('qrCodeContainer');
// const resetQRCodeButton = document.getElementById('resetQRCode');

// createQRCodeButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const nama = namaInput.value;
//   if (nama) {
//     qrCodeContainer.innerHTML = '';
//     const qrCode = new QRCode(qrCodeContainer, {
//       text: nama,
//       width: 200,
//       height: 200,
//       colorDark: '#000000',
//       colorLight: '#ffffff',
//       correctLevel: QRCode.CorrectLevel.H
//     });
//     resetQRCodeButton.style.display = 'block';
//   } else {
//     alert('Harap isi form dengan teks yang valid.');
//   }
// });

// resetQRCodeButton.addEventListener('click', () => {
//   qrCodeContainer.innerHTML = '';
//   resetQRCodeButton.style.display = 'none';
// });

// Blur Effect on Scroll
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.blur-on-scroll');

  // Fungsi untuk mengecek apakah elemen dalam viewport
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
        image.classList.remove('blurred'); // Hilangkan efek blur
      } else {
        image.classList.add('blurred'); // Tambahkan efek blur
      }
    });
  });

  // Sekaligus jalankan untuk gambar yang sudah terlihat saat halaman dimuat
  images.forEach(function(image) {
    if (isInViewport(image)) {
      image.classList.remove('blurred');
    } else {
      image.classList.add('blurred');
    }
  });
});

// Email Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const serviceID = '2222PHI87YT'; // Ganti dengan Service ID Anda
  const templateID = 'port8932yt76'; // Ganti dengan Template ID Anda

  console.log('Sending email with the following data:');
  console.log({
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  });

  emailjs.sendForm(serviceID, templateID, this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email successfully sent!');
      window.location.href = 'index.html'; // Mengarahkan ke halaman index.html setelah email terkirim
    }, function(error) {
      console.log('FAILED...', error);
      alert('Email sending failed.');
    });
});

// Image Slider
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
    updateDots(); // Memperbarui indikator titik
  }, 500);

  setTimeout(changeImage, 10500);
}

function updateDots() {
  var dotsContainer = document.getElementById('dots');
  dotsContainer.innerHTML = ''; // Mengosongkan kontainer titik
  for (var i = 0; i < imageUrls.length; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentImageIndex) {
      dot.classList.add('active'); // Menandai titik yang aktif
      dot.style.backgroundColor = '#0ea5e9';
    }
    dotsContainer.appendChild(dot);
  }
}

window.onload = function() {
  changeImage();
  updateDots();
};


// submenu// Mendapatkan elemen tombol dan div
    const btnProject = document.getElementById('show-project');
    const btnSertifikat = document.getElementById('show-sertifikat');
    const divProject = document.getElementById('project');
    const divSertifikat = document.getElementById('sertifikat');

    // Fungsi untuk menampilkan project dan menyembunyikan sertifikat
    function showProject() {
        divProject.classList.remove('hidden');
        divSertifikat.classList.add('hidden');
        btnProject.querySelector('p').style.color = '#0ea5e9';
        btnProject.querySelector('p').style.borderBottom = '3px solid #0ea5e9';
        btnProject.querySelector('p').style.width = '150%';
        btnSertifikat.querySelector('p').style.color = 'gray';
        btnSertifikat.querySelector('p').style.borderBottom = 'none';
    }

    // Fungsi untuk menampilkan sertifikat dan menyembunyikan project
    function showSertifikat() {
        divProject.classList.add('hidden');
        divSertifikat.classList.remove('hidden');
        btnProject.querySelector('p').style.color = 'gray';
        btnProject.querySelector('p').style.borderBottom = 'none';
        btnSertifikat.querySelector('p').style.color = '#0ea5e9';
        btnSertifikat.querySelector('p').style.borderBottom = '3px solid #0ea5e9';
    }

    // Menambahkan event listener pada tombol
    btnProject.addEventListener('click', showProject);
    btnSertifikat.addEventListener('click', showSertifikat);

    // Menjalankan fungsi showProject() ketika halaman pertama kali dibuka
    showProject();

    // pdf
   // URL PDF
   const pdfUrl1 = 'dist/img/sertif/SEMINAR.pdf';  // Ganti dengan URL atau path PDF pertama Anda
   const pdfUrl2 = 'dist/img/sertif/sertifikat_dinus_inside.pdf';  // Ganti dengan URL atau path PDF kedua Anda

   // Fungsi untuk merender halaman PDF ke dalam canvas
   function renderPDF(url, canvasId) {
       const canvas = document.getElementById(canvasId);
       const context = canvas.getContext('2d');

       // Memuat PDF
       pdfjsLib.getDocument(url).promise.then(pdf => {
           console.log(`PDF loaded for ${canvasId}`);

           // Mendapatkan halaman pertama
           pdf.getPage(1).then(page => {
               console.log(`Page loaded for ${canvasId}`);

               const scale = 1.5; // Atur skala sesuai kebutuhan
               const viewport = page.getViewport({ scale: scale });

               canvas.height = viewport.height;
               canvas.width = viewport.width;

               // Merender halaman ke dalam canvas
               const renderContext = {
                   canvasContext: context,
                   viewport: viewport
               };
               const renderTask = page.render(renderContext);
               renderTask.promise.then(() => {
                   console.log(`Page rendered for ${canvasId}`);
               });
           });
       }).catch(error => {
           console.error(`Error loading PDF for ${canvasId}: ${error.message}`);
       });
   }

   // Merender PDF
   renderPDF(pdfUrl1, 'pdfViewer1');
   renderPDF(pdfUrl2, 'pdfViewer2');