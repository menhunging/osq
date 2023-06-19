gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  // console.log(currentScroll);

  if ($(".animation-text").length > 0) {
    if (currentScroll > "4200") {
      $(".animation-text").addClass("show");
    } else {
      $(".animation-text").removeClass("show");
    }
  }
});

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

  if ($(".production__slider").length > 0) {
    const swiper = new Swiper(".production__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".production__slider .swiper-button-next",
        prevEl: ".production__slider .swiper-button-prev",
      },
      pagination: {
        el: ".production__slider .swiper-pagination",
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

    // исправление бага в chrome
    $(".tabs-links li").eq(0).find("a").trigger("click");

    $(".tabs").on("_after", function () {
      $(".tabs-body").removeClass("swiper-wait");
    });
  }

  if ($("[data-aos]").length > 0) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 200,
        duration: 1000,
        once: true,
      });
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function () {},
        onChange: function (element) {},
        onClose: function () {},
      });
    });
  }

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

  if ($(".animation-main").length > 0) {
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        ".catalog-main",
        { x: 0 },
        {
          x: -1000,
          scrollTrigger: {
            trigger: ".catalog-main",
            start: "200",
            end: "bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text .caption",
        { x: 500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".animation-text",
            start: "-500",
            end: "bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text p",
        { x: 500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".animation-text",
            start: "0",
            end: "bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text__controls",
        { x: 1500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".animation-text",
            start: "0",
            end: "bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text .line",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".animation-text",
            start: "1000",
            end: "bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text",
        { x: 1000, position: "relative" },
        {
          x: 0,
          position: "fixed",
          scrollTrigger: {
            trigger: ".animation-text",
            start: "-1000",
            end: "2500",
            scrub: true,
          },
        }
      );

      // gsap.fromTo(
      //   ".animation-text",
      //   { x: 5000, position: "relative" },
      //   {
      //     x: 0,
      //     position: "fixed",
      //     scrollTrigger: {
      //       trigger: ".animation-text",
      //       start: "-2000",
      //       end: "bottom",
      //       scrub: true,
      //     },
      //   }
      // );

      // let itemsR = gsap.utils.toArray(".anim");

      // itemsR.forEach((item) => {
      //   gsap.fromTo(
      //     item,
      //     { opacity: 0, x: 500, borderWith: 0 },
      //     {
      //       opacity: 1,
      //       x: 0,
      //       scrollTrigger: {
      //         trigger: item,
      //         start: "-1750",
      //         end: "bottom",
      //         scrub: true,
      //       },
      //     }
      //   );
      // });
    }
  }
});
