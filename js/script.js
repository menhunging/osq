$(document).ready(function () {
  if ($(".grettings__slider").length > 0) {
    const swiper = new Swiper(".grettings__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      effect: "cards",
      grabCursor: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".grettings .swiper-button-next",
        prevEl: ".grettings .swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if ($(".sertificate__slider").length > 0) {
    const swiper = new Swiper(".sertificate__slider", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 60,
      navigation: {
        nextEl: ".sertificate__slider .swiper-button-next",
        prevEl: ".sertificate__slider .swiper-button-prev",
      },
      pagination: {
        el: ".sertificate__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".your-lines__slider").length > 0) {
    const sliders = document.querySelectorAll(".your-lines__slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            effect: "cards",
            allowTouchMove: false,
            initialSlide:
              $(slider).find(".swiper-slide").length <= 8
                ? $(slider).find(".swiper-slide").length / 2 - 1
                : 4,
            cardsEffect: {
              slideShadows: false,
              perSlideRotate: 0,
              perSlideOffset: 20,
            },
            on: {
              init: function (swiper) {
                $(slider)
                  .find(".swiper-slide")
                  .map(function (index, element) {
                    $(this).hover(function (e) {
                      swiper.slideTo(index);
                    });
                  });
              },
            },
            breakpoints: {
              // 320: {
              //   slidesPerView: 1,
              // },
              // 640: {
              //   slidesPerView: 2,
              // },
              // 1024: {
              //   slidesPerView: 3,
              // },
              // 1200: {
              //   slidesPerView: 4,
              // },
            },
          });

          $(slider)
            .find(".btn-prev")
            .on("click", function () {
              mySwipers[index].slidePrev();
            });

          $(slider)
            .find(".btn-next")
            .on("click", function () {
              mySwipers[index].slideNext();
            });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".catalog-main__slider").length > 0) {
    const swiper = new Swiper(".catalog-main__slider", {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      initialSlide: 1,
      autoHeight: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-150%", 0, -200],
          rotate: [0, 0, 0],
        },
        next: {
          translate: ["150%", 0, -200],
          rotate: [0, 0, 0],
        },
      },
      navigation: {
        nextEl: ".catalog-main__slider .swiper-button-next",
        prevEl: ".catalog-main__slider .swiper-button-prev",
      },
      pagination: {
        el: ".catalog-main__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($("[data-aos]").length) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 200,
        duration: 1000,
        once: true,
      });
    });
  }

  // -----------------------------------------

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($("select").length > 0) {
    if ($(window).width() >= 1200) {
      $("select").map(function () {
        let inputTime = $(this).parents(".input-item").find(".input-time");

        $(this).selectric({
          onOpen: function () {
            inputTime.addClass("visible");
            inputTime.find("input").focus();
          },
          onChange: function (element) {
            let current = $(element).val();

            $(inputTime.find("input")).val(current);
          },
          onClose: function () {
            inputTime.removeClass("visible");
          },
        });
      });
    }
  }

  if ($(".menu-burger").length) {
    $(".menu-burger").on("click", function () {
      $("body").toggleClass("hidden");
      $(".menu-burger").stop().toggleClass("open");
      $(".menu-open").stop().slideToggle();
    });
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }
});
