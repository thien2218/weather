let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = city =>{
    const link = "https://api.openweathermap.org/data/2.5/weather";
    const full_link = `${link}?q=${city}&appid=${API_KEY}&units=imperial`
    return fetch(full_link).then(response =>{
        return response.json()
    })
}

searchCity = () =>{
    let city = document.querySelector('#location').value
    getWeatherData(city).then(resData =>{
        htmlData(resData)
    }).catch(() =>{
        document.querySelector('.location').innerText = 'Location not found'
        document.querySelector('.curWeather').innerText = '----'
        document.querySelector('.temp').innerText = '--'
        document.querySelector('.min-temp').innerText = '--'
        document.querySelector('.max-temp').innerText = '--'
    })
}

htmlData = data =>{
    document.querySelector('.location').innerText = data.name
    document.querySelector('.curWeather').innerText = data.weather[0].main
    document.querySelector('.temp').innerText = data.main.temp
    document.querySelector('.min-temp').innerText = data.main.temp_min
    document.querySelector('.max-temp').innerText = data.main.temp_max
}

