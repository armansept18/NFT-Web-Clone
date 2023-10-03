document.addEventListener("DOMContentLoaded", function () {
  let countdownDate = new Date("Dec 25, 2023 00:00:00").getTime();

  let countdownInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("phase-time").innerHTML = "Phase two has ended!";
      document.getElementById("days").innerHTML = 0;
      document.getElementById("hours").innerHTML = 0;
      document.getElementById("minutes").innerHTML = 0;
      document.getElementById("seconds").innerHTML = 0;
    }
  }, 1000);
});
