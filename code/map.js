// Initialise map with centre at centrepoint of South America with zoom level 3

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 15, lng: 104},
    disableDefaultUI: true,
    zoomControl: true
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var locationsAmerica = [

	['Santa Marta',11.2404,-74.211,1,'#santamarta'],
	['Minca',11.1428,-74.1167,2,'#minca'],
	['Bogota',4.711,-74.0721,3,'#bogota'],
	['Quito',-0.1807,-78.4678,4,'#quito'],
	['Cotopaxi',-0.6838,-78.4372,5,'#cotopaxi'],
	['Mindo',-0.0487,-78.7752,6,'#mindo'],
	['Banos',-1.3928,-78.4269,7,'#banos'],
	['Montanita',-1.8268,-80.753,8,'#montanita'],
	['Isla la Plata',-1.2742,-81.0674,9,'#islalaplata'],
	['Playa los Frailes',-1.4922,-80.7926,10,'#playalosfrailes'],
	['Lima',-12.0464,-77.0428,11,'#lima'],
	['Cusco',-13.532,-71.9675,12,'#cusco'],
	['Machu Picchu',-13.1631,-72.545,13,'#machupicchu'],
	['Lake Titicaca',-16.0172,-69.178,14,'#titicaca'],
	['La Paz',-16.4897,-68.1193,15,'#lapaz'],
	['Rurrenabaque',-14.4296,-67.5351,16,'#rurrenabaque'],
	['Coroico',-16.1942,-67.7288,17,'#coroico'],
	['Sucre and Potosi',-19.0353,-65.2592,18,'#sucre-potosi'],
	['Uyuni',-20.4604,-66.8261,19,'#uyuni'],
	['Tupiza',-21.4382,-65.7193,20,'#tupiza'],
	['Jujuy',-23.5769,-65.3934,21,'#jujuy'],
	['Buenos Aires',-34.6037,-58.3816,22,'#buenosaires'],
	['Iguazu',-25.6953,-54.4367,23,'#iguazu'],
	['Rio de Janeiro',-22.9068,-43.1729,24,'#rio'],
	['Koh Tao',10.0956,99.8404,25,'#kohtao'],
	['Bangkok',13.7563,100.5018,26,'#bangkok'],
	['Khao Yai',14.4392,101.3725,27,'#khaoyai'],
	['Siem Reap',13.3573,103.854,28,'#siemreap'],
	['Kratie',12.4897,106.0288,29,'#kratie'],
	['Chau Doc',10.7022,105.1087,30,'#chaudoc'],
	['Saigon',10.8231,106.6297,31,'#saigon-hoian'],
	['Hoi An',15.8801,108.338,32,'#saigon-hoian'],
	['Hué',16.4637,107.5909,33,'#last']
	
   ];

// Add markers to the map.
function setMarkers(map) {
  
// Initialise infowindown instance
  var infowindow = new google.maps.InfoWindow({
  	content: locationsAmerica
  	});
  
  
// Loop through each marker location in the array
  for (var i = 0; i < locationsAmerica.length; i++) {
    var location = locationsAmerica[i];
    
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      icon: 'https://simonjosling.com/assets/images/pinvector.svg',
      title: location[0],
      zIndex: location[3],
      url: location[4]
    });
    
// Add event listener for marker click

   google.maps.event.addListener( marker, 'click', function() {
// Set infowindow content to string containing URL and title
    	infowindow.setContent( 
    		'<a href="' + this.url + '">' + this.title + '</a>'
    	);
// Open infowindow
    	infowindow.open( map, this );
    });
// Add DOM listener for buttons for changing map centre and zoom level
    google.maps.event.addDomListener(document.getElementById('btnAsia'), 'click', function () {
    	map.setCenter(new google.maps.LatLng(15,104));
    	map.setZoom(5);
    });
    google.maps.event.addDomListener(document.getElementById('btnAmerica'), 'click', function () {
    	map.setCenter(new google.maps.LatLng(-10,-60));
    	map.setZoom(3);
    });
  }
}