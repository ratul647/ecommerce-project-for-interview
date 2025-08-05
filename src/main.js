
// .........fixed-nav............

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-main');
    
    if (window.scrollY > 100) {
      header.classList.add('fixed-nav');
    } else {
      header.classList.remove('fixed-nav');
    }
  });



// ....................slider.......................

 const imageUrls = [
      'src/assets/proimg1.png',
  'src/assets/proimg2.png',
  'src/assets/promig3.png',
  'src/assets/proimg4.png',
  'src/assets/proimg1.png'
    ];

    function changeImage(index) {
      document.getElementById('mainImage').src = imageUrls[index];
      document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
      });
    }












































