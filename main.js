import "./style.css";

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? -1 : 1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const orders = document.querySelectorAll(".order");
const modal = document.querySelector(".bg");
const close = document.querySelector(".close");

orders.forEach((order) => {
  order.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});

let sendEmail = (name, tel) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "Serjgoa@gmail.com",
    Password: "ucxktnxeeuwuddbw",
    To: "Serjgoa@gmail.com",
    From: "Serjgoa@gmail.com",
    Subject: `Заказ от ${name.value}`,
    Body: `Имя: ${name.value} <br/> Телефон: ${tel.value}`,
  }).then((tel) => alert("Спасибо, мы свяжемся с вами втечение 15 минут"));
};

let submitForm = (event) => {
  event.preventDefault();

  const name = document.querySelector(".name");
  const tel = document.querySelector(".tel");

  sendEmail(name, tel);
};

const sendForm = document.querySelector(".send");
sendForm.addEventListener("click", submitForm);

const countdownData = new Date("Apr 20, 2022 00:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownData - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}, 1000);
