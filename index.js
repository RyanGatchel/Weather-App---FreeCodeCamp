$(document).ready(function() { //start of weather app
  
  $.ajax({
    type: 'GET',
    url: "https://api.wunderground.com/api/a3dddaa658e7e8a8/conditions/geolookup/q/autoip.json", //https://api.wunderground.com/weather/api
    success: function(weather) { //start of actual app
      $(".city").text(weather.location.city); //fetches location and shows it
      $(".temp").text(weather.current_observation.temp_f + ' ℉'); // fetches temp ℉ and shows it
  var x = (weather.current_observation.temp_c); //temp in ℃
  var y = (weather.current_observation.temp_f); //temp in ℉
     $('.btnC').on("click",function(c) { // changes to ℃ when clicked 
     
       if(c.target) {
        $(".temp").text(x + ' ℃');
       }
     }); //end
      
      $('.btnF').on("click",function(f) { // changes to ℉ when clicked
       
       if(f.target) {
         $(".temp").text(y + ' ℉');
       }
     }); //end
      
      if ( x || y > 32 || 0) { //sunny warm background when over 32 || 0 
       $('body').css('background', 'url("http://www.anoleannals.org/wp-content/uploads/2013/03/IMG_0829x.jpg") no-repeat');
     } else if (x || y < 32 || 0 ) { // else it will be a cold background
        $('body').css('background', 'url("https://www.nasa.gov/sites/default/files/thumbnails/image/cxq8xp_xcaauqs4.jpg") no-repeat');
     }
    },
     });
    });
