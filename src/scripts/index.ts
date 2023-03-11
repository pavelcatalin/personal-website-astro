window.addEventListener("scroll", movingOnScroll);
  function movingOnScroll() {
    var scrollInfo = window.pageYOffset;
    var screenDimension = window.innerHeight;

    function movingHeader() {
      var moveLeftFirst =
        document.querySelectorAll<HTMLElement>(".move-left")[0];
      moveLeftFirst.style.transform = `translateX(-${scrollInfo * 0.0035}%)`;

      var moveLeftSecond =
        document.querySelectorAll<HTMLElement>(".move-left")[1];
      moveLeftSecond.style.transform = `translateX(-${scrollInfo * 0.02}%)`;

      var moveRightFirst =
        document.querySelectorAll<HTMLElement>(".move-right")[0];
      moveRightFirst.style.transform = `translateX(${scrollInfo * 0.0035}%)`;

      var moveRightSecond =
        document.querySelectorAll<HTMLElement>(".move-right")[1];
      moveRightSecond.style.transform = `translateX(${scrollInfo * 0.015}%)`;
    }
    movingHeader();

    function movingImage() {
      var moveImg = document.querySelector<HTMLElement>("#moveImg");
      moveImg.style.transform = `translateY(${scrollInfo * 0.025}%)`;
    }
    movingImage();

    function movingUp() {
      var titleCollection =
        document.querySelectorAll<HTMLElement>(".moving-up");

      for (var i = 0; i < titleCollection.length; i++) {
        var elements = titleCollection[i];
        var elemPosition = elements.getBoundingClientRect().top;

        if (elemPosition < screenDimension) {
          elements.style.visibility = "visible";
          elements.style.animation = "animate 2s";
        }
      }
    }
    movingUp();

    function movingLine() {
      var movingLines = document.querySelectorAll<HTMLElement>(".line");
      for (var i = 0; i < movingLines.length; i++) {
        let elements = movingLines[i];
        var elemPosition = elements.getBoundingClientRect().top;

        if (elemPosition < screenDimension) {
          elements.style.animation = "mover-line 3s";
        }
      }
    }
    movingLine();

    function imageReveal() {
      var image = document.querySelector("img");
      var imgPosition = image.getBoundingClientRect().top;

      if (imgPosition < screenDimension) {
        image.style.display = "block";
        image.style.animation = "image-opacity 7s";
      }
    }
    imageReveal();

    function stickyYear() {
      var year = document.querySelector<HTMLElement>(".date p");
      var yearPosition = year.getBoundingClientRect().top;
      (document.querySelector<HTMLElement>(
        ".description-text"
      ).style.overflow = "visible");

      if (yearPosition < screenDimension) {
        year.style.position = "sticky";
        year.style.top = "0";
      }
    }
    stickyYear();
  }