import { useWeather, getWeather } from "./WeatherProvider.js"
import { weatherHTML } from "./Weather.js"

const contentTarget = document.querySelector('.noteContainer');
const eventHub = document.querySelector("main")
// Listen for the custom event of park chosen because it needs
// the zip code of that park for the weather api call

eventHub.addEventListener('parkChosen', event => {  
    const zipCode = event.detail.zip
    weatherDays(zipCode)
})

    


const weatherDays = (zipCode) => {
    getWeather(zipCode) 
    // getNotes initiates the api call
    .then(() => {
        const weatherArray = useWeather()
    })
    .then(() => {

        const fiveDay = weatherArray.filter(tacoReport => {
            const weatherTime = tacoReport.list.dt_txt
            if (weatherTime.includes("15:00:00") {
            return tacoReport
           }
        }
        render(fiveDay)
        // calls the render function below and passes in the 
        // 5 daysfrom useWeather
}

const render = (aDayTacoArray) => {
    let HTMLArray = aDayTacoArray.map(singleTacoDay => {
        return weatherHTML(singleTacoDay);
    })
    contentTarget.innerHTML += HTMLArray.join("");
    // adds to dom without the joining comma
}