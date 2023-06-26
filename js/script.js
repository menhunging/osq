gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  // console.log(currentScroll);

  if ($(".animation-text").length > 0) {
    if (currentScroll >= "4800") {
      $(".animation-text").addClass("show");
    } else {
      $(".animation-text").removeClass("show");
    }
  }

  if ($(".incision").length > 0) {
    if (currentScroll >= "13500") {
      $(".incision").addClass("show");
    } else {
      $(".incision").removeClass("show");
    }
  }
});

$(document).ready(function () {
  if ($(".grettings__slider").length > 0) {
    const swiper = new Swiper(".grettings__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
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
                // $(slider)
                //   .find(".swiper-slide")
                //   .map(function (index, element) {
                //     $(this).hover(function (e) {
                //       swiper.slideTo(index);
                //     });
                //   });
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

  if ($(".universal-containers").length > 0) {
    const swiper = new Swiper(".universal-containers__slider", {
      slidesPerView: 1,
      autoHeight: true,
      initialSlide: 1,
      navigation: {
        nextEl: ".universal-containers .swiper-button-next",
        prevEl: ".universal-containers .swiper-button-prev",
      },
      pagination: {
        el: ".universal-containers__slider .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    });

    swiper.on("slideChange", function () {
      $(".universal-containers__item img").map(function () {
        let url = $(this).attr("data-picture-dafault");
        $(this).attr("src", url);
      });
    });

    $(".universal-gallery__item").hover(function () {
      let url = $(this).attr("data-picture");

      $(this)
        .parents(".universal-containers__item")
        .find("img")
        .attr("src", url);
    });
  }

  if ($(".reviews-product").length > 0) {
    const swiper = new Swiper(".reviews-product__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".reviews-product .swiper-button-next",
        prevEl: ".reviews-product .swiper-button-prev",
      },
      pagination: {
        el: ".reviews-product__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".product__picture").length > 0) {
    const swiperNavigation = new Swiper(".swiper-navigation", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiper = new Swiper(".product__picture__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".product__picture .swiper-button-next",
        prevEl: ".product__picture .swiper-button-prev",
      },
      pagination: {
        el: ".product__picture .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      thumbs: {
        swiper: swiperNavigation,
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
        offset: 0,
        duration: 1500,
        // once: true,
      });
    });
  }

  if ($(".incision-adv__item").length > 0) {
    $(".incision-adv__item").on("click", function () {
      $(".incision-adv__item").removeClass("active");
      $(this).addClass("active");
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      if ($(this).attr("multiple")) {
        $(this).selectric({
          multiple: {
            separator: ", ",
            keepMenuOpen: true,
            maxLabelEntries: false,
          },
        });
      } else {
        $(this).selectric({
          onOpen: function () {},
          onChange: function (element) {},
          onClose: function () {},
        });
      }
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
            start: "600",
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
            start: "-800",
            end: "2500",
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
            start: "1000",
            end: "2500",
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
            start: "1600",
            end: "2500",
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
            start: "1500",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".animation-text .logo-invis",
        { x: 1000, y: 500 },
        {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".animation-text",
            start: "-1000",
            end: "2500",
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

      // incision

      gsap.fromTo(
        ".incision",
        { opacity: 0, position: "relative" },
        {
          opacity: 1,
          position: "fixed",
          scrollTrigger: {
            trigger: ".incision",
            start: "-1500",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision .caption",
        { x: -500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "-1500",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision .desc",
        { x: -500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "-1300",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-adv",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".incision",
            start: "-1000",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-one",
        { x: 1500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "1000",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-two",
        { x: -1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "1500",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-three",
        { x: 1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "2500",
            end: "3500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-four",
        { x: -1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "3500",
            end: "4500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-five",
        { x: 1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "4500",
            end: "5500",
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
