const inputbox = document.getElementById("citysearch");
const searchbtn = document.querySelector(".btn");
const weather_img = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const desc_city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");






	async function checkweather(city){
		const api_key = "ae9ac0cbca413a6163af12bafbe7cd3b";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

		const weather_data = await fetch(`${url}`).then(response => response.json());
		

		if(weather_data.cod === `404`){
			
			alert("Please Check Your City Spellings");
		}

		temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}&deg;c`;

		desc_city.innerHTML = `${weather_data.weather[0].description}`;


		humidity.innerHTML = `${weather_data.main.humidity}%`;

		wind.innerHTML = `${weather_data.wind.speed}Km/h`;

		switch(weather_data.weather[0].main){
			case 'Clouds':
				weather_img.src = "/images/clouds.png";
				break;
				
			case 'Clear':
				weather_img.src = "/images/clear.png";
				break;
			case 'Rain':
				weather_img.src = "/images/rain.png";
				break;
			case 'Mist':
				weather_img.src = "/images/mist.png";
				break;
			case 'Snow':
				weather_img.src = "/images/snow.png";
				break;
			case 'Drizzle':
				weather_img.src = "/images/drizzle.png";
				break;

		}

		// console.log(weather_data);



	
	}

searchbtn.addEventListener("click",()=>{
	checkweather(inputbox.value);
})




