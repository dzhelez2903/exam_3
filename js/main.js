/*set slider*/

$(".second_section_container").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
});

/*set mobile menu*/

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(
    ".header__mobile_menu__button",
    ".header__mobile_menu__lines"
  );
  let links = menu.find(".header__mobile_menu__link");
  let overlay = menu.find(".header__mobile_menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("header__mobile_menu_active");

    if (menu.hasClass("header__mobile_menu_active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".header__mobile_menu");

