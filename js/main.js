/*set slider*/

$(".works__slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
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

$(".our_team__slider").slick({
  dots: false,
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
/*
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
*/
function initMap() {
		let element = document.getElementById('map');
		let options = {
			zoom: 18, 
			center: {lat: 49.23034135336109, lng: 28.445238399796878},
		};

		let myMap = new google.maps.Map(element, options);

    let styles = [
      
    ]

		let markers = [
			{ 
				coordinates: {lat: 49.23094568221329, lng: 28.44296109898287},
				info: '<h3>Винница</h3><br><img src="../img/img/origami.png"><br><p>Beetroot Academy</p>'
			},
		];

    $.getJSON("../json/style.json", function(data) {
      map.setOptions({styles: data});
  });

		for(let i = 0; i < markers.length; i++) {
			addMarker(markers[i]);
		}

		function addMarker(properties) {
			let marker = new google.maps.Marker({
				position: properties.coordinates,
				map: myMap
			});

			if(properties.image) {
				marker.setIcon(properties.image);
			}

			if(properties.info) {
				let InfoWindow = new google.maps.InfoWindow({
					content: properties.info
				});

				marker.addListener('click', function(){
					InfoWindow.open(myMap, marker);
				});
			}
		}
	}