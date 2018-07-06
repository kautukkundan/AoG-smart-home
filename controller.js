function lightOff() {
    document.getElementById("light").classList.remove('lightOn')
    document.getElementById("light").classList.add('lightOff')
}

function lightOn() {
    document.getElementById("light").classList.remove('lightOff')
    document.getElementById("light").classList.add('lightOn')
}

function fanOn(fan) {
    document.getElementById(fan).classList.remove('fanstop')
    document.getElementById(fan).classList.add('fanspin')
}

function fanOff(fan) {
    document.getElementById(fan).classList.remove('fanspin')
    document.getElementById(fan).classList.add('fanstop')
}

function thermoOff() {
    document.getElementById("thermoState").classList.remove('thermoOn');
    document.getElementById("thermoState").classList.add('thermoOff');
    document.getElementById("thermoState").innerHTML = "OFF";
}

function thermoOn() {
    document.getElementById("thermoState").classList.remove('thermoOff');
    document.getElementById("thermoState").classList.add('thermoOn');
    document.getElementById("thermoState").innerHTML = "ON";
}

function setTemperature(temp) {
    document.getElementById("temp").innerHTML = temp+'°C';
}