// tomando referencias del DOM

const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// añadir evento de click para el modo nocturo
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark")
  const isDarkMode = body.classList.contains("dark");
  console.log(isDarkMode);
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode"
})

const updateTime = () => {
  // Obtener la hora actual y calcular los grados de las agujas del reloj
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
  minToDeg = (date.getMinutes() / 60) * 360;
  hourToDeg = (date.getHours() / 12) * 360;

  // Rotar el reloj de forma apropiada
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

// ajustar las agujas del reloj
setInterval(updateTime, 1000)

// ajustar el updateTime
updateTime();