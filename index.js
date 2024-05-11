//https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=4269652c5e1b6a66a34f9d3d16ecc098&lang=vi&units=metric
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const temperature = document.querySelector('.temperature');
const searchInput = document.getElementById('search-input');

// Promise
// await async
// them sua xoa API
// data bat dong bo
//pending
//fullfil
//reject

// try catch


const fetchAPI = async () => {
    const responsive = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=4269652c5e1b6a66a34f9d3d16ecc098&lang=vi&units=metric`)
    console.log('Responsive = ', responsive);
    const data = await responsive.json()
    console.log(data);

    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp
    weatherState.innerHTML = data.sys.country
}

// fetchAPI()

searchInput.addEventListener('change', async (event) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=4269652c5e1b6a66a34f9d3d16ecc098&lang=vi&units=metric`)
    const data = await res.json()

    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp
    weatherState.innerHTML = data.sys.country
})