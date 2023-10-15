window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const home = document.querySelector('#home');
    const goats = document.querySelector('#goats');
    const gallery = document.querySelector('#gallery');
    const sectionTop = home.clientHeight;
  
    // Add or remove 'sticky' class based on scroll position
    if (window.pageYOffset+100 > sectionTop) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    
  
    const homeTop = home.offsetTop;
    const goatTop = goats.offsetTop;
    const galleryTop = gallery.offsetTop;
  
    const scrollY = window.scrollY;
  
    // if (scrollY < goatTop) {
    //   header.style.backgroundColor = 'transparent';
    // } else if (scrollY < galleryTop) {
    //   header.style.backgroundColor = '#f5f5f5';
    // } else {
    //   header.style.backgroundColor = '#e0e0e0';
    // }
    if(scrollY > 1020 && scrollY < 1700){
        header.style.backgroundColor = 'rgba(0,0,0,0.7)';
    }else if(scrollY > 1700 && scrollY < 2520){
        header.style.backgroundColor = 'rgba(153,0,0,.7)';
    }
    else if(scrollY > 2520){
        header.style.backgroundColor = 'rgba(97,12,159,0.9654455532212886)';
    }
    console.log("scrollY : ",scrollY,"homeTop : ",homeTop,"goatTop : ",goatTop,"galleryTop : ",galleryTop)
  });