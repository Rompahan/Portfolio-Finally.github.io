$("#contact-btn").hover(
    function () {
        $(this).css({
            "background": "#ff0055",
            "color": "black",
            "transition": "all 0.4s ease",
            "transform": "scale(1.1)"
        })
            .html("<i class='fa-regular fa-paper-plane' style='color: black;'></i> Contact Me")
    },
    function () {
        $(this).css({
            "background": "black",
            "color": "#ff0055",
            "transition": "all 0.4s ease",
            "transform": "scale(1)"
        })
            .html("<i class='fa-solid fa-paper-plane' style='color: #ff0055;'></i> Contact Me")
    }
)

$("#view-project-btn").hover(
    function () {
        $(this).css({
            "background": "black",
            "color": "#ff0055",
            "transition": "all 0.4s ease",
            "transform": "scale(1.1)"
        })
            .html("<i class='fa-regular fa-eye' style='color: #ff0055;'></i> View Projects")
    },
    function () {
        $(this).css({
            "background": "#ff0055",
            "color": "black",
            "transition": "all 0.4s ease",
            "transform": "scale(1)"
        })
            .html("<i class='fa-solid fa-eye' style='color: black;'></i> View Projects")
    }
)
$("#view-more").hover(
    function () {
        $(this).css({
            "background": "#070707",
            "color": "#ff0055",
            "transition": "all 0.4s ease",
        })
            .html("<i class='fa-solid fa-chalkboard-user' style='color: #ff0055'></i> Learn More About Me")

    },
    function () {
        $(this).css({
            "background": "#ff0055",
            "color": "#070707",
            "transition": "all 0.4s ease",
        })
            .html("<i class='fa-solid fa-chalkboard-user' style='color: #070707'></i> Learn More About Me")
    }
)

$("#arrow-right").hover(
    function () {
        $(this).html("<i class='fa-solid fa-chevron-right' style='color: black;'></i>")
    },
    function () {
        $(this).html("<i class='fa-solid fa-chevron-right' style='color: #ff0055;'></i>")
    }
)

$("#arrow-left").hover(
    function () {
        $(this).html("<i class='fa-solid fa-chevron-left' style='color: black;'></i>")
    },
    function () {
        $(this).html("<i class='fa-solid fa-chevron-left' style='color: #ff0055;'></i>")
    }
)




$(document).ready(function() {
  const $slide = $(".slide");
  const $cards = $(".testimonial-card");
  const total = $cards.length;
  let index = 0;

  $("#arrow-right").click(function() {
    if (index < total - 1) {
      index++;
      $slide.css("transform", `translateX(-${index * 300}px)`);
    }
  });

  $("#arrow-left").click(function() {
    if (index > 0) {
      index--;
      $slide.css("transform", `translateX(-${index * 320}px)`);
    }
  });
});



$(document).ready(function () {
  function revealOnScroll() {
    $(".reveal-section").each(function () {
      const sectionTop = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scrollPos + windowHeight - 100 > sectionTop) {
        $(this).addClass("active");
      }
    });
  }


  revealOnScroll();
  $(window).on("scroll", revealOnScroll);
});



$(document).ready(function() {
  $("#search-input").on("keyup", function() {
    const value = $(this).val().toLowerCase();

    $(".project-card").filter(function() {
      const title = $(this).data("title").toLowerCase();
      if (title.includes(value)) {
        $(this).fadeIn(300);
      } else {
        $(this).fadeOut(300);
      }
    });
  });
});
