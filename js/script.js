gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  // console.log(currentScroll);

  if ($(".animation-text").length > 0) {
    if (currentScroll >= "7800") {
      $("#lottie-1").addClass("show");
    } else {
      $("#lottie-1").removeClass("show");
    }

    if (currentScroll >= "10400") {
      $(".animation-text").addClass("show");
    } else {
      $(".animation-text").removeClass("show");
    }

    if (currentScroll >= "11700" && currentScroll < "23500") {
      $("#lottie-2").addClass("small");
      $(".product-main").addClass("fixed");
    } else {
      $("#lottie-2").removeClass("small");
      $(".product-main").removeClass("fixed");
    }

    if (currentScroll >= "13000") {
      $(".product-main").addClass("show");
    } else {
      $(".product-main").removeClass("show");
    }

    if (currentScroll >= "21800") {
      $(".production").addClass("fixed");
    } else {
      $(".production").removeClass("fixed");
    }

    if (currentScroll >= "24700") {
      $("#lottie-2").addClass("show");
      $("#lottie-3").addClass("visible");
      $(".production").addClass("show");
      $(".delivery--v1").addClass("fixed");
    } else {
      $("#lottie-2").removeClass("show");
      $("#lottie-3").removeClass("visible");
      $(".production").removeClass("show");
      $(".delivery--v1").removeClass("fixed");
    }

    if (currentScroll >= "29500") {
      $(".delivery--v1").addClass("show");
      $("#lottie-3").removeClass("visible");
      $("#lottie-3").addClass("show");
    } else {
      $(".delivery--v1").removeClass("show");
      $("#lottie-3").removeClass("show");
    }
  }

  if ($(".incision").length > 0) {
    if (currentScroll >= "20200") {
      $(".incision").addClass("show");
    } else {
      $(".incision").removeClass("show");
    }
  }
});

$(document).ready(function () {
  if ($("[data-aos]").length > 0) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 0,
        duration: 1500,
        // once: true,
      });
    });
  }

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

  if ($(".typeFood__slider").length > 0) {
    const swiper = new Swiper(".typeFood__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
      speed: 1000,
      navigation: {
        nextEl: ".typeFood__slider__next",
        prevEl: ".typeFood__slider__prev",
      },
      pagination: {
        el: ".typeFood__slider__pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".typeFood-picture__slider").length > 0) {
    const sliders = document.querySelectorAll(".typeFood-picture__slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".typeFood-picture__slider .swiper-button-next",
              prevEl: ".typeFood-picture__slider .swiper-button-prev",
            },
            pagination: {
              el: ".typeFood-picture__slider .swiper-pagination",
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
            on: {
              init: function (swiper) {},
            },
            breakpoints: {},
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sertificate__slider").length > 0) {
    const swiper = new Swiper(".sertificate__slider", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 60,
      autoHeight: true,
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
              perSlideOffset: 15,
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

  if ($(".play-video").length > 0) {
    $(".play-video").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("played");
      $(this).siblings("video").trigger("play");
      $(this).siblings("video")[0].setAttribute("controls", true);
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

  if ($(".our-brands__item").length > 0) {
    $(".our-brands__item").on("click", function () {
      $(this).toggleClass("opened");
      $(this).find(".our-invis").slideToggle();
    });
  }

  if ($(".counter-box").length > 0) {
    let show = true;
    let countbox = ".counter-box";

    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (
        w_top + 500 >= e_top ||
        w_height + w_top == d_height ||
        e_height + e_top < w_height
      ) {
        $(".benefits__number").css("opacity", "1");
        $(".about-numbers__list .num").spincrement({
          thousandSeparator: "",
          duration: 3000,
        });

        show = false;
      }
    });
  }

  if ($(".city-bl").length > 0) {
    $(".city-bl").on("click", function (event) {
      event.preventDefault();

      $(".list-cites .btn").removeClass("show");
      $(this).next(".btn").addClass("show");
    });
  }

  if ($("#lottie-1").length > 0) {
    let number = 1000;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 7000;
    let animData = {
      container: document.getElementById("lottie-1"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "json/block1.json",
    };

    let anim = bodymovin.loadAnimation(animData);
    // $(window).scroll(function () {
    //   animatebodymovin(animDuration, anim);
    // });

    function animatebodymovin(duration, animObject) {
      let scrollPosition = theWindow.scrollTop() - number;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    anim.addEventListener("enterFrame", function (animation) {
      if (animation.currentTime > anim.totalFrames - 1) {
        // animObject.pause();
        anim.pause();
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > number) {
        animatebodymovin(animDuration, anim);
      }
    });
  }

  if ($("#lottie-2").length > 0) {
    let number = 8000;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 10000;
    let animData = {
      container: document.getElementById("lottie-2"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "json/block2.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject, paused = 0) {
      let scrollPosition = theWindow.scrollTop() - number - paused;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "14900") {
        animatebodymovin(animDuration, anim);
      }

      if (currentScroll >= "14900" && currentScroll <= "20500") {
        $("#lottie-2").addClass("paused");
        anim.pause();
      }

      if (currentScroll >= "20500" && currentScroll < "23500") {
        $("#lottie-2").removeClass("paused");
        $("#lottie-2").removeClass("small");
        anim.pause();
        animatebodymovin(animDuration, anim, 5600);
      }

      if (currentScroll < "14900") {
        $("#lottie-2").removeClass("paused");
      }

      if (currentScroll > "23500") {
        $("#lottie-2").removeClass("small");
        anim.pause();
      }
    });
  }

  if ($("#lottie-3").length > 0) {
    let number = 24700;

    let theWindow = $(window);
    let winHeight = theWindow.height();
    let animDuration = 5000;
    let animData = {
      container: document.getElementById("lottie-3"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "json/block3.json",
    };

    let anim = bodymovin.loadAnimation(animData);

    function animatebodymovin(duration, animObject) {
      let scrollPosition = theWindow.scrollTop() - number;
      let maxFrames = animObject.totalFrames;
      let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
    }

    anim.addEventListener("enterFrame", function (animation) {
      // if (animation.currentTime > anim.totalFrames - 1) {
      //   anim.pause();
      // }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > number && currentScroll < "29300") {
        animatebodymovin(animDuration, anim);
      }

      if (currentScroll >= "29300") {
        anim.pause();
      }
    });
  }

  if ($(".animation-main").length > 0) {
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        ".catalog-main",
        { x: 0, y: 0, opacity: 1 },
        {
          x: -1000,
          y: 600,
          opacity: 0,
          scrollTrigger: {
            trigger: ".catalog-main",
            start: "500",
            end: "1500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "#lottie-1",
        { x: 1000 },
        {
          x: 100,
          scrollTrigger: {
            trigger: ".catalog-main",
            start: "700",
            end: "2000",
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
            start: "4000",
            end: "5000",
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
            start: "5000",
            end: "6000",
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
            start: "6000",
            end: "7000",
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
            start: "6500",
            end: "8000",
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
            start: "6500",
            end: "8000",
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
            start: "5000",
            end: "8000",
            scrub: true,
          },
        }
      );

      // product-main

      gsap.fromTo(
        ".product-main .caption",
        { x: -500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".product-main",
            start: "-1500",
            end: "-1000",
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
            start: "-1300",
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
            start: "-1300",
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
            start: "-1100",
            end: "2500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".incision-adv",
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".incision",
            start: "0",
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

      gsap.fromTo(
        ".production__leftSide",
        { x: -1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".production",
            start: "-2500",
            end: "0",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".production__rightSide",
        { x: 1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".production",
            start: "-2500",
            end: "0",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .btn",
        { x: 2000 },
        {
          x: 700,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2500",
            end: "3500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .line",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2800",
            end: "3200",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .desc",
        { x: 0 },
        {
          x: 700,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2800",
            end: "3200",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery .caption",
        { x: 0 },
        {
          x: 700,
          scrollTrigger: {
            trigger: ".delivery",
            start: "2800",
            end: "3200",
            scrub: true,
          },
        }
      );

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
