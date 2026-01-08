const apiKey = "11f111a178800a83cd6a887f68cea96e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const searchBox=document.querySelector(".search input")

searchBtn=document.querySelector(".search button")
weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".tamp").innerHTML = Math.round(data.main.temp)+"°C";
    
    
document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    
    document.querySelector(".wind").innerHTML = data.wind.speed+" kh/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    
}else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    
}else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    
}else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    
}else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    
}
    document.querySelector(".weather").style.display="block"
    
}  
    
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


