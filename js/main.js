let navbar = $(".navbar");
$(window).scroll(function () {
  if ($(window).scrollTop() > window.innerHeight) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

var flag = true;
$(window).scroll(function () {
  if (
    flag == true &&
    $(window).scrollTop() >= $(".number").offset().top - window.innerHeight
  ) {
    nCount(".rect>h1");
    flag = false;
  }
});
