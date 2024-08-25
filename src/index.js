function updateTime() {
  let today = moment().format("[Today is] dddd, MMMM D, YYYY h:mm a");
  let todayElement = document.querySelector("#current-date");
  todayElement.innerHTML = today;
}

setInterval(updateTime, 1000);
