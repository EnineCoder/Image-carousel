let iconRight = document.querySelector(".btn.next");
let iconLeft = document.querySelector(".btn.previous");
let icon = document.querySelectorAll("i");
let bullets = document.querySelector(".bullets");
let bulletSpan = document.querySelectorAll(".bullets span");
let images = document.querySelectorAll(".images img");
let imageDiv = document.querySelector(".images");

bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    bulletSpan.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  span.addEventListener("click", changeImage);
});

function changeImage() {
  images.forEach((img) => {
    img.style.display = "none";
    document.querySelector(this.dataset.dis).style.display = "block";
    document.querySelector(this.dataset.dis).classList.add("active");
  });
}

icon.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let offset = btn.dataset.btn === "next" ? 1 : -1;
    let activeSlide = imageDiv.querySelector("[data-show]");
    let newIndex = [...imageDiv.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      btn.classList.add("disapear");
    }
    if (newIndex >= imageDiv.children.length) {
      btn.classList.add("disapear");
    }
    imageDiv.children[newIndex].dataset.show = true;
    delete activeSlide.dataset.show;

    for (i = 0; i <= bulletSpan.length; i++) {
      bulletSpan[i].classList.remove("active");
      if (newIndex) {
        bulletSpan[newIndex].classList.add("active");
      } else {
        bulletSpan[0].classList.add("active");
      }
    }
  });
});

iconLeft.onclick = function () {
  iconRight.classList.remove("disapear");
};
iconRight.onclick = function () {
  iconLeft.classList.remove("disapear");
};
