let inputval = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");
let windspeed = document.getElementById("windspeed");
// let search = document.getElementByTagName("button");
let search = document.getElementById("search");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var weather = {
    apiKey: "ef2fe699961bf47a150e6ac8e71810d6",
    fetchweather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )

        .then((res) => res.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        let weathername = data.name;
        let weathertemp = data.main.temp;
        let weatherwind = data.wind.speed;
        let weatherdesc = data.weather[0].main;
        console.log(data);
        city.innerText = `Weather in ${weathername}`;
        temp.innerText = `${weathertemp}°C`;
        desc.innerHTML = `${weatherdesc}`;
        windspeed.innerHTML = `Wind speed in ${weathername} : ${weatherwind}`;
    }
};

search.addEventListener("click", function(event) {
    console.log("clicked!!");
    weather.fetchweather(inputval.value);
})