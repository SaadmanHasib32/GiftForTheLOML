const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const nextBtn = document.getElementById("nextBtn");

nextBtn.disabled = true;

// 1-minute test timer
const target = new Date(Date.now() + 60000); // 60,000 ms = 1 minute

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";

    nextBtn.classList.add("active");
    nextBtn.disabled = false;
    nextBtn.onclick = () => {
      window.location.href = "page2.html";
    };
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  requestAnimationFrame(updateCountdown);
}

updateCountdown();
