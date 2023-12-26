function updateCountdown() {
    let currentYear = new Date().getFullYear();
    let countdownDate = new Date(`April 20, ${currentYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    let difference = countdownDate - now;

    // If the date has passed this year, set for next year
    if (difference < 0) {
        countdownDate = new Date(`April 20, ${currentYear + 1} 00:00:00`).getTime();
        difference = countdownDate - now;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);
