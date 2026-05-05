const grid = document.getElementById('daysGrid');
const countDisplay = document.getElementById('count');
const monthName = document.getElementById('monthName');
const maxDaysDisplay = document.getElementById('maxDays');
const eventInput = document.getElementById('eventText');

const now = new Date();
const year = now.getFullYear();
const monthIndex = now.getMonth();
const today = now.getDate();

const monthLong = now.toLocaleString('default', { month: 'long' }).toUpperCase();
const totalDays = new Date(year, monthIndex + 1, 0).getDate();

monthName.innerText = monthLong;
maxDaysDisplay.innerText = totalDays;

for (let i = 1; i <= totalDays; i++) {
    const day = document.createElement('div');
    day.classList.add('day-box');
    day.innerHTML = `<span>${i}</span>`;

    if (i === today) {
        day.style.border = "3px solid #d81b60";
    }

    day.addEventListener('click', function() {
        if (eventInput.value.trim() !== "") {
            let label = this.querySelector('.event-label');
            if (!label) {
                label = document.createElement('span');
                label.classList.add('event-label');
                this.appendChild(label);
            }
            label.innerText = eventInput.value;
            eventInput.value = "";
        } else {
            this.classList.toggle('completed');
            countDisplay.innerText = document.querySelectorAll('.completed').length;
        }
    });

    grid.appendChild(day);
}

document.getElementById('resetbutton').addEventListener('click', () => {
    document.querySelectorAll('.day-box').forEach(day => {
        day.classList.remove('completed');
        const label = day.querySelector('.event-label');
        if (label) label.remove();
    });
    countDisplay.innerText = 0;
});