$(".counter").countUp({
  time: 2000,
  delay: 10,
});

var testimonialThumbs = new Swiper(".testimonial-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: true,
  loop: true,
  speed: 3000,
});
var testimonialContent = new Swiper(".testimonial-comment", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 3000,
  thumbs: {
    swiper: testimonialThumbs,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$("#owl-1").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 3,
});
$("#owl-2").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 6,
});

var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

lightGallery(document.querySelector(".gallery"));
