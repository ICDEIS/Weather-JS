window.addEventListener('DOMContentLoaded', () => {
   const api = {
      key: 'e99ef61faf29059c5fb7baf956665613',
      baseUrl: "https://api.openweathermap.org/data/2.5/"   }; 
   const searchInp = document.querySelector('#search-inp');

   searchInp.addEventListener('keypress', setQuery)

   function setQuery(e) {
      if(e.keyCode == 13) {
         getResult(searchInp.value)
         console.log(searchInp.value)
      }
   }
   function getResult(query) {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
         .then(weather => weather.json())
         .then(displayResult)
   }     
   function displayResult(weather) {
      console.log(weather);
      const place = document.getElementsByClassName('place-name')[0],
            date = document.getElementsByClassName('date')[0],
            temprature = document.getElementsByClassName('temprature')[0],
            placeStatus = document.getElementsByClassName('place-status')[0],
            minTemp = document.getElementsByClassName('min-temp')[0],
            maxTemp = document.getElementsByClassName('max-temp')[0];

      place.innerHTML = `${weather.name}, ${weather.sys.country}`
      const realTime = new Date();
      date.innerHTML = getDate(realTime)

      let floorMainDegree = Math.floor(weather.main.temp)
      temprature.innerHTML = `${Math.round(weather.main.temp)}`

      placeStatus.innerHTML = `${weather.weather[0].main}`

      let floorMinTemp = Math.floor(weather.main.temp_min - 3.5)
      let floorMaxTemp = Math.floor(weather.main.temp_max + 2.5)
      minTemp.innerHTML = floorMinTemp
      maxTemp.innerHTML = floorMaxTemp

      console.log(minTemp)
   }

   function getDate(now) {
      const months = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let weekDay = weekDays[now.getDay()]
      let month = months[now.getMonth()]
      let date = now.getDate()
      return `${weekDay}, ${month} ${date}`
   }

})

