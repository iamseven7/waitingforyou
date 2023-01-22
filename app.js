// Display the result
counter__days__number = document.querySelector('.counter__days__number');
counter__hours__number = document.querySelector('.counter__hours__number');
counter__minutes__number = document.querySelector('.counter__minutes__number');
counter__seconds__number = document.querySelector('.counter__seconds__number');

function updateCounter() {
  // Get the current time
  const now = new Date();
  // Get the time of the event
  const eventDate = new Date('April 1, 2023 10:00:00');
  // Get the difference between the two dates
  const currentTime = now.getTime();
  const eventTime = eventDate.getTime();
  const remTime = eventTime - currentTime;

  // Calculate the days, hours, minutes, and seconds
  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  // Display the result
  counter__days__number.textContent = d;
  counter__hours__number.textContent = h % 24;
  counter__minutes__number.textContent = m % 60;
  counter__seconds__number.textContent = s % 60;
}

updateCounter();
// Run the updateCounter() function once every second
setInterval(updateCounter, 1000);