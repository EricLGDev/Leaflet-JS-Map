// map object
const myMap = {
    coordinates: [],
    map: {},

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

        
    }
}