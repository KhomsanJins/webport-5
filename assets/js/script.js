// $(document).ready(function () {
//   // tabs
//   var tab_selector, tablist, current_active, list_lenth;

//   tab_selector = "#TabsService";

//   tablist = $(tab_selector + ' .nav-tabs > li > a[data-toggle="tab"]');

//   list_lenth = tablist.length;

//   $(tab_selector + " > a.tab_nav").click(function (e) {
//     e.preventDefault(); // stop default action

//     $(tablist).each(function (index) {
//       if ($(this).parent().hasClass("active")) {
//         current_active = index; // check currently active tab
//       }
//     });

//     if ($(this).hasClass("prev")) {
//       if (current_active !== 0) {
//         // if active tab isn't the first tab show previous tab
//         $(tablist[current_active - 1]).tab("show");
//       } else {
//         // if active tab is the first tab show last tab
//         $(tablist[list_lenth - 1]).tab("show");
//       }
//     } else if ($(this).hasClass("next")) {
//       if (current_active != list_lenth - 1) {
//         // if active tab isn't the last tab show next tab
//         $(tablist[current_active + 1]).tab("show");
//       } else {
//         // if active tab is the last tab show first tab
//         $(tablist[0]).tab("show");
//       }
//     }
//   });
//   // tabs
// });

$(document).ready(function () {
  $(".owl-carousel-pp1").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    mouseDrag: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      992: {
        items: 3,
        mouseDrag: false,
        dots: false,
      },
    },
  });

  $(".owl-carousel-pp2").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    mouseDrag: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      992: {
        items: 3,
        mouseDrag: false,
        dots: false,
      },
    },
  });

  $(".owl-carousel-lw").owlCarousel({
    center: true,
    items: 5,
    loop: true,
    margin: 24,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });

  $(".owl-saying").owlCarousel({
    // center: true,
    items: 1,
    loop: true,
    margin: 24,
    dots: true,
    autoplay: true,
  });

  $(".owl-carousel-banner").owlCarousel({
    // center: true,
    items: 1,
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    dots: true,
    autoplay: true,
  });
});

function scrollWaypointInit(items, trigger) {
  items.each(function () {
    var element = $(this),
      osAnimationClass = element.data("animation"),
      osAnimationDelay = element.attr("data-animation-delay");

    element.css({
      "-webkit-animation-delay": osAnimationDelay,
      "-moz-animation-delay": osAnimationDelay,
      "animation-delay": osAnimationDelay,
    });

    var trigger = trigger ? trigger : element;

    trigger.waypoint(
      function () {
        element.addClass("animated").addClass(osAnimationClass);
      },
      {
        // triggerOnce: true,
        offset: "100%",
      }
    );
  });
}

$(document).ready(function () {
  scrollWaypointInit($(".animateMe"));
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").style.padding = "5px 0";
  } else {
    document.getElementById("Header").style.padding = "15px 0";
  }
}

$(function () {
  $("#btnMenu").click(function () {
    $(".overlay").addClass("show");
    $(".menu-m-list").addClass("show");
  });

  $("#btnClose").click(function () {
    $(".overlay").removeClass("show");
    $(".menu-m-list").removeClass("show");
  });

  $(".overlay").click(function () {
    $(".overlay").removeClass("show");
    $(".menu-m-list").removeClass("show");
  });
});
