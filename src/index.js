const content = document.querySelector('#content');
const key = '286ad37fbe1d2e8922f0ff8a0e3c30f4';
const result = document.querySelector('#result');

const submit = document.querySelector('#submit');
submit.addEventListener('click', ()=>{
    let city = document.querySelector('#input');
    console.log(city.value);
    let id = city.value;
    city.value = '';
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=${key}`
    fetch(`${link}`)
    .then(function(r){
        return r.json();
    })
    .then(function(r){
        console.log(r.main.temp);
        let temp = Math.round(r.main.temp -273);
        result.textContent = 'Result: ' + temp + 'deg Celcius';
    })
});







content.appendChild(div)




