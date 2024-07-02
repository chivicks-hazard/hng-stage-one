const day = document.querySelector('[data-testid="currentDay"]');
const time = document.querySelector('[data-testid="currentTimeUTC"]');

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDay() {
    day.textContent = days[date.getDay()];
}

function showTime(displayElement) {
    const date = new Date();
    let h = date.getUTCHours();
    let m = date.getUTCMinutes();
    let s = date.getUTCSeconds();
    let session = 'AM';

    if (h == 0) {
        h = 12;
    }

    if (h >= 12) {
        session = 'PM';
        if (h > 12) {
            h -= 12;
        }
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = `${h}:${m}:${s} ${session}`;
    displayElement.textContent = time;

    setTimeout(() => showTime(displayElement), 1000);
}

updateDay();
showTime(time);