
//cordova+ ---> mobile apk 

const xhr=new XMLHttpRequest();



xhr.open('get','https://api.open-meteo.com/v1/forecast?latitude=34.68&longitude=-1.91&daily=weather_code,sunset,temperature_2m_max,apparent_temperature_min,apparent_temperature_max,temperature_2m_min,sunrise,precipitation_sum,rain_sum&hourly=temperature_2m,weather_code,apparent_temperature,precipitation_probability,precipitation,rain,relative_humidity_2m,visibility,wind_speed_10m&current=is_day,weather_code,apparent_temperature,temperature_2m,precipitation,rain,relative_humidity_2m&timezone=auto')  
xhr.send();

xhr .onload=function(){
    if(xhr.status == 200){  
    let data=JSON.parse(xhr.response);
    console.log(data);

    document.getElementById('now').innerHTML+=Math.round(data.current.temperature_2m);//Math.round--> pour eface la vergule.
    //document.getElementById('time').innerHTML=Math.round(data.daily.time);
    document.getElementById('max1').innerHTML=Math.round(data.daily.temperature_2m_max[0])+"°";
    document.getElementById('min1').innerHTML=Math.round(data.daily.temperature_2m_min[0])+"°";
    document.getElementById('feels like').innerHTML=Math.round(data.current.apparent_temperature)+"°";
    //document.getElementById('img_header').src=imgUrl;
    //document.querySelector(".container header .right img").src =imgUrl

 
  let htmlcontent = "";
  let temperat = [];
  let humid = [];
  let tim = [];
  for (let i = 0; i <= 24; i++) {
    temperat[i] = Math.round(data.hourly.temperature_2m[i]);
    humid[i] = Math.round(data.hourly.precipitation_probability[i]);
    tim[i] = data.hourly.time[i].split("T")[1];
    
    
    htmlcontent +=
      "<div>" +
      "<span >" +
      tim[i] +
      "</span>" +
      '<i class="fa fa-sun"></i>' +
      "<span>" +
      temperat[i] +
      "°</span><div>" +
      '<i class="fa fa-droplet"></i>' + 
      "<span>" +
      humid[i] +
      "% </span>" +
      "</div>" +
      "</div>";
  } document.getElementById("cont1").innerHTML = htmlcontent;



  let tab="";
  let jourr=["lundi ","mardi","mercredi","jeudi ","vendredi","samedi","dimanch"];
  let precipitation=[]
  let tim_max=[];
  let tim_min=[];
  let dday=document.querySelectorAll(".one-day");
  let ddday =(dday[0].querySelector('p'))
  
  for(let i=0;i<7;i++){
    //console.log(dday[i].querySelector('div span'))
    precipitation[i]=Math.round(data.daily.precipitation_sum[i]);
    tim_max[i]=Math.round(data.daily.temperature_2m_max[i]);
    tim_min[i]=Math.round(data.daily.temperature_2m_min[i]);
  
  


    //      *** afficher lers jours***

    document.getElementById('day1').innerHTML=jourr[0]; 
    document.getElementById('day2').innerHTML=jourr[1];
    document.getElementById('day3').innerHTML=jourr[2];

    document.getElementById('day4').innerHTML=jourr[3];
    document.getElementById('day5').innerHTML=jourr[4];
    document.getElementById('day6').innerHTML=jourr[5];
    document.getElementById('day7').innerHTML=jourr[6];
  


    //          ***percipitaion ***
    document.getElementById('percipitation1').innerHTML=Math.round( data.daily. precipitation_sum  [0]  )
    document.getElementById('per2').innerHTML=Math.round( data.daily. precipitation_sum  [1]  )
    document.getElementById('per3').innerHTML=Math.round( data.daily. precipitation_sum  [2]  )
    document.getElementById('per3').innerHTML=Math.round( data.daily. precipitation_sum  [3]  )
    document.getElementById('per4').innerHTML=Math.round( data.daily. precipitation_sum  [4]  )
    document.getElementById('per5').innerHTML=Math.round( data.daily. precipitation_sum  [5]  )
    document.getElementById('per6').innerHTML=Math.round( data.daily. precipitation_sum  [6]  )
// -----------------affichage du temperature max  chaque jojurs---------------------
    document.getElementById('permax1').innerHTML=Math.round( data.daily.  apparent_temperature_max[0])
    document.getElementById('permax2').innerHTML=Math.round( data.daily.  apparent_temperature_max[1])
    document.getElementById('permax3').innerHTML=Math.round( data.daily.  apparent_temperature_max[2])
    document.getElementById('permax4').innerHTML=Math.round( data.daily.  apparent_temperature_max[3])
    document.getElementById('permax5').innerHTML=Math.round( data.daily.  apparent_temperature_max[4])
    document.getElementById('permax6').innerHTML=Math.round( data.daily.  apparent_temperature_max[5])
    document.getElementById('permax7').innerHTML=Math.round( data.daily.  apparent_temperature_max[6])

    // -----------------affichage du temperature min  chaque jojurs---------------------//

    document.getElementById('permin1').innerHTML=Math.round( data.daily.  apparent_temperature_min[0])
    document.getElementById('permin2').innerHTML=Math.round( data.daily.  apparent_temperature_min[1])
    document.getElementById('permin3').innerHTML=Math.round( data.daily.  apparent_temperature_min[2])
    document.getElementById('permin4').innerHTML=Math.round( data.daily.  apparent_temperature_min[3])
    document.getElementById('permin5').innerHTML=Math.round( data.daily.  apparent_temperature_min[4])
    document.getElementById('permin6').innerHTML=Math.round( data.daily.  apparent_temperature_min[5])
    document.getElementById('permin7').innerHTML=Math.round( data.daily.  apparent_temperature_min[6])
  }
    // -----------------affichage sunrise--------------------//

    let sunrise =data.daily. sunrise[0].split("T")[1]/*.slice(0,5)*/;
    console.log(sunrise)
    document.getElementById('sunrise1').innerHTML=sunrise;



    // -----------------affichage sunset-------------------//

    let sunset =data.daily. sunset[0].split("T")[1]/*.slice(0,5)*/;
    console.log(sunset)

    document.getElementById('sunset1').innerHTML=sunset;

    // ----------------partie des icones------------------//


  //   function getWeatherIcon(weatherCode, isDay = true) {
  //     switch (weatherCode) {
  //         case 0:
  //             return isDay ? "fa-sun" : "fa-moon"; // ☀️ Soleil / 🌙 Lune
  //         case 1:
  //         case 2:
  //             return isDay ? "fa-cloud-sun" : "fa-cloud-moon"; // ⛅ Nuageux (jour/nuit)
  //         case 3:
  //             return "fa-cloud"; // ☁️ Couvert
  //         case 45:
  //         case 48:
  //             return "fa-smog"; // 🌫️ Brouillard
  //         case 51:
  //         case 53:
  //         case 55:
  //             return "fa-cloud-rain"; // 🌧️ Bruine
  //         case 56:
  //         case 57:
  //             return "fa-cloud-meatball"; // 🌨️ Bruine verglaçante
  //         case 61:
  //         case 63:
  //         case 65:
  //             return "fa-umbrella"; // 🌧️ Pluie
  //         case 66:
  //         case 67:
  //             return "fa-icicles"; // 🌨️ Pluie verglaçante
  //         case 71:
  //         case 73:
  //         case 75:
  //             return "fa-snowflake"; // ❄️ Neige
  //         case 77:
  //             return "fa-snowman"; // 🌨️ Neige en grains
  //         case 80:
  //         case 81:
  //         case 82:
  //             return "fa-cloud-showers-heavy"; // ⛈️ Averses
  //         case 85:
  //         case 86:
  //             return "fa-snowplow"; // ❄️ Averses de neige
  //         case 95:
  //         case 96:
  //         case 99:
  //             return "fa-bolt"; // ⛈️ Orage
  //         default:
  //             return "fa-question"; // ❓ Inconnu
  //     }
  // }
  


  }



    afficherDateEtHeure();
}
function afficherDateEtHeure() {
    let maintenant = new Date();
    
    // Obtenir le jour de la semaine 
    let options = { weekday: 'long' };
    let jour = maintenant.toLocaleDateString('fr-FR', options);

    // Obtenir l'heure actuelle format HH:mm
    let heure = maintenant.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit'});

    // Afficher 
    document.getElementById("jours").innerHTML =  jour;
    document.getElementById("timee").innerHTML =   heure;
    

}


xhr.onerror=function(){
    
    console.log(" erreur au niveau de API .")
}