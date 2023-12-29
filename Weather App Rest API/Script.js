   
   async function fetchWeather(){
      
      var city=document.getElementById("city").value;
      var xhr=new XMLHttpRequest();
      xhr.open("GET",`http://api.weatherapi.com/v1/current.json?key=d84d5cb791cf4db694b131732233011&q=${city}&aqi=no`);
      xhr.send();
      xhr.onreadystatechange=()=>{
         if (xhr.readyState==4 && xhr.status==200) {
            var weather=JSON.parse(xhr.responseText);
            console.log(weather);

            document.getElementById("location").innerHTML=weather.location.name+", "+weather.location.region+", "+weather.location.country;

            document.getElementById("temperature").innerHTML=weather.current.temp_c+"&deg;C | "+weather.current.temp_f+"&deg;F"

            document.getElementById("icon").setAttribute("src","http:"+weather.current.condition.icon);

            document.getElementById("condition").innerHTML=weather.current.condition.text;
         }
      }
   }
