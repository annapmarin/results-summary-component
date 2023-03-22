// fetch data
const getData = async () => {
  const response = await fetch('data.json');
  const data = await response.json();

  console.log(document.getElementById(data[0].category.toLowerCase()));
  for (let i = 0; i < data.length; i++) {
      document.getElementById(data[i].category.toLowerCase()).innerHTML += `
        <img src="${data[i].icon}" alt="">
        <h3>${data[i].category}</h3>
        <p><span>${data[i].score}</span> / 100 </p
        `
    }
  }

getData();

// counter
let counter = document.getElementById('fin-result');
let amount = 0;
let time = setInterval(() => {
  counter.textContent = amount+=1
  if (amount === 76) {
    clearInterval(time);
  }
}, 10);

// refresh button
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
  location.reload();
})