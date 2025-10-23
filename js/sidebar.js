// menu

let openSidebar = document.getElementById('openSidebar');
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementById('overlay');

openSidebar.addEventListener('click' , function () {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});
overlay.addEventListener('click' , function () {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
// accordion

function setupAccordion() {
    let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

    if (window.innerWidth > 1071) {
        accordionBtn2.forEach((item) => {
            item.addEventListener('click', function () {
                item.nextElementSibling.classList.toggle('active');
                item.classList.toggle('active');
            });
        });
    }
}

// اجرای تابع در ابتدا
setupAccordion();

// اجرای تابع در صورت تغییر اندازه صفحه
// window.addEventListener('resize', setupAccordion);


// dropdown

let openDropDown = Array.from(document.getElementsByClassName('openDropDown'));

openDropDown.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.DropdownArea')) {
        item.nextElementSibling.classList.remove('active');
      }
    })
  })
})

// isotope 

var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});
$('#portfolio-filter > div').on('click', function () {
    $("#portfolio-filter > div").removeClass('active');
    $(this).addClass('active');
    portfolio.isotope({
        filter: $(this).data('filter')
    });
});

// swiper

var gallery = new Swiper(".gallery", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var rendersGallery = new Swiper(".rendersGallery", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});