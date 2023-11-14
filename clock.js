function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const secondDegree = seconds * 6;
    const minuteDegree = minutes * 6;
    const hourDegree = hours * 30 + minutes * 0.5;

    rotateHands([secondDegree, minuteDegree, hourDegree]);
    updateDigitalClock(hours, minutes);
}

function rotateHands(degrees) {
    const handElements = [document.getElementById("secondHand"), document.getElementById("minuteHand"), document.getElementById("hourHand")];

    for (let i = 0; i < 3; i++) {
        handElements[i].style.transform = `translate(-50%,15%) rotate(${degrees[i]}deg)`;
    }
}

function updateDigitalClock(hours, minutes) {
    document.querySelector(".digitalHour").innerHTML = hours.toString().padStart(2, '0');
    document.querySelector(".digitalMinute").innerHTML = minutes.toString().padStart(2, '0');
}

updateClock();
setInterval(updateClock, 1000);

