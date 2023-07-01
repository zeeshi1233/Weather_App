var img=document.querySelector(".detail img");

var tem=document.querySelector(".tem .temperatur");
var humidity=document.querySelector(".humidity");
var wind=document.querySelector(".wind");
var des=document.querySelector(".des");
var btn=document.getElementById("btn1");
var api_key='bad64473ba72f2ed9a23c7bfc85a393a'
var copy;
function weather() {
    var city=document.getElementById("city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(function (response) {
return response.json()
    })
    .then(data=>{
        if(data.cod!=='404'){
          document.getElementById("no").style.display="none";
          document.getElementById("tem").style.display="flex";
          document.getElementById("humi").style.display="flex";
          console.log(data);
            switch(data.weather[0].main){
                case "Clouds":
                    img.src="img/cloud.png"
                    break;
case "Rain":
    img.src="img/rain.png"
    break;
    case "Haze":
        img.src="img/haze.png"
        break;
        case "Clear":
            img.src="img/clear.png"
            break;
            case "Snow":
                img.src="img/snow.png"
                break;
            }
            console.log(data.main.temp);
            tem.innerHTML=`${data.main.temp}°C`
            humidity.innerHTML=`${data.main.humidity}%`
            wind.innerHTML=`${data.wind.speed}KM/h`
            des.innerHTML=`${data.weather[0].description}`
        }
        else{
      img.src="img/nofound.png";
      document.getElementById("no").style.display="block";
      document.getElementById("humi").style.display="none";
      document.getElementById("tem").style.display="none";
       
    }
        })
        .catch(function (error) {
          
            console.log(error.data);
        })
        
        
        

        var show="";
        
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`)
        .then(four=>four.json())
        .then(itm=>{
          console.log(itm);
itm.list.forEach(elem => {
show+=`
<div id="divs"  class="col-md-4 col-sm-6 shadow-lg p-3 mb-5 border border border-2" style="border-radius:20px;">
<div id="update">
  <div class="d-flex align-items-baseline">
    <i class="fa-solid fa-location-dot me-2"></i>
    <p class="name">${itm.city.name}</p>
  </div>
  <div>
    <p class="time">${moment(elem.dt_txt).format("ddd ha")}</p>
  </div>
</div>
<div id="weak-img" class="img-weak">
  <img  src="https://openweathermap.org/img/wn/${elem.weather[0].icon}@4x.png" class="" alt="" srcset="">  
</div>
<div class="weak-tem">
  <p class="weak-temperatur">${elem.main.temp}°C</p>
  <p class="weak-des">${elem.weather[0].description}°C</p>
</div>
<div class="weak-cont">
  <div>
    <i>Humidity</i>
    <p class="weak-humidity">${elem.main.humidity}%</p>
  </div>
  <div>
    <i>Wind</i>
    <p class="weak-wind">${elem.wind.speed}KM/h</p>
  </div>
</div>
</div>
 `;


 document.getElementById("real").style.display="block"
document.getElementById("show").style.display="flex"
document.getElementById("show").innerHTML=show
// var divs=document.querySelectorAll("#divs");
// if (divs.length>6) {
//  copy=Array.from(divs)
// for (let i=6;i<divs.length;i++) {
//   divs[i].style.display="none";
// }
// }
});
// btn.addEventListener("click",function(){
// for(let i=6;i<copy.length;i++){
// if (copy[i].style.display="none") {
//     copy[i].style.display="block"
// }
// else{
//     copy[i].style.display="none"
// }
// }
// });
})
}


