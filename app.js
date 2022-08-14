// map object
const myMap = {
    coordinates: [],
    map: {},
    markers: {},
    businesses: [],

    //Build map
    buildMap() {
        this.map = L.map('map', {
            center: this.coordinates,
            zoom: 12,
        });

        //add openstreetmap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: '15',
        }).addTo(this.map);

        // create and add geolocation marker
        const marker = L.marker(this.coordinates)
        marker
        .addTo(this.map)
        .bindPopup('<p1><b>You are here</b><br></p1>')
        .openPopup();
    },

    //add business markers
    addMarkers(){

    }
}

//Geolocation API = Get User Coordinates
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}