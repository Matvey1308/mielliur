$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    $('.mobile-button-wrapper').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active')
    });
    $('.fh5co-counter').countTo();
    $('#reviews-slider').owlCarousel({
        nav: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#product-slider').owlCarousel({
        nav: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $("#goods-carousel").owlCarousel({
        navigation: true,
        thumbs: true,
        thumbsPrerendered: true,
        loop: true,

        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: makePages,
        afterUpdate: makePages,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    function makePages() {
        $.each(this.owl.userItems, function(i) {
            $('.owl-controls .owl-page').eq(i)
                .css({
                    'background': 'url(' + $(this).find('img').attr('src') + ')',
                    'background-size': 'cover'
                })
        });
    }
    $('.pagi-prev').click(function() {
        var attr = $(this).attr('data-pagination');
        $('#' + attr + ' .owl-prev').trigger('click');
    });
    $('.pagi-next').click(function() {
        var attr = $(this).attr('data-pagination');
        console.log(attr);
        $('#' + attr + ' .owl-next').trigger('click');
    });

    $('.popup-close, .popup-overlay').click(function() {
        $('.modal-window').fadeOut();
    });
    $('.more-btn').click(function() {
        $('.popup-product-wrapper').fadeIn();
        $('html, body').animate({
            scrollTop: $(".product").offset().top
        }, 1000);
    });
    $('.question-modal a').click(function(e) {
        e.preventDefault();
        $('.question-form-wrapper').fadeIn();
        $('.question-wrapper').slideDown();
    });
    $('.popup-question-wrapper .popup-close, .close-btn').click(function() {
        $('.popup-question-wrapper').fadeOut();
        $('.question-wrapper').slideUp();
    });
    $('.nav li a').click(function(e) {
        e.preventDefault();
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    });




    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
	var map_info = $('.map-info');
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var contentString = '<div class="map-info">' +
			'<div class="mobile-phone">' +
				'<p>Адрес</p>' +
				'<a href="#">г.Москва, ул. Большая Дмитрова 7</a> ' +
			'</div>' +
			'<div class="mobile-phone">' +
				'<p>Телефон</p>'+
				'<a href="tel:+88005500861">8 (800) 550 08 61</a>'+
		'	</div>'+
		'	<div class="mobile-social-icons">'+
			'	<ul>'+
					'<li class="icon-skype"><a href="#"></a></li>'+
					'<li class="icon-facebook1"><a href="#"></a></li>'+
					'<li class="icon-vk1"><a href="#"></a></li>'+
			'	</ul>'+
			'</div>'+
		'</div>';
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.7606324, 37.6129612), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };
		var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it 70 80
        var marker = {
            url: '../img/placeholder.png',
        };

        // NOW CREATE THE ACTUAL MARKER ON THE MAP
        var myMarker = new google.maps.Marker({
            position: new google.maps.LatLng(55.7606324, 37.6129612),
            map: map,
            icon: marker
        });
		myMarker.addListener('click', function() {
    infowindow.open(map, myMarker);
  });

    }
});
