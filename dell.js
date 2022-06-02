let realDate = new Date()

function getSana(d) {
   const months = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   let weekly = week[d.getDay()]
   let monthly = months[d.getMonth()]
   let date = d.getDate()

   console.log(weekly)
   console.log(monthly)

   return `${weekly}, ${monthly} ${date}`

}
getSana(realDate)
console.log(Date())