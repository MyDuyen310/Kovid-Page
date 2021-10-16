$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1024: {
        items: 5,
      },
    },
  });
  $(".answer").slideUp();
  $(".accordion-item a").on("click", function () {
    event.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("selected");
  });
  $(".sidebar ul li ").click(function () {
    $(".sidebar ul li ").removeClass("active");
    $(this).addClass("active");
    i = $(this).index() + 1;
    $(".accordion .tab-pain").removeClass("select");
    $(".accordion .ndtab li:nth-child(" + i + ")").addClass("select");
  });
  $(".nav-bar-menu").scrollSpy({
    offsetElement: ".nav-bar",
    scrollDuration: 800,
    scrollEasing: "easeInBack",
  });

  $(window).scroll(function () {
    var pos_body = $("body,html").scrollTop();
    if (pos_body > 1200) {
      $(".back-to-top").addClass("appear");
    } else {
      $(".back-to-top").removeClass("appear");
    }
    if ($("html,body").scrollTop()) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
  });
  $(".back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1400,
      "easeInOutSine"
    );
  });
  $(".item-num").counterUp({ delay: 10, time: 1000 });
});
