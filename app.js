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

async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq33uy1BQlUsne2VPSeel3AJRqwTFWi53cFStWIN1QHndQ='
		}
	}
	let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
	let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}