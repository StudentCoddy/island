const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  grabCursor: true,
  autoplay: true,
  effect: "cube",
  speed: 3000,
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });