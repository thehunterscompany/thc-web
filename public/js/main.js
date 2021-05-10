$(document).ready(function () {
  //------------------------------------//
  //Navbar//
  //------------------------------------//
  var menu = $(".navbar");
  $(window).bind("scroll", function (e) {
    if ($(window).scrollTop() > 140) {
      if (!menu.hasClass("open")) {
        menu.addClass("open");
      }
    } else {
      if (menu.hasClass("open")) {
        menu.removeClass("open");
      }
    }
  });

  // Load Images
  var imagesLoaded = 0;
  // Total images is still the total number of <img> elements on the page.
  var totalImages = $("img").length;

  // Step through each image in the DOM, clone it, attach an onload event
  // listener, then set its source to the source of the original image. When
  // that new image has loaded, fire the imageLoaded() callback.
  $("img").each(function (idx, img) {
    $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
  });

  // Do exactly as we had before -- increment the loaded count and if all are
  // loaded, call the allImagesLoaded() function.
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  }

  function allImagesLoaded() {
    console.log("ALL IMAGES LOADED");
  }

  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 800);
  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
});
