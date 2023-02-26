
// fetch data
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const reaction = document.getElementById('reaction');
    reaction.innerHTML = `
      <img src="${data[0].icon}" alt="">
      <h3>${data[0].category}</h3>
      <p><span>${data[0].score}</span> / 100 </p>
        `
    const memory = document.getElementById('memory');
    memory.innerHTML = `
      <img src="${data[1].icon}" alt="">
      <h3>${data[1].category}</h3>
      <p><span>${data[1].score}</span> / 100 </p>
    `
    const verbal = document.getElementById('verbal');
    verbal.innerHTML = `
      <img src="${data[2].icon}" alt="">
      <h3>${data[2].category}</h3>
      <p><span>${data[2].score}</span> / 100 </p>
    `
    const visual = document.getElementById('visual');
    visual.innerHTML = `
      <img src="${data[3].icon}" alt="">
      <h3>${data[3].category}</h3>
      <p><span>${data[3].score}</span> / 100 </p>
    `
    });

// counter
let counter = document.getElementById('fin-result');
let amount=0;
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