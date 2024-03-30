
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-43.5320, 172.6366], 11);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ok3u6000a01q55ud0aui4/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-43.5307, 172.6232]).addTo(map)
	.bindPopup('The Christchurch Botanic Gardens is a relaxing and peaceful space with interesting exotic flora that personally feels refreshing in the CBD.');

const marker2 = L.marker([-43.48859, 172.5472]).addTo(map)
	.bindPopup('The International Antarctic Centre introduced me to Antarctica and sparked my interest in the isolated continent.');

const marker3 = L.marker([-43.4383, 172.7017]).addTo(map)
	.bindPopup('The Bottle Lake Forest bike tracks served as my introduction into BMX biking.');

const marker4 = L.marker([-43.6027, 172.7170]).addTo(map)
	.bindPopup('Lyttleton has a peaceful and historic character that resonates with me.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'yellow',
		fillOpacity: 0.2,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-43.5873, 172.8087],
		[-43.5648, 172.7566],
		[-43.5713, 172.7177],
		[-43.5987, 172.6323],
		[-43.6359, 172.6240]
	],{
		color: 'blue',
		fillColor: '#f03',
	}).addTo(map).bindPopup('The Port Hills introduced me to outdoor rock climbing and became an area I frequented due to the myriad of activities and serene view it offers within the city limits.').openPopup();




// END OF DOCUMENT