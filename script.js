const hour = document.querySelector("#spanHour");
const minute = document.querySelector("#spanMinute");
const second = document.querySelector("#spanSecond");
const amPm = document.querySelector("#spanAmPm");
const date = document.querySelector("#spanDate");


//function

const fullDate = () => {
    let weeks = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let DATE = new Date;
    date.textContent = `${weeks[DATE.getDay()]}  ${DATE.getDate()} de ${months[DATE.getMonth()]} del ${DATE.getFullYear()}`;
    console.log(DATE.get)
}



const clock = () => {
    let time = new Date;
    hour.textContent = time.getHours();
    minute.textContent = time.getMinutes();
    second.textContent = time.getSeconds();
    
    if (hour.textContent > 12) {
        amPm.textContent = "PM";
    } else {
        amPm.textContent = "AM";
    }

    second.textContent < 10 ? second.textContent = "0" + time.getSeconds() : ""
    minute.textContent < 10 ? minute.textContent = "0" + time.getMinutes() : ""
}

setInterval(()=> {
    clock();
},1000 )

fullDate();



