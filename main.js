const key1 = `b38cabfbea9a617d8ae754e1d140b693`;
const showweather = city=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key1}&units=metric`;
  fetch(url)
  .then(res => res.json())
  .then(data => showdata(data))
}
const showdata = data => {
    console.log(data.weather[0].icon);
    const tempElement = document.getElementById('temp');
    const leadElement = document.getElementById('lead');
    const cityElement = document.getElementById('city');
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgElement = document.getElementById('img');
    if (tempElement) {
      tempElement.innerText = data.main.temp;
    }
    if (leadElement) {
      leadElement.innerText = data.weather[0].description;
    }
    if (cityElement) {
        cityElement.innerText = data.name;
    }
    if (imgElement) {

        imgElement.setAttribute('src', url);
    }
  };

  document.getElementById('btnsecrch').addEventListener('click', function (){
     const search = document.getElementById('search').value;
     showweather(search);
     
  })
  


showweather('Jassore');


