const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card")
const apikey = "deabfccb0b72951dba7f83ff368d1bc1";

weatherform.addEventListener("submit", async event =>{
    event.preventDefault();

    const city = cityinput.value;
    if(city){
        try{
            const weatherData = await getweatherdata(city);
            info(weatherData);
        }
        catch(error){
            console.log(error);
            displayerror(error);
        }
    }
    else{
        displayerror("Please enter a city");
    }
});

async function getweatherdata(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response = await fetch(apiurl);

    if(!response.ok){
        throw new Error("Couldn't Fetch Weather Data");
    }

    return await response.json();
}
function info(data){
    console.log(data);
    const {name:city,
           main:{temp,humidity},
           weather:[{description,id}] }=data;
    
    card.textContent = "";
    card.style.display = "flex";


    const citydisplay = document.createElement("h1")
    const tempdisplay = document.createElement("p")
    const humiditydisplay = document.createElement("p")
    const desdisplay = document.createElement("p")
    const emoji = document.createElement("p")

    citydisplay.textContent = city;
    tempdisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humiditydisplay.textContent = `Humidity: ${humidity}%`;
    desdisplay.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    emoji.textContent = displayemoji(id);



    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    desdisplay.classList.add("desdisplay");
    emoji.classList.add("emoji");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(desdisplay);
    card.appendChild(emoji);
}
function displayemoji(weatherId){
    switch(true){
        case (weatherId >=  200 && weatherId < 300):
            return "⛈️";
        case (weatherId >=  300 && weatherId < 400):
            return "🌧️";
        case (weatherId >=  500 && weatherId < 600):
            return "🌧️";
        case (weatherId >=  600 && weatherId < 700):
            return "❄️";
        case (weatherId >=  700 && weatherId < 800):
            return "⛅";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >=  801 && weatherId < 810):
            return "☁️";
        default :
            return "❓";
    }
}
function displayerror(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("error") 

    card.textContent ="";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}
