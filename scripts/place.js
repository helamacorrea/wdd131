const temperature = 10;
const windSpeed = 12;
const windChill = document.querySelector("#wind-chill");



function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

windChill.innerHTML = calculateWindChill(temperature, windSpeed);