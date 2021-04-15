const doc = document,
aragatsotn = doc.querySelector("#aragatsotn"),
armavir = doc.querySelector("#armavir"),
shirak = doc.querySelector("#shirak"),
tavush = doc.querySelector("#tavush"),
ararat = doc.querySelector("#ararat"),
gegharkunik = doc.querySelector("#gegharkunik"),
kotayk = doc.querySelector("#kotayk"),
lori = doc.querySelector("#lori"),
yerevan = doc.querySelector("#yerevan"),
syunik = doc.querySelector("#syunik"),
vayotsdzor = doc.querySelector("#vayotsdzor");
let span = doc.createElement("soan");
doc.body.append(span);
span.setAttribute("id","span")
span.innerHTML = "Hello";

let arr = [aragatsotn,armavir,shirak,ararat,gegharkunik,kotayk,yerevan,syunik];
for(let i of arr){
    i.addEventListener('mouseenter',req);
}
function req(e){
    let name = e.target.id;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=1fefc30ef56a1ed2d12425bbfb70fbba`)
    .then(response => response.json())
    .then(data =>{
        let a = data.weather[0].description;
        let b = "Humidity: " + data.main.humidity + "%";
        let c =  data.main.temp + "°C";
        let d = "Wind speed: " + data.wind.speed + "km/h";
        span.innerHTML = name + '-um ' + a + "<br>" + b+ "<br>" + c + "<br>" + d;
        span.style.opacity = "1";
    }      
        )
    .catch(err => console.log(err));
}
tavush.addEventListener("mouseenter",function(e){
    let name = e.target.id;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=ijevan&units=metric&appid=1fefc30ef56a1ed2d12425bbfb70fbba`)
    .then(response => response.json())
    .then(data =>{
        let a = data.weather[0].description;
        let b = "Humidity: " + data.main.humidity + "%";
        let c =  data.main.temp + "°C";
        let d = "Wind speed: " + data.wind.speed + "km/h";
        span.innerHTML = name + '-um ' + a + "<br>" + b+ "<br>" + c + "<br>" + d;
        span.style.opacity = "1";
    }      
        )
    .catch(err => console.log(err));
    });
lori.addEventListener("mouseenter",function(e){
    let name = e.target.id;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=alaverdi&units=metric&appid=1fefc30ef56a1ed2d12425bbfb70fbba`)
    .then(response => response.json())
    .then(data =>{
        let a = data.weather[0].description;
        let b = "Humidity: " + data.main.humidity + "%";
        let c =  data.main.temp + "°C";
        let d = "Wind speed: " + data.wind.speed + "km/h";
        span.innerHTML = name + '-um ' + a + "<br>" + b+ "<br>" + c + "<br>" + d;
        span.style.opacity = "1";
    }      
        )
    .catch(err => console.log(err));
    });
vayotsdzor.addEventListener("mouseenter",function(e){
    let name = e.target.id;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=vayk&units=metric&appid=1fefc30ef56a1ed2d12425bbfb70fbba`)
    .then(response => response.json())
    .then(data =>{
        let a = data.weather[0].description;
        let b = "Humidity: " + data.main.humidity + "%";
        let c =  data.main.temp + "°C";
        let d = "Wind speed: " + data.wind.speed + "km/h";
        span.innerHTML = name + '-um ' + a + "<br>" + b+ "<br>" + c + "<br>" + d;
        span.style.opacity = "1";
    }      
        )
    .catch(err => console.log(err));
    });